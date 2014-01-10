/*
*	Script: PL_SafeFrame.js
*	Version: 1.0.9
*	Created: 2013-04-24 17:29
*/

try{
	if(((window.$sf && $sf.ext) || (window.Y && Y.SandBox && Y.SandBox.vendor)) && !(window["$WLXRmAd"])) {
		ebO.ifrm=0;
		window.SafeFrameObj = {
			uid: ebAdID + "_" + ebRand,
			iabSF: window.$sf && $sf.ext,
			yahooSF: window.Y && Y.SandBox && Y.SandBox.vendor,
			SFapi: null,
			oldClient: !ebO.extensionHooks,
			newClient: !!ebO.extensionHooks,
			handleException: function(s) {

			},
			properties: undefined,
			push: false,
			awaitingExpandComplete: false,
			panels: { banner: { w:ebO.w, h:ebO.h } },
			ignoreExpandWithoutPanelName: !ebO.extensionHooks,
			currentPanel: undefined,
			adObj: null,
			newClientRecalc: null,
			newClientCC: null,
			adjustPanelPos: function() {
				if(SafeFrameObj.oldClient){
					SafeFrameObj.adObj.ad.panels[SafeFrameObj.currentPanel].panelDiv.style.left="0px";
					SafeFrameObj.adObj.ad.panels[SafeFrameObj.currentPanel].panelDiv.style.top="0px";
				}
			},
			fixSafariRedraw:function() {
				if(SafeFrameObj.newClientCC && SafeFrameObj.newClientCC.fixSafariRedrawIssue) {
					var s = "SafeFrameObj.newClientCC.fixSafariRedrawIssue.apply(SafeFrameObj.newClientCC,[])";
					setTimeout(s,10);setTimeout(s,100);setTimeout(s,250);setTimeout(s,1000);
				}
			},
			setPanel: function(param) {
				if(SafeFrameObj.oldClient) {
					SafeFrameObj.currentPanel = param.toLowerCase();
					SafeFrameObj.push = SafeFrameObj.adObj.ad.panels[SafeFrameObj.currentPanel].fPushDown;
				}
				else if(param.dispatcher._adConfig.uid == SafeFrameObj.uid) {
					SafeFrameObj.currentPanel = param.eventData.props.panel.name;
					SafeFrameObj.push = param.dispatcher.isPushDownPanel;

					if(!param.dispatcher.orig_calculatePositionHelper) {
						param.dispatcher.orig_calculatePositionHelper = param.dispatcher.calculatePositionHelper;
						SafeFrameObj.newClientRecalc = param.dispatcher.recalculatePanelPosition;
						SafeFrameObj.newClientCC = param.dispatcher;

						param.dispatcher.calculatePositionHelper = function(){
							if(this._panelExpanded)
								return {Left:0,Top:0};
							else
								return this.orig_calculatePositionHelper.apply(this,arguments);
						}
					}
				}
			},
			init: function(obj) {
				SafeFrameObj.properties = obj;


				if(SafeFrameObj.initOverride)
					SafeFrameObj.initOverride(SafeFrameObj);

				try{SafeFrameObj.SFapi.register(SafeFrameObj.properties.width, SafeFrameObj.properties.height, SafeFrameObj.notify);}
				catch(e){SafeFrameObj.handleException(e.message);}
			},
			expand: function(panelName, params) {
				var args = arguments.length;
				var panel = SafeFrameObj.currentPanel;
				if(args>0)
					panel = panelName.toLowerCase();
				else if(SafeFrameObj.ignoreExpandWithoutPanelName)
					return;
				if(!panel || !SafeFrameObj.adObj)return;

				var geom = SafeFrameObj.SFapi.geom();
				SafeFrameObj.panels[panel].expanded = true;
				SafeFrameObj.adjustPanelPos();
				var pan = SafeFrameObj.panels[panel];
				var ban = SafeFrameObj.panels.banner;
				var xDiff = pan.w - ban.w;
				var yDiff = pan.h - ban.h;
				if(xDiff == 0 && yDiff == 0)
					return;

				var obj = {push:SafeFrameObj.push};
				if(args>1)
					obj = params;
				else {
					if(xDiff > 0) {
						if(pan.x < 0) {
							obj.l = Math.abs(pan.x);
							if(xDiff > obj.l)
								obj.r = xDiff - obj.l;
						}
						else obj.r = pan.x + xDiff;
					}
					if(yDiff > 0) {
						if(pan.y < 0) {
							obj.t = Math.abs(pan.y);
							if(yDiff > obj.t)
								obj.b = yDiff - obj.t;
						}
						else obj.b = pan.y + yDiff;
					}
				}
				var dX = xDiff > 0 ? (pan.x < 0 ? -xDiff:xDiff) : 0;
				var dY = yDiff > 0 ? (pan.y < 0 ? -yDiff:yDiff) : 0;
				SafeFrameObj.awaitingExpandComplete = true;
				if(SafeFrameObj.iabSF) {
					try{SafeFrameObj.SFapi.expand(obj);}catch(e){SafeFrameObj.handleException(e.message);}
				}
				else if(SafeFrameObj.yahooSF) {
					try{SafeFrameObj.SFapi.expand(dX, dY, SafeFrameObj.push);}catch(e){SafeFrameObj.handleException(e.message);}
				}
				SafeFrameObj.fixSafariRedraw();
			},
			collapse: function(panelName) {
				SafeFrameObj.awaitingExpandComplete = false;
				if(SafeFrameObj.currentPanel)
					SafeFrameObj.panels[SafeFrameObj.currentPanel].expanded = false;

				try{SafeFrameObj.SFapi.collapse();}catch(e){SafeFrameObj.handleException(e.message);}
				SafeFrameObj.fixSafariRedraw();
			},
			notify: function(message, info) {
				var p = SafeFrameObj.currentPanel;

				if(message=="expanded" || message=="failed") {
					SafeFrameObj.awaitingExpandComplete = false;
					if(message=="expanded")
						SafeFrameObj.adjustPanelPos();
				}

				if(p && SafeFrameObj.panels[p].expanded) {
					if(message == "collapsed" || message == "failed") {
						SafeFrameObj.panels[p].expanded = false;
						var func = SafeFrameObj.newClient ? "_hidePanel" : "hidePanel";
						SafeFrameObj.adObj && !SafeFrameObj.adObj.isSEAd() && SafeFrameObj.adObj[func](p,true);
					}
				}

				if(SafeFrameObj.oldClient && message=="collapsed" && SafeFrameObj.adObj.isSEAd()) {
					SafeFrameObj.adObj.ad.panels[SafeFrameObj.currentPanel].doOnResize(0,0);
				}
				if(SafeFrameObj.newClient && message=="collapsed" && SafeFrameObj.newClientRecalc) {
					SafeFrameObj.newClientRecalc.apply(SafeFrameObj.newClientCC,[]);
				}
			}
		}
		SafeFrameObj.SFapi = SafeFrameObj.iabSF || SafeFrameObj.yahooSF;

		window["$WLXRmAd"] = SafeFrameObj;
		if(SafeFrameObj.oldClient) {
			var mmRand = Math.floor(Math.random() * 99999999999);
			var mmAdId = ebO.ai;
			window["mmOriginalEventHandlers_" + mmRand] = window.ebCCustomEventHandlers ? new ebCCustomEventHandlers() : undefined;
			window.mmCustomEventHandlers = function() {
				if(SafeFrameObj){
					if(gEbBC && gEbBC.isIE() && gEbBC.getVersion()>=9) {
						subscribeToEvent(window, "load", ebOnloadHandler);
					}
				}
				var oEH = window["mmOriginalEventHandlers_" + mmRand];
				this.onClientScriptsLoaded=		function(objName) {
					if(SafeFrameObj){
						subscribeToEvent(window, "unload", SafeFrameObj.collapse);
						subscribeToEvent(window, "beforeunload", SafeFrameObj.collapse);
						var orig_ad_constructor = window["ebAd_"+mmAdId];
						window.orig_ebOnmouseOutOfAd = window.ebOnmouseOutOfAd;
						window.ebOnmouseOutOfAd = function() { if(SafeFrameObj.awaitingExpandComplete)return; else return window.orig_ebOnmouseOutOfAd.apply(this,arguments); }
						window["ebAd_"+mmAdId] = function() {
							var ebAd = new orig_ad_constructor();
							for(var pan in ebAd.panels) {
								if(ebAd.panels.hasOwnProperty(pan)) {
									var panlo = pan.toLowerCase();
									SafeFrameObj.panels[panlo] = { expanded:false, firstExpand:true,
										x:ebAd.panels[pan].nXPos,  y:ebAd.panels[pan].nYPos,
										w:ebAd.panels[pan].nWidth, h:ebAd.panels[pan].nHeight
									};
								}
							}
							return ebAd;
						}
					}
					try{oEH.onClientScriptsLoaded.apply(this,arguments)}catch(e){}
				};
				this.onBeforePanelShow=			function(objName, panelName) {
					if(SafeFrameObj){
						var panlo = panelName.toLowerCase();
						SafeFrameObj.adObj = eval(objName);
						SafeFrameObj.setPanel(panelName);
						if(!SafeFrameObj.adObj.isSEAd()) {
							SafeFrameObj.expand(panelName);
							var IE = gEbBC.isIE();
							var IE9p = IE && gEbBC.getVersion()>=9;
							var DM9p = document.documentMode>=9;
							var qurk = document.compatMode !== "CSS1Compat";
							var nEx1 = !SafeFrameObj.panels[panlo].firstExpand;
							var weirdIEmatrix = (IE9p && DM9p && nEx1);
							var thisFixNeeded = gEbBC.isChrome() || gEbBC.isSafari() || gEbBC.isFF() || weirdIEmatrix;
							SafeFrameObj.panels[panlo].firstExpand = false;

							if(thisFixNeeded){
								var pans = SafeFrameObj.adObj.ad.panels;
								var p = pans[panelName] || pans[panlo];
								if(p){
									p.nXPos = SafeFrameObj.panels[panlo].expanded ? 0 : SafeFrameObj.panels[panlo].nXPos;
									p.nYPos = SafeFrameObj.panels[panlo].expanded ? 0 : SafeFrameObj.panels[panlo].nYPos;
								}
							}
						}
						else {
							SafeFrameObj.ignoreExpandWithoutPanelName = false;
						}
					}
					try{oEH.onBeforePanelShow.apply(this,arguments)}catch(e){}
				};
				this.onBeforeAddRes=			function(objName) {					try{oEH.onBeforeAddRes.apply(			this,arguments)}catch(e){}};
				this.onBeforeAddPanelRes=		function(objName, panelName) {		try{oEH.onBeforeAddPanelRes.apply(		this,arguments)}catch(e){}};
				this.onHandleInteraction=		function(objName,intName,strObjID){	try{oEH.onHandleInteraction.apply(		this,arguments)}catch(e){}};
				this.onBeforeDefaultBannerShow=	function(objName) {					try{oEH.onBeforeDefaultBannerShow.apply(this,arguments)}catch(e){}};
				this.onAfterDefaultBannerShow=	function(objName) {					try{oEH.onAfterDefaultBannerShow.apply(	this,arguments)}catch(e){}};
				this.onBeforeRichFlashShow=		function(objName) {					try{oEH.onBeforeRichFlashShow.apply(	this,arguments)}catch(e){}};
				this.onAfterRichFlashShow=		function(objName) {					try{oEH.onAfterRichFlashShow.apply(		this,arguments)}catch(e){}};
				this.onAfterPanelShow=			function(objName, panelName) {		try{oEH.onAfterPanelShow.apply(			this,arguments)}catch(e){}};
				this.onBeforePanelHide=			function(objName, panelName) {
					if(SafeFrameObj){
						SafeFrameObj.collapse();
					}
					try{oEH.onBeforePanelHide.apply(		this,arguments)}catch(e){}
				};
				this.onAfterPanelHide=			function(objName, panelName) {		try{oEH.onAfterPanelHide.apply(			this,arguments)}catch(e){}};
				this.onBeforeAdClose=			function(objName) {					try{oEH.onBeforeAdClose.apply(			this,arguments)}catch(e){}};
				this.onAfterAdClose=			function(objName) {					try{oEH.onAfterAdClose.apply(			this,arguments)}catch(e){}};
				this.onBeforeIntroShow=			function(objName) {					try{oEH.onBeforeIntroShow.apply(		this,arguments)}catch(e){}};
				this.onAfterIntroShow=			function(objName) {					try{oEH.onAfterIntroShow.apply(			this,arguments)}catch(e){}};
				this.onBeforeIntroHide=			function(objName) {					try{oEH.onBeforeIntroHide.apply(		this,arguments)}catch(e){}};
				this.onAfterIntroHide=			function(objName) {					try{oEH.onAfterIntroHide.apply(			this,arguments)}catch(e){}};
				this.onBeforeRemShow=			function(objName) {					try{oEH.onBeforeRemShow.apply(			this,arguments)}catch(e){}};
				this.onAfterRemShow=			function(objName) {					try{oEH.onAfterRemShow.apply(			this,arguments)}catch(e){}};
				this.onBeforeRemHide=			function(objName) {					try{oEH.onBeforeRemHide.apply(			this,arguments)}catch(e){}};
				this.onAfterRemHide=			function(objName) {					try{oEH.onAfterRemHide.apply(			this,arguments)}catch(e){}};
				this.onBeforeMiniSiteShow=		function(objName) {					try{oEH.onBeforeMiniSiteShow.apply(		this,arguments)}catch(e){}};
				this.onAfterMiniSiteShow=		function(objName) {					try{oEH.onAfterMiniSiteShow.apply(		this,arguments)}catch(e){}};
				this.onBeforeMiniSiteHide=		function(objName) {					try{oEH.onBeforeMiniSiteHide.apply(		this,arguments)}catch(e){}};
				this.onAfterMiniSiteHide=		function(objName) {					try{oEH.onAfterMiniSiteHide.apply(		this,arguments)}catch(e){}};

				function subscribeToEvent(el,evt,cb){el.attachEvent?el.attachEvent("on"+evt,cb):el.addEventListener(evt,cb,false);}
			}
			window.ebCCustomEventHandlers = window.mmCustomEventHandlers;
		}
		else {
			(function(){
				var adId = window.ebAdID || 0;
				var rnd = ebRand;
				var uid = adId + "_" + rnd;
				ebO.extensionHooks.push(function()
				{
					var tn = ebO.adConfig.templateName;
					var exp = tn=="ExpBanner";
					var sex = tn=="SingleExpBanner"

					if(SafeFrameObj){
						if(exp)
							EBG.Ads.ExpBanner.requiresIframeBust = false;
						if(sex)
							EBG.Ads.SingleExpBanner.requiresIframeBust = false;
						for(var pan in ebO.adConfig.panels) {
							if(ebO.adConfig.panels.hasOwnProperty(pan)) {
								var p = ebO.adConfig.panels[pan];
								SafeFrameObj.panels[pan.toLowerCase()]={expanded:false,x:sex?p.xPos*-1:p.xPos,y:sex?p.yPos*-1:p.yPos,w:p.width,h:p.height};
							}
						}
						var createExpandPanelSubscription = new EBG.Events.EventSubscription(EBG.Events.EventNames.EXPAND,SafeFrameObj.setPanel);
						createExpandPanelSubscription.timing = EBG.Events.EventTiming.BEFORE;
						EBG.eventMgr.subscribeToEvent(createExpandPanelSubscription);
						var createExpandPanelSubscription = new EBG.Events.EventSubscription(EBG.Events.EventNames.CREATE_ADAPTOR,function(event){
							EBG.adaptor.getDisplayWin =		function(){return window;}
							EBG.adaptor.getPageWin =		function(){return window;}
							EBG.adaptor._getCurrentWindow =	function(){return window;}
							EBG.adaptor.getHostName =		function(){return window.location.hostname;}
							EBG.adaptor._addEventListener = function(target, eventName, callback) {
						        if (eventName == "load") {
						        	if(this.isPageLoaded()) {
							            setTimeout(function () { callback({ type: "load" }) }, 5);
							            return;
							        }
							        else {
								        if (window.attachEvent) {
								            target.attachEvent("on" + eventName, callback);
								        }
								        else if (window.addEventListener) {
								            target.addEventListener(eventName, callback, false);
								        }
							        }
						        }
						        if (window.addEventListener) {
						            target.addEventListener(eventName, callback, false);
						        }
						        else if (window.attachEvent) {
						            target.attachEvent("on" + eventName, callback);
						        }
		        			}
						});
						createExpandPanelSubscription.timing = EBG.Events.EventTiming.AFTER;
						EBG.eventMgr.subscribeToEvent(createExpandPanelSubscription);
						var createAdSubscription = new EBG.Events.EventSubscription(EBG.Events.EventNames.SHOW_AD,
							function(event){
								if(event.dispatcher._adConfig.uid == uid) {
									SafeFrameObj.adObj = event.dispatcher;
									var pageUnloadSubscription = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD, SafeFrameObj.collapse);
									pageUnloadSubscription.timing = EBG.Events.EventTiming.BEFORE;
									EBG.eventMgr.subscribeToEvent(pageUnloadSubscription);

									var pageBeforeUnloadSubscription = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_BEFORE_UNLOAD, SafeFrameObj.collapse);
									pageBeforeUnloadSubscription.timing = EBG.Events.EventTiming.BEFORE;
									EBG.eventMgr.subscribeToEvent(pageBeforeUnloadSubscription);

									if(EBG.adaptor.browser.isMac() && EBG.adaptor.browser.isSafari() && event.dispatcher._adConfig.templateName == "SingleExpBanner") {
										EBG.RichFlashPanelCC.prototype.orig_checkShowHideElements = EBG.RichFlashPanelCC.prototype._checkShowHideElements;
										EBG.RichFlashPanelCC.prototype.fixSafariRedrawIssue = function() {
											var divToFix = EBG.adaptor.getElementById(this.props.panel.id);
											if(divToFix)
											{
												divToFix.style.opacity = '.99';
												var restoreOpacity = function () { divToFix.style.opacity = 1; };
												setTimeout(restoreOpacity, 1);
											}
										}
										EBG.RichFlashPanelCC.prototype._checkShowHideElements = function() {
											this.orig_checkShowHideElements();
											this.fixSafariRedrawIssue();
										}
									}
								}
							}
						);
						createAdSubscription.timing = EBG.Events.EventTiming.BEFORE;
						EBG.eventMgr.subscribeToEvent(createAdSubscription);
					}
				});
			})();
		}
	}
}catch(e){
	SFError = e;
}
