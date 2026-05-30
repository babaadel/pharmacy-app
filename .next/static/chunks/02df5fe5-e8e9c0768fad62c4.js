"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{9745:function(e,t,n){n.d(t,{$:function(){return o7},A:function(){return lc},B:function(){return oJ},C:function(){return nT},D:function(){return oM},F:function(){return o$},H:function(){return ld},N:function(){return L},Q:function(){return oL},R:function(){return $},U:function(){return b},W:function(){return o8},X:function(){return rb},Y:function(){return oW},Z:function(){return le},_:function(){return p},a:function(){return V},a6:function(){return oB},a7:function(){return n$},a8:function(){return ok},aU:function(){return oH},aX:function(){return oG},ac:function(){return oA},an:function(){return nw},b:function(){return P},c:function(){return tW},d:function(){return C},e:function(){return _},f:function(){return nJ},g:function(){return o3},h:function(){return lt},i:function(){return nI},j:function(){return la},k:function(){return nW},l:function(){return nY},n:function(){return nX},o:function(){return nZ},p:function(){return X},q:function(){return nQ},r:function(){return ne},s:function(){return t$},t:function(){return ng},u:function(){return nj},v:function(){return Q},w:function(){return W},y:function(){return Y},z:function(){return oj}});var r,i,s,a,o=n(1480),l=n(9074),u=n(6552),h=n(3693),c=n(4575),d=n(357),f=n(6300).Buffer;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}m.UNAUTHENTICATED=new m(null),m.GOOGLE_CREDENTIALS=new m("google-credentials-uid"),m.FIRST_PARTY=new m("first-party-uid"),m.MOCK_USER=new m("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g="12.14.0";function p(e){g=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y=new h.Yd("@firebase/firestore");function w(){return y.logLevel}function v(e,...t){if(y.logLevel<=h.in.DEBUG){let n=t.map(E);y.debug(`Firestore (${g}): ${e}`,...n)}}function I(e,...t){if(y.logLevel<=h.in.ERROR){let n=t.map(E);y.error(`Firestore (${g}): ${e}`,...n)}}function T(e,...t){if(y.logLevel<=h.in.WARN){let n=t.map(E);y.warn(`Firestore (${g}): ${e}`,...n)}}function E(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,S(e,r,n)}function S(e,t,n){let r=`FIRESTORE (${g}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw I(r),Error(r)}function x(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||S(t,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(m.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class V{constructor(e){this.t=e,this.currentUser=m.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){x(void 0===this.o,42304);let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new D;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new D,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new D)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(x("string"==typeof t.accessToken,31837,{l:t}),new N(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return x(null===e||"string"==typeof e,2055,{h:e}),new m(e)}}class R{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=m.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);let e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class F{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new R(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(m.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,o.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){x(void 0===this.o,3512);let n=e=>{null!=e.error&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.m;return this.m=e.token,v("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?r(e):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new O(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(x("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new O(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function M(e,t){return e<t?-1:e>t?1:0}function U(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.charAt(r),i=t.charAt(r);if(n!==i)return B(n)===B(i)?M(n,i):B(n)?1:-1}return M(e.length,t.length)}function B(e){let t=e.charCodeAt(0);return t>=55296&&t<=57343}function q(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z="__name__";class K{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&b(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===K.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof K?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=K.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return M(e.length,t.length)}static compareSegments(e,t){let n=K.isNumericId(e),r=K.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?K.extractNumericId(e).compare(K.extractNumericId(t)):U(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return u.z8.fromString(e.substring(4,e.length-2))}}class $ extends K{construct(e,t,n){return new $(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new C(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new $(t)}static emptyPath(){return new $([])}}let G=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends K{construct(e,t,n){return new j(e,t,n)}static isValidIdentifier(e){return G.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===z}static keyField(){return new j([z])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new C(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new C(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new C(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new C(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new j(t)}static emptyPath(){return new j([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q($.fromString(e))}static fromName(e){return new Q($.fromString(e).popFirst(5))}static empty(){return new Q($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===$.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return $.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new $(e.slice()))}}function H(e){if(!Q.isDocumentKey(e))throw new C(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function J(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function W(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":b(12329,{type:typeof e})}function Y(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=W(e);throw new C(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){let n={typeString:e};return t&&(n.value=t),n}function Z(e,t){let n;if(!J(e))throw new C(_.INVALID_ARGUMENT,"JSON must be an object");for(let r in t)if(t[r]){let i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}let a=e[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new C(_.INVALID_ARGUMENT,n);return!0}class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new ee(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new C(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new C(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?M(this.nanoseconds,e.nanoseconds):M(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Z(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:X("string",ee._jsonSchemaVersion),seconds:X("number"),nanoseconds:X("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{static fromTimestamp(e){return new et(e)}static min(){return new et(new ee(0,0))}static max(){return new et(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}class en{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function er(e){return e.fields.find(e=>2===e.kind)}function ei(e){return e.fields.filter(e=>2!==e.kind)}en.UNKNOWN_ID=-1;class es{constructor(e,t){this.fieldPath=e,this.kind=t}}class ea{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ea(0,el.min())}}function eo(e){return new el(e.readTime,e.key,-1)}class el{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new el(et.min(),Q.empty(),-1)}static max(){return new el(et.max(),Q.empty(),-1)}}function eu(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=Q.comparator(e.documentKey,t.documentKey))?n:M(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ec{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(e){if(e.code!==_.FAILED_PRECONDITION||e.message!==eh)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ef((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ef?t:ef.resolve(t)}catch(e){return ef.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ef.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ef.reject(t)}static resolve(e){return new ef((t,n)=>{t(e)})}static reject(e){return new ef((t,n)=>{n(e)})}static waitFor(e){return new ef((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=ef.resolve(!1);for(let n of e)t=t.next(e=>e?ef.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ef((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new ef((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em="SimpleDb";class eg{static open(e,t,n,r){try{return new eg(t,e.transaction(r,n))}catch(e){throw new ev(t,e)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new D,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ev(e,t.error)):this.S.resolve()},this.transaction.onerror=t=>{let n=eS(t.target.error);this.S.reject(new ev(e,n))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(v(em,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new eT(this.transaction.objectStore(e))}}class ep{static delete(e){return v(em,"Removing database:",e),eE((0,l.Rd)().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!(0,l.hl)())return!1;if(ep.F())return!0;let e=(0,l.z$)(),t=ep.M(e),n=ey(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static F(){return void 0!==d&&"YES"===d.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE}static O(e,t){return e.store(t)}static M(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,12.2===ep.M((0,l.z$)())&&I("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(v(em,"Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new ev(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new C(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new C(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ev(e,r))},r.onupgradeneeded=e=>{v(em,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.N.k(t,r.transaction,e.oldVersion,this.version).next(()=>{v(em,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.L(e);let t=eg.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.C(),e)).catch(e=>(t.abort(e),ef.reject(e))).toPromise();return s.catch(()=>{}),await t.D,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(v(em,"Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ey(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}class ew{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return eE(this.U.delete())}}class ev extends C{constructor(e,t){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function eI(e){return"IndexedDbTransactionError"===e.name}class eT{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(v(em,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(v(em,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),eE(n)}add(e){return v(em,"ADD",this.store.name,e,e),eE(this.store.add(e))}get(e){return eE(this.store.get(e)).next(t=>(void 0===t&&(t=null),v(em,"GET",this.store.name,e,t),t))}delete(e){return v(em,"DELETE",this.store.name,e),eE(this.store.delete(e))}count(){return v(em,"COUNT",this.store.name),eE(this.store.count())}J(e,t){let n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){let e=r.getAll(n.range);return new ef((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.H(e,(e,n)=>{t.push(n)}).next(()=>t)}}Z(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new ef((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}X(e,t){v(em,"DELETE ALL",this.store.name);let n=this.options(e,t);n.Y=!1;let r=this.cursor(n);return this.H(r,(e,t,n)=>n.delete())}ee(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.H(r,t)}te(e){let t=this.cursor({});return new ef((n,r)=>{t.onerror=e=>{r(eS(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}H(e,t){let n=[];return new ef((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new ew(i),a=t(i.primaryKey,i.value,s);if(a instanceof ef){let e=a.catch(e=>(s.done(),ef.reject(e)));n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}}).next(()=>ef.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eE(e){return new ef((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(eS(e.target.error))}})}let eb=!1;function eS(e){let t=ep.M((0,l.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eb||(eb=!0,setTimeout(()=>{throw e},0)),e}}return e}let ex="IndexBackfiller";class e_{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}re(e){v(ex,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{let e=await this.ne.ie();v(ex,`Documents written: ${e}`)}catch(e){eI(e)?v(ex,"Ignoring IndexedDB error during index backfill: ",e):await ed(e)}await this.re(6e4)})}}class eC{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))}se(e,t){let n=new Set,r=t,i=!0;return ef.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return v(ex,`Processing collection: ${t}`),this.oe(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this._e(r,n)).next(n=>(v(ex,`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}_e(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=eo(t);eu(r,n)>0&&(n=r)}),new el(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ue&&this.ue(e),e}}function eN(e){return 0===e&&1/e==-1/0}function ek(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"}function eA(e){let t=e.length;if(x(t>=2,64408,{path:e}),2===t)return x("\x01"===e.charAt(0)&&"\x01"===e.charAt(1),56145,{path:e}),$.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&b(50515,{path:e}),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\0";break;case"\x11":i+=e.substring(s,t+1);break;default:b(61167,{path:e})}s=t+2}return new $(r)}eD.ce=-1;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eV="remoteDocuments",eR="owner",eF="owner",eO="mutationQueues",eP="mutations",eL="batchId",eM="userMutationsIndex",eU=["userId","batchId"],eB={},eq="documentMutations",ez="remoteDocumentsV14",eK=["prefixPath","collectionGroup","readTime","documentId"],e$="documentKeyIndex",eG=["prefixPath","collectionGroup","documentId"],ej="collectionGroupIndex",eQ=["collectionGroup","readTime","prefixPath","documentId"],eH="remoteDocumentGlobal",eJ="remoteDocumentGlobalKey",eW="targets",eY="queryTargetsIndex",eX=["canonicalId","targetId"],eZ="targetDocuments",e0=["targetId","path"],e1="documentTargetsIndex",e2=["path","targetId"],e4="targetGlobalKey",e5="targetGlobal",e6="collectionParents",e3=["collectionId","parent"],e8="clientMetadata",e9="bundles",e7="namedQueries",te="indexConfiguration",tt="collectionGroupIndex",tn="indexState",tr=["indexId","uid"],ti="sequenceNumberIndex",ts=["uid","sequenceNumber"],ta="indexEntries",to=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],tl="documentKeyIndex",tu=["indexId","uid","orderedDocumentKey"],th="documentOverlays",tc=["userId","collectionPath","documentId"],td="collectionPathOverlayIndex",tf=["userId","collectionPath","largestBatchId"],tm="collectionGroupOverlayIndex",tg=["userId","collectionGroup","largestBatchId"],tp="globals",ty=[eO,eP,eq,eV,eW,eR,e5,eZ,e8,eH,e6,e9,e7],tw=[...ty,th],tv=[eO,eP,eq,ez,eW,eR,e5,eZ,e8,eH,e6,e9,e7,th],tI=[...tv,te,tn,ta],tT=[...tI,tp];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends ec{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function tb(e,t){return ep.O(e.le,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function tx(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function t_(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,t){this.comparator=e,this.root=t||tN.EMPTY}insert(e,t){return new tC(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tN.BLACK,null,null))}remove(e){return new tC(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tN.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tD(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tD(this.root,e,this.comparator,!1)}getReverseIterator(){return new tD(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tD(this.root,e,this.comparator,!0)}}class tD{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tN{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:tN.RED,this.left=null!=r?r:tN.EMPTY,this.right=null!=i?i:tN.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new tN(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return tN.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return tN.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,tN.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,tN.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw b(43730,{key:this.key,value:this.value});if(this.right.isRed())throw b(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw b(27949);return e+(this.isRed()?0:1)}}tN.EMPTY=null,tN.RED=!0,tN.BLACK=!1,tN.EMPTY=new class{constructor(){this.size=0}get key(){throw b(57766)}get value(){throw b(16141)}get color(){throw b(16727)}get left(){throw b(29726)}get right(){throw b(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new tN(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.comparator=e,this.data=new tC(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tA(this.data.getIterator())}getIteratorFrom(e){return new tA(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tk)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tk(this.comparator);return t.data=e,t}}class tA{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function tV(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.fields=e,e.sort(j.comparator)}static empty(){return new tR([])}unionWith(e){let t=new tk(j.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new tR(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return q(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.binaryString=e}static fromBase64String(e){return new tO(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new tF("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new tO(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return M(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tO.EMPTY_BYTE_STRING=new tO("");let tP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tL(e){if(x(!!e,39018),"string"==typeof e){let t=0,n=tP.exec(e);if(x(!!n,46558,{timestamp:e}),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:tM(e.seconds),nanos:tM(e.nanos)}}function tM(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function tU(e){return"string"==typeof e?tO.fromBase64String(e):tO.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tB="server_timestamp",tq="__type__",tz="__previous_value__",tK="__local_write_time__";function t$(e){return(e?.mapValue?.fields||{})[tq]?.stringValue===tB}function tG(e){let t=e.mapValue.fields[tz];return t$(t)?tG(t):t}function tj(e){let t=tL(e.mapValue.fields[tK].timestampValue);return new ee(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tQ{constructor(e,t,n,r,i,s,a,o,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u,this.apiKey=h}}let tH="(default)";class tJ{constructor(e,t){this.projectId=e,this.database=t||tH}static empty(){return new tJ("","")}get isDefaultDatabase(){return this.database===tH}isEqual(e){return e instanceof tJ&&e.projectId===this.projectId&&e.database===this.database}}function tW(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new C(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tJ(e.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tY="__type__",tX="__max__",tZ={mapValue:{fields:{__type__:{stringValue:tX}}}},t0="__vector__",t1="value",t2={nullValue:"NULL_VALUE"};function t4(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?t$(e)?4:nu(e)?9007199254740991:no(e)?10:11:b(28295,{value:e})}function t5(e,t){if(e===t)return!0;let n=t4(e);if(n!==t4(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return tj(e).isEqual(tj(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=tL(e.timestampValue),r=tL(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return tU(e.bytesValue).isEqual(tU(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return tM(e.geoPointValue.latitude)===tM(t.geoPointValue.latitude)&&tM(e.geoPointValue.longitude)===tM(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return tM(e.integerValue)===tM(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=tM(e.doubleValue),r=tM(t.doubleValue);return n===r?eN(n)===eN(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return q(e.arrayValue.values||[],t.arrayValue.values||[],t5);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(tS(n)!==tS(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!t5(n[e],r[e])))return!1;return!0}(e,t);default:return b(52216,{left:e})}}function t6(e,t){return void 0!==(e.values||[]).find(e=>t5(e,t))}function t3(e,t){if(e===t)return 0;let n=t4(e),r=t4(t);if(n!==r)return M(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=tM(e.integerValue||e.doubleValue),r=tM(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return t8(e.timestampValue,t.timestampValue);case 4:return t8(tj(e),tj(t));case 5:return U(e.stringValue,t.stringValue);case 6:return function(e,t){let n=tU(e),r=tU(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=M(n[e],r[e]);if(0!==t)return t}return M(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=M(tM(e.latitude),tM(t.latitude));return 0!==n?n:M(tM(e.longitude),tM(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return t9(e.arrayValue,t.arrayValue);case 10:return function(e,t){let n=e.fields||{},r=t.fields||{},i=n[t1]?.arrayValue,s=r[t1]?.arrayValue,a=M(i?.values?.length||0,s?.values?.length||0);return 0!==a?a:t9(i,s)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===tZ.mapValue&&t===tZ.mapValue)return 0;if(e===tZ.mapValue)return 1;if(t===tZ.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=U(r[e],s[e]);if(0!==t)return t;let a=t3(n[r[e]],i[s[e]]);if(0!==a)return a}return M(r.length,s.length)}(e.mapValue,t.mapValue);default:throw b(23264,{he:n})}}function t8(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return M(e,t);let n=tL(e),r=tL(t),i=M(n.seconds,r.seconds);return 0!==i?i:M(n.nanos,r.nanos)}function t9(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=t3(n[e],r[e]);if(t)return t}return M(n.length,r.length)}function t7(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=tL(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?tU(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,Q.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=t7(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${t7(e.fields[i])}`;return n+"}"}(e.mapValue):b(61005,{value:e})}function ne(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function nt(e){return!!e&&"integerValue"in e}function nn(e){return nt(e)||!!e&&"doubleValue"in e}function nr(e){return!!e&&"arrayValue"in e}function ni(e){return!!e&&"nullValue"in e}function ns(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function na(e){return!!e&&"mapValue"in e}function no(e){return(e?.mapValue?.fields||{})[tY]?.stringValue===t0}function nl(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return tx(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=nl(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=nl(e.arrayValue.values[n]);return t}return{...e}}function nu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===tX}let nh={mapValue:{fields:{[tY]:{stringValue:t0},[t1]:{arrayValue:{}}}}};function nc(e,t){let n=t3(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function nd(e,t){let n=t3(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.value=e}static empty(){return new nf({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!na(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nl(t)}setAll(e){let t=j.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=nl(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());na(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return t5(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];na(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(tx(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new nf(nl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new nm(e,0,et.min(),et.min(),et.min(),nf.empty(),0)}static newFoundDocument(e,t,n,r){return new nm(e,1,t,et.min(),n,r,0)}static newNoDocument(e,t){return new nm(e,2,t,et.min(),et.min(),nf.empty(),0)}static newUnknownDocument(e,t){return new nm(e,3,t,et.min(),et.min(),nf.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(et.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nf.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nf.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=et.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof nm&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nm(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t){this.position=e,this.inclusive=t}}function np(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Q.comparator(Q.fromName(a.referenceValue),n.key):t3(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ny(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!t5(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{}class nI extends nv{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new nC(e,t,n):"array-contains"===t?new nA(e,n):"in"===t?new nV(e,n):"not-in"===t?new nR(e,n):"array-contains-any"===t?new nF(e,n):new nI(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new nD(e,n):new nN(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(t3(t,this.value)):null!==t&&t4(this.value)===t4(t)&&this.matchesComparison(t3(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return b(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nT extends nv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new nT(e,t)}matches(e){return nE(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nE(e){return"and"===e.op}function nb(e){return"or"===e.op}function nS(e){return nx(e)&&nE(e)}function nx(e){for(let t of e.filters)if(t instanceof nT)return!1;return!0}function n_(e,t){let n=e.filters.concat(t);return nT.create(n,e.op)}class nC extends nI{constructor(e,t,n){super(e,t,n),this.key=Q.fromName(n.referenceValue)}matches(e){let t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class nD extends nI{constructor(e,t){super(e,"in",t),this.keys=nk("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nN extends nI{constructor(e,t){super(e,"not-in",t),this.keys=nk("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nk(e,t){return(t.arrayValue?.values||[]).map(e=>Q.fromName(e.referenceValue))}class nA extends nI{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return nr(t)&&t6(t.arrayValue,this.value)}}class nV extends nI{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&t6(this.value.arrayValue,t)}}class nR extends nI{constructor(e,t){super(e,"not-in",t)}matches(e){if(t6(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!t6(this.value.arrayValue,t)}}class nF extends nI{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!nr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>t6(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.Te=null}}function nP(e,t=null,n=[],r=[],i=null,s=null,a=null){return new nO(e,t,n,r,i,s,a)}function nL(e){if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof nI)return t.field.canonicalString()+t.op.toString()+t7(t.value);if(nS(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>t7(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>t7(e)).join(",")),e.Te=t}return e.Te}function nM(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof nI?n instanceof nI&&t.op===n.op&&t.field.isEqual(n.field)&&t5(t.value,n.value):t instanceof nT?n instanceof nT&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void b(19439)}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ny(e.startAt,t.startAt)&&ny(e.endAt,t.endAt)}function nU(e){return Q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function nB(e,t){return e.filters.filter(e=>e instanceof nI&&e.field.isEqual(t))}function nq(e,t,n){let r=t2,i=!0;for(let n of nB(e,t)){let e=t2,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?t2:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?ne(tJ.empty(),Q.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?no(s)?nh:{mapValue:{}}:b(35942,{value:s});break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=t2}0>nc({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>nc({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function nz(e,t,n){let r=tZ,i=!0;for(let n of nB(e,t)){let e=tZ,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?ne(tJ.empty(),Q.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?nh:"mapValue"in s?no(s)?{mapValue:{}}:tZ:b(61959,{value:s}),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=tZ}nd({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];nd({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function n$(e){return new nK(e)}function nG(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function nj(e){return null!==e.collectionGroup}function nQ(e){if(null===e.Ie){let t;e.Ie=[];let n=new Set;for(let t of e.explicitOrderBy)e.Ie.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new tk(j.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.Ie.push(new nw(t,r))}),n.has(j.keyField().canonicalString())||e.Ie.push(new nw(j.keyField(),r))}return e.Ie}function nH(e){return e.Ee||(e.Ee=function(e,t){if("F"===e.limitType)return nP(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new nw(e.field,t)});let n=e.endAt?new ng(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ng(e.startAt.position,e.startAt.inclusive):null;return nP(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,nQ(e))),e.Ee}function nJ(e,t){let n=e.filters.concat([t]);return new nK(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function nW(e,t){let n=e.explicitOrderBy.concat([t]);return new nK(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}function nY(e,t,n){return new nK(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function nX(e,t){return new nK(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}function nZ(e,t){return new nK(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}function n0(e,t){return nM(nH(e),nH(t))&&e.limitType===t.limitType}function n1(e){return`${nL(nH(e))}|lt:${e.limitType}`}function n2(e){var t;let n;return`Query(target=${n=(t=nH(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof nI?`${t.field.canonicalString()} ${t.op} ${t7(t.value)}`:t instanceof nT?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>t7(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>t7(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function n4(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Q.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of nQ(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=np(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,nQ(e),t))&&(!e.endAt||!!function(e,t,n){let r=np(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,nQ(e),t))}function n5(e){return(t,n)=>{let r=!1;for(let i of nQ(e)){let e=function(e,t,n){let r=e.field.isKeyField()?Q.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?t3(r,i):b(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return b(19790,{direction:e.dir})}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){tx(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return t_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n3=new tC(Q.comparator),n8=new tC(Q.comparator);function n9(...e){let t=n8;for(let n of e)t=t.insert(n.key,n);return t}function n7(e){let t=n8;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function re(){return new n6(e=>e.toString(),(e,t)=>e.isEqual(t))}let rt=new tC(Q.comparator),rn=new tk(Q.comparator);function rr(...e){let t=rn;for(let n of e)t=t.add(n);return t}let ri=new tk(M);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eN(t)?"-0":t}}function ra(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this._=void 0}}function rl(e,t){return e instanceof rg?nn(t)?t:{integerValue:0}:null}class ru extends ro{}class rh extends ro{constructor(e){super(),this.elements=e}}function rc(e,t){let n=rI(t);for(let t of e.elements)n.some(e=>t5(e,t))||n.push(t);return{arrayValue:{values:n}}}class rd extends ro{constructor(e){super(),this.elements=e}}function rf(e,t){let n=rI(t);for(let t of e.elements)n=n.filter(e=>!t5(e,t));return{arrayValue:{values:n}}}class rm extends ro{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class rg extends rm{}class rp extends rm{}class ry extends rm{}function rw(e,t,n){if(!nn(t))return e.Ae;let r=n(rv(t),rv(e.Ae));return nt(t)&&nt(e.Ae)?ra(r):rs(e.serializer,r)}function rv(e){return tM(e.integerValue||e.doubleValue)}function rI(e){return nr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t){this.field=e,this.transform=t}}class rE{constructor(e,t){this.version=e,this.transformResults=t}}class rb{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rb}static exists(e){return new rb(void 0,e)}static updateTime(e){return new rb(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rS(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class rx{}function r_(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new rF(e.key,rb.none()):new rN(e.key,e.data,rb.none());{let n=e.data,r=nf.empty(),i=new tk(j.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new rk(e.key,r,new tR(i.toArray()),rb.none())}}function rC(e,t,n,r){return e instanceof rN?function(e,t,n,r){if(!rS(e.precondition,t))return n;let i=e.value.clone(),s=rR(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof rk?function(e,t,n,r){if(!rS(e.precondition,t))return n;let i=rR(e.fieldTransforms,r,t),s=t.data;return(s.setAll(rA(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):rS(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function rD(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&q(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof rh&&r instanceof rh||n instanceof rd&&r instanceof rd?q(n.elements,r.elements,t5):n instanceof rg&&r instanceof rg||n instanceof rp&&r instanceof rp||n instanceof ry&&r instanceof ry?t5(n.Ae,r.Ae):n instanceof ru&&r instanceof ru)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class rN extends rx{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rk extends rx{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rA(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function rV(e,t,n){let r=new Map;x(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){var i;let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof rh?rc(o,l):o instanceof rd?rf(o,l):i))}return r}function rR(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof ru?function(e,t){let n={fields:{[tq]:{stringValue:tB},[tK]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&t$(t)&&(t=tG(t)),t&&(n.fields[tz]=t),{mapValue:n}}(t,s):e instanceof rh?rc(e,s):e instanceof rd?rf(e,s):e instanceof rg?function(e,t){let n=rl(e,t),r=rv(n)+rv(e.Ae);return nt(n)&&nt(e.Ae)?ra(r):rs(e.serializer,r)}(e,s):e instanceof rp?rw(e,s,Math.min):e instanceof ry?rw(e,s,Math.max):void 0)}return r}class rF extends rx{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rO extends rx{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof rN?function(e,t,n){let r=e.value.clone(),i=rV(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof rk?function(e,t,n){if(!rS(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=rV(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(rA(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=rC(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=rC(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=re();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=r_(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(et.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),rr())}isEqual(e){return this.batchId===e.batchId&&q(this.mutations,e.mutations,(e,t)=>rD(e,t))&&q(this.baseMutations,e.baseMutations,(e,t)=>rD(e,t))}}class rL{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){x(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=rt,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new rL(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e,t){this.count=e,this.unchangedNames=t}}function rB(e){if(void 0===e)return I("GRPC error has no .code"),_.UNKNOWN;switch(e){case r.OK:return _.OK;case r.CANCELLED:return _.CANCELLED;case r.UNKNOWN:return _.UNKNOWN;case r.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case r.INTERNAL:return _.INTERNAL;case r.UNAVAILABLE:return _.UNAVAILABLE;case r.UNAUTHENTICATED:return _.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case r.NOT_FOUND:return _.NOT_FOUND;case r.ALREADY_EXISTS:return _.ALREADY_EXISTS;case r.PERMISSION_DENIED:return _.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case r.ABORTED:return _.ABORTED;case r.OUT_OF_RANGE:return _.OUT_OF_RANGE;case r.UNIMPLEMENTED:return _.UNIMPLEMENTED;case r.DATA_LOSS:return _.DATA_LOSS;default:return b(39323,{code:e})}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rq=new u.z8([4294967295,4294967295],0);function rz(e){let t=(new TextEncoder).encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function rK(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([i,s],0)]}class r${constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new rG(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new rG(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new rG(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=u.z8.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(rq)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;let[t,n]=rK(rz(e));for(let e=0;e<this.hashCount;e++){let r=this.ye(t,n,e);if(!this.we(r))return!1}return!0}static create(e,t,n){let r=new r$(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.ge)return;let[t,n]=rK(rz(e));for(let e=0;e<this.hashCount;e++){let r=this.ye(t,n,e);this.Se(r)}}Se(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class rG extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,rQ.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new rj(et.min(),r,new tC(M),n3,rr())}}class rQ{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new rQ(n,t,rr(),rr(),rr())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rH{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class rJ{constructor(e,t){this.targetId=e,this.Ce=t}}class rW{constructor(e,t,n=tO.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class rY{constructor(e){this.targetId=e,this.ve=0,this.Fe=r1(),this.Me=tO.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=rr(),t=rr(),n=rr();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:b(38017,{changeType:i})}}),new rQ(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=r1()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,x(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}let rX="WatchChangeAggregator";class rZ{constructor(e){this.Ge=e,this.ze=new Map,this.je=n3,this.Je=r0(),this.He=r0(),this.Ze=new tC(M)}Xe(e){for(let t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(let t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{let n=this.ze.get(t);if(n)switch(e.state){case 0:this.nt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Le(e.resumeToken));break;default:b(56790,{state:e.state})}else v(rX,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.nt(n)&&t(n)})}it(e){let t=e.targetId,n=e.Ce.count,r=this.st(t);if(r){let i=r.target;if(nU(i)){if(0===n){let e=new Q(i.path);this.et(t,e,nm.newNoDocument(e,et.min()))}else x(1===n,20013,{expectedCount:n})}else{let r=this.ot(t);if(r!==n){let n=this._t(e),i=n?this.ut(n,e,r):1;0!==i&&(this.rt(t),this.Ze=this.Ze.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}_t(e){let t,n;let r=e.Ce.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=tU(i).toUint8Array()}catch(e){if(e instanceof tF)return T("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new r$(t,s,a)}catch(e){return T(e instanceof rG?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.ge?null:n}ut(e,t,n){return t.Ce.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){let n=this.Ge.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Ge.lt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.et(t,n,null),r++)}),r}Pt(e){let t=new Map;this.ze.forEach((n,r)=>{let i=this.st(r);if(i){if(n.current&&nU(i.target)){let t=new Q(i.target.path);this.Tt(t).has(r)||this.It(r,t)||this.et(r,t,nm.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=rr();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));let r=new rj(e,t,this.Ze,this.je,n);return this.je=n3,this.Je=r0(),this.He=r0(),this.Ze=new tC(M),r}Ye(e,t){let n=this.ze.get(e);if(!n||!this.nt(e))return void v(rX,`addDocumentToTarget received document for unknown inactive target (${e})`);let r=this.It(e,t.key)?2:0;n.Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,n){let r=this.ze.get(e);r&&this.nt(e)?(this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),n&&(this.je=this.je.insert(t,n))):v(rX,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){let t=this.ze.get(e);if(!t)return 0;let n=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(v(rX,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new rY(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new tk(M),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new tk(M),this.Je=this.Je.insert(e,t)),t}nt(e){let t=null!==this.st(e);return t||v(rX,"Detected inactive target",e),t}st(e){let t=this.ze.get(e);return void 0===t||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new rY(e)),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function r0(){return new tC(Q.comparator)}function r1(){return new tC(Q.comparator)}let r2={asc:"ASCENDING",desc:"DESCENDING"},r4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r5={and:"AND",or:"OR"};class r6{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function r3(e,t){return e.useProto3Json||null==t?t:{value:t}}function r8(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function r9(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function r7(e){return x(!!e,49232),et.fromTimestamp(function(e){let t=tL(e);return new ee(t.seconds,t.nanos)}(e))}function ie(e,t){return it(e,t).canonicalString()}function it(e,t){let n=new $(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function ir(e){let t=$.fromString(e);return x(iv(t),10190,{key:t.toString()}),t}function ii(e,t){return ie(e.databaseId,t.path)}function is(e,t){let n=ir(t);if(n.get(1)!==e.databaseId.projectId)throw new C(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new C(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Q(iu(n))}function ia(e,t){return ie(e.databaseId,t)}function io(e){let t=ir(e);return 4===t.length?$.emptyPath():iu(t)}function il(e){return new $(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iu(e){return x(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function ih(e,t,n){return{name:ii(e,t),fields:n.value.mapValue.fields}}function ic(e,t){var n;let r;if(t instanceof rN)r={update:ih(e,t.key,t.value)};else if(t instanceof rF)r={delete:ii(e,t.key)};else if(t instanceof rk)r={update:ih(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof rO))return b(16599,{Vt:t.type});r={verify:ii(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ru)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof rh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof rd)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof rg)return{fieldPath:t.field.canonicalString(),increment:n.Ae};if(n instanceof rp)return{fieldPath:t.field.canonicalString(),minimum:n.Ae};if(n instanceof ry)return{fieldPath:t.field.canonicalString(),maximum:n.Ae};throw b(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:r8(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:b(27497)),r}function id(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?rb.updateTime(r7(n.updateTime)):void 0!==n.exists?rb.exists(n.exists):rb.none():rb.none(),i=t.updateTransforms?t.updateTransforms.map(t=>{let n;return n=null,"setToServerValue"in t?(x("REQUEST_TIME"===t.setToServerValue,16630,{proto:t}),n=new ru):"appendMissingElements"in t?n=new rh(t.appendMissingElements.values||[]):"removeAllFromArray"in t?n=new rd(t.removeAllFromArray.values||[]):"increment"in t?n=new rg(e,t.increment):"minimum"in t?n=new rp(e,t.minimum):"maximum"in t?n=new ry(e,t.maximum):b(16584,{proto:t}),new rT(j.fromServerFormat(t.fieldPath),n)}):[];if(t.update){t.update.name;let n=is(e,t.update.name),s=new nf({mapValue:{fields:t.update.fields}});return t.updateMask?new rk(n,s,new tR((t.updateMask.fieldPaths||[]).map(e=>j.fromServerFormat(e))),r,i):new rN(n,s,r,i)}return t.delete?new rF(is(e,t.delete),r):t.verify?new rO(is(e,t.verify),r):b(1463,{proto:t})}function im(e,t){return{documents:[ia(e,t.path)]}}function ig(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=ia(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof nI?function(e){if("=="===e.op){if(ns(e.value))return{unaryFilter:{field:iy(e.field),op:"IS_NAN"}};if(ni(e.value))return{unaryFilter:{field:iy(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ns(e.value))return{unaryFilter:{field:iy(e.field),op:"IS_NOT_NAN"}};if(ni(e.value))return{unaryFilter:{field:iy(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:iy(e.field),op:r4[e.op],value:e.value}}}(t):t instanceof nT?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:r5[t.op],filters:n}}}(t):b(54877,{filter:t})}(nT.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:iy(e.field),direction:r2[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=r3(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{dt:s,parent:i}}function ip(e){var t;let n,r=io(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){x(1===s,65062);let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=iw(e.unaryFilter.field);return nI.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=iw(e.unaryFilter.field);return nI.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=iw(e.unaryFilter.field);return nI.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=iw(e.unaryFilter.field);return nI.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return b(61313);default:return b(60726)}}(t):void 0!==t.fieldFilter?nI.create(iw(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return b(58110);default:return b(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?nT.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return b(1026)}}(t.compositeFilter.op)):b(30097,{filter:t})}(e);return t instanceof nT&&nS(t)?t.getFilters():[t]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new nw(iw(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new ng(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new ng(e.values||[],t)}(i.endAt)),new nK(r,a,l,o,u,"F",h,c)}function iy(e){return{fieldPath:e.canonicalString()}}function iw(e){return j.fromServerFormat(e.fieldPath)}function iv(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function iI(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t,n,r,i=et.min(),s=et.min(),a=tO.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new iT(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new iT(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new iT(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new iT(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.gt=e}}function ib(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:iS(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:ii(i=e.gt,t.key),fields:t.data.value.mapValue.fields,updateTime:r8(i,t.version.toTimestamp()),createTime:r8(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ix(t.version)};else{if(!t.isUnknownDocument())return b(57904,{document:t});r.unknownDocument={path:n.path.toArray(),version:ix(t.version)}}return r}function iS(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function ix(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function i_(e){let t=new ee(e.seconds,e.nanoseconds);return et.fromTimestamp(t)}function iC(e,t){let n=(t.baseMutations||[]).map(t=>id(e.gt,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>id(e.gt,t)),i=ee.fromMillis(t.localWriteTimeMs);return new rP(t.batchId,i,n,r)}function iD(e){let t=i_(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?i_(e.lastLimboFreeSnapshotVersion):et.min();return new iT(void 0!==e.query.documents?function(e){let t=e.documents.length;return x(1===t,1966,{count:t}),nH(n$(io(e.documents[0])))}(e.query):nH(ip(e.query)),e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,tO.fromBase64String(e.resumeToken))}function iN(e,t){let n;let r=ix(t.snapshotVersion),i=ix(t.lastLimboFreeSnapshotVersion);n=nU(t.target)?im(e.gt,t.target):ig(e.gt,t.target).dt;let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:nL(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function ik(e){let t=ip({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?nY(t,t.limit,"L"):t}function iA(e,t){return new rM(t.largestBatchId,id(e.gt,t.overlayMutation))}function iV(e,t){let n=t.path.lastSegment();return[e,ek(t.path.popLast()),n]}function iR(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:ix(r.readTime),documentKey:ek(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{getBundleMetadata(e,t){return tb(e,e9).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:i_(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return tb(e,e9).put({bundleId:t.id,createTime:ix(r7(t.createTime)),version:t.version})}getNamedQuery(e,t){return tb(e,e7).get(t).next(e=>{if(e)return{name:e.name,query:ik(e.bundledQuery),readTime:i_(e.readTime)}})}saveNamedQuery(e,t){return tb(e,e7).put({name:t.name,readTime:ix(r7(t.readTime)),bundledQuery:t.bundledQuery})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){return new iO(e,t.uid||"")}getOverlay(e,t){return tb(e,th).get(iV(this.userId,t)).next(e=>e?iA(this.serializer,e):null)}getOverlays(e,t){let n=re();return ef.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new rM(t,i);r.push(this.wt(e,s))}),ef.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(ek(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(tb(e,th).X(td,r))}),ef.waitFor(i)}getOverlaysForCollection(e,t,n){let r=re(),i=ek(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return tb(e,th).J(td,s).next(e=>{for(let t of e){let e=iA(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=re(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return tb(e,th).ee({index:tm,range:a},(e,t,n)=>{let a=iA(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}wt(e,t){return tb(e,th).put(function(e,t,n){let[r,i,s]=iV(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:ic(e.gt,n.mutation)}}(this.serializer,this.userId,t))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{St(e){return tb(e,tp)}getSessionToken(e){return this.St(e).get("sessionToken").next(e=>{let t=e?.value;return t?tO.fromUint8Array(t):tO.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(){}bt(e,t){this.Dt(e,t),t.Ct()}Dt(e,t){if("nullValue"in e)this.vt(t,5);else if("booleanValue"in e)this.vt(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.vt(t,15),t.Ft(tM(e.integerValue));else if("doubleValue"in e){let n=tM(e.doubleValue);isNaN(n)?this.vt(t,13):(this.vt(t,15),eN(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.vt(t,20),"string"==typeof n&&(n=tL(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.vt(t,30),t.Nt(tU(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.vt(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?nu(e)?this.vt(t,Number.MAX_SAFE_INTEGER):no(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):b(19022,{Kt:e})}xt(e,t){this.vt(t,25),this.Ut(e,t)}Ut(e,t){t.Mt(e)}kt(e,t){let n=e.fields||{};for(let e of(this.vt(t,55),Object.keys(n)))this.xt(e,t),this.Dt(n[e],t)}Lt(e,t){let n=e.fields||{};this.vt(t,53);let r=n[t1].arrayValue?.values?.length||0;this.vt(t,15),t.Ft(tM(r)),this.xt(t1,t),this.Dt(n[t1],t)}qt(e,t){let n=e.values||[];for(let e of(this.vt(t,50),n))this.Dt(e,t)}Bt(e,t){this.vt(t,37),Q.fromName(e).path.forEach(e=>{this.vt(t,60),this.Ut(e,t)})}vt(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}function iM(e){return Math.ceil((64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e))/8)}iL.$t=new iL;class iU{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Qt(n.value),n=t.next();this.Gt()}zt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Qt(e);else if(e<2048)this.Qt(960|e>>>6),this.Qt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Qt(480|e>>>12),this.Qt(128|63&e>>>6),this.Qt(128|63&e);else{let e=t.codePointAt(0);this.Qt(240|e>>>18),this.Qt(128|63&e>>>12),this.Qt(128|63&e>>>6),this.Qt(128|63&e)}}this.Gt()}Zt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.jt(e);else if(e<2048)this.jt(960|e>>>6),this.jt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.jt(480|e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e);else{let e=t.codePointAt(0);this.jt(240|e>>>18),this.jt(128|63&e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e)}}this.Jt()}Xt(e){let t=this.Yt(e),n=iM(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}tn(e){let t=this.Yt(e),n=iM(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}nn(){this.rn(255),this.rn(255)}sn(){this._n(255),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Yt(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Qt(e){let t=255&e;0===t?(this.rn(0),this.rn(255)):255===t?(this.rn(255),this.rn(0)):this.rn(t)}jt(e){let t=255&e;0===t?(this._n(0),this._n(255)):255===t?(this._n(255),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class iB{constructor(e){this.un=e}Nt(e){this.un.Wt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Xt(e)}Ct(){this.un.nn()}}class iq{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Zt(e)}Ft(e){this.un.tn(e)}Ct(){this.un.sn()}}class iz{constructor(){this.un=new iU,this.ascending=new iB(this.un),this.descending=new iq(this.un)}seed(e){this.un.seed(e)}cn(e){return 0===e?this.ascending:this.descending}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iK{constructor(e,t,n,r){this.ln=e,this.hn=t,this.Pn=n,this.Tn=r}In(){let e=this.Tn.length,t=0===e||255===this.Tn[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.Tn,0),t!==e?n.set([0],this.Tn.length):++n[n.length-1],new iK(this.ln,this.hn,this.Pn,n)}En(e,t,n){return{indexId:this.ln,uid:e,arrayValue:ij(this.Pn),directionalValue:ij(this.Tn),orderedDocumentKey:ij(t),documentKey:n.path.toArray()}}Rn(e,t,n){let r=this.En(e,t,n);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function i$(e,t){let n=e.ln-t.ln;return 0!==n?n:0!==(n=iG(e.Pn,t.Pn))?n:0!==(n=iG(e.Tn,t.Tn))?n:Q.comparator(e.hn,t.hn)}function iG(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}function ij(e){return(0,l.WO)()?function(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}(e):e}function iQ(e){return"string"!=typeof e?e:function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(e)}class iH{constructor(e){for(let t of(this.An=new tk((e,t)=>j.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Vn=e.orderBy,this.dn=[],e.filters))t.isInequality()?this.An=this.An.add(t):this.dn.push(t)}get mn(){return this.An.size>1}fn(e){if(x(e.collectionGroup===this.collectionId,49279),this.mn)return!1;let t=er(e);if(void 0!==t&&!this.gn(t))return!1;let n=ei(e),r=new Set,i=0,s=0;for(;i<n.length&&this.gn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.An.size>0){let e=this.An.getIterator().getNext();if(!r.has(e.field.canonicalString())){let t=n[i];if(!this.pn(e,t)||!this.yn(this.Vn[s++],t))return!1}++i}for(;i<n.length;++i){let e=n[i];if(s>=this.Vn.length||!this.yn(this.Vn[s++],e))return!1}return!0}wn(){if(this.mn)return null;let e=new tk(j.comparator),t=[];for(let n of this.dn)if(!n.field.isKeyField()){if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new es(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new es(n.field,0))}}for(let n of this.Vn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new es(n.field,"asc"===n.dir?0:1)));return new en(en.UNKNOWN_ID,this.collectionId,t,ea.empty())}gn(e){for(let t of this.dn)if(this.pn(t,e))return!0;return!1}pn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}yn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function iJ(e){return e instanceof nI}function iW(e){return e instanceof nT&&nS(e)}function iY(e){return iJ(e)||iW(e)||function(e){if(e instanceof nT&&nb(e)){for(let t of e.getFilters())if(!iJ(t)&&!iW(t))return!1;return!0}return!1}(e)}function iX(e,t){return x(e instanceof nI||e instanceof nT,38388),x(t instanceof nI||t instanceof nT,25473),i0(e instanceof nI?t instanceof nI?nT.create([e,t],"and"):iZ(e,t):t instanceof nI?iZ(t,e):function(e,t){if(x(e.filters.length>0&&t.filters.length>0,48005),nE(e)&&nE(t))return n_(e,t.getFilters());let n=nb(e)?e:t,r=nb(e)?t:e,i=n.filters.map(e=>iX(e,r));return nT.create(i,"or")}(e,t))}function iZ(e,t){if(nE(t))return n_(t,e.getFilters());{let n=t.filters.map(t=>iX(e,t));return nT.create(n,"or")}}function i0(e){if(x(e instanceof nI||e instanceof nT,11850),e instanceof nI)return e;let t=e.getFilters();if(1===t.length)return i0(t[0]);if(nx(e))return e;let n=t.map(e=>i0(e)),r=[];return n.forEach(t=>{t instanceof nI?r.push(t):t instanceof nT&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:nT.create(r,e.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Sn=new i2}addToCollectionParentIndex(e,t){return this.Sn.add(t),ef.resolve()}getCollectionParents(e,t){return ef.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return ef.resolve()}deleteFieldIndex(e,t){return ef.resolve()}deleteAllFieldIndexes(e){return ef.resolve()}createTargetIndexes(e,t){return ef.resolve()}getDocumentsMatchingTarget(e,t){return ef.resolve(null)}getIndexType(e,t){return ef.resolve(0)}getFieldIndexes(e,t){return ef.resolve([])}getNextCollectionGroupToUpdate(e){return ef.resolve(null)}getMinOffset(e,t){return ef.resolve(el.min())}getMinOffsetFromCollectionGroup(e,t){return ef.resolve(el.min())}updateCollectionGroup(e,t,n){return ef.resolve()}updateIndexEntries(e,t){return ef.resolve()}}class i2{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new tk($.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new tk($.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i4="IndexedDbIndexManager",i5=new Uint8Array(0);class i6{constructor(e,t){this.databaseId=t,this.bn=new i2,this.Dn=new n6(e=>nL(e),(e,t)=>nM(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.bn.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.bn.add(t)});let i={collectionId:n,parent:ek(r)};return tb(e,e6).put(i)}return ef.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\0",""],!1,!0);return tb(e,e6).J(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(eA(r.parent))}return n})}addFieldIndex(e,t){let n=tb(e,te),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=tb(e,tn);return i.next(e=>{n.put(iR(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=tb(e,te),r=tb(e,tn),i=tb(e,ta);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=tb(e,te),n=tb(e,ta),r=tb(e,tn);return t.X().next(()=>n.X()).next(()=>r.X())}createTargetIndexes(e,t){return ef.forEach(this.Cn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){let n=new iH(t).wn();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){let n=tb(e,ta),r=!0,i=new Map;return ef.forEach(this.Cn(t),t=>this.vn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=rr(),r=[];return ef.forEach(i,(i,s)=>{v(i4,`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${nL(t)}`);let a=function(e,t){let n=er(t);if(void 0===n)return null;for(let t of nB(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of ei(t))for(let t of nB(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of ei(t)){let t=0===i.kind?nq(e,i.fieldPath,e.startAt):nz(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new ng(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of ei(t)){let t=0===i.kind?nz(e,i.fieldPath,e.endAt):nq(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new ng(n,r)}(s,i),h=this.Fn(i,s,l),c=this.Fn(i,s,u),d=this.Mn(i,s,o),f=this.xn(i.indexId,a,h,l.inclusive,c,u.inclusive,d);return ef.forEach(f,i=>n.Z(i,t.limit).next(t=>{t.forEach(t=>{let n=Q.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return ef.resolve(null)})}Cn(e){let t=this.Dn.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(x(t instanceof nI||t instanceof nT,34018),t instanceof nI)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=nT.create(n,t.op);return iY(r=i0(r))?r:(x(r instanceof nT,64498),x(nE(r),40251),x(r.filters.length>1,57927),r.filters.reduce((e,t)=>iX(e,t)))}(/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(t){if(x(t instanceof nI||t instanceof nT,20012),t instanceof nI){if(t instanceof nV){let e=t.value.arrayValue?.values?.map(e=>nI.create(t.field,"==",e))||[];return nT.create(e,"or")}return t}let n=t.filters.map(t=>e(t));return nT.create(n,t.op)}(e));return x(iY(t),7391),iJ(t)||iW(t)?[t]:t.getFilters()})(nT.create(e.filters,"and")).map(t=>nP(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Dn.set(e,t)),t}xn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let h=0;h<o;++h){let o=t?this.On(t[h/l]):i5,c=this.Nn(e,o,n[h%l],r),d=this.Bn(e,o,i[h%l],s),f=a.map(t=>this.Nn(e,o,t,!0));u.push(...this.createRange(c,d,f))}return u}Nn(e,t,n,r){let i=new iK(e,Q.empty(),t,n);return r?i:i.In()}Bn(e,t,n,r){let i=new iK(e,Q.empty(),t,n);return r?i.In():i}vn(e,t){let n=new iH(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.fn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.Cn(t);return ef.forEach(r,t=>this.vn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new tk(j.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}Ln(e,t){let n=new iz;for(let r of ei(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.cn(r.kind);iL.$t.bt(e,i)}return n.an()}On(e){let t=new iz;return iL.$t.bt(e,t.cn(0)),t.an()}kn(e,t){let n=new iz;return iL.$t.bt(ne(this.databaseId,t),n.cn(function(e){let t=ei(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.an()}Mn(e,t,n){if(null===n)return[];let r=[];r.push(new iz);let i=0;for(let s of ei(e)){let e=n[i++];for(let n of r)if(this.qn(t,s.fieldPath)&&nr(e))r=this.Kn(r,s,e);else{let t=n.cn(s.kind);iL.$t.bt(e,t)}}return this.Un(r)}Fn(e,t,n){return this.Mn(e,t,n.position)}Un(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Kn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new iz;r.seed(n.an()),iL.$t.bt(e,r.cn(t.kind)),i.push(r)}return i}qn(e,t){return!!e.filters.find(e=>e instanceof nI&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=tb(e,te),r=tb(e,tn);return(t?n.J(tt,IDBKeyRange.bound(t,t)):n.J()).next(e=>{let t=[];return ef.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new ea(t.sequenceNumber,new el(i_(t.readTime),new Q(eA(t.documentKey)),t.largestBatchId)):ea.empty(),r=e.fields.map(([e,t])=>new es(j.fromServerFormat(e),t));return new en(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:M(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=tb(e,te),i=tb(e,tn);return this.$n(e).next(e=>r.J(tt,IDBKeyRange.bound(t,t)).next(t=>ef.forEach(t,t=>i.put(iR(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){let n=new Map;return ef.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?ef.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),ef.forEach(i,n=>this.Wn(e,t,n).next(t=>{let i=this.Qn(r,n);return t.isEqual(i)?ef.resolve():this.Gn(e,r,n,t,i)}))))})}zn(e,t,n,r){return tb(e,ta).put(r.En(this.uid,this.kn(n,t.key),t.key))}jn(e,t,n,r){return tb(e,ta).delete(r.Rn(this.uid,this.kn(n,t.key),t.key))}Wn(e,t,n){let r=tb(e,ta),i=new tk(i$);return r.ee({index:tl,range:IDBKeyRange.only([n.indexId,this.uid,ij(this.kn(n,t))])},(e,r)=>{i=i.add(new iK(n.indexId,t,iQ(r.arrayValue),iQ(r.directionalValue)))}).next(()=>i)}Qn(e,t){let n=new tk(i$),r=this.Ln(t,e);if(null==r)return n;let i=er(t);if(null!=i){let s=e.data.field(i.fieldPath);if(nr(s))for(let i of s.arrayValue.values||[])n=n.add(new iK(t.indexId,e.key,this.On(i),r))}else n=n.add(new iK(t.indexId,e.key,i5,r));return n}Gn(e,t,n,r,i){v(i4,"Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=tV(s),l=tV(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=tV(a)):t?(i(o),o=tV(s)):(o=tV(s),l=tV(a))}}(r,i,i$,r=>{s.push(this.zn(e,t,n,r))},r=>{s.push(this.jn(e,t,n,r))}),ef.waitFor(s)}$n(e){let t=1;return tb(e,tn).ee({index:ti,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>i$(e,t)).filter((e,t,n)=>!t||0!==i$(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=i$(i,e),s=i$(i,t);if(0===n)r[0]=e.In();else if(n>0&&s<0)r.push(i),r.push(i.In());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.Jn(r[e],r[e+1]))return[];let t=r[e].Rn(this.uid,i5,Q.empty()),n=r[e+1].Rn(this.uid,i5,Q.empty());i.push(IDBKeyRange.bound(t,n))}return i}Jn(e,t){return i$(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(i3)}getMinOffset(e,t){return ef.mapArray(this.Cn(t),t=>this.vn(e,t).next(e=>e||b(44426))).next(i3)}}function i3(e){x(0!==e.length,28825);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>eu(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new el(t.readTime,t.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i8={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class i9{static withCacheSize(e){return new i9(e,i9.DEFAULT_COLLECTION_PERCENTILE,i9.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i7(e,t,n){let r=e.store(eP),i=e.store(eq),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.ee({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{x(1===o,47070,{batchId:n.batchId})}));let u=[];for(let e of n.mutations){var h,c;let r=(h=e.key.path,c=n.batchId,[t,ek(h),c]);s.push(i.delete(r)),u.push(e.key)}return ef.waitFor(s).next(()=>u)}function se(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw b(14731);t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */i9.DEFAULT_COLLECTION_PERCENTILE=10,i9.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,i9.DEFAULT=new i9(41943040,i9.DEFAULT_COLLECTION_PERCENTILE,i9.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),i9.DISABLED=new i9(-1,0,0);class st{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Hn={}}static yt(e,t,n,r){return x(""!==e.uid,64387),new st(e.isAuthenticated()?e.uid:"",t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sr(e).ee({index:eM,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=tb(e,eq),s=sr(e);return s.add({}).next(a=>{x("number"==typeof a,49019);let o=new rP(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>ic(e.gt,t)),i=n.mutations.map(t=>ic(e.gt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],h=new tk((e,t)=>M(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,ek(e.key.path),a];h=h.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,eB))}return h.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Hn[a]=o.keys()}),ef.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return sr(e).get(t).next(e=>e?(x(e.userId===this.userId,48,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),iC(this.serializer,e)):null)}Zn(e,t){return this.Hn[t]?ef.resolve(this.Hn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.Hn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return sr(e).ee({index:eM,range:r},(e,t,r)=>{t.userId===this.userId&&(x(t.batchId>=n,47524,{Xn:n}),i=iC(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return sr(e).ee({index:eM,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return sr(e).J(eM,t).next(e=>e.map(e=>iC(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,ek(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return tb(e,eq).ee({range:r},(n,r,s)=>{let[a,o,l]=n,u=eA(o);if(a===this.userId&&t.path.isEqual(u))return sr(e).get(l).next(e=>{if(!e)throw b(61480,{Yn:n,batchId:l});x(e.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:e.userId,batchId:l}),i.push(iC(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new tk(M),r=[];return t.forEach(t=>{let i=[this.userId,ek(t.path)],s=IDBKeyRange.lowerBound(i),a=tb(e,eq).ee({range:s},(e,r,i)=>{let[s,a,o]=e,l=eA(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),ef.waitFor(r).next(()=>this.er(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,ek(n)],s=IDBKeyRange.lowerBound(i),a=new tk(M);return tb(e,eq).ee({range:s},(e,t,i)=>{let[s,o,l]=e,u=eA(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.er(e,a))}er(e,t){let n=[],r=[];return t.forEach(t=>{r.push(sr(e).get(t).next(e=>{if(null===e)throw b(35274,{batchId:t});x(e.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),n.push(iC(this.serializer,e))}))}),ef.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return i7(e.le,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.tr(t.batchId)}),ef.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}tr(e){delete this.Hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return ef.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return tb(e,eq).ee({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=eA(e[1]);r.push(t)}else n.done()}).next(()=>{x(0===r.length,56720,{nr:r.map(e=>e.canonicalString())})})})}containsKey(e,t){return sn(e,this.userId,t)}rr(e){return tb(e,eO).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function sn(e,t,n){let r=[t,ek(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return tb(e,eq).ee({range:s,Y:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function sr(e){return tb(e,eP)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new si(0)}static _r(){return new si(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ar(e).next(t=>{let n=new si(t.highestTargetId);return t.highestTargetId=n.next(),this.ur(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ar(e).next(e=>et.fromTimestamp(new ee(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ar(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.ar(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.ur(e,r)))}addTargetData(e,t){return this.cr(e,t).next(()=>this.ar(e).next(n=>(n.targetCount+=1,this.lr(t,n),this.ur(e,n))))}updateTargetData(e,t){return this.cr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>tb(e,eW).delete(t.targetId)).next(()=>this.ar(e)).next(t=>(x(t.targetCount>0,8065),t.targetCount-=1,this.ur(e,t)))}removeTargets(e,t,n){let r=0,i=[];return tb(e,eW).ee((s,a)=>{let o=iD(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>ef.waitFor(i)).next(()=>r)}forEachTarget(e,t){return tb(e,eW).ee((e,n)=>{t(iD(n))})}ar(e){return tb(e,e5).get(e4).next(e=>(x(null!==e,2888),e))}ur(e,t){return tb(e,e5).put(e4,t)}cr(e,t){return tb(e,eW).put(iN(this.serializer,t))}lr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.ar(e).next(e=>e.targetCount)}getTargetData(e,t){let n=nL(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return tb(e,eW).ee({range:r,index:eY},(e,n,r)=>{let s=iD(n);nM(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=sa(e);return t.forEach(t=>{let s=ek(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),ef.waitFor(r)}removeMatchingKeys(e,t,n){let r=sa(e);return ef.forEach(t,t=>{let i=ek(t.path);return ef.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=sa(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=sa(e),i=rr();return r.ee({range:n,Y:!0},(e,t,n)=>{let r=new Q(eA(e[1]));i=i.add(r)}).next(()=>i)}containsKey(e,t){let n=ek(t.path),r=IDBKeyRange.bound([n],[n+"\0"],!1,!0),i=0;return sa(e).ee({index:e1,Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Rt(e,t){return tb(e,eW).get(t).next(e=>e?iD(e):null)}}function sa(e){return tb(e,eZ)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so="LruGarbageCollector";function sl([e,t],[n,r]){let i=M(e,n);return 0===i?M(t,r):i}class su{constructor(e){this.hr=e,this.buffer=new tk(sl),this.Pr=0}Tr(){return++this.Pr}Ir(e){let t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>sl(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sh{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Er=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return null!==this.Er}Rr(e){v(so,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eI(e)?v(so,"Ignoring IndexedDB error during garbage collection: ",e):await ed(e)}await this.Rr(3e5)})}}class sc{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ef.resolve(eD.ce);let n=new su(t);return this.Ar.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Ar.dr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Ar.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector","Garbage collection skipped; disabled"),ef.resolve(i8)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),i8):this.mr(e,t))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let n,r,i,s,a,o,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),w()<=h.in.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),ef.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.db=e,this.garbageCollector=new sc(this,t)}Vr(e){let t=this.gr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}gr(e){let t=0;return this.dr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}dr(e,t){return this.pr(e,(e,n)=>t(n))}addReference(e,t,n){return sf(e,n)}removeReference(e,t,n){return sf(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return sf(e,t)}yr(e,t){let n;return n=!1,tb(e,eO).te(r=>sn(e,r,t).next(e=>(e&&(n=!0),ef.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.pr(e,(s,a)=>{if(a<=t){let t=this.yr(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,et.min()),sa(e).delete([0,ek(s.path)])))});r.push(t)}}).next(()=>ef.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return sf(e,t)}pr(e,t){let n=sa(e),r,i=eD.ce;return n.ee({index:e1},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==eD.ce&&t(new Q(eA(r)),i),i=a,r=s):i=eD.ce}).next(()=>{i!==eD.ce&&t(new Q(eA(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sf(e,t){var n;return sa(e).put((n=e.currentSequenceNumber,{targetId:0,path:ek(t.path),sequenceNumber:n}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.changes=new n6(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nm.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?ef.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return tb(e,ez).put(n)}removeEntry(e,t,n){return tb(e,ez).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],iS(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.wr(e,n)))}getEntry(e,t){let n=nm.newInvalidDocument(t);return tb(e,ez).ee({index:e$,range:IDBKeyRange.only(sy(t))},(e,r)=>{n=this.Sr(t,r)}).next(()=>n)}br(e,t){let n={size:0,document:nm.newInvalidDocument(t)};return tb(e,ez).ee({index:e$,range:IDBKeyRange.only(sy(t))},(e,r)=>{n={document:this.Sr(t,r),size:se(r)}}).next(()=>n)}getEntries(e,t){let n=n3;return this.Dr(e,t,(e,t)=>{let r=this.Sr(e,t);n=n.insert(e,r)}).next(()=>n)}Cr(e,t){let n=n3,r=new tC(Q.comparator);return this.Dr(e,t,(e,t)=>{let i=this.Sr(e,t);n=n.insert(e,i),r=r.insert(e,se(t))}).next(()=>({documents:n,vr:r}))}Dr(e,t,n){if(t.isEmpty())return ef.resolve();let r=new tk(sv);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(sy(r.first()),sy(r.last())),s=r.getIterator(),a=s.getNext();return tb(e,ez).ee({index:e$,range:i},(e,t,r)=>{let i=Q.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>sv(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.j(sy(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){let s=t.path,a=[s.popLast().toArray(),s.lastSegment(),iS(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return tb(e,ez).J(IDBKeyRange.bound(a,o,!0)).next(e=>{i?.incrementDocumentReadCount(e.length);let n=n3;for(let i of e){let e=this.Sr(Q.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(n4(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=n3,s=sw(t,n),a=sw(t,el.max());return tb(e,ez).ee({index:ej,range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.Sr(Q.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new sp(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return tb(e,eH).get(eJ).next(e=>(x(!!e,20021),e))}wr(e,t){return tb(e,eH).put(eJ,t)}Sr(e,t){if(t){let e=function(e,t){let n;if(t.document)n=function(e,t,n){let r=is(e,t.name),i=r7(t.updateTime),s=t.createTime?r7(t.createTime):et.min(),a=new nf({mapValue:{fields:t.fields}}),o=nm.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}(e.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=Q.fromSegments(t.noDocument.path),r=i_(t.noDocument.readTime);n=nm.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b(56709);{let e=Q.fromSegments(t.unknownDocument.path),r=i_(t.unknownDocument.version);n=nm.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new ee(e[0],e[1]);return et.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(et.min())))return e}return nm.newInvalidDocument(e)}}class sp extends sm{constructor(e,t){super(),this.Fr=e,this.trackRemovals=t,this.Mr=new n6(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new tk((e,t)=>M(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.Mr.get(i);if(t.push(this.Fr.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=ib(this.Fr.serializer,s);r=r.add(i.path.popLast());let l=se(o);n+=l-a.size,t.push(this.Fr.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=ib(this.Fr.serializer,s.convertToNoDocument(et.min()));t.push(this.Fr.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Fr.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Fr.updateMetadata(e,n)),ef.waitFor(t)}getFromCache(e,t){return this.Fr.br(e,t).next(e=>(this.Mr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Fr.Cr(e,t).next(({documents:e,vr:t})=>(t.forEach((t,n)=>{this.Mr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function sy(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function sw(e,t){let n=t.documentKey.path.toArray();return[e,iS(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function sv(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=M(n[e],r[e]))return i;return(i=M(n.length,r.length))||(i=M(n[n.length-2],r[r.length-2]))||M(n[n.length-1],r[r.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&rC(n.mutation,e,tR.empty(),ee.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,rr()).next(()=>t))}getLocalViewOfDocuments(e,t,n=rr()){let r=re();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=n9();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=re();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,rr()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=n3,s=re(),a=re();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof rk)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),rC(a.mutation,t,a.mutation.getFieldMask(),ee.now())):s.set(t.key,tR.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>a.set(e,new sI(t,s.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){let n=re(),r=new tC((e,t)=>e-t),i=rr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||tR.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||rr()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=re();l.forEach(e=>{if(!i.has(e)){let r=r_(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return ef.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return Q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):nj(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ef.resolve(re()),a=-1,o=i;return s.next(t=>ef.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?ef.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,rr())).next(e=>({batchId:a,changes:n7(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(e=>{let t=n9();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=n9();return this.indexManager.getCollectionParents(e,i).next(a=>ef.forEach(a,a=>{let o=new nK(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,nm.newInvalidDocument(r)))});let n=n9();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&rC(s.mutation,r,tR.empty(),ee.now()),n4(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return ef.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,{id:t.id,version:t.version,createTime:r7(t.createTime)}),ef.resolve()}getNamedQuery(e,t){return ef.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,{name:t.name,query:ik(t.bundledQuery),readTime:r7(t.readTime)}),ef.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.overlays=new tC(Q.comparator),this.Br=new Map}getOverlay(e,t){return ef.resolve(this.overlays.get(t))}getOverlays(e,t){let n=re();return ef.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.wt(e,t,r)}),ef.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Br.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Br.delete(n)),ef.resolve()}getOverlaysForCollection(e,t,n){let r=re(),i=t.length+1,s=new Q(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ef.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new tC((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=re(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=re(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return ef.resolve(a)}wt(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Br.get(r.largestBatchId).delete(n.key);this.Br.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new rM(t,n));let i=this.Br.get(t);void 0===i&&(i=rr(),this.Br.set(t,i)),this.Br.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.sessionToken=tO.EMPTY_BYTE_STRING}getSessionToken(e){return ef.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ef.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(){this.Lr=new tk(s_.kr),this.qr=new tk(s_.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){let n=new s_(e,t);this.Lr=this.Lr.add(n),this.qr=this.qr.add(n)}Ur(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.$r(new s_(e,t))}Wr(e,t){e.forEach(e=>this.removeReference(e,t))}Qr(e){let t=new Q(new $([])),n=new s_(t,e),r=new s_(t,e+1),i=[];return this.qr.forEachInRange([n,r],e=>{this.$r(e),i.push(e.key)}),i}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){let t=new Q(new $([])),n=new s_(t,e),r=new s_(t,e+1),i=rr();return this.qr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new s_(e,0),n=this.Lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class s_{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return Q.comparator(e.key,t.key)||M(e.jr,t.jr)}static Kr(e,t){return M(e.jr,t.jr)||Q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new tk(s_.kr)}checkEmpty(e){return ef.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new rP(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Jr=this.Jr.add(new s_(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ef.resolve(s)}lookupMutationBatch(e,t){return ef.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Zr(t+1),r=n<0?0:n;return ef.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ef.resolve(0===this.mutationQueue.length?-1:this.Xn-1)}getAllMutationBatches(e){return ef.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new s_(t,0),r=new s_(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([n,r],e=>{let t=this.Hr(e.jr);i.push(t)}),ef.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new tk(M);return t.forEach(e=>{let t=new s_(e,0),r=new s_(e,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([t,r],e=>{n=n.add(e.jr)})}),ef.resolve(this.Xr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;Q.isDocumentKey(i)||(i=i.child(""));let s=new s_(new Q(i),0),a=new tk(M);return this.Jr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.jr)),!0)},s),ef.resolve(this.Xr(a))}Xr(e){let t=[];return e.forEach(e=>{let n=this.Hr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){x(0===this.Yr(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Jr;return ef.forEach(t.mutations,r=>{let i=new s_(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=n})}tr(e){}containsKey(e,t){let n=new s_(t,0),r=this.Jr.firstAfterOrEqual(n);return ef.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ef.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Hr(e){let t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.ei=e,this.docs=new tC(Q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ei(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return ef.resolve(n?n.document.mutableCopy():nm.newInvalidDocument(t))}getEntries(e,t){let n=n3;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():nm.newInvalidDocument(e))}),ef.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=n3,s=t.path,a=new Q(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=eu(eo(a),n)||(r.has(a.key)||n4(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return ef.resolve(i)}getAllFromCollectionGroup(e,t,n,r){b(9500)}ti(e,t){return ef.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sN(this)}getSize(e){return ef.resolve(this.size)}}class sN extends sm{constructor(e){super(),this.Fr=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Fr.addEntry(e,r)):this.Fr.removeEntry(n)}),ef.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.persistence=e,this.ni=new n6(e=>nL(e),nM),this.lastRemoteSnapshotVersion=et.min(),this.highestTargetId=0,this.ri=0,this.ii=new sx,this.targetCount=0,this.si=si.sr()}forEachTarget(e,t){return this.ni.forEach((e,n)=>t(n)),ef.resolve()}getLastRemoteSnapshotVersion(e){return ef.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ef.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),ef.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ri&&(this.ri=t),ef.resolve()}cr(e){this.ni.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.si=new si(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,ef.resolve()}updateTargetData(e,t){return this.cr(t),ef.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,ef.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.ni.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.ni.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),ef.waitFor(i).next(()=>r)}getTargetCount(e){return ef.resolve(this.targetCount)}getTargetData(e,t){let n=this.ni.get(t)||null;return ef.resolve(n)}addMatchingKeys(e,t,n){return this.ii.Ur(t,n),ef.resolve()}removeMatchingKeys(e,t,n){this.ii.Wr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),ef.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),ef.resolve()}getMatchingKeysForTargetId(e,t){let n=this.ii.zr(t);return ef.resolve(n)}containsKey(e,t){return ef.resolve(this.ii.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t){this.oi={},this.overlays={},this._i=new eD(0),this.ai=!1,this.ai=!0,this.ui=new sS,this.referenceDelegate=e(this),this.ci=new sk(this),this.indexManager=new i1,this.remoteDocumentCache=new sD(e=>this.referenceDelegate.li(e)),this.serializer=new iE(t),this.hi=new sE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.oi[e.toKey()];return n||(n=new sC(t,this.referenceDelegate),this.oi[e.toKey()]=n),n}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,n){v("MemoryPersistence","Starting transaction:",e);let r=new sV(this._i.next());return this.referenceDelegate.Pi(),n(r).next(e=>this.referenceDelegate.Ti(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return ef.or(Object.values(this.oi).map(n=>()=>n.containsKey(e,t)))}}class sV extends ec{constructor(e){super(),this.currentSequenceNumber=e}}class sR{constructor(e){this.persistence=e,this.Ei=new sx,this.Ri=null}static Ai(e){return new sR(e)}get Vi(){if(this.Ri)return this.Ri;throw b(60996)}addReference(e,t,n){return this.Ei.addReference(n,t),this.Vi.delete(n.toString()),ef.resolve()}removeReference(e,t,n){return this.Ei.removeReference(n,t),this.Vi.add(n.toString()),ef.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),ef.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach(e=>this.Vi.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Vi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Pi(){this.Ri=new Set}Ti(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ef.forEach(this.Vi,n=>{let r=Q.fromPath(n);return this.di(e,r).next(e=>{e||t.removeEntry(r,et.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.di(e,t).next(e=>{e?this.Vi.delete(t.toString()):this.Vi.add(t.toString())})}li(e){return 0}di(e,t){return ef.or([()=>ef.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class sF{constructor(e,t){this.persistence=e,this.mi=new n6(e=>ek(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new sc(this,t)}static Ai(e,t){return new sF(e,t)}Pi(){}Ti(e){return ef.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){let t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}gr(e){let t=0;return this.dr(e,e=>{t++}).next(()=>t)}dr(e,t){return ef.forEach(this.mi,(n,r)=>this.yr(e,n,r).next(e=>e?ef.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ti(e,r=>this.yr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,et.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),ef.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),ef.resolve()}removeReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),ef.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),ef.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(t4(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=tG(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return tU(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,tx(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw b(13486,{value:t})}}(e.data.value)),t}yr(e,t,n){return ef.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.mi.get(t);return ef.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.serializer=e}k(e,t,n,r){let i=new eg("createOrUpgrade",t);n<1&&r>=1&&(!function(e){e.createObjectStore(eR)}(e),e.createObjectStore(eO,{keyPath:"userId"}),e.createObjectStore(eP,{keyPath:eL,autoIncrement:!0}).createIndex(eM,eU,{unique:!0}),e.createObjectStore(eq),sP(e),function(e){e.createObjectStore(eV)}(e));let s=ef.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore(eZ),e.deleteObjectStore(eW),e.deleteObjectStore(e5),sP(e)),s=s.next(()=>(function(e){let t=e.store(e5),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:et.min().toTimestamp(),targetCount:0};return t.put(e4,n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store(eP).J().next(t=>{e.deleteObjectStore(eP),e.createObjectStore(eP,{keyPath:eL,autoIncrement:!0}).createIndex(eM,eU,{unique:!0});let n=i.store(eP),r=t.map(e=>n.put(e));return ef.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore(e8,{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.fi(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore(eH)})(e),this.gi(i)))),n<7&&r>=7&&(s=s.next(()=>this.pi(i))),n<8&&r>=8&&(s=s.next(()=>this.yi(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.wi(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore(e9,{keyPath:"bundleId"})})(e),function(e){e.createObjectStore(e7,{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore(th,{keyPath:tc});t.createIndex(td,tf,{unique:!1}),t.createIndex(tm,tg,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore(ez,{keyPath:eK});t.createIndex(e$,eG),t.createIndex(ej,eQ)})(e)).next(()=>this.Si(e,i)).next(()=>e.deleteObjectStore(eV))),n<14&&r>=14&&(s=s.next(()=>this.bi(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore(te,{keyPath:"indexId",autoIncrement:!0}).createIndex(tt,"collectionGroup",{unique:!1}),e.createObjectStore(tn,{keyPath:tr}).createIndex(ti,ts,{unique:!1}),e.createObjectStore(ta,{keyPath:to}).createIndex(tl,tu,{unique:!1})})),n<16&&r>=16&&(s=s.next(()=>{t.objectStore(tn).clear()}).next(()=>{t.objectStore(ta).clear()})),n<17&&r>=17&&(s=s.next(()=>{!function(e){e.createObjectStore(tp,{keyPath:"name"})}(e)})),n<18&&r>=18&&(0,l.WO)()&&(s=s.next(()=>{t.objectStore(tn).clear()}).next(()=>{t.objectStore(ta).clear()})),s}gi(e){let t=0;return e.store(eV).ee((e,n)=>{t+=se(n)}).next(()=>{let n={byteSize:t};return e.store(eH).put(eJ,n)})}fi(e){let t=e.store(eO),n=e.store(eP);return t.J().next(t=>ef.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.J(eM,r).next(n=>ef.forEach(n,n=>{x(n.userId===t.userId,18650,"Cannot process batch from unexpected user",{batchId:n.batchId});let r=iC(this.serializer,n);return i7(e,t.userId,r).next(()=>{})}))}))}pi(e){let t=e.store(eZ),n=e.store(eV);return e.store(e5).get(e4).next(e=>{let r=[];return n.ee((n,i)=>{let s=new $(n),a=[0,ek(s)];r.push(t.get(a).next(n=>n?ef.resolve():t.put({targetId:0,path:ek(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>ef.waitFor(r))})}yi(e,t){e.createObjectStore(e6,{keyPath:e3});let n=t.store(e6),r=new i2,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ek(r)})}};return t.store(eV).ee({Y:!0},(e,t)=>i(new $(e).popLast())).next(()=>t.store(eq).ee({Y:!0},([e,t,n],r)=>i(eA(t).popLast())))}wi(e){let t=e.store(eW);return t.ee((e,n)=>{let r=iD(n),i=iN(this.serializer,r);return t.put(i)})}Si(e,t){let n=t.store(eV),r=[];return n.ee((e,n)=>{let i=t.store(ez),s=(n.document?new Q($.fromString(n.document.name).popFirst(5)):n.noDocument?Q.fromSegments(n.noDocument.path):n.unknownDocument?Q.fromSegments(n.unknownDocument.path):b(36783)).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>ef.waitFor(r))}bi(e,t){let n=t.store(eP),r=new sg(this.serializer),i=new sA(sR.Ai,this.serializer.gt);return n.J().next(e=>{let n=new Map;return e.forEach(e=>{let t=n.get(e.userId)??rr();iC(this.serializer,e).keys().forEach(e=>t=t.add(e)),n.set(e.userId,t)}),ef.forEach(n,(e,n)=>{let s=new m(n),a=iO.yt(this.serializer,s),o=i.getIndexManager(s);return new sT(r,st.yt(s,this.serializer,o,i.referenceDelegate),a,o).recalculateAndSaveOverlaysForDocumentKeys(new tE(t,eD.ce),e).next()})})}}function sP(e){e.createObjectStore(eZ,{keyPath:e0}).createIndex(e1,e2,{unique:!0}),e.createObjectStore(eW,{keyPath:"targetId"}).createIndex(eY,eX,{unique:!0}),e.createObjectStore(e5)}let sL="IndexedDbPersistence",sM="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sU{constructor(e,t,n,r,i,s,a,o,l,u,h=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Di=i,this.window=s,this.document=a,this.Ci=l,this.Fi=u,this.Mi=h,this._i=null,this.ai=!1,this.isPrimary=!1,this.networkEnabled=!0,this.xi=null,this.inForeground=!1,this.Oi=null,this.Ni=null,this.Bi=Number.NEGATIVE_INFINITY,this.Li=e=>Promise.resolve(),!sU.v())throw new C(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sd(this,r),this.ki=t+"main",this.serializer=new iE(o),this.qi=new ep(this.ki,this.Mi,new sO(this.serializer)),this.ui=new iP,this.ci=new ss(this.referenceDelegate,this.serializer),this.remoteDocumentCache=new sg(this.serializer),this.hi=new iF,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,!1===u&&I(sL,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(_.FAILED_PRECONDITION,sM);return this.$i(),this.Wi(),this.Qi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ci.getHighestSequenceNumber(e))}).then(e=>{this._i=new eD(e,this.Ci)}).then(()=>{this.ai=!0}).catch(e=>(this.qi&&this.qi.close(),Promise.reject(e)))}Gi(e){return this.Li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.K(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Di.enqueueAndForget(async()=>{this.started&&await this.Ui()}))}Ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>tb(e,e8).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.zi(e).next(e=>{e||(this.isPrimary=!1,this.Di.enqueueRetryable(()=>this.Li(!1)))})}).next(()=>this.ji(e)).next(t=>this.isPrimary&&!t?this.Ji(e).next(()=>!1):!!t&&this.Hi(e).next(()=>!0))).catch(e=>{if(eI(e))return v(sL,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v(sL,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Di.enqueueRetryable(()=>this.Li(e)),this.isPrimary=e})}zi(e){return tb(e,eR).get(eF).next(e=>ef.resolve(this.Zi(e)))}Xi(e){return tb(e,e8).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.es(this.Bi,18e5)){this.Bi=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=tb(e,e8);return t.J().next(e=>{let n=this.ts(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return ef.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ki)for(let t of e)this.Ki.removeItem(this.ns(t.clientId))}}Qi(){this.Ni=this.Di.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ui().then(()=>this.Yi()).then(()=>this.Qi()))}Zi(e){return!!e&&e.ownerId===this.clientId}ji(e){return this.Fi?ef.resolve(!0):tb(e,eR).get(eF).next(t=>{if(null!==t&&this.es(t.leaseTimestampMs,5e3)&&!this.rs(t.ownerId)){if(this.Zi(t)&&this.networkEnabled)return!0;if(!this.Zi(t)){if(!t.allowTabSynchronization)throw new C(_.FAILED_PRECONDITION,sM);return!1}}return!(!this.networkEnabled||!this.inForeground)||tb(e,e8).J().next(e=>void 0===this.ts(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&v(sL,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ai=!1,this.ss(),this.Ni&&(this.Ni.cancel(),this.Ni=null),this._s(),this.us(),await this.qi.runTransaction("shutdown","readwrite",[eR,e8],e=>{let t=new tE(e,eD.ce);return this.Ji(t).next(()=>this.Xi(t))}),this.qi.close(),this.cs()}ts(e,t){return e.filter(e=>this.es(e.updateTimeMs,t)&&!this.rs(e.clientId))}ls(){return this.runTransaction("getActiveClients","readonly",e=>tb(e,e8).J().next(e=>this.ts(e,18e5).map(e=>e.clientId)))}get started(){return this.ai}getGlobalsCache(){return this.ui}getMutationQueue(e,t){return st.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new i6(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return iO.yt(this.serializer,e)}getBundleCache(){return this.hi}runTransaction(e,t,n){var r;let i;v(sL,"Starting transaction:",e);let s=18===(r=this.Mi)?tT:17===r?tT:16===r?tI:15===r?tI:14===r?tv:13===r?tv:12===r?tw:11===r?ty:void b(60245);return this.qi.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new tE(r,this._i?this._i.next():eD.ce),"readwrite-primary"===t?this.zi(i).next(e=>!!e||this.ji(i)).next(t=>{if(!t)throw I(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Di.enqueueRetryable(()=>this.Li(!1)),new C(_.FAILED_PRECONDITION,eh);return n(i)}).next(e=>this.Hi(i).next(()=>e)):this.hs(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}hs(e){return tb(e,eR).get(eF).next(e=>{if(null!==e&&this.es(e.leaseTimestampMs,5e3)&&!this.rs(e.ownerId)&&!this.Zi(e)&&!(this.Fi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new C(_.FAILED_PRECONDITION,sM)})}Hi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return tb(e,eR).put(eF,t)}static v(){return ep.v()}Ji(e){let t=tb(e,eR);return t.get(eF).next(e=>this.Zi(e)?(v(sL,"Releasing primary lease."),t.delete(eF)):ef.resolve())}es(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(I(`Detected an update time that is in the future: ${e} > ${n}`),!1))}$i(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Oi=()=>{this.Di.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ui()))},this.document.addEventListener("visibilitychange",this.Oi),this.inForeground="visible"===this.document.visibilityState)}_s(){this.Oi&&(this.document.removeEventListener("visibilitychange",this.Oi),this.Oi=null)}Wi(){"function"==typeof this.window?.addEventListener&&(this.xi=()=>{this.ss();let e=/(?:Version|Mobile)\/1[456]/;(0,l.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Di.enterRestrictedMode(!0),this.Di.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.xi))}us(){this.xi&&(this.window.removeEventListener("pagehide",this.xi),this.xi=null)}rs(e){try{let t=null!==this.Ki?.getItem(this.ns(e));return v(sL,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(e){return I(sL,"Failed to get zombied client id.",e),!1}}ss(){if(this.Ki)try{this.Ki.setItem(this.ns(this.clientId),String(Date.now()))}catch(e){I("Failed to set zombie client id.",e)}}cs(){if(this.Ki)try{this.Ki.removeItem(this.ns(this.clientId))}catch(e){}}ns(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ps=n,this.Ts=r}static Is(e,t){let n=rr(),r=rr();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new sB(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=(0,l.G6)()?8:ey((0,l.z$)())>0?6:4}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.fs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.gs(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new sq;return this.ps(e,t,n).next(r=>{if(i.result=r,this.Rs)return this.ys(e,t,n,r.size)})}).next(()=>i.result)}ys(e,t,n,r){return n.documentReadCount<this.As?(w()<=h.in.DEBUG&&v("QueryEngine","SDK will not create cache indexes for query:",n2(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),ef.resolve()):(w()<=h.in.DEBUG&&v("QueryEngine","Query:",n2(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Vs*r?(w()<=h.in.DEBUG&&v("QueryEngine","The SDK decides to create cache indexes for query:",n2(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nH(t))):ef.resolve())}fs(e,t){if(nG(t))return ef.resolve(null);let n=nH(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=nH(t=nY(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=rr(...r);return this.ds.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.ws(t,r);return this.Ss(t,s,i,n.readTime)?this.fs(e,nY(t,null,"F")):this.bs(e,s,t,n)}))})))}gs(e,t,n,r){return nG(t)||r.isEqual(et.min())?ef.resolve(null):this.ds.getDocuments(e,n).next(i=>{let s=this.ws(t,i);return this.Ss(t,s,n,r)?ef.resolve(null):(w()<=h.in.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),n2(t)),this.bs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new el(et.fromTimestamp(1e9===r?new ee(n+1,0):new ee(n,r)),Q.empty(),-1)}(r,0)).next(e=>e))})}ws(e,t){let n=new tk(n5(e));return t.forEach((t,r)=>{n4(e,r)&&(n=n.add(r))}),n}Ss(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ps(e,t,n){return w()<=h.in.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",n2(t)),this.ds.getDocumentsMatchingQuery(e,t,el.min(),n)}bs(e,t,n,r){return this.ds.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sK="LocalStore";class s${constructor(e,t,n,r){this.persistence=e,this.Ds=t,this.serializer=r,this.Cs=new tC(M),this.vs=new n6(e=>nL(e),nM),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(n)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sT(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Cs))}}async function sG(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.xs(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=rr();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Os:e,removedBatchIds:i,addedBatchIds:s}))})})}function sj(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ci.getLastRemoteSnapshotVersion(t))}async function sQ(e,t,n){let r=e.Cs.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!eI(e))throw e;v(sK,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Cs=e.Cs.remove(t),e.vs.delete(r.target)}function sH(e,t,n){let r=et.min(),i=rr();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.vs.get(n);return void 0!==r?ef.resolve(e.Cs.get(r)):e.ci.getTargetData(t,n)})(e,s,nH(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.ci.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ds.getDocumentsMatchingQuery(s,t,n?r:et.min(),n?i:rr())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Fs.get(r)||et.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Fs.set(r,s),{documents:n,Ls:i}}))}class sJ{constructor(){this.activeTargetIds=ri}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sW{constructor(){this.Co=new sJ,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,n){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new sJ,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sY{Fo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sX="ConnectivityMonitor";class sZ{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){for(let e of(v(sX,"Network connectivity changed: AVAILABLE"),this.Bo))e(0)}No(){for(let e of(v(sX,"Network connectivity changed: UNAVAILABLE"),this.Bo))e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s0=null;function s1(){return null===s0?s0=268435456+Math.round(2147483648*Math.random()):s0++,"0x"+s0.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s2="RestConnection",s4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class s5{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Uo=this.databaseId.database===tH?`project_id=${n}`:`project_id=${n}&database_id=${r}`}$o(e,t,n,r,i){let s=s1(),a=this.Wo(e,t.toUriEncodedString());v(s2,`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(o,r,i);let{host:u}=new URL(a),h=(0,l.Xx)(u);return this.Go(e,a,o,n,h).then(t=>(v(s2,`Received RPC '${e}' ${s}: `,t),t),t=>{throw T(s2,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}zo(e,t,n,r,i,s){return this.$o(e,t,n,r,i)}Qo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+g,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Wo(e,t){let n=s4[e],r=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s3="WebChannelConnection",s8=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class s9 extends s5{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){s9.u_||(s8((0,c.FJ)(),c.ju.STAT_EVENT,e=>{e.stat===c.kN.PROXY?v(s3,"STAT_EVENT: detected buffering proxy"):e.stat===c.kN.NOPROXY&&v(s3,"STAT_EVENT: detected no buffering proxy")}),s9.u_=!0)}Go(e,t,n,r,i){let s=s1();return new Promise((i,a)=>{let o=new c.JJ;o.setWithCredentials(!0),o.listenOnce(c.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case c.jK.NO_ERROR:let t=o.getResponseJson();v(s3,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case c.jK.TIMEOUT:v(s3,`RPC '${e}' ${s} timed out`),a(new C(_.DEADLINE_EXCEEDED,"Request time out"));break;case c.jK.HTTP_ERROR:let n=o.getStatus();if(v(s3,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=e?.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(t)>=0?t:_.UNKNOWN}(t.status);a(new C(e,t.message))}else a(new C(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new C(_.UNAVAILABLE,"Connection failed."));break;default:b(9055,{c_:e,streamId:s,l_:o.getLastErrorCode(),h_:o.getLastError()})}}finally{v(s3,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(r);v(s3,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}P_(e,t,n){let i=s1(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Qo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let u=s.join("");v(s3,`Creating RPC '${e}' stream ${i}: ${u}`,o);let h=a.createWebChannel(u,o);this.T_(h);let d=!1,f=!1,m=new s6({jo:t=>{f?v(s3,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(v(s3,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),v(s3,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},Jo:()=>h.close()});return s8(h,c.ii.EventType.OPEN,()=>{f||(v(s3,`RPC '${e}' stream ${i} transport opened.`),m.r_())}),s8(h,c.ii.EventType.CLOSE,()=>{f||(f=!0,v(s3,`RPC '${e}' stream ${i} transport closed`),m.s_(),this.I_(h))}),s8(h,c.ii.EventType.ERROR,t=>{f||(f=!0,T(s3,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),m.s_(new C(_.UNAVAILABLE,"The operation could not be completed")))}),s8(h,c.ii.EventType.MESSAGE,t=>{if(!f){let n=t.data[0];x(!!n,16349);let s=n?.error||n[0]?.error;if(s){v(s3,`RPC '${e}' stream ${i} received error:`,s);let t=s.status,n=function(e){let t=r[e];if(void 0!==t)return rB(t)}(t),a=s.message;"NOT_FOUND"===t&&a.includes("database")&&a.includes("does not exist")&&a.includes(this.databaseId.database)&&T(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=_.INTERNAL,a="Unknown error status: "+t+" with message "+s.message),f=!0,m.s_(new C(n,a)),h.close()}else v(s3,`RPC '${e}' stream ${i} received:`,n),m.o_(n)}}),s9.a_(),setTimeout(()=>{m.i_()},0),m}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(t=>t===e)}Qo(e,t,n){super.Qo(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return(0,c.UE)()}}function s7(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){return new r6(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */s9.u_=!1;class at{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Di=e,this.timerId=t,this.E_=n,this.R_=r,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();let t=Math.floor(this.V_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){null!==this.d_&&(this.d_.skipDelay(),this.d_=null)}cancel(){null!==this.d_&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an="PersistentStream";class ar{constructor(e,t,n,r,i,s,a,o){this.Di=e,this.w_=n,this.S_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new at(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.v_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(I(t.toString()),I("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===_.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;let e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.b_===t&&this.Q_(e,n)},t=>{e(()=>{let e=new C(_.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}Q_(e,t){let n=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho(()=>{n(()=>this.listener.Ho())}),this.stream.Xo(()=>{n(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.v_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return v(an,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget(()=>this.b_===e?t():(v(an,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ai extends ar{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:b(39313,{state:r}),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(x(void 0===i||"string"==typeof i,58123),tO.fromBase64String(i||"")):(x(void 0===i||i instanceof f||i instanceof Uint8Array,16193),tO.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new rW(s,a,o,l&&new C(void 0===l.code?_.UNKNOWN:rB(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=is(e,r.document.name),s=r7(r.document.updateTime),a=r.document.createTime?r7(r.document.createTime):et.min(),o=new nf({mapValue:{fields:r.document.fields}}),l=nm.newFoundDocument(i,s,a,o);n=new rH(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=is(e,r.document),s=r.readTime?r7(r.readTime):et.min(),a=nm.newNoDocument(i,s);n=new rH([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=is(e,r.document);n=new rH([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return b(11601,{At:t});{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new rU(r,i);n=new rJ(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return et.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?et.min():t.readTime?r7(t.readTime):et.min()}(e);return this.listener.J_(t,n)}H_(e){let t={};t.database=il(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=nU(r)?{documents:im(e,r)}:{query:ig(e,r).dt}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=r9(e,t.resumeToken);let r=r3(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(et.min())>0){n.readTime=r8(e,t.snapshotVersion.toTimestamp());let r=r3(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.k_(t)}Z_(e){let t={};t.database=il(this.serializer),t.removeTarget=e,this.k_(t)}}class as extends ar{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return x(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,x(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){var t,n;x(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(x(void 0!==n,14353),t.map(e=>{let t;return(t=e.updateTime?r7(e.updateTime):r7(n)).isEqual(et.min())&&(t=r7(n)),new rE(t,e.transformResults||[])})):[]),i=r7(e.commitTime);return this.listener.ta(i,r)}na(){let e={};e.database=il(this.serializer),this.k_(e)}Y_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>ic(this.serializer,e))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{}class ao extends aa{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new C(_.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.$o(e,it(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new C(_.UNKNOWN,e.toString())})}zo(e,t,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.zo(e,it(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new C(_.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class al{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(I(t),this._a=!1):v("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au="RemoteStore";class ah{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new si(1e3),this.Aa=new si(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo(e=>{n.enqueueAndForget(async()=>{aI(this)&&(v(au,"Restarting streams for network reachability change."),await async function(e){e.Va.add(4),await ad(e),e.fa.set("Unknown"),e.Va.delete(4),await ac(e)}(this))})}),this.fa=new al(n,r)}}async function ac(e){if(aI(e))for(let t of e.da)await t(!0)}async function ad(e){for(let t of e.da)await t(!1)}function af(e,t){return e.Ia.get(t)||void 0}function am(e,t){let n=af(e,t.targetId);if(void 0!==n&&e.Ta.has(n))return;let r=function(e,t){let n=af(e,t);void 0!==n&&e.Ea.delete(n);let r=t%2!=0?e.Aa.next():e.Ra.next();return e.Ia.set(t,r),e.Ea.set(r,t),r}(e,t.targetId);v(au,"remoteStoreListen mapping SDK target ID to remote",t.targetId,r);let i=new iT(t.target,r,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ta.set(r,i),av(e)?aw(e):aP(e).x_()&&ap(e,i)}function ag(e,t){let n=aP(e),r=af(e,t);v(au,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,r),e.Ta.delete(r),e.Ia.delete(t),e.Ea.delete(r),n.x_()&&ay(e,r),0===e.Ta.size&&(n.x_()?n.B_():aI(e)&&e.fa.set("Unknown"))}function ap(e,t){if(e.ga.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(et.min())>0){let n=e.Ea.get(t.targetId);if(void 0===n)return void v(au,"SDK target ID not found for remote ID: "+t.targetId);let r=e.remoteSyncer.getRemoteKeysForTarget(n).size;t=t.withExpectedCount(r)}aP(e).H_(t)}function ay(e,t){e.ga.$e(t),aP(e).Z_(t)}function aw(e){e.ga=new rZ({getRemoteKeysForTarget:t=>{let n=e.Ea.get(t);return void 0!==n?e.remoteSyncer.getRemoteKeysForTarget(n):rr()},Rt:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),aP(e).start(),e.fa.aa()}function av(e){return aI(e)&&!aP(e).M_()&&e.Ta.size>0}function aI(e){return 0===e.Va.size}async function aT(e){e.fa.set("Online")}async function aE(e){e.Ta.forEach((t,n)=>{ap(e,t)})}async function ab(e,t){e.ga=void 0,av(e)?(e.fa.la(t),aw(e)):e.fa.set("Unknown")}async function aS(e,t,n){if(e.fa.set("Online"),t instanceof rW&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds){if(e.Ta.has(r)){let t=e.Ea.get(r);void 0!==t&&(await e.remoteSyncer.rejectListen(t,n),e.Ia.delete(t),e.Ea.delete(r)),e.Ta.delete(r)}e.ga.removeTarget(r)}}(e,t)}catch(n){v(au,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ax(e,n)}else if(t instanceof rH?e.ga.Xe(t):t instanceof rJ?e.ga.it(t):e.ga.tt(t),!n.isEqual(et.min()))try{let t=await sj(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.ga.Pt(t);n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.Ta.get(r);i&&e.Ta.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.Ta.get(t);if(!r)return;e.Ta.set(t,r.withResumeToken(tO.EMPTY_BYTE_STRING,r.snapshotVersion)),ay(e,t);let i=new iT(r.target,t,n,r.sequenceNumber);ap(e,i)});let r=function(e,t){let n=new Map;t.targetChanges.forEach((t,r)=>{let i=e.Ea.get(r);void 0!==i&&n.set(i,t)});let r=new tC(M);return t.targetMismatches.forEach((t,n)=>{let i=e.Ea.get(t);void 0!==i&&(r=r.insert(i,n))}),new rj(t.snapshotVersion,n,r,t.documentUpdates,t.resolvedLimboDocuments)}(e,n);return e.remoteSyncer.applyRemoteEvent(r)}(e,n)}catch(t){v(au,"Failed to raise snapshot:",t),await ax(e,t)}}async function ax(e,t,n){if(!eI(t))throw t;e.Va.add(1),await ad(e),e.fa.set("Offline"),n||(n=()=>sj(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v(au,"Retrying IndexedDB access"),await n(),e.Va.delete(1),await ac(e)})}function a_(e,t){return t().catch(n=>ax(e,n,t))}async function aC(e){let t=aL(e),n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:-1;for(;aI(e)&&e.Pa.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Pa.length&&t.B_();break}n=r.batchId,function(e,t){e.Pa.push(t);let n=aL(e);n.x_()&&n.X_&&n.Y_(t.mutations)}(e,r)}catch(t){await ax(e,t)}aD(e)&&aN(e)}function aD(e){return aI(e)&&!aL(e).M_()&&e.Pa.length>0}function aN(e){aL(e).start()}async function ak(e){aL(e).na()}async function aA(e){let t=aL(e);for(let n of e.Pa)t.Y_(n.mutations)}async function aV(e,t,n){let r=e.Pa.shift(),i=rL.from(r,t,n);await a_(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await aC(e)}async function aR(e,t){t&&aL(e).X_&&await async function(e,t){var n;if(function(e){switch(e){case _.OK:return b(64938);case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0;default:return b(15467,{code:e})}}(n=t.code)&&n!==_.ABORTED){let n=e.Pa.shift();aL(e).N_(),await a_(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await aC(e)}}(e,t),aD(e)&&aN(e)}async function aF(e,t){e.asyncQueue.verifyOperationInProgress(),v(au,"RemoteStore received new credentials");let n=aI(e);e.Va.add(3),await ad(e),n&&e.fa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Va.delete(3),await ac(e)}async function aO(e,t){t?(e.Va.delete(2),await ac(e)):t||(e.Va.add(2),await ad(e),e.fa.set("Unknown"))}function aP(e){var t,n,r;return e.pa||(e.pa=(t=e.datastore,n=e.asyncQueue,r={Ho:aT.bind(null,e),Xo:aE.bind(null,e),e_:ab.bind(null,e),J_:aS.bind(null,e)},t.ia(),new ai(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.da.push(async t=>{t?(e.pa.N_(),av(e)?aw(e):e.fa.set("Unknown")):(await e.pa.stop(),e.ga=void 0)})),e.pa}function aL(e){var t,n,r;return e.ya||(e.ya=(t=e.datastore,n=e.asyncQueue,r={Ho:()=>Promise.resolve(),Xo:ak.bind(null,e),e_:aR.bind(null,e),ea:aA.bind(null,e),ta:aV.bind(null,e)},t.ia(),new as(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.da.push(async t=>{t?(e.ya.N_(),await aC(e)):(await e.ya.stop(),e.Pa.length>0&&(v(au,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ya}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new D,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new aM(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new C(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aU(e,t){if(I("AsyncQueue",`${t}: ${e}`),eI(e))return new C(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{static emptySet(e){return new aB(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Q.comparator(t.key,n.key):(e,t)=>Q.comparator(e.key,t.key),this.keyedMap=n9(),this.sortedSet=new tC(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof aB)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new aB;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aq{constructor(){this.wa=new tC(Q.comparator)}track(e){let t=e.doc.key,n=this.wa.get(t);n?0!==e.type&&3===n.type?this.wa=this.wa.insert(t,e):3===e.type&&1!==n.type?this.wa=this.wa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.wa=this.wa.remove(t):1===e.type&&2===n.type?this.wa=this.wa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):b(63341,{At:e,Sa:n}):this.wa=this.wa.insert(t,e)}ba(){let e=[];return this.wa.inorderTraversal((t,n)=>{e.push(n)}),e}}class az{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new az(e,t,aB.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&n0(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aK{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class a${constructor(){this.queries=aG(),this.onlineState="Unknown",this.Ma=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=aG(),n.forEach((e,n)=>{for(let e of n.Ca)e.onError(t)})}(this,new C(_.ABORTED,"Firestore shutting down"))}}function aG(){return new n6(e=>n1(e),n0)}async function aj(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.va()&&t.Fa()&&(n=2):(i=new aK,n=t.Fa()?0:1);try{switch(n){case 0:i.Da=await e.onListen(r,!0);break;case 1:i.Da=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=aU(n,`Initialization of query '${n2(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.Ca.push(t),t.xa(e.onlineState),i.Da&&t.Oa(i.Da)&&aW(e)}async function aQ(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.Ca.indexOf(t);e>=0&&(i.Ca.splice(e,1),0===i.Ca.length?r=t.Fa()?0:1:!i.va()&&t.Fa()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function aH(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.Ca)e.Oa(r)&&(n=!0);i.Da=r}}n&&aW(e)}function aJ(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.Ca)e.onError(n);e.queries.delete(t)}function aW(e){e.Ma.forEach(e=>{e.next()})}(a=s||(s={})).Na="default",a.Cache="cache";class aY{constructor(e,t,n){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=n||{}}Oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new az(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){return!(e.fromCache&&this.Fa())||(!this.options.$a||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}qa(e){if(e.docChanges.length>0)return!0;let t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Ua(e){e=az.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aX{constructor(e){this.key=e}}class aZ{constructor(e){this.key=e}}class a0{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=rr(),this.mutatedKeys=rr(),this.ru=n5(e),this.iu=new aB(this.ru)}get su(){return this.eu}ou(e,t){let n=t?t._u:new aq,r=t?t.iu:this.iu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=n4(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.au(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.ru(h,o)>0||l&&0>this.ru(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{iu:s,_u:n,Ss:a,mutatedKeys:i}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;let s=e._u.ba();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b(20277,{At:e})}};return n(e)-n(t)})(e.type,t.type)||this.ru(e.doc,t.doc)),this.uu(n),r=r??!1;let a=t&&!r?this.cu():[],o=0===this.nu.size&&this.current&&!r?1:0,l=o!==this.tu;return(this.tu=o,0!==s.length||l)?{snapshot:new az(this.query,e.iu,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),lu:a}:{lu:a}}xa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({iu:this.iu,_u:new aq,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(e=>this.eu=this.eu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.eu=this.eu.delete(e)),this.current=e.current)}cu(){if(!this.current)return[];let e=this.nu;this.nu=rr(),this.iu.forEach(e=>{this.hu(e.key)&&(this.nu=this.nu.add(e.key))});let t=[];return e.forEach(e=>{this.nu.has(e)||t.push(new aZ(e))}),this.nu.forEach(n=>{e.has(n)||t.push(new aX(n))}),t}Pu(e){this.eu=e.Ls,this.nu=rr();let t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return az.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,0===this.tu,this.hasCachedResults)}}let a1="SyncEngine";class a2{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class a4{constructor(e){this.key=e,this.Iu=!1}}class a5{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Eu={},this.Ru=new n6(e=>n1(e),n0),this.Au=new Map,this.Vu=new Set,this.du=new tC(Q.comparator),this.mu=new Map,this.fu=new sx,this.gu={},this.pu=new Map,this.yu=si._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return!0===this.wu}}async function a6(e,t,n=!0){let r;let i=op(e),s=i.Ru.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Tu()):r=await a8(i,t,n,!0),r}async function a3(e,t){let n=op(e);await a8(n,t,!0,!1)}async function a8(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=nH(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.ci.getTargetData(e,s).next(n=>n?(t=n,ef.resolve(t)):i.ci.allocateTargetId(e).next(n=>(t=new iT(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.ci.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Cs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Cs=i.Cs.insert(e.targetId,e),i.vs.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(a=await a9(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&am(e.remoteStore,o),a}async function a9(e,t,n,r,i){e.Su=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ou(n);i.Ss&&(i=await sH(e.localStore,t.query,!1).then(({documents:e})=>t.view.ou(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return oc(e,t.targetId,o.lu),o.snapshot})(e,t,n,r);let s=await sH(e.localStore,t,!0),a=new a0(t,s.Ls),o=a.ou(s.documents),l=rQ.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);oc(e,n,u.lu);let h=new a2(t,n,a);return e.Ru.set(t,h),e.Au.has(n)?e.Au.get(n).push(t):e.Au.set(n,[t]),u.snapshot}async function a7(e,t,n){let r=e.Ru.get(t),i=e.Au.get(r.targetId);if(i.length>1)return e.Au.set(r.targetId,i.filter(e=>!n0(e,t))),void e.Ru.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await sQ(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&ag(e.remoteStore,r.targetId),ou(e,r.targetId)}).catch(ed)):(ou(e,r.targetId),await sQ(e.localStore,r.targetId,!0))}async function oe(e,t){let n=e.Ru.get(t),r=e.Au.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ag(e.remoteStore,n.targetId))}async function ot(e,t,n){let r=oy(e);try{var i;let e;let s=await function(e,t){let n,r;let i=ee.now(),s=t.reduce((e,t)=>e.add(t.key),rr());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=n3,l=rr();return e.Ms.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=rl(r.transform,e||null);null!=i&&(null===n&&(n=nf.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new rk(e.key,t,function e(t){let n=[];return tx(t.fields,(t,r)=>{let i=new j([t]);if(na(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new tR(n)}(t.value.mapValue),rb.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:n7(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.gu[r.currentUser.toKey()])||(e=new tC(M)),e=e.insert(i,n),r.gu[r.currentUser.toKey()]=e,await of(r,s.changes),await aC(r.remoteStore)}catch(t){let e=aU(t,"Failed to persist write");n.reject(e)}}async function on(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Cs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.Ms.newChangeBuffer({trackRemovals:!0});r=e.Cs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.ci.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.ci.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(tO.EMPTY_BYTE_STRING,et.min()).withLastLimboFreeSnapshotVersion(et.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.ci.updateTargetData(i,h))});let h=n3,c=rr();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=rr(),o=rr(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=n3;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(et.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):v(sK,"Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Ns:t,Bs:o}})).next(e=>{h=e.Ns,c=e.Bs})),!n.isEqual(et.min())){let t=e.ci.getLastRemoteSnapshotVersion(i).next(t=>e.ci.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return ef.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.Cs=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.mu.get(n);r&&(x(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.Iu=!0:t.modifiedDocuments.size>0?x(r.Iu,14607):t.removedDocuments.size>0&&(x(r.Iu,42227),r.Iu=!1))}),await of(e,n,t)}catch(e){await ed(e)}}function or(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.Ru.forEach((e,n)=>{let r=n.view.xa(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Ca)e.xa(t)&&(n=!0)}),n&&aW(r),i.length&&e.Eu.J_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function oi(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.mu.get(t),i=r&&r.key;if(i){let n=new tC(Q.comparator);n=n.insert(i,nm.newNoDocument(i,et.min()));let r=rr().add(i),s=new rj(et.min(),new Map,new tC(M),n,r);await on(e,s),e.du=e.du.remove(i),e.mu.delete(t),od(e)}else await sQ(e.localStore,t,!1).then(()=>ou(e,t,n)).catch(ed)}async function os(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Ms.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=ef.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);x(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=rr();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});ol(e,r,null),oo(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await of(e,i)}catch(e){await ed(e)}}async function oa(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(x(null!==t,37113),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});ol(e,t,n),oo(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await of(e,i)}catch(e){await ed(e)}}function oo(e,t){(e.pu.get(t)||[]).forEach(e=>{e.resolve()}),e.pu.delete(t)}function ol(e,t,n){let r=e.gu[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.gu[e.currentUser.toKey()]=r}}function ou(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Au.get(t)))e.Ru.delete(r),n&&e.Eu.bu(r,n);e.Au.delete(t),e.isPrimaryClient&&e.fu.Qr(t).forEach(t=>{e.fu.containsKey(t)||oh(e,t)})}function oh(e,t){e.Vu.delete(t.path.canonicalString());let n=e.du.get(t);null!==n&&(ag(e.remoteStore,n),e.du=e.du.remove(t),e.mu.delete(n),od(e))}function oc(e,t,n){for(let r of n)r instanceof aX?(e.fu.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Vu.has(r)||(v(a1,"New document in limbo: "+n),e.Vu.add(r),od(e))}(e,r)):r instanceof aZ?(v(a1,"Document no longer in limbo: "+r.key),e.fu.removeReference(r.key,t),e.fu.containsKey(r.key)||oh(e,r.key)):b(19791,{Du:r})}function od(e){for(;e.Vu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){let t=e.Vu.values().next().value;e.Vu.delete(t);let n=new Q($.fromString(t)),r=e.yu.next();e.mu.set(r,new a4(n)),e.du=e.du.insert(n,r),am(e.remoteStore,new iT(nH(n$(n.path)),r,"TargetPurposeLimboResolution",eD.ce))}}async function of(e,t,n){let r=[],i=[],s=[];e.Ru.isEmpty()||(e.Ru.forEach((a,o)=>{s.push(e.Su(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:n?.targetChanges.get(o.targetId)?.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=sB.Is(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Eu.J_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>ef.forEach(t,t=>ef.forEach(t.Ps,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>ef.forEach(t.Ts,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!eI(e))throw e;v(sK,"Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Cs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Cs=e.Cs.insert(t,i)}}}(e.localStore,i))}async function om(e,t){var n;if(!e.currentUser.isEqual(t)){v(a1,"User change. New user:",t.toKey());let r=await sG(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.pu.forEach(e=>{e.forEach(e=>{e.reject(new C(_.CANCELLED,n))})}),e.pu.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await of(e,r.Os)}}function og(e,t){let n=e.mu.get(t);if(n&&n.Iu)return rr().add(n.key);{let n=rr(),r=e.Au.get(t);if(!r)return n;for(let t of r){let r=e.Ru.get(t);n=n.unionWith(r.view.su)}return n}}function op(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=on.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=og.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oi.bind(null,e),e.Eu.J_=aH.bind(null,e.eventManager),e.Eu.bu=aJ.bind(null,e.eventManager),e}function oy(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=os.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oa.bind(null,e),e}class ow{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ae(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){var t;return t=this.persistence,new s$(t,new sz,e.initialUser,this.serializer)}Mu(e){return new sA(sR.Ai,this.serializer)}Fu(e){return new sW}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ow.provider={build:()=>new ow};class ov extends ow{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){return x(this.persistence.referenceDelegate instanceof sF,46915),new sh(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Mu(e){let t=void 0!==this.cacheSizeBytes?i9.withCacheSize(this.cacheSizeBytes):i9.DEFAULT;return new sA(e=>sF.Ai(e,t),this.serializer)}}class oI extends ow{constructor(e,t,n){super(),this.Bu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Bu.initialize(this,e),await oy(this.Bu.syncEngine),await aC(this.Bu.remoteStore),await this.persistence.Gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}xu(e){var t;return t=this.persistence,new s$(t,new sz,e.initialUser,this.serializer)}Ou(e,t){return new sh(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Nu(e,t){let n=new eC(t,this.persistence);return new e_(e.asyncQueue,n)}Mu(e){var t,n;let r;let i=(t=e.databaseInfo.databaseId,n=e.databaseInfo.persistenceKey,r=t.projectId,t.isDefaultDatabase||(r+="."+t.database),"firestore/"+n+"/"+r+"/"),s=void 0!==this.cacheSizeBytes?i9.withCacheSize(this.cacheSizeBytes):i9.DEFAULT;return new sU(this.synchronizeTabs,i,e.clientId,s,e.asyncQueue,"undefined"!=typeof window?window:null,s7(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Fu(e){return new sW}}class oT{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>or(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=om.bind(null,this.syncEngine),await aO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a$}createDatastore(e){let t=ae(e.databaseInfo.databaseId),n=new s9(e.databaseInfo);return new ao(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new ah(t,this.datastore,e.asyncQueue,e=>or(this.syncEngine,e,0),sZ.v()?new sZ:new sY)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new a5(e,t,n,r,i,s);return a&&(o.wu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){v(au,"RemoteStore shutting down."),e.Va.add(5),await ad(e),e.ma.shutdown(),e.fa.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}oT.provider={build:()=>new oT};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):I("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ob="FirestoreClient";class oS{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=m.UNAUTHENTICATED,this.clientId=L.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{v(ob,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(v(ob,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new D;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=aU(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ox(e,t){e.asyncQueue.verifyOperationInProgress(),v(ob,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await sG(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function o_(e,t){e.asyncQueue.verifyOperationInProgress();let n=await oC(e);v(ob,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>aF(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>aF(t.remoteStore,n)),e._onlineComponents=t}async function oC(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){v(ob,"Using user provided OfflineComponentProvider");try{await ox(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;T("Error using user provided cache. Falling back to memory cache: "+t),await ox(e,new ow)}}else v(ob,"Using default OfflineComponentProvider"),await ox(e,new ov(void 0))}return e._offlineComponents}async function oD(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(v(ob,"Using user provided OnlineComponentProvider"),await o_(e,e._uninitializedComponentsProvider._online)):(v(ob,"Using default OnlineComponentProvider"),await o_(e,new oT))),e._onlineComponents}async function oN(e){let t=await oD(e),n=t.eventManager;return n.onListen=a6.bind(null,t.syncEngine),n.onUnlisten=a7.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=a3.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=oe.bind(null,t.syncEngine),n}function ok(e,t,n,r){let i=new oE(r),s=new aY(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>aj(await oN(e),s)),()=>{i.ku(),e.asyncQueue.enqueueAndForget(async()=>aQ(await oN(e),s))}}function oA(e,t){let n=new D;return e.asyncQueue.enqueueAndForget(async()=>ot(await oD(e).then(e=>e.syncEngine),t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oR=new Map,oF="firestore.googleapis.com";class oO{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new C(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oF,this.ssl=!0}else this.host=e.host,this.ssl=e.ssl??!0;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new C(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new C(_.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oV(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new C(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new C(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new C(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oP{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oO({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new C(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oO(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"firstParty":return new F(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new C(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=oR.get(e);t&&(v("ComponentProvider","Removing Datastore"),oR.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new oL(this.firestore,e,this._query)}}class oM{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oU(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oM(this.firestore,e,this._key)}toJSON(){return{type:oM._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Z(t,oM._jsonSchema))return new oM(e,n||null,new Q($.fromString(t.referencePath)))}}oM._jsonSchemaVersion="firestore/documentReference/1.0",oM._jsonSchema={type:X("string",oM._jsonSchemaVersion),referencePath:X("string")};class oU extends oL{constructor(e,t,n){super(e,t,n$(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new oM(this.firestore,null,new Q(e))}withConverter(e){return new oU(this.firestore,e,this._path)}}function oB(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=L.newId()),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){if(!n)throw new C(_.INVALID_ARGUMENT,`Function doc() cannot be called with an empty ${t}.`)}(0,"path",t),e instanceof oP){let r=$.fromString(t,...n);return H(r),new oM(e,null,new Q(r))}{if(!(e instanceof oM||e instanceof oU))throw new C(_.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child($.fromString(t,...n));return H(r),new oM(e.firestore,e instanceof oU?e.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oq="AsyncQueue";class oz{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new at(this,"async_queue_retry"),this.cc=()=>{let e=s7();e&&v(oq,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this.lc=e;let t=s7();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;let t=s7();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});let t=new D;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(0!==this.nc.length){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!eI(e))throw e;v(oq,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){let t=this.lc.then(()=>(this._c=!0,e().catch(e=>{throw this.oc=e,this._c=!1,I("INTERNAL UNHANDLED ERROR: ",oK(e)),e}).then(e=>(this._c=!1,e))));return this.lc=t,t}enqueueAfterDelay(e,t,n){this.hc(),this.uc.indexOf(e)>-1&&(t=0);let r=aM.createAndSchedule(this,e,t,n,e=>this.Ic(e));return this.sc.push(r),r}hc(){this.oc&&b(47125,{Ec:oK(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(let t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{for(let t of(this.sc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.sc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){let t=this.sc.indexOf(e);this.sc.splice(t,1)}}function oK(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class o$ extends oP{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oz,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new oz(e),this._firestoreClient=void 0,await e}}}function oG(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||tH});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n,r={}){e=Y(e,oP);let i=(0,l.Xx)(t),s=e._getSettings(),a={...s,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${n}`;i&&(0,l.Uo)(`https://${o}`),s.host!==oF&&s.host!==o&&T("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u={...s,host:o,ssl:i,emulatorOptions:r};if(!(0,l.vZ)(u,a)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=m.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,e._app?.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new C(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new m(i)}e._authCredentials=new A(new N(t,n))}}(r,...e)}return r}function oj(e){if(e._terminated)throw new C(_.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||oQ(e),e._firestoreClient}function oQ(e){var t,n,r,i;let s=e._freezeSettings(),a=(t=e._databaseId,n=e._app?.options.appId||"",r=e._persistenceKey,i=e._app?.options.apiKey,new tQ(t,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oV(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i));e._componentsProvider||s.localCache?._offlineComponentProvider&&s.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new oS(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}function oH(e,t){T("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings();return function(e,t,n){if((e=Y(e,o$))._firestoreClient||e._terminated)throw new C(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new C(_.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:n},oQ(e)}(e,oT.provider,{build:e=>new oI(e,n.cacheSizeBytes,t?.forceOwnership)}),Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oJ{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oJ(tO.fromBase64String(e))}catch(e){throw new C(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oJ(tO.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:oJ._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Z(e,oJ._jsonSchema))return oJ.fromBase64String(e.bytes)}}oJ._jsonSchemaVersion="firestore/bytes/1.0",oJ._jsonSchema={type:X("string",oJ._jsonSchemaVersion),bytes:X("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oW{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new C(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oX{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return M(this._lat,e._lat)||M(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:oX._jsonSchemaVersion}}static fromJSON(e){if(Z(e,oX._jsonSchema))return new oX(e.latitude,e.longitude)}}oX._jsonSchemaVersion="firestore/geoPoint/1.0",oX._jsonSchema={type:X("string",oX._jsonSchemaVersion),latitude:X("number"),longitude:X("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oZ{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:oZ._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Z(e,oZ._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new oZ(e.vectorValues);throw new C(_.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}oZ._jsonSchemaVersion="firestore/vectorValue/1.0",oZ._jsonSchema={type:X("string",oZ._jsonSchemaVersion),vectorValues:X("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o0=/^__.*__$/;class o1{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new rk(e,this.data,this.fieldMask,t,this.fieldTransforms):new rN(e,this.data,t,this.fieldTransforms)}}class o2{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new rk(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function o4(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b(40011,{dataSource:e})}}class o5{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new o5({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.yc(e),n}wc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(),n}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return lu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(0===e.length)throw this.bc("Document fields must not be empty");if(o4(this.dataSource)&&o0.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class o6{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ae(e)}V(e,t,n,r=!1){return new o5({dataSource:e,methodName:t,targetDoc:n,path:j.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o3(e){let t=e._freezeSettings(),n=ae(e._databaseId);return new o6(e._databaseId,!!t.ignoreUndefinedProperties,n)}function o8(e,t,n,r,i,s={}){let a,o;let l=e.V(s.merge||s.mergeFields?2:0,t,n,i);ls("Data must be an object, but it was:",l,r);let u=lr(r,l);if(s.merge)a=new tR(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=la(t,r,n);if(!l.contains(i))throw new C(_.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lh(e,i)||e.push(i)}a=new tR(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new o1(new nf(u),a,o)}class o9 extends oY{_toFieldTransform(e){if(2!==e.dataSource)throw 1===e.dataSource?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof o9}}function o7(e,t,n,r){let i=e.V(1,t,n);ls("Data must be an object, but it was:",i,r);let s=[],a=nf.empty();return tx(r,(e,r)=>{let o=ll(t,e,n);r=(0,l.m9)(r);let u=i.wc(o);if(r instanceof o9)s.push(o);else{let e=ln(r,u);null!=e&&(s.push(o),a.set(o,e))}}),new o2(a,new tR(s),i.fieldTransforms)}function le(e,t,n,r,i,s){let a=e.V(1,t,n),o=[la(t,r,n)],u=[i];if(s.length%2!=0)throw new C(_.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(la(t,s[e])),u.push(s[e+1]);let h=[],c=nf.empty();for(let e=o.length-1;e>=0;--e)if(!lh(h,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.wc(t);if(n instanceof o9)h.push(t);else{let e=ln(n,r);null!=e&&(h.push(t),c.set(t,e))}}return new o2(c,new tR(h),a.fieldTransforms)}function lt(e,t,n,r=!1){return ln(n,e.V(r?4:3,t))}function ln(e,t){if(li(e=(0,l.m9)(e)))return ls("Unsupported field value:",t,e),lr(e,t);if(e instanceof oY)return function(e,t){if(!o4(t.dataSource))throw t.bc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.bc(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.bc("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=ln(i,t.Sc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i,s;if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!eN(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?ra(r):rs(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=ee.fromDate(e);return{timestampValue:r8(t.serializer,n)}}if(e instanceof ee){let n=new ee(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:r8(t.serializer,n)}}if(e instanceof oX)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oJ)return{bytesValue:r9(t.serializer,e._byteString)};if(e instanceof oM){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.bc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ie(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof oZ)return{mapValue:{fields:{[tY]:{stringValue:t0},[t1]:{arrayValue:{values:((s=e)instanceof oZ?s.toArray():s).map(e=>{if("number"!=typeof e)throw t.bc("VectorValues must only contain numeric values.");return rs(t.serializer,e)})}}}}};if(iI(e))return e._toProto(t.serializer);throw t.bc(`Unsupported field value: ${W(e)}`)}(e,t)}function lr(e,t){let n={};return t_(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tx(e,(e,r)=>{let i=ln(r,t.gc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function li(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ee||e instanceof oX||e instanceof oJ||e instanceof oM||e instanceof oY||e instanceof oZ||iI(e))}function ls(e,t,n){if(!li(n)||!J(n)){let r=W(n);throw"an object"===r?t.bc(e+" a custom object"):t.bc(e+" "+r)}}function la(e,t,n){if((t=(0,l.m9)(t))instanceof oW)return t._internalPath;if("string"==typeof t)return ll(e,t);throw lu("Field path arguments must be of type string or ",e,!1,void 0,n)}let lo=RegExp("[~\\*/\\[\\]]");function ll(e,t,n){if(t.search(lo)>=0)throw lu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oW(...t.split("."))._internalPath}catch(r){throw lu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lu(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new C(_.INVALID_ARGUMENT,o+e+l)}function lh(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{convertValue(e,t="none"){switch(t4(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tM(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tU(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw b(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return tx(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){return new oZ(e.fields?.[t1].arrayValue?.values?.map(e=>tM(e.doubleValue)))}convertGeoPoint(e){return new oX(tM(e.latitude),tM(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=tG(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(tj(e));default:return null}}convertTimestamp(e){let t=tL(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=$.fromString(e);x(iv(n),9688,{name:e});let r=new tJ(n.get(1),n.get(3)),i=new Q(n.popFirst(5));return r.isEqual(t)||I(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends lc{constructor(e){super(),this.firestore=e}convertBytes(e){return new oJ(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new oM(this.firestore,null,t)}}}}]);