!function(){function t(t,e){for(var c=0;c<e.length;c++){var i=e[c];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,c,i){return c&&t(e.prototype,c),i&&t(e,i),e}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{cMCA:function(t,i,n){"use strict";n.r(i),n.d(i,"CdkTextFieldExamplesModule",function(){return w}),n.d(i,"TextFieldAutofillDirectiveExample",function(){return d}),n.d(i,"TextFieldAutofillMonitorExample",function(){return g}),n.d(i,"TextFieldAutosizeTextareaExample",function(){return S});var b=n("ihCf"),o=n("ofXK"),a=n("fXoL"),u=n("bTqV"),r=n("qFsG"),l=n("d3UM"),f=n("kmnG"),s=n("IzEk"),O=n("FKr1");function j(t,e){1&t&&(Object(a.ec)(0,"mat-hint"),Object(a.Sc)(1,"Autofilled!"),Object(a.dc)())}function m(t,e){1&t&&(Object(a.ec)(0,"mat-hint"),Object(a.Sc)(1,"Autofilled!"),Object(a.dc)())}var d=function(){var t=function t(){c(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(a.Sb)({type:t,selectors:[["text-field-autofill-directive-example"]],decls:13,vars:2,consts:[[3,"submit"],["matInput","",3,"cdkAutofill"],[4,"ngIf"],["mat-raised-button",""]],template:function(t,e){1&t&&(Object(a.ec)(0,"form",0),Object(a.lc)("submit",function(t){return t.preventDefault()}),Object(a.ec)(1,"mat-form-field"),Object(a.ec)(2,"mat-label"),Object(a.Sc)(3,"First name"),Object(a.dc)(),Object(a.ec)(4,"input",1),Object(a.lc)("cdkAutofill",function(t){return e.firstNameAutofilled=t.isAutofilled}),Object(a.dc)(),Object(a.Qc)(5,j,2,0,"mat-hint",2),Object(a.dc)(),Object(a.ec)(6,"mat-form-field"),Object(a.ec)(7,"mat-label"),Object(a.Sc)(8,"Last name"),Object(a.dc)(),Object(a.ec)(9,"input",1),Object(a.lc)("cdkAutofill",function(t){return e.lastNameAutofilled=t.isAutofilled}),Object(a.dc)(),Object(a.Qc)(10,m,2,0,"mat-hint",2),Object(a.dc)(),Object(a.ec)(11,"button",3),Object(a.Sc)(12,"Submit"),Object(a.dc)(),Object(a.dc)()),2&t&&(Object(a.Mb)(5),Object(a.vc)("ngIf",e.firstNameAutofilled),Object(a.Mb)(5),Object(a.vc)("ngIf",e.lastNameAutofilled))},directives:[f.c,f.g,r.b,b.b,o.p,u.b,f.f],styles:["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),t}(),p=["first"],v=["last"];function x(t,e){1&t&&(Object(a.ec)(0,"mat-hint"),Object(a.Sc)(1,"Autofilled!"),Object(a.dc)())}function h(t,e){1&t&&(Object(a.ec)(0,"mat-hint"),Object(a.Sc)(1,"Autofilled!"),Object(a.dc)())}var g=function(){var t=function(){function t(e){c(this,t),this._autofill=e}return e(t,[{key:"ngAfterViewInit",value:function(){var t=this;this._autofill.monitor(this.firstName).subscribe(function(e){return t.firstNameAutofilled=e.isAutofilled}),this._autofill.monitor(this.lastName).subscribe(function(e){return t.lastNameAutofilled=e.isAutofilled})}},{key:"ngOnDestroy",value:function(){this._autofill.stopMonitoring(this.firstName),this._autofill.stopMonitoring(this.lastName)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(Object(a.Yb)(b.a))},t.\u0275cmp=Object(a.Sb)({type:t,selectors:[["text-field-autofill-monitor-example"]],viewQuery:function(t,e){var c;(1&t&&(Object(a.Wc)(p,!0,a.p),Object(a.Wc)(v,!0,a.p)),2&t)&&(Object(a.Bc)(c=Object(a.mc)())&&(e.firstName=c.first),Object(a.Bc)(c=Object(a.mc)())&&(e.lastName=c.first))},decls:15,vars:2,consts:[[3,"submit"],["matInput",""],["first",""],[4,"ngIf"],["last",""],["mat-raised-button",""]],template:function(t,e){1&t&&(Object(a.ec)(0,"form",0),Object(a.lc)("submit",function(t){return t.preventDefault()}),Object(a.ec)(1,"mat-form-field"),Object(a.ec)(2,"mat-label"),Object(a.Sc)(3,"First name"),Object(a.dc)(),Object(a.Zb)(4,"input",1,2),Object(a.Qc)(6,x,2,0,"mat-hint",3),Object(a.dc)(),Object(a.ec)(7,"mat-form-field"),Object(a.ec)(8,"mat-label"),Object(a.Sc)(9,"Last name"),Object(a.dc)(),Object(a.Zb)(10,"input",1,4),Object(a.Qc)(12,h,2,0,"mat-hint",3),Object(a.dc)(),Object(a.ec)(13,"button",5),Object(a.Sc)(14,"Submit"),Object(a.dc)(),Object(a.dc)()),2&t&&(Object(a.Mb)(6),Object(a.vc)("ngIf",e.firstNameAutofilled),Object(a.Mb)(6),Object(a.vc)("ngIf",e.lastNameAutofilled))},directives:[f.c,f.g,r.b,o.p,u.b,f.f],styles:["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),t}(),A=["autosize"],S=function(){var t=function(){function t(e){c(this,t),this._ngZone=e}return e(t,[{key:"triggerResize",value:function(){var t=this;this._ngZone.onStable.pipe(Object(s.a)(1)).subscribe(function(){return t.autosize.resizeToFitContent(!0)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(Object(a.Yb)(a.I))},t.\u0275cmp=Object(a.Sb)({type:t,selectors:[["text-field-autosize-textarea-example"]],viewQuery:function(t,e){var c;(1&t&&Object(a.Wc)(A,!0),2&t)&&(Object(a.Bc)(c=Object(a.mc)())&&(e.autosize=c.first))},decls:22,vars:2,consts:[["value","16px",3,"selectionChange"],["fontSize",""],["value","10px"],["value","12px"],["value","14px"],["value","16px"],["value","18px"],["value","20px"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","1","cdkAutosizeMaxRows","5"],["autosize","cdkTextareaAutosize"]],template:function(t,e){if(1&t&&(Object(a.ec)(0,"mat-form-field"),Object(a.ec)(1,"mat-label"),Object(a.Sc)(2,"Font size"),Object(a.dc)(),Object(a.ec)(3,"mat-select",0,1),Object(a.lc)("selectionChange",function(){return e.triggerResize()}),Object(a.ec)(5,"mat-option",2),Object(a.Sc)(6,"10px"),Object(a.dc)(),Object(a.ec)(7,"mat-option",3),Object(a.Sc)(8,"12px"),Object(a.dc)(),Object(a.ec)(9,"mat-option",4),Object(a.Sc)(10,"14px"),Object(a.dc)(),Object(a.ec)(11,"mat-option",5),Object(a.Sc)(12,"16px"),Object(a.dc)(),Object(a.ec)(13,"mat-option",6),Object(a.Sc)(14,"18px"),Object(a.dc)(),Object(a.ec)(15,"mat-option",7),Object(a.Sc)(16,"20px"),Object(a.dc)(),Object(a.dc)(),Object(a.dc)(),Object(a.ec)(17,"mat-form-field"),Object(a.ec)(18,"mat-label"),Object(a.Sc)(19,"Autosize textarea"),Object(a.dc)(),Object(a.Zb)(20,"textarea",8,9),Object(a.dc)()),2&t){var c=Object(a.Cc)(4);Object(a.Mb)(17),Object(a.Nc)("font-size",c.value)}},directives:[f.c,f.g,l.a,O.o,r.b,b.c],styles:["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),t}(),w=function(){var t=function t(){c(this,t)};return t.\u0275mod=Object(a.Wb)({type:t}),t.\u0275inj=Object(a.Vb)({factory:function(e){return new(e||t)},imports:[[o.c,b.d,u.c,r.c,l.b]]}),t}()}}])}();