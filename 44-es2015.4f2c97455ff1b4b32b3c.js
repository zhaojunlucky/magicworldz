(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{Uef7:function(e,t,c){"use strict";c.r(t),c.d(t,"CdkScrollingExamplesModule",function(){return C}),c.d(t,"CdkVirtualScrollContextExample",function(){return s}),c.d(t,"CdkVirtualScrollCustomStrategyExample",function(){return m}),c.d(t,"CdkVirtualScrollDataSourceExample",function(){return u}),c.d(t,"CdkVirtualScrollDlExample",function(){return h}),c.d(t,"CdkVirtualScrollFixedBufferExample",function(){return v}),c.d(t,"CdkVirtualScrollHorizontalExample",function(){return g}),c.d(t,"CdkVirtualScrollOverviewExample",function(){return w}),c.d(t,"CdkVirtualScrollTemplateCacheExample",function(){return M});var a=c("vxfF"),i=c("fXoL"),n=c("0EQZ"),l=c("2Vo4"),r=c("quSY");function o(e,t){if(1&e&&(Object(i.ec)(0,"div"),Object(i.ec)(1,"div",2),Object(i.Sc)(2),Object(i.dc)(),Object(i.ec)(3,"div",2),Object(i.Sc)(4),Object(i.dc)(),Object(i.ec)(5,"div",2),Object(i.Sc)(6),Object(i.dc)(),Object(i.ec)(7,"div",2),Object(i.Sc)(8),Object(i.dc)(),Object(i.ec)(9,"div",2),Object(i.Sc)(10),Object(i.dc)(),Object(i.ec)(11,"div",2),Object(i.Sc)(12),Object(i.dc)(),Object(i.ec)(13,"div",2),Object(i.Sc)(14),Object(i.dc)(),Object(i.dc)()),2&e){const e=t.$implicit,c=t.index,a=t.count,n=t.first,l=t.last,r=t.even,o=t.odd;Object(i.Qb)("example-alternate",o),Object(i.Mb)(2),Object(i.Uc)("Item: ",e,""),Object(i.Mb)(2),Object(i.Uc)("Index: ",c,""),Object(i.Mb)(2),Object(i.Uc)("Count: ",a,""),Object(i.Mb)(2),Object(i.Uc)("First: ",n?"Yes":"No",""),Object(i.Mb)(2),Object(i.Uc)("Last: ",l?"Yes":"No",""),Object(i.Mb)(2),Object(i.Uc)("Even: ",r?"Yes":"No",""),Object(i.Mb)(2),Object(i.Uc)("Odd: ",o?"Yes":"No","")}}let s=(()=>{class e{constructor(){this.items=Array.from({length:1e5}).map((e,t)=>"Item #"+t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Sb)({type:e,selectors:[["cdk-virtual-scroll-context-example"]],decls:2,vars:2,consts:[[1,"example-viewport",3,"itemSize"],[3,"example-alternate",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item-detail"]],template:function(e,t){1&e&&(Object(i.ec)(0,"cdk-virtual-scroll-viewport",0),Object(i.Qc)(1,o,15,9,"div",1),Object(i.dc)()),2&e&&(Object(i.vc)("itemSize",126),Object(i.Mb)(1),Object(i.vc)("cdkVirtualForOf",t.items))},directives:[a.e,a.a,a.d],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail[_ngcontent-%COMP%] {\n  height: 18px;\n}\n\n.example-alternate[_ngcontent-%COMP%] {\n  background: rgba(127, 127, 127, 0.3);\n}"],changeDetection:0}),e})();function p(e,t){if(1&e&&(Object(i.ec)(0,"div",2),Object(i.Sc)(1),Object(i.dc)()),2&e){const e=t.$implicit;Object(i.Mb)(1),Object(i.Tc)(e)}}class d extends a.f{constructor(){super(50,250,500)}}let m=(()=>{class e{constructor(){this.items=Array.from({length:1e5}).map((e,t)=>"Item #"+t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Sb)({type:e,selectors:[["cdk-virtual-scroll-custom-strategy-example"]],features:[Object(i.Lb)([{provide:a.i,useClass:d}])],decls:2,vars:1,consts:[[1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(i.ec)(0,"cdk-virtual-scroll-viewport",0),Object(i.Qc)(1,p,2,1,"div",1),Object(i.dc)()),2&e&&(Object(i.Mb)(1),Object(i.vc)("cdkVirtualForOf",t.items))},directives:[a.e,a.d],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e})();function b(e,t){if(1&e&&(Object(i.ec)(0,"div",2),Object(i.Sc)(1),Object(i.dc)()),2&e){const e=t.$implicit;Object(i.Mb)(1),Object(i.Tc)(e||"Loading...")}}let u=(()=>{class e{constructor(){this.ds=new O}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Sb)({type:e,selectors:[["cdk-virtual-scroll-data-source-example"]],decls:2,vars:1,consts:[["itemSize","50",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(i.ec)(0,"cdk-virtual-scroll-viewport",0),Object(i.Qc)(1,b,2,1,"div",1),Object(i.dc)()),2&e&&(Object(i.Mb)(1),Object(i.vc)("cdkVirtualForOf",t.ds))},directives:[a.e,a.a,a.d],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e})();class O extends n.b{constructor(){super(...arguments),this._length=1e5,this._pageSize=100,this._cachedData=Array.from({length:this._length}),this._fetchedPages=new Set,this._dataStream=new l.a(this._cachedData),this._subscription=new r.a}connect(e){return this._subscription.add(e.viewChange.subscribe(e=>{const t=this._getPageForIndex(e.start),c=this._getPageForIndex(e.end-1);for(let a=t;a<=c;a++)this._fetchPage(a)})),this._dataStream}disconnect(){this._subscription.unsubscribe()}_getPageForIndex(e){return Math.floor(e/this._pageSize)}_fetchPage(e){this._fetchedPages.has(e)||(this._fetchedPages.add(e),setTimeout(()=>{this._cachedData.splice(e*this._pageSize,this._pageSize,...Array.from({length:this._pageSize}).map((t,c)=>"Item #"+(e*this._pageSize+c))),this._dataStream.next(this._cachedData)},1e3*Math.random()+200))}}function j(e,t){if(1&e&&(Object(i.cc)(0),Object(i.ec)(1,"dt",3),Object(i.Sc)(2),Object(i.dc)(),Object(i.ec)(3,"dd",4),Object(i.Sc)(4),Object(i.dc)(),Object(i.bc)()),2&e){const e=t.$implicit;Object(i.Mb)(2),Object(i.Tc)(e.name),Object(i.Mb)(2),Object(i.Tc)(e.capital)}}let h=(()=>{class e{constructor(){this.states=[{name:"Alabama",capital:"Montgomery"},{name:"Alaska",capital:"Juneau"},{name:"Arizona",capital:"Phoenix"},{name:"Arkansas",capital:"Little Rock"},{name:"California",capital:"Sacramento"},{name:"Colorado",capital:"Denver"},{name:"Connecticut",capital:"Hartford"},{name:"Delaware",capital:"Dover"},{name:"Florida",capital:"Tallahassee"},{name:"Georgia",capital:"Atlanta"},{name:"Hawaii",capital:"Honolulu"},{name:"Idaho",capital:"Boise"},{name:"Illinois",capital:"Springfield"},{name:"Indiana",capital:"Indianapolis"},{name:"Iowa",capital:"Des Moines"},{name:"Kansas",capital:"Topeka"},{name:"Kentucky",capital:"Frankfort"},{name:"Louisiana",capital:"Baton Rouge"},{name:"Maine",capital:"Augusta"},{name:"Maryland",capital:"Annapolis"},{name:"Massachusetts",capital:"Boston"},{name:"Michigan",capital:"Lansing"},{name:"Minnesota",capital:"St. Paul"},{name:"Mississippi",capital:"Jackson"},{name:"Missouri",capital:"Jefferson City"},{name:"Montana",capital:"Helena"},{name:"Nebraska",capital:"Lincoln"},{name:"Nevada",capital:"Carson City"},{name:"New Hampshire",capital:"Concord"},{name:"New Jersey",capital:"Trenton"},{name:"New Mexico",capital:"Santa Fe"},{name:"New York",capital:"Albany"},{name:"North Carolina",capital:"Raleigh"},{name:"North Dakota",capital:"Bismarck"},{name:"Ohio",capital:"Columbus"},{name:"Oklahoma",capital:"Oklahoma City"},{name:"Oregon",capital:"Salem"},{name:"Pennsylvania",capital:"Harrisburg"},{name:"Rhode Island",capital:"Providence"},{name:"South Carolina",capital:"Columbia"},{name:"South Dakota",capital:"Pierre"},{name:"Tennessee",capital:"Nashville"},{name:"Texas",capital:"Austin"},{name:"Utah",capital:"Salt Lake City"},{name:"Vermont",capital:"Montpelier"},{name:"Virginia",capital:"Richmond"},{name:"Washington",capital:"Olympia"},{name:"West Virginia",capital:"Charleston"},{name:"Wisconsin",capital:"Madison"},{name:"Wyoming",capital:"Cheyenne"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Sb)({type:e,selectors:[["cdk-virtual-scroll-dl-example"]],decls:3,vars:1,consts:[["itemSize","60",1,"example-viewport"],[1,"example-dl"],[4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-dt"],[1,"example-dd"]],template:function(e,t){1&e&&(Object(i.ec)(0,"cdk-virtual-scroll-viewport",0),Object(i.ec)(1,"dl",1),Object(i.Qc)(2,j,5,2,"ng-container",2),Object(i.dc)(),Object(i.dc)()),2&e&&(Object(i.Mb)(2),Object(i.vc)("cdkVirtualForOf",t.states))},directives:[a.e,a.a,a.d],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt[_ngcontent-%COMP%] {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd[_ngcontent-%COMP%] {\n  height: 30px;\n}"],changeDetection:0}),e})();function x(e,t){if(1&e&&(Object(i.ec)(0,"div",2),Object(i.Sc)(1),Object(i.dc)()),2&e){const e=t.$implicit;Object(i.Mb)(1),Object(i.Tc)(e)}}let v=(()=>{class e{constructor(){this.items=Array.from({length:1e5}).map((e,t)=>"Item #"+t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Sb)({type:e,selectors:[["cdk-virtual-scroll-fixed-buffer-example"]],decls:2,vars:1,consts:[["itemSize","50","minBufferPx","200","maxBufferPx","400",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(i.ec)(0,"cdk-virtual-scroll-viewport",0),Object(i.Qc)(1,x,2,1,"div",1),Object(i.dc)()),2&e&&(Object(i.Mb)(1),Object(i.vc)("cdkVirtualForOf",t.items))},directives:[a.e,a.a,a.d],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e})();function f(e,t){if(1&e&&(Object(i.ec)(0,"div",3),Object(i.Sc)(1),Object(i.dc)()),2&e){const e=t.$implicit;Object(i.Mb)(1),Object(i.Tc)(e)}}let g=(()=>{class e{constructor(){this.items=Array.from({length:1e5}).map((e,t)=>"Item #"+t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Sb)({type:e,selectors:[["cdk-virtual-scroll-horizontal-example"]],decls:3,vars:1,consts:[[1,"cdk-virtual-scroll-data-source-example"],["orientation","horizontal","itemSize","50",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(i.ec)(0,"div",0),Object(i.ec)(1,"cdk-virtual-scroll-viewport",1),Object(i.Qc)(2,f,2,1,"div",2),Object(i.dc)(),Object(i.dc)()),2&e&&(Object(i.Mb)(2),Object(i.vc)("cdkVirtualForOf",t.items))},directives:[a.e,a.a,a.d],styles:[".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"],encapsulation:2,changeDetection:0}),e})();function k(e,t){if(1&e&&(Object(i.ec)(0,"div",2),Object(i.Sc)(1),Object(i.dc)()),2&e){const e=t.$implicit;Object(i.Mb)(1),Object(i.Tc)(e)}}let w=(()=>{class e{constructor(){this.items=Array.from({length:1e5}).map((e,t)=>"Item #"+t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Sb)({type:e,selectors:[["cdk-virtual-scroll-overview-example"]],decls:2,vars:1,consts:[["itemSize","50",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(i.ec)(0,"cdk-virtual-scroll-viewport",0),Object(i.Qc)(1,k,2,1,"div",1),Object(i.dc)()),2&e&&(Object(i.Mb)(1),Object(i.vc)("cdkVirtualForOf",t.items))},directives:[a.e,a.a,a.d],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e})();function S(e,t){if(1&e&&(Object(i.ec)(0,"div",2),Object(i.Sc)(1),Object(i.dc)()),2&e){const e=t.$implicit;Object(i.Mb)(1),Object(i.Tc)(e)}}let M=(()=>{class e{constructor(){this.items=Array.from({length:1e5}).map((e,t)=>"Item #"+t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Sb)({type:e,selectors:[["cdk-virtual-scroll-template-cache-example"]],decls:2,vars:2,consts:[["itemSize","50",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTemplateCacheSize"],[1,"example-item"]],template:function(e,t){1&e&&(Object(i.ec)(0,"cdk-virtual-scroll-viewport",0),Object(i.Qc)(1,S,2,1,"div",1),Object(i.dc)()),2&e&&(Object(i.Mb)(1),Object(i.vc)("cdkVirtualForOf",t.items)("cdkVirtualForTemplateCacheSize",0))},directives:[a.e,a.a,a.d],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e})(),C=(()=>{class e{}return e.\u0275mod=Object(i.Wb)({type:e}),e.\u0275inj=Object(i.Vb)({factory:function(t){return new(t||e)},imports:[[a.h]]}),e})()}}]);