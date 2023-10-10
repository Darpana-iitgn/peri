/*! For license information please see 2682.972e021f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkperi=self.webpackChunkperi||[]).push([[2682,3127,369,4037,9383],{3127:function(t,n,e){e.r(n),e.d(n,{i:function(){return r}});var r=function(t){return t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())}},369:function(t,n,e){e.r(n),e.d(n,{a:function(){return o},b:function(){return a},p:function(){return i}});var r=e(5971),i=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return console.warn.apply(console,(0,r.ev)(["[Ionic Warning]: ".concat(t)],n,!1))},a=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return console.error.apply(console,(0,r.ev)(["[Ionic Error]: ".concat(t)],n,!1))},o=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return console.error("<".concat(t.tagName.toLowerCase(),"> must be used inside ").concat(n.join(" or "),"."))}},4037:function(t,n,e){e.r(n),e.d(n,{I:function(){return o},a:function(){return u},b:function(){return s},c:function(){return g},d:function(){return f},f:function(){return b},g:function(){return c},i:function(){return d},p:function(){return p},r:function(){return m},s:function(){return h}});var r=e(5971),i=e(300),a=e(369),o="ion-content",s=".ion-content-scroll-host",l="".concat(o,", ").concat(s),d=function(t){return"ION-CONTENT"===t.tagName},c=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return d(t)?[4,new Promise((function(n){return(0,i.c)(t,n)}))]:[3,2];case 1:return n.sent(),[2,t.getScrollElement()];case 2:return[2,t]}}))}))},u=function(t){var n=t.querySelector(s);return n||t.querySelector(l)},b=function(t){return t.closest(l)},h=function(t,n){return d(t)?t.scrollToTop(n):Promise.resolve(t.scrollTo({top:0,left:0,behavior:n>0?"smooth":"auto"}))},g=function(t,n,e,r){return d(t)?t.scrollByPoint(n,e,r):Promise.resolve(t.scrollBy({top:e,left:n,behavior:r>0?"smooth":"auto"}))},p=function(t){return(0,a.a)(t,o)},f=function(t){if(d(t)){var n=t,e=n.scrollY;return n.scrollY=!1,e}return t.style.setProperty("overflow","hidden"),!0},m=function(t,n){d(t)?t.scrollY=n:t.style.removeProperty("overflow")}},2682:function(t,n,e){e.r(n),e.d(n,{ion_range:function(){return u}});var r=e(5971),i=e(1205),a=e(5670),o=e(4037),s=e(300),l=e(369),d=e(3127),c=e(9383),u=function(){function t(t){var n=this;(0,i.r)(this,t),this.ionChange=(0,i.e)(this,"ionChange",7),this.ionStyle=(0,i.e)(this,"ionStyle",7),this.ionFocus=(0,i.e)(this,"ionFocus",7),this.ionBlur=(0,i.e)(this,"ionBlur",7),this.ionKnobMoveStart=(0,i.e)(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=(0,i.e)(this,"ionKnobMoveEnd",7),this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=function(t){return Math.round(t)},this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=function(t){return(0,s.l)(n.min,t,n.max)},this.ensureValueInBounds=function(t){return n.dualKnobs?{lower:n.clampBounds(t.lower),upper:n.clampBounds(t.upper)}:n.clampBounds(t)},this.setupGesture=function(){return(0,r.mG)(n,void 0,void 0,(function(){var t,n,i=this;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return(t=this.rangeSlider)?(n=this,[4,Promise.resolve().then(e.bind(e,7169))]):[3,2];case 1:n.gesture=r.sent().createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}}),this.gesture.enable(!this.disabled),r.label=2;case 2:return[2]}}))}))},this.handleKeyboard=function(t,e){var r=n.ensureValueInBounds,i=n.step;i=i>0?i:1,i/=n.max-n.min,e||(i*=-1),"A"===t?n.ratioA=(0,s.l)(0,n.ratioA+i,1):n.ratioB=(0,s.l)(0,n.ratioB+i,1),n.ionKnobMoveStart.emit({value:r(n.value)}),n.updateValue(),n.ionKnobMoveEnd.emit({value:r(n.value)})},this.onBlur=function(){n.hasFocus&&(n.hasFocus=!1,n.ionBlur.emit(),n.emitStyle())},this.onFocus=function(){n.hasFocus||(n.hasFocus=!0,n.ionFocus.emit(),n.emitStyle())}}return t.prototype.debounceChanged=function(){this.ionChange=(0,s.h)(this.ionChange,this.debounce)},t.prototype.minChanged=function(){this.noUpdate||this.updateRatio()},t.prototype.maxChanged=function(){this.noUpdate||this.updateRatio()},t.prototype.activeBarStartChanged=function(){var t=this.activeBarStart;void 0!==t&&(t>this.max?((0,l.p)("Range: The value of activeBarStart (".concat(t,") is greater than the max (").concat(this.max,"). Valid values are greater than or equal to the min value and less than or equal to the max value."),this.el),this.activeBarStart=this.max):t<this.min&&((0,l.p)("Range: The value of activeBarStart (".concat(t,") is less than the min (").concat(this.min,"). Valid values are greater than or equal to the min value and less than or equal to the max value."),this.el),this.activeBarStart=this.min))},t.prototype.disabledChanged=function(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()},t.prototype.valueChanged=function(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})},t.prototype.componentWillLoad=function(){this.rangeId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-r-".concat(p++),this.inheritedAttributes=(0,s.i)(this.el)},t.prototype.componentDidLoad=function(){this.setupGesture(),this.didLoad=!0},t.prototype.connectedCallback=function(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture(),this.contentEl=(0,o.f)(this.el)},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.getValue=function(){var t,n=null!==(t=this.value)&&void 0!==t?t:0;return this.dualKnobs?"object"===typeof n?n:{lower:0,upper:n}:"object"===typeof n?n.upper:n},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})},t.prototype.onStart=function(t){var n=this.contentEl;n&&(this.initialContentScrollY=(0,o.d)(n));var e=this.rect=this.rangeSlider.getBoundingClientRect(),r=t.currentX,i=(0,s.l)(0,(r-e.left)/e.width,1);(0,d.i)(this.el)&&(i=1-i),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-i)<Math.abs(this.ratioB-i)?"A":"B",this.setFocus(this.pressedKnob),this.update(r),this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})},t.prototype.onMove=function(t){this.update(t.currentX)},t.prototype.onEnd=function(t){var n=this.contentEl,e=this.initialContentScrollY;n&&(0,o.r)(n,e),this.update(t.currentX),this.pressedKnob=void 0,this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})},t.prototype.update=function(t){var n=this.rect,e=(0,s.l)(0,(t-n.left)/n.width,1);(0,d.i)(this.el)&&(e=1-e),this.snaps&&(e=g(h(e,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=e:this.ratioB=e,this.updateValue()},Object.defineProperty(t.prototype,"valA",{get:function(){return h(this.ratioA,this.min,this.max,this.step)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"valB",{get:function(){return h(this.ratioB,this.min,this.max,this.step)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ratioLower",{get:function(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);var t=this.activeBarStart;return null==t?0:g(t,this.min,this.max)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ratioUpper",{get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA},enumerable:!1,configurable:!0}),t.prototype.updateRatio=function(){var t=this.getValue(),n=this.min,e=this.max;this.dualKnobs?(this.ratioA=g(t.lower,n,e),this.ratioB=g(t.upper,n,e)):this.ratioA=g(t,n,e)},t.prototype.updateValue=function(){this.noUpdate=!0;var t=this.valA,n=this.valB;this.value=this.dualKnobs?{lower:Math.min(t,n),upper:Math.max(t,n)}:t,this.noUpdate=!1},t.prototype.setFocus=function(t){if(this.el.shadowRoot){var n=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");n&&n.focus()}},t.prototype.render=function(){var t,n,e,r=this,o=this,l=o.min,u=o.max,h=o.step,p=o.el,f=o.handleKeyboard,m=o.pressedKnob,k=o.disabled,v=o.pin,x=o.ratioLower,w=o.ratioUpper,y=o.inheritedAttributes,z=o.rangeId,B=o.pinFormatter,S=(0,s.d)(p,z).labelText;void 0!==S&&null!==S||(S=y["aria-label"]);var A=(0,a.b)(this),C="".concat(100*x,"%"),K="".concat(100-100*w,"%"),M=(0,d.i)(this.el),F=M?"right":"left",P=M?"left":"right",E=function(t){var n;return(n={})[F]=t[F],n};!1===this.dualKnobs&&(this.valA<(null!==(e=this.activeBarStart)&&void 0!==e?e:this.min)?(C="".concat(100*w,"%"),K="".concat(100-100*x,"%")):(C="".concat(100*x,"%"),K="".concat(100-100*w,"%")));var V=((t={})[F]=C,t[P]=K,t),I=[];if(this.snaps&&this.ticks)for(var L=l;L<=u;L+=h){var R=g(L,l,u),T=Math.min(x,w),j=Math.max(x,w),O={ratio:R,active:R>=T&&R<=j};O[F]="".concat(100*R,"%"),I.push(O)}return(0,s.e)(!0,p,this.name,JSON.stringify(this.getValue()),k),(0,i.h)(i.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:z,class:(0,c.c)(this.color,(n={},n[A]=!0,n["in-item"]=(0,c.h)("ion-item",p),n["range-disabled"]=k,n["range-pressed"]=void 0!==m,n["range-has-pin"]=v,n))},(0,i.h)("slot",{name:"start"}),(0,i.h)("div",{class:"range-slider",ref:function(t){return r.rangeSlider=t}},I.map((function(t){return(0,i.h)("div",{style:E(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active},part:t.active?"tick-active":"tick"})})),(0,i.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,i.h)("div",{class:"range-bar range-bar-active",role:"presentation",style:V,part:"bar-active"}),b(M,{knob:"A",pressed:"A"===m,value:this.valA,ratio:this.ratioA,pin:v,pinFormatter:B,disabled:k,handleKeyboard:f,min:l,max:u,labelText:S}),this.dualKnobs&&b(M,{knob:"B",pressed:"B"===m,value:this.valB,ratio:this.ratioB,pin:v,pinFormatter:B,disabled:k,handleKeyboard:f,min:l,max:u,labelText:S})),(0,i.h)("slot",{name:"end"}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:!1,configurable:!0}),t}(),b=function(t,n){var e=n.knob,r=n.value,a=n.ratio,o=n.min,s=n.max,l=n.disabled,d=n.pressed,c=n.pin,u=n.handleKeyboard,b=n.labelText,h=n.pinFormatter,g=t?"right":"left";return(0,i.h)("div",{onKeyDown:function(t){var n=t.key;"ArrowLeft"===n||"ArrowDown"===n?(u(e,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==n&&"ArrowUp"!==n||(u(e,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===e,"range-knob-b":"B"===e,"range-knob-pressed":d,"range-knob-min":r===o,"range-knob-max":r===s,"ion-activatable":!0,"ion-focusable":!0},style:function(){var t={};return t[g]="".concat(100*a,"%"),t}(),role:"slider",tabindex:l?-1:0,"aria-label":b,"aria-valuemin":o,"aria-valuemax":s,"aria-disabled":l?"true":null,"aria-valuenow":r},c&&(0,i.h)("div",{class:"range-pin",role:"presentation",part:"pin"},h(r)),(0,i.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},h=function(t,n,e,r){var i=(e-n)*t;return r>0&&(i=Math.round(i/r)*r+n),(0,s.l)(n,i,e)},g=function(t,n,e){return(0,s.l)(0,(t-n)/(e-n),1)},p=0;u.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;left:0;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}[dir=rtl] .range-knob::before,:host-context([dir=rtl]) .range-knob::before{left:unset;right:unset;right:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'}},9383:function(t,n,e){e.r(n),e.d(n,{c:function(){return a},g:function(){return o},h:function(){return i},o:function(){return l}});var r=e(5971),i=function(t,n){return null!==n.closest(t)},a=function(t,n){var e;return"string"===typeof t&&t.length>0?Object.assign(((e={"ion-color":!0})["ion-color-".concat(t)]=!0,e),n):n},o=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},s=/^[a-z][a-z0-9+\-.]*:/,l=function(t,n,e,i){return(0,r.mG)(void 0,void 0,void 0,(function(){var a;return(0,r.Jh)(this,(function(r){return null!=t&&"#"!==t[0]&&!s.test(t)&&(a=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,a.push(t,e,i)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=2682.972e021f.chunk.js.map