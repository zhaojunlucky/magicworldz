!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var c=t[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}function e(n,e,c){return e&&t(n.prototype,e),c&&t(n,c),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{onAg:function(t,c,o){"use strict";o.r(c),o.d(c,"CdkA11yExamplesModule",function(){return l}),o.d(c,"FocusMonitorDirectivesExample",function(){return O}),o.d(c,"FocusMonitorFocusViaExample",function(){return d}),o.d(c,"FocusMonitorOverviewExample",function(){return g});var r=o("u47x"),i=o("fXoL"),u=o("d3UM"),b=o("kmnG"),s=o("FKr1"),O=function(){var t=function(){function t(e,c){n(this,t),this._ngZone=e,this._cdr=c,this.elementOrigin=this.formatOrigin(null),this.subtreeOrigin=this.formatOrigin(null)}return e(t,[{key:"formatOrigin",value:function(n){return n?n+" focused":"blurred"}},{key:"markForCheck",value:function(){var n=this;this._ngZone.run(function(){return n._cdr.markForCheck()})}}]),t}();return t.\u0275fac=function(n){return new(n||t)(Object(i.Yb)(i.I),Object(i.Yb)(i.i))},t.\u0275cmp=Object(i.Sb)({type:t,selectors:[["focus-monitor-directives-example"]],decls:11,vars:2,consts:[[1,"example-focus-monitor"],["cdkMonitorSubtreeFocus","",3,"cdkFocusChange"]],template:function(n,t){1&n&&(Object(i.ec)(0,"div",0),Object(i.ec)(1,"button",1),Object(i.lc)("cdkFocusChange",function(n){return t.elementOrigin=t.formatOrigin(n),t.markForCheck()}),Object(i.Rc)(2),Object(i.dc)(),Object(i.dc)(),Object(i.ec)(3,"div",0),Object(i.ec)(4,"div",1),Object(i.lc)("cdkFocusChange",function(n){return t.subtreeOrigin=t.formatOrigin(n),t.markForCheck()}),Object(i.ec)(5,"p"),Object(i.Rc)(6),Object(i.dc)(),Object(i.ec)(7,"button"),Object(i.Rc)(8,"Child Button 1"),Object(i.dc)(),Object(i.ec)(9,"button"),Object(i.Rc)(10,"Child Button 2"),Object(i.dc)(),Object(i.dc)(),Object(i.dc)()),2&n&&(Object(i.Mb)(2),Object(i.Tc)(" Focus Monitored Element (",t.elementOrigin,") "),Object(i.Mb)(4),Object(i.Tc)("Focus Monitored Subtree (",t.subtreeOrigin,")"))},directives:[r.e],styles:[".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),t}(),a=["monitored"],d=function(){var t=function(){function t(e,c,o){n(this,t),this.focusMonitor=e,this._cdr=c,this._ngZone=o,this.origin=this.formatOrigin(null)}return e(t,[{key:"ngAfterViewInit",value:function(){var n=this;this.focusMonitor.monitor(this.monitoredEl).subscribe(function(t){return n._ngZone.run(function(){n.origin=n.formatOrigin(t),n._cdr.markForCheck()})})}},{key:"ngOnDestroy",value:function(){this.focusMonitor.stopMonitoring(this.monitoredEl)}},{key:"formatOrigin",value:function(n){return n?n+" focused":"blurred"}}]),t}();return t.\u0275fac=function(n){return new(n||t)(Object(i.Yb)(r.h),Object(i.Yb)(i.i),Object(i.Yb)(i.I))},t.\u0275cmp=Object(i.Sb)({type:t,selectors:[["focus-monitor-focus-via-example"]],viewQuery:function(n,t){var e;(1&n&&Object(i.Vc)(a,!0),2&n)&&(Object(i.Bc)(e=Object(i.mc)())&&(t.monitoredEl=e.first))},decls:24,vars:1,consts:[[1,"example-focus-monitor"],["monitored",""],["unmonitored",""],["value","mouse"],["simulatedOrigin",""],["value","keyboard"],["value","touch"],["value","program"],[3,"click"]],template:function(n,t){if(1&n){var e=Object(i.fc)();Object(i.ec)(0,"div",0),Object(i.ec)(1,"button",null,1),Object(i.Rc)(3),Object(i.dc)(),Object(i.ec)(4,"button",null,2),Object(i.Rc)(6,"2. Not Monitored"),Object(i.dc)(),Object(i.dc)(),Object(i.ec)(7,"mat-form-field"),Object(i.ec)(8,"mat-label"),Object(i.Rc)(9,"Simulated focus origin"),Object(i.dc)(),Object(i.ec)(10,"mat-select",3,4),Object(i.ec)(12,"mat-option",3),Object(i.Rc)(13,"Mouse"),Object(i.dc)(),Object(i.ec)(14,"mat-option",5),Object(i.Rc)(15,"Keyboard"),Object(i.dc)(),Object(i.ec)(16,"mat-option",6),Object(i.Rc)(17,"Touch"),Object(i.dc)(),Object(i.ec)(18,"mat-option",7),Object(i.Rc)(19,"Programmatic"),Object(i.dc)(),Object(i.dc)(),Object(i.dc)(),Object(i.ec)(20,"button",8),Object(i.lc)("click",function(){Object(i.Fc)(e);var n=Object(i.Cc)(2),c=Object(i.Cc)(11);return t.focusMonitor.focusVia(n,c.value)}),Object(i.Rc)(21," Focus button #1\n"),Object(i.dc)(),Object(i.ec)(22,"button",8),Object(i.lc)("click",function(){Object(i.Fc)(e);var n=Object(i.Cc)(5),c=Object(i.Cc)(11);return t.focusMonitor.focusVia(n,c.value)}),Object(i.Rc)(23," Focus button #2\n"),Object(i.dc)()}2&n&&(Object(i.Mb)(3),Object(i.Tc)("1. Focus Monitored Element (",t.origin,")"))},directives:[b.c,b.g,u.a,s.o],styles:[".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),t}(),f=["element"],m=["subtree"],g=function(){var t=function(){function t(e,c,o){n(this,t),this._focusMonitor=e,this._cdr=c,this._ngZone=o,this.elementOrigin=this.formatOrigin(null),this.subtreeOrigin=this.formatOrigin(null)}return e(t,[{key:"ngAfterViewInit",value:function(){var n=this;this._focusMonitor.monitor(this.element).subscribe(function(t){return n._ngZone.run(function(){n.elementOrigin=n.formatOrigin(t),n._cdr.markForCheck()})}),this._focusMonitor.monitor(this.subtree,!0).subscribe(function(t){return n._ngZone.run(function(){n.subtreeOrigin=n.formatOrigin(t),n._cdr.markForCheck()})})}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this.element),this._focusMonitor.stopMonitoring(this.subtree)}},{key:"formatOrigin",value:function(n){return n?n+" focused":"blurred"}}]),t}();return t.\u0275fac=function(n){return new(n||t)(Object(i.Yb)(r.h),Object(i.Yb)(i.i),Object(i.Yb)(i.I))},t.\u0275cmp=Object(i.Sb)({type:t,selectors:[["focus-monitor-overview-example"]],viewQuery:function(n,t){var e;(1&n&&(Object(i.Vc)(f,!0),Object(i.Vc)(m,!0)),2&n)&&(Object(i.Bc)(e=Object(i.mc)())&&(t.element=e.first),Object(i.Bc)(e=Object(i.mc)())&&(t.subtree=e.first))},decls:13,vars:2,consts:[[1,"example-focus-monitor"],["element",""],["subtree",""]],template:function(n,t){1&n&&(Object(i.ec)(0,"div",0),Object(i.ec)(1,"button",null,1),Object(i.Rc)(3),Object(i.dc)(),Object(i.dc)(),Object(i.ec)(4,"div",0),Object(i.ec)(5,"div",null,2),Object(i.ec)(7,"p"),Object(i.Rc)(8),Object(i.dc)(),Object(i.ec)(9,"button"),Object(i.Rc)(10,"Child Button 1"),Object(i.dc)(),Object(i.ec)(11,"button"),Object(i.Rc)(12,"Child Button 2"),Object(i.dc)(),Object(i.dc)(),Object(i.dc)()),2&n&&(Object(i.Mb)(3),Object(i.Tc)("Focus Monitored Element (",t.elementOrigin,")"),Object(i.Mb)(5),Object(i.Tc)("Focus Monitored Subtree (",t.subtreeOrigin,")"))},styles:[".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),t}(),l=function(){var t=function t(){n(this,t)};return t.\u0275mod=Object(i.Wb)({type:t}),t.\u0275inj=Object(i.Vb)({factory:function(n){return new(n||t)},imports:[[r.a,u.b]]}),t}()}}])}();