(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"N/qJ":function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return m});var c=n("fXoL"),a=n("8LU1"),i=n("XNiG"),o=n("quSY"),s=n("0EQZ");let d=0;const r=new c.x("CdkAccordion");let l=(()=>{class e{constructor(){this._stateChanges=new i.a,this._openCloseAllActions=new i.a,this.id="cdk-accordion-"+d++,this._multi=!1}get multi(){return this._multi}set multi(e){this._multi=Object(a.c)(e)}openAll(){this._openCloseAll(!0)}closeAll(){this._openCloseAll(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete()}_openCloseAll(e){this.multi&&this._openCloseAllActions.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c.Tb({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[c.Lb([{provide:r,useExisting:e}]),c.Kb]}),e})(),p=0,b=(()=>{class e{constructor(e,t,n){this.accordion=e,this._changeDetectorRef=t,this._expansionDispatcher=n,this._openCloseAllSubscription=o.a.EMPTY,this.closed=new c.s,this.opened=new c.s,this.destroyed=new c.s,this.expandedChange=new c.s,this.id="cdk-accordion-child-"+p++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=n.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(e){e=Object(a.c)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(a.c)(e)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Yb(r,12),c.Yb(c.i),c.Yb(s.d))},e.\u0275dir=c.Tb({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[c.Lb([{provide:r,useValue:void 0}])]}),e})(),m=(()=>{class e{}return e.\u0275mod=c.Wb({type:e}),e.\u0275inj=c.Vb({factory:function(t){return new(t||e)}}),e})()},gwLG:function(e,t,n){"use strict";n.r(t),n.d(t,"ExpansionExamplesModule",function(){return W}),n.d(t,"ExpansionExpandCollapseAllExample",function(){return U}),n.d(t,"ExpansionHarnessExample",function(){return J}),n.d(t,"ExpansionOverviewExample",function(){return K}),n.d(t,"ExpansionStepsExample",function(){return B});var c=n("fXoL"),a=n("bTqV"),i=n("iadO"),o=n("FKr1"),s=n("N/qJ"),d=n("+rOU"),r=n("ofXK"),l=n("8LU1"),p=n("u47x"),b=n("/uUt"),m=n("JX91"),h=n("pLZG"),u=n("IzEk"),O=n("FtGj"),g=n("R1ws"),j=n("XNiG"),x=n("quSY"),f=n("EY2u"),_=n("VRyK"),y=n("R0Ic"),S=n("0EQZ");const w=["body"];function C(e,t){}const v=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],A=["mat-expansion-panel-header","*","mat-action-row"];function k(e,t){if(1&e&&c.Zb(0,"span",2),2&e){const e=c.pc();c.vc("@indicatorRotate",e._getExpandedState())}}const M=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],P=["mat-panel-title","mat-panel-description","*"],T=new c.x("MAT_ACCORDION"),E={indicatorRotate:Object(y.m)("indicatorRotate",[Object(y.j)("collapsed, void",Object(y.k)({transform:"rotate(0deg)"})),Object(y.j)("expanded",Object(y.k)({transform:"rotate(180deg)"})),Object(y.l)("expanded <=> collapsed, void => collapsed",Object(y.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))]),bodyExpansion:Object(y.m)("bodyExpansion",[Object(y.j)("collapsed, void",Object(y.k)({height:"0px",visibility:"hidden"})),Object(y.j)("expanded",Object(y.k)({height:"*",visibility:"visible"})),Object(y.l)("expanded <=> collapsed, void => collapsed",Object(y.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])};let D=(()=>{class e{constructor(e){this._template=e}}return e.\u0275fac=function(t){return new(t||e)(c.Yb(c.V))},e.\u0275dir=c.Tb({type:e,selectors:[["ng-template","matExpansionPanelContent",""]]}),e})(),I=0;const H=new c.x("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let Y=(()=>{class e extends s.b{constructor(e,t,n,a,i,o,s){super(e,t,n),this._viewContainerRef=a,this._animationMode=o,this._hideToggle=!1,this.afterExpand=new c.s,this.afterCollapse=new c.s,this._inputChanges=new j.a,this._headerId="mat-expansion-panel-header-"+I++,this._bodyAnimationDone=new j.a,this.accordion=e,this._document=i,this._bodyAnimationDone.pipe(Object(b.a)((e,t)=>e.fromState===t.fromState&&e.toState===t.toState)).subscribe(e=>{"void"!==e.fromState&&("expanded"===e.toState?this.afterExpand.emit():"collapsed"===e.toState&&this.afterCollapse.emit())}),s&&(this.hideToggle=s.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=Object(l.c)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe(Object(m.a)(null),Object(h.a)(()=>this.expanded&&!this._portal),Object(u.a)(1)).subscribe(()=>{this._portal=new d.i(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}}return e.\u0275fac=function(t){return new(t||e)(c.Yb(T,12),c.Yb(c.i),c.Yb(S.d),c.Yb(c.ab),c.Yb(r.e),c.Yb(g.a,8),c.Yb(H,8))},e.\u0275cmp=c.Sb({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(e,t,n){if(1&e&&c.Rb(n,D,!0),2&e){let e;c.Bc(e=c.mc())&&(t._lazyContent=e.first)}},viewQuery:function(e,t){if(1&e&&c.Wc(w,!0),2&e){let e;c.Bc(e=c.mc())&&(t._body=e.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,t){2&e&&c.Qb("mat-expanded",t.expanded)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-expansion-panel-spacing",t._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[c.Lb([{provide:T,useValue:void 0}]),c.Jb,c.Kb],ngContentSelectors:A,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,t){1&e&&(c.uc(v),c.tc(0),c.ec(1,"div",0,1),c.lc("@bodyExpansion.done",function(e){return t._bodyAnimationDone.next(e)}),c.ec(3,"div",2),c.tc(4,1),c.Qc(5,C,0,0,"ng-template",3),c.dc(),c.tc(6,2),c.dc()),2&e&&(c.Mb(1),c.vc("@bodyExpansion",t._getExpandedState())("id",t.id),c.Nb("aria-labelledby",t._headerId),c.Mb(4),c.vc("cdkPortalOutlet",t._portal))},directives:[d.c],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[E.bodyExpansion]},changeDetection:0}),e})(),N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c.Tb({type:e,selectors:[["mat-action-row"]],hostAttrs:[1,"mat-action-row"]}),e})(),R=(()=>{class e{constructor(e,t,n,c,a,i){this.panel=e,this._element=t,this._focusMonitor=n,this._changeDetectorRef=c,this._animationMode=i,this._parentChangeSubscription=x.a.EMPTY;const o=e.accordion?e.accordion._stateChanges.pipe(Object(h.a)(e=>!(!e.hideToggle&&!e.togglePosition))):f.a;this._parentChangeSubscription=Object(_.a)(e.opened,e.closed,o,e._inputChanges.pipe(Object(h.a)(e=>!!(e.hideToggle||e.disabled||e.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Object(h.a)(()=>e._containsFocus())).subscribe(()=>n.focusVia(t,"program")),a&&(this.expandedHeight=a.expandedHeight,this.collapsedHeight=a.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case O.o:case O.g:Object(O.t)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e="program",t){this._focusMonitor.focusVia(this._element,e,t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return e.\u0275fac=function(t){return new(t||e)(c.Yb(Y,1),c.Yb(c.p),c.Yb(p.h),c.Yb(c.i),c.Yb(H,8),c.Yb(g.a,8))},e.\u0275cmp=c.Sb({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,t){1&e&&c.lc("click",function(){return t._toggle()})("keydown",function(e){return t._keydown(e)}),2&e&&(c.Nb("id",t.panel._headerId)("tabindex",t.disabled?-1:0)("aria-controls",t._getPanelId())("aria-expanded",t._isExpanded())("aria-disabled",t.panel.disabled),c.Nc("height",t._getHeaderHeight()),c.Qb("mat-expanded",t._isExpanded())("mat-expansion-toggle-indicator-after","after"===t._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===t._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},ngContentSelectors:P,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,t){1&e&&(c.uc(M),c.ec(0,"span",0),c.tc(1),c.tc(2,1),c.tc(3,2),c.dc(),c.Qc(4,k,1,1,"span",1)),2&e&&(c.Mb(4),c.vc("ngIf",t._showToggle()))},directives:[r.p],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n'],encapsulation:2,data:{animation:[E.indicatorRotate]},changeDetection:0}),e})(),L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c.Tb({type:e,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),e})(),V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c.Tb({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),e})(),F=(()=>{class e extends s.a{constructor(){super(...arguments),this._ownHeaders=new c.M,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(e){this._hideToggle=Object(l.c)(e)}ngAfterContentInit(){this._headers.changes.pipe(Object(m.a)(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(e=>e.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new p.g(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._ownHeaders.destroy()}}return e.\u0275fac=function(t){return Z(t||e)},e.\u0275dir=c.Tb({type:e,selectors:[["mat-accordion"]],contentQueries:function(e,t,n){if(1&e&&c.Rb(n,R,!0),2&e){let e;c.Bc(e=c.mc())&&(t._headers=e)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,t){2&e&&c.Qb("mat-accordion-multi",t.multi)},inputs:{multi:"multi",displayMode:"displayMode",togglePosition:"togglePosition",hideToggle:"hideToggle"},exportAs:["matAccordion"],features:[c.Lb([{provide:T,useExisting:e}]),c.Jb]}),e})();const Z=c.gc(F);let Q=(()=>{class e{}return e.\u0275mod=c.Wb({type:e}),e.\u0275inj=c.Vb({factory:function(t){return new(t||e)},imports:[[r.c,o.j,s.c,d.h]]}),e})();var z=n("NFeN"),q=n("qFsG"),G=n("kmnG");let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(c.Sb)({type:e,selectors:[["expansion-expand-collapse-all-example"]],viewQuery:function(e,t){if(1&e&&Object(c.Wc)(F,!0),2&e){let e;Object(c.Bc)(e=Object(c.mc)())&&(t.accordion=e.first)}},decls:48,vars:1,consts:[[1,"example-action-buttons"],["mat-button","",3,"click"],["multi","",1,"example-headers-align"],["matInput",""],["matInput","","type","number","min","1"],["disabled",""],["matInput","","readonly","",3,"matDatepicker","focus"],["picker",""]],template:function(e,t){if(1&e){const e=Object(c.fc)();Object(c.ec)(0,"div",0),Object(c.ec)(1,"button",1),Object(c.lc)("click",function(){return t.accordion.openAll()}),Object(c.Sc)(2,"Expand All"),Object(c.dc)(),Object(c.ec)(3,"button",1),Object(c.lc)("click",function(){return t.accordion.closeAll()}),Object(c.Sc)(4,"Collapse All"),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(5,"mat-accordion",2),Object(c.ec)(6,"mat-expansion-panel"),Object(c.ec)(7,"mat-expansion-panel-header"),Object(c.ec)(8,"mat-panel-title"),Object(c.Sc)(9," Personal data "),Object(c.dc)(),Object(c.ec)(10,"mat-panel-description"),Object(c.Sc)(11," Type your name and age "),Object(c.ec)(12,"mat-icon"),Object(c.Sc)(13,"account_circle"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(14,"mat-form-field"),Object(c.ec)(15,"mat-label"),Object(c.Sc)(16,"First name"),Object(c.dc)(),Object(c.Zb)(17,"input",3),Object(c.dc)(),Object(c.ec)(18,"mat-form-field"),Object(c.ec)(19,"mat-label"),Object(c.Sc)(20,"Age"),Object(c.dc)(),Object(c.Zb)(21,"input",4),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(22,"mat-expansion-panel",5),Object(c.ec)(23,"mat-expansion-panel-header"),Object(c.ec)(24,"mat-panel-title"),Object(c.Sc)(25," Destination "),Object(c.dc)(),Object(c.ec)(26,"mat-panel-description"),Object(c.Sc)(27," Type the country name "),Object(c.ec)(28,"mat-icon"),Object(c.Sc)(29,"map"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(30,"mat-form-field"),Object(c.ec)(31,"mat-label"),Object(c.Sc)(32,"Country"),Object(c.dc)(),Object(c.Zb)(33,"input",3),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(34,"mat-expansion-panel"),Object(c.ec)(35,"mat-expansion-panel-header"),Object(c.ec)(36,"mat-panel-title"),Object(c.Sc)(37," Day of the trip "),Object(c.dc)(),Object(c.ec)(38,"mat-panel-description"),Object(c.Sc)(39," Inform the date you wish to travel "),Object(c.ec)(40,"mat-icon"),Object(c.Sc)(41,"date_range"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(42,"mat-form-field"),Object(c.ec)(43,"mat-label"),Object(c.Sc)(44,"Date"),Object(c.dc)(),Object(c.ec)(45,"input",6),Object(c.lc)("focus",function(){return Object(c.Gc)(e),Object(c.Cc)(47).open()}),Object(c.dc)(),Object(c.dc)(),Object(c.Zb)(46,"mat-datepicker",null,7),Object(c.dc)(),Object(c.dc)()}if(2&e){const e=Object(c.Cc)(47);Object(c.Mb)(45),Object(c.vc)("matDatepicker",e)}},directives:[a.b,F,Y,R,V,L,z.a,G.c,G.g,q.b,i.g,i.f],styles:[".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"]}),e})(),K=(()=>{class e{constructor(){this.panelOpenState=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(c.Sb)({type:e,selectors:[["expansion-overview-example"]],decls:17,vars:1,consts:[["hideToggle",""],[3,"opened","closed"]],template:function(e,t){1&e&&(Object(c.ec)(0,"mat-accordion"),Object(c.ec)(1,"mat-expansion-panel",0),Object(c.ec)(2,"mat-expansion-panel-header"),Object(c.ec)(3,"mat-panel-title"),Object(c.Sc)(4," This is the expansion title "),Object(c.dc)(),Object(c.ec)(5,"mat-panel-description"),Object(c.Sc)(6," This is a summary of the content "),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(7,"p"),Object(c.Sc)(8,"This is the primary content of the panel."),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(9,"mat-expansion-panel",1),Object(c.lc)("opened",function(){return t.panelOpenState=!0})("closed",function(){return t.panelOpenState=!1}),Object(c.ec)(10,"mat-expansion-panel-header"),Object(c.ec)(11,"mat-panel-title"),Object(c.Sc)(12," Self aware panel "),Object(c.dc)(),Object(c.ec)(13,"mat-panel-description"),Object(c.Sc)(14),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(15,"p"),Object(c.Sc)(16,"I'm visible because I am open"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)()),2&e&&(Object(c.Mb)(14),Object(c.Uc)(" Currently I am ",t.panelOpenState?"open":"closed"," "))},directives:[F,Y,R,V,L],styles:[".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"]}),e})(),B=(()=>{class e{constructor(){this.step=0}setStep(e){this.step=e}nextStep(){this.step++}prevStep(){this.step--}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(c.Sb)({type:e,selectors:[["expansion-steps-example"]],decls:56,vars:4,consts:[[1,"example-headers-align"],["hideToggle","",3,"expanded","opened"],["matInput",""],["matInput","","type","number","min","1"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"click"],["matInput","","readonly","",3,"matDatepicker","focus"],["picker",""]],template:function(e,t){if(1&e){const e=Object(c.fc)();Object(c.ec)(0,"mat-accordion",0),Object(c.ec)(1,"mat-expansion-panel",1),Object(c.lc)("opened",function(){return t.setStep(0)}),Object(c.ec)(2,"mat-expansion-panel-header"),Object(c.ec)(3,"mat-panel-title"),Object(c.Sc)(4," Personal data "),Object(c.dc)(),Object(c.ec)(5,"mat-panel-description"),Object(c.Sc)(6," Type your name and age "),Object(c.ec)(7,"mat-icon"),Object(c.Sc)(8,"account_circle"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(9,"mat-form-field"),Object(c.ec)(10,"mat-label"),Object(c.Sc)(11,"First name"),Object(c.dc)(),Object(c.Zb)(12,"input",2),Object(c.dc)(),Object(c.ec)(13,"mat-form-field"),Object(c.ec)(14,"mat-label"),Object(c.Sc)(15,"Age"),Object(c.dc)(),Object(c.Zb)(16,"input",3),Object(c.dc)(),Object(c.ec)(17,"mat-action-row"),Object(c.ec)(18,"button",4),Object(c.lc)("click",function(){return t.nextStep()}),Object(c.Sc)(19,"Next"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(20,"mat-expansion-panel",1),Object(c.lc)("opened",function(){return t.setStep(1)}),Object(c.ec)(21,"mat-expansion-panel-header"),Object(c.ec)(22,"mat-panel-title"),Object(c.Sc)(23," Destination "),Object(c.dc)(),Object(c.ec)(24,"mat-panel-description"),Object(c.Sc)(25," Type the country name "),Object(c.ec)(26,"mat-icon"),Object(c.Sc)(27,"map"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(28,"mat-form-field"),Object(c.ec)(29,"mat-label"),Object(c.Sc)(30,"Country"),Object(c.dc)(),Object(c.Zb)(31,"input",2),Object(c.dc)(),Object(c.ec)(32,"mat-action-row"),Object(c.ec)(33,"button",5),Object(c.lc)("click",function(){return t.prevStep()}),Object(c.Sc)(34,"Previous"),Object(c.dc)(),Object(c.ec)(35,"button",4),Object(c.lc)("click",function(){return t.nextStep()}),Object(c.Sc)(36,"Next"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(37,"mat-expansion-panel",1),Object(c.lc)("opened",function(){return t.setStep(2)}),Object(c.ec)(38,"mat-expansion-panel-header"),Object(c.ec)(39,"mat-panel-title"),Object(c.Sc)(40," Day of the trip "),Object(c.dc)(),Object(c.ec)(41,"mat-panel-description"),Object(c.Sc)(42," Inform the date you wish to travel "),Object(c.ec)(43,"mat-icon"),Object(c.Sc)(44,"date_range"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(45,"mat-form-field"),Object(c.ec)(46,"mat-label"),Object(c.Sc)(47,"Date"),Object(c.dc)(),Object(c.ec)(48,"input",6),Object(c.lc)("focus",function(){return Object(c.Gc)(e),Object(c.Cc)(50).open()}),Object(c.dc)(),Object(c.dc)(),Object(c.Zb)(49,"mat-datepicker",null,7),Object(c.ec)(51,"mat-action-row"),Object(c.ec)(52,"button",5),Object(c.lc)("click",function(){return t.prevStep()}),Object(c.Sc)(53,"Previous"),Object(c.dc)(),Object(c.ec)(54,"button",4),Object(c.lc)("click",function(){return t.nextStep()}),Object(c.Sc)(55,"End"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)(),Object(c.dc)()}if(2&e){const e=Object(c.Cc)(50);Object(c.Mb)(1),Object(c.vc)("expanded",0===t.step),Object(c.Mb)(19),Object(c.vc)("expanded",1===t.step),Object(c.Mb)(17),Object(c.vc)("expanded",2===t.step),Object(c.Mb)(11),Object(c.vc)("matDatepicker",e)}},directives:[F,Y,R,V,L,z.a,G.c,G.g,q.b,N,a.b,i.g,i.f],styles:[".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(c.Sb)({type:e,selectors:[["expansion-harness-example"]],decls:7,vars:0,template:function(e,t){1&e&&(Object(c.ec)(0,"mat-accordion"),Object(c.ec)(1,"mat-expansion-panel"),Object(c.ec)(2,"mat-expansion-panel-header"),Object(c.ec)(3,"mat-panel-title"),Object(c.Sc)(4," Welcome "),Object(c.dc)(),Object(c.dc)(),Object(c.ec)(5,"p"),Object(c.Sc)(6,"I am the content!"),Object(c.dc)(),Object(c.dc)(),Object(c.dc)())},directives:[F,Y,R,V],encapsulation:2}),e})(),W=(()=>{class e{}return e.\u0275mod=Object(c.Wb)({type:e}),e.\u0275inj=Object(c.Vb)({factory:function(t){return new(t||e)},imports:[[a.c,i.h,o.m,Q,z.b,q.c]]}),e})()}}]);