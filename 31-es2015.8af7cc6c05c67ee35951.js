(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{bSwM:function(e,t,c){"use strict";c.d(t,"a",function(){return y}),c.d(t,"b",function(){return C});var n=c("8LU1"),i=c("fXoL"),a=c("3Pt+"),o=c("FKr1"),r=c("R1ws"),s=c("GU7r"),m=c("u47x");const h=["input"],d=function(){return{enterDuration:150}},b=["*"],l=new i.x("mat-checkbox-default-options",{providedIn:"root",factory:k});function k(){return{color:"accent",clickAction:"check-indeterminate"}}let p=0;const u=k(),x={provide:a.l,useExisting:Object(i.eb)(()=>y),multi:!0};class g{}class f{constructor(e){this._elementRef=e}}const _=Object(o.E)(Object(o.z)(Object(o.A)(Object(o.B)(f))));let y=(()=>{class e extends _{constructor(e,t,c,n,a,o,r){super(e),this._changeDetectorRef=t,this._focusMonitor=c,this._ngZone=n,this._animationMode=o,this._options=r,this.ariaLabel="",this.ariaLabelledby=null,this._uniqueId="mat-checkbox-"+ ++p,this.id=this._uniqueId,this.labelPosition="after",this.name=null,this.change=new i.s,this.indeterminateChange=new i.s,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||u,this.color=this.defaultColor=this._options.color||u.color,this.tabIndex=parseInt(a)||0}get inputId(){return(this.id||this._uniqueId)+"-input"}get required(){return this._required}set required(e){this._required=Object(n.c)(e)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e||Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}),this._syncIndeterminate(this._indeterminate)}ngAfterViewChecked(){}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){const t=Object(n.c)(e);t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(e){const t=e!=this._indeterminate;this._indeterminate=Object(n.c)(e),t&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(e){let t=this._currentCheckState,c=this._elementRef.nativeElement;if(t!==e&&(this._currentAnimationClass.length>0&&c.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){c.classList.add(this._currentAnimationClass);const e=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{c.classList.remove(e)},1e3)})}}_emitChangeEvent(){const e=new g;e.source=this,e.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(e)}toggle(){this.checked=!this.checked}_onInputClick(e){var t;const c=null===(t=this._options)||void 0===t?void 0:t.clickAction;e.stopPropagation(),this.disabled||"noop"===c?this.disabled||"noop"!==c||(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==c&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this.toggle(),this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}focus(e="keyboard",t){this._focusMonitor.focusVia(this._inputElement,e,t)}_onInteractionEvent(e){e.stopPropagation()}_getAnimationClassForCheckStateTransition(e,t){if("NoopAnimations"===this._animationMode)return"";let c="";switch(e){case 0:if(1===t)c="unchecked-checked";else{if(3!=t)return"";c="unchecked-indeterminate"}break;case 2:c=1===t?"unchecked-checked":"unchecked-indeterminate";break;case 1:c=2===t?"checked-unchecked":"checked-indeterminate";break;case 3:c=1===t?"indeterminate-checked":"indeterminate-unchecked"}return"mat-checkbox-anim-"+c}_syncIndeterminate(e){const t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(i.p),i.Yb(i.i),i.Yb(m.h),i.Yb(i.I),i.jc("tabindex"),i.Yb(r.a,8),i.Yb(l,8))},e.\u0275cmp=i.Sb({type:e,selectors:[["mat-checkbox"]],viewQuery:function(e,t){if(1&e&&(i.Wc(h,!0),i.Wc(o.t,!0)),2&e){let e;i.Bc(e=i.mc())&&(t._inputElement=e.first),i.Bc(e=i.mc())&&(t.ripple=e.first)}},hostAttrs:[1,"mat-checkbox"],hostVars:12,hostBindings:function(e,t){2&e&&(i.hc("id",t.id),i.Nb("tabindex",null),i.Qb("mat-checkbox-indeterminate",t.indeterminate)("mat-checkbox-checked",t.checked)("mat-checkbox-disabled",t.disabled)("mat-checkbox-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],id:"id",labelPosition:"labelPosition",name:"name",required:"required",checked:"checked",disabled:"disabled",indeterminate:"indeterminate",ariaDescribedby:["aria-describedby","ariaDescribedby"],value:"value"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[i.Lb([x]),i.Jb],ngContentSelectors:b,decls:17,vars:20,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24",0,"xml","space","preserve",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(e,t){if(1&e&&(i.uc(),i.ec(0,"label",0,1),i.ec(2,"span",2),i.ec(3,"input",3,4),i.lc("change",function(e){return t._onInteractionEvent(e)})("click",function(e){return t._onInputClick(e)}),i.dc(),i.ec(5,"span",5),i.Zb(6,"span",6),i.dc(),i.Zb(7,"span",7),i.ec(8,"span",8),i.oc(),i.ec(9,"svg",9),i.Zb(10,"path",10),i.dc(),i.nc(),i.Zb(11,"span",11),i.dc(),i.dc(),i.ec(12,"span",12,13),i.lc("cdkObserveContent",function(){return t._onLabelTextChange()}),i.ec(14,"span",14),i.Sc(15,"\xa0"),i.dc(),i.tc(16),i.dc(),i.dc()),2&e){const e=i.Cc(1),c=i.Cc(13);i.Nb("for",t.inputId),i.Mb(2),i.Qb("mat-checkbox-inner-container-no-side-margin",!c.textContent||!c.textContent.trim()),i.Mb(1),i.vc("id",t.inputId)("required",t.required)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex),i.Nb("value",t.value)("name",t.name)("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-checked",t._getAriaChecked())("aria-describedby",t.ariaDescribedby),i.Mb(2),i.vc("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",i.yc(19,d))}},directives:[o.t,s.a],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275mod=i.Wb({type:e}),e.\u0275inj=i.Vb({factory:function(t){return new(t||e)}}),e})(),C=(()=>{class e{}return e.\u0275mod=i.Wb({type:e}),e.\u0275inj=i.Vb({factory:function(t){return new(t||e)},imports:[[o.u,o.j,s.c,v],o.j,v]}),e})()},xOhL:function(e,t,c){"use strict";c.r(t),c.d(t,"CoreExamplesModule",function(){return b}),c.d(t,"ElevationOverviewExample",function(){return h}),c.d(t,"RippleOverviewExample",function(){return d});var n=c("fXoL"),i=c("3Pt+"),a=c("bTqV"),o=c("bSwM"),r=c("FKr1"),s=c("qFsG"),m=c("kmnG");let h=(()=>{class e{constructor(){this.isActive=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Sb)({type:e,selectors:[["elevation-overview-example"]],decls:4,vars:4,consts:[[1,"example-container"],["mat-button","",3,"click"]],template:function(e,t){1&e&&(Object(n.ec)(0,"div",0),Object(n.Sc)(1," Example\n"),Object(n.dc)(),Object(n.ec)(2,"button",1),Object(n.lc)("click",function(){return t.isActive=!t.isActive}),Object(n.Sc)(3,"Toggle Elevation"),Object(n.dc)()),2&e&&Object(n.Qb)("mat-elevation-z2",!t.isActive)("mat-elevation-z8",t.isActive)},directives:[a.b],styles:[".example-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin-bottom: 16px;\n}"]}),e})(),d=(()=>{class e{constructor(){this.centered=!1,this.disabled=!1,this.unbounded=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Sb)({type:e,selectors:[["ripple-overview-example"]],decls:12,vars:10,consts:[[1,"example-ripple-checkbox",3,"ngModel","ngModelChange"],[1,"example-ripple-form-field"],["matInput","","type","number","placeholder","Radius",3,"ngModel","ngModelChange"],["matInput","","type","text","placeholder","Color",3,"ngModel","ngModelChange"],["matRipple","",1,"example-ripple-container","mat-elevation-z4",3,"matRippleCentered","matRippleDisabled","matRippleUnbounded","matRippleRadius","matRippleColor"]],template:function(e,t){1&e&&(Object(n.ec)(0,"mat-checkbox",0),Object(n.lc)("ngModelChange",function(e){return t.centered=e}),Object(n.Sc)(1,"Centered"),Object(n.dc)(),Object(n.ec)(2,"mat-checkbox",0),Object(n.lc)("ngModelChange",function(e){return t.disabled=e}),Object(n.Sc)(3,"Disabled"),Object(n.dc)(),Object(n.ec)(4,"mat-checkbox",0),Object(n.lc)("ngModelChange",function(e){return t.unbounded=e}),Object(n.Sc)(5,"Unbounded"),Object(n.dc)(),Object(n.ec)(6,"mat-form-field",1),Object(n.ec)(7,"input",2),Object(n.lc)("ngModelChange",function(e){return t.radius=e}),Object(n.dc)(),Object(n.dc)(),Object(n.ec)(8,"mat-form-field",1),Object(n.ec)(9,"input",3),Object(n.lc)("ngModelChange",function(e){return t.color=e}),Object(n.dc)(),Object(n.dc)(),Object(n.ec)(10,"div",4),Object(n.Sc)(11," Click me\n"),Object(n.dc)()),2&e&&(Object(n.vc)("ngModel",t.centered),Object(n.Mb)(2),Object(n.vc)("ngModel",t.disabled),Object(n.Mb)(2),Object(n.vc)("ngModel",t.unbounded),Object(n.Mb)(3),Object(n.vc)("ngModel",t.radius),Object(n.Mb)(2),Object(n.vc)("ngModel",t.color),Object(n.Mb)(1),Object(n.vc)("matRippleCentered",t.centered)("matRippleDisabled",t.disabled)("matRippleUnbounded",t.unbounded)("matRippleRadius",t.radius)("matRippleColor",t.color))},directives:[o.a,i.n,i.q,m.c,s.b,i.s,i.c,r.t],styles:[".example-ripple-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n.example-ripple-checkbox[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field[_ngcontent-%COMP%] {\n  margin: 0 12px 0 0;\n}"]}),e})(),b=(()=>{class e{}return e.\u0275mod=Object(n.Wb)({type:e}),e.\u0275inj=Object(n.Vb)({factory:function(t){return new(t||e)},imports:[[a.c,o.b,s.c,r.u,i.j]]}),e})()}}]);