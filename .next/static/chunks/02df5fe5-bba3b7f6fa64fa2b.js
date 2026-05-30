"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{9745:function(e,t,n){n.d(t,{$:function(){return aY},A:function(){return a7},B:function(){return aL},C:function(){return nI},D:function(){return a_},F:function(){return aV},H:function(){return oe},N:function(){return F},Q:function(){return aS},R:function(){return $},U:function(){return b},W:function(){return aJ},X:function(){return rv},Y:function(){return aM},Z:function(){return aW},_:function(){return p},a:function(){return k},a6:function(){return aA},aU:function(){return aF},aX:function(){return aR},ac:function(){return av},an:function(){return ny},b:function(){return P},c:function(){return tJ},d:function(){return _},e:function(){return S},f:function(){return nj},g:function(){return aH},h:function(){return aZ},i:function(){return nv},j:function(){return a4},k:function(){return nQ},l:function(){return nH},n:function(){return nJ},o:function(){return nX},p:function(){return Y},q:function(){return nK},r:function(){return t7},s:function(){return t$},t:function(){return nm},u:function(){return n$},v:function(){return j},w:function(){return J},y:function(){return X},z:function(){return aO}});var r,i,s,a,o=n(1480),l=n(9074),u=n(6552),h=n(3693),c=n(4575),d=n(357);n(6300).Buffer;/**
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
 */class f{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}f.UNAUTHENTICATED=new f(null),f.GOOGLE_CREDENTIALS=new f("google-credentials-uid"),f.FIRST_PARTY=new f("first-party-uid"),f.MOCK_USER=new f("mock-user");/**
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
 */let m="12.14.0";function p(e){m=e}/**
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
 */let g=new h.Yd("@firebase/firestore");function y(){return g.logLevel}function w(e,...t){if(g.logLevel<=h.in.DEBUG){let n=t.map(E);g.debug(`Firestore (${m}): ${e}`,...n)}}function v(e,...t){if(g.logLevel<=h.in.ERROR){let n=t.map(E);g.error(`Firestore (${m}): ${e}`,...n)}}function I(e,...t){if(g.logLevel<=h.in.WARN){let n=t.map(E);g.warn(`Firestore (${m}): ${e}`,...n)}}function E(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
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
 */function b(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,T(e,r,n)}function T(e,t,n){let r=`FIRESTORE (${m}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw v(r),Error(r)}function x(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||T(t,i,r)}/**
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
 */let S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class N{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(f.UNAUTHENTICATED))}shutdown(){}}class C{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(e){this.t=e,this.currentUser=f.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){x(void 0===this.o,42304);let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new N;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new N,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new N)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(x("string"==typeof t.accessToken,31837,{l:t}),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return x(null===e||"string"==typeof e,2055,{h:e}),new f(e)}}class V{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=f.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);let e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class R{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new V(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(f.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,o.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){x(void 0===this.o,3512);let n=e=>{null!=e.error&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.m;return this.m=e.token,w("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?r(e):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new O(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(x("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new O(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class F{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function L(e,t){return e<t?-1:e>t?1:0}function M(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.charAt(r),i=t.charAt(r);if(n!==i)return U(n)===U(i)?L(n,i):U(n)?1:-1}return L(e.length,t.length)}function U(e){let t=e.charCodeAt(0);return t>=55296&&t<=57343}function B(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
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
 */let q="__name__";class z{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&b(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===z.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof z?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=z.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return L(e.length,t.length)}static compareSegments(e,t){let n=z.isNumericId(e),r=z.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?z.extractNumericId(e).compare(z.extractNumericId(t)):M(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return u.z8.fromString(e.substring(4,e.length-2))}}class $ extends z{construct(e,t,n){return new $(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new _(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new $(t)}static emptyPath(){return new $([])}}let K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends z{construct(e,t,n){return new G(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===q}static keyField(){return new G([q])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new _(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new _(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new _(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new _(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new G(t)}static emptyPath(){return new G([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j($.fromString(e))}static fromName(e){return new j($.fromString(e).popFirst(5))}static empty(){return new j($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===$.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return $.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new $(e.slice()))}}function Q(e){if(!j.isDocumentKey(e))throw new _(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function H(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function J(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":b(12329,{type:typeof e})}function X(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=J(e);throw new _(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function Y(e,t){let n={typeString:e};return t&&(n.value=t),n}function W(e,t){let n;if(!H(e))throw new _(S.INVALID_ARGUMENT,"JSON must be an object");for(let r in t)if(t[r]){let i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}let a=e[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new _(S.INVALID_ARGUMENT,n);return!0}class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new Z(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new _(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new _(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(W(e,Z._jsonSchema))return new Z(e.seconds,e.nanoseconds)}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:Y("string",Z._jsonSchemaVersion),seconds:Y("number"),nanoseconds:Y("number")};/**
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
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Z(0,0))}static max(){return new ee(new Z(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}class et{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function en(e){return e.fields.find(e=>2===e.kind)}function er(e){return e.fields.filter(e=>2!==e.kind)}et.UNKNOWN_ID=-1;class ei{constructor(e,t){this.fieldPath=e,this.kind=t}}class es{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new es(0,eo.min())}}function ea(e){return new eo(e.readTime,e.key,-1)}class eo{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new eo(ee.min(),j.empty(),-1)}static max(){return new eo(ee.max(),j.empty(),-1)}}function el(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=j.comparator(e.documentKey,t.documentKey))?n:L(e.largestBatchId,t.largestBatchId)}/**
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
 */let eu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ec(e){if(e.code!==S.FAILED_PRECONDITION||e.message!==eu)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ed{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ed((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ed?t:ed.resolve(t)}catch(e){return ed.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ed.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ed.reject(t)}static resolve(e){return new ed((t,n)=>{t(e)})}static reject(e){return new ed((t,n)=>{n(e)})}static waitFor(e){return new ed((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=ed.resolve(!1);for(let n of e)t=t.next(e=>e?ed.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ed((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new ed((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
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
 */let ef="SimpleDb";class em{static open(e,t,n,r){try{return new em(t,e.transaction(r,n))}catch(e){throw new ew(t,e)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new N,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ew(e,t.error)):this.S.resolve()},this.transaction.onerror=t=>{let n=eT(t.target.error);this.S.reject(new ew(e,n))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(w(ef,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new eI(this.transaction.objectStore(e))}}class ep{static delete(e){return w(ef,"Removing database:",e),eE((0,l.Rd)().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!(0,l.hl)())return!1;if(ep.F())return!0;let e=(0,l.z$)(),t=ep.M(e),n=eg(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static F(){return void 0!==d&&"YES"===d.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE}static O(e,t){return e.store(t)}static M(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,12.2===ep.M((0,l.z$)())&&v("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(w(ef,"Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new ew(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new _(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new _(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ew(e,r))},r.onupgradeneeded=e=>{w(ef,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.N.k(t,r.transaction,e.oldVersion,this.version).next(()=>{w(ef,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.L(e);let t=em.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.C(),e)).catch(e=>(t.abort(e),ed.reject(e))).toPromise();return s.catch(()=>{}),await t.D,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(w(ef,"Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function eg(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}class ey{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return eE(this.U.delete())}}class ew extends _{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ev(e){return"IndexedDbTransactionError"===e.name}class eI{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(w(ef,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(w(ef,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),eE(n)}add(e){return w(ef,"ADD",this.store.name,e,e),eE(this.store.add(e))}get(e){return eE(this.store.get(e)).next(t=>(void 0===t&&(t=null),w(ef,"GET",this.store.name,e,t),t))}delete(e){return w(ef,"DELETE",this.store.name,e),eE(this.store.delete(e))}count(){return w(ef,"COUNT",this.store.name),eE(this.store.count())}J(e,t){let n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){let e=r.getAll(n.range);return new ed((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.H(e,(e,n)=>{t.push(n)}).next(()=>t)}}Z(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new ed((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}X(e,t){w(ef,"DELETE ALL",this.store.name);let n=this.options(e,t);n.Y=!1;let r=this.cursor(n);return this.H(r,(e,t,n)=>n.delete())}ee(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.H(r,t)}te(e){let t=this.cursor({});return new ed((n,r)=>{t.onerror=e=>{r(eT(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}H(e,t){let n=[];return new ed((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new ey(i),a=t(i.primaryKey,i.value,s);if(a instanceof ed){let e=a.catch(e=>(s.done(),ed.reject(e)));n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}}).next(()=>ed.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eE(e){return new ed((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(eT(e.target.error))}})}let eb=!1;function eT(e){let t=ep.M((0,l.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new _("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eb||(eb=!0,setTimeout(()=>{throw e},0)),e}}return e}let ex="IndexBackfiller";class eS{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}re(e){w(ex,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{let e=await this.ne.ie();w(ex,`Documents written: ${e}`)}catch(e){ev(e)?w(ex,"Ignoring IndexedDB error during index backfill: ",e):await ec(e)}await this.re(6e4)})}}class e_{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))}se(e,t){let n=new Set,r=t,i=!0;return ed.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return w(ex,`Processing collection: ${t}`),this.oe(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this._e(r,n)).next(n=>(w(ex,`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}_e(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=ea(t);el(r,n)>0&&(n=r)}),new eo(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class eN{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ue&&this.ue(e),e}}function eA(e){return 0===e&&1/e==-1/0}function eD(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"}function eC(e){let t=e.length;if(x(t>=2,64408,{path:e}),2===t)return x("\x01"===e.charAt(0)&&"\x01"===e.charAt(1),56145,{path:e}),$.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&b(50515,{path:e}),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\0";break;case"\x11":i+=e.substring(s,t+1);break;default:b(61167,{path:e})}s=t+2}return new $(r)}eN.ce=-1;/**
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
 */let ek="remoteDocuments",eV="owner",eR="owner",eO="mutationQueues",eP="mutations",eF="batchId",eL="userMutationsIndex",eM=["userId","batchId"],eU={},eB="documentMutations",eq="remoteDocumentsV14",ez=["prefixPath","collectionGroup","readTime","documentId"],e$="documentKeyIndex",eK=["prefixPath","collectionGroup","documentId"],eG="collectionGroupIndex",ej=["collectionGroup","readTime","prefixPath","documentId"],eQ="remoteDocumentGlobal",eH="remoteDocumentGlobalKey",eJ="targets",eX="queryTargetsIndex",eY=["canonicalId","targetId"],eW="targetDocuments",eZ=["targetId","path"],e0="documentTargetsIndex",e1=["path","targetId"],e2="targetGlobalKey",e5="targetGlobal",e4="collectionParents",e6=["collectionId","parent"],e3="clientMetadata",e8="bundles",e9="namedQueries",e7="indexConfiguration",te="collectionGroupIndex",tt="indexState",tn=["indexId","uid"],tr="sequenceNumberIndex",ti=["uid","sequenceNumber"],ts="indexEntries",ta=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],to="documentKeyIndex",tl=["indexId","uid","orderedDocumentKey"],tu="documentOverlays",th=["userId","collectionPath","documentId"],tc="collectionPathOverlayIndex",td=["userId","collectionPath","largestBatchId"],tf="collectionGroupOverlayIndex",tm=["userId","collectionGroup","largestBatchId"],tp="globals",tg=[eO,eP,eB,ek,eJ,eV,e5,eW,e3,eQ,e4,e8,e9],ty=[...tg,tu],tw=[eO,eP,eB,eq,eJ,eV,e5,eW,e3,eQ,e4,e8,e9,tu],tv=[...tw,e7,tt,ts],tI=[...tv,tp];/**
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
 */class tE extends eh{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function tb(e,t){return ep.O(e.le,t)}/**
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
 */function tT(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function tx(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function tS(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class t_{constructor(e,t){this.comparator=e,this.root=t||tA.EMPTY}insert(e,t){return new t_(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tA.BLACK,null,null))}remove(e){return new t_(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tA.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tN(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tN(this.root,e,this.comparator,!1)}getReverseIterator(){return new tN(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tN(this.root,e,this.comparator,!0)}}class tN{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tA{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:tA.RED,this.left=null!=r?r:tA.EMPTY,this.right=null!=i?i:tA.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new tA(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return tA.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return tA.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,tA.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,tA.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw b(43730,{key:this.key,value:this.value});if(this.right.isRed())throw b(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw b(27949);return e+(this.isRed()?0:1)}}tA.EMPTY=null,tA.RED=!0,tA.BLACK=!1,tA.EMPTY=new class{constructor(){this.size=0}get key(){throw b(57766)}get value(){throw b(16141)}get color(){throw b(16727)}get left(){throw b(29726)}get right(){throw b(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new tA(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tD{constructor(e){this.comparator=e,this.data=new t_(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tC(this.data.getIterator())}getIteratorFrom(e){return new tC(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tD)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tD(this.comparator);return t.data=e,t}}class tC{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function tk(e){return e.hasNext()?e.getNext():void 0}/**
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
 */class tV{constructor(e){this.fields=e,e.sort(G.comparator)}static empty(){return new tV([])}unionWith(e){let t=new tD(G.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new tV(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return B(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class tR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tO{constructor(e){this.binaryString=e}static fromBase64String(e){return new tO(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new tR("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new tO(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tO.EMPTY_BYTE_STRING=new tO("");let tP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tF(e){if(x(!!e,39018),"string"==typeof e){let t=0,n=tP.exec(e);if(x(!!n,46558,{timestamp:e}),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:tL(e.seconds),nanos:tL(e.nanos)}}function tL(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function tM(e){return"string"==typeof e?tO.fromBase64String(e):tO.fromUint8Array(e)}/**
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
 */let tU="server_timestamp",tB="__type__",tq="__previous_value__",tz="__local_write_time__";function t$(e){return(e?.mapValue?.fields||{})[tB]?.stringValue===tU}function tK(e){let t=e.mapValue.fields[tq];return t$(t)?tK(t):t}function tG(e){let t=tF(e.mapValue.fields[tz].timestampValue);return new Z(t.seconds,t.nanos)}/**
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
 */class tj{constructor(e,t,n,r,i,s,a,o,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u,this.apiKey=h}}let tQ="(default)";class tH{constructor(e,t){this.projectId=e,this.database=t||tQ}static empty(){return new tH("","")}get isDefaultDatabase(){return this.database===tQ}isEqual(e){return e instanceof tH&&e.projectId===this.projectId&&e.database===this.database}}function tJ(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new _(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tH(e.options.projectId,t)}/**
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
 */let tX="__type__",tY="__max__",tW={mapValue:{fields:{__type__:{stringValue:tY}}}},tZ="__vector__",t0="value",t1={nullValue:"NULL_VALUE"};function t2(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?t$(e)?4:nl(e)?9007199254740991:na(e)?10:11:b(28295,{value:e})}function t5(e,t){if(e===t)return!0;let n=t2(e);if(n!==t2(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return tG(e).isEqual(tG(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=tF(e.timestampValue),r=tF(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return tM(e.bytesValue).isEqual(tM(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return tL(e.geoPointValue.latitude)===tL(t.geoPointValue.latitude)&&tL(e.geoPointValue.longitude)===tL(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return tL(e.integerValue)===tL(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=tL(e.doubleValue),r=tL(t.doubleValue);return n===r?eA(n)===eA(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return B(e.arrayValue.values||[],t.arrayValue.values||[],t5);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(tT(n)!==tT(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!t5(n[e],r[e])))return!1;return!0}(e,t);default:return b(52216,{left:e})}}function t4(e,t){return void 0!==(e.values||[]).find(e=>t5(e,t))}function t6(e,t){if(e===t)return 0;let n=t2(e),r=t2(t);if(n!==r)return L(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=tL(e.integerValue||e.doubleValue),r=tL(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return t3(e.timestampValue,t.timestampValue);case 4:return t3(tG(e),tG(t));case 5:return M(e.stringValue,t.stringValue);case 6:return function(e,t){let n=tM(e),r=tM(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=L(n[e],r[e]);if(0!==t)return t}return L(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=L(tL(e.latitude),tL(t.latitude));return 0!==n?n:L(tL(e.longitude),tL(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return t8(e.arrayValue,t.arrayValue);case 10:return function(e,t){let n=e.fields||{},r=t.fields||{},i=n[t0]?.arrayValue,s=r[t0]?.arrayValue,a=L(i?.values?.length||0,s?.values?.length||0);return 0!==a?a:t8(i,s)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===tW.mapValue&&t===tW.mapValue)return 0;if(e===tW.mapValue)return 1;if(t===tW.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=M(r[e],s[e]);if(0!==t)return t;let a=t6(n[r[e]],i[s[e]]);if(0!==a)return a}return L(r.length,s.length)}(e.mapValue,t.mapValue);default:throw b(23264,{he:n})}}function t3(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return L(e,t);let n=tF(e),r=tF(t),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function t8(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=t6(n[e],r[e]);if(t)return t}return L(n.length,r.length)}function t9(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=tF(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?tM(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,j.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=t9(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${t9(e.fields[i])}`;return n+"}"}(e.mapValue):b(61005,{value:e})}function t7(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ne(e){return!!e&&"integerValue"in e}function nt(e){return ne(e)||!!e&&"doubleValue"in e}function nn(e){return!!e&&"arrayValue"in e}function nr(e){return!!e&&"nullValue"in e}function ni(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ns(e){return!!e&&"mapValue"in e}function na(e){return(e?.mapValue?.fields||{})[tX]?.stringValue===tZ}function no(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return tx(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=no(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=no(e.arrayValue.values[n]);return t}return{...e}}function nl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===tY}let nu={mapValue:{fields:{[tX]:{stringValue:tZ},[t0]:{arrayValue:{}}}}};function nh(e,t){let n=t6(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function nc(e,t){let n=t6(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
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
 */class nd{constructor(e){this.value=e}static empty(){return new nd({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ns(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(t)}setAll(e){let t=G.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=no(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return t5(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ns(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(tx(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new nd(no(this.value))}}/**
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
 */class nf{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new nf(e,0,ee.min(),ee.min(),ee.min(),nd.empty(),0)}static newFoundDocument(e,t,n,r){return new nf(e,1,t,ee.min(),n,r,0)}static newNoDocument(e,t){return new nf(e,2,t,ee.min(),ee.min(),nd.empty(),0)}static newUnknownDocument(e,t){return new nf(e,3,t,ee.min(),ee.min(),nd.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(ee.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nd.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nd.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof nf&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nf(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nm{constructor(e,t){this.position=e,this.inclusive=t}}function np(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?j.comparator(j.fromName(a.referenceValue),n.key):t6(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ng(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!t5(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ny{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class nw{}class nv extends nw{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new n_(e,t,n):"array-contains"===t?new nC(e,n):"in"===t?new nk(e,n):"not-in"===t?new nV(e,n):"array-contains-any"===t?new nR(e,n):new nv(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new nN(e,n):new nA(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(t6(t,this.value)):null!==t&&t2(this.value)===t2(t)&&this.matchesComparison(t6(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return b(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nI extends nw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new nI(e,t)}matches(e){return nE(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nE(e){return"and"===e.op}function nb(e){return"or"===e.op}function nT(e){return nx(e)&&nE(e)}function nx(e){for(let t of e.filters)if(t instanceof nI)return!1;return!0}function nS(e,t){let n=e.filters.concat(t);return nI.create(n,e.op)}class n_ extends nv{constructor(e,t,n){super(e,t,n),this.key=j.fromName(n.referenceValue)}matches(e){let t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class nN extends nv{constructor(e,t){super(e,"in",t),this.keys=nD("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nA extends nv{constructor(e,t){super(e,"not-in",t),this.keys=nD("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nD(e,t){return(t.arrayValue?.values||[]).map(e=>j.fromName(e.referenceValue))}class nC extends nv{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return nn(t)&&t4(t.arrayValue,this.value)}}class nk extends nv{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&t4(this.value.arrayValue,t)}}class nV extends nv{constructor(e,t){super(e,"not-in",t)}matches(e){if(t4(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!t4(this.value.arrayValue,t)}}class nR extends nv{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!nn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>t4(this.value.arrayValue,e))}}/**
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
 */class nO{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.Te=null}}function nP(e,t=null,n=[],r=[],i=null,s=null,a=null){return new nO(e,t,n,r,i,s,a)}function nF(e){if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof nv)return t.field.canonicalString()+t.op.toString()+t9(t.value);if(nT(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>t9(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>t9(e)).join(",")),e.Te=t}return e.Te}function nL(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof nv?n instanceof nv&&t.op===n.op&&t.field.isEqual(n.field)&&t5(t.value,n.value):t instanceof nI?n instanceof nI&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void b(19439)}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ng(e.startAt,t.startAt)&&ng(e.endAt,t.endAt)}function nM(e,t){return e.filters.filter(e=>e instanceof nv&&e.field.isEqual(t))}function nU(e,t,n){let r=t1,i=!0;for(let n of nM(e,t)){let e=t1,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?t1:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?t7(tH.empty(),j.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?na(s)?nu:{mapValue:{}}:b(35942,{value:s});break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=t1}0>nh({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>nh({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function nB(e,t,n){let r=tW,i=!0;for(let n of nM(e,t)){let e=tW,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?t7(tH.empty(),j.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?nu:"mapValue"in s?na(s)?{mapValue:{}}:tW:b(61959,{value:s}),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=tW}nc({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];nc({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class nq{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function nz(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function n$(e){return null!==e.collectionGroup}function nK(e){if(null===e.Ie){let t;e.Ie=[];let n=new Set;for(let t of e.explicitOrderBy)e.Ie.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new tD(G.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.Ie.push(new ny(t,r))}),n.has(G.keyField().canonicalString())||e.Ie.push(new ny(G.keyField(),r))}return e.Ie}function nG(e){return e.Ee||(e.Ee=function(e,t){if("F"===e.limitType)return nP(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new ny(e.field,t)});let n=e.endAt?new nm(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new nm(e.startAt.position,e.startAt.inclusive):null;return nP(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,nK(e))),e.Ee}function nj(e,t){let n=e.filters.concat([t]);return new nq(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function nQ(e,t){let n=e.explicitOrderBy.concat([t]);return new nq(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}function nH(e,t,n){return new nq(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function nJ(e,t){return new nq(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}function nX(e,t){return new nq(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}function nY(e,t){return nL(nG(e),nG(t))&&e.limitType===t.limitType}function nW(e){return`${nF(nG(e))}|lt:${e.limitType}`}function nZ(e){var t;let n;return`Query(target=${n=(t=nG(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof nv?`${t.field.canonicalString()} ${t.op} ${t9(t.value)}`:t instanceof nI?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>t9(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>t9(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function n0(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):j.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of nK(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=np(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,nK(e),t))&&(!e.endAt||!!function(e,t,n){let r=np(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,nK(e),t))}/**
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
 */class n1{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){tx(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return tS(this.inner)}size(){return this.innerSize}}/**
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
 */let n2=new t_(j.comparator),n5=new t_(j.comparator);function n4(...e){let t=n5;for(let n of e)t=t.insert(n.key,n);return t}function n6(e){let t=n5;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function n3(){return new n1(e=>e.toString(),(e,t)=>e.isEqual(t))}let n8=new t_(j.comparator),n9=new tD(j.comparator);function n7(...e){let t=n9;for(let n of e)t=t.add(n);return t}let re=new tD(L);/**
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
 */function rt(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eA(t)?"-0":t}}function rn(e){return{integerValue:""+e}}/**
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
 */class rr{constructor(){this._=void 0}}function ri(e,t){return e instanceof rc?nt(t)?t:{integerValue:0}:null}class rs extends rr{}class ra extends rr{constructor(e){super(),this.elements=e}}function ro(e,t){let n=rg(t);for(let t of e.elements)n.some(e=>t5(e,t))||n.push(t);return{arrayValue:{values:n}}}class rl extends rr{constructor(e){super(),this.elements=e}}function ru(e,t){let n=rg(t);for(let t of e.elements)n=n.filter(e=>!t5(e,t));return{arrayValue:{values:n}}}class rh extends rr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class rc extends rh{}class rd extends rh{}class rf extends rh{}function rm(e,t,n){if(!nt(t))return e.Ae;let r=n(rp(t),rp(e.Ae));return ne(t)&&ne(e.Ae)?rn(r):rt(e.serializer,r)}function rp(e){return tL(e.integerValue||e.doubleValue)}function rg(e){return nn(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class ry{constructor(e,t){this.field=e,this.transform=t}}class rw{constructor(e,t){this.version=e,this.transformResults=t}}class rv{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rv}static exists(e){return new rv(void 0,e)}static updateTime(e){return new rv(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rI(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class rE{}function rb(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new rC(e.key,rv.none()):new rS(e.key,e.data,rv.none());{let n=e.data,r=nd.empty(),i=new tD(G.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new r_(e.key,r,new tV(i.toArray()),rv.none())}}function rT(e,t,n,r){return e instanceof rS?function(e,t,n,r){if(!rI(e.precondition,t))return n;let i=e.value.clone(),s=rD(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof r_?function(e,t,n,r){if(!rI(e.precondition,t))return n;let i=rD(e.fieldTransforms,r,t),s=t.data;return(s.setAll(rN(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):rI(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function rx(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&B(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof ra&&r instanceof ra||n instanceof rl&&r instanceof rl?B(n.elements,r.elements,t5):n instanceof rc&&r instanceof rc||n instanceof rd&&r instanceof rd||n instanceof rf&&r instanceof rf?t5(n.Ae,r.Ae):n instanceof rs&&r instanceof rs)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class rS extends rE{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class r_ extends rE{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rN(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function rA(e,t,n){let r=new Map;x(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){var i;let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof ra?ro(o,l):o instanceof rl?ru(o,l):i))}return r}function rD(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof rs?function(e,t){let n={fields:{[tB]:{stringValue:tU},[tz]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&t$(t)&&(t=tK(t)),t&&(n.fields[tq]=t),{mapValue:n}}(t,s):e instanceof ra?ro(e,s):e instanceof rl?ru(e,s):e instanceof rc?function(e,t){let n=ri(e,t),r=rp(n)+rp(e.Ae);return ne(n)&&ne(e.Ae)?rn(r):rt(e.serializer,r)}(e,s):e instanceof rd?rm(e,s,Math.min):e instanceof rf?rm(e,s,Math.max):void 0)}return r}class rC extends rE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rk extends rE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rV{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof rS?function(e,t,n){let r=e.value.clone(),i=rA(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof r_?function(e,t,n){if(!rI(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=rA(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(rN(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=rT(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=rT(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=n3();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=rb(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(ee.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),n7())}isEqual(e){return this.batchId===e.batchId&&B(this.mutations,e.mutations,(e,t)=>rx(e,t))&&B(this.baseMutations,e.baseMutations,(e,t)=>rx(e,t))}}class rR{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){x(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=n8,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new rR(e,t,n,r)}}/**
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
 */class rO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS",new u.z8([4294967295,4294967295],0);let rP={asc:"ASCENDING",desc:"DESCENDING"},rF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rL={and:"AND",or:"OR"};class rM{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rU(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rB(e){return x(!!e,49232),ee.fromTimestamp(function(e){let t=tF(e);return new Z(t.seconds,t.nanos)}(e))}function rq(e,t){return rz(e,t).canonicalString()}function rz(e,t){let n=new $(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function r$(e){let t=$.fromString(e);return x(r1(t),10190,{key:t.toString()}),t}function rK(e,t){return rq(e.databaseId,t.path)}function rG(e,t){let n=r$(t);if(n.get(1)!==e.databaseId.projectId)throw new _(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(rH(n))}function rj(e,t){return rq(e.databaseId,t)}function rQ(e){let t=r$(e);return 4===t.length?$.emptyPath():rH(t)}function rH(e){return x(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function rJ(e,t,n){return{name:rK(e,t),fields:n.value.mapValue.fields}}function rX(e,t){var n;let r;if(t instanceof rS)r={update:rJ(e,t.key,t.value)};else if(t instanceof rC)r={delete:rK(e,t.key)};else if(t instanceof r_)r={update:rJ(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof rk))return b(16599,{Vt:t.type});r={verify:rK(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof rs)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ra)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof rl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof rc)return{fieldPath:t.field.canonicalString(),increment:n.Ae};if(n instanceof rd)return{fieldPath:t.field.canonicalString(),minimum:n.Ae};if(n instanceof rf)return{fieldPath:t.field.canonicalString(),maximum:n.Ae};throw b(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:rU(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:b(27497)),r}function rY(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?rv.updateTime(rB(n.updateTime)):void 0!==n.exists?rv.exists(n.exists):rv.none():rv.none(),i=t.updateTransforms?t.updateTransforms.map(t=>{let n;return n=null,"setToServerValue"in t?(x("REQUEST_TIME"===t.setToServerValue,16630,{proto:t}),n=new rs):"appendMissingElements"in t?n=new ra(t.appendMissingElements.values||[]):"removeAllFromArray"in t?n=new rl(t.removeAllFromArray.values||[]):"increment"in t?n=new rc(e,t.increment):"minimum"in t?n=new rd(e,t.minimum):"maximum"in t?n=new rf(e,t.maximum):b(16584,{proto:t}),new ry(G.fromServerFormat(t.fieldPath),n)}):[];if(t.update){t.update.name;let n=rG(e,t.update.name),s=new nd({mapValue:{fields:t.update.fields}});return t.updateMask?new r_(n,s,new tV((t.updateMask.fieldPaths||[]).map(e=>G.fromServerFormat(e))),r,i):new rS(n,s,r,i)}return t.delete?new rC(rG(e,t.delete),r):t.verify?new rk(rG(e,t.verify),r):b(1463,{proto:t})}function rW(e){var t;let n,r=rQ(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){x(1===s,65062);let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=r0(e.unaryFilter.field);return nv.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=r0(e.unaryFilter.field);return nv.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=r0(e.unaryFilter.field);return nv.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=r0(e.unaryFilter.field);return nv.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return b(61313);default:return b(60726)}}(t):void 0!==t.fieldFilter?nv.create(r0(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return b(58110);default:return b(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?nI.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return b(1026)}}(t.compositeFilter.op)):b(30097,{filter:t})}(e);return t instanceof nI&&nT(t)?t.getFilters():[t]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new ny(r0(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new nm(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new nm(e.values||[],t)}(i.endAt)),new nq(r,a,l,o,u,"F",h,c)}function rZ(e){return{fieldPath:e.canonicalString()}}function r0(e){return G.fromServerFormat(e.fieldPath)}function r1(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function r2(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}/**
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
 */class r5{constructor(e,t,n,r,i=ee.min(),s=ee.min(),a=tO.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new r5(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new r5(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new r5(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new r5(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class r4{constructor(e){this.gt=e}}function r6(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:r3(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:rK(i=e.gt,t.key),fields:t.data.value.mapValue.fields,updateTime:rU(i,t.version.toTimestamp()),createTime:rU(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:r8(t.version)};else{if(!t.isUnknownDocument())return b(57904,{document:t});r.unknownDocument={path:n.path.toArray(),version:r8(t.version)}}return r}function r3(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function r8(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function r9(e){let t=new Z(e.seconds,e.nanoseconds);return ee.fromTimestamp(t)}function r7(e,t){let n=(t.baseMutations||[]).map(t=>rY(e.gt,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>rY(e.gt,t)),i=Z.fromMillis(t.localWriteTimeMs);return new rV(t.batchId,i,n,r)}function ie(e){let t=r9(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?r9(e.lastLimboFreeSnapshotVersion):ee.min();return new r5(void 0!==e.query.documents?function(e){let t=e.documents.length;return x(1===t,1966,{count:t}),nG(new nq(rQ(e.documents[0])))}(e.query):nG(rW(e.query)),e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,tO.fromBase64String(e.resumeToken))}function it(e,t){var n;let r;let i=r8(t.snapshotVersion),s=r8(t.lastLimboFreeSnapshotVersion);n=t.target,r=j.isDocumentKey(n.path)&&null===n.collectionGroup&&0===n.filters.length?{documents:[rj(e.gt,t.target.path)]}:function(e,t){var n,r,i;let s;let a={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(s=o,a.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=o.popLast(),a.structuredQuery.from=[{collectionId:o.lastSegment()}]),a.parent=rj(e,s);let l=function(e){if(0!==e.length)return function e(t){return t instanceof nv?function(e){if("=="===e.op){if(ni(e.value))return{unaryFilter:{field:rZ(e.field),op:"IS_NAN"}};if(nr(e.value))return{unaryFilter:{field:rZ(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ni(e.value))return{unaryFilter:{field:rZ(e.field),op:"IS_NOT_NAN"}};if(nr(e.value))return{unaryFilter:{field:rZ(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rZ(e.field),op:rF[e.op],value:e.value}}}(t):t instanceof nI?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:rL[t.op],filters:n}}}(t):b(54877,{filter:t})}(nI.create(e,"and"))}(t.filters);l&&(a.structuredQuery.where=l);let u=function(e){if(0!==e.length)return e.map(e=>({field:rZ(e.field),direction:rP[e.dir]}))}(t.orderBy);u&&(a.structuredQuery.orderBy=u);let h=(i=t.limit,e.useProto3Json||null==i?i:{value:i});return null!==h&&(a.structuredQuery.limit=h),t.startAt&&(a.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(a.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{dt:a,parent:s}}(e.gt,t.target).dt;let a=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:nF(t.target),readTime:i,resumeToken:a,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function ir(e){let t=rW({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?nH(t,t.limit,"L"):t}function ii(e,t){return new rO(t.largestBatchId,rY(e.gt,t.overlayMutation))}function is(e,t){let n=t.path.lastSegment();return[e,eD(t.path.popLast()),n]}function ia(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:r8(r.readTime),documentKey:eD(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class io{getBundleMetadata(e,t){return tb(e,e8).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:r9(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return tb(e,e8).put({bundleId:t.id,createTime:r8(rB(t.createTime)),version:t.version})}getNamedQuery(e,t){return tb(e,e9).get(t).next(e=>{if(e)return{name:e.name,query:ir(e.bundledQuery),readTime:r9(e.readTime)}})}saveNamedQuery(e,t){return tb(e,e9).put({name:t.name,readTime:r8(rB(t.readTime)),bundledQuery:t.bundledQuery})}}/**
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
 */class il{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){return new il(e,t.uid||"")}getOverlay(e,t){return tb(e,tu).get(is(this.userId,t)).next(e=>e?ii(this.serializer,e):null)}getOverlays(e,t){let n=n3();return ed.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new rO(t,i);r.push(this.wt(e,s))}),ed.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(eD(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(tb(e,tu).X(tc,r))}),ed.waitFor(i)}getOverlaysForCollection(e,t,n){let r=n3(),i=eD(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return tb(e,tu).J(tc,s).next(e=>{for(let t of e){let e=ii(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=n3(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return tb(e,tu).ee({index:tf,range:a},(e,t,n)=>{let a=ii(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}wt(e,t){return tb(e,tu).put(function(e,t,n){let[r,i,s]=is(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:rX(e.gt,n.mutation)}}(this.serializer,this.userId,t))}}/**
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
 */class iu{St(e){return tb(e,tp)}getSessionToken(e){return this.St(e).get("sessionToken").next(e=>{let t=e?.value;return t?tO.fromUint8Array(t):tO.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class ih{constructor(){}bt(e,t){this.Dt(e,t),t.Ct()}Dt(e,t){if("nullValue"in e)this.vt(t,5);else if("booleanValue"in e)this.vt(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.vt(t,15),t.Ft(tL(e.integerValue));else if("doubleValue"in e){let n=tL(e.doubleValue);isNaN(n)?this.vt(t,13):(this.vt(t,15),eA(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.vt(t,20),"string"==typeof n&&(n=tF(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.vt(t,30),t.Nt(tM(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.vt(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?nl(e)?this.vt(t,Number.MAX_SAFE_INTEGER):na(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):b(19022,{Kt:e})}xt(e,t){this.vt(t,25),this.Ut(e,t)}Ut(e,t){t.Mt(e)}kt(e,t){let n=e.fields||{};for(let e of(this.vt(t,55),Object.keys(n)))this.xt(e,t),this.Dt(n[e],t)}Lt(e,t){let n=e.fields||{};this.vt(t,53);let r=n[t0].arrayValue?.values?.length||0;this.vt(t,15),t.Ft(tL(r)),this.xt(t0,t),this.Dt(n[t0],t)}qt(e,t){let n=e.values||[];for(let e of(this.vt(t,50),n))this.Dt(e,t)}Bt(e,t){this.vt(t,37),j.fromName(e).path.forEach(e=>{this.vt(t,60),this.Ut(e,t)})}vt(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}function ic(e){return Math.ceil((64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e))/8)}ih.$t=new ih;class id{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Qt(n.value),n=t.next();this.Gt()}zt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Qt(e);else if(e<2048)this.Qt(960|e>>>6),this.Qt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Qt(480|e>>>12),this.Qt(128|63&e>>>6),this.Qt(128|63&e);else{let e=t.codePointAt(0);this.Qt(240|e>>>18),this.Qt(128|63&e>>>12),this.Qt(128|63&e>>>6),this.Qt(128|63&e)}}this.Gt()}Zt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.jt(e);else if(e<2048)this.jt(960|e>>>6),this.jt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.jt(480|e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e);else{let e=t.codePointAt(0);this.jt(240|e>>>18),this.jt(128|63&e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e)}}this.Jt()}Xt(e){let t=this.Yt(e),n=ic(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}tn(e){let t=this.Yt(e),n=ic(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}nn(){this.rn(255),this.rn(255)}sn(){this._n(255),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Yt(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Qt(e){let t=255&e;0===t?(this.rn(0),this.rn(255)):255===t?(this.rn(255),this.rn(0)):this.rn(t)}jt(e){let t=255&e;0===t?(this._n(0),this._n(255)):255===t?(this._n(255),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class im{constructor(e){this.un=e}Nt(e){this.un.Wt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Xt(e)}Ct(){this.un.nn()}}class ip{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Zt(e)}Ft(e){this.un.tn(e)}Ct(){this.un.sn()}}class ig{constructor(){this.un=new id,this.ascending=new im(this.un),this.descending=new ip(this.un)}seed(e){this.un.seed(e)}cn(e){return 0===e?this.ascending:this.descending}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class iy{constructor(e,t,n,r){this.ln=e,this.hn=t,this.Pn=n,this.Tn=r}In(){let e=this.Tn.length,t=0===e||255===this.Tn[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.Tn,0),t!==e?n.set([0],this.Tn.length):++n[n.length-1],new iy(this.ln,this.hn,this.Pn,n)}En(e,t,n){return{indexId:this.ln,uid:e,arrayValue:iI(this.Pn),directionalValue:iI(this.Tn),orderedDocumentKey:iI(t),documentKey:n.path.toArray()}}Rn(e,t,n){let r=this.En(e,t,n);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function iw(e,t){let n=e.ln-t.ln;return 0!==n?n:0!==(n=iv(e.Pn,t.Pn))?n:0!==(n=iv(e.Tn,t.Tn))?n:j.comparator(e.hn,t.hn)}function iv(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}function iI(e){return(0,l.WO)()?function(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}(e):e}function iE(e){return"string"!=typeof e?e:function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(e)}class ib{constructor(e){for(let t of(this.An=new tD((e,t)=>G.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Vn=e.orderBy,this.dn=[],e.filters))t.isInequality()?this.An=this.An.add(t):this.dn.push(t)}get mn(){return this.An.size>1}fn(e){if(x(e.collectionGroup===this.collectionId,49279),this.mn)return!1;let t=en(e);if(void 0!==t&&!this.gn(t))return!1;let n=er(e),r=new Set,i=0,s=0;for(;i<n.length&&this.gn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.An.size>0){let e=this.An.getIterator().getNext();if(!r.has(e.field.canonicalString())){let t=n[i];if(!this.pn(e,t)||!this.yn(this.Vn[s++],t))return!1}++i}for(;i<n.length;++i){let e=n[i];if(s>=this.Vn.length||!this.yn(this.Vn[s++],e))return!1}return!0}wn(){if(this.mn)return null;let e=new tD(G.comparator),t=[];for(let n of this.dn)if(!n.field.isKeyField()){if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new ei(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ei(n.field,0))}}for(let n of this.Vn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ei(n.field,"asc"===n.dir?0:1)));return new et(et.UNKNOWN_ID,this.collectionId,t,es.empty())}gn(e){for(let t of this.dn)if(this.pn(t,e))return!0;return!1}pn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}yn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function iT(e){return e instanceof nv}function ix(e){return e instanceof nI&&nT(e)}function iS(e){return iT(e)||ix(e)||function(e){if(e instanceof nI&&nb(e)){for(let t of e.getFilters())if(!iT(t)&&!ix(t))return!1;return!0}return!1}(e)}function i_(e,t){return x(e instanceof nv||e instanceof nI,38388),x(t instanceof nv||t instanceof nI,25473),iA(e instanceof nv?t instanceof nv?nI.create([e,t],"and"):iN(e,t):t instanceof nv?iN(t,e):function(e,t){if(x(e.filters.length>0&&t.filters.length>0,48005),nE(e)&&nE(t))return nS(e,t.getFilters());let n=nb(e)?e:t,r=nb(e)?t:e,i=n.filters.map(e=>i_(e,r));return nI.create(i,"or")}(e,t))}function iN(e,t){if(nE(t))return nS(t,e.getFilters());{let n=t.filters.map(t=>i_(e,t));return nI.create(n,"or")}}function iA(e){if(x(e instanceof nv||e instanceof nI,11850),e instanceof nv)return e;let t=e.getFilters();if(1===t.length)return iA(t[0]);if(nx(e))return e;let n=t.map(e=>iA(e)),r=[];return n.forEach(t=>{t instanceof nv?r.push(t):t instanceof nI&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:nI.create(r,e.op)}/**
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
 */class iD{constructor(){this.Sn=new iC}addToCollectionParentIndex(e,t){return this.Sn.add(t),ed.resolve()}getCollectionParents(e,t){return ed.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return ed.resolve()}deleteFieldIndex(e,t){return ed.resolve()}deleteAllFieldIndexes(e){return ed.resolve()}createTargetIndexes(e,t){return ed.resolve()}getDocumentsMatchingTarget(e,t){return ed.resolve(null)}getIndexType(e,t){return ed.resolve(0)}getFieldIndexes(e,t){return ed.resolve([])}getNextCollectionGroupToUpdate(e){return ed.resolve(null)}getMinOffset(e,t){return ed.resolve(eo.min())}getMinOffsetFromCollectionGroup(e,t){return ed.resolve(eo.min())}updateCollectionGroup(e,t,n){return ed.resolve()}updateIndexEntries(e,t){return ed.resolve()}}class iC{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new tD($.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new tD($.comparator)).toArray()}}/**
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
 */let ik="IndexedDbIndexManager",iV=new Uint8Array(0);class iR{constructor(e,t){this.databaseId=t,this.bn=new iC,this.Dn=new n1(e=>nF(e),(e,t)=>nL(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.bn.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.bn.add(t)});let i={collectionId:n,parent:eD(r)};return tb(e,e4).put(i)}return ed.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\0",""],!1,!0);return tb(e,e4).J(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(eC(r.parent))}return n})}addFieldIndex(e,t){let n=tb(e,e7),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=tb(e,tt);return i.next(e=>{n.put(ia(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=tb(e,e7),r=tb(e,tt),i=tb(e,ts);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=tb(e,e7),n=tb(e,ts),r=tb(e,tt);return t.X().next(()=>n.X()).next(()=>r.X())}createTargetIndexes(e,t){return ed.forEach(this.Cn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){let n=new ib(t).wn();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){let n=tb(e,ts),r=!0,i=new Map;return ed.forEach(this.Cn(t),t=>this.vn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=n7(),r=[];return ed.forEach(i,(i,s)=>{w(ik,`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${nF(t)}`);let a=function(e,t){let n=en(t);if(void 0===n)return null;for(let t of nM(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of er(t))for(let t of nM(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of er(t)){let t=0===i.kind?nU(e,i.fieldPath,e.startAt):nB(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new nm(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of er(t)){let t=0===i.kind?nB(e,i.fieldPath,e.endAt):nU(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new nm(n,r)}(s,i),h=this.Fn(i,s,l),c=this.Fn(i,s,u),d=this.Mn(i,s,o),f=this.xn(i.indexId,a,h,l.inclusive,c,u.inclusive,d);return ed.forEach(f,i=>n.Z(i,t.limit).next(t=>{t.forEach(t=>{let n=j.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return ed.resolve(null)})}Cn(e){let t=this.Dn.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(x(t instanceof nv||t instanceof nI,34018),t instanceof nv)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=nI.create(n,t.op);return iS(r=iA(r))?r:(x(r instanceof nI,64498),x(nE(r),40251),x(r.filters.length>1,57927),r.filters.reduce((e,t)=>i_(e,t)))}(/**
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
 */function e(t){if(x(t instanceof nv||t instanceof nI,20012),t instanceof nv){if(t instanceof nk){let e=t.value.arrayValue?.values?.map(e=>nv.create(t.field,"==",e))||[];return nI.create(e,"or")}return t}let n=t.filters.map(t=>e(t));return nI.create(n,t.op)}(e));return x(iS(t),7391),iT(t)||ix(t)?[t]:t.getFilters()})(nI.create(e.filters,"and")).map(t=>nP(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Dn.set(e,t)),t}xn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let h=0;h<o;++h){let o=t?this.On(t[h/l]):iV,c=this.Nn(e,o,n[h%l],r),d=this.Bn(e,o,i[h%l],s),f=a.map(t=>this.Nn(e,o,t,!0));u.push(...this.createRange(c,d,f))}return u}Nn(e,t,n,r){let i=new iy(e,j.empty(),t,n);return r?i:i.In()}Bn(e,t,n,r){let i=new iy(e,j.empty(),t,n);return r?i.In():i}vn(e,t){let n=new ib(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.fn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.Cn(t);return ed.forEach(r,t=>this.vn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new tD(G.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}Ln(e,t){let n=new ig;for(let r of er(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.cn(r.kind);ih.$t.bt(e,i)}return n.an()}On(e){let t=new ig;return ih.$t.bt(e,t.cn(0)),t.an()}kn(e,t){let n=new ig;return ih.$t.bt(t7(this.databaseId,t),n.cn(function(e){let t=er(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.an()}Mn(e,t,n){if(null===n)return[];let r=[];r.push(new ig);let i=0;for(let s of er(e)){let e=n[i++];for(let n of r)if(this.qn(t,s.fieldPath)&&nn(e))r=this.Kn(r,s,e);else{let t=n.cn(s.kind);ih.$t.bt(e,t)}}return this.Un(r)}Fn(e,t,n){return this.Mn(e,t,n.position)}Un(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Kn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new ig;r.seed(n.an()),ih.$t.bt(e,r.cn(t.kind)),i.push(r)}return i}qn(e,t){return!!e.filters.find(e=>e instanceof nv&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=tb(e,e7),r=tb(e,tt);return(t?n.J(te,IDBKeyRange.bound(t,t)):n.J()).next(e=>{let t=[];return ed.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new es(t.sequenceNumber,new eo(r9(t.readTime),new j(eC(t.documentKey)),t.largestBatchId)):es.empty(),r=e.fields.map(([e,t])=>new ei(G.fromServerFormat(e),t));return new et(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:L(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=tb(e,e7),i=tb(e,tt);return this.$n(e).next(e=>r.J(te,IDBKeyRange.bound(t,t)).next(t=>ed.forEach(t,t=>i.put(ia(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){let n=new Map;return ed.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?ed.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),ed.forEach(i,n=>this.Wn(e,t,n).next(t=>{let i=this.Qn(r,n);return t.isEqual(i)?ed.resolve():this.Gn(e,r,n,t,i)}))))})}zn(e,t,n,r){return tb(e,ts).put(r.En(this.uid,this.kn(n,t.key),t.key))}jn(e,t,n,r){return tb(e,ts).delete(r.Rn(this.uid,this.kn(n,t.key),t.key))}Wn(e,t,n){let r=tb(e,ts),i=new tD(iw);return r.ee({index:to,range:IDBKeyRange.only([n.indexId,this.uid,iI(this.kn(n,t))])},(e,r)=>{i=i.add(new iy(n.indexId,t,iE(r.arrayValue),iE(r.directionalValue)))}).next(()=>i)}Qn(e,t){let n=new tD(iw),r=this.Ln(t,e);if(null==r)return n;let i=en(t);if(null!=i){let s=e.data.field(i.fieldPath);if(nn(s))for(let i of s.arrayValue.values||[])n=n.add(new iy(t.indexId,e.key,this.On(i),r))}else n=n.add(new iy(t.indexId,e.key,iV,r));return n}Gn(e,t,n,r,i){w(ik,"Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=tk(s),l=tk(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=tk(a)):t?(i(o),o=tk(s)):(o=tk(s),l=tk(a))}}(r,i,iw,r=>{s.push(this.zn(e,t,n,r))},r=>{s.push(this.jn(e,t,n,r))}),ed.waitFor(s)}$n(e){let t=1;return tb(e,tt).ee({index:tr,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>iw(e,t)).filter((e,t,n)=>!t||0!==iw(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=iw(i,e),s=iw(i,t);if(0===n)r[0]=e.In();else if(n>0&&s<0)r.push(i),r.push(i.In());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.Jn(r[e],r[e+1]))return[];let t=r[e].Rn(this.uid,iV,j.empty()),n=r[e+1].Rn(this.uid,iV,j.empty());i.push(IDBKeyRange.bound(t,n))}return i}Jn(e,t){return iw(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(iO)}getMinOffset(e,t){return ed.mapArray(this.Cn(t),t=>this.vn(e,t).next(e=>e||b(44426))).next(iO)}}function iO(e){x(0!==e.length,28825);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>el(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new eo(t.readTime,t.documentKey,n)}/**
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
 */let iP={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class iF{static withCacheSize(e){return new iF(e,iF.DEFAULT_COLLECTION_PERCENTILE,iF.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function iL(e,t,n){let r=e.store(eP),i=e.store(eB),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.ee({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{x(1===o,47070,{batchId:n.batchId})}));let u=[];for(let e of n.mutations){var h,c;let r=(h=e.key.path,c=n.batchId,[t,eD(h),c]);s.push(i.delete(r)),u.push(e.key)}return ed.waitFor(s).next(()=>u)}function iM(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw b(14731);t=e.noDocument}return JSON.stringify(t).length}/**
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
 */iF.DEFAULT_COLLECTION_PERCENTILE=10,iF.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,iF.DEFAULT=new iF(41943040,iF.DEFAULT_COLLECTION_PERCENTILE,iF.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),iF.DISABLED=new iF(-1,0,0);class iU{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Hn={}}static yt(e,t,n,r){return x(""!==e.uid,64387),new iU(e.isAuthenticated()?e.uid:"",t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return iq(e).ee({index:eL,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=tb(e,eB),s=iq(e);return s.add({}).next(a=>{x("number"==typeof a,49019);let o=new rV(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>rX(e.gt,t)),i=n.mutations.map(t=>rX(e.gt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],h=new tD((e,t)=>L(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,eD(e.key.path),a];h=h.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,eU))}return h.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Hn[a]=o.keys()}),ed.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return iq(e).get(t).next(e=>e?(x(e.userId===this.userId,48,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),r7(this.serializer,e)):null)}Zn(e,t){return this.Hn[t]?ed.resolve(this.Hn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.Hn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return iq(e).ee({index:eL,range:r},(e,t,r)=>{t.userId===this.userId&&(x(t.batchId>=n,47524,{Xn:n}),i=r7(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return iq(e).ee({index:eL,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return iq(e).J(eL,t).next(e=>e.map(e=>r7(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,eD(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return tb(e,eB).ee({range:r},(n,r,s)=>{let[a,o,l]=n,u=eC(o);if(a===this.userId&&t.path.isEqual(u))return iq(e).get(l).next(e=>{if(!e)throw b(61480,{Yn:n,batchId:l});x(e.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:e.userId,batchId:l}),i.push(r7(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new tD(L),r=[];return t.forEach(t=>{let i=[this.userId,eD(t.path)],s=IDBKeyRange.lowerBound(i),a=tb(e,eB).ee({range:s},(e,r,i)=>{let[s,a,o]=e,l=eC(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),ed.waitFor(r).next(()=>this.er(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,eD(n)],s=IDBKeyRange.lowerBound(i),a=new tD(L);return tb(e,eB).ee({range:s},(e,t,i)=>{let[s,o,l]=e,u=eC(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.er(e,a))}er(e,t){let n=[],r=[];return t.forEach(t=>{r.push(iq(e).get(t).next(e=>{if(null===e)throw b(35274,{batchId:t});x(e.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),n.push(r7(this.serializer,e))}))}),ed.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return iL(e.le,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.tr(t.batchId)}),ed.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}tr(e){delete this.Hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return ed.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return tb(e,eB).ee({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=eC(e[1]);r.push(t)}else n.done()}).next(()=>{x(0===r.length,56720,{nr:r.map(e=>e.canonicalString())})})})}containsKey(e,t){return iB(e,this.userId,t)}rr(e){return tb(e,eO).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function iB(e,t,n){let r=[t,eD(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return tb(e,eB).ee({range:s,Y:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function iq(e){return tb(e,eP)}/**
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
 */class iz{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new iz(0)}static _r(){return new iz(-1)}}/**
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
 */class i${constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ar(e).next(t=>{let n=new iz(t.highestTargetId);return t.highestTargetId=n.next(),this.ur(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ar(e).next(e=>ee.fromTimestamp(new Z(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ar(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.ar(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.ur(e,r)))}addTargetData(e,t){return this.cr(e,t).next(()=>this.ar(e).next(n=>(n.targetCount+=1,this.lr(t,n),this.ur(e,n))))}updateTargetData(e,t){return this.cr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>tb(e,eJ).delete(t.targetId)).next(()=>this.ar(e)).next(t=>(x(t.targetCount>0,8065),t.targetCount-=1,this.ur(e,t)))}removeTargets(e,t,n){let r=0,i=[];return tb(e,eJ).ee((s,a)=>{let o=ie(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>ed.waitFor(i)).next(()=>r)}forEachTarget(e,t){return tb(e,eJ).ee((e,n)=>{t(ie(n))})}ar(e){return tb(e,e5).get(e2).next(e=>(x(null!==e,2888),e))}ur(e,t){return tb(e,e5).put(e2,t)}cr(e,t){return tb(e,eJ).put(it(this.serializer,t))}lr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.ar(e).next(e=>e.targetCount)}getTargetData(e,t){let n=nF(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return tb(e,eJ).ee({range:r,index:eX},(e,n,r)=>{let s=ie(n);nL(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=iK(e);return t.forEach(t=>{let s=eD(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),ed.waitFor(r)}removeMatchingKeys(e,t,n){let r=iK(e);return ed.forEach(t,t=>{let i=eD(t.path);return ed.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=iK(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=iK(e),i=n7();return r.ee({range:n,Y:!0},(e,t,n)=>{let r=new j(eC(e[1]));i=i.add(r)}).next(()=>i)}containsKey(e,t){let n=eD(t.path),r=IDBKeyRange.bound([n],[n+"\0"],!1,!0),i=0;return iK(e).ee({index:e0,Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Rt(e,t){return tb(e,eJ).get(t).next(e=>e?ie(e):null)}}function iK(e){return tb(e,eW)}/**
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
 */let iG="LruGarbageCollector";function ij([e,t],[n,r]){let i=L(e,n);return 0===i?L(t,r):i}class iQ{constructor(e){this.hr=e,this.buffer=new tD(ij),this.Pr=0}Tr(){return++this.Pr}Ir(e){let t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>ij(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iH{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Er=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return null!==this.Er}Rr(e){w(iG,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ev(e)?w(iG,"Ignoring IndexedDB error during garbage collection: ",e):await ec(e)}await this.Rr(3e5)})}}class iJ{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ed.resolve(eN.ce);let n=new iQ(t);return this.Ar.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Ar.dr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Ar.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector","Garbage collection skipped; disabled"),ed.resolve(iP)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iP):this.mr(e,t))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let n,r,i,s,a,o,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),y()<=h.in.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),ed.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */class iX{constructor(e,t){this.db=e,this.garbageCollector=new iJ(this,t)}Vr(e){let t=this.gr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}gr(e){let t=0;return this.dr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}dr(e,t){return this.pr(e,(e,n)=>t(n))}addReference(e,t,n){return iY(e,n)}removeReference(e,t,n){return iY(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return iY(e,t)}yr(e,t){let n;return n=!1,tb(e,eO).te(r=>iB(e,r,t).next(e=>(e&&(n=!0),ed.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.pr(e,(s,a)=>{if(a<=t){let t=this.yr(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,ee.min()),iK(e).delete([0,eD(s.path)])))});r.push(t)}}).next(()=>ed.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return iY(e,t)}pr(e,t){let n=iK(e),r,i=eN.ce;return n.ee({index:e0},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==eN.ce&&t(new j(eC(r)),i),i=a,r=s):i=eN.ce}).next(()=>{i!==eN.ce&&t(new j(eC(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function iY(e,t){var n;return iK(e).put((n=e.currentSequenceNumber,{targetId:0,path:eD(t.path),sequenceNumber:n}))}/**
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
 */class iW{constructor(){this.changes=new n1(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nf.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?ed.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iZ{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return tb(e,eq).put(n)}removeEntry(e,t,n){return tb(e,eq).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],r3(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.wr(e,n)))}getEntry(e,t){let n=nf.newInvalidDocument(t);return tb(e,eq).ee({index:e$,range:IDBKeyRange.only(i1(t))},(e,r)=>{n=this.Sr(t,r)}).next(()=>n)}br(e,t){let n={size:0,document:nf.newInvalidDocument(t)};return tb(e,eq).ee({index:e$,range:IDBKeyRange.only(i1(t))},(e,r)=>{n={document:this.Sr(t,r),size:iM(r)}}).next(()=>n)}getEntries(e,t){let n=n2;return this.Dr(e,t,(e,t)=>{let r=this.Sr(e,t);n=n.insert(e,r)}).next(()=>n)}Cr(e,t){let n=n2,r=new t_(j.comparator);return this.Dr(e,t,(e,t)=>{let i=this.Sr(e,t);n=n.insert(e,i),r=r.insert(e,iM(t))}).next(()=>({documents:n,vr:r}))}Dr(e,t,n){if(t.isEmpty())return ed.resolve();let r=new tD(i5);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(i1(r.first()),i1(r.last())),s=r.getIterator(),a=s.getNext();return tb(e,eq).ee({index:e$,range:i},(e,t,r)=>{let i=j.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>i5(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.j(i1(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){let s=t.path,a=[s.popLast().toArray(),s.lastSegment(),r3(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return tb(e,eq).J(IDBKeyRange.bound(a,o,!0)).next(e=>{i?.incrementDocumentReadCount(e.length);let n=n2;for(let i of e){let e=this.Sr(j.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(n0(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=n2,s=i2(t,n),a=i2(t,eo.max());return tb(e,eq).ee({index:eG,range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.Sr(j.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new i0(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return tb(e,eQ).get(eH).next(e=>(x(!!e,20021),e))}wr(e,t){return tb(e,eQ).put(eH,t)}Sr(e,t){if(t){let e=function(e,t){let n;if(t.document)n=function(e,t,n){let r=rG(e,t.name),i=rB(t.updateTime),s=t.createTime?rB(t.createTime):ee.min(),a=new nd({mapValue:{fields:t.fields}}),o=nf.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}(e.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=j.fromSegments(t.noDocument.path),r=r9(t.noDocument.readTime);n=nf.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b(56709);{let e=j.fromSegments(t.unknownDocument.path),r=r9(t.unknownDocument.version);n=nf.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new Z(e[0],e[1]);return ee.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(ee.min())))return e}return nf.newInvalidDocument(e)}}class i0 extends iW{constructor(e,t){super(),this.Fr=e,this.trackRemovals=t,this.Mr=new n1(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new tD((e,t)=>L(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.Mr.get(i);if(t.push(this.Fr.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=r6(this.Fr.serializer,s);r=r.add(i.path.popLast());let l=iM(o);n+=l-a.size,t.push(this.Fr.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=r6(this.Fr.serializer,s.convertToNoDocument(ee.min()));t.push(this.Fr.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Fr.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Fr.updateMetadata(e,n)),ed.waitFor(t)}getFromCache(e,t){return this.Fr.br(e,t).next(e=>(this.Mr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Fr.Cr(e,t).next(({documents:e,vr:t})=>(t.forEach((t,n)=>{this.Mr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function i1(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function i2(e,t){let n=t.documentKey.path.toArray();return[e,r3(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function i5(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=L(n[e],r[e]))return i;return(i=L(n.length,r.length))||(i=L(n[n.length-2],r[r.length-2]))||L(n[n.length-1],r[r.length-1])}/**
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
 */class i4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class i6{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&rT(n.mutation,e,tV.empty(),Z.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,n7()).next(()=>t))}getLocalViewOfDocuments(e,t,n=n7()){let r=n3();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=n4();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=n3();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,n7()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=n2,s=n3(),a=n3();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof r_)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),rT(a.mutation,t,a.mutation.getFieldMask(),Z.now())):s.set(t.key,tV.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>a.set(e,new i4(t,s.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){let n=n3(),r=new t_((e,t)=>e-t),i=n7();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||tV.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||n7()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=n3();l.forEach(e=>{if(!i.has(e)){let r=rb(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return ed.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return j.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):n$(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ed.resolve(n3()),a=-1,o=i;return s.next(t=>ed.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?ed.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,n7())).next(e=>({batchId:a,changes:n6(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(e=>{let t=n4();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=n4();return this.indexManager.getCollectionParents(e,i).next(a=>ed.forEach(a,a=>{let o=new nq(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,nf.newInvalidDocument(r)))});let n=n4();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&rT(s.mutation,r,tV.empty(),Z.now()),n0(t,r)&&(n=n.insert(e,r))}),n})}}/**
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
 */class i3{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return ed.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,{id:t.id,version:t.version,createTime:rB(t.createTime)}),ed.resolve()}getNamedQuery(e,t){return ed.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,{name:t.name,query:ir(t.bundledQuery),readTime:rB(t.readTime)}),ed.resolve()}}/**
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
 */class i8{constructor(){this.overlays=new t_(j.comparator),this.Br=new Map}getOverlay(e,t){return ed.resolve(this.overlays.get(t))}getOverlays(e,t){let n=n3();return ed.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.wt(e,t,r)}),ed.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Br.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Br.delete(n)),ed.resolve()}getOverlaysForCollection(e,t,n){let r=n3(),i=t.length+1,s=new j(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ed.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new t_((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=n3(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=n3(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return ed.resolve(a)}wt(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Br.get(r.largestBatchId).delete(n.key);this.Br.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new rO(t,n));let i=this.Br.get(t);void 0===i&&(i=n7(),this.Br.set(t,i)),this.Br.set(t,i.add(n.key))}}/**
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
 */class i9{constructor(){this.sessionToken=tO.EMPTY_BYTE_STRING}getSessionToken(e){return ed.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ed.resolve()}}/**
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
 */class i7{constructor(){this.Lr=new tD(se.kr),this.qr=new tD(se.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){let n=new se(e,t);this.Lr=this.Lr.add(n),this.qr=this.qr.add(n)}Ur(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.$r(new se(e,t))}Wr(e,t){e.forEach(e=>this.removeReference(e,t))}Qr(e){let t=new j(new $([])),n=new se(t,e),r=new se(t,e+1),i=[];return this.qr.forEachInRange([n,r],e=>{this.$r(e),i.push(e.key)}),i}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){let t=new j(new $([])),n=new se(t,e),r=new se(t,e+1),i=n7();return this.qr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new se(e,0),n=this.Lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class se{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return j.comparator(e.key,t.key)||L(e.jr,t.jr)}static Kr(e,t){return L(e.jr,t.jr)||j.comparator(e.key,t.key)}}/**
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
 */class st{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new tD(se.kr)}checkEmpty(e){return ed.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new rV(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Jr=this.Jr.add(new se(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ed.resolve(s)}lookupMutationBatch(e,t){return ed.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Zr(t+1),r=n<0?0:n;return ed.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ed.resolve(0===this.mutationQueue.length?-1:this.Xn-1)}getAllMutationBatches(e){return ed.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new se(t,0),r=new se(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([n,r],e=>{let t=this.Hr(e.jr);i.push(t)}),ed.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new tD(L);return t.forEach(e=>{let t=new se(e,0),r=new se(e,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([t,r],e=>{n=n.add(e.jr)})}),ed.resolve(this.Xr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;j.isDocumentKey(i)||(i=i.child(""));let s=new se(new j(i),0),a=new tD(L);return this.Jr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.jr)),!0)},s),ed.resolve(this.Xr(a))}Xr(e){let t=[];return e.forEach(e=>{let n=this.Hr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){x(0===this.Yr(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Jr;return ed.forEach(t.mutations,r=>{let i=new se(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=n})}tr(e){}containsKey(e,t){let n=new se(t,0),r=this.Jr.firstAfterOrEqual(n);return ed.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ed.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Hr(e){let t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class sn{constructor(e){this.ei=e,this.docs=new t_(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ei(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return ed.resolve(n?n.document.mutableCopy():nf.newInvalidDocument(t))}getEntries(e,t){let n=n2;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():nf.newInvalidDocument(e))}),ed.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=n2,s=t.path,a=new j(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=el(ea(a),n)||(r.has(a.key)||n0(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return ed.resolve(i)}getAllFromCollectionGroup(e,t,n,r){b(9500)}ti(e,t){return ed.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sr(this)}getSize(e){return ed.resolve(this.size)}}class sr extends iW{constructor(e){super(),this.Fr=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Fr.addEntry(e,r)):this.Fr.removeEntry(n)}),ed.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
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
 */class si{constructor(e){this.persistence=e,this.ni=new n1(e=>nF(e),nL),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ri=0,this.ii=new i7,this.targetCount=0,this.si=iz.sr()}forEachTarget(e,t){return this.ni.forEach((e,n)=>t(n)),ed.resolve()}getLastRemoteSnapshotVersion(e){return ed.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ed.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),ed.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ri&&(this.ri=t),ed.resolve()}cr(e){this.ni.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.si=new iz(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,ed.resolve()}updateTargetData(e,t){return this.cr(t),ed.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,ed.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.ni.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.ni.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),ed.waitFor(i).next(()=>r)}getTargetCount(e){return ed.resolve(this.targetCount)}getTargetData(e,t){let n=this.ni.get(t)||null;return ed.resolve(n)}addMatchingKeys(e,t,n){return this.ii.Ur(t,n),ed.resolve()}removeMatchingKeys(e,t,n){this.ii.Wr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),ed.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),ed.resolve()}getMatchingKeysForTargetId(e,t){let n=this.ii.zr(t);return ed.resolve(n)}containsKey(e,t){return ed.resolve(this.ii.containsKey(t))}}/**
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
 */class ss{constructor(e,t){this.oi={},this.overlays={},this._i=new eN(0),this.ai=!1,this.ai=!0,this.ui=new i9,this.referenceDelegate=e(this),this.ci=new si(this),this.indexManager=new iD,this.remoteDocumentCache=new sn(e=>this.referenceDelegate.li(e)),this.serializer=new r4(t),this.hi=new i3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new i8,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.oi[e.toKey()];return n||(n=new st(t,this.referenceDelegate),this.oi[e.toKey()]=n),n}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,n){w("MemoryPersistence","Starting transaction:",e);let r=new sa(this._i.next());return this.referenceDelegate.Pi(),n(r).next(e=>this.referenceDelegate.Ti(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return ed.or(Object.values(this.oi).map(n=>()=>n.containsKey(e,t)))}}class sa extends eh{constructor(e){super(),this.currentSequenceNumber=e}}class so{constructor(e){this.persistence=e,this.Ei=new i7,this.Ri=null}static Ai(e){return new so(e)}get Vi(){if(this.Ri)return this.Ri;throw b(60996)}addReference(e,t,n){return this.Ei.addReference(n,t),this.Vi.delete(n.toString()),ed.resolve()}removeReference(e,t,n){return this.Ei.removeReference(n,t),this.Vi.add(n.toString()),ed.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),ed.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach(e=>this.Vi.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Vi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Pi(){this.Ri=new Set}Ti(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ed.forEach(this.Vi,n=>{let r=j.fromPath(n);return this.di(e,r).next(e=>{e||t.removeEntry(r,ee.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.di(e,t).next(e=>{e?this.Vi.delete(t.toString()):this.Vi.add(t.toString())})}li(e){return 0}di(e,t){return ed.or([()=>ed.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class sl{constructor(e,t){this.persistence=e,this.mi=new n1(e=>eD(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new iJ(this,t)}static Ai(e,t){return new sl(e,t)}Pi(){}Ti(e){return ed.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){let t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}gr(e){let t=0;return this.dr(e,e=>{t++}).next(()=>t)}dr(e,t){return ed.forEach(this.mi,(n,r)=>this.yr(e,n,r).next(e=>e?ed.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ti(e,r=>this.yr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,ee.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),ed.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),ed.resolve()}removeReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),ed.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),ed.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(t2(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=tK(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return tM(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,tx(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw b(13486,{value:t})}}(e.data.value)),t}yr(e,t,n){return ed.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.mi.get(t);return ed.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class su{constructor(e){this.serializer=e}k(e,t,n,r){let i=new em("createOrUpgrade",t);n<1&&r>=1&&(!function(e){e.createObjectStore(eV)}(e),e.createObjectStore(eO,{keyPath:"userId"}),e.createObjectStore(eP,{keyPath:eF,autoIncrement:!0}).createIndex(eL,eM,{unique:!0}),e.createObjectStore(eB),sh(e),function(e){e.createObjectStore(ek)}(e));let s=ed.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore(eW),e.deleteObjectStore(eJ),e.deleteObjectStore(e5),sh(e)),s=s.next(()=>(function(e){let t=e.store(e5),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return t.put(e2,n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store(eP).J().next(t=>{e.deleteObjectStore(eP),e.createObjectStore(eP,{keyPath:eF,autoIncrement:!0}).createIndex(eL,eM,{unique:!0});let n=i.store(eP),r=t.map(e=>n.put(e));return ed.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore(e3,{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.fi(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore(eQ)})(e),this.gi(i)))),n<7&&r>=7&&(s=s.next(()=>this.pi(i))),n<8&&r>=8&&(s=s.next(()=>this.yi(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.wi(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore(e8,{keyPath:"bundleId"})})(e),function(e){e.createObjectStore(e9,{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore(tu,{keyPath:th});t.createIndex(tc,td,{unique:!1}),t.createIndex(tf,tm,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore(eq,{keyPath:ez});t.createIndex(e$,eK),t.createIndex(eG,ej)})(e)).next(()=>this.Si(e,i)).next(()=>e.deleteObjectStore(ek))),n<14&&r>=14&&(s=s.next(()=>this.bi(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore(e7,{keyPath:"indexId",autoIncrement:!0}).createIndex(te,"collectionGroup",{unique:!1}),e.createObjectStore(tt,{keyPath:tn}).createIndex(tr,ti,{unique:!1}),e.createObjectStore(ts,{keyPath:ta}).createIndex(to,tl,{unique:!1})})),n<16&&r>=16&&(s=s.next(()=>{t.objectStore(tt).clear()}).next(()=>{t.objectStore(ts).clear()})),n<17&&r>=17&&(s=s.next(()=>{!function(e){e.createObjectStore(tp,{keyPath:"name"})}(e)})),n<18&&r>=18&&(0,l.WO)()&&(s=s.next(()=>{t.objectStore(tt).clear()}).next(()=>{t.objectStore(ts).clear()})),s}gi(e){let t=0;return e.store(ek).ee((e,n)=>{t+=iM(n)}).next(()=>{let n={byteSize:t};return e.store(eQ).put(eH,n)})}fi(e){let t=e.store(eO),n=e.store(eP);return t.J().next(t=>ed.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.J(eL,r).next(n=>ed.forEach(n,n=>{x(n.userId===t.userId,18650,"Cannot process batch from unexpected user",{batchId:n.batchId});let r=r7(this.serializer,n);return iL(e,t.userId,r).next(()=>{})}))}))}pi(e){let t=e.store(eW),n=e.store(ek);return e.store(e5).get(e2).next(e=>{let r=[];return n.ee((n,i)=>{let s=new $(n),a=[0,eD(s)];r.push(t.get(a).next(n=>n?ed.resolve():t.put({targetId:0,path:eD(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>ed.waitFor(r))})}yi(e,t){e.createObjectStore(e4,{keyPath:e6});let n=t.store(e4),r=new iC,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:eD(r)})}};return t.store(ek).ee({Y:!0},(e,t)=>i(new $(e).popLast())).next(()=>t.store(eB).ee({Y:!0},([e,t,n],r)=>i(eC(t).popLast())))}wi(e){let t=e.store(eJ);return t.ee((e,n)=>{let r=ie(n),i=it(this.serializer,r);return t.put(i)})}Si(e,t){let n=t.store(ek),r=[];return n.ee((e,n)=>{let i=t.store(eq),s=(n.document?new j($.fromString(n.document.name).popFirst(5)):n.noDocument?j.fromSegments(n.noDocument.path):n.unknownDocument?j.fromSegments(n.unknownDocument.path):b(36783)).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>ed.waitFor(r))}bi(e,t){let n=t.store(eP),r=new iZ(this.serializer),i=new ss(so.Ai,this.serializer.gt);return n.J().next(e=>{let n=new Map;return e.forEach(e=>{let t=n.get(e.userId)??n7();r7(this.serializer,e).keys().forEach(e=>t=t.add(e)),n.set(e.userId,t)}),ed.forEach(n,(e,n)=>{let s=new f(n),a=il.yt(this.serializer,s),o=i.getIndexManager(s);return new i6(r,iU.yt(s,this.serializer,o,i.referenceDelegate),a,o).recalculateAndSaveOverlaysForDocumentKeys(new tE(t,eN.ce),e).next()})})}}function sh(e){e.createObjectStore(eW,{keyPath:eZ}).createIndex(e0,e1,{unique:!0}),e.createObjectStore(eJ,{keyPath:"targetId"}).createIndex(eX,eY,{unique:!0}),e.createObjectStore(e5)}let sc="IndexedDbPersistence",sd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sf{constructor(e,t,n,r,i,s,a,o,l,u,h=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Di=i,this.window=s,this.document=a,this.Ci=l,this.Fi=u,this.Mi=h,this._i=null,this.ai=!1,this.isPrimary=!1,this.networkEnabled=!0,this.xi=null,this.inForeground=!1,this.Oi=null,this.Ni=null,this.Bi=Number.NEGATIVE_INFINITY,this.Li=e=>Promise.resolve(),!sf.v())throw new _(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iX(this,r),this.ki=t+"main",this.serializer=new r4(o),this.qi=new ep(this.ki,this.Mi,new su(this.serializer)),this.ui=new iu,this.ci=new i$(this.referenceDelegate,this.serializer),this.remoteDocumentCache=new iZ(this.serializer),this.hi=new io,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,!1===u&&v(sc,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new _(S.FAILED_PRECONDITION,sd);return this.$i(),this.Wi(),this.Qi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ci.getHighestSequenceNumber(e))}).then(e=>{this._i=new eN(e,this.Ci)}).then(()=>{this.ai=!0}).catch(e=>(this.qi&&this.qi.close(),Promise.reject(e)))}Gi(e){return this.Li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.K(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Di.enqueueAndForget(async()=>{this.started&&await this.Ui()}))}Ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>tb(e,e3).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.zi(e).next(e=>{e||(this.isPrimary=!1,this.Di.enqueueRetryable(()=>this.Li(!1)))})}).next(()=>this.ji(e)).next(t=>this.isPrimary&&!t?this.Ji(e).next(()=>!1):!!t&&this.Hi(e).next(()=>!0))).catch(e=>{if(ev(e))return w(sc,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return w(sc,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Di.enqueueRetryable(()=>this.Li(e)),this.isPrimary=e})}zi(e){return tb(e,eV).get(eR).next(e=>ed.resolve(this.Zi(e)))}Xi(e){return tb(e,e3).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.es(this.Bi,18e5)){this.Bi=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=tb(e,e3);return t.J().next(e=>{let n=this.ts(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return ed.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ki)for(let t of e)this.Ki.removeItem(this.ns(t.clientId))}}Qi(){this.Ni=this.Di.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ui().then(()=>this.Yi()).then(()=>this.Qi()))}Zi(e){return!!e&&e.ownerId===this.clientId}ji(e){return this.Fi?ed.resolve(!0):tb(e,eV).get(eR).next(t=>{if(null!==t&&this.es(t.leaseTimestampMs,5e3)&&!this.rs(t.ownerId)){if(this.Zi(t)&&this.networkEnabled)return!0;if(!this.Zi(t)){if(!t.allowTabSynchronization)throw new _(S.FAILED_PRECONDITION,sd);return!1}}return!(!this.networkEnabled||!this.inForeground)||tb(e,e3).J().next(e=>void 0===this.ts(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&w(sc,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ai=!1,this.ss(),this.Ni&&(this.Ni.cancel(),this.Ni=null),this._s(),this.us(),await this.qi.runTransaction("shutdown","readwrite",[eV,e3],e=>{let t=new tE(e,eN.ce);return this.Ji(t).next(()=>this.Xi(t))}),this.qi.close(),this.cs()}ts(e,t){return e.filter(e=>this.es(e.updateTimeMs,t)&&!this.rs(e.clientId))}ls(){return this.runTransaction("getActiveClients","readonly",e=>tb(e,e3).J().next(e=>this.ts(e,18e5).map(e=>e.clientId)))}get started(){return this.ai}getGlobalsCache(){return this.ui}getMutationQueue(e,t){return iU.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new iR(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return il.yt(this.serializer,e)}getBundleCache(){return this.hi}runTransaction(e,t,n){var r;let i;w(sc,"Starting transaction:",e);let s=18===(r=this.Mi)?tI:17===r?tI:16===r?tv:15===r?tv:14===r?tw:13===r?tw:12===r?ty:11===r?tg:void b(60245);return this.qi.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new tE(r,this._i?this._i.next():eN.ce),"readwrite-primary"===t?this.zi(i).next(e=>!!e||this.ji(i)).next(t=>{if(!t)throw v(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Di.enqueueRetryable(()=>this.Li(!1)),new _(S.FAILED_PRECONDITION,eu);return n(i)}).next(e=>this.Hi(i).next(()=>e)):this.hs(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}hs(e){return tb(e,eV).get(eR).next(e=>{if(null!==e&&this.es(e.leaseTimestampMs,5e3)&&!this.rs(e.ownerId)&&!this.Zi(e)&&!(this.Fi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new _(S.FAILED_PRECONDITION,sd)})}Hi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return tb(e,eV).put(eR,t)}static v(){return ep.v()}Ji(e){let t=tb(e,eV);return t.get(eR).next(e=>this.Zi(e)?(w(sc,"Releasing primary lease."),t.delete(eR)):ed.resolve())}es(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(v(`Detected an update time that is in the future: ${e} > ${n}`),!1))}$i(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Oi=()=>{this.Di.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ui()))},this.document.addEventListener("visibilitychange",this.Oi),this.inForeground="visible"===this.document.visibilityState)}_s(){this.Oi&&(this.document.removeEventListener("visibilitychange",this.Oi),this.Oi=null)}Wi(){"function"==typeof this.window?.addEventListener&&(this.xi=()=>{this.ss();let e=/(?:Version|Mobile)\/1[456]/;(0,l.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Di.enterRestrictedMode(!0),this.Di.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.xi))}us(){this.xi&&(this.window.removeEventListener("pagehide",this.xi),this.xi=null)}rs(e){try{let t=null!==this.Ki?.getItem(this.ns(e));return w(sc,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(e){return v(sc,"Failed to get zombied client id.",e),!1}}ss(){if(this.Ki)try{this.Ki.setItem(this.ns(this.clientId),String(Date.now()))}catch(e){v("Failed to set zombie client id.",e)}}cs(){if(this.Ki)try{this.Ki.removeItem(this.ns(this.clientId))}catch(e){}}ns(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}/**
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
 */class sm{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ps=n,this.Ts=r}static Is(e,t){let n=n7(),r=n7();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new sm(e,t.fromCache,n,r)}}/**
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
 */class sp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sg{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=(0,l.G6)()?8:eg((0,l.z$)())>0?6:4}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.fs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.gs(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new sp;return this.ps(e,t,n).next(r=>{if(i.result=r,this.Rs)return this.ys(e,t,n,r.size)})}).next(()=>i.result)}ys(e,t,n,r){return n.documentReadCount<this.As?(y()<=h.in.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",nZ(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),ed.resolve()):(y()<=h.in.DEBUG&&w("QueryEngine","Query:",nZ(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Vs*r?(y()<=h.in.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",nZ(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nG(t))):ed.resolve())}fs(e,t){if(nz(t))return ed.resolve(null);let n=nG(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=nG(t=nH(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=n7(...r);return this.ds.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.ws(t,r);return this.Ss(t,s,i,n.readTime)?this.fs(e,nH(t,null,"F")):this.bs(e,s,t,n)}))})))}gs(e,t,n,r){return nz(t)||r.isEqual(ee.min())?ed.resolve(null):this.ds.getDocuments(e,n).next(i=>{let s=this.ws(t,i);return this.Ss(t,s,n,r)?ed.resolve(null):(y()<=h.in.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),nZ(t)),this.bs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new eo(ee.fromTimestamp(1e9===r?new Z(n+1,0):new Z(n,r)),j.empty(),-1)}(r,0)).next(e=>e))})}ws(e,t){let n=new tD((t,n)=>{let r=!1;for(let i of nK(e)){let e=function(e,t,n){let r=e.field.isKeyField()?j.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?t6(r,i):b(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return b(19790,{direction:e.dir})}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0});return t.forEach((t,r)=>{n0(e,r)&&(n=n.add(r))}),n}Ss(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ps(e,t,n){return y()<=h.in.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",nZ(t)),this.ds.getDocumentsMatchingQuery(e,t,eo.min(),n)}bs(e,t,n,r){return this.ds.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}class sy{constructor(e,t,n,r){this.persistence=e,this.Ds=t,this.serializer=r,this.Cs=new t_(L),this.vs=new n1(e=>nF(e),nL),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(n)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i6(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Cs))}}async function sw(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.xs(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=n7();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Os:e,removedBatchIds:i,addedBatchIds:s}))})})}class sv{constructor(){this.activeTargetIds=re}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sI{constructor(){this.Co=new sv,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,n){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new sv,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sE{Fo(e){}shutdown(){}}/**
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
 */let sb="ConnectivityMonitor";class sT{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){for(let e of(w(sb,"Network connectivity changed: AVAILABLE"),this.Bo))e(0)}No(){for(let e of(w(sb,"Network connectivity changed: UNAVAILABLE"),this.Bo))e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let sx=null;function sS(){return null===sx?sx=268435456+Math.round(2147483648*Math.random()):sx++,"0x"+sx.toString(16)}/**
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
 */let s_="RestConnection",sN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class sA{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Uo=this.databaseId.database===tQ?`project_id=${n}`:`project_id=${n}&database_id=${r}`}$o(e,t,n,r,i){let s=sS(),a=this.Wo(e,t.toUriEncodedString());w(s_,`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(o,r,i);let{host:u}=new URL(a),h=(0,l.Xx)(u);return this.Go(e,a,o,n,h).then(t=>(w(s_,`Received RPC '${e}' ${s}: `,t),t),t=>{throw I(s_,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}zo(e,t,n,r,i,s){return this.$o(e,t,n,r,i)}Qo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+m,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Wo(e,t){let n=sN[e],r=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class sD{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
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
 */let sC="WebChannelConnection",sk=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class sV extends sA{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){sV.u_||(sk((0,c.FJ)(),c.ju.STAT_EVENT,e=>{e.stat===c.kN.PROXY?w(sC,"STAT_EVENT: detected buffering proxy"):e.stat===c.kN.NOPROXY&&w(sC,"STAT_EVENT: detected no buffering proxy")}),sV.u_=!0)}Go(e,t,n,r,i){let s=sS();return new Promise((i,a)=>{let o=new c.JJ;o.setWithCredentials(!0),o.listenOnce(c.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case c.jK.NO_ERROR:let t=o.getResponseJson();w(sC,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case c.jK.TIMEOUT:w(sC,`RPC '${e}' ${s} timed out`),a(new _(S.DEADLINE_EXCEEDED,"Request time out"));break;case c.jK.HTTP_ERROR:let n=o.getStatus();if(w(sC,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=e?.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(t)>=0?t:S.UNKNOWN}(t.status);a(new _(e,t.message))}else a(new _(S.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new _(S.UNAVAILABLE,"Connection failed."));break;default:b(9055,{c_:e,streamId:s,l_:o.getLastErrorCode(),h_:o.getLastError()})}}finally{w(sC,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(r);w(sC,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}P_(e,t,n){let i=sS(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Qo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let u=s.join("");w(sC,`Creating RPC '${e}' stream ${i}: ${u}`,o);let h=a.createWebChannel(u,o);this.T_(h);let d=!1,f=!1,m=new sD({jo:t=>{f?w(sC,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(w(sC,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),w(sC,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},Jo:()=>h.close()});return sk(h,c.ii.EventType.OPEN,()=>{f||(w(sC,`RPC '${e}' stream ${i} transport opened.`),m.r_())}),sk(h,c.ii.EventType.CLOSE,()=>{f||(f=!0,w(sC,`RPC '${e}' stream ${i} transport closed`),m.s_(),this.I_(h))}),sk(h,c.ii.EventType.ERROR,t=>{f||(f=!0,I(sC,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),m.s_(new _(S.UNAVAILABLE,"The operation could not be completed")))}),sk(h,c.ii.EventType.MESSAGE,t=>{if(!f){let n=t.data[0];x(!!n,16349);let s=n?.error||n[0]?.error;if(s){w(sC,`RPC '${e}' stream ${i} received error:`,s);let t=s.status,n=function(e){let t=r[e];if(void 0!==t)return function(e){if(void 0===e)return v("GRPC error has no .code"),S.UNKNOWN;switch(e){case r.OK:return S.OK;case r.CANCELLED:return S.CANCELLED;case r.UNKNOWN:return S.UNKNOWN;case r.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case r.INTERNAL:return S.INTERNAL;case r.UNAVAILABLE:return S.UNAVAILABLE;case r.UNAUTHENTICATED:return S.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case r.NOT_FOUND:return S.NOT_FOUND;case r.ALREADY_EXISTS:return S.ALREADY_EXISTS;case r.PERMISSION_DENIED:return S.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case r.ABORTED:return S.ABORTED;case r.OUT_OF_RANGE:return S.OUT_OF_RANGE;case r.UNIMPLEMENTED:return S.UNIMPLEMENTED;case r.DATA_LOSS:return S.DATA_LOSS;default:return b(39323,{code:e})}}(t)}(t),a=s.message;"NOT_FOUND"===t&&a.includes("database")&&a.includes("does not exist")&&a.includes(this.databaseId.database)&&I(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=S.INTERNAL,a="Unknown error status: "+t+" with message "+s.message),f=!0,m.s_(new _(n,a)),h.close()}else w(sC,`RPC '${e}' stream ${i} received:`,n),m.o_(n)}}),sV.a_(),setTimeout(()=>{m.i_()},0),m}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(t=>t===e)}Qo(e,t,n){super.Qo(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return(0,c.UE)()}}function sR(){return"undefined"!=typeof document?document:null}/**
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
 */function sO(e){return new rM(e,!0)}/**
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
 */sV.u_=!1;class sP{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Di=e,this.timerId=t,this.E_=n,this.R_=r,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();let t=Math.floor(this.V_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){null!==this.d_&&(this.d_.skipDelay(),this.d_=null)}cancel(){null!==this.d_&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
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
 */let sF="PersistentStream";class sL{constructor(e,t,n,r,i,s,a,o){this.Di=e,this.w_=n,this.S_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new sP(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.v_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(v(t.toString()),v("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===S.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;let e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.b_===t&&this.Q_(e,n)},t=>{e(()=>{let e=new _(S.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}Q_(e,t){let n=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho(()=>{n(()=>this.listener.Ho())}),this.stream.Xo(()=>{n(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.v_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return w(sF,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget(()=>this.b_===e?t():(w(sF,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sM extends sL{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return x(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,x(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){var t,n;x(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(x(void 0!==n,14353),t.map(e=>{let t;return(t=e.updateTime?rB(e.updateTime):rB(n)).isEqual(ee.min())&&(t=rB(n)),new rw(t,e.transformResults||[])})):[]),i=rB(e.commitTime);return this.listener.ta(i,r)}na(){var e;let t={};t.database=new $(["projects",(e=this.serializer).databaseId.projectId,"databases",e.databaseId.database]).canonicalString(),this.k_(t)}Y_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>rX(this.serializer,e))};this.k_(t)}}/**
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
 */class sU{}class sB extends sU{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new _(S.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.$o(e,rz(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(S.UNKNOWN,e.toString())})}zo(e,t,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.zo(e,rz(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(S.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class sq{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(v(t),this._a=!1):w("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}/**
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
 */let sz="RemoteStore";class s${constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new iz(1e3),this.Aa=new iz(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo(e=>{n.enqueueAndForget(async()=>{sj(this)&&(w(sz,"Restarting streams for network reachability change."),await async function(e){e.Va.add(4),await sG(e),e.fa.set("Unknown"),e.Va.delete(4),await sK(e)}(this))})}),this.fa=new sq(n,r)}}async function sK(e){if(sj(e))for(let t of e.da)await t(!0)}async function sG(e){for(let t of e.da)await t(!1)}function sj(e){return 0===e.Va.size}async function sQ(e,t,n){if(!ev(t))throw t;e.Va.add(1),await sG(e),e.fa.set("Offline"),n||(n=()=>{var t;return(t=e.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ci.getLastRemoteSnapshotVersion(e))}),e.asyncQueue.enqueueRetryable(async()=>{w(sz,"Retrying IndexedDB access"),await n(),e.Va.delete(1),await sK(e)})}function sH(e,t){return t().catch(n=>sQ(e,n,t))}async function sJ(e){let t=s4(e),n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:-1;for(;sj(e)&&e.Pa.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Pa.length&&t.B_();break}n=r.batchId,function(e,t){e.Pa.push(t);let n=s4(e);n.x_()&&n.X_&&n.Y_(t.mutations)}(e,r)}catch(t){await sQ(e,t)}sX(e)&&sY(e)}function sX(e){return sj(e)&&!s4(e).M_()&&e.Pa.length>0}function sY(e){s4(e).start()}async function sW(e){s4(e).na()}async function sZ(e){let t=s4(e);for(let n of e.Pa)t.Y_(n.mutations)}async function s0(e,t,n){let r=e.Pa.shift(),i=rR.from(r,t,n);await sH(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sJ(e)}async function s1(e,t){t&&s4(e).X_&&await async function(e,t){var n;if(function(e){switch(e){case S.OK:return b(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return b(15467,{code:e})}}(n=t.code)&&n!==S.ABORTED){let n=e.Pa.shift();s4(e).N_(),await sH(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sJ(e)}}(e,t),sX(e)&&sY(e)}async function s2(e,t){e.asyncQueue.verifyOperationInProgress(),w(sz,"RemoteStore received new credentials");let n=sj(e);e.Va.add(3),await sG(e),n&&e.fa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Va.delete(3),await sK(e)}async function s5(e,t){t?(e.Va.delete(2),await sK(e)):t||(e.Va.add(2),await sG(e),e.fa.set("Unknown"))}function s4(e){var t,n,r;return e.ya||(e.ya=(t=e.datastore,n=e.asyncQueue,r={Ho:()=>Promise.resolve(),Xo:sW.bind(null,e),e_:s1.bind(null,e),ea:sZ.bind(null,e),ta:s0.bind(null,e)},t.ia(),new sM(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.da.push(async t=>{t?(e.ya.N_(),await sJ(e)):(await e.ya.stop(),e.Pa.length>0&&(w(sz,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ya}/**
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
 */class s6{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new N,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new s6(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s3(e,t){if(v("AsyncQueue",`${t}: ${e}`),ev(e))return new _(S.UNAVAILABLE,`${t}: ${e}`);throw e}class s8{constructor(){this.queries=s9(),this.onlineState="Unknown",this.Ma=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=s9(),n.forEach((e,n)=>{for(let e of n.Ca)e.onError(t)})}(this,new _(S.ABORTED,"Firestore shutting down"))}}function s9(){return new n1(e=>nW(e),nY)}(a=s||(s={})).Na="default",a.Cache="cache";class s7{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Eu={},this.Ru=new n1(e=>nW(e),nY),this.Au=new Map,this.Vu=new Set,this.du=new t_(j.comparator),this.mu=new Map,this.fu=new i7,this.gu={},this.pu=new Map,this.yu=iz._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return!0===this.wu}}async function ae(e,t,n){let r=al(e);try{var i;let e;let s=await function(e,t){let n,r;let i=Z.now(),s=t.reduce((e,t)=>e.add(t.key),n7());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=n2,l=n7();return e.Ms.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=ri(r.transform,e||null);null!=i&&(null===n&&(n=nd.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new r_(e.key,t,function e(t){let n=[];return tx(t.fields,(t,r)=>{let i=new G([t]);if(ns(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new tV(n)}(t.value.mapValue),rv.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:n6(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.gu[r.currentUser.toKey()])||(e=new t_(L)),e=e.insert(i,n),r.gu[r.currentUser.toKey()]=e,await aa(r,s.changes),await sJ(r.remoteStore)}catch(t){let e=s3(t,"Failed to persist write");n.reject(e)}}function at(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.Ru.forEach((e,n)=>{let r=n.view.xa(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Ca)e.xa(t)&&(n=!0)}),n&&function(e){e.Ma.forEach(e=>{e.next()})}(r),i.length&&e.Eu.J_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function an(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Ms.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=ed.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);x(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=n7();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});as(e,r,null),ai(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await aa(e,i)}catch(e){await ec(e)}}async function ar(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(x(null!==t,37113),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});as(e,t,n),ai(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aa(e,i)}catch(e){await ec(e)}}function ai(e,t){(e.pu.get(t)||[]).forEach(e=>{e.resolve()}),e.pu.delete(t)}function as(e,t,n){let r=e.gu[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.gu[e.currentUser.toKey()]=r}}async function aa(e,t,n){let r=[],i=[],s=[];e.Ru.isEmpty()||(e.Ru.forEach((a,o)=>{s.push(e.Su(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:n?.targetChanges.get(o.targetId)?.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=sm.Is(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Eu.J_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>ed.forEach(t,t=>ed.forEach(t.Ps,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>ed.forEach(t.Ts,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!ev(e))throw e;w("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Cs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Cs=e.Cs.insert(t,i)}}}(e.localStore,i))}async function ao(e,t){var n;if(!e.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());let r=await sw(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.pu.forEach(e=>{e.forEach(e=>{e.reject(new _(S.CANCELLED,n))})}),e.pu.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await aa(e,r.Os)}}function al(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=an.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ar.bind(null,e),e}class au{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sO(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){var t;return t=this.persistence,new sy(t,new sg,e.initialUser,this.serializer)}Mu(e){return new ss(so.Ai,this.serializer)}Fu(e){return new sI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}au.provider={build:()=>new au};class ah extends au{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){return x(this.persistence.referenceDelegate instanceof sl,46915),new iH(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Mu(e){let t=void 0!==this.cacheSizeBytes?iF.withCacheSize(this.cacheSizeBytes):iF.DEFAULT;return new ss(e=>sl.Ai(e,t),this.serializer)}}class ac extends au{constructor(e,t,n){super(),this.Bu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Bu.initialize(this,e),await al(this.Bu.syncEngine),await sJ(this.Bu.remoteStore),await this.persistence.Gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}xu(e){var t;return t=this.persistence,new sy(t,new sg,e.initialUser,this.serializer)}Ou(e,t){return new iH(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Nu(e,t){let n=new e_(t,this.persistence);return new eS(e.asyncQueue,n)}Mu(e){var t,n;let r;let i=(t=e.databaseInfo.databaseId,n=e.databaseInfo.persistenceKey,r=t.projectId,t.isDefaultDatabase||(r+="."+t.database),"firestore/"+n+"/"+r+"/"),s=void 0!==this.cacheSizeBytes?iF.withCacheSize(this.cacheSizeBytes):iF.DEFAULT;return new sf(this.synchronizeTabs,i,e.clientId,s,e.asyncQueue,"undefined"!=typeof window?window:null,sR(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Fu(e){return new sI}}class ad{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>at(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ao.bind(null,this.syncEngine),await s5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s8}createDatastore(e){let t=sO(e.databaseInfo.databaseId),n=new sV(e.databaseInfo);return new sB(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new s$(t,this.datastore,e.asyncQueue,e=>at(this.syncEngine,e,0),sT.v()?new sT:new sE)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new s7(e,t,n,r,i,s);return a&&(o.wu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){w(sz,"RemoteStore shutting down."),e.Va.add(5),await sG(e),e.ma.shutdown(),e.fa.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ad.provider={build:()=>new ad};/**
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
 */let af="FirestoreClient";class am{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=f.UNAUTHENTICATED,this.clientId=F.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{w(af,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(w(af,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new N;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=s3(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ap(e,t){e.asyncQueue.verifyOperationInProgress(),w(af,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await sw(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ag(e,t){e.asyncQueue.verifyOperationInProgress();let n=await ay(e);w(af,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>s2(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>s2(t.remoteStore,n)),e._onlineComponents=t}async function ay(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){w(af,"Using user provided OfflineComponentProvider");try{await ap(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;I("Error using user provided cache. Falling back to memory cache: "+t),await ap(e,new au)}}else w(af,"Using default OfflineComponentProvider"),await ap(e,new ah(void 0))}return e._offlineComponents}async function aw(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w(af,"Using user provided OnlineComponentProvider"),await ag(e,e._uninitializedComponentsProvider._online)):(w(af,"Using default OnlineComponentProvider"),await ag(e,new ad))),e._onlineComponents}function av(e,t){let n=new N;return e.asyncQueue.enqueueAndForget(async()=>ae(await aw(e).then(e=>e.syncEngine),t,n)),n.promise}/**
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
 */function aI(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let aE=new Map,ab="firestore.googleapis.com";class aT{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new _(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ab,this.ssl=!0}else this.host=e.host,this.ssl=e.ssl??!0;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new _(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new _(S.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aI(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new _(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new _(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new _(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ax{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new _(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aT(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new D;switch(e.type){case"firstParty":return new R(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new _(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=aE.get(e);t&&(w("ComponentProvider","Removing Datastore"),aE.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class aS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new aS(this.firestore,e,this._query)}}class a_{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aN(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new a_(this.firestore,e,this._key)}toJSON(){return{type:a_._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(W(t,a_._jsonSchema))return new a_(e,n||null,new j($.fromString(t.referencePath)))}}a_._jsonSchemaVersion="firestore/documentReference/1.0",a_._jsonSchema={type:Y("string",a_._jsonSchemaVersion),referencePath:Y("string")};class aN extends aS{constructor(e,t,n){super(e,t,new nq(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new a_(this.firestore,null,new j(e))}withConverter(e){return new aN(this.firestore,e,this._path)}}function aA(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=F.newId()),/**
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
 */function(e,t,n){if(!n)throw new _(S.INVALID_ARGUMENT,`Function doc() cannot be called with an empty ${t}.`)}(0,"path",t),e instanceof ax){let r=$.fromString(t,...n);return Q(r),new a_(e,null,new j(r))}{if(!(e instanceof a_||e instanceof aN))throw new _(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child($.fromString(t,...n));return Q(r),new a_(e.firestore,e instanceof aN?e.converter:null,new j(r))}}/**
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
 */let aD="AsyncQueue";class aC{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new sP(this,"async_queue_retry"),this.cc=()=>{let e=sR();e&&w(aD,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this.lc=e;let t=sR();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;let t=sR();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});let t=new N;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(0!==this.nc.length){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!ev(e))throw e;w(aD,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){let t=this.lc.then(()=>(this._c=!0,e().catch(e=>{throw this.oc=e,this._c=!1,v("INTERNAL UNHANDLED ERROR: ",ak(e)),e}).then(e=>(this._c=!1,e))));return this.lc=t,t}enqueueAfterDelay(e,t,n){this.hc(),this.uc.indexOf(e)>-1&&(t=0);let r=s6.createAndSchedule(this,e,t,n,e=>this.Ic(e));return this.sc.push(r),r}hc(){this.oc&&b(47125,{Ec:ak(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(let t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{for(let t of(this.sc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.sc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){let t=this.sc.indexOf(e);this.sc.splice(t,1)}}function ak(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class aV extends ax{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new aC,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new aC(e),this._firestoreClient=void 0,await e}}}function aR(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||tQ});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n,r={}){e=X(e,ax);let i=(0,l.Xx)(t),s=e._getSettings(),a={...s,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${n}`;i&&(0,l.Uo)(`https://${o}`),s.host!==ab&&s.host!==o&&I("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u={...s,host:o,ssl:i,emulatorOptions:r};if(!(0,l.vZ)(u,a)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=f.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,e._app?.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new _(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new f(i)}e._authCredentials=new C(new A(t,n))}}(r,...e)}return r}function aO(e){if(e._terminated)throw new _(S.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||aP(e),e._firestoreClient}function aP(e){var t,n,r,i;let s=e._freezeSettings(),a=(t=e._databaseId,n=e._app?.options.appId||"",r=e._persistenceKey,i=e._app?.options.apiKey,new tj(t,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,aI(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i));e._componentsProvider||s.localCache?._offlineComponentProvider&&s.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new am(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}function aF(e,t){I("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings();return function(e,t,n){if((e=X(e,aV))._firestoreClient||e._terminated)throw new _(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new _(S.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:n},aP(e)}(e,ad.provider,{build:e=>new ac(e,n.cacheSizeBytes,t?.forceOwnership)}),Promise.resolve()}/**
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
 */class aL{constructor(e){this._byteString=e}static fromBase64String(e){try{return new aL(tO.fromBase64String(e))}catch(e){throw new _(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new aL(tO.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:aL._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(W(e,aL._jsonSchema))return aL.fromBase64String(e.bytes)}}aL._jsonSchemaVersion="firestore/bytes/1.0",aL._jsonSchema={type:Y("string",aL._jsonSchemaVersion),bytes:Y("string")};/**
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
 */class aM{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new _(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class aU{constructor(e){this._methodName=e}}/**
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
 */class aB{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:aB._jsonSchemaVersion}}static fromJSON(e){if(W(e,aB._jsonSchema))return new aB(e.latitude,e.longitude)}}aB._jsonSchemaVersion="firestore/geoPoint/1.0",aB._jsonSchema={type:Y("string",aB._jsonSchemaVersion),latitude:Y("number"),longitude:Y("number")};/**
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
 */class aq{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:aq._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(W(e,aq._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new aq(e.vectorValues);throw new _(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}aq._jsonSchemaVersion="firestore/vectorValue/1.0",aq._jsonSchema={type:Y("string",aq._jsonSchemaVersion),vectorValues:Y("object")};/**
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
 */let az=/^__.*__$/;class a${constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new r_(e,this.data,this.fieldMask,t,this.fieldTransforms):new rS(e,this.data,t,this.fieldTransforms)}}class aK{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new r_(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aG(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b(40011,{dataSource:e})}}class aj{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new aj({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.yc(e),n}wc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(),n}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return a8(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(0===e.length)throw this.bc("Document fields must not be empty");if(aG(this.dataSource)&&az.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class aQ{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sO(e)}V(e,t,n,r=!1){return new aj({dataSource:e,methodName:t,targetDoc:n,path:G.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aH(e){let t=e._freezeSettings(),n=sO(e._databaseId);return new aQ(e._databaseId,!!t.ignoreUndefinedProperties,n)}function aJ(e,t,n,r,i,s={}){let a,o;let l=e.V(s.merge||s.mergeFields?2:0,t,n,i);a5("Data must be an object, but it was:",l,r);let u=a1(r,l);if(s.merge)a=new tV(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=a4(t,r,n);if(!l.contains(i))throw new _(S.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);a9(e,i)||e.push(i)}a=new tV(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new a$(new nd(u),a,o)}class aX extends aU{_toFieldTransform(e){if(2!==e.dataSource)throw 1===e.dataSource?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof aX}}function aY(e,t,n,r){let i=e.V(1,t,n);a5("Data must be an object, but it was:",i,r);let s=[],a=nd.empty();return tx(r,(e,r)=>{let o=a3(t,e,n);r=(0,l.m9)(r);let u=i.wc(o);if(r instanceof aX)s.push(o);else{let e=a0(r,u);null!=e&&(s.push(o),a.set(o,e))}}),new aK(a,new tV(s),i.fieldTransforms)}function aW(e,t,n,r,i,s){let a=e.V(1,t,n),o=[a4(t,r,n)],u=[i];if(s.length%2!=0)throw new _(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(a4(t,s[e])),u.push(s[e+1]);let h=[],c=nd.empty();for(let e=o.length-1;e>=0;--e)if(!a9(h,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.wc(t);if(n instanceof aX)h.push(t);else{let e=a0(n,r);null!=e&&(h.push(t),c.set(t,e))}}return new aK(c,new tV(h),a.fieldTransforms)}function aZ(e,t,n,r=!1){return a0(n,e.V(r?4:3,t))}function a0(e,t){if(a2(e=(0,l.m9)(e)))return a5("Unsupported field value:",t,e),a1(e,t);if(e instanceof aU)return function(e,t){if(!aG(t.dataSource))throw t.bc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.bc(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.bc("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=a0(i,t.Sc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i,s,a,o;if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!eA(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?rn(r):rt(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=Z.fromDate(e);return{timestampValue:rU(t.serializer,n)}}if(e instanceof Z){let n=new Z(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rU(t.serializer,n)}}if(e instanceof aB)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof aL)return{bytesValue:(s=t.serializer,a=e._byteString,s.useProto3Json?a.toBase64():a.toUint8Array())};if(e instanceof a_){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.bc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rq(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof aq)return{mapValue:{fields:{[tX]:{stringValue:tZ},[t0]:{arrayValue:{values:((o=e)instanceof aq?o.toArray():o).map(e=>{if("number"!=typeof e)throw t.bc("VectorValues must only contain numeric values.");return rt(t.serializer,e)})}}}}};if(r2(e))return e._toProto(t.serializer);throw t.bc(`Unsupported field value: ${J(e)}`)}(e,t)}function a1(e,t){let n={};return tS(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tx(e,(e,r)=>{let i=a0(r,t.gc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function a2(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Z||e instanceof aB||e instanceof aL||e instanceof a_||e instanceof aU||e instanceof aq||r2(e))}function a5(e,t,n){if(!a2(n)||!H(n)){let r=J(n);throw"an object"===r?t.bc(e+" a custom object"):t.bc(e+" "+r)}}function a4(e,t,n){if((t=(0,l.m9)(t))instanceof aM)return t._internalPath;if("string"==typeof t)return a3(e,t);throw a8("Field path arguments must be of type string or ",e,!1,void 0,n)}let a6=RegExp("[~\\*/\\[\\]]");function a3(e,t,n){if(t.search(a6)>=0)throw a8(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new aM(...t.split("."))._internalPath}catch(r){throw a8(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function a8(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new _(S.INVALID_ARGUMENT,o+e+l)}function a9(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */class a7{convertValue(e,t="none"){switch(t2(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tL(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tM(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw b(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return tx(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){return new aq(e.fields?.[t0].arrayValue?.values?.map(e=>tL(e.doubleValue)))}convertGeoPoint(e){return new aB(tL(e.latitude),tL(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=tK(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(tG(e));default:return null}}convertTimestamp(e){let t=tF(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=$.fromString(e);x(r1(n),9688,{name:e});let r=new tH(n.get(1),n.get(3)),i=new j(n.popFirst(5));return r.isEqual(t)||v(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class oe extends a7{constructor(e){super(),this.firestore=e}convertBytes(e){return new aL(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new a_(this.firestore,null,t)}}}}]);