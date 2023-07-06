/*! For license information please see 3305.0ed303fc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkperi=self.webpackChunkperi||[]).push([[3305,8620,6269,9383],{8620:function(t,o,n){n.r(o),n.d(o,{c:function(){return r}});var e=n(1205),i=n(6269),a=n(7169),r=function(t,o){var n,r,c=function(t,e,i){if("undefined"!==typeof document){var a=document.elementFromPoint(t,e);a&&o(a)?a!==n&&(d(),s(a,i)):d()}},s=function(t,o){n=t,r||(r=n);var i=n;(0,e.c)((function(){return i.classList.add("ion-activated")})),o()},d=function(t){if(void 0===t&&(t=!1),n){var o=n;(0,e.c)((function(){return o.classList.remove("ion-activated")})),t&&r!==n&&n.click(),n=void 0}};return(0,a.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return c(t.currentX,t.currentY,i.a)},onMove:function(t){return c(t.currentX,t.currentY,i.b)},onEnd:function(){d(!0),(0,i.h)(),r=void 0}})}},6269:function(t,o,n){n.r(o),n.d(o,{a:function(){return r},b:function(){return c},c:function(){return a},d:function(){return d},h:function(){return s}});var e={getEngine:function(){var t,o=window;return o.TapticEngine||(null===(t=o.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&o.Capacitor.Plugins.Haptics},available:function(){var t,o=window;return!!this.getEngine()&&("web"!==(null===(t=o.Capacitor)||void 0===t?void 0:t.getPlatform())||"undefined"!==typeof navigator&&void 0!==navigator.vibrate)},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var o=this.getEngine();if(o){var n=this.isCapacitor()?t.style.toUpperCase():t.style;o.impact({style:n})}},notification:function(t){var o=this.getEngine();if(o){var n=this.isCapacitor()?t.style.toUpperCase():t.style;o.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){return e.available()},a=function(){i()&&e.selection()},r=function(){i()&&e.selectionStart()},c=function(){i()&&e.selectionChanged()},s=function(){i()&&e.selectionEnd()},d=function(t){i()&&e.impact(t)}},3305:function(t,o,n){n.r(o),n.d(o,{ion_action_sheet:function(){return g}});var e=n(5971),i=n(1205),a=n(3878),r=n(8620),c=n(3405),s=n(9383),d=n(899),l=(n(6269),n(7169),n(6005),n(6835),function(t){var o=(0,d.c)(),n=(0,d.c)(),e=(0,d.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([n,e])}),u=function(t){var o=(0,d.c)(),n=(0,d.c)(),e=(0,d.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([n,e])},h=function(t){var o=(0,d.c)(),n=(0,d.c)(),e=(0,d.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([n,e])},p=function(t){var o=(0,d.c)(),n=(0,d.c)(),e=(0,d.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([n,e])},g=function(){function t(t){var o=this;(0,i.r)(this,t),this.didPresent=(0,i.e)(this,"ionActionSheetDidPresent",7),this.willPresent=(0,i.e)(this,"ionActionSheetWillPresent",7),this.willDismiss=(0,i.e)(this,"ionActionSheetWillDismiss",7),this.didDismiss=(0,i.e)(this,"ionActionSheetDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){o.dismiss(void 0,c.B)},this.dispatchCancelHandler=function(t){var n=t.detail.role;if((0,c.i)(n)){var e=o.getButtons().find((function(t){return"cancel"===t.role}));o.callButtonHandler(e)}}}return t.prototype.present=function(){return(0,c.d)(this,"actionSheetEnter",l,h)},t.prototype.connectedCallback=function(){(0,c.e)(this.el)},t.prototype.dismiss=function(t,o){return(0,c.f)(this,t,o,"actionSheetLeave",u,p)},t.prototype.onDidDismiss=function(){return(0,c.g)(this.el,"ionActionSheetDidDismiss")},t.prototype.onWillDismiss=function(){return(0,c.g)(this.el,"ionActionSheetWillDismiss")},t.prototype.buttonClick=function(t){return(0,e.mG)(this,void 0,void 0,(function(){var o;return(0,e.Jh)(this,(function(n){switch(n.label){case 0:return o=t.role,(0,c.i)(o)?[2,this.dismiss(t.data,o)]:[4,this.callButtonHandler(t)];case 1:return n.sent()?[2,this.dismiss(t.data,t.role)]:[2,Promise.resolve()]}}))}))},t.prototype.callButtonHandler=function(t){return(0,e.mG)(this,void 0,void 0,(function(){return(0,e.Jh)(this,(function(o){switch(o.label){case 0:return t?[4,(0,c.s)(t.handler)]:[3,2];case 1:if(!1===o.sent())return[2,!1];o.label=2;case 2:return[2,!0]}}))}))},t.prototype.getButtons=function(){return this.buttons.map((function(t){return"string"===typeof t?{text:t}:t}))},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.componentDidLoad=function(){var t=this,o=this.groupEl,n=this.wrapperEl;!this.gesture&&"md"!==(0,a.b)(this)&&n&&o&&(0,i.f)((function(){o.scrollHeight>o.clientHeight||(t.gesture=(0,r.c)(n,(function(t){return t.classList.contains("action-sheet-button")})),t.gesture.enable(!0))}))},t.prototype.render=function(){var t,o=this,n=this,e=n.header,r=n.htmlAttributes,c=n.overlayIndex,d=(0,a.b)(this),l=this.getButtons(),u=l.find((function(t){return"cancel"===t.role})),h=l.filter((function(t){return"cancel"!==t.role})),p="action-sheet-".concat(c,"-header");return(0,i.h)(i.H,Object.assign({role:"dialog","aria-modal":"true","aria-labelledby":void 0!==e?p:null,tabindex:"-1"},r,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign((t={},t[d]=!0,t),(0,s.g)(this.cssClass)),{"overlay-hidden":!0,"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),(0,i.h)("ion-backdrop",{tappable:this.backdropDismiss}),(0,i.h)("div",{tabindex:"0"}),(0,i.h)("div",{class:"action-sheet-wrapper ion-overlay-wrapper",ref:function(t){return o.wrapperEl=t}},(0,i.h)("div",{class:"action-sheet-container"},(0,i.h)("div",{class:"action-sheet-group",ref:function(t){return o.groupEl=t}},void 0!==e&&(0,i.h)("div",{id:p,class:{"action-sheet-title":!0,"action-sheet-has-sub-title":void 0!==this.subHeader}},e,this.subHeader&&(0,i.h)("div",{class:"action-sheet-sub-title"},this.subHeader)),h.map((function(t){return(0,i.h)("button",{type:"button",id:t.id,class:b(t),onClick:function(){return o.buttonClick(t)}},(0,i.h)("span",{class:"action-sheet-button-inner"},t.icon&&(0,i.h)("ion-icon",{icon:t.icon,"aria-hidden":"true",lazy:!1,class:"action-sheet-icon"}),t.text),"md"===d&&(0,i.h)("ion-ripple-effect",null))}))),u&&(0,i.h)("div",{class:"action-sheet-group action-sheet-group-cancel"},(0,i.h)("button",{type:"button",class:b(u),onClick:function(){return o.buttonClick(u)}},(0,i.h)("span",{class:"action-sheet-button-inner"},u.icon&&(0,i.h)("ion-icon",{icon:u.icon,"aria-hidden":"true",lazy:!1,class:"action-sheet-icon"}),u.text),"md"===d&&(0,i.h)("ion-ripple-effect",null))))),(0,i.h)("div",{tabindex:"0"}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),t}(),b=function(t){var o;return Object.assign(((o={"action-sheet-button":!0,"ion-activatable":!0,"ion-focusable":!0})["action-sheet-".concat(t.role)]=void 0!==t.role,o),(0,s.g)(t.cssClass))};g.style={ios:'.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:13px;font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:0.3em;font-size:28px;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}',md:'.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}'}},9383:function(t,o,n){n.r(o),n.d(o,{c:function(){return a},g:function(){return r},h:function(){return i},o:function(){return s}});var e=n(5971),i=function(t,o){return null!==o.closest(t)},a=function(t,o){var n;return"string"===typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(t)]=!0,n),o):o},r=function(t){var o={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return o[t]=!0})),o},c=/^[a-z][a-z0-9+\-.]*:/,s=function(t,o,n,i){return(0,e.mG)(void 0,void 0,void 0,(function(){var a;return(0,e.Jh)(this,(function(e){return null!=t&&"#"!==t[0]&&!c.test(t)&&(a=document.querySelector("ion-router"))?(null!=o&&o.preventDefault(),[2,a.push(t,n,i)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=3305.0ed303fc.chunk.js.map