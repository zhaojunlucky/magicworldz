(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{cMCA:function(t,e,i){"use strict";i.r(e),i.d(e,"CdkTextFieldExamplesModule",function(){return x}),i.d(e,"TextFieldAutofillDirectiveExample",function(){return m}),i.d(e,"TextFieldAutofillMonitorExample",function(){return j}),i.d(e,"TextFieldAutosizeTextareaExample",function(){return v});var s=i("ihCf"),n=i("ofXK"),o=i("fXoL"),c=i("bTqV"),r=i("qFsG"),a=i("d3UM"),l=i("kmnG"),u=i("IzEk"),d=i("FKr1");function h(t,e){1&t&&(Object(o.ec)(0,"mat-hint"),Object(o.Rc)(1,"Autofilled!"),Object(o.dc)())}function b(t,e){1&t&&(Object(o.ec)(0,"mat-hint"),Object(o.Rc)(1,"Autofilled!"),Object(o.dc)())}let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(o.Sb)({type:t,selectors:[["text-field-autofill-directive-example"]],decls:13,vars:2,consts:[[3,"submit"],["matInput","",3,"cdkAutofill"],[4,"ngIf"],["mat-raised-button",""]],template:function(t,e){1&t&&(Object(o.ec)(0,"form",0),Object(o.lc)("submit",function(t){return t.preventDefault()}),Object(o.ec)(1,"mat-form-field"),Object(o.ec)(2,"mat-label"),Object(o.Rc)(3,"First name"),Object(o.dc)(),Object(o.ec)(4,"input",1),Object(o.lc)("cdkAutofill",function(t){return e.firstNameAutofilled=t.isAutofilled}),Object(o.dc)(),Object(o.Pc)(5,h,2,0,"mat-hint",2),Object(o.dc)(),Object(o.ec)(6,"mat-form-field"),Object(o.ec)(7,"mat-label"),Object(o.Rc)(8,"Last name"),Object(o.dc)(),Object(o.ec)(9,"input",1),Object(o.lc)("cdkAutofill",function(t){return e.lastNameAutofilled=t.isAutofilled}),Object(o.dc)(),Object(o.Pc)(10,b,2,0,"mat-hint",2),Object(o.dc)(),Object(o.ec)(11,"button",3),Object(o.Rc)(12,"Submit"),Object(o.dc)(),Object(o.dc)()),2&t&&(Object(o.Mb)(5),Object(o.vc)("ngIf",e.firstNameAutofilled),Object(o.Mb)(5),Object(o.vc)("ngIf",e.lastNameAutofilled))},directives:[l.c,l.g,r.b,s.b,n.p,c.b,l.f],styles:["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),t})();const f=["first"],p=["last"];function _(t,e){1&t&&(Object(o.ec)(0,"mat-hint"),Object(o.Rc)(1,"Autofilled!"),Object(o.dc)())}function O(t,e){1&t&&(Object(o.ec)(0,"mat-hint"),Object(o.Rc)(1,"Autofilled!"),Object(o.dc)())}let j=(()=>{class t{constructor(t){this._autofill=t}ngAfterViewInit(){this._autofill.monitor(this.firstName).subscribe(t=>this.firstNameAutofilled=t.isAutofilled),this._autofill.monitor(this.lastName).subscribe(t=>this.lastNameAutofilled=t.isAutofilled)}ngOnDestroy(){this._autofill.stopMonitoring(this.firstName),this._autofill.stopMonitoring(this.lastName)}}return t.\u0275fac=function(e){return new(e||t)(Object(o.Yb)(s.a))},t.\u0275cmp=Object(o.Sb)({type:t,selectors:[["text-field-autofill-monitor-example"]],viewQuery:function(t,e){if(1&t&&(Object(o.Vc)(f,!0,o.p),Object(o.Vc)(p,!0,o.p)),2&t){let t;Object(o.Bc)(t=Object(o.mc)())&&(e.firstName=t.first),Object(o.Bc)(t=Object(o.mc)())&&(e.lastName=t.first)}},decls:15,vars:2,consts:[[3,"submit"],["matInput",""],["first",""],[4,"ngIf"],["last",""],["mat-raised-button",""]],template:function(t,e){1&t&&(Object(o.ec)(0,"form",0),Object(o.lc)("submit",function(t){return t.preventDefault()}),Object(o.ec)(1,"mat-form-field"),Object(o.ec)(2,"mat-label"),Object(o.Rc)(3,"First name"),Object(o.dc)(),Object(o.Zb)(4,"input",1,2),Object(o.Pc)(6,_,2,0,"mat-hint",3),Object(o.dc)(),Object(o.ec)(7,"mat-form-field"),Object(o.ec)(8,"mat-label"),Object(o.Rc)(9,"Last name"),Object(o.dc)(),Object(o.Zb)(10,"input",1,4),Object(o.Pc)(12,O,2,0,"mat-hint",3),Object(o.dc)(),Object(o.ec)(13,"button",5),Object(o.Rc)(14,"Submit"),Object(o.dc)(),Object(o.dc)()),2&t&&(Object(o.Mb)(6),Object(o.vc)("ngIf",e.firstNameAutofilled),Object(o.Mb)(6),Object(o.vc)("ngIf",e.lastNameAutofilled))},directives:[l.c,l.g,r.b,n.p,c.b,l.f],styles:["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),t})();const g=["autosize"];let v=(()=>{class t{constructor(t){this._ngZone=t}triggerResize(){this._ngZone.onStable.pipe(Object(u.a)(1)).subscribe(()=>this.autosize.resizeToFitContent(!0))}}return t.\u0275fac=function(e){return new(e||t)(Object(o.Yb)(o.I))},t.\u0275cmp=Object(o.Sb)({type:t,selectors:[["text-field-autosize-textarea-example"]],viewQuery:function(t,e){if(1&t&&Object(o.Vc)(g,!0),2&t){let t;Object(o.Bc)(t=Object(o.mc)())&&(e.autosize=t.first)}},decls:22,vars:2,consts:[["value","16px",3,"selectionChange"],["fontSize",""],["value","10px"],["value","12px"],["value","14px"],["value","16px"],["value","18px"],["value","20px"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","1","cdkAutosizeMaxRows","5"],["autosize","cdkTextareaAutosize"]],template:function(t,e){if(1&t&&(Object(o.ec)(0,"mat-form-field"),Object(o.ec)(1,"mat-label"),Object(o.Rc)(2,"Font size"),Object(o.dc)(),Object(o.ec)(3,"mat-select",0,1),Object(o.lc)("selectionChange",function(){return e.triggerResize()}),Object(o.ec)(5,"mat-option",2),Object(o.Rc)(6,"10px"),Object(o.dc)(),Object(o.ec)(7,"mat-option",3),Object(o.Rc)(8,"12px"),Object(o.dc)(),Object(o.ec)(9,"mat-option",4),Object(o.Rc)(10,"14px"),Object(o.dc)(),Object(o.ec)(11,"mat-option",5),Object(o.Rc)(12,"16px"),Object(o.dc)(),Object(o.ec)(13,"mat-option",6),Object(o.Rc)(14,"18px"),Object(o.dc)(),Object(o.ec)(15,"mat-option",7),Object(o.Rc)(16,"20px"),Object(o.dc)(),Object(o.dc)(),Object(o.dc)(),Object(o.ec)(17,"mat-form-field"),Object(o.ec)(18,"mat-label"),Object(o.Rc)(19,"Autosize textarea"),Object(o.dc)(),Object(o.Zb)(20,"textarea",8,9),Object(o.dc)()),2&t){const t=Object(o.Cc)(4);Object(o.Mb)(17),Object(o.Mc)("font-size",t.value)}},directives:[l.c,l.g,a.a,d.o,r.b,s.c],styles:["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),t})(),x=(()=>{class t{}return t.\u0275mod=Object(o.Wb)({type:t}),t.\u0275inj=Object(o.Vb)({factory:function(e){return new(e||t)},imports:[[n.c,s.d,c.c,r.c,a.b]]}),t})()},ihCf:function(t,e,i){"use strict";i.d(e,"a",function(){return b}),i.d(e,"b",function(){return m}),i.d(e,"c",function(){return f}),i.d(e,"d",function(){return p});var s=i("nLfN"),n=i("fXoL"),o=i("8LU1"),c=i("EY2u"),r=i("XNiG"),a=i("xgIS"),l=i("3UWI"),u=i("1G5W"),d=i("ofXK");const h=Object(s.f)({passive:!0});let b=(()=>{class t{constructor(t,e){this._platform=t,this._ngZone=e,this._monitoredElements=new Map}monitor(t){if(!this._platform.isBrowser)return c.a;const e=Object(o.e)(t),i=this._monitoredElements.get(e);if(i)return i.subject;const s=new r.a,n="cdk-text-field-autofilled",a=t=>{"cdk-text-field-autofill-start"!==t.animationName||e.classList.contains(n)?"cdk-text-field-autofill-end"===t.animationName&&e.classList.contains(n)&&(e.classList.remove(n),this._ngZone.run(()=>s.next({target:t.target,isAutofilled:!1}))):(e.classList.add(n),this._ngZone.run(()=>s.next({target:t.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{e.addEventListener("animationstart",a,h),e.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(e,{subject:s,unlisten:()=>{e.removeEventListener("animationstart",a,h)}}),s}stopMonitoring(t){const e=Object(o.e)(t),i=this._monitoredElements.get(e);i&&(i.unlisten(),i.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}}return t.\u0275fac=function(e){return new(e||t)(n.ic(s.a),n.ic(n.I))},t.\u0275prov=Object(n.Ub)({factory:function(){return new t(Object(n.ic)(s.a),Object(n.ic)(n.I))},token:t,providedIn:"root"}),t})(),m=(()=>{class t{constructor(t,e){this._elementRef=t,this._autofillMonitor=e,this.cdkAutofill=new n.s}ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(t=>this.cdkAutofill.emit(t))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}}return t.\u0275fac=function(e){return new(e||t)(n.Yb(n.p),n.Yb(b))},t.\u0275dir=n.Tb({type:t,selectors:[["","cdkAutofill",""]],outputs:{cdkAutofill:"cdkAutofill"}}),t})(),f=(()=>{class t{constructor(t,e,i,s){this._elementRef=t,this._platform=e,this._ngZone=i,this._destroyed=new r.a,this._enabled=!0,this._previousMinRows=-1,this._document=s,this._textareaElement=this._elementRef.nativeElement,this._measuringClass=e.FIREFOX?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring"}get minRows(){return this._minRows}set minRows(t){this._minRows=Object(o.f)(t),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(t){this._maxRows=Object(o.f)(t),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(t){t=Object(o.c)(t),this._enabled!==t&&((this._enabled=t)?this.resizeToFitContent(!0):this.reset())}_setMinHeight(){const t=this.minRows&&this._cachedLineHeight?this.minRows*this._cachedLineHeight+"px":null;t&&(this._textareaElement.style.minHeight=t)}_setMaxHeight(){const t=this.maxRows&&this._cachedLineHeight?this.maxRows*this._cachedLineHeight+"px":null;t&&(this._textareaElement.style.maxHeight=t)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{const t=this._getWindow();Object(a.a)(t,"resize").pipe(Object(l.a)(16),Object(u.a)(this._destroyed)).subscribe(()=>this.resizeToFitContent(!0))}))}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let t=this._textareaElement.cloneNode(!1);t.rows=1,t.style.position="absolute",t.style.visibility="hidden",t.style.border="none",t.style.padding="0",t.style.height="",t.style.minHeight="",t.style.maxHeight="",t.style.overflow="hidden",this._textareaElement.parentNode.appendChild(t),this._cachedLineHeight=t.clientHeight,this._textareaElement.parentNode.removeChild(t),this._setMinHeight(),this._setMaxHeight()}ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(t=!1){if(!this._enabled)return;if(this._cacheTextareaLineHeight(),!this._cachedLineHeight)return;const e=this._elementRef.nativeElement,i=e.value;if(!t&&this._minRows===this._previousMinRows&&i===this._previousValue)return;const s=e.placeholder;e.classList.add(this._measuringClass),e.placeholder="",e.style.height=e.scrollHeight-4+"px",e.classList.remove(this._measuringClass),e.placeholder=s,this._ngZone.runOutsideAngular(()=>{"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(()=>this._scrollToCaretPosition(e)):setTimeout(()=>this._scrollToCaretPosition(e))}),this._previousValue=i,this._previousMinRows=this._minRows}reset(){void 0!==this._initialHeight&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_scrollToCaretPosition(t){const{selectionStart:e,selectionEnd:i}=t,s=this._getDocument();this._destroyed.isStopped||s.activeElement!==t||t.setSelectionRange(e,i)}}return t.\u0275fac=function(e){return new(e||t)(n.Yb(n.p),n.Yb(s.a),n.Yb(n.I),n.Yb(d.e,8))},t.\u0275dir=n.Tb({type:t,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(t,e){1&t&&n.lc("input",function(){return e._noopInputHandler()})},inputs:{minRows:["cdkAutosizeMinRows","minRows"],maxRows:["cdkAutosizeMaxRows","maxRows"],enabled:["cdkTextareaAutosize","enabled"]},exportAs:["cdkTextareaAutosize"]}),t})(),p=(()=>{class t{}return t.\u0275mod=n.Wb({type:t}),t.\u0275inj=n.Vb({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})()},qFsG:function(t,e,i){"use strict";i.d(e,"a",function(){return d}),i.d(e,"b",function(){return p}),i.d(e,"c",function(){return _});var s=i("ihCf"),n=i("fXoL"),o=i("8LU1"),c=i("nLfN"),r=i("FKr1"),a=i("kmnG"),l=i("XNiG"),u=i("3Pt+");const d=new n.x("MAT_INPUT_VALUE_ACCESSOR"),h=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let b=0;class m{constructor(t,e,i,s){this._defaultErrorStateMatcher=t,this._parentForm=e,this._parentFormGroup=i,this.ngControl=s}}const f=Object(r.C)(m);let p=(()=>{class t extends f{constructor(t,e,i,s,n,o,r,a,u,d){super(o,s,n,i),this._elementRef=t,this._platform=e,this.ngControl=i,this._autofillMonitor=a,this._formField=d,this._uid="mat-input-"+b++,this.focused=!1,this.stateChanges=new l.a,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Object(c.e)().has(t));const h=this._elementRef.nativeElement,m=h.nodeName.toLowerCase();this._inputValueAccessor=r||h,this._previousNativeValue=this.value,this.id=this.id,e.IOS&&u.runOutsideAngular(()=>{t.nativeElement.addEventListener("keyup",t=>{let e=t.target;e.value||e.selectionStart||e.selectionEnd||(e.setSelectionRange(1,1),e.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===m,this._isTextarea="textarea"===m,this._isNativeSelect&&(this.controlType=h.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=Object(o.c)(t),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(t){this._id=t||this._uid}get required(){return this._required}set required(t){this._required=Object(o.c)(t)}get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Object(c.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(t){t!==this.value&&(this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Object(o.c)(t)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}_focusChanged(t){t===this.focused||this.readonly&&t||(this.focused=t,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var t,e;const i=(null===(e=null===(t=this._formField)||void 0===t?void 0:t._hideControlPlaceholder)||void 0===e?void 0:e.call(t))?null:this.placeholder;if(i!==this._previousPlaceholder){const t=this._elementRef.nativeElement;this._previousPlaceholder=i,i?t.setAttribute("placeholder",i):t.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_validateType(){h.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}return this.focused||!this.empty}setDescribedByIds(t){t.length?this._elementRef.nativeElement.setAttribute("aria-describedby",t.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}}return t.\u0275fac=function(e){return new(e||t)(n.Yb(n.p),n.Yb(c.a),n.Yb(u.m,10),n.Yb(u.p,8),n.Yb(u.i,8),n.Yb(r.d),n.Yb(d,10),n.Yb(s.a),n.Yb(n.I),n.Yb(a.a,8))},t.\u0275dir=n.Tb({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(t,e){1&t&&n.lc("focus",function(){return e._focusChanged(!0)})("blur",function(){return e._focusChanged(!1)})("input",function(){return e._onInput()}),2&t&&(n.hc("disabled",e.disabled)("required",e.required),n.Nb("id",e.id)("data-placeholder",e.placeholder)("readonly",e.readonly&&!e._isNativeSelect||null)("aria-invalid",e.errorState)("aria-required",e.required.toString()),n.Qb("mat-input-server",e._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[n.Lb([{provide:a.d,useExisting:t}]),n.Jb,n.Kb]}),t})(),_=(()=>{class t{}return t.\u0275mod=n.Wb({type:t}),t.\u0275inj=n.Vb({factory:function(e){return new(e||t)},providers:[r.d],imports:[[s.d,a.e,r.j],s.d,a.e]}),t})()}}]);