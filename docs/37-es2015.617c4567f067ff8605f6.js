(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{Cet0:function(t,e,a){"use strict";a.r(e),a.d(e,"ButtonToggleAppearanceExample",function(){return l}),a.d(e,"ButtonToggleExamplesModule",function(){return u}),a.d(e,"ButtonToggleExclusiveExample",function(){return i}),a.d(e,"ButtonToggleHarnessExample",function(){return r}),a.d(e,"ButtonToggleOverviewExample",function(){return s});var o=a("fXoL"),n=a("jaxi"),c=a("NFeN");let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(o.Sb)({type:t,selectors:[["button-toggle-appearance-example"]],decls:18,vars:0,consts:[["name","fontStyle","aria-label","Font Style"],["value","bold"],["value","italic"],["value","underline"],["appearance","legacy","name","fontStyle","aria-label","Font Style"]],template:function(t,e){1&t&&(Object(o.ec)(0,"p"),Object(o.Rc)(1," Default appearance: "),Object(o.ec)(2,"mat-button-toggle-group",0),Object(o.ec)(3,"mat-button-toggle",1),Object(o.Rc)(4,"Bold"),Object(o.dc)(),Object(o.ec)(5,"mat-button-toggle",2),Object(o.Rc)(6,"Italic"),Object(o.dc)(),Object(o.ec)(7,"mat-button-toggle",3),Object(o.Rc)(8,"Underline"),Object(o.dc)(),Object(o.dc)(),Object(o.dc)(),Object(o.ec)(9,"p"),Object(o.Rc)(10," Legacy appearance: "),Object(o.ec)(11,"mat-button-toggle-group",4),Object(o.ec)(12,"mat-button-toggle",1),Object(o.Rc)(13,"Bold"),Object(o.dc)(),Object(o.ec)(14,"mat-button-toggle",2),Object(o.Rc)(15,"Italic"),Object(o.dc)(),Object(o.ec)(16,"mat-button-toggle",3),Object(o.Rc)(17,"Underline"),Object(o.dc)(),Object(o.dc)(),Object(o.dc)())},directives:[n.b,n.a],styles:["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}"]}),t})(),i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(o.Sb)({type:t,selectors:[["button-toggle-exclusive-example"]],decls:16,vars:1,consts:[["group","matButtonToggleGroup"],["value","left","aria-label","Text align left"],["value","center","aria-label","Text align center"],["value","right","aria-label","Text align right"],["value","justify","disabled","","aria-label","Text align justify"],[1,"example-selected-value"]],template:function(t,e){if(1&t&&(Object(o.ec)(0,"mat-button-toggle-group",null,0),Object(o.ec)(2,"mat-button-toggle",1),Object(o.ec)(3,"mat-icon"),Object(o.Rc)(4,"format_align_left"),Object(o.dc)(),Object(o.dc)(),Object(o.ec)(5,"mat-button-toggle",2),Object(o.ec)(6,"mat-icon"),Object(o.Rc)(7,"format_align_center"),Object(o.dc)(),Object(o.dc)(),Object(o.ec)(8,"mat-button-toggle",3),Object(o.ec)(9,"mat-icon"),Object(o.Rc)(10,"format_align_right"),Object(o.dc)(),Object(o.dc)(),Object(o.ec)(11,"mat-button-toggle",4),Object(o.ec)(12,"mat-icon"),Object(o.Rc)(13,"format_align_justify"),Object(o.dc)(),Object(o.dc)(),Object(o.dc)(),Object(o.ec)(14,"div",5),Object(o.Rc)(15),Object(o.dc)()),2&t){const t=Object(o.Cc)(1);Object(o.Mb)(15),Object(o.Tc)("Selected value: ",t.value,"")}},directives:[n.b,n.a,c.a],styles:[".example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}"]}),t})(),s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(o.Sb)({type:t,selectors:[["button-toggle-overview-example"]],decls:7,vars:0,consts:[["name","fontStyle","aria-label","Font Style"],["value","bold"],["value","italic"],["value","underline"]],template:function(t,e){1&t&&(Object(o.ec)(0,"mat-button-toggle-group",0),Object(o.ec)(1,"mat-button-toggle",1),Object(o.Rc)(2,"Bold"),Object(o.dc)(),Object(o.ec)(3,"mat-button-toggle",2),Object(o.Rc)(4,"Italic"),Object(o.dc)(),Object(o.ec)(5,"mat-button-toggle",3),Object(o.Rc)(6,"Underline"),Object(o.dc)(),Object(o.dc)())},directives:[n.b,n.a],encapsulation:2}),t})(),r=(()=>{class t{constructor(){this.disabled=!1,this.appearance="standard"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(o.Sb)({type:t,selectors:[["button-toggle-harness-example"]],decls:5,vars:2,consts:[[3,"disabled","appearance"],["value","1"],["value","2"]],template:function(t,e){1&t&&(Object(o.ec)(0,"mat-button-toggle-group",0),Object(o.ec)(1,"mat-button-toggle",1),Object(o.Rc)(2,"One"),Object(o.dc)(),Object(o.ec)(3,"mat-button-toggle",2),Object(o.Rc)(4,"Two"),Object(o.dc)(),Object(o.dc)()),2&t&&Object(o.vc)("disabled",e.disabled)("appearance",e.appearance)},directives:[n.b,n.a],encapsulation:2}),t})(),u=(()=>{class t{}return t.\u0275mod=Object(o.Wb)({type:t}),t.\u0275inj=Object(o.Vb)({factory:function(e){return new(e||t)},imports:[[n.c,c.b]]}),t})()},jaxi:function(t,e,a){"use strict";a.d(e,"a",function(){return f}),a.d(e,"b",function(){return m}),a.d(e,"c",function(){return O});var o=a("8LU1"),n=a("0EQZ"),c=a("fXoL"),l=a("3Pt+"),i=a("FKr1"),s=a("u47x");const r=["button"],u=["*"],g=new c.x("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"),b=new c.x("MatButtonToggleGroup"),d={provide:l.l,useExisting:Object(c.eb)(()=>m),multi:!0};let h=0;class p{constructor(t,e){this.source=t,this.value=e}}let m=(()=>{class t{constructor(t,e){this._changeDetector=t,this._vertical=!1,this._multiple=!1,this._disabled=!1,this._controlValueAccessorChangeFn=()=>{},this._onTouched=()=>{},this._name="mat-button-toggle-group-"+h++,this.valueChange=new c.s,this.change=new c.s,this.appearance=e&&e.appearance?e.appearance:"standard"}get name(){return this._name}set name(t){this._name=t,this._buttonToggles&&this._buttonToggles.forEach(t=>{t.name=this._name,t._markForCheck()})}get vertical(){return this._vertical}set vertical(t){this._vertical=Object(o.c)(t)}get value(){const t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(t=>t.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}get selected(){const t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=Object(o.c)(t)}get disabled(){return this._disabled}set disabled(t){this._disabled=Object(o.c)(t),this._buttonToggles&&this._buttonToggles.forEach(t=>t._markForCheck())}ngOnInit(){this._selectionModel=new n.c(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked))}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_emitChangeEvent(){const t=this.selected,e=Array.isArray(t)?t[t.length-1]:t,a=new p(e,this.value);this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(t,e,a=!1,o=!1){this.multiple||!this.selected||t.checked||(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(a)):this._updateModelValue(a)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return void 0!==this._rawValue&&(this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>null!=t.value&&e===t.value):t.value===this._rawValue)}_setSelectionByValue(t){this._rawValue=t,this._buttonToggles&&(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(t=>this._selectValue(t))):(this._clearSelection(),this._selectValue(t)))}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>t.checked=!1)}_selectValue(t){const e=this._buttonToggles.find(e=>null!=e.value&&e.value===t);e&&(e.checked=!0,this._selectionModel.select(e))}_updateModelValue(t){t&&this._emitChangeEvent(),this.valueChange.emit(this.value)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(c.i),c.Yb(g,8))},t.\u0275dir=c.Tb({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,e,a){if(1&t&&c.Rb(a,f,!0),2&t){let t;c.Bc(t=c.mc())&&(e._buttonToggles=t)}},hostAttrs:["role","group",1,"mat-button-toggle-group"],hostVars:5,hostBindings:function(t,e){2&t&&(c.Nb("aria-disabled",e.disabled),c.Qb("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard","standard"===e.appearance))},inputs:{appearance:"appearance",name:"name",vertical:"vertical",value:"value",multiple:"multiple",disabled:"disabled"},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[c.Lb([d,{provide:b,useExisting:t}])]}),t})();class _{}const v=Object(i.A)(_);let f=(()=>{class t extends v{constructor(t,e,a,o,n,l){super(),this._changeDetectorRef=e,this._elementRef=a,this._focusMonitor=o,this._isSingleSelector=!1,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new c.s;const i=Number(n);this.tabIndex=i||0===i?i:null,this.buttonToggleGroup=t,this.appearance=l&&l.appearance?l.appearance:"standard"}get buttonId(){return this.id+"-button"}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){const e=Object(o.c)(t);e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=Object(o.c)(t)}ngOnInit(){const t=this.buttonToggleGroup;this._isSingleSelector=t&&!t.multiple,this.id=this.id||"mat-button-toggle-"+h++,this._isSingleSelector&&(this.name=t.name),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){const t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){const t=!!this._isSingleSelector||!this._checked;t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.change.emit(new p(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(b,8),c.Yb(c.i),c.Yb(c.p),c.Yb(s.h),c.jc("tabindex"),c.Yb(g,8))},t.\u0275cmp=c.Sb({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(t,e){if(1&t&&c.Vc(r,!0),2&t){let t;c.Bc(t=c.mc())&&(e._buttonElement=t.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:12,hostBindings:function(t,e){1&t&&c.lc("focus",function(){return e.focus()}),2&t&&(c.Nb("aria-label",null)("aria-labelledby",null)("id",e.id)("name",null),c.Qb("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-appearance-standard","standard"===e.appearance))},inputs:{disableRipple:"disableRipple",ariaLabelledby:["aria-labelledby","ariaLabelledby"],tabIndex:"tabIndex",appearance:"appearance",checked:"checked",disabled:"disabled",id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],value:"value"},outputs:{change:"change"},exportAs:["matButtonToggle"],features:[c.Jb],ngContentSelectors:u,decls:6,vars:9,consts:[["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"id","disabled","click"],["button",""],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,e){if(1&t&&(c.uc(),c.ec(0,"button",0,1),c.lc("click",function(){return e._onButtonClick()}),c.ec(2,"span",2),c.tc(3),c.dc(),c.dc(),c.Zb(4,"span",3),c.Zb(5,"span",4)),2&t){const t=c.Cc(1);c.vc("id",e.buttonId)("disabled",e.disabled||null),c.Nb("tabindex",e.disabled?-1:e.tabIndex)("aria-pressed",e.checked)("name",e.name||null)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),c.Mb(5),c.vc("matRippleTrigger",t)("matRippleDisabled",e.disableRipple||e.disabled)}},directives:[i.t],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"],encapsulation:2,changeDetection:0}),t})(),O=(()=>{class t{}return t.\u0275mod=c.Wb({type:t}),t.\u0275inj=c.Vb({factory:function(e){return new(e||t)},imports:[[i.j,i.u],i.j]}),t})()}}]);