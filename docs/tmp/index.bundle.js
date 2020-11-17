(()=>{"use strict";var e={247:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(713)),l=n(217),o=r(n(489)),u=r(n(279)),i=r(n(626)),s=r(n(656)),f=r(n(997)),c=r(n(161)),d=r(n(436)),g=r(n(207)),h=r(n(373)),I=r(n(630));class m{constructor(e,t,n,r){this.length=e,this.scale=t,this.value=n,this.sign=r}add(e,t){return m.fromInfo(a.default(this,m.from(e),t))}subtract(e,t){return m.fromInfo(I.default(this,m.from(e),t))}multiply(e,t){return m.fromInfo(g.default(this,m.from(e),t))}divide(e,t){return m.fromInfo(u.default(this,m.from(e),t))}raise(e,t){return m.fromInfo(h.default(this,m.from(e),t))}modulo(e,t){return m.fromInfo(d.default(this,m.from(e),t))}divideModulo(e,t){const[n,r]=i.default(this,m.from(e),t);return[m.from(n),m.from(r)]}compareTo(e){return o.default(this,m.from(e))}isEqualTo(e){return 0===this.compareTo(e)}isGreaterThan(e){return 1===this.compareTo(e)}isGreaterThanOrEqualTo(e){return this.compareTo(e)>=0}isLowerThan(e){return-1===this.compareTo(e)}isLowerThanOrEqualTo(e){return this.compareTo(e)<=0}isZero(){return s.default(this)}isOne(){return this.isEqualTo(m.ONE)}isMinusOne(){return this.isEqualTo(m.MINUS_ONE)}negate(){return m.fromInfo(l.negate(this))}isNegative(){return this.sign===l.DecimalSign.MINUS}isPositive(){return this.sign===l.DecimalSign.PLUS}toString(){return l.createStringFromInfo(this)}toInt(){return parseInt(this.toString(),l.DECIMAL_RADIX)}toFloat(){return parseFloat(this.toString())}toFixed(e){return l.createStringFromInfo(this,e)}static max(...e){return m.from(f.default(...e.map(m.from)))}static min(...e){return m.from(c.default(...e.map(m.from)))}static fromString(e){return m.fromInfo(l.createInfoFromString(e))}static fromInfo(e){return new m(e.length,e.scale,e.value,e.sign)}static fromNumber(e){return m.fromInfo(l.createInfoFromString(e.toString(l.DECIMAL_RADIX)))}static from(e){if(e instanceof m)return e;if("string"==typeof e)return m.fromString(e);if("number"==typeof e)return m.fromNumber(e);if(l.isInfo(e))return m.fromInfo(e);throw Error(`Don't know how to parse value of type ${typeof e} to decimal`)}static isDecimal(e){return e instanceof m}static isDecimalLike(e){return e instanceof m||["string","number"].includes(typeof e)||l.isInfo(e)}}m.ZERO=m.fromInfo(l.INFO_ZERO),m.ONE=m.fromInfo(l.INFO_ONE),m.MINUS_ONE=m.fromInfo(l.INFO_MINUS_ONE),t.default=m},713:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(20)),l=n(217),o=r(n(489)),u=r(n(369)),{max:i}=Math;t.default=function(e,t,n=i(e.scale,t.scale)){let r;if(e.sign===t.sign)return r=a.default(e,t,n),r.sign=e.sign,r;switch(o.default(e,t,!1)){case-1:r=u.default(t,e,n),r.sign=t.sign;break;case 0:const a=i(n,i(e.scale,t.scale));r=l.createInfo(1,a);break;case 1:r=u.default(e,t,n),r.sign=e.sign;break;default:throw Error("Invalid decimal comparison result")}return r}},20:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(217),l=r(n(549)),{max:o}=Math;t.default=function(e,t,n=0){const r=o(e.scale,t.scale),u=o(e.length,t.length)+1,i=a.createInfo(u,o(r,n));let s=e.scale,f=t.scale,c=e.length+s-1,d=t.length+f-1,g=r+u-1;if(s!==f)if(s>f)for(;s>f;g-=1,c-=1,s-=1)i.value[g]=e.value[c];else for(;f>s;g-=1,d-=1,f-=1)i.value[g]=t.value[d];s+=e.length,f+=t.length;let h,I=0;for(;s>0&&f>0;c-=1,d-=1,g-=1,s-=1,f-=1)h=e.value[c]+t.value[d]+I,h>=a.DECIMAL_RADIX?(I=1,h-=a.DECIMAL_RADIX):I=0,i.value[g]=h;if(0===s)for(;f>0;f-=1,d-=1,g-=1)h=t.value[d]+I,h>=a.DECIMAL_RADIX?(I=1,h-=a.DECIMAL_RADIX):I=0,i.value[g]=h;else for(;s>0;s-=1,c-=1,g-=1)h=e.value[c]+I,h>=a.DECIMAL_RADIX?(I=1,h-=a.DECIMAL_RADIX):I=0,i.value[g]=h;return 1===I&&(i.value[g]+=1),l.default(i)}},217:(e,t)=>{var n;function r(e=1,t=0){return{length:e,scale:t,sign:n.PLUS,value:new Uint8Array(e+t)}}function a(e,t=e.length,n=e.length-t,a=0){const l=r(t,n);return l.value.set(e,a),l}function l(e){return Object.assign({},e,{sign:e.sign===n.PLUS?n.MINUS:n.PLUS})}Object.defineProperty(t,"__esModule",{value:!0}),t.DECIMAL_VALIDATION_REGEX=/^[+\-]?\d+(\.\d+)?$/,t.DECIMAL_RADIX=10,function(e){e.PLUS="+",e.MINUS="-"}(n=t.DecimalSign||(t.DecimalSign={})),t.INFO_ZERO=r(),t.INFO_ONE=a([1]),t.INFO_MINUS_ONE=l(a([1])),t.createInfo=r,t.createInfoFromArray=a,t.createInfoFromString=function(e){if("string"!=typeof e)throw new TypeError(`Invalid ${typeof e} argument passed, string expected`);if(!e.match(t.DECIMAL_VALIDATION_REGEX))throw Error(`Invalid decimal string ${e} provided`);let r=e,l=n.PLUS;const o=e.charAt(0);o!==n.PLUS&&o!==n.MINUS||(o===n.MINUS&&(l=n.MINUS),r=r.substr(1)),r=r.replace(/^0+([0-9])/,"$1");const u=r.indexOf(".");let i=r.length,s=0;return-1!==u&&(s=i-(u+1),i-=s+1,r=r.replace(".","")),Object.assign({},a(r.split("").map((e=>parseInt(e,t.DECIMAL_RADIX))),i,s),{sign:l})},t.createStringFromInfo=function(e,t=e.scale){let r=e.value.subarray(0,e.length).join("");return t>0&&(r+="."+e.value.subarray(e.length,e.length+t).join("")),(e.sign===n.MINUS?n.MINUS:"")+r},t.createSubInfo=function(e,t=e.length,n=e.scale,r=0,l=0){return a(e.value.subarray(r),t,n,l)},t.copyInfo=function(e){return{sign:e.sign,length:e.length,scale:e.scale,value:new Uint8Array(e.value)}},t.isInfo=function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&"number"==typeof e.scale&&"string"==typeof e.sign&&[n.PLUS,n.MINUS].includes(e.sign)&&"object"==typeof e.value&&e.value instanceof Uint8Array},t.negate=l},489:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(217),{min:a}=Math;t.default=function(e,t,n=!0,l=!1){if(n&&e.sign!==t.sign)return e.sign===r.DecimalSign.PLUS?1:-1;if(e.length!==t.length)return e.length>t.length?n&&e.sign!==r.DecimalSign.PLUS?-1:1:n&&e.sign!==r.DecimalSign.PLUS?1:-1;let o=e.length+a(e.scale,t.scale),u=0,i=0;for(;o>0&&e.value[u]===t.value[i];)u+=1,i+=1,o-=1;if(l&&1===o&&e.scale===t.scale)return 0;if(0!==o)return e.value[u]>t.value[i]?n&&e.sign!==r.DecimalSign.PLUS?-1:1:n&&e.sign!==r.DecimalSign.PLUS?1:-1;if(e.scale!==t.scale)if(e.scale>t.scale){for(o=e.scale-t.scale;o>0;o-=1,u+=1)if(0!==e.value[u])return n&&e.sign!==r.DecimalSign.PLUS?-1:1}else for(o=t.scale-e.scale;o>0;o-=1,i+=1)if(0!==t.value[i])return n&&e.sign!==r.DecimalSign.PLUS?1:-1;return 0}},279:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(217),l=r(n(489)),o=r(n(656)),u=r(n(549)),{min:i,max:s,floor:f}=Math;function c(e,t,n,r,l,o){if(0===r)return void l.fill(0,0,n);if(1===r)return void l.set(e.subarray(t,t+n),o);let u,i,s=t+n-1,c=o+n-1;u=0;let d=n;for(;d>0;d-=1,s-=1,c-=1)i=e[s]*r+u,l[c]=i%a.DECIMAL_RADIX,u=f(i/a.DECIMAL_RADIX);0!==u&&(l[c]=u)}t.default=function(e,t,n=s(e.scale,t.scale)){if(o.default(t))throw Error("Division by zero");if(o.default(e))return a.createInfo(1,n);if(0===l.default(e,t))return a.createInfoFromArray([1],1,n);let r;if(0===t.scale&&1===t.length&&1===t.value[0])return r=a.createInfo(e.length,n),r.sign=e.sign===t.sign?a.DecimalSign.PLUS:a.DecimalSign.MINUS,r.value.fill(0,e.length,e.length+n),r.value.set(e.value.subarray(e.length+i(e.scale,n))),r;let d=t.scale,g=t.length+d-1;for(;d>0&&0===t.value[g];g-=1)d-=1;const h=e.length+d,I=e.scale-d,m=I<n?n-I:0,v=new Uint8Array(e.length+e.scale+m+2).fill(0);v.set(e.value,1);let p=t.length+d;const _=new Uint8Array(p+1);for(_.set(t.value),g=0;0===_[g];)g+=1,p-=1;let M,S;p>h+n?(S=n+1,M=!0):(M=!1,S=p>h?n+1:h-p+n+1),r=a.createInfo(S-n,n);const D=new Uint8Array(p+1),E=a.copyInfo(t);if(!M){const e=f(10/(t.value[g]+1));1!==e&&(c(v,0,h+I+m+1,e,v,0),c(t.value,g,p,e,t.value,g));let a=0,l=p>h?p-h:0;for(;a<=h+n-p;){let e;e=t.value[g]===v[a]?9:f((10*v[a]+v[a+1])/t.value[g]),t.value[g+1]*e>10*(10*v[a]+v[a+1]-t.value[g]*e)+v[a+2]&&(e-=1,t.value[g+1]*e>10*(10*v[a]+v[a+1]-t.value[g]*e)+v[a+2]&&(e-=1));let n=0;if(0!==e){D[0]=0,c(t.value,g,p,e,D,1);let r=a+p,l=p;for(let e=0;e<p+1;e+=1,r-=1){let e;l<0?e=v[r]-n:(e=v[r]-D[l]-n,l-=1),e<0?(e+=10,n=1):n=0,v[r]=e}}if(1===n){e-=1;let n=a+p,r=p-1,l=0;for(let e=0;e<p;e+=1,n-=1){let e;r<0?e=v[n]+l:(e=v[n]+t.value[r]+l,r-=1),e>9?(e-=10,l=1):l=0,v[n]=e}1===l&&(v[n]=(v[n]+1)%10)}r.value[l]=e,l+=1,a+=1}}return r.sign=e.sign===t.sign?a.DecimalSign.PLUS:a.DecimalSign.MINUS,o.default(r)&&(r.sign=a.DecimalSign.PLUS),Object.assign(t,E),u.default(r)}},626:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(217),l=r(n(279)),o=r(n(656)),u=r(n(997)),i=r(n(207)),s=r(n(630));t.default=function(e,t,n=Math.max(e.scale,t.scale)){if(o.default(t))throw Error("Division by zero");const r=Math.max(e.scale,t.scale+n),f=l.default(e,t,0),c=i.default(f,t,r),d=s.default(e,c,r);return[f,u.default(d,a.INFO_ZERO)]}},350:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(713));t.add=a.default;const l=r(n(20));t.addUnsigned=l.default;const o=n(217);t.copyInfo=o.copyInfo,t.createInfo=o.createInfo,t.createInfoFromArray=o.createInfoFromArray,t.createInfoFromString=o.createInfoFromString,t.createStringFromInfo=o.createStringFromInfo,t.createSubInfo=o.createSubInfo;const u=r(n(489));t.compare=u.default;const i=r(n(247)),s=r(n(279));t.divide=s.default;const f=r(n(656));t.isZero=f.default;const c=r(n(207));t.multiply=c.default;const d=r(n(549));t.removeLeadingZeroes=d.default;const g=r(n(630));t.subtract=g.default;const h=r(n(369));t.subtractUnsigned=h.default,t.default=i.default},656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e.length+e.scale;for(let n=0;n<t;n+=1)if(0!==e.value[n])return!1;return!0}},997:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(489));t.default=function(...e){if(e.length<2)throw Error("At least two values must be given");return 2===e.length?1===a.default(e[0],e[1])?e[0]:e[1]:(e.sort(a.default),e[e.length-1])}},161:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(489));t.default=function(...e){if(e.length<2)throw Error("At least two values must be given");return 2===e.length?1===a.default(e[0],e[1])?e[1]:e[0]:(e.sort(a.default),e[0])}},436:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(626)),{max:l}=Math;t.default=function(e,t,n=l(e.scale,t.scale)){return a.default(e,t,n)[1]}},207:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(217),l=r(n(656)),o=r(n(549)),u=r(n(630)),{min:i,max:s,floor:f}=Math;function c(e,t,n,r,l=0){const o=t+r+1,u=a.createInfo(o),c=t-1,d=r-1;let g,h,I=o-1,m=0;for(let t=0;t<o-1;t+=1,I-=1){for(g=c-s(0,t-r+1),h=d-i(t,r-1);g>=0&&h<=d;g-=1,h+=1)m+=e.value[g]*n.value[h];u.value[I]=f(m%a.DECIMAL_RADIX),m=f(m/a.DECIMAL_RADIX)}return u.value[I]=m,u}function d(e,t,n,r,i=0){if(t+r<80||t<20||r<20)return c(e,t,n,r,i);const h=f((s(t,r)+1)/2);let I,m,v,p;t<h?(m=a.createInfo(),I=a.createSubInfo(e,t,0)):(m=a.createSubInfo(e,t-h,0),I=a.createSubInfo(e,h,0,t-h)),r<h?(p=a.createInfo(),v=a.createSubInfo(n,r,0)):(p=a.createSubInfo(n,r-h,0),v=a.createSubInfo(n,h,0,r-h)),m=o.default(m),I=o.default(I),p=o.default(p),v=o.default(v);const _=l.default(m)||l.default(p),M=u.default(m,I),S=M.length,D=u.default(v,p),E=D.length;let b,A,y;b=_?a.createInfo():d(m,m.length,p,p.length),A=l.default(M)||l.default(D)?a.createInfo():d(M,S,D,E),y=l.default(I)||l.default(v)?a.createInfo():d(I,I.length,v,v.length);const N=t+r+1;let L=a.createInfo(N);return _||(L=g(L,b,2*h),L=g(L,b,h)),L=g(L,y,h),L=g(L,y,0),L=g(L,A,h,M.sign!==D.sign),L}function g(e,t,n,r=!1){const l=a.copyInfo(e);let o=t.length;if(0===t.value[0]&&(o-=1),l.length+l.scale<n+o)throw Error("len + scale < shift + count");let u=l.length+l.scale-n-1,i=t.length-1,s=0;if(r){for(;o>=0;o-=1,i-=1,u-=1)l.value[u]-=t.value[i]+s,l.value[u]<0?(s=1,l.value[u]+=a.DECIMAL_RADIX):s=0;for(;s;u-=1)l.value[u]-=s,l.value[u]<0?l.value[u]+=a.DECIMAL_RADIX:s=0}else{for(;o>=0;o-=1,i-=1,u-=1)l.value[u]+=t.value[i]+s,l.value[u]>a.DECIMAL_RADIX-1?(s=1,l.value[u]-=a.DECIMAL_RADIX):s=0;for(;s;u-=1)l.value[u]+=s,l.value[u]>a.DECIMAL_RADIX-1?l.value[u]-=a.DECIMAL_RADIX:s=0}return l}t.default=function(e,t,n=s(e.scale,t.scale)){const r=e.length+e.scale,u=t.length+t.scale,f=e.scale+t.scale,c=i(n,f);let g=d(e,r,t,u,f);return g.sign=e.sign===t.sign?a.DecimalSign.PLUS:a.DecimalSign.MINUS,g.length=u+r+1-f,g.scale=c,g.scale<g.value.length&&(g.value=g.value.subarray(0,g.length+g.scale)),g=o.default(g),l.default(g)&&(g.sign=a.DecimalSign.PLUS),g},t.multiplySimple=c,t.multiplyRecursive=d,t.shiftAddSubtract=g},373:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(217),l=r(n(279)),o=r(n(207)),{min:u,max:i}=Math;t.default=function(e,t,n=i(e.scale,t.scale)){if(t.scale>0)throw Error("Trying to build power with non-integral exponent");let r,s,f=parseInt(a.createStringFromInfo(t),a.DECIMAL_RADIX);if(isNaN(f)||0===f&&(t.length>1||0!==t.value[0]))throw Error("Exponent too large in raise");if(0===f)return a.createInfoFromArray([1],n);f<0?(r=!0,f=-f,s=n):(r=!1,s=u(e.scale*f,i(n,e.scale)));let c=a.copyInfo(e),d=e.scale;for(;0==(1&f);)d*=2,c=o.default(c,c,d),f>>=1;let g,h=a.copyInfo(c),I=d;for(f>>=1;f>0;)d*=2,c=o.default(c,c,d),1==(1&f)&&(I=d+I,h=o.default(h,c,I)),f>>=1;return r?g=l.default(a.INFO_ONE,h,s):(g=h,g.scale>s&&(g.scale=s,g.value.length>g.length+g.scale&&(g.value=g.value.subarray(0,g.length+g.scale)))),g}},549:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=0;for(;0===e.value[t]&&e.length-t>1;)t+=1;return t>0?{length:e.length-t,scale:e.scale,sign:e.sign,value:e.value.subarray(t)}:e}},630:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(20)),l=n(217),o=r(n(489)),u=r(n(369)),{max:i}=Math;t.default=function(e,t,n=i(e.scale,t.scale)){let r;if(e.sign!==t.sign)return r=a.default(e,t,n),r.sign=e.sign,r;switch(o.default(e,t,!1)){case-1:r=u.default(t,e,n),r.sign=t.sign===l.DecimalSign.PLUS?l.DecimalSign.MINUS:l.DecimalSign.PLUS;break;case 0:const a=i(n,i(e.scale,t.scale));r=l.createInfo(1,a);break;case 1:r=u.default(e,t,n),r.sign=e.sign;break;default:throw Error("Invalid decimal comparison result")}return r}},369:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(217),l=r(n(549)),{max:o,min:u}=Math;t.default=function(e,t,n=0){const r=o(e.length,t.length),i=o(e.scale,t.scale),s=u(e.length,t.length),f=u(e.scale,t.scale),c=a.createInfo(r,o(i,n));let d,g,h=e.length+e.scale-1,I=t.length+t.scale-1,m=r+i-1,v=0;if(e.scale!==f)for(d=e.scale-f;d>0;d-=1)c.value[m]=e.value[h],m-=1,h-=1;else for(d=t.scale-f;d>0;d-=1,I-=1,m-=1)g=0-t.value[I]-v,I-=1,g<0?(g+=a.DECIMAL_RADIX,v=1):v=0,c.value[m]=g;for(d=0;d<s+f;d+=1,h-=1,I-=1,m-=1)g=e.value[h]-t.value[I]-v,g<0?(g+=a.DECIMAL_RADIX,v=1):v=0,c.value[m]=g;if(r!==s)for(d=r-s;d>0;d-=1,h-=1,m-=1)g=e.value[h]-v,g<0?(g+=a.DECIMAL_RADIX,v=1):v=0,c.value[m]=g;return l.default(c)}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=Object.freeze({RAW:0,INTEGER:1,ASCII:2,DOUBLE:3,BINARY:4,UNIXTIME:5,DATETIME:6,UTF8:7,MPIP:8});var t=n(350),r=n.n(t);n.g.CRC16=function(){this.get=function(e){for(var t=0,n=e,r=0;r<n.length;r++){t^=n.charCodeAt(r);for(var a=8;0!==a;a--)0!=(1&t)?(t>>=1,t^=40961):t>>=1}return t}},n.g.Bip39Address=function(){let e=new HelpHex,t=new IEEE754;var n=new CRC16;const r="01";this.encodeObj=function(e){return this.encode(e.type,e.topic,e.payload)},this.encode=function(a,l,o){let u,i="";if(i+=e.fromNum(a),a===TypeBip39Address.ASCII)u=e.getASCII(o);else if(a===TypeBip39Address.INTEGER)u=e.fromNum(Number(o));else if(a===TypeBip39Address.UTF8)u=e.getUnicode(o);else if(a===TypeBip39Address.DOUBLE)u=e.fromNum(t.toIEEE754Double(o));else{if(a!==TypeBip39Address.MPIP)return null;u=e.fromNum(t.toIEEE754Double(o))}if(i+=u,i+=""!==l?r+e.getASCII(l):"03",i.length>36)return null;if(i.length<36){i+=r;for(var s=0;i.length<36;s++)i+=e.fromNum(Math.floor(93*Math.random())+32)}return i+=e.fromNum(n.get(i)),i},this.decode=function(t){if(40!==t.length)return null;let a="",l=!1,o="",u="",i=parseInt(t.substr(0,2),16),s=0;for(let e=2;e<36;e+=2){const n=t.substr(e,2);n!==r?"03"!==n?0===s?o+=n:1===s?a+=String.fromCharCode(parseInt(n,16)):u+=n:(l=!0,s++):s++}return t.substr(36,4)==e.fromNum(n.get(t.substr(0,36)))?(l&&(a=null),new ObjBip39Address(i,a,o)):null}},n.g.HelpHex=function(){function e(e){const t=e.match(/.{1,4}/g)||[];let n="";for(let e=0;e<t.length;e++)n+=String.fromCharCode(parseInt(t[e],16));return n}this.getASCII=function(e){return e.split("").map((e=>this.fromNum(e.charCodeAt(0)))).reduce(((e,t)=>e+t))},this.getUnicode=function(e){return function(e){let t,n="";for(let r=0;r<e.length;r++)t=e.charCodeAt(r).toString(16),n+=("000"+t).slice(-4);return n}(e)},this.fromNum=function(e){let t=e.toString(16);return t.length%2==0?t:"0"+t},this.from16Num=function(t){return e(t)},this.getText=function(e){let t="";for(let n=0;n<e.length;n+=2)t+=String.fromCharCode(parseInt(e.substr(n,2),16));return t},this.getUnicodeText=function(t){return e(t)}},n.g.IEEE754=function(){function e(e,t,n){var r,a,l,o=(1<<t-1)-1;if(isNaN(e))a=(1<<o)-1,l=1,r=0;else if(e===1/0||e===-1/0)a=(1<<o)-1,l=0,r=e<0?1:0;else if(0===e)a=0,l=0,r=1/e==-1/0?1:0;else if(r=e<0,(e=Math.abs(e))>=Math.pow(2,1-o)){var u=Math.min(Math.floor(Math.log(e)/Math.LN2),o);a=u+o,l=e*Math.pow(2,n-u)-Math.pow(2,n)}else a=0,l=e/Math.pow(2,1-o-n);var i,s=[];for(i=n;i;i-=1)s.push(l%2?1:0),l=Math.floor(l/2);for(i=t;i;i-=1)s.push(a%2?1:0),a=Math.floor(a/2);s.push(r?1:0),s.reverse();for(var f=s.join(""),c=[];f.length;)c.push(parseInt(f.substring(0,8),2)),f=f.substring(8);return c}function t(e,t,n){for(var r=[],a=e.length;a;a-=1)for(var l=e[a-1],o=8;o;o-=1)r.push(l%2?1:0),l>>=1;r.reverse();var u=r.join(""),i=(1<<t-1)-1,s=parseInt(u.substring(0,1),2)?-1:1,f=parseInt(u.substring(1,1+t),2),c=parseInt(u.substring(1+t),2);return f===(1<<t)-1?0!==c?NaN:s*(1/0):f>0?s*Math.pow(2,f-i)*(1+c/Math.pow(2,n)):0!==c?s*Math.pow(2,-(i-1))*(c/Math.pow(2,n)):0*s}function n(e){for(var t=0,n=0;n<e.length;n++)t=256*t+e[n];return t}this.fromIEEE754Double=function(e){return t(e,11,52)},this.toIEEE754Double=function(t,r=!1){const a=e(t,11,52);return r?a:n(a)},this.fromIEEE754Single=function(e){return t(e,8,23)},this.toIEEE754Single=function(t,r=!1){const a=e(t,8,23);return r?a:n(a)},this.decodeIEEE754Single=function(e){for(var n=[0,0,0,0],r=n.length;r;r-=1){var a=255&e;n[r-1]=a,e=(e-a)/256}return t(n,8,23)},this.decodeIEEE754Double=function(e){for(var n=[0,0,0,0,0,0,0,0],r=n.length;r;r-=1){var a=255&e;n[r-1]=a,e=(e-a)/256}return t(n,11,52)}},n.g.TypeBip39Address=e,n.g.ObjBip39Address=function(e,t,n){this.type=e,this.topic=t,this.payload=n},window.minterConvert=new function(e){let t="0.000000000000000001";this.fromPip=function(e){return r().from(e).multiply(t).toFloat()},this.toPip=function(e){return r().from(e).divide(t).toFixed(0)}}})()})();
//# sourceMappingURL=index.bundle.js.map