!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=o(e);if(t){var c=o(this).constructor;n=Reflect.construct(i,arguments,c)}else n=i.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{xPxx:function(e,a,o){"use strict";o.r(a),o.d(a,"BadgeExamplesModule",function(){return x}),o.d(a,"BadgeHarnessExample",function(){return w}),o.d(a,"BadgeOverviewExample",function(){return B});var r,s,d,b,l,u=o("fXoL"),f=o("FKr1"),m=o("u47x"),p=o("8LU1"),h=o("R1ws"),g=0,v=Object(f.B)(function e(){c(this,e)}),O=((s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(o,e);var a=i(o);function o(e,t,n,i,r){var s;return c(this,o),(s=a.call(this))._ngZone=e,s._elementRef=t,s._ariaDescriber=n,s._renderer=i,s._animationMode=r,s._hasContent=!1,s._color="primary",s._overlap=!0,s.position="above after",s.size="medium",s._id=g++,s}return t(o,[{key:"isAbove",value:function(){return-1===this.position.indexOf("below")}},{key:"isAfter",value:function(){return-1===this.position.indexOf("before")}},{key:"ngOnChanges",value:function(e){var t=e.content;if(t){var n=t.currentValue;this._hasContent=null!=n&&(""+n).trim().length>0,this._updateTextContent()}}},{key:"ngOnDestroy",value:function(){var e=this._badgeElement;e&&(this.description&&this._ariaDescriber.removeDescription(e,this.description),this._renderer.destroyNode&&this._renderer.destroyNode(e))}},{key:"getBadgeElement",value:function(){return this._badgeElement}},{key:"_updateTextContent",value:function(){return this._badgeElement?this._badgeElement.textContent=this._stringifyContent():this._badgeElement=this._createBadgeElement(),this._badgeElement}},{key:"_createBadgeElement",value:function(){var e=this._renderer.createElement("span");return this._clearExistingBadges("mat-badge-content"),e.setAttribute("id","mat-badge-content-"+this._id),e.classList.add("mat-badge-content"),e.textContent=this._stringifyContent(),"NoopAnimations"===this._animationMode&&e.classList.add("_mat-animation-noopable"),this.description&&e.setAttribute("aria-label",this.description),this._elementRef.nativeElement.appendChild(e),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(function(){requestAnimationFrame(function(){e.classList.add("mat-badge-active")})}):e.classList.add("mat-badge-active"),e}},{key:"_updateHostAriaDescription",value:function(e,t){var n=this._updateTextContent();t&&this._ariaDescriber.removeDescription(n,t),e&&this._ariaDescriber.describe(n,e)}},{key:"_setColor",value:function(e){if(e!==this._color){var t=this._elementRef.nativeElement.classList;this._color&&t.remove("mat-badge-"+this._color),e&&t.add("mat-badge-"+e)}}},{key:"_clearExistingBadges",value:function(e){for(var t=this._elementRef.nativeElement,n=t.children.length;n--;){var i=t.children[n];i.classList.contains(e)&&t.removeChild(i)}}},{key:"_stringifyContent",value:function(){var e=this.content;return null==e?"":""+e}},{key:"color",get:function(){return this._color},set:function(e){this._setColor(e),this._color=e}},{key:"overlap",get:function(){return this._overlap},set:function(e){this._overlap=Object(p.c)(e)}},{key:"description",get:function(){return this._description},set:function(e){if(e!==this._description){var t=this._badgeElement;this._updateHostAriaDescription(e,this._description),this._description=e,t&&(e?t.setAttribute("aria-label",e):t.removeAttribute("aria-label"))}}},{key:"hidden",get:function(){return this._hidden},set:function(e){this._hidden=Object(p.c)(e)}}]),o}(v)).\u0275fac=function(e){return new(e||s)(u.Yb(u.I),u.Yb(u.p),u.Yb(m.c),u.Yb(u.N),u.Yb(h.a,8))},s.\u0275dir=u.Tb({type:s,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,t){2&e&&u.Qb("mat-badge-overlap",t.overlap)("mat-badge-above",t.isAbove())("mat-badge-below",!t.isAbove())("mat-badge-before",!t.isAfter())("mat-badge-after",t.isAfter())("mat-badge-small","small"===t.size)("mat-badge-medium","medium"===t.size)("mat-badge-large","large"===t.size)("mat-badge-hidden",t.hidden||!t._hasContent)("mat-badge-disabled",t.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],position:["matBadgePosition","position"],size:["matBadgeSize","size"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],description:["matBadgeDescription","description"],hidden:["matBadgeHidden","hidden"],content:["matBadge","content"]},features:[u.Jb,u.Kb]}),s),_=((r=function e(){c(this,e)}).\u0275mod=u.Wb({type:r}),r.\u0275inj=u.Vb({factory:function(e){return new(e||r)},imports:[[m.a,f.j],f.j]}),r),j=o("bTqV"),y=o("NFeN"),B=((l=function(){function e(){c(this,e),this.hidden=!1}return t(e,[{key:"toggleBadgeVisibility",value:function(){this.hidden=!this.hidden}}]),e}()).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=Object(u.Sb)({type:l,selectors:[["badge-overview-example"]],decls:20,vars:1,consts:[["matBadge","4","matBadgeOverlap","false"],["matBadge","1","matBadgeSize","large"],["mat-raised-button","","color","primary","matBadge","8","matBadgePosition","before","matBadgeColor","accent"],["mat-raised-button","","matBadge","7",3,"matBadgeHidden","click"],["matBadge","15","matBadgeColor","warn"],[1,"cdk-visually-hidden"]],template:function(e,t){1&e&&(Object(u.ec)(0,"p"),Object(u.ec)(1,"span",0),Object(u.Sc)(2,"Text with a badge"),Object(u.dc)(),Object(u.dc)(),Object(u.ec)(3,"p"),Object(u.ec)(4,"span",1),Object(u.Sc)(5,"Text with large badge"),Object(u.dc)(),Object(u.dc)(),Object(u.ec)(6,"p"),Object(u.Sc)(7," Button with a badge on the left\n"),Object(u.ec)(8,"button",2),Object(u.Sc)(9," Action "),Object(u.dc)(),Object(u.dc)(),Object(u.ec)(10,"p"),Object(u.Sc)(11," Button toggles badge visibility\n"),Object(u.ec)(12,"button",3),Object(u.lc)("click",function(){return t.toggleBadgeVisibility()}),Object(u.Sc)(13," Hide "),Object(u.dc)(),Object(u.dc)(),Object(u.ec)(14,"p"),Object(u.Sc)(15," Icon with a badge\n"),Object(u.ec)(16,"mat-icon",4),Object(u.Sc)(17,"home"),Object(u.dc)(),Object(u.ec)(18,"span",5),Object(u.Sc)(19," Example with a home icon with overlaid badge showing the number 15 "),Object(u.dc)(),Object(u.dc)()),2&e&&(Object(u.Mb)(12),Object(u.vc)("matBadgeHidden",t.hidden))},directives:[O,j.b,y.a],encapsulation:2}),l),w=((b=function e(){c(this,e),this.simpleContent="S",this.overlap=!0,this.disabled=!0}).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=Object(u.Sb)({type:b,selectors:[["badge-harness-example"]],decls:6,vars:3,consts:[["mat-button","","id","simple",3,"matBadge"],["mat-button","","id","overlapping","matBadge","O",3,"matBadgeOverlap"],["mat-button","","id","disabled","matBadge","D",3,"matBadgeDisabled"]],template:function(e,t){1&e&&(Object(u.ec)(0,"button",0),Object(u.Sc)(1,"Simple"),Object(u.dc)(),Object(u.ec)(2,"button",1),Object(u.Sc)(3,"Overlapping"),Object(u.dc)(),Object(u.ec)(4,"button",2),Object(u.Sc)(5,"Disabled"),Object(u.dc)()),2&e&&(Object(u.vc)("matBadge",t.simpleContent),Object(u.Mb)(2),Object(u.vc)("matBadgeOverlap",t.overlap),Object(u.Mb)(2),Object(u.vc)("matBadgeDisabled",t.disabled))},directives:[j.b,O],encapsulation:2}),b),x=((d=function e(){c(this,e)}).\u0275mod=Object(u.Wb)({type:d}),d.\u0275inj=Object(u.Vb)({factory:function(e){return new(e||d)},imports:[[_,j.c,y.b]]}),d)}}])}();