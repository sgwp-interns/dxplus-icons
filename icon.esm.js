import { unsafeCSS as n1, LitElement as r1, html as A } from "lit";
import W from "dompurify";
/*!
 * DxPlus Lit Library
 * Version: 0.0.1
 * Build Date: 2025-12-09 11:55:02
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l1 = (C) => (t, o) => {
  o !== void 0 ? o.addInitializer((() => {
    customElements.define(C, t);
  })) : customElements.define(C, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis, N = z.ShadowRoot && (z.ShadyCSS === void 0 || z.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s1 = Symbol(), J = /* @__PURE__ */ new WeakMap();
let d1 = class {
  constructor(t, o, e) {
    if (this._$cssResult$ = !0, e !== s1) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = o;
  }
  get styleSheet() {
    let t = this.o;
    const o = this.t;
    if (N && t === void 0) {
      const e = o !== void 0 && o.length === 1;
      e && (t = J.get(o)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && J.set(o, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const p1 = (C) => new d1(typeof C == "string" ? C : C + "", void 0, s1), g1 = (C, t) => {
  if (N) C.adoptedStyleSheets = t.map(((o) => o instanceof CSSStyleSheet ? o : o.styleSheet));
  else for (const o of t) {
    const e = document.createElement("style"), i = z.litNonce;
    i !== void 0 && e.setAttribute("nonce", i), e.textContent = o.cssText, C.appendChild(e);
  }
}, F = N ? (C) => C : (C) => C instanceof CSSStyleSheet ? ((t) => {
  let o = "";
  for (const e of t.cssRules) o += e.cssText;
  return p1(o);
})(C) : C;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: u1, defineProperty: M1, getOwnPropertyDescriptor: w1, getOwnPropertyNames: H1, getOwnPropertySymbols: v1, getPrototypeOf: f1 } = Object, P = globalThis, K = P.trustedTypes, V1 = K ? K.emptyScript : "", Z1 = P.reactiveElementPolyfillSupport, y = (C, t) => C, S = { toAttribute(C, t) {
  switch (t) {
    case Boolean:
      C = C ? V1 : null;
      break;
    case Object:
    case Array:
      C = C == null ? C : JSON.stringify(C);
  }
  return C;
}, fromAttribute(C, t) {
  let o = C;
  switch (t) {
    case Boolean:
      o = C !== null;
      break;
    case Number:
      o = C === null ? null : Number(C);
      break;
    case Object:
    case Array:
      try {
        o = JSON.parse(C);
      } catch {
        o = null;
      }
  }
  return o;
} }, T = (C, t) => !u1(C, t), G = { attribute: !0, type: String, converter: S, reflect: !1, useDefault: !1, hasChanged: T };
Symbol.metadata ??= Symbol("metadata"), P.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class x extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, o = G) {
    if (o.state && (o.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((o = Object.create(o)).wrapped = !0), this.elementProperties.set(t, o), !o.noAccessor) {
      const e = Symbol(), i = this.getPropertyDescriptor(t, e, o);
      i !== void 0 && M1(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, o, e) {
    const { get: i, set: n } = w1(this.prototype, t) ?? { get() {
      return this[o];
    }, set(r) {
      this[o] = r;
    } };
    return { get: i, set(r) {
      const s = i?.call(this);
      n?.call(this, r), this.requestUpdate(t, s, e);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? G;
  }
  static _$Ei() {
    if (this.hasOwnProperty(y("elementProperties"))) return;
    const t = f1(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(y("properties"))) {
      const o = this.properties, e = [...H1(o), ...v1(o)];
      for (const i of e) this.createProperty(i, o[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const o = litPropertyMetadata.get(t);
      if (o !== void 0) for (const [e, i] of o) this.elementProperties.set(e, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [o, e] of this.elementProperties) {
      const i = this._$Eu(o, e);
      i !== void 0 && this._$Eh.set(i, o);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const o = [];
    if (Array.isArray(t)) {
      const e = new Set(t.flat(1 / 0).reverse());
      for (const i of e) o.unshift(F(i));
    } else t !== void 0 && o.push(F(t));
    return o;
  }
  static _$Eu(t, o) {
    const e = o.attribute;
    return e === !1 ? void 0 : typeof e == "string" ? e : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((t) => this.enableUpdating = t)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t) => t(this)));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), o = this.constructor.elementProperties;
    for (const e of o.keys()) this.hasOwnProperty(e) && (t.set(e, this[e]), delete this[e]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return g1(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((t) => t.hostConnected?.()));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((t) => t.hostDisconnected?.()));
  }
  attributeChangedCallback(t, o, e) {
    this._$AK(t, e);
  }
  _$ET(t, o) {
    const e = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, e);
    if (i !== void 0 && e.reflect === !0) {
      const n = (e.converter?.toAttribute !== void 0 ? e.converter : S).toAttribute(o, e.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, o) {
    const e = this.constructor, i = e._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const n = e.getPropertyOptions(i), r = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : S;
      this._$Em = i;
      const s = r.fromAttribute(o, n.type);
      this[i] = s ?? this._$Ej?.get(i) ?? s, this._$Em = null;
    }
  }
  requestUpdate(t, o, e) {
    if (t !== void 0) {
      const i = this.constructor, n = this[t];
      if (e ??= i.getPropertyOptions(t), !((e.hasChanged ?? T)(n, o) || e.useDefault && e.reflect && n === this._$Ej?.get(t) && !this.hasAttribute(i._$Eu(t, e)))) return;
      this.C(t, o, e);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, o, { useDefault: e, reflect: i, wrapped: n }, r) {
    e && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, r ?? o ?? this[t]), n !== !0 || r !== void 0) || (this._$AL.has(t) || (this.hasUpdated || e || (o = void 0), this._$AL.set(t, o)), i === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (o) {
      Promise.reject(o);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, n] of this._$Ep) this[i] = n;
        this._$Ep = void 0;
      }
      const e = this.constructor.elementProperties;
      if (e.size > 0) for (const [i, n] of e) {
        const { wrapped: r } = n, s = this[i];
        r !== !0 || this._$AL.has(i) || s === void 0 || this.C(i, void 0, n, s);
      }
    }
    let t = !1;
    const o = this._$AL;
    try {
      t = this.shouldUpdate(o), t ? (this.willUpdate(o), this._$EO?.forEach(((e) => e.hostUpdate?.())), this.update(o)) : this._$EM();
    } catch (e) {
      throw t = !1, this._$EM(), e;
    }
    t && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach(((o) => o.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach(((o) => this._$ET(o, this[o]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[y("elementProperties")] = /* @__PURE__ */ new Map(), x[y("finalized")] = /* @__PURE__ */ new Map(), Z1?.({ ReactiveElement: x }), (P.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L1 = { attribute: !0, type: String, converter: S, reflect: !1, hasChanged: T }, x1 = (C = L1, t, o) => {
  const { kind: e, metadata: i } = o;
  let n = globalThis.litPropertyMetadata.get(i);
  if (n === void 0 && globalThis.litPropertyMetadata.set(i, n = /* @__PURE__ */ new Map()), e === "setter" && ((C = Object.create(C)).wrapped = !0), n.set(o.name, C), e === "accessor") {
    const { name: r } = o;
    return { set(s) {
      const l = t.get.call(this);
      t.set.call(this, s), this.requestUpdate(r, l, C);
    }, init(s) {
      return s !== void 0 && this.C(r, void 0, C, s), s;
    } };
  }
  if (e === "setter") {
    const { name: r } = o;
    return function(s) {
      const l = this[r];
      t.call(this, s), this.requestUpdate(r, l, C);
    };
  }
  throw Error("Unsupported decorator location: " + e);
};
function d(C) {
  return (t, o) => typeof o == "object" ? x1(C, t, o) : ((e, i, n) => {
    const r = i.hasOwnProperty(n);
    return i.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(i, n) : void 0;
  })(C, t, o);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = globalThis, I = D.trustedTypes, Q = I ? I.createPolicy("lit-html", { createHTML: (C) => C }) : void 0, m1 = "$lit$", w = `lit$${Math.random().toFixed(9).slice(2)}$`, a1 = "?" + w, b1 = `<${a1}>`, f = document, E = () => f.createComment(""), _ = (C) => C === null || typeof C != "object" && typeof C != "function", R = Array.isArray, y1 = (C) => R(C) || typeof C?.[Symbol.iterator] == "function", j = `[ 	
\f\r]`, b = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, X = /-->/g, Y = />/g, H = RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), t1 = /'/g, o1 = /"/g, h1 = /^(?:script|style|textarea|title)$/i, Z = Symbol.for("lit-noChange"), a = Symbol.for("lit-nothing"), e1 = /* @__PURE__ */ new WeakMap(), v = f.createTreeWalker(f, 129);
function c1(C, t) {
  if (!R(C) || !C.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Q !== void 0 ? Q.createHTML(t) : t;
}
const _1 = (C, t) => {
  const o = C.length - 1, e = [];
  let i, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", r = b;
  for (let s = 0; s < o; s++) {
    const l = C[s];
    let h, c, m = -1, u = 0;
    for (; u < l.length && (r.lastIndex = u, c = r.exec(l), c !== null); ) u = r.lastIndex, r === b ? c[1] === "!--" ? r = X : c[1] !== void 0 ? r = Y : c[2] !== void 0 ? (h1.test(c[2]) && (i = RegExp("</" + c[2], "g")), r = H) : c[3] !== void 0 && (r = H) : r === H ? c[0] === ">" ? (r = i ?? b, m = -1) : c[1] === void 0 ? m = -2 : (m = r.lastIndex - c[2].length, h = c[1], r = c[3] === void 0 ? H : c[3] === '"' ? o1 : t1) : r === o1 || r === t1 ? r = H : r === X || r === Y ? r = b : (r = H, i = void 0);
    const M = r === H && C[s + 1].startsWith("/>") ? " " : "";
    n += r === b ? l + b1 : m >= 0 ? (e.push(h), l.slice(0, m) + m1 + l.slice(m) + w + M) : l + w + (m === -2 ? s : M);
  }
  return [c1(C, n + (C[o] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), e];
};
class k {
  constructor({ strings: t, _$litType$: o }, e) {
    let i;
    this.parts = [];
    let n = 0, r = 0;
    const s = t.length - 1, l = this.parts, [h, c] = _1(t, o);
    if (this.el = k.createElement(h, e), v.currentNode = this.el.content, o === 2 || o === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (i = v.nextNode()) !== null && l.length < s; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const m of i.getAttributeNames()) if (m.endsWith(m1)) {
          const u = c[r++], M = i.getAttribute(m).split(w), B = /([.?@])?(.*)/.exec(u);
          l.push({ type: 1, index: n, name: B[2], strings: M, ctor: B[1] === "." ? $1 : B[1] === "?" ? B1 : B[1] === "@" ? A1 : O }), i.removeAttribute(m);
        } else m.startsWith(w) && (l.push({ type: 6, index: n }), i.removeAttribute(m));
        if (h1.test(i.tagName)) {
          const m = i.textContent.split(w), u = m.length - 1;
          if (u > 0) {
            i.textContent = I ? I.emptyScript : "";
            for (let M = 0; M < u; M++) i.append(m[M], E()), v.nextNode(), l.push({ type: 2, index: ++n });
            i.append(m[u], E());
          }
        }
      } else if (i.nodeType === 8) if (i.data === a1) l.push({ type: 2, index: n });
      else {
        let m = -1;
        for (; (m = i.data.indexOf(w, m + 1)) !== -1; ) l.push({ type: 7, index: n }), m += w.length - 1;
      }
      n++;
    }
  }
  static createElement(t, o) {
    const e = f.createElement("template");
    return e.innerHTML = t, e;
  }
}
function L(C, t, o = C, e) {
  if (t === Z) return t;
  let i = e !== void 0 ? o._$Co?.[e] : o._$Cl;
  const n = _(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== n && (i?._$AO?.(!1), n === void 0 ? i = void 0 : (i = new n(C), i._$AT(C, o, e)), e !== void 0 ? (o._$Co ??= [])[e] = i : o._$Cl = i), i !== void 0 && (t = L(C, i._$AS(C, t.values), i, e)), t;
}
class k1 {
  constructor(t, o) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = o;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: o }, parts: e } = this._$AD, i = (t?.creationScope ?? f).importNode(o, !0);
    v.currentNode = i;
    let n = v.nextNode(), r = 0, s = 0, l = e[0];
    for (; l !== void 0; ) {
      if (r === l.index) {
        let h;
        l.type === 2 ? h = new q(n, n.nextSibling, this, t) : l.type === 1 ? h = new l.ctor(n, l.name, l.strings, this, t) : l.type === 6 && (h = new z1(n, this, t)), this._$AV.push(h), l = e[++s];
      }
      r !== l?.index && (n = v.nextNode(), r++);
    }
    return v.currentNode = f, i;
  }
  p(t) {
    let o = 0;
    for (const e of this._$AV) e !== void 0 && (e.strings !== void 0 ? (e._$AI(t, e, o), o += e.strings.length - 2) : e._$AI(t[o])), o++;
  }
}
class q {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, o, e, i) {
    this.type = 2, this._$AH = a, this._$AN = void 0, this._$AA = t, this._$AB = o, this._$AM = e, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const o = this._$AM;
    return o !== void 0 && t?.nodeType === 11 && (t = o.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, o = this) {
    t = L(this, t, o), _(t) ? t === a || t == null || t === "" ? (this._$AH !== a && this._$AR(), this._$AH = a) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : y1(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== a && _(this._$AH) ? this._$AA.nextSibling.data = t : this.T(f.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: o, _$litType$: e } = t, i = typeof e == "number" ? this._$AC(t) : (e.el === void 0 && (e.el = k.createElement(c1(e.h, e.h[0]), this.options)), e);
    if (this._$AH?._$AD === i) this._$AH.p(o);
    else {
      const n = new k1(i, this), r = n.u(this.options);
      n.p(o), this.T(r), this._$AH = n;
    }
  }
  _$AC(t) {
    let o = e1.get(t.strings);
    return o === void 0 && e1.set(t.strings, o = new k(t)), o;
  }
  k(t) {
    R(this._$AH) || (this._$AH = [], this._$AR());
    const o = this._$AH;
    let e, i = 0;
    for (const n of t) i === o.length ? o.push(e = new q(this.O(E()), this.O(E()), this, this.options)) : e = o[i], e._$AI(n), i++;
    i < o.length && (this._$AR(e && e._$AB.nextSibling, i), o.length = i);
  }
  _$AR(t = this._$AA.nextSibling, o) {
    for (this._$AP?.(!1, !0, o); t !== this._$AB; ) {
      const e = t.nextSibling;
      t.remove(), t = e;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class O {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, o, e, i, n) {
    this.type = 1, this._$AH = a, this._$AN = void 0, this.element = t, this.name = o, this._$AM = i, this.options = n, e.length > 2 || e[0] !== "" || e[1] !== "" ? (this._$AH = Array(e.length - 1).fill(new String()), this.strings = e) : this._$AH = a;
  }
  _$AI(t, o = this, e, i) {
    const n = this.strings;
    let r = !1;
    if (n === void 0) t = L(this, t, o, 0), r = !_(t) || t !== this._$AH && t !== Z, r && (this._$AH = t);
    else {
      const s = t;
      let l, h;
      for (t = n[0], l = 0; l < n.length - 1; l++) h = L(this, s[e + l], o, l), h === Z && (h = this._$AH[l]), r ||= !_(h) || h !== this._$AH[l], h === a ? t = a : t !== a && (t += (h ?? "") + n[l + 1]), this._$AH[l] = h;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === a ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class $1 extends O {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === a ? void 0 : t;
  }
}
class B1 extends O {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== a);
  }
}
class A1 extends O {
  constructor(t, o, e, i, n) {
    super(t, o, e, i, n), this.type = 5;
  }
  _$AI(t, o = this) {
    if ((t = L(this, t, o, 0) ?? a) === Z) return;
    const e = this._$AH, i = t === a && e !== a || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== a && (e === a || i);
    i && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class z1 {
  constructor(t, o, e) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = o, this.options = e;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    L(this, t);
  }
}
const S1 = D.litHtmlPolyfillSupport;
S1?.(k, q), (D.litHtmlVersions ??= []).push("3.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I1 = { CHILD: 2 }, E1 = (C) => (...t) => ({ _$litDirective$: C, values: t });
class P1 {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, o, e) {
    this._$Ct = t, this._$AM = o, this._$Ci = e;
  }
  _$AS(t, o) {
    return this.update(t, o);
  }
  update(t, o) {
    return this.render(...o);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class U extends P1 {
  constructor(t) {
    if (super(t), this.it = a, t.type !== I1.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === a || t == null) return this._t = void 0, this.it = t;
    if (t === Z) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const o = [t];
    return o.raw = o, this._t = { _$litType$: this.constructor.resultType, strings: o, values: [] };
  }
}
U.directiveName = "unsafeHTML", U.resultType = 1;
const i1 = E1(U), q1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.0169 10.9263C1.70006 11.1931 1.65951 11.6663 1.92632 11.9831C2.19313 12.2999 2.66627 12.3405 2.9831 12.0737L2.0169 10.9263ZM12 3.5L12.4831 2.92632C12.2039 2.69123 11.7961 2.69123 11.5169 2.92632L12 3.5ZM21.0169 12.0737C21.3337 12.3405 21.8069 12.2999 22.0737 11.9831C22.3405 11.6663 22.2999 11.1931 21.9831 10.9263L21.0169 12.0737ZM3.75 10V19.6205H5.25V10H3.75ZM5.4 21.25H18.6V19.75H5.4V21.25ZM20.25 19.6205V10H18.75V19.6205H20.25ZM18.6 21.25C19.4949 21.25 20.25 20.5366 20.25 19.6205H18.75C18.75 19.6758 18.6992 19.75 18.6 19.75V21.25ZM3.75 19.6205C3.75 20.5366 4.50512 21.25 5.4 21.25V19.75C5.30077 19.75 5.25 19.6758 5.25 19.6205H3.75ZM8.75 14.3795V20.831H10.25V14.3795H8.75ZM10.4 14.25H13.6V12.75H10.4V14.25ZM13.75 14.3795V20.831H15.25V14.3795H13.75ZM13.6 14.25C13.6992 14.25 13.75 14.3242 13.75 14.3795H15.25C15.25 13.4634 14.4949 12.75 13.6 12.75V14.25ZM10.25 14.3795C10.25 14.3242 10.3008 14.25 10.4 14.25V12.75C9.50511 12.75 8.75 13.4634 8.75 14.3795H10.25ZM2.9831 12.0737L12.4831 4.07368L11.5169 2.92632L2.0169 10.9263L2.9831 12.0737ZM11.5169 4.07368L21.0169 12.0737L21.9831 10.9263L12.4831 2.92632L11.5169 4.07368Z" fill="currentColor"/>
</svg>
`, O1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 17.5C20.25 17.0858 19.9142 16.75 19.5 16.75C19.0858 16.75 18.75 17.0858 18.75 17.5H20.25ZM18.75 6.5C18.75 6.91421 19.0858 7.25 19.5 7.25C19.9142 7.25 20.25 6.91421 20.25 6.5H18.75ZM16.0303 7.46967C15.7374 7.17678 15.2626 7.17678 14.9697 7.46967C14.6768 7.76256 14.6768 8.23744 14.9697 8.53033L16.0303 7.46967ZM19.5 12L20.0303 12.5303C20.3232 12.2374 20.3232 11.7626 20.0303 11.4697L19.5 12ZM9.5 11.25C9.08579 11.25 8.75 11.5858 8.75 12C8.75 12.4142 9.08579 12.75 9.5 12.75V11.25ZM14.9697 15.4697C14.6768 15.7626 14.6768 16.2374 14.9697 16.5303C15.2626 16.8232 15.7374 16.8232 16.0303 16.5303L14.9697 15.4697ZM3.75 3.5V20.5H5.25V3.5H3.75ZM5.5 22.25H18.5V20.75H5.5V22.25ZM20.25 20.5V17.5H18.75V20.5H20.25ZM5.5 3.25H18.5V1.75H5.5V3.25ZM18.75 3.5V6.5H20.25V3.5H18.75ZM18.5 3.25C18.6381 3.25 18.75 3.36193 18.75 3.5H20.25C20.25 2.5335 19.4665 1.75 18.5 1.75V3.25ZM18.5 22.25C19.4665 22.25 20.25 21.4665 20.25 20.5H18.75C18.75 20.6381 18.6381 20.75 18.5 20.75V22.25ZM3.75 20.5C3.75 21.4665 4.5335 22.25 5.5 22.25V20.75C5.36193 20.75 5.25 20.6381 5.25 20.5H3.75ZM5.25 3.5C5.25 3.36193 5.36193 3.25 5.5 3.25V1.75C4.5335 1.75 3.75 2.5335 3.75 3.5H5.25ZM14.9697 8.53033L18.9697 12.5303L20.0303 11.4697L16.0303 7.46967L14.9697 8.53033ZM19.5 11.25H9.5V12.75H19.5V11.25ZM16.0303 16.5303L20.0303 12.5303L18.9697 11.4697L14.9697 15.4697L16.0303 16.5303Z" fill="currentColor"/>
</svg>
`, j1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0049 14.0485L17.2371 15.3258C18.1581 15.8519 18.7562 16.793 18.8505 17.8372C20.1909 16.2657 21 14.2274 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.2274 3.80912 16.2657 5.14947 17.8372C5.2438 16.793 5.84188 15.8519 6.76214 15.3263L8.99366 14.0464C8.59608 13.4634 8.36364 12.7589 8.36364 12V10.1818C8.36364 8.17351 9.99169 6.54545 12 6.54545C14.0083 6.54545 15.6364 8.17351 15.6364 10.1818V12C15.6364 12.7598 15.4033 13.4651 15.0049 14.0485ZM14.3139 14.8053C13.6852 15.3245 12.879 15.6364 12 15.6364C11.1199 15.6364 10.3128 15.3237 9.68375 14.8034L7.25891 16.1942C6.56477 16.5907 6.13635 17.3288 6.13636 18.1282V18.8055H6.11032C7.68879 20.1727 9.74778 21 12 21C14.2522 21 16.3112 20.1727 17.8897 18.8055H17.8636V18.1282C17.8636 17.3288 17.4352 16.5907 16.7408 16.194L14.3139 14.8053ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 14.6364C13.456 14.6364 14.6364 13.456 14.6364 12V10.1818C14.6364 8.72579 13.456 7.54545 12 7.54545C10.544 7.54545 9.36364 8.72579 9.36364 10.1818V12C9.36364 13.456 10.544 14.6364 12 14.6364Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
</svg>
`, U1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5L19 19M19 5L5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, N1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21.5V2.5M11.5 2.5L4.5 9.5M11.5 2.5L18.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, T1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 2.5V21.5M11.5 21.5L4.5 14.5M11.5 21.5L18.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, D1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 11.5H2.5M2.5 11.5L9.5 18.5M2.5 11.5L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, R1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 11.5H21.5M21.5 11.5L14.5 18.5M21.5 11.5L14.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, W1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16L12 8L20 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, J1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8L12 16L20 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, F1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20L8 12L16 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, K1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 20L16 12L8 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, G1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20L10 12L18 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 20L5 11.5V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, Q1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20L13 12L5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 20V11.5V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, X1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8713 16.5L21.6856 21.3144M19.1314 10.8157C19.1314 15.4084 15.4084 19.1314 10.8157 19.1314C6.22307 19.1314 2.5 15.4084 2.5 10.8157C2.5 6.22307 6.22307 2.5 10.8157 2.5C15.4084 2.5 19.1314 6.22307 19.1314 10.8157Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, Y1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1894 13.6515C21.1894 13.2373 20.8536 12.9015 20.4394 12.9015C20.0252 12.9015 19.6894 13.2373 19.6894 13.6515H21.1894ZM11.4697 4.31061C11.8839 4.31061 12.2197 3.97482 12.2197 3.56061C12.2197 3.14639 11.8839 2.81061 11.4697 2.81061V4.31061ZM7.5 14.5L6.96967 13.9697C6.82902 14.1103 6.75 14.3011 6.75 14.5H7.5ZM7.5 17.5H6.75C6.75 17.9142 7.08579 18.25 7.5 18.25V17.5ZM10.5 17.5V18.25C10.6989 18.25 10.8897 18.171 11.0303 18.0303L10.5 17.5ZM17 5L16.4697 4.46967L17 5ZM1.75 5.24243V19.8182H3.25V5.24243H1.75ZM4.18182 22.25H18.7576V20.75H4.18182V22.25ZM21.1894 19.8182V13.6515H19.6894V19.8182H21.1894ZM4.18182 4.31061H11.4697V2.81061H4.18182V4.31061ZM18.7576 22.25C19.4338 22.25 20.0787 22.0804 20.5493 21.6099C21.0198 21.1393 21.1894 20.4944 21.1894 19.8182H19.6894C19.6894 20.2632 19.5787 20.4592 19.4886 20.5492C19.3986 20.6393 19.2026 20.75 18.7576 20.75V22.25ZM1.75 19.8182C1.75 20.4944 1.91956 21.1393 2.39012 21.6099C2.86069 22.0804 3.5056 22.25 4.18182 22.25V20.75C3.73682 20.75 3.54083 20.6393 3.45078 20.5492C3.36074 20.4592 3.25 20.2632 3.25 19.8182H1.75ZM3.25 5.24243C3.25 4.79743 3.36074 4.60144 3.45078 4.51139C3.54083 4.42135 3.73682 4.31061 4.18182 4.31061V2.81061C3.5056 2.81061 2.86069 2.98017 2.39012 3.45073C1.91956 3.9213 1.75 4.56621 1.75 5.24243H3.25ZM6.75 14.5V17.5H8.25V14.5H6.75ZM7.5 18.25H10.5V16.75H7.5V18.25ZM11.0303 18.0303L20.5303 8.53033L19.4697 7.46967L9.96967 16.9697L11.0303 18.0303ZM16.4697 4.46967L6.96967 13.9697L8.03033 15.0303L17.5303 5.53033L16.4697 4.46967ZM20.5303 4.46967C19.409 3.34835 17.591 3.34835 16.4697 4.46967L17.5303 5.53033C18.0659 4.9948 18.9341 4.9948 19.4697 5.53033L20.5303 4.46967ZM20.5303 8.53033C21.6516 7.40901 21.6517 5.59099 20.5303 4.46967L19.4697 5.53033C20.0052 6.06587 20.0052 6.93414 19.4697 7.46967L20.5303 8.53033Z" fill="currentColor"/>
</svg>
`, t5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 15.7364C9.08579 15.7364 8.75 16.0722 8.75 16.4864C8.75 16.9006 9.08579 17.2364 9.5 17.2364V15.7364ZM14.5 17.2364C14.9142 17.2364 15.25 16.9006 15.25 16.4864C15.25 16.0722 14.9142 15.7364 14.5 15.7364V17.2364ZM9.5 17.759C9.08579 17.759 8.75 18.0947 8.75 18.509C8.75 18.9232 9.08579 19.259 9.5 19.259V17.759ZM14.5 19.259C14.9142 19.259 15.25 18.9232 15.25 18.509C15.25 18.0947 14.9142 17.759 14.5 17.759V19.259ZM6.44449 18.25C6.8587 18.25 7.19449 17.9142 7.19449 17.5C7.19449 17.0858 6.8587 16.75 6.44449 16.75V18.25ZM5.75689 6.44445C5.75689 6.85866 6.09268 7.19445 6.50689 7.19445C6.9211 7.19445 7.25689 6.85866 7.25689 6.44445H5.75689ZM17.5 3.5H16.75V3.50001L17.5 3.5ZM16.75 6.44446C16.75 6.85867 17.0858 7.19445 17.5001 7.19445C17.9143 7.19444 18.25 6.85865 18.25 6.44444L16.75 6.44446ZM5.33338 12.7719C4.91916 12.7719 4.58338 13.1077 4.58338 13.5219C4.58338 13.9362 4.91916 14.2719 5.33338 14.2719V12.7719ZM18.6667 14.2719C19.0809 14.2719 19.4167 13.9362 19.4167 13.5219C19.4167 13.1077 19.0809 12.7719 18.6667 12.7719V14.2719ZM7.25 13.5219C7.25 13.1077 6.91421 12.7719 6.5 12.7719C6.08579 12.7719 5.75 13.1077 5.75 13.5219H7.25ZM18.25 13.5219C18.25 13.1077 17.9142 12.7719 17.5 12.7719C17.0858 12.7719 16.75 13.1077 16.75 13.5219H18.25ZM9.5 17.2364H14.5V15.7364H9.5V17.2364ZM9.5 19.259H14.5V17.759H9.5V19.259ZM1.75 7.5V16.5H3.25V7.5H1.75ZM3.5 18.25H6.44449V16.75H3.5V18.25ZM3.5 7.25H20.5V5.75H3.5V7.25ZM20.75 7.5V16.5H22.25V7.5H20.75ZM20.5 16.75H17.5V18.25H20.5V16.75ZM20.75 16.5C20.75 16.6472 20.7069 16.6927 20.6998 16.6998C20.6927 16.7069 20.6473 16.75 20.5 16.75V18.25C20.9664 18.25 21.4209 18.1 21.7605 17.7605C22.1 17.421 22.25 16.9664 22.25 16.5H20.75ZM20.5 7.25C20.6473 7.25 20.6927 7.29315 20.6998 7.30023C20.7069 7.3073 20.75 7.35276 20.75 7.5H22.25C22.25 7.03359 22.1 6.57905 21.7605 6.23954C21.4209 5.90003 20.9664 5.75 20.5 5.75V7.25ZM1.75 16.5C1.75 16.9664 1.90003 17.4209 2.23955 17.7604C2.57907 18.1 3.03361 18.25 3.5 18.25V16.75C3.35274 16.75 3.30728 16.7069 3.30021 16.6998C3.29314 16.6927 3.25 16.6473 3.25 16.5H1.75ZM3.25 7.5C3.25 7.35274 3.29314 7.30728 3.30021 7.30021C3.30728 7.29315 3.35274 7.25 3.5 7.25V5.75C3.03361 5.75 2.57907 5.90003 2.23955 6.23955C1.90003 6.57907 1.75 7.03361 1.75 7.5H3.25ZM7.25689 6.44445V3.5H5.75689V6.44445H7.25689ZM7.5 3.25H16.5V1.75H7.5V3.25ZM16.75 3.50001L16.75 6.44446L18.25 6.44444L18.25 3.49999L16.75 3.50001ZM16.5 3.25C16.6473 3.25 16.6927 3.29314 16.6998 3.30021C16.7069 3.30728 16.75 3.35274 16.75 3.5H18.25C18.25 3.03361 18.1 2.57907 17.7604 2.23955C17.4209 1.90003 16.9664 1.75 16.5 1.75V3.25ZM7.25689 3.5C7.25689 3.34896 7.30066 3.30326 7.3063 3.29756C7.311 3.29281 7.35312 3.25 7.5 3.25V1.75C7.03323 1.75 6.5788 1.90037 6.24035 2.24221C5.90285 2.58309 5.75689 3.03739 5.75689 3.5H7.25689ZM5.33338 14.2719H18.6667V12.7719H5.33338V14.2719ZM5.75 13.5219V20.5H7.25V13.5219H5.75ZM7.5 22.25H16.5V20.75H7.5V22.25ZM16.5 22.25C16.9664 22.25 17.4209 22.1 17.7604 21.7604C18.1 21.4209 18.25 20.9664 18.25 20.5H16.75C16.75 20.6473 16.7069 20.6927 16.6998 20.6998C16.6927 20.7069 16.6473 20.75 16.5 20.75V22.25ZM5.75 20.5C5.75 20.9664 5.90003 21.4209 6.23955 21.7604C6.57907 22.1 7.03361 22.25 7.5 22.25V20.75C7.35274 20.75 7.30728 20.7069 7.30021 20.6998C7.29314 20.6927 7.25 20.6473 7.25 20.5H5.75ZM18.25 20.5V17.5H16.75V20.5H18.25ZM18.25 17.5V13.5219H16.75V17.5H18.25Z" fill="currentColor"/>
</svg>
`, o5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 21.5H3.5C2.94772 21.5 2.5 21.0523 2.5 20.5V3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H17.0858C17.351 2.5 17.6054 2.60536 17.7929 2.79289L21.2071 6.20711C21.3946 6.39464 21.5 6.649 21.5 6.91421V20.5C21.5 21.0523 21.0523 21.5 20.5 21.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6.5 6.5V2.5H11.5V6.5H6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M6.5 13.5V21.5H17.5V13.5C17.5 12.9477 17.0523 12.5 16.5 12.5H7.5C6.94772 12.5 6.5 12.9477 6.5 13.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
`, e5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4643 5.5H20.5M17.4643 5.5C17.4764 5.5 17.4884 5.5 17.5002 5.5C18.0525 5.5 18.5 5.94772 18.5 6.5V19C18.5 20.3117 17.3413 21.5 16.0001 21.5H8.00005C6.65879 21.5 5.50005 20.3117 5.50005 19V6.5C5.50005 5.94772 5.94755 5.5 6.49983 5.5C6.51169 5.5 6.52365 5.5 6.53571 5.5M17.4643 5.5L15.5001 2.5C15.5001 2.5 13.3669 2.5 12.0001 2.5C10.5216 2.5 8.50005 2.5 8.50005 2.5L6.53571 5.5M17.4643 5.5H12H6.53571M6.53571 5.5H3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, i5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4999 14.5V19.2143C20.4999 19.9244 19.9243 20.5 19.2142 20.5H4.78571C4.07563 20.5 3.5 19.9244 3.5 19.2143V4.78571C3.5 4.07563 4.07563 3.5 4.78571 3.5H9.49995M14.0714 3.50001H20.4999M20.4999 3.50001V9.92858M20.4999 3.50001L12.4999 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, C5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 6.5C6.75 6.91421 7.08579 7.25 7.5 7.25C7.91421 7.25 8.25 6.91421 8.25 6.5H6.75ZM8.25 3.5C8.25 3.08579 7.91421 2.75 7.5 2.75C7.08579 2.75 6.75 3.08579 6.75 3.5H8.25ZM17.25 3.5C17.25 3.08579 16.9142 2.75 16.5 2.75C16.0858 2.75 15.75 3.08579 15.75 3.5H17.25ZM15.75 6.5C15.75 6.91421 16.0858 7.25 16.5 7.25C16.9142 7.25 17.25 6.91421 17.25 6.5H15.75ZM4.5 21.25H19.5V19.75H4.5V21.25ZM19.5 5.75H4.5V7.25H19.5V5.75ZM2.75 7.5V10.5H4.25V7.5H2.75ZM2.75 10.5V19.5H4.25V10.5H2.75ZM21.25 19.5V10.5H19.75V19.5H21.25ZM21.25 10.5V7.5H19.75V10.5H21.25ZM3.5 11.25H20.5V9.75H3.5V11.25ZM19.5 7.25C19.6381 7.25 19.75 7.36193 19.75 7.5H21.25C21.25 6.5335 20.4665 5.75 19.5 5.75V7.25ZM19.5 21.25C20.4665 21.25 21.25 20.4665 21.25 19.5H19.75C19.75 19.6381 19.6381 19.75 19.5 19.75V21.25ZM4.5 19.75C4.36193 19.75 4.25 19.6381 4.25 19.5H2.75C2.75 20.4665 3.5335 21.25 4.5 21.25V19.75ZM4.5 5.75C3.5335 5.75 2.75 6.5335 2.75 7.5H4.25C4.25 7.36193 4.36193 7.25 4.5 7.25V5.75ZM8.25 6.5V3.5H6.75V6.5H8.25ZM15.75 3.5V6.5H17.25V3.5H15.75Z" fill="currentColor"/>
</svg>
`, n5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8546 10.8354C16.2331 10.6671 16.4036 10.2239 16.2354 9.8454C16.0671 9.46688 15.6239 9.29641 15.2454 9.46464L15.8546 10.8354ZM11.5 11.95L10.9 12.4C11.1098 12.6797 11.4851 12.7774 11.8046 12.6354L11.5 11.95ZM8.05 6.1C7.80147 5.76863 7.33137 5.70147 7 5.95C6.66863 6.19853 6.60147 6.66863 6.85 7L8.05 6.1ZM12.25 2.95C12.25 2.53579 11.9142 2.2 11.5 2.2C11.0858 2.2 10.75 2.53579 10.75 2.95H12.25ZM10.75 4.75C10.75 5.16421 11.0858 5.5 11.5 5.5C11.9142 5.5 12.25 5.16421 12.25 4.75H10.75ZM12.25 18.25C12.25 17.8358 11.9142 17.5 11.5 17.5C11.0858 17.5 10.75 17.8358 10.75 18.25H12.25ZM10.75 20.05C10.75 20.4642 11.0858 20.8 11.5 20.8C11.9142 20.8 12.25 20.4642 12.25 20.05H10.75ZM2.95 10.75C2.53579 10.75 2.2 11.0858 2.2 11.5C2.2 11.9142 2.53579 12.25 2.95 12.25V10.75ZM4.75 12.25C5.16421 12.25 5.5 11.9142 5.5 11.5C5.5 11.0858 5.16421 10.75 4.75 10.75V12.25ZM18.25 10.75C17.8358 10.75 17.5 11.0858 17.5 11.5C17.5 11.9142 17.8358 12.25 18.25 12.25V10.75ZM20.05 12.25C20.4642 12.25 20.8 11.9142 20.8 11.5C20.8 11.0858 20.4642 10.75 20.05 10.75V12.25ZM19.75 11.5C19.75 16.0563 16.0563 19.75 11.5 19.75V21.25C16.8848 21.25 21.25 16.8848 21.25 11.5H19.75ZM11.5 19.75C6.94365 19.75 3.25 16.0563 3.25 11.5H1.75C1.75 16.8848 6.11522 21.25 11.5 21.25V19.75ZM3.25 11.5C3.25 6.94365 6.94365 3.25 11.5 3.25V1.75C6.11522 1.75 1.75 6.11522 1.75 11.5H3.25ZM11.5 3.25C16.0563 3.25 19.75 6.94365 19.75 11.5H21.25C21.25 6.11522 16.8848 1.75 11.5 1.75V3.25ZM15.2454 9.46464L11.1954 11.2646L11.8046 12.6354L15.8546 10.8354L15.2454 9.46464ZM12.1 11.5L8.05 6.1L6.85 7L10.9 12.4L12.1 11.5ZM10.75 2.95V4.75H12.25V2.95H10.75ZM10.75 18.25V20.05H12.25V18.25H10.75ZM2.95 12.25H4.75V10.75H2.95V12.25ZM18.25 12.25H20.05V10.75H18.25V12.25Z" fill="currentColor"/>
</svg>
`, r5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.2561 12C8.2561 11.5858 8.59189 11.25 9.0061 11.25H11.2561V9C11.2561 8.58579 11.5919 8.25 12.0061 8.25C12.4203 8.25 12.7561 8.58579 12.7561 9V11.25H15.0061C15.4203 11.25 15.7561 11.5858 15.7561 12C15.7561 12.4142 15.4203 12.75 15.0061 12.75H12.7561V15C12.7561 15.4142 12.4203 15.75 12.0061 15.75C11.5919 15.75 11.2561 15.4142 11.2561 15V12.75H9.0061C8.59189 12.75 8.2561 12.4142 8.2561 12Z" fill="currentColor"/>
</svg>
`, l5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9.0061 11.25C8.59189 11.25 8.2561 11.5858 8.2561 12C8.2561 12.4142 8.59189 12.75 9.0061 12.75H15.0061C15.4203 12.75 15.7561 12.4142 15.7561 12C15.7561 11.5858 15.4203 11.25 15.0061 11.25H9.0061Z" fill="currentColor"/>
</svg>
`, s5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C9.92432 20.5 8.02241 19.756 6.54641 18.5201L18.5201 6.54641C19.756 8.02241 20.5 9.92432 20.5 12ZM5.48523 17.46L17.46 5.48523C15.9831 4.24615 14.0787 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.0787 4.24615 15.9831 5.48523 17.46ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"/>
</svg>
`, m5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M17.5 8.5L11.5 2.5L5.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.3" d="M5.5 15.5L11.5 21.5L17.5 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, a5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 8.5L11.5 2.5L5.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.3" d="M5.5 15.5L11.5 21.5L17.5 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, h5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 15.5L11.5 21.5L5.5 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.3" d="M5.5 8.5L11.5 2.5L17.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, c5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V17.1558M12 17.1558L6.5 11.5M12 17.1558L17.5 11.5M3.5 17.5V20.5C3.5 21.0523 3.94772 21.5 4.5 21.5H19.5C20.0523 21.5 20.5 21.0523 20.5 20.5V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, d5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.1558V2.5M12 2.5L6.5 8.5M12 2.5L17.5 8.5M3.5 17.5V20.5C3.5 21.0523 3.94772 21.5 4.5 21.5H19.5C20.0523 21.5 20.5 21.0523 20.5 20.5V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, p5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7.36842H20.75C20.75 7.17241 20.6733 6.98418 20.5362 6.84404L20 7.36842ZM14.75 2L15.2862 1.47562C15.1451 1.33133 14.9518 1.25 14.75 1.25V2ZM5.25 3V18H6.75V3H5.25ZM7 19.75H19V18.25H7V19.75ZM20.75 18V7.36842H19.25V18H20.75ZM20.5362 6.84404L15.2862 1.47562L14.2138 2.52438L19.4638 7.8928L20.5362 6.84404ZM14.75 1.25H7V2.75H14.75V1.25ZM14 2V6.36842H15.5V2H14ZM15.75 8.11842H20V6.61842H15.75V8.11842ZM19 19.75C19.9665 19.75 20.75 18.9665 20.75 18H19.25C19.25 18.1381 19.1381 18.25 19 18.25V19.75ZM5.25 18C5.25 18.9665 6.0335 19.75 7 19.75V18.25C6.86193 18.25 6.75 18.1381 6.75 18H5.25ZM14 6.36842C14 7.33492 14.7835 8.11842 15.75 8.11842V6.61842C15.6119 6.61842 15.5 6.50649 15.5 6.36842H14ZM6.75 3C6.75 2.86193 6.86193 2.75 7 2.75V1.25C6.0335 1.25 5.25 2.0335 5.25 3H6.75Z" fill="currentColor"/>
<path d="M2.25 6V21H3.75V6H2.25ZM4 22.75H16V21.25H4V22.75ZM6 4.25H4V5.75H6V4.25ZM17.75 21V19H16.25V21H17.75ZM16 22.75C16.9665 22.75 17.75 21.9665 17.75 21H16.25C16.25 21.1381 16.1381 21.25 16 21.25V22.75ZM2.25 21C2.25 21.9665 3.0335 22.75 4 22.75V21.25C3.86193 21.25 3.75 21.1381 3.75 21H2.25ZM3.75 6C3.75 5.86193 3.86193 5.75 4 5.75V4.25C3.0335 4.25 2.25 5.0335 2.25 6H3.75Z" fill="currentColor"/>
<path d="M13 14.5V9.5M13 9.5L11 11.547M13 9.5L15 11.547" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, g5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.22222 2.75H19.7778C20.5945 2.75 21.25 3.41177 21.25 4.22222V19.7778C21.25 20.5882 20.5945 21.25 19.7778 21.25H4.22222C3.40554 21.25 2.75 20.5882 2.75 19.7778V4.22222C2.75 3.41177 3.40554 2.75 4.22222 2.75Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
`, u5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22222 2H19.7778C21.0111 2 22 3 22 4.22222V19.7778C22 21 21.0111 22 19.7778 22H4.22222C2.98889 22 2 21 2 19.7778V4.22222C2 3 2.98889 2 4.22222 2ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8 14.6L7.6 12.2C7.15817 11.8686 6.53137 11.9582 6.2 12.4C5.86863 12.8418 5.95817 13.4686 6.4 13.8L10.4 16.8C10.8418 17.1314 11.4686 17.0418 11.8 16.6L17.8 8.6Z" fill="currentColor"/>
</svg>
`, M5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"/>
</svg>
`, w5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"/>
<circle cx="12" cy="12" r="6" fill="currentColor"/>
</svg>
`, H5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="currentColor"/>
</svg>
`, v5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2432 4.01702L2.21838 18.0047C1.45344 19.3381 2.41599 21 3.95316 21H20.0391C21.5779 21 22.5403 19.3347 21.7719 18.0014L13.7108 4.01364C12.9405 2.67698 11.0109 2.67886 10.2432 4.01702ZM12 8C12.5523 8 13 8.44771 13 9V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V9C11 8.44771 11.4477 8 12 8ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="currentColor"/>
</svg>
`, f5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 8C13 7.44771 12.5523 7 12 7C11.4477 7 11 7.44771 11 8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8ZM12 17C12.5523 17 13 16.5523 13 16V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16C11 16.5523 11.4477 17 12 17Z" fill="currentColor"/>
</svg>
`, V5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM16.7682 9.64018C17.1218 9.21591 17.0645 8.58534 16.6402 8.23178C16.2159 7.87821 15.5853 7.93554 15.2318 8.35982L10.9328 13.5186L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2929 15.7071C10.4916 15.9058 10.7646 16.0117 11.0453 15.999C11.326 15.9862 11.5884 15.856 11.7682 15.6402L16.7682 9.64018Z" fill="currentColor"/>
</svg>
`, Z5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 9C11.1548 9 10.5 9.66855 10.5 10.4561C10.5 11.0084 10.0523 11.4561 9.5 11.4561C8.94772 11.4561 8.5 11.0084 8.5 10.4561C8.5 8.53075 10.0838 7 12 7C13.9162 7 15.5 8.53075 15.5 10.4561C15.5 12.0017 14.46 13.4014 13 13.8503V14.25C13 14.8023 12.5523 15.25 12 15.25C11.4477 15.25 11 14.8023 11 14.25V13C11 12.4477 11.4477 12 12 12C12.7999 12 13.5 11.2893 13.5 10.4561C13.5 9.66855 12.8452 9 12 9ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="currentColor"/>
</svg>
`, L5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.24 7.76C15.07 6.59 13.54 6 12 6V12L7.76 16.24C10.1 18.58 13.9 18.58 16.25 16.24C18.59 13.9 18.59 10.1 16.24 7.76ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.24 7.76C15.07 6.59 13.54 6 12 6V12L7.76 16.24C10.1 18.58 13.9 18.58 16.25 16.24C18.59 13.9 18.59 10.1 16.24 7.76ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white"/>
</mask>
<g mask="url(#mask0)">
</g>
</svg>
`, x5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.42857 17.7586C7.40147 16.7673 6 14.6403 6 12.1765C6 8.7653 8.68629 6 12 6C15.3137 6 18 8.7653 18 12.1765C18 14.6404 16.5985 16.7673 14.5714 17.7586V19.6765C14.5714 20.4074 13.9958 21 13.2857 21H10.7143C10.0042 21 9.42857 20.4074 9.42857 19.6765V17.7586ZM6.85714 12.1765C6.85714 9.25261 9.15968 6.88235 12 6.88235C14.8403 6.88235 17.1429 9.25261 17.1429 12.1765C17.1429 14.364 15.8537 16.2436 14.0121 17.0503C13.9888 17.058 13.9664 17.0677 13.945 17.0791C13.9091 17.0942 13.873 17.109 13.8367 17.1233C13.2674 17.3474 12.6487 17.4706 12 17.4706C11.3513 17.4706 10.7326 17.3474 10.1633 17.1233C8.22868 16.3615 6.85714 14.4328 6.85714 12.1765ZM13.7143 18.0972C13.1711 18.2636 12.5957 18.3529 12 18.3529C11.4043 18.3529 10.8289 18.2636 10.2857 18.0972V19.6765C10.2857 19.9201 10.4776 20.1176 10.7143 20.1176H13.2857C13.5224 20.1176 13.7143 19.9201 13.7143 19.6765V18.0972Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
<path d="M3.5 12.5H2.5M21.5 12.5H20.5M18 5.70711L18.7071 5M5.70701 5.70711L4.99991 5M12 2.5V3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, b5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7421 18.3297C21.1533 16.6057 22 14.4017 22 12C22 6.47715 17.5228 2 12 2C9.59827 2 7.3943 2.84669 5.67028 4.25786C5.68278 4.26917 5.69506 4.28084 5.70711 4.29289L9.28392 7.86971C12.0524 7.09972 15.1015 7.53247 17.5547 9.16795C18.0142 9.4743 18.1384 10.0952 17.8321 10.5547C17.5257 11.0142 16.9048 11.1384 16.4453 10.832C14.8211 9.74927 12.8631 9.32661 10.9783 9.56406L12.6992 11.2849C13.6189 11.3769 14.537 11.6504 15.4472 12.1055C15.9412 12.3525 16.1414 12.9532 15.8944 13.4472C15.7768 13.6824 15.579 13.851 15.3507 13.9365L19.7071 18.2929C19.7192 18.3049 19.7308 18.3172 19.7421 18.3297ZM18.3297 19.7421C16.6057 21.1533 14.4017 22 12 22C6.47715 22 2 17.5228 2 12C2 9.59827 2.84669 7.3943 4.25786 5.67028C4.26917 5.68278 4.28084 5.69506 4.29289 5.70711L7.26382 8.67804C6.98471 8.82718 6.7115 8.99048 6.4453 9.16795C5.98577 9.4743 5.8616 10.0952 6.16795 10.5547C6.4743 11.0142 7.09517 11.1384 7.5547 10.8321C7.93939 10.5756 8.34281 10.3562 8.75955 10.1738L10.0956 11.5098C9.57956 11.6509 9.06492 11.8495 8.55279 12.1055C8.05881 12.3525 7.85858 12.9532 8.10557 13.4472C8.35255 13.9412 8.95323 14.1414 9.44721 13.8944C10.2518 13.4921 11.0454 13.2782 11.8384 13.2526L18.2929 19.7071C18.3049 19.7192 18.3172 19.7308 18.3297 19.7421ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="currentColor"/>
</svg>
`, y5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="6.66667" fill="currentColor"/>
</svg>
`, _5 = `<svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H33M1 15.2222H33M1 29.4444H33" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, k5 = `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.4375 24.5H6.5625C6.252 24.5 6 24.164 6 23.75C6 23.336 6.252 23 6.5625 23H23.4375C23.748 23 24 23.336 24 23.75C24 24.164 23.748 24.5 23.4375 24.5Z" fill="currentColor"/>
<path d="M23.4375 17H6.5625C6.252 17 6 16.664 6 16.25C6 15.836 6.252 15.5 6.5625 15.5H23.4375C23.748 15.5 24 15.836 24 16.25C24 16.664 23.748 17 23.4375 17Z" fill="currentColor"/>
<path d="M23.4375 9.5H6.5625C6.252 9.5 6 9.164 6 8.75C6 8.336 6.252 8 6.5625 8H23.4375C23.748 8 24 8.336 24 8.75C24 9.164 23.748 9.5 23.4375 9.5Z" fill="currentColor"/>
<path d="M2.25 11C1.0095 11 0 9.9905 0 8.75C0 7.5095 1.0095 6.5 2.25 6.5C3.4905 6.5 4.5 7.5095 4.5 8.75C4.5 9.9905 3.4905 11 2.25 11ZM2.25 8C1.836 8 1.5 8.336 1.5 8.75C1.5 9.164 1.836 9.5 2.25 9.5C2.664 9.5 3 9.164 3 8.75C3 8.336 2.664 8 2.25 8Z" fill="currentColor"/>
<path d="M2.25 18.5C1.0095 18.5 0 17.4905 0 16.25C0 15.0095 1.0095 14 2.25 14C3.4905 14 4.5 15.0095 4.5 16.25C4.5 17.4905 3.4905 18.5 2.25 18.5ZM2.25 15.5C1.836 15.5 1.5 15.836 1.5 16.25C1.5 16.664 1.836 17 2.25 17C2.664 17 3 16.664 3 16.25C3 15.836 2.664 15.5 2.25 15.5Z" fill="currentColor"/>
<path d="M2.25 26C1.0095 26 0 24.9905 0 23.75C0 22.5095 1.0095 21.5 2.25 21.5C3.4905 21.5 4.5 22.5095 4.5 23.75C4.5 24.9905 3.4905 26 2.25 26ZM2.25 23C1.836 23 1.5 23.336 1.5 23.75C1.5 24.164 1.836 24.5 2.25 24.5C2.664 24.5 3 24.164 3 23.75C3 23.336 2.664 23 2.25 23Z" fill="currentColor"/>
</svg>
`, $5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99998 20C9.84698 20 9.70198 19.93 9.60698 19.809C9.54998 19.736 8.18898 17.995 6.80998 15.424C5.99798 13.911 5.34998 12.425 4.88498 11.008C4.29798 9.221 4.00098 7.536 4.00098 6C4.00098 2.692 6.69298 0 10.001 0C13.309 0 16.001 2.692 16.001 6C16.001 7.536 15.703 9.22 15.117 11.008C14.652 12.425 14.004 13.911 13.192 15.424C11.812 17.995 10.452 19.736 10.395 19.809C10.3 19.93 10.155 20 10.002 20H9.99998ZM9.99998 1C7.24298 1 4.99998 3.243 4.99998 6C4.99998 9.254 6.46298 12.664 7.69098 14.951C8.59298 16.632 9.49998 17.965 9.99998 18.661C10.502 17.962 11.415 16.621 12.318 14.935C13.541 12.652 15 9.248 15 6C15 3.243 12.757 1 9.99998 1Z" fill="currentColor"/>
<path d="M10 9C8.346 9 7 7.654 7 6C7 4.346 8.346 3 10 3C11.654 3 13 4.346 13 6C13 7.654 11.654 9 10 9ZM10 4C8.897 4 8 4.897 8 6C8 7.103 8.897 8 10 8C11.103 8 12 7.103 12 6C12 4.897 11.103 4 10 4Z" fill="currentColor"/>
</svg>
`, B5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M16 20C14.229 20 12.345 19.498 10.4 18.508C8.607 17.595 6.836 16.288 5.278 14.728C3.72 13.168 2.415 11.395 1.503 9.601C0.515001 7.655 0.0130005 5.771 0.0130005 4C0.0130005 2.852 1.083 1.743 1.542 1.32C2.203 0.711 3.243 0 3.999 0C4.375 0 4.815 0.246 5.386 0.774C5.811 1.168 6.29 1.702 6.769 2.318C7.058 2.69 8.499 4.589 8.499 5.5C8.499 6.247 7.654 6.767 6.76 7.316C6.414 7.528 6.057 7.748 5.799 7.955C5.523 8.176 5.474 8.293 5.466 8.319C6.415 10.685 9.316 13.586 11.681 14.534C11.702 14.527 11.819 14.481 12.044 14.201C12.251 13.943 12.471 13.585 12.683 13.24C13.233 12.346 13.752 11.501 14.499 11.501C15.41 11.501 17.309 12.942 17.681 13.231C18.297 13.71 18.831 14.189 19.225 14.614C19.753 15.184 19.999 15.625 19.999 16.001C19.999 16.757 19.288 17.8 18.68 18.464C18.256 18.926 17.147 20.001 15.999 20.001L16 20ZM3.994 1C3.726 1.005 3.005 1.333 2.221 2.055C1.477 2.741 1.014 3.486 1.014 4C1.014 10.729 9.278 19 16 19C16.513 19 17.258 18.535 17.944 17.787C18.667 16.999 18.995 16.275 19 16.006C18.968 15.816 18.442 15.077 17.003 13.969C15.766 13.017 14.763 12.506 14.505 12.5C14.487 12.505 14.375 12.548 14.148 12.836C13.951 13.087 13.74 13.43 13.535 13.762C12.975 14.673 12.446 15.534 11.677 15.534C11.553 15.534 11.431 15.51 11.314 15.463C8.689 14.413 5.585 11.309 4.535 8.684C4.409 8.369 4.389 7.875 5.009 7.313C5.339 7.014 5.795 6.734 6.237 6.462C6.569 6.258 6.913 6.047 7.163 5.849C7.451 5.622 7.494 5.51 7.499 5.492C7.492 5.234 6.982 4.231 6.03 2.994C4.922 1.555 4.183 1.03 3.993 0.997L3.994 1Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`, A5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 14H16.5C17.327 14 18 13.327 18 12.5V4.5C18 3.673 17.327 3 16.5 3H3.5C2.673 3 2 3.673 2 4.5V12.5C2 13.327 2.673 14 3.5 14ZM3 4.5C3 4.224 3.224 4 3.5 4H16.5C16.776 4 17 4.224 17 4.5V12.5C17 12.776 16.776 13 16.5 13H3.5C3.224 13 3 12.776 3 12.5V4.5Z" fill="currentColor"/>
<path d="M19.5 15H0.5C0.224 15 0 15.224 0 15.5V16.5C0 17.327 0.673 18 1.5 18H18.5C19.327 18 20 17.327 20 16.5V15.5C20 15.224 19.776 15 19.5 15ZM18.5 17H1.5C1.224 17 1 16.776 1 16.5V16H19V16.5C19 16.776 18.776 17 18.5 17Z" fill="currentColor"/>
</svg>
`, z5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 20H1.5C0.673 20 0 19.327 0 18.5V2.5C0 1.673 0.673 1 1.5 1H14.5C15.327 1 16 1.673 16 2.5V4.5C16 4.776 15.776 5 15.5 5C15.224 5 15 4.776 15 4.5V2.5C15 2.224 14.776 2 14.5 2H1.5C1.224 2 1 2.224 1 2.5V18.5C1 18.776 1.224 19 1.5 19H14.5C14.776 19 15 18.776 15 18.5V14.5C15 14.224 15.224 14 15.5 14C15.776 14 16 14.224 16 14.5V18.5C16 19.327 15.327 20 14.5 20Z" fill="currentColor"/>
<path d="M10.5 5H3.5C3.224 5 3 4.776 3 4.5C3 4.224 3.224 4 3.5 4H10.5C10.776 4 11 4.224 11 4.5C11 4.776 10.776 5 10.5 5Z" fill="currentColor"/>
<path d="M12.5 7H3.5C3.224 7 3 6.776 3 6.5C3 6.224 3.224 6 3.5 6H12.5C12.776 6 13 6.224 13 6.5C13 6.776 12.776 7 12.5 7Z" fill="currentColor"/>
<path d="M11.5 9H3.5C3.224 9 3 8.776 3 8.5C3 8.224 3.224 8 3.5 8H11.5C11.776 8 12 8.224 12 8.5C12 8.776 11.776 9 11.5 9Z" fill="currentColor"/>
<path d="M8.5 11H3.5C3.224 11 3 10.776 3 10.5C3 10.224 3.224 10 3.5 10H8.5C8.776 10 9 10.224 9 10.5C9 10.776 8.776 11 8.5 11Z" fill="currentColor"/>
<path d="M8.50001 17C8.36601 17 8.23501 16.946 8.14001 16.847C8.01601 16.719 7.97001 16.534 8.01901 16.363L9.01901 12.863C9.04201 12.781 9.08601 12.707 9.14601 12.647L16.646 5.14698C16.841 4.95198 17.158 4.95198 17.353 5.14698L19.853 7.64698C20.047 7.84098 20.048 8.15498 19.856 8.35098L12.356 15.992C12.291 16.058 12.209 16.105 12.118 16.127L8.61801 16.986C8.57901 16.996 8.53901 17 8.49901 17H8.50001ZM9.94501 13.262L9.21701 15.809L11.742 15.189L18.795 8.00298L16.999 6.20698L9.94401 13.262H9.94501Z" fill="currentColor"/>
<path d="M6.5 17H3.5C3.224 17 3 16.776 3 16.5C3 16.224 3.224 16 3.5 16H6.5C6.776 16 7 16.224 7 16.5C7 16.776 6.776 17 6.5 17Z" fill="currentColor"/>
</svg>
`, S5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 14H8.5C8.224 14 8 13.776 8 13.5V9.5C8 9.224 8.224 9 8.5 9H14.5C14.776 9 15 9.224 15 9.5V13.5C15 13.776 14.776 14 14.5 14ZM9 13H14V10H9V13Z" fill="currentColor"/>
<path d="M6.5 10H3.5C3.224 10 3 9.776 3 9.5C3 9.224 3.224 9 3.5 9H6.5C6.776 9 7 9.224 7 9.5C7 9.776 6.776 10 6.5 10Z" fill="currentColor"/>
<path d="M6.5 12H3.5C3.224 12 3 11.776 3 11.5C3 11.224 3.224 11 3.5 11H6.5C6.776 11 7 11.224 7 11.5C7 11.776 6.776 12 6.5 12Z" fill="currentColor"/>
<path d="M6.5 14H3.5C3.224 14 3 13.776 3 13.5C3 13.224 3.224 13 3.5 13H6.5C6.776 13 7 13.224 7 13.5C7 13.776 6.776 14 6.5 14Z" fill="currentColor"/>
<path d="M19.5 6C19.224 6 19 6.224 19 6.5V15.5C19 15.776 18.776 16 18.5 16H1.5C1.224 16 1 15.776 1 15.5V5.5C1 5.224 1.224 5 1.5 5H16.5C16.776 5 17 5.224 17 5.5V14.5C17 14.776 17.224 15 17.5 15C17.776 15 18 14.776 18 14.5V5.5C18 4.673 17.327 4 16.5 4H1.5C0.673 4 0 4.673 0 5.5V15.5C0 16.327 0.673 17 1.5 17H18.5C19.327 17 20 16.327 20 15.5V6.5C20 6.224 19.776 6 19.5 6Z" fill="currentColor"/>
<path d="M14.5 8H3.5C3.224 8 3 7.776 3 7.5C3 7.224 3.224 7 3.5 7H14.5C14.776 7 15 7.224 15 7.5C15 7.776 14.776 8 14.5 8Z" fill="currentColor"/>
</svg>
`, I5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M19.5 20H0.5C0.224 20 0 19.776 0 19.5V0.499979C0 0.267979 0.159 0.0669791 0.385 0.0129791C0.611 -0.0410209 0.843 0.0689791 0.947 0.275979L1.947 2.27598C2.07 2.52298 1.97 2.82298 1.723 2.94698C1.476 3.07098 1.176 2.96998 1.052 2.72298L0.999 2.61698V18.999H17.381L17.275 18.946C17.028 18.823 16.928 18.522 17.051 18.275C17.174 18.028 17.475 17.928 17.722 18.051L19.722 19.051C19.929 19.155 20.038 19.387 19.985 19.613C19.932 19.839 19.73 19.998 19.498 19.998L19.5 20Z" fill="currentColor"/>
<path d="M17 4.5C17 3.673 16.327 3 15.5 3C14.673 3 14 3.673 14 4.5C14 4.98 14.227 5.408 14.579 5.682L12.473 12C12.193 12.005 11.932 12.087 11.709 12.226L8.91698 9.992C8.97098 9.838 9.00098 9.672 9.00098 9.499C9.00098 8.672 8.32798 7.999 7.50098 7.999C6.67398 7.999 6.00098 8.672 6.00098 9.499C6.00098 9.903 6.16198 10.269 6.42198 10.539L4.68598 14.011C4.62498 14.003 4.56398 13.999 4.50098 13.999C3.67398 13.999 3.00098 14.672 3.00098 15.499C3.00098 16.326 3.67398 16.999 4.50098 16.999C5.32798 16.999 6.00098 16.326 6.00098 15.499C6.00098 15.095 5.83998 14.729 5.57998 14.459L7.31598 10.987C7.37698 10.995 7.43798 10.999 7.50098 10.999C7.79098 10.999 8.06298 10.916 8.29198 10.772L11.084 13.006C11.03 13.16 11 13.326 11 13.499C11 14.326 11.673 14.999 12.5 14.999C13.327 14.999 14 14.326 14 13.499C14 13.019 13.773 12.591 13.421 12.316L15.527 5.998C16.341 5.983 17 5.317 17 4.499V4.5ZM15.5 4C15.776 4 16 4.224 16 4.5C16 4.776 15.776 5 15.5 5C15.224 5 15 4.776 15 4.5C15 4.224 15.224 4 15.5 4ZM7.49998 9C7.77598 9 7.99998 9.224 7.99998 9.5C7.99998 9.776 7.77598 10 7.49998 10C7.22398 10 6.99998 9.776 6.99998 9.5C6.99998 9.224 7.22398 9 7.49998 9ZM4.49998 16C4.22398 16 3.99998 15.776 3.99998 15.5C3.99998 15.224 4.22398 15 4.49998 15C4.77598 15 4.99998 15.224 4.99998 15.5C4.99998 15.776 4.77598 16 4.49998 16ZM12.5 14C12.224 14 12 13.776 12 13.5C12 13.224 12.224 13 12.5 13C12.776 13 13 13.224 13 13.5C13 13.776 12.776 14 12.5 14Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`, E5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V3.5C20 3.224 19.776 3 19.5 3H16H11H6H0.5C0.224 3 0 3.224 0 3.5V9.5C0 9.776 0.224 10 0.5 10H2V16H1.5C1.224 16 1 16.224 1 16.5C1 16.776 1.224 17 1.5 17H5.5C5.776 17 6 16.776 6 16.5C6 16.224 5.776 16 5.5 16H5V13H15V16H14.5C14.224 16 14 16.224 14 16.5C14 16.776 14.224 17 14.5 17H18.5C18.776 17 19 16.776 19 16.5C19 16.224 18.776 16 18.5 16H18V10H19.5C19.776 10 20 9.776 20 9.5V5ZM19 4.793L14.793 9H11.207L16.207 4H19V4.793ZM6.207 9L11.207 4H14.793L9.793 9H6.207ZM1.207 9L6.207 4H9.793L4.793 9H1.207ZM4.793 4L1 7.793V4H4.793ZM3 16V10H4V16H3ZM5 12V10H15V12H5ZM17 16H16V10H17V16ZM16.207 9L19 6.207V9H16.207Z" fill="currentColor"/>
</svg>
`, P5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50001 14C6.37201 14 6.24401 13.951 6.14601 13.854C5.95101 13.659 5.95101 13.342 6.14601 13.147L13.146 6.14698C13.341 5.95198 13.658 5.95198 13.853 6.14698C14.048 6.34198 14.048 6.65898 13.853 6.85398L6.85301 13.854C6.75501 13.952 6.62701 14 6.49901 14H6.50001Z" fill="currentColor"/>
<path d="M14 11C13.815 11 13.628 10.99 13.445 10.969C13.171 10.939 12.973 10.692 13.003 10.417C13.033 10.142 13.281 9.94402 13.555 9.97502C13.702 9.99102 13.851 9.99902 14 9.99902C16.206 9.99902 18 8.20502 18 5.99902C18 3.79302 16.206 1.99902 14 1.99902C11.794 1.99902 10 3.79302 10 5.99902C10 6.14802 10.008 6.29702 10.024 6.44402C10.054 6.71802 9.856 6.96602 9.582 6.99602C9.308 7.02602 9.06 6.82802 9.03 6.55402C9.01 6.37102 9 6.18402 9 5.99902C9 3.24202 11.243 0.999023 14 0.999023C16.757 0.999023 19 3.24202 19 5.99902C19 8.75602 16.757 10.999 14 10.999V11Z" fill="currentColor"/>
<path d="M6 19C3.243 19 1 16.757 1 14C1 11.243 3.243 9 6 9C6.185 9 6.372 9.01 6.555 9.031C6.829 9.061 7.027 9.308 6.997 9.583C6.967 9.858 6.72 10.055 6.445 10.025C6.298 10.009 6.149 10.001 6 10.001C3.794 10.001 2 11.795 2 14.001C2 16.207 3.794 18.001 6 18.001C8.206 18.001 10 16.207 10 14.001C10 13.853 9.992 13.703 9.976 13.556C9.946 13.282 10.144 13.034 10.418 13.004C10.692 12.974 10.94 13.172 10.97 13.446C10.99 13.629 11.001 13.816 11.001 14.001C11.001 16.758 8.758 19.001 6.001 19.001L6 19Z" fill="currentColor"/>
</svg>
`, q5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 17H1.5C0.673 17 0 16.327 0 15.5V4.5C0 3.673 0.673 3 1.5 3H18.5C19.327 3 20 3.673 20 4.5V15.5C20 16.327 19.327 17 18.5 17ZM1.5 4C1.224 4 1 4.224 1 4.5V15.5C1 15.776 1.224 16 1.5 16H18.5C18.776 16 19 15.776 19 15.5V4.5C19 4.224 18.776 4 18.5 4H1.5Z" fill="currentColor"/>
<path d="M8.501 14C8.501 14 8.501 14 8.5 14H3.5C3.224 14 3 13.776 3 13.5C3 13.434 3.011 12.839 3.388 12.235C3.74 11.672 4.479 11 6 11C7.521 11 8.259 11.672 8.612 12.235C8.95 12.776 8.994 13.309 9 13.462C9.001 13.474 9.001 13.487 9.001 13.5C9.001 13.776 8.777 14 8.501 14ZM4.117 13H7.883C7.848 12.914 7.802 12.823 7.743 12.733C7.421 12.246 6.835 12 6 12C5.165 12 4.579 12.247 4.257 12.733C4.198 12.823 4.152 12.913 4.117 13Z" fill="currentColor"/>
<path d="M16.5 8H11.5C11.224 8 11 7.776 11 7.5C11 7.224 11.224 7 11.5 7H16.5C16.776 7 17 7.224 17 7.5C17 7.776 16.776 8 16.5 8Z" fill="currentColor"/>
<path d="M15.5 10H11.5C11.224 10 11 9.776 11 9.5C11 9.224 11.224 9 11.5 9H15.5C15.776 9 16 9.224 16 9.5C16 9.776 15.776 10 15.5 10Z" fill="currentColor"/>
<path d="M15.5 12H11.5C11.224 12 11 11.776 11 11.5C11 11.224 11.224 11 11.5 11H15.5C15.776 11 16 11.224 16 11.5C16 11.776 15.776 12 15.5 12Z" fill="currentColor"/>
<path d="M6 10C4.897 10 4 9.103 4 8C4 6.897 4.897 6 6 6C7.103 6 8 6.897 8 8C8 9.103 7.103 10 6 10ZM6 7C5.449 7 5 7.449 5 8C5 8.551 5.449 9 6 9C6.551 9 7 8.551 7 8C7 7.449 6.551 7 6 7Z" fill="currentColor"/>
<path d="M16.5 14H11.5C11.224 14 11 13.776 11 13.5C11 13.224 11.224 13 11.5 13H16.5C16.776 13 17 13.224 17 13.5C17 13.776 16.776 14 16.5 14Z" fill="currentColor"/>
</svg>
`, O5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 20H9.5C9.224 20 9 19.776 9 19.5C9 19.224 9.224 19 9.5 19H10.5C10.776 19 11 19.224 11 19.5C11 19.776 10.776 20 10.5 20Z" fill="currentColor"/>
<path d="M10 0C6.692 0 4 2.692 4 6C4 8.114 5.014 9.828 5.057 9.9C5.323 10.344 5.702 11.128 5.883 11.612L6.681 13.739C6.802 14.061 7.034 14.352 7.322 14.573C7.121 14.828 7 15.15 7 15.5C7 15.884 7.145 16.234 7.383 16.5C7.145 16.766 7 17.116 7 17.5C7 18.327 7.673 19 8.5 19H11.5C12.327 19 13 18.327 13 17.5C13 17.116 12.855 16.766 12.617 16.5C12.855 16.234 13 15.884 13 15.5C13 15.15 12.879 14.828 12.678 14.573C12.966 14.352 13.198 14.062 13.319 13.739L14.116 11.612C14.298 11.128 14.676 10.344 14.942 9.9C14.985 9.828 16 8.114 16 6C16 2.692 13.308 0 10 0V0ZM11.5 18H8.5C8.224 18 8 17.776 8 17.5C8 17.224 8.224 17 8.5 17H11.5C11.776 17 12 17.224 12 17.5C12 17.776 11.776 18 11.5 18ZM12 15.5C12 15.776 11.776 16 11.5 16H8.5C8.224 16 8 15.776 8 15.5C8 15.224 8.224 15 8.5 15H11.5C11.776 15 12 15.224 12 15.5ZM14.085 9.385C13.788 9.879 13.382 10.721 13.18 11.261L12.383 13.388C12.263 13.708 11.842 14 11.5 14H8.5C8.158 14 7.737 13.708 7.617 13.388L6.819 11.261C6.617 10.721 6.211 9.88 5.914 9.385C5.905 9.37 5 7.84 5 6C5 3.243 7.243 1 10 1C12.757 1 15 3.243 15 6C15 7.829 14.094 9.371 14.085 9.385Z" fill="currentColor"/>
</svg>
`, j5 = `<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 0H1.5C0.673 0 0 0.673 0 1.5V10.5C0 11.327 0.673 12 1.5 12H17.5C18.327 12 19 11.327 19 10.5V1.5C19 0.673 18.327 0 17.5 0ZM17.5 1C17.53 1 17.558 1.003 17.587 1.008L10.055 6.029C9.765 6.222 9.236 6.222 8.946 6.029L1.414 1.008C1.442 1.003 1.471 1 1.501 1H17.501H17.5ZM17.5 11H1.5C1.224 11 1 10.776 1 10.5V1.934L8.391 6.861C8.702 7.068 9.101 7.172 9.5 7.172C9.899 7.172 10.298 7.068 10.609 6.861L18 1.934V10.5C18 10.776 17.776 11 17.5 11Z" fill="currentColor"/>
</svg>
`, U5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 4H17V1.5C17 0.673 16.327 0 15.5 0H4.5C3.673 0 3 0.673 3 1.5V4H1.5C0.673 4 0 4.673 0 5.5V14.5C0 15.327 0.673 16 1.5 16H3V18.5C3 19.327 3.673 20 4.5 20H15.5C16.327 20 17 19.327 17 18.5V16H18.5C19.327 16 20 15.327 20 14.5V5.5C20 4.673 19.327 4 18.5 4ZM4 1.5C4 1.224 4.224 1 4.5 1H15.5C15.776 1 16 1.224 16 1.5V4H4V1.5ZM15.5 19H4.5C4.224 19 4 18.776 4 18.5V12H16V18.5C16 18.776 15.776 19 15.5 19ZM19 14.5C19 14.776 18.776 15 18.5 15H17V12H17.5C17.776 12 18 11.776 18 11.5C18 11.224 17.776 11 17.5 11H2.5C2.224 11 2 11.224 2 11.5C2 11.776 2.224 12 2.5 12H3V15H1.5C1.224 15 1 14.776 1 14.5V5.5C1 5.224 1.224 5 1.5 5H18.5C18.776 5 19 5.224 19 5.5V14.5Z" fill="currentColor"/>
<path d="M14.5 14H5.5C5.224 14 5 13.776 5 13.5C5 13.224 5.224 13 5.5 13H14.5C14.776 13 15 13.224 15 13.5C15 13.776 14.776 14 14.5 14Z" fill="currentColor"/>
<path d="M14.5 16H5.5C5.224 16 5 15.776 5 15.5C5 15.224 5.224 15 5.5 15H14.5C14.776 15 15 15.224 15 15.5C15 15.776 14.776 16 14.5 16Z" fill="currentColor"/>
<path d="M14.5 18H5.5C5.224 18 5 17.776 5 17.5C5 17.224 5.224 17 5.5 17H14.5C14.776 17 15 17.224 15 17.5C15 17.776 14.776 18 14.5 18Z" fill="currentColor"/>
<path d="M16.5 9C15.673 9 15 8.327 15 7.5C15 6.673 15.673 6 16.5 6C17.327 6 18 6.673 18 7.5C18 8.327 17.327 9 16.5 9ZM16.5 7C16.224 7 16 7.224 16 7.5C16 7.776 16.224 8 16.5 8C16.776 8 17 7.776 17 7.5C17 7.224 16.776 7 16.5 7Z" fill="currentColor"/>
</svg>
`, N5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 20H2.5C1.673 20 1 19.327 1 18.5V1.5C1 0.673 1.673 0 2.5 0H16.5C17.327 0 18 0.673 18 1.5V18.5C18 19.327 17.327 20 16.5 20ZM2.5 1C2.224 1 2 1.224 2 1.5V18.5C2 18.776 2.224 19 2.5 19H16.5C16.776 19 17 18.776 17 18.5V1.5C17 1.224 16.776 1 16.5 1H2.5Z" fill="currentColor"/>
<path d="M15.5 7H3.5C3.224 7 3 6.776 3 6.5V2.5C3 2.224 3.224 2 3.5 2H15.5C15.776 2 16 2.224 16 2.5V6.5C16 6.776 15.776 7 15.5 7ZM4 6H15V3H4V6Z" fill="currentColor"/>
<path d="M15.5 8H3.5C3.224 8 3 8.224 3 8.5V17.5C3 17.776 3.224 18 3.5 18H15.5C15.776 18 16 17.776 16 17.5V8.5C16 8.224 15.776 8 15.5 8ZM15 11H13V9H15V11ZM7 12H9V14H7V12ZM6 14H4V12H6V14ZM7 11V9H9V11H7ZM9 15V17H7V15H9ZM10 15H12V17H10V15ZM12 14H10V12H12V14ZM10 11V9H12V11H10ZM6 9V11H4V9H6ZM4 15H6V17H4V15ZM13 17V12H15V17H13Z" fill="currentColor"/>
</svg>
`, T5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 19C15.122 19 14 17.878 14 16.5C14 15.122 15.122 14 16.5 14C17.878 14 19 15.122 19 16.5C19 17.878 17.878 19 16.5 19ZM16.5 15C15.673 15 15 15.673 15 16.5C15 17.327 15.673 18 16.5 18C17.327 18 18 17.327 18 16.5C18 15.673 17.327 15 16.5 15Z" fill="currentColor"/>
<path d="M9.5 19C8.122 19 7 17.878 7 16.5C7 15.122 8.122 14 9.5 14C10.878 14 12 15.122 12 16.5C12 17.878 10.878 19 9.5 19ZM9.5 15C8.673 15 8 15.673 8 16.5C8 17.327 8.673 18 9.5 18C10.327 18 11 17.327 11 16.5C11 15.673 10.327 15 9.5 15Z" fill="currentColor"/>
<path d="M2.5 19C1.122 19 0 17.878 0 16.5C0 15.122 1.122 14 2.5 14C3.878 14 5 15.122 5 16.5C5 17.878 3.878 19 2.5 19ZM2.5 15C1.673 15 1 15.673 1 16.5C1 17.327 1.673 18 2.5 18C3.327 18 4 17.327 4 16.5C4 15.673 3.327 15 2.5 15Z" fill="currentColor"/>
<path d="M16.5 12C15.122 12 14 10.878 14 9.5C14 8.122 15.122 7 16.5 7C17.878 7 19 8.122 19 9.5C19 10.878 17.878 12 16.5 12ZM16.5 8C15.673 8 15 8.673 15 9.5C15 10.327 15.673 11 16.5 11C17.327 11 18 10.327 18 9.5C18 8.673 17.327 8 16.5 8Z" fill="currentColor"/>
<path d="M9.5 12C8.122 12 7 10.878 7 9.5C7 8.122 8.122 7 9.5 7C10.878 7 12 8.122 12 9.5C12 10.878 10.878 12 9.5 12ZM9.5 8C8.673 8 8 8.673 8 9.5C8 10.327 8.673 11 9.5 11C10.327 11 11 10.327 11 9.5C11 8.673 10.327 8 9.5 8Z" fill="currentColor"/>
<path d="M2.5 12C1.122 12 0 10.878 0 9.5C0 8.122 1.122 7 2.5 7C3.878 7 5 8.122 5 9.5C5 10.878 3.878 12 2.5 12ZM2.5 8C1.673 8 1 8.673 1 9.5C1 10.327 1.673 11 2.5 11C3.327 11 4 10.327 4 9.5C4 8.673 3.327 8 2.5 8Z" fill="currentColor"/>
<path d="M16.5 5C15.122 5 14 3.878 14 2.5C14 1.122 15.122 0 16.5 0C17.878 0 19 1.122 19 2.5C19 3.878 17.878 5 16.5 5ZM16.5 1C15.673 1 15 1.673 15 2.5C15 3.327 15.673 4 16.5 4C17.327 4 18 3.327 18 2.5C18 1.673 17.327 1 16.5 1Z" fill="currentColor"/>
<path d="M9.5 5C8.122 5 7 3.878 7 2.5C7 1.122 8.122 0 9.5 0C10.878 0 12 1.122 12 2.5C12 3.878 10.878 5 9.5 5ZM9.5 1C8.673 1 8 1.673 8 2.5C8 3.327 8.673 4 9.5 4C10.327 4 11 3.327 11 2.5C11 1.673 10.327 1 9.5 1Z" fill="currentColor"/>
<path d="M2.5 5C1.122 5 0 3.878 0 2.5C0 1.122 1.122 0 2.5 0C3.878 0 5 1.122 5 2.5C5 3.878 3.878 5 2.5 5ZM2.5 1C1.673 1 1 1.673 1 2.5C1 3.327 1.673 4 2.5 4C3.327 4 4 3.327 4 2.5C4 1.673 3.327 1 2.5 1Z" fill="currentColor"/>
</svg>
`, D5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 18H4.5C4.224 18 4 17.776 4 17.5C4 17.224 4.224 17 4.5 17H14.5C14.776 17 15 17.224 15 17.5C15 17.776 14.776 18 14.5 18Z" fill="currentColor"/>
<path d="M16.5 3C16.224 3 16 3.224 16 3.5V18.5C16 18.776 15.776 19 15.5 19H4.5C3.673 19 3 18.327 3 17.5C3 16.673 3.673 16 4.5 16H13.5C14.327 16 15 15.327 15 14.5V2.5C15 1.673 14.327 1 13.5 1H3.5C2.673 1 2 1.673 2 2.5V17.5C2 18.878 3.122 20 4.5 20H15.5C16.327 20 17 19.327 17 18.5V3.5C17 3.224 16.776 3 16.5 3ZM3.5 2H13.5C13.776 2 14 2.224 14 2.5V14.5C14 14.776 13.776 15 13.5 15H4.5C3.938 15 3.418 15.187 3 15.501V2.5C3 2.224 3.224 2 3.5 2Z" fill="currentColor"/>
</svg>
`, R5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 14C7.57 14 6 12.43 6 10.5V4.5C6 2.57 7.57 1 9.5 1C11.43 1 13 2.57 13 4.5V10.5C13 12.43 11.43 14 9.5 14ZM9.5 2C8.122 2 7 3.122 7 4.5V10.5C7 11.878 8.122 13 9.5 13C10.878 13 12 11.878 12 10.5V4.5C12 3.122 10.878 2 9.5 2Z" fill="currentColor"/>
<path d="M16 10.5C16 10.224 15.776 10 15.5 10C15.224 10 15 10.224 15 10.5C15 13.533 12.533 16 9.5 16C6.467 16 4 13.533 4 10.5C4 10.224 3.776 10 3.5 10C3.224 10 3 10.224 3 10.5C3 13.916 5.649 16.725 9 16.981V19H7.5C7.224 19 7 19.224 7 19.5C7 19.776 7.224 20 7.5 20H11.5C11.776 20 12 19.776 12 19.5C12 19.224 11.776 19 11.5 19H10V16.981C13.351 16.725 16 13.916 16 10.5Z" fill="currentColor"/>
</svg>
`, W5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 20H3.5C2.673 20 2 19.327 2 18.5V2.5C2 1.673 2.673 1 3.5 1H16.5C17.327 1 18 1.673 18 2.5V18.5C18 19.327 17.327 20 16.5 20ZM3.5 2C3.224 2 3 2.224 3 2.5V18.5C3 18.776 3.224 19 3.5 19H16.5C16.776 19 17 18.776 17 18.5V2.5C17 2.224 16.776 2 16.5 2H3.5Z" fill="currentColor"/>
<path d="M12.5 5H5.5C5.224 5 5 4.776 5 4.5C5 4.224 5.224 4 5.5 4H12.5C12.776 4 13 4.224 13 4.5C13 4.776 12.776 5 12.5 5Z" fill="currentColor"/>
<path d="M14.5 7H5.5C5.224 7 5 6.776 5 6.5C5 6.224 5.224 6 5.5 6H14.5C14.776 6 15 6.224 15 6.5C15 6.776 14.776 7 14.5 7Z" fill="currentColor"/>
<path d="M14.5 9H5.5C5.224 9 5 8.776 5 8.5C5 8.224 5.224 8 5.5 8H14.5C14.776 8 15 8.224 15 8.5C15 8.776 14.776 9 14.5 9Z" fill="currentColor"/>
<path d="M10.5 11H5.5C5.224 11 5 10.776 5 10.5C5 10.224 5.224 10 5.5 10H10.5C10.776 10 11 10.224 11 10.5C11 10.776 10.776 11 10.5 11Z" fill="currentColor"/>
<path d="M14.5 15H5.5C5.224 15 5 14.776 5 14.5C5 14.224 5.224 14 5.5 14H14.5C14.776 14 15 14.224 15 14.5C15 14.776 14.776 15 14.5 15Z" fill="currentColor"/>
<path d="M12.5 17H5.5C5.224 17 5 16.776 5 16.5C5 16.224 5.224 16 5.5 16H12.5C12.776 16 13 16.224 13 16.5C13 16.776 12.776 17 12.5 17Z" fill="currentColor"/>
</svg>
`, J5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.63099 19.702C7.58999 19.702 7.54799 19.697 7.50599 19.686C6.60799 19.455 5.74499 19.099 4.94199 18.627C4.70899 18.49 4.62699 18.193 4.75599 17.956C4.91499 17.664 4.99899 17.334 4.99899 16.999C4.99899 15.896 4.10199 14.999 2.99899 14.999C2.66499 14.999 2.33399 15.083 2.04199 15.242C1.80499 15.371 1.50799 15.289 1.37099 15.056C0.898988 14.252 0.542988 13.39 0.311988 12.492C0.246988 12.238 0.388988 11.977 0.636988 11.894C1.45099 11.62 1.99899 10.858 1.99899 9.99899C1.99899 9.13999 1.45199 8.37799 0.636988 8.10399C0.388988 8.01999 0.246988 7.75999 0.311988 7.50599C0.542988 6.60799 0.898988 5.74499 1.37099 4.94199C1.50799 4.70899 1.80499 4.62699 2.04199 4.75599C2.33299 4.91499 2.66399 4.99899 2.99899 4.99899C4.10199 4.99899 4.99899 4.10199 4.99899 2.99899C4.99899 2.66499 4.91499 2.33399 4.75599 2.04199C4.62699 1.80499 4.70899 1.50799 4.94199 1.37099C5.74599 0.898988 6.60799 0.542988 7.50599 0.311988C7.75999 0.246988 8.02099 0.388988 8.10399 0.636988C8.37799 1.45099 9.13999 1.99899 9.99899 1.99899C10.858 1.99899 11.62 1.45199 11.894 0.636988C11.978 0.388988 12.239 0.246988 12.492 0.311988C13.39 0.542988 14.253 0.898988 15.056 1.37099C15.289 1.50799 15.371 1.80499 15.242 2.04199C15.083 2.33399 14.999 2.66399 14.999 2.99899C14.999 4.10199 15.896 4.99899 16.999 4.99899C17.333 4.99899 17.664 4.91499 17.956 4.75599C18.193 4.62699 18.49 4.70899 18.627 4.94199C19.099 5.74599 19.455 6.60799 19.686 7.50599C19.751 7.75999 19.609 8.02099 19.361 8.10399C18.547 8.37799 17.999 9.13999 17.999 9.99899C17.999 10.858 18.546 11.62 19.361 11.894C19.609 11.978 19.751 12.238 19.686 12.492C19.455 13.39 19.099 14.253 18.627 15.056C18.49 15.289 18.193 15.371 17.956 15.242C17.664 15.083 17.334 14.999 16.999 14.999C15.896 14.999 14.999 15.896 14.999 16.999C14.999 17.333 15.083 17.664 15.242 17.956C15.371 18.193 15.289 18.49 15.056 18.627C14.252 19.099 13.39 19.455 12.492 19.686C12.238 19.751 11.977 19.609 11.894 19.361C11.62 18.547 10.858 17.999 9.99899 17.999C9.13999 17.999 8.37799 18.546 8.10399 19.361C8.03399 19.568 7.83999 19.702 7.62999 19.702H7.63099ZM9.99999 17C11.127 17 12.142 17.628 12.655 18.602C13.175 18.441 13.681 18.233 14.165 17.98C14.057 17.666 14.001 17.334 14.001 17C14.001 15.346 15.347 14 17.001 14C17.335 14 17.667 14.056 17.981 14.164C18.234 13.68 18.443 13.175 18.603 12.654C17.629 12.142 17.001 11.127 17.001 9.99899C17.001 8.87099 17.629 7.85699 18.603 7.34399C18.442 6.82399 18.234 6.31799 17.981 5.83399C17.667 5.94199 17.335 5.99799 17.001 5.99799C15.347 5.99799 14.001 4.65199 14.001 2.99799C14.001 2.66399 14.057 2.33199 14.165 2.01799C13.681 1.76499 13.176 1.55599 12.655 1.39599C12.143 2.36999 11.128 2.99799 9.99999 2.99799C8.87199 2.99799 7.85799 2.36999 7.34499 1.39599C6.82499 1.55599 6.31899 1.76499 5.83499 2.01799C5.94299 2.33199 5.99899 2.66399 5.99899 2.99799C5.99899 4.65199 4.65299 5.99799 2.99899 5.99799C2.66499 5.99799 2.33299 5.94199 2.01899 5.83399C1.76599 6.31799 1.55699 6.82299 1.39699 7.34399C2.37099 7.85599 2.99899 8.87099 2.99899 9.99899C2.99899 11.127 2.37099 12.141 1.39699 12.654C1.55699 13.174 1.76599 13.68 2.01899 14.164C2.33299 14.056 2.66499 14 2.99899 14C4.65299 14 5.99899 15.346 5.99899 17C5.99899 17.334 5.94299 17.666 5.83499 17.98C6.31899 18.233 6.82399 18.442 7.34499 18.602C7.85699 17.628 8.87199 17 9.99999 17Z" fill="currentColor"/>
<path d="M10 13C8.346 13 7 11.654 7 10C7 8.346 8.346 7 10 7C11.654 7 13 8.346 13 10C13 11.654 11.654 13 10 13ZM10 8C8.897 8 8 8.897 8 10C8 11.103 8.897 12 10 12C11.103 12 12 11.103 12 10C12 8.897 11.103 8 10 8Z" fill="currentColor"/>
</svg>
`, F5 = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.79078 9.40553C7.46246 9.15298 6.99158 9.2144 6.73903 9.54272C6.48648 9.87103 6.5479 10.3419 6.87621 10.5945L7.79078 9.40553ZM16.0002 16.6667L15.5429 17.2611C15.8125 17.4685 16.1879 17.4685 16.4574 17.2611L16.0002 16.6667ZM25.1241 10.5945C25.4524 10.3419 25.5138 9.87103 25.2613 9.54272C25.0087 9.2144 24.5379 9.15298 24.2095 9.40553L25.1241 10.5945ZM2.5835 7.33333V24.6666H4.0835V7.33333H2.5835ZM4.66683 26.75H27.3334V25.25H4.66683V26.75ZM29.4167 24.6666V7.33333H27.9167V24.6666H29.4167ZM27.3334 5.25H4.66683V6.75H27.3334V5.25ZM29.4167 7.33333C29.4167 6.18274 28.484 5.25 27.3334 5.25V6.75C27.6555 6.75 27.9167 7.01117 27.9167 7.33333H29.4167ZM27.3334 26.75C28.484 26.75 29.4167 25.8172 29.4167 24.6666H27.9167C27.9167 24.9888 27.6555 25.25 27.3334 25.25V26.75ZM2.5835 24.6666C2.5835 25.8172 3.51624 26.75 4.66683 26.75V25.25C4.34466 25.25 4.0835 24.9888 4.0835 24.6666H2.5835ZM4.0835 7.33333C4.0835 7.01117 4.34466 6.75 4.66683 6.75V5.25C3.51624 5.25 2.5835 6.18274 2.5835 7.33333H4.0835ZM6.87621 10.5945L15.5429 17.2611L16.4574 16.0722L7.79078 9.40553L6.87621 10.5945ZM16.4574 17.2611L25.1241 10.5945L24.2095 9.40553L15.5429 16.0722L16.4574 17.2611Z" fill="currentColor"/>
</svg>
`, K5 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM5 9.36111C4.58579 9.36111 4.25 9.6969 4.25 10.1111C4.25 10.5253 4.58579 10.8611 5 10.8611H13.7449L11.1363 13.4697C10.8434 13.7626 10.8434 14.2374 11.1363 14.5303C11.4292 14.8232 11.9041 14.8232 12.197 14.5303L16.0859 10.6414C16.3788 10.3485 16.3788 9.87367 16.0859 9.58078L12.197 5.69189C11.9041 5.399 11.4292 5.399 11.1363 5.69189C10.8434 5.98479 10.8434 6.45966 11.1363 6.75255L13.7449 9.36111H5Z" fill="currentColor"/>
</svg>
`, G5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M19.6203 6.25468C19.6203 7.29022 18.7808 8.12968 17.7453 8.12968C16.7097 8.12968 15.8703 7.29022 15.8703 6.25468C15.8703 5.21915 16.7097 4.37968 17.7453 4.37968C18.7808 4.37968 19.6203 5.21915 19.6203 6.25468ZM18.25 12C18.25 10.9645 19.0894 10.125 20.125 10.125C21.1605 10.125 22 10.9645 22 12C22 13.0355 21.1605 13.875 20.125 13.875C19.0894 13.875 18.25 13.0355 18.25 12ZM6.25464 15.8703C5.2191 15.8703 4.37964 16.7098 4.37964 17.7453C4.37964 18.7808 5.2191 19.6203 6.25464 19.6203C7.29017 19.6203 8.12964 18.7808 8.12964 17.7453C8.12964 16.7098 7.29017 15.8703 6.25464 15.8703ZM12 18.25C10.9644 18.25 10.125 19.0895 10.125 20.125C10.125 21.1605 10.9644 22 12 22C13.0355 22 13.875 21.1605 13.875 20.125C13.875 19.0895 13.0355 18.25 12 18.25ZM17.7453 15.8703C16.7097 15.8703 15.8703 16.7098 15.8703 17.7453C15.8703 18.7808 16.7097 19.6203 17.7453 19.6203C18.7808 19.6203 19.6203 18.7808 19.6203 17.7453C19.6203 16.7098 18.7808 15.8703 17.7453 15.8703Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25469 4.37969C5.21915 4.37969 4.37969 5.21915 4.37969 6.25469C4.37969 7.29022 5.21915 8.12969 6.25469 8.12969C7.29022 8.12969 8.12969 7.29022 8.12969 6.25469C8.12969 5.21915 7.29022 4.37969 6.25469 4.37969ZM3.875 10.125C2.83947 10.125 2 10.9645 2 12C2 13.0355 2.83947 13.875 3.875 13.875C4.91053 13.875 5.75 13.0355 5.75 12C5.75 10.9645 4.91053 10.125 3.875 10.125ZM12 2C10.9645 2 10.125 2.83947 10.125 3.875C10.125 4.91053 10.9645 5.75 12 5.75C13.0355 5.75 13.875 4.91053 13.875 3.875C13.875 2.83947 13.0355 2 12 2Z" fill="currentColor"/>
</svg>
`, Q5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5.04456C18.214 6.25718 20.5 9.36163 20.5 13C20.5 17.6944 16.6944 21.5 12 21.5C7.30558 21.5 3.5 17.6944 3.5 13C3.5 9.36163 5.78597 6.25718 9 5.04456M12 2.49998V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, X5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.75439 7.49997H2.00439H2.75439ZM2.75439 5.72849L3.50439 5.72849V5.72849H2.75439ZM5.49995 12.75C5.08573 12.75 4.74995 13.0858 4.74995 13.5C4.74995 13.9142 5.08573 14.25 5.49995 14.25V12.75ZM7.49995 14.25C7.91416 14.25 8.24995 13.9142 8.24995 13.5C8.24995 13.0858 7.91416 12.75 7.49995 12.75V14.25ZM5.5 15.25C5.08579 15.25 4.75 15.5858 4.75 16C4.75 16.4142 5.08579 16.75 5.5 16.75V15.25ZM11.5 16.75C11.9142 16.75 12.25 16.4142 12.25 16C12.25 15.5858 11.9142 15.25 11.5 15.25V16.75ZM14.4999 13V12.25C14.0857 12.25 13.7499 12.5858 13.7499 13H14.4999ZM14.4999 16H13.7499C13.7499 16.4142 14.0857 16.75 14.4999 16.75V16ZM18.4999 16V16.75C18.9142 16.75 19.2499 16.4142 19.2499 16H18.4999ZM18.4999 13H19.2499C19.2499 12.5858 18.9142 12.25 18.4999 12.25V13ZM3.75439 5.47849H20.2611V3.97849H3.75439V5.47849ZM20.5111 5.72849V7.49997H22.0111V5.72849H20.5111ZM20.5111 7.49997V9.99997H22.0111V7.49997H20.5111ZM20.5111 9.99997V18.5H22.0111V9.99997H20.5111ZM20.2611 18.75H3.75439V20.25H20.2611V18.75ZM3.50439 18.5V9.99997H2.00439V18.5H3.50439ZM3.50439 9.99997V7.49997H2.00439V9.99997H3.50439ZM3.50439 7.49997L3.50439 5.72849L2.00439 5.72849L2.00439 7.49997H3.50439ZM3.75439 18.75C3.61632 18.75 3.50439 18.6381 3.50439 18.5H2.00439C2.00439 19.4665 2.78789 20.25 3.75439 20.25V18.75ZM20.5111 18.5C20.5111 18.6381 20.3992 18.75 20.2611 18.75V20.25C21.2276 20.25 22.0111 19.4665 22.0111 18.5H20.5111ZM20.2611 5.47849C20.3992 5.47849 20.5111 5.59041 20.5111 5.72849H22.0111C22.0111 4.76199 21.2276 3.97849 20.2611 3.97849V5.47849ZM3.75439 3.97849C2.7879 3.97849 2.00439 4.76199 2.00439 5.72849H3.50439C3.50439 5.59041 3.61632 5.47849 3.75439 5.47849V3.97849ZM2.75439 8.24997H21.2611V6.74997H2.75439V8.24997ZM2.75439 10.75H21.2611V9.24997H2.75439V10.75ZM5.49995 14.25H7.49995V12.75H5.49995V14.25ZM5.5 16.75C5.50458 16.75 5.50915 16.75 5.51372 16.75C5.51829 16.75 5.52285 16.75 5.52741 16.75C5.53197 16.75 5.53653 16.75 5.54108 16.75C5.54564 16.75 5.55018 16.75 5.55473 16.75C5.55928 16.75 5.56382 16.75 5.56835 16.75C5.57289 16.75 5.57743 16.75 5.58196 16.75C5.58649 16.75 5.59101 16.75 5.59553 16.75C5.60006 16.75 5.60457 16.75 5.60909 16.75C5.6136 16.75 5.61811 16.75 5.62262 16.75C5.62713 16.75 5.63163 16.75 5.63613 16.75C5.64063 16.75 5.64513 16.75 5.64962 16.75C5.65411 16.75 5.6586 16.75 5.66308 16.75C5.66757 16.75 5.67205 16.75 5.67652 16.75C5.681 16.75 5.68547 16.75 5.68994 16.75C5.69441 16.75 5.69888 16.75 5.70334 16.75C5.7078 16.75 5.71226 16.75 5.71672 16.75C5.72117 16.75 5.72562 16.75 5.73007 16.75C5.73452 16.75 5.73896 16.75 5.7434 16.75C5.74784 16.75 5.75228 16.75 5.75671 16.75C5.76114 16.75 5.76557 16.75 5.77 16.75C5.77442 16.75 5.77885 16.75 5.78326 16.75C5.78768 16.75 5.7921 16.75 5.79651 16.75C5.80092 16.75 5.80533 16.75 5.80973 16.75C5.81413 16.75 5.81853 16.75 5.82293 16.75C5.82733 16.75 5.83172 16.75 5.83611 16.75C5.8405 16.75 5.84489 16.75 5.84927 16.75C5.85365 16.75 5.85803 16.75 5.86241 16.75C5.86678 16.75 5.87115 16.75 5.87552 16.75C5.87989 16.75 5.88426 16.75 5.88862 16.75C5.89298 16.75 5.89734 16.75 5.90169 16.75C5.90605 16.75 5.9104 16.75 5.91475 16.75C5.91909 16.75 5.92344 16.75 5.92778 16.75C5.93212 16.75 5.93646 16.75 5.94079 16.75C5.94512 16.75 5.94946 16.75 5.95378 16.75C5.95811 16.75 5.96243 16.75 5.96675 16.75C5.97107 16.75 5.97539 16.75 5.9797 16.75C5.98402 16.75 5.98833 16.75 5.99264 16.75C5.99694 16.75 6.00125 16.75 6.00555 16.75C6.00985 16.75 6.01414 16.75 6.01844 16.75C6.02273 16.75 6.02702 16.75 6.03131 16.75C6.03559 16.75 6.03988 16.75 6.04416 16.75C6.04844 16.75 6.05271 16.75 6.05699 16.75C6.06126 16.75 6.06553 16.75 6.0698 16.75C6.07407 16.75 6.07833 16.75 6.08259 16.75C6.08685 16.75 6.09111 16.75 6.09536 16.75C6.09962 16.75 6.10387 16.75 6.10812 16.75C6.11236 16.75 6.11661 16.75 6.12085 16.75C6.12509 16.75 6.12933 16.75 6.13356 16.75C6.1378 16.75 6.14203 16.75 6.14626 16.75C6.15049 16.75 6.15471 16.75 6.15893 16.75C6.16316 16.75 6.16737 16.75 6.17159 16.75C6.17581 16.75 6.18002 16.75 6.18423 16.75C6.18844 16.75 6.19264 16.75 6.19685 16.75C6.20105 16.75 6.20525 16.75 6.20945 16.75C6.21364 16.75 6.21784 16.75 6.22203 16.75C6.22622 16.75 6.23041 16.75 6.23459 16.75C6.23878 16.75 6.24296 16.75 6.24714 16.75C6.25132 16.75 6.25549 16.75 6.25967 16.75C6.26384 16.75 6.26801 16.75 6.27217 16.75C6.27634 16.75 6.2805 16.75 6.28466 16.75C6.28882 16.75 6.29298 16.75 6.29714 16.75C6.30129 16.75 6.30544 16.75 6.30959 16.75C6.31374 16.75 6.31788 16.75 6.32203 16.75C6.32617 16.75 6.33031 16.75 6.33445 16.75C6.33858 16.75 6.34272 16.75 6.34685 16.75C6.35098 16.75 6.35511 16.75 6.35923 16.75C6.36336 16.75 6.36748 16.75 6.3716 16.75C6.37572 16.75 6.37983 16.75 6.38394 16.75C6.38806 16.75 6.39217 16.75 6.39628 16.75C6.40038 16.75 6.40449 16.75 6.40859 16.75C6.41269 16.75 6.41679 16.75 6.42089 16.75C6.42498 16.75 6.42908 16.75 6.43317 16.75C6.43726 16.75 6.44135 16.75 6.44543 16.75C6.44952 16.75 6.4536 16.75 6.45768 16.75C6.46176 16.75 6.46583 16.75 6.46991 16.75C6.47398 16.75 6.47805 16.75 6.48212 16.75C6.48619 16.75 6.49025 16.75 6.49431 16.75C6.49838 16.75 6.50244 16.75 6.50649 16.75C6.51055 16.75 6.51461 16.75 6.51866 16.75C6.52271 16.75 6.52676 16.75 6.5308 16.75C6.53485 16.75 6.53889 16.75 6.54294 16.75C6.54698 16.75 6.55101 16.75 6.55505 16.75C6.55909 16.75 6.56312 16.75 6.56715 16.75C6.57118 16.75 6.57521 16.75 6.57923 16.75C6.58326 16.75 6.58728 16.75 6.5913 16.75C6.59532 16.75 6.59934 16.75 6.60335 16.75C6.60736 16.75 6.61138 16.75 6.61539 16.75C6.6194 16.75 6.6234 16.75 6.62741 16.75C6.63141 16.75 6.63541 16.75 6.63941 16.75C6.64341 16.75 6.64741 16.75 6.6514 16.75C6.65539 16.75 6.65938 16.75 6.66337 16.75C6.66736 16.75 6.67135 16.75 6.67533 16.75C6.67932 16.75 6.6833 16.75 6.68728 16.75C6.69125 16.75 6.69523 16.75 6.6992 16.75C6.70318 16.75 6.70715 16.75 6.71112 16.75C6.71509 16.75 6.71905 16.75 6.72302 16.75C6.72698 16.75 6.73094 16.75 6.7349 16.75C6.73886 16.75 6.74282 16.75 6.74677 16.75C6.75073 16.75 6.75468 16.75 6.75863 16.75C6.76258 16.75 6.76652 16.75 6.77047 16.75C6.77441 16.75 6.77835 16.75 6.78229 16.75C6.78623 16.75 6.79017 16.75 6.7941 16.75C6.79804 16.75 6.80197 16.75 6.8059 16.75C6.80983 16.75 6.81376 16.75 6.81769 16.75C6.82161 16.75 6.82553 16.75 6.82946 16.75C6.83338 16.75 6.8373 16.75 6.84121 16.75C6.84513 16.75 6.84904 16.75 6.85295 16.75C6.85687 16.75 6.86077 16.75 6.86468 16.75C6.86859 16.75 6.87249 16.75 6.8764 16.75C6.8803 16.75 6.8842 16.75 6.8881 16.75C6.892 16.75 6.89589 16.75 6.89979 16.75C6.90368 16.75 6.90757 16.75 6.91146 16.75C6.91535 16.75 6.91924 16.75 6.92312 16.75C6.92701 16.75 6.93089 16.75 6.93477 16.75C6.93865 16.75 6.94253 16.75 6.9464 16.75C6.95028 16.75 6.95415 16.75 6.95803 16.75C6.9619 16.75 6.96577 16.75 6.96963 16.75C6.9735 16.75 6.97737 16.75 6.98123 16.75C6.98509 16.75 6.98896 16.75 6.99281 16.75C6.99667 16.75 7.00053 16.75 7.00438 16.75C7.00824 16.75 7.01209 16.75 7.01594 16.75C7.01979 16.75 7.02364 16.75 7.02749 16.75C7.03134 16.75 7.03518 16.75 7.03902 16.75C7.04287 16.75 7.04671 16.75 7.05054 16.75C7.05438 16.75 7.05822 16.75 7.06205 16.75C7.06589 16.75 7.06972 16.75 7.07355 16.75C7.07738 16.75 7.08121 16.75 7.08504 16.75C7.08886 16.75 7.09269 16.75 7.09651 16.75C7.10033 16.75 7.10415 16.75 7.10797 16.75C7.11179 16.75 7.11561 16.75 7.11942 16.75C7.12324 16.75 7.12705 16.75 7.13086 16.75C7.13467 16.75 7.13848 16.75 7.14229 16.75C7.14609 16.75 7.1499 16.75 7.1537 16.75C7.1575 16.75 7.16131 16.75 7.16511 16.75C7.1689 16.75 7.1727 16.75 7.1765 16.75C7.18029 16.75 7.18409 16.75 7.18788 16.75C7.19167 16.75 7.19546 16.75 7.19925 16.75C7.20304 16.75 7.20683 16.75 7.21061 16.75C7.21439 16.75 7.21818 16.75 7.22196 16.75C7.22574 16.75 7.22952 16.75 7.2333 16.75C7.23707 16.75 7.24085 16.75 7.24462 16.75C7.2484 16.75 7.25217 16.75 7.25594 16.75C7.25971 16.75 7.26348 16.75 7.26725 16.75C7.27101 16.75 7.27478 16.75 7.27854 16.75C7.28231 16.75 7.28607 16.75 7.28983 16.75C7.29359 16.75 7.29735 16.75 7.3011 16.75C7.30486 16.75 7.30862 16.75 7.31237 16.75C7.31612 16.75 7.31987 16.75 7.32362 16.75C7.32737 16.75 7.33112 16.75 7.33487 16.75C7.33862 16.75 7.34236 16.75 7.34611 16.75C7.34985 16.75 7.35359 16.75 7.35733 16.75C7.36107 16.75 7.36481 16.75 7.36855 16.75C7.37228 16.75 7.37602 16.75 7.37975 16.75C7.38349 16.75 7.38722 16.75 7.39095 16.75C7.39468 16.75 7.39841 16.75 7.40214 16.75C7.40587 16.75 7.40959 16.75 7.41332 16.75C7.41704 16.75 7.42076 16.75 7.42448 16.75C7.42821 16.75 7.43193 16.75 7.43564 16.75C7.43936 16.75 7.44308 16.75 7.4468 16.75C7.45051 16.75 7.45423 16.75 7.45794 16.75C7.46165 16.75 7.46536 16.75 7.46907 16.75C7.47278 16.75 7.47649 16.75 7.4802 16.75C7.4839 16.75 7.48761 16.75 7.49131 16.75C7.49501 16.75 7.49872 16.75 7.50242 16.75C7.50612 16.75 7.50982 16.75 7.51352 16.75C7.51722 16.75 7.52091 16.75 7.52461 16.75C7.5283 16.75 7.532 16.75 7.53569 16.75C7.53938 16.75 7.54307 16.75 7.54676 16.75C7.55045 16.75 7.55414 16.75 7.55783 16.75C7.56152 16.75 7.5652 16.75 7.56889 16.75C7.57257 16.75 7.57625 16.75 7.57994 16.75C7.58362 16.75 7.5873 16.75 7.59098 16.75C7.59466 16.75 7.59834 16.75 7.60201 16.75C7.60569 16.75 7.60937 16.75 7.61304 16.75C7.61671 16.75 7.62039 16.75 7.62406 16.75C7.62773 16.75 7.6314 16.75 7.63507 16.75C7.63874 16.75 7.64241 16.75 7.64607 16.75C7.64974 16.75 7.65341 16.75 7.65707 16.75C7.66074 16.75 7.6644 16.75 7.66806 16.75C7.67172 16.75 7.67538 16.75 7.67904 16.75C7.6827 16.75 7.68636 16.75 7.69002 16.75C7.69368 16.75 7.69733 16.75 7.70099 16.75C7.70464 16.75 7.7083 16.75 7.71195 16.75C7.7156 16.75 7.71926 16.75 7.72291 16.75C7.72656 16.75 7.73021 16.75 7.73386 16.75C7.7375 16.75 7.74115 16.75 7.7448 16.75C7.74844 16.75 7.75209 16.75 7.75573 16.75C7.75938 16.75 7.76302 16.75 7.76666 16.75C7.7703 16.75 7.77395 16.75 7.77759 16.75C7.78123 16.75 7.78486 16.75 7.7885 16.75C7.79214 16.75 7.79578 16.75 7.79941 16.75C7.80305 16.75 7.80668 16.75 7.81032 16.75C7.81395 16.75 7.81759 16.75 7.82122 16.75C7.82485 16.75 7.82848 16.75 7.83211 16.75C7.83574 16.75 7.83937 16.75 7.843 16.75C7.84663 16.75 7.85025 16.75 7.85388 16.75C7.85751 16.75 7.86113 16.75 7.86476 16.75C7.86838 16.75 7.872 16.75 7.87563 16.75C7.87925 16.75 7.88287 16.75 7.88649 16.75C7.89011 16.75 7.89373 16.75 7.89735 16.75C7.90097 16.75 7.90459 16.75 7.90821 16.75C7.91183 16.75 7.91544 16.75 7.91906 16.75C7.92267 16.75 7.92629 16.75 7.9299 16.75C7.93352 16.75 7.93713 16.75 7.94074 16.75C7.94436 16.75 7.94797 16.75 7.95158 16.75C7.95519 16.75 7.9588 16.75 7.96241 16.75C7.96602 16.75 7.96963 16.75 7.97324 16.75C7.97684 16.75 7.98045 16.75 7.98406 16.75C7.98766 16.75 7.99127 16.75 7.99488 16.75C7.99848 16.75 8.00208 16.75 8.00569 16.75C8.00929 16.75 8.0129 16.75 8.0165 16.75C8.0201 16.75 8.0237 16.75 8.0273 16.75C8.0309 16.75 8.0345 16.75 8.0381 16.75C8.0417 16.75 8.0453 16.75 8.0489 16.75C8.0525 16.75 8.05609 16.75 8.05969 16.75C8.06329 16.75 8.06688 16.75 8.07048 16.75C8.07408 16.75 8.07767 16.75 8.08127 16.75C8.08486 16.75 8.08845 16.75 8.09205 16.75C8.09564 16.75 8.09923 16.75 8.10283 16.75C8.10642 16.75 8.11001 16.75 8.1136 16.75C8.11719 16.75 8.12078 16.75 8.12437 16.75C8.12796 16.75 8.13155 16.75 8.13514 16.75C8.13873 16.75 8.14232 16.75 8.14591 16.75C8.14949 16.75 8.15308 16.75 8.15667 16.75C8.16025 16.75 8.16384 16.75 8.16743 16.75C8.17101 16.75 8.1746 16.75 8.17818 16.75C8.18177 16.75 8.18535 16.75 8.18894 16.75C8.19252 16.75 8.1961 16.75 8.19969 16.75C8.20327 16.75 8.20685 16.75 8.21043 16.75C8.21402 16.75 8.2176 16.75 8.22118 16.75C8.22476 16.75 8.22834 16.75 8.23192 16.75C8.23551 16.75 8.23909 16.75 8.24267 16.75C8.24625 16.75 8.24983 16.75 8.2534 16.75C8.25698 16.75 8.26056 16.75 8.26414 16.75C8.26772 16.75 8.2713 16.75 8.27488 16.75C8.27845 16.75 8.28203 16.75 8.28561 16.75C8.28919 16.75 8.29276 16.75 8.29634 16.75C8.29992 16.75 8.30349 16.75 8.30707 16.75C8.31064 16.75 8.31422 16.75 8.3178 16.75C8.32137 16.75 8.32495 16.75 8.32852 16.75C8.3321 16.75 8.33567 16.75 8.33925 16.75C8.34282 16.75 8.3464 16.75 8.34997 16.75C8.35354 16.75 8.35712 16.75 8.36069 16.75C8.36427 16.75 8.36784 16.75 8.37141 16.75C8.37499 16.75 8.37856 16.75 8.38213 16.75C8.3857 16.75 8.38928 16.75 8.39285 16.75C8.39642 16.75 8.4 16.75 8.40357 16.75C8.40714 16.75 8.41071 16.75 8.41428 16.75C8.41786 16.75 8.42143 16.75 8.425 16.75C8.42857 16.75 8.43214 16.75 8.43572 16.75C8.43929 16.75 8.44286 16.75 8.44643 16.75C8.45 16.75 8.45357 16.75 8.45715 16.75C8.46072 16.75 8.46429 16.75 8.46786 16.75C8.47143 16.75 8.475 16.75 8.47857 16.75C8.48214 16.75 8.48572 16.75 8.48929 16.75C8.49286 16.75 8.49643 16.75 8.5 16.75C8.50357 16.75 8.50714 16.75 8.51071 16.75C8.51428 16.75 8.51786 16.75 8.52143 16.75C8.525 16.75 8.52857 16.75 8.53214 16.75C8.53571 16.75 8.53928 16.75 8.54285 16.75C8.54643 16.75 8.55 16.75 8.55357 16.75C8.55714 16.75 8.56071 16.75 8.56428 16.75C8.56786 16.75 8.57143 16.75 8.575 16.75C8.57857 16.75 8.58214 16.75 8.58572 16.75C8.58929 16.75 8.59286 16.75 8.59643 16.75C8.6 16.75 8.60358 16.75 8.60715 16.75C8.61072 16.75 8.6143 16.75 8.61787 16.75C8.62144 16.75 8.62501 16.75 8.62859 16.75C8.63216 16.75 8.63573 16.75 8.63931 16.75C8.64288 16.75 8.64646 16.75 8.65003 16.75C8.6536 16.75 8.65718 16.75 8.66075 16.75C8.66433 16.75 8.6679 16.75 8.67148 16.75C8.67505 16.75 8.67863 16.75 8.6822 16.75C8.68578 16.75 8.68936 16.75 8.69293 16.75C8.69651 16.75 8.70008 16.75 8.70366 16.75C8.70724 16.75 8.71081 16.75 8.71439 16.75C8.71797 16.75 8.72155 16.75 8.72512 16.75C8.7287 16.75 8.73228 16.75 8.73586 16.75C8.73944 16.75 8.74302 16.75 8.7466 16.75C8.75017 16.75 8.75375 16.75 8.75733 16.75C8.76091 16.75 8.76449 16.75 8.76808 16.75C8.77166 16.75 8.77524 16.75 8.77882 16.75C8.7824 16.75 8.78598 16.75 8.78957 16.75C8.79315 16.75 8.79673 16.75 8.80031 16.75C8.8039 16.75 8.80748 16.75 8.81106 16.75C8.81465 16.75 8.81823 16.75 8.82182 16.75C8.8254 16.75 8.82899 16.75 8.83257 16.75C8.83616 16.75 8.83975 16.75 8.84333 16.75C8.84692 16.75 8.85051 16.75 8.85409 16.75C8.85768 16.75 8.86127 16.75 8.86486 16.75C8.86845 16.75 8.87204 16.75 8.87563 16.75C8.87922 16.75 8.88281 16.75 8.8864 16.75C8.88999 16.75 8.89358 16.75 8.89717 16.75C8.90077 16.75 8.90436 16.75 8.90795 16.75C8.91155 16.75 8.91514 16.75 8.91873 16.75C8.92233 16.75 8.92592 16.75 8.92952 16.75C8.93312 16.75 8.93671 16.75 8.94031 16.75C8.94391 16.75 8.9475 16.75 8.9511 16.75C8.9547 16.75 8.9583 16.75 8.9619 16.75C8.9655 16.75 8.9691 16.75 8.9727 16.75C8.9763 16.75 8.9799 16.75 8.9835 16.75C8.9871 16.75 8.99071 16.75 8.99431 16.75C8.99792 16.75 9.00152 16.75 9.00512 16.75C9.00873 16.75 9.01234 16.75 9.01594 16.75C9.01955 16.75 9.02316 16.75 9.02676 16.75C9.03037 16.75 9.03398 16.75 9.03759 16.75C9.0412 16.75 9.04481 16.75 9.04842 16.75C9.05203 16.75 9.05564 16.75 9.05926 16.75C9.06287 16.75 9.06648 16.75 9.0701 16.75C9.07371 16.75 9.07733 16.75 9.08094 16.75C9.08456 16.75 9.08817 16.75 9.09179 16.75C9.09541 16.75 9.09903 16.75 9.10265 16.75C9.10627 16.75 9.10989 16.75 9.11351 16.75C9.11713 16.75 9.12075 16.75 9.12437 16.75C9.128 16.75 9.13162 16.75 9.13524 16.75C9.13887 16.75 9.14249 16.75 9.14612 16.75C9.14975 16.75 9.15337 16.75 9.157 16.75C9.16063 16.75 9.16426 16.75 9.16789 16.75C9.17152 16.75 9.17515 16.75 9.17878 16.75C9.18241 16.75 9.18605 16.75 9.18968 16.75C9.19332 16.75 9.19695 16.75 9.20059 16.75C9.20422 16.75 9.20786 16.75 9.2115 16.75C9.21514 16.75 9.21877 16.75 9.22241 16.75C9.22605 16.75 9.2297 16.75 9.23334 16.75C9.23698 16.75 9.24062 16.75 9.24427 16.75C9.24791 16.75 9.25156 16.75 9.2552 16.75C9.25885 16.75 9.2625 16.75 9.26614 16.75C9.26979 16.75 9.27344 16.75 9.27709 16.75C9.28074 16.75 9.2844 16.75 9.28805 16.75C9.2917 16.75 9.29536 16.75 9.29901 16.75C9.30267 16.75 9.30632 16.75 9.30998 16.75C9.31364 16.75 9.3173 16.75 9.32096 16.75C9.32462 16.75 9.32828 16.75 9.33194 16.75C9.3356 16.75 9.33926 16.75 9.34293 16.75C9.34659 16.75 9.35026 16.75 9.35393 16.75C9.35759 16.75 9.36126 16.75 9.36493 16.75C9.3686 16.75 9.37227 16.75 9.37594 16.75C9.37961 16.75 9.38329 16.75 9.38696 16.75C9.39063 16.75 9.39431 16.75 9.39799 16.75C9.40166 16.75 9.40534 16.75 9.40902 16.75C9.4127 16.75 9.41638 16.75 9.42006 16.75C9.42375 16.75 9.42743 16.75 9.43111 16.75C9.4348 16.75 9.43848 16.75 9.44217 16.75C9.44586 16.75 9.44955 16.75 9.45324 16.75C9.45693 16.75 9.46062 16.75 9.46431 16.75C9.468 16.75 9.4717 16.75 9.47539 16.75C9.47909 16.75 9.48278 16.75 9.48648 16.75C9.49018 16.75 9.49388 16.75 9.49758 16.75C9.50128 16.75 9.50499 16.75 9.50869 16.75C9.51239 16.75 9.5161 16.75 9.5198 16.75C9.52351 16.75 9.52722 16.75 9.53093 16.75C9.53464 16.75 9.53835 16.75 9.54206 16.75C9.54577 16.75 9.54949 16.75 9.5532 16.75C9.55692 16.75 9.56064 16.75 9.56436 16.75C9.56807 16.75 9.57179 16.75 9.57552 16.75C9.57924 16.75 9.58296 16.75 9.58668 16.75C9.59041 16.75 9.59413 16.75 9.59786 16.75C9.60159 16.75 9.60532 16.75 9.60905 16.75C9.61278 16.75 9.61651 16.75 9.62025 16.75C9.62398 16.75 9.62772 16.75 9.63145 16.75C9.63519 16.75 9.63893 16.75 9.64267 16.75C9.64641 16.75 9.65015 16.75 9.65389 16.75C9.65764 16.75 9.66138 16.75 9.66513 16.75C9.66888 16.75 9.67263 16.75 9.67638 16.75C9.68013 16.75 9.68388 16.75 9.68763 16.75C9.69138 16.75 9.69514 16.75 9.6989 16.75C9.70265 16.75 9.70641 16.75 9.71017 16.75C9.71393 16.75 9.71769 16.75 9.72146 16.75C9.72522 16.75 9.72899 16.75 9.73275 16.75C9.73652 16.75 9.74029 16.75 9.74406 16.75C9.74783 16.75 9.7516 16.75 9.75538 16.75C9.75915 16.75 9.76293 16.75 9.7667 16.75C9.77048 16.75 9.77426 16.75 9.77804 16.75C9.78182 16.75 9.78561 16.75 9.78939 16.75C9.79317 16.75 9.79696 16.75 9.80075 16.75C9.80454 16.75 9.80833 16.75 9.81212 16.75C9.81591 16.75 9.81971 16.75 9.8235 16.75C9.8273 16.75 9.8311 16.75 9.83489 16.75C9.83869 16.75 9.8425 16.75 9.8463 16.75C9.8501 16.75 9.85391 16.75 9.85771 16.75C9.86152 16.75 9.86533 16.75 9.86914 16.75C9.87295 16.75 9.87676 16.75 9.88058 16.75C9.88439 16.75 9.88821 16.75 9.89203 16.75C9.89585 16.75 9.89967 16.75 9.90349 16.75C9.90731 16.75 9.91114 16.75 9.91496 16.75C9.91879 16.75 9.92262 16.75 9.92645 16.75C9.93028 16.75 9.93411 16.75 9.93795 16.75C9.94178 16.75 9.94562 16.75 9.94946 16.75C9.95329 16.75 9.95713 16.75 9.96098 16.75C9.96482 16.75 9.96866 16.75 9.97251 16.75C9.97636 16.75 9.98021 16.75 9.98406 16.75C9.98791 16.75 9.99176 16.75 9.99562 16.75C9.99947 16.75 10.0033 16.75 10.0072 16.75C10.011 16.75 10.0149 16.75 10.0188 16.75C10.0226 16.75 10.0265 16.75 10.0304 16.75C10.0342 16.75 10.0381 16.75 10.042 16.75C10.0458 16.75 10.0497 16.75 10.0536 16.75C10.0575 16.75 10.0614 16.75 10.0652 16.75C10.0691 16.75 10.073 16.75 10.0769 16.75C10.0808 16.75 10.0847 16.75 10.0885 16.75C10.0924 16.75 10.0963 16.75 10.1002 16.75C10.1041 16.75 10.108 16.75 10.1119 16.75C10.1158 16.75 10.1197 16.75 10.1236 16.75C10.1275 16.75 10.1314 16.75 10.1353 16.75C10.1392 16.75 10.1431 16.75 10.147 16.75C10.151 16.75 10.1549 16.75 10.1588 16.75C10.1627 16.75 10.1666 16.75 10.1705 16.75C10.1745 16.75 10.1784 16.75 10.1823 16.75C10.1862 16.75 10.1902 16.75 10.1941 16.75C10.198 16.75 10.202 16.75 10.2059 16.75C10.2098 16.75 10.2138 16.75 10.2177 16.75C10.2216 16.75 10.2256 16.75 10.2295 16.75C10.2335 16.75 10.2374 16.75 10.2414 16.75C10.2453 16.75 10.2493 16.75 10.2532 16.75C10.2572 16.75 10.2611 16.75 10.2651 16.75C10.2691 16.75 10.273 16.75 10.277 16.75C10.2809 16.75 10.2849 16.75 10.2889 16.75C10.2929 16.75 10.2968 16.75 10.3008 16.75C10.3048 16.75 10.3087 16.75 10.3127 16.75C10.3167 16.75 10.3207 16.75 10.3247 16.75C10.3287 16.75 10.3326 16.75 10.3366 16.75C10.3406 16.75 10.3446 16.75 10.3486 16.75C10.3526 16.75 10.3566 16.75 10.3606 16.75C10.3646 16.75 10.3686 16.75 10.3726 16.75C10.3766 16.75 10.3806 16.75 10.3846 16.75C10.3886 16.75 10.3926 16.75 10.3966 16.75C10.4007 16.75 10.4047 16.75 10.4087 16.75C10.4127 16.75 10.4167 16.75 10.4208 16.75C10.4248 16.75 10.4288 16.75 10.4329 16.75C10.4369 16.75 10.4409 16.75 10.4449 16.75C10.449 16.75 10.453 16.75 10.4571 16.75C10.4611 16.75 10.4651 16.75 10.4692 16.75C10.4732 16.75 10.4773 16.75 10.4813 16.75C10.4854 16.75 10.4894 16.75 10.4935 16.75C10.4976 16.75 10.5016 16.75 10.5057 16.75C10.5097 16.75 10.5138 16.75 10.5179 16.75C10.5219 16.75 10.526 16.75 10.5301 16.75C10.5342 16.75 10.5382 16.75 10.5423 16.75C10.5464 16.75 10.5505 16.75 10.5546 16.75C10.5587 16.75 10.5627 16.75 10.5668 16.75C10.5709 16.75 10.575 16.75 10.5791 16.75C10.5832 16.75 10.5873 16.75 10.5914 16.75C10.5955 16.75 10.5996 16.75 10.6037 16.75C10.6078 16.75 10.6119 16.75 10.6161 16.75C10.6202 16.75 10.6243 16.75 10.6284 16.75C10.6325 16.75 10.6366 16.75 10.6408 16.75C10.6449 16.75 10.649 16.75 10.6532 16.75C10.6573 16.75 10.6614 16.75 10.6656 16.75C10.6697 16.75 10.6738 16.75 10.678 16.75C10.6821 16.75 10.6863 16.75 10.6904 16.75C10.6946 16.75 10.6987 16.75 10.7029 16.75C10.707 16.75 10.7112 16.75 10.7153 16.75C10.7195 16.75 10.7237 16.75 10.7278 16.75C10.732 16.75 10.7362 16.75 10.7403 16.75C10.7445 16.75 10.7487 16.75 10.7529 16.75C10.757 16.75 10.7612 16.75 10.7654 16.75C10.7696 16.75 10.7738 16.75 10.778 16.75C10.7822 16.75 10.7864 16.75 10.7906 16.75C10.7947 16.75 10.7989 16.75 10.8032 16.75C10.8074 16.75 10.8116 16.75 10.8158 16.75C10.82 16.75 10.8242 16.75 10.8284 16.75C10.8326 16.75 10.8368 16.75 10.8411 16.75C10.8453 16.75 10.8495 16.75 10.8537 16.75C10.858 16.75 10.8622 16.75 10.8664 16.75C10.8707 16.75 10.8749 16.75 10.8792 16.75C10.8834 16.75 10.8876 16.75 10.8919 16.75C10.8961 16.75 10.9004 16.75 10.9046 16.75C10.9089 16.75 10.9131 16.75 10.9174 16.75C10.9217 16.75 10.9259 16.75 10.9302 16.75C10.9345 16.75 10.9387 16.75 10.943 16.75C10.9473 16.75 10.9516 16.75 10.9558 16.75C10.9601 16.75 10.9644 16.75 10.9687 16.75C10.973 16.75 10.9773 16.75 10.9816 16.75C10.9859 16.75 10.9902 16.75 10.9945 16.75C10.9988 16.75 11.0031 16.75 11.0074 16.75C11.0117 16.75 11.016 16.75 11.0203 16.75C11.0246 16.75 11.0289 16.75 11.0332 16.75C11.0376 16.75 11.0419 16.75 11.0462 16.75C11.0505 16.75 11.0549 16.75 11.0592 16.75C11.0635 16.75 11.0679 16.75 11.0722 16.75C11.0766 16.75 11.0809 16.75 11.0853 16.75C11.0896 16.75 11.094 16.75 11.0983 16.75C11.1027 16.75 11.107 16.75 11.1114 16.75C11.1157 16.75 11.1201 16.75 11.1245 16.75C11.1288 16.75 11.1332 16.75 11.1376 16.75C11.142 16.75 11.1463 16.75 11.1507 16.75C11.1551 16.75 11.1595 16.75 11.1639 16.75C11.1683 16.75 11.1727 16.75 11.1771 16.75C11.1815 16.75 11.1859 16.75 11.1903 16.75C11.1947 16.75 11.1991 16.75 11.2035 16.75C11.2079 16.75 11.2123 16.75 11.2167 16.75C11.2212 16.75 11.2256 16.75 11.23 16.75C11.2344 16.75 11.2389 16.75 11.2433 16.75C11.2477 16.75 11.2522 16.75 11.2566 16.75C11.261 16.75 11.2655 16.75 11.2699 16.75C11.2744 16.75 11.2788 16.75 11.2833 16.75C11.2877 16.75 11.2922 16.75 11.2967 16.75C11.3011 16.75 11.3056 16.75 11.3101 16.75C11.3145 16.75 11.319 16.75 11.3235 16.75C11.328 16.75 11.3324 16.75 11.3369 16.75C11.3414 16.75 11.3459 16.75 11.3504 16.75C11.3549 16.75 11.3594 16.75 11.3639 16.75C11.3684 16.75 11.3729 16.75 11.3774 16.75C11.3819 16.75 11.3864 16.75 11.3909 16.75C11.3954 16.75 11.3999 16.75 11.4045 16.75C11.409 16.75 11.4135 16.75 11.418 16.75C11.4226 16.75 11.4271 16.75 11.4316 16.75C11.4362 16.75 11.4407 16.75 11.4453 16.75C11.4498 16.75 11.4544 16.75 11.4589 16.75C11.4635 16.75 11.468 16.75 11.4726 16.75C11.4771 16.75 11.4817 16.75 11.4863 16.75C11.4909 16.75 11.4954 16.75 11.5 16.75V15.25C11.4954 15.25 11.4909 15.25 11.4863 15.25C11.4817 15.25 11.4771 15.25 11.4726 15.25C11.468 15.25 11.4635 15.25 11.4589 15.25C11.4544 15.25 11.4498 15.25 11.4453 15.25C11.4407 15.25 11.4362 15.25 11.4316 15.25C11.4271 15.25 11.4226 15.25 11.418 15.25C11.4135 15.25 11.409 15.25 11.4045 15.25C11.3999 15.25 11.3954 15.25 11.3909 15.25C11.3864 15.25 11.3819 15.25 11.3774 15.25C11.3729 15.25 11.3684 15.25 11.3639 15.25C11.3594 15.25 11.3549 15.25 11.3504 15.25C11.3459 15.25 11.3414 15.25 11.3369 15.25C11.3324 15.25 11.328 15.25 11.3235 15.25C11.319 15.25 11.3145 15.25 11.3101 15.25C11.3056 15.25 11.3011 15.25 11.2967 15.25C11.2922 15.25 11.2877 15.25 11.2833 15.25C11.2788 15.25 11.2744 15.25 11.2699 15.25C11.2655 15.25 11.261 15.25 11.2566 15.25C11.2522 15.25 11.2477 15.25 11.2433 15.25C11.2389 15.25 11.2344 15.25 11.23 15.25C11.2256 15.25 11.2212 15.25 11.2167 15.25C11.2123 15.25 11.2079 15.25 11.2035 15.25C11.1991 15.25 11.1947 15.25 11.1903 15.25C11.1859 15.25 11.1815 15.25 11.1771 15.25C11.1727 15.25 11.1683 15.25 11.1639 15.25C11.1595 15.25 11.1551 15.25 11.1507 15.25C11.1463 15.25 11.142 15.25 11.1376 15.25C11.1332 15.25 11.1288 15.25 11.1245 15.25C11.1201 15.25 11.1157 15.25 11.1114 15.25C11.107 15.25 11.1027 15.25 11.0983 15.25C11.094 15.25 11.0896 15.25 11.0853 15.25C11.0809 15.25 11.0766 15.25 11.0722 15.25C11.0679 15.25 11.0635 15.25 11.0592 15.25C11.0549 15.25 11.0505 15.25 11.0462 15.25C11.0419 15.25 11.0376 15.25 11.0332 15.25C11.0289 15.25 11.0246 15.25 11.0203 15.25C11.016 15.25 11.0117 15.25 11.0074 15.25C11.0031 15.25 10.9988 15.25 10.9945 15.25C10.9902 15.25 10.9859 15.25 10.9816 15.25C10.9773 15.25 10.973 15.25 10.9687 15.25C10.9644 15.25 10.9601 15.25 10.9558 15.25C10.9516 15.25 10.9473 15.25 10.943 15.25C10.9387 15.25 10.9345 15.25 10.9302 15.25C10.9259 15.25 10.9217 15.25 10.9174 15.25C10.9131 15.25 10.9089 15.25 10.9046 15.25C10.9004 15.25 10.8961 15.25 10.8919 15.25C10.8876 15.25 10.8834 15.25 10.8792 15.25C10.8749 15.25 10.8707 15.25 10.8664 15.25C10.8622 15.25 10.858 15.25 10.8537 15.25C10.8495 15.25 10.8453 15.25 10.8411 15.25C10.8368 15.25 10.8326 15.25 10.8284 15.25C10.8242 15.25 10.82 15.25 10.8158 15.25C10.8116 15.25 10.8074 15.25 10.8032 15.25C10.7989 15.25 10.7947 15.25 10.7906 15.25C10.7864 15.25 10.7822 15.25 10.778 15.25C10.7738 15.25 10.7696 15.25 10.7654 15.25C10.7612 15.25 10.757 15.25 10.7529 15.25C10.7487 15.25 10.7445 15.25 10.7403 15.25C10.7362 15.25 10.732 15.25 10.7278 15.25C10.7237 15.25 10.7195 15.25 10.7153 15.25C10.7112 15.25 10.707 15.25 10.7029 15.25C10.6987 15.25 10.6946 15.25 10.6904 15.25C10.6863 15.25 10.6821 15.25 10.678 15.25C10.6738 15.25 10.6697 15.25 10.6656 15.25C10.6614 15.25 10.6573 15.25 10.6532 15.25C10.649 15.25 10.6449 15.25 10.6408 15.25C10.6366 15.25 10.6325 15.25 10.6284 15.25C10.6243 15.25 10.6202 15.25 10.6161 15.25C10.6119 15.25 10.6078 15.25 10.6037 15.25C10.5996 15.25 10.5955 15.25 10.5914 15.25C10.5873 15.25 10.5832 15.25 10.5791 15.25C10.575 15.25 10.5709 15.25 10.5668 15.25C10.5627 15.25 10.5587 15.25 10.5546 15.25C10.5505 15.25 10.5464 15.25 10.5423 15.25C10.5382 15.25 10.5342 15.25 10.5301 15.25C10.526 15.25 10.5219 15.25 10.5179 15.25C10.5138 15.25 10.5097 15.25 10.5057 15.25C10.5016 15.25 10.4976 15.25 10.4935 15.25C10.4894 15.25 10.4854 15.25 10.4813 15.25C10.4773 15.25 10.4732 15.25 10.4692 15.25C10.4651 15.25 10.4611 15.25 10.4571 15.25C10.453 15.25 10.449 15.25 10.4449 15.25C10.4409 15.25 10.4369 15.25 10.4329 15.25C10.4288 15.25 10.4248 15.25 10.4208 15.25C10.4167 15.25 10.4127 15.25 10.4087 15.25C10.4047 15.25 10.4007 15.25 10.3966 15.25C10.3926 15.25 10.3886 15.25 10.3846 15.25C10.3806 15.25 10.3766 15.25 10.3726 15.25C10.3686 15.25 10.3646 15.25 10.3606 15.25C10.3566 15.25 10.3526 15.25 10.3486 15.25C10.3446 15.25 10.3406 15.25 10.3366 15.25C10.3326 15.25 10.3287 15.25 10.3247 15.25C10.3207 15.25 10.3167 15.25 10.3127 15.25C10.3087 15.25 10.3048 15.25 10.3008 15.25C10.2968 15.25 10.2929 15.25 10.2889 15.25C10.2849 15.25 10.2809 15.25 10.277 15.25C10.273 15.25 10.2691 15.25 10.2651 15.25C10.2611 15.25 10.2572 15.25 10.2532 15.25C10.2493 15.25 10.2453 15.25 10.2414 15.25C10.2374 15.25 10.2335 15.25 10.2295 15.25C10.2256 15.25 10.2216 15.25 10.2177 15.25C10.2138 15.25 10.2098 15.25 10.2059 15.25C10.202 15.25 10.198 15.25 10.1941 15.25C10.1902 15.25 10.1862 15.25 10.1823 15.25C10.1784 15.25 10.1745 15.25 10.1705 15.25C10.1666 15.25 10.1627 15.25 10.1588 15.25C10.1549 15.25 10.151 15.25 10.147 15.25C10.1431 15.25 10.1392 15.25 10.1353 15.25C10.1314 15.25 10.1275 15.25 10.1236 15.25C10.1197 15.25 10.1158 15.25 10.1119 15.25C10.108 15.25 10.1041 15.25 10.1002 15.25C10.0963 15.25 10.0924 15.25 10.0885 15.25C10.0847 15.25 10.0808 15.25 10.0769 15.25C10.073 15.25 10.0691 15.25 10.0652 15.25C10.0614 15.25 10.0575 15.25 10.0536 15.25C10.0497 15.25 10.0458 15.25 10.042 15.25C10.0381 15.25 10.0342 15.25 10.0304 15.25C10.0265 15.25 10.0226 15.25 10.0188 15.25C10.0149 15.25 10.011 15.25 10.0072 15.25C10.0033 15.25 9.99947 15.25 9.99562 15.25C9.99176 15.25 9.98791 15.25 9.98406 15.25C9.98021 15.25 9.97636 15.25 9.97251 15.25C9.96866 15.25 9.96482 15.25 9.96098 15.25C9.95713 15.25 9.95329 15.25 9.94946 15.25C9.94562 15.25 9.94178 15.25 9.93795 15.25C9.93411 15.25 9.93028 15.25 9.92645 15.25C9.92262 15.25 9.91879 15.25 9.91496 15.25C9.91114 15.25 9.90731 15.25 9.90349 15.25C9.89967 15.25 9.89585 15.25 9.89203 15.25C9.88821 15.25 9.88439 15.25 9.88058 15.25C9.87676 15.25 9.87295 15.25 9.86914 15.25C9.86533 15.25 9.86152 15.25 9.85771 15.25C9.85391 15.25 9.8501 15.25 9.8463 15.25C9.8425 15.25 9.83869 15.25 9.83489 15.25C9.8311 15.25 9.8273 15.25 9.8235 15.25C9.81971 15.25 9.81591 15.25 9.81212 15.25C9.80833 15.25 9.80454 15.25 9.80075 15.25C9.79696 15.25 9.79317 15.25 9.78939 15.25C9.78561 15.25 9.78182 15.25 9.77804 15.25C9.77426 15.25 9.77048 15.25 9.7667 15.25C9.76293 15.25 9.75915 15.25 9.75538 15.25C9.7516 15.25 9.74783 15.25 9.74406 15.25C9.74029 15.25 9.73652 15.25 9.73275 15.25C9.72899 15.25 9.72522 15.25 9.72146 15.25C9.71769 15.25 9.71393 15.25 9.71017 15.25C9.70641 15.25 9.70265 15.25 9.6989 15.25C9.69514 15.25 9.69138 15.25 9.68763 15.25C9.68388 15.25 9.68013 15.25 9.67638 15.25C9.67263 15.25 9.66888 15.25 9.66513 15.25C9.66138 15.25 9.65764 15.25 9.65389 15.25C9.65015 15.25 9.64641 15.25 9.64267 15.25C9.63893 15.25 9.63519 15.25 9.63145 15.25C9.62772 15.25 9.62398 15.25 9.62025 15.25C9.61651 15.25 9.61278 15.25 9.60905 15.25C9.60532 15.25 9.60159 15.25 9.59786 15.25C9.59413 15.25 9.59041 15.25 9.58668 15.25C9.58296 15.25 9.57924 15.25 9.57552 15.25C9.57179 15.25 9.56807 15.25 9.56436 15.25C9.56064 15.25 9.55692 15.25 9.5532 15.25C9.54949 15.25 9.54577 15.25 9.54206 15.25C9.53835 15.25 9.53464 15.25 9.53093 15.25C9.52722 15.25 9.52351 15.25 9.5198 15.25C9.5161 15.25 9.51239 15.25 9.50869 15.25C9.50499 15.25 9.50128 15.25 9.49758 15.25C9.49388 15.25 9.49018 15.25 9.48648 15.25C9.48278 15.25 9.47909 15.25 9.47539 15.25C9.4717 15.25 9.468 15.25 9.46431 15.25C9.46062 15.25 9.45693 15.25 9.45324 15.25C9.44955 15.25 9.44586 15.25 9.44217 15.25C9.43848 15.25 9.4348 15.25 9.43111 15.25C9.42743 15.25 9.42375 15.25 9.42006 15.25C9.41638 15.25 9.4127 15.25 9.40902 15.25C9.40534 15.25 9.40166 15.25 9.39799 15.25C9.39431 15.25 9.39063 15.25 9.38696 15.25C9.38329 15.25 9.37961 15.25 9.37594 15.25C9.37227 15.25 9.3686 15.25 9.36493 15.25C9.36126 15.25 9.35759 15.25 9.35393 15.25C9.35026 15.25 9.34659 15.25 9.34293 15.25C9.33926 15.25 9.3356 15.25 9.33194 15.25C9.32828 15.25 9.32462 15.25 9.32096 15.25C9.3173 15.25 9.31364 15.25 9.30998 15.25C9.30632 15.25 9.30267 15.25 9.29901 15.25C9.29536 15.25 9.2917 15.25 9.28805 15.25C9.2844 15.25 9.28074 15.25 9.27709 15.25C9.27344 15.25 9.26979 15.25 9.26614 15.25C9.2625 15.25 9.25885 15.25 9.2552 15.25C9.25156 15.25 9.24791 15.25 9.24427 15.25C9.24062 15.25 9.23698 15.25 9.23334 15.25C9.2297 15.25 9.22605 15.25 9.22241 15.25C9.21877 15.25 9.21514 15.25 9.2115 15.25C9.20786 15.25 9.20422 15.25 9.20059 15.25C9.19695 15.25 9.19332 15.25 9.18968 15.25C9.18605 15.25 9.18241 15.25 9.17878 15.25C9.17515 15.25 9.17152 15.25 9.16789 15.25C9.16426 15.25 9.16063 15.25 9.157 15.25C9.15337 15.25 9.14975 15.25 9.14612 15.25C9.14249 15.25 9.13887 15.25 9.13524 15.25C9.13162 15.25 9.128 15.25 9.12437 15.25C9.12075 15.25 9.11713 15.25 9.11351 15.25C9.10989 15.25 9.10627 15.25 9.10265 15.25C9.09903 15.25 9.09541 15.25 9.09179 15.25C9.08817 15.25 9.08456 15.25 9.08094 15.25C9.07733 15.25 9.07371 15.25 9.0701 15.25C9.06648 15.25 9.06287 15.25 9.05926 15.25C9.05564 15.25 9.05203 15.25 9.04842 15.25C9.04481 15.25 9.0412 15.25 9.03759 15.25C9.03398 15.25 9.03037 15.25 9.02676 15.25C9.02316 15.25 9.01955 15.25 9.01594 15.25C9.01234 15.25 9.00873 15.25 9.00512 15.25C9.00152 15.25 8.99792 15.25 8.99431 15.25C8.99071 15.25 8.9871 15.25 8.9835 15.25C8.9799 15.25 8.9763 15.25 8.9727 15.25C8.9691 15.25 8.9655 15.25 8.9619 15.25C8.9583 15.25 8.9547 15.25 8.9511 15.25C8.9475 15.25 8.94391 15.25 8.94031 15.25C8.93671 15.25 8.93312 15.25 8.92952 15.25C8.92592 15.25 8.92233 15.25 8.91873 15.25C8.91514 15.25 8.91155 15.25 8.90795 15.25C8.90436 15.25 8.90077 15.25 8.89717 15.25C8.89358 15.25 8.88999 15.25 8.8864 15.25C8.88281 15.25 8.87922 15.25 8.87563 15.25C8.87204 15.25 8.86845 15.25 8.86486 15.25C8.86127 15.25 8.85768 15.25 8.85409 15.25C8.85051 15.25 8.84692 15.25 8.84333 15.25C8.83975 15.25 8.83616 15.25 8.83257 15.25C8.82899 15.25 8.8254 15.25 8.82182 15.25C8.81823 15.25 8.81465 15.25 8.81106 15.25C8.80748 15.25 8.8039 15.25 8.80031 15.25C8.79673 15.25 8.79315 15.25 8.78957 15.25C8.78598 15.25 8.7824 15.25 8.77882 15.25C8.77524 15.25 8.77166 15.25 8.76808 15.25C8.76449 15.25 8.76091 15.25 8.75733 15.25C8.75375 15.25 8.75017 15.25 8.7466 15.25C8.74302 15.25 8.73944 15.25 8.73586 15.25C8.73228 15.25 8.7287 15.25 8.72512 15.25C8.72155 15.25 8.71797 15.25 8.71439 15.25C8.71081 15.25 8.70724 15.25 8.70366 15.25C8.70008 15.25 8.69651 15.25 8.69293 15.25C8.68936 15.25 8.68578 15.25 8.6822 15.25C8.67863 15.25 8.67505 15.25 8.67148 15.25C8.6679 15.25 8.66433 15.25 8.66075 15.25C8.65718 15.25 8.6536 15.25 8.65003 15.25C8.64646 15.25 8.64288 15.25 8.63931 15.25C8.63573 15.25 8.63216 15.25 8.62859 15.25C8.62501 15.25 8.62144 15.25 8.61787 15.25C8.6143 15.25 8.61072 15.25 8.60715 15.25C8.60358 15.25 8.6 15.25 8.59643 15.25C8.59286 15.25 8.58929 15.25 8.58572 15.25C8.58214 15.25 8.57857 15.25 8.575 15.25C8.57143 15.25 8.56786 15.25 8.56428 15.25C8.56071 15.25 8.55714 15.25 8.55357 15.25C8.55 15.25 8.54643 15.25 8.54285 15.25C8.53928 15.25 8.53571 15.25 8.53214 15.25C8.52857 15.25 8.525 15.25 8.52143 15.25C8.51786 15.25 8.51428 15.25 8.51071 15.25C8.50714 15.25 8.50357 15.25 8.5 15.25C8.49643 15.25 8.49286 15.25 8.48929 15.25C8.48572 15.25 8.48214 15.25 8.47857 15.25C8.475 15.25 8.47143 15.25 8.46786 15.25C8.46429 15.25 8.46072 15.25 8.45715 15.25C8.45357 15.25 8.45 15.25 8.44643 15.25C8.44286 15.25 8.43929 15.25 8.43572 15.25C8.43214 15.25 8.42857 15.25 8.425 15.25C8.42143 15.25 8.41786 15.25 8.41428 15.25C8.41071 15.25 8.40714 15.25 8.40357 15.25C8.4 15.25 8.39642 15.25 8.39285 15.25C8.38928 15.25 8.3857 15.25 8.38213 15.25C8.37856 15.25 8.37499 15.25 8.37141 15.25C8.36784 15.25 8.36427 15.25 8.36069 15.25C8.35712 15.25 8.35354 15.25 8.34997 15.25C8.3464 15.25 8.34282 15.25 8.33925 15.25C8.33567 15.25 8.3321 15.25 8.32852 15.25C8.32495 15.25 8.32137 15.25 8.3178 15.25C8.31422 15.25 8.31064 15.25 8.30707 15.25C8.30349 15.25 8.29992 15.25 8.29634 15.25C8.29276 15.25 8.28919 15.25 8.28561 15.25C8.28203 15.25 8.27845 15.25 8.27488 15.25C8.2713 15.25 8.26772 15.25 8.26414 15.25C8.26056 15.25 8.25698 15.25 8.2534 15.25C8.24983 15.25 8.24625 15.25 8.24267 15.25C8.23909 15.25 8.23551 15.25 8.23192 15.25C8.22834 15.25 8.22476 15.25 8.22118 15.25C8.2176 15.25 8.21402 15.25 8.21043 15.25C8.20685 15.25 8.20327 15.25 8.19969 15.25C8.1961 15.25 8.19252 15.25 8.18894 15.25C8.18535 15.25 8.18177 15.25 8.17818 15.25C8.1746 15.25 8.17101 15.25 8.16743 15.25C8.16384 15.25 8.16025 15.25 8.15667 15.25C8.15308 15.25 8.14949 15.25 8.14591 15.25C8.14232 15.25 8.13873 15.25 8.13514 15.25C8.13155 15.25 8.12796 15.25 8.12437 15.25C8.12078 15.25 8.11719 15.25 8.1136 15.25C8.11001 15.25 8.10642 15.25 8.10283 15.25C8.09923 15.25 8.09564 15.25 8.09205 15.25C8.08845 15.25 8.08486 15.25 8.08127 15.25C8.07767 15.25 8.07408 15.25 8.07048 15.25C8.06688 15.25 8.06329 15.25 8.05969 15.25C8.05609 15.25 8.0525 15.25 8.0489 15.25C8.0453 15.25 8.0417 15.25 8.0381 15.25C8.0345 15.25 8.0309 15.25 8.0273 15.25C8.0237 15.25 8.0201 15.25 8.0165 15.25C8.0129 15.25 8.00929 15.25 8.00569 15.25C8.00208 15.25 7.99848 15.25 7.99488 15.25C7.99127 15.25 7.98766 15.25 7.98406 15.25C7.98045 15.25 7.97684 15.25 7.97324 15.25C7.96963 15.25 7.96602 15.25 7.96241 15.25C7.9588 15.25 7.95519 15.25 7.95158 15.25C7.94797 15.25 7.94436 15.25 7.94074 15.25C7.93713 15.25 7.93352 15.25 7.9299 15.25C7.92629 15.25 7.92267 15.25 7.91906 15.25C7.91544 15.25 7.91183 15.25 7.90821 15.25C7.90459 15.25 7.90097 15.25 7.89735 15.25C7.89373 15.25 7.89011 15.25 7.88649 15.25C7.88287 15.25 7.87925 15.25 7.87563 15.25C7.872 15.25 7.86838 15.25 7.86476 15.25C7.86113 15.25 7.85751 15.25 7.85388 15.25C7.85025 15.25 7.84663 15.25 7.843 15.25C7.83937 15.25 7.83574 15.25 7.83211 15.25C7.82848 15.25 7.82485 15.25 7.82122 15.25C7.81759 15.25 7.81395 15.25 7.81032 15.25C7.80668 15.25 7.80305 15.25 7.79941 15.25C7.79578 15.25 7.79214 15.25 7.7885 15.25C7.78486 15.25 7.78123 15.25 7.77759 15.25C7.77395 15.25 7.7703 15.25 7.76666 15.25C7.76302 15.25 7.75938 15.25 7.75573 15.25C7.75209 15.25 7.74844 15.25 7.7448 15.25C7.74115 15.25 7.7375 15.25 7.73386 15.25C7.73021 15.25 7.72656 15.25 7.72291 15.25C7.71926 15.25 7.7156 15.25 7.71195 15.25C7.7083 15.25 7.70464 15.25 7.70099 15.25C7.69733 15.25 7.69368 15.25 7.69002 15.25C7.68636 15.25 7.6827 15.25 7.67904 15.25C7.67538 15.25 7.67172 15.25 7.66806 15.25C7.6644 15.25 7.66074 15.25 7.65707 15.25C7.65341 15.25 7.64974 15.25 7.64607 15.25C7.64241 15.25 7.63874 15.25 7.63507 15.25C7.6314 15.25 7.62773 15.25 7.62406 15.25C7.62039 15.25 7.61671 15.25 7.61304 15.25C7.60937 15.25 7.60569 15.25 7.60201 15.25C7.59834 15.25 7.59466 15.25 7.59098 15.25C7.5873 15.25 7.58362 15.25 7.57994 15.25C7.57625 15.25 7.57257 15.25 7.56889 15.25C7.5652 15.25 7.56152 15.25 7.55783 15.25C7.55414 15.25 7.55045 15.25 7.54676 15.25C7.54307 15.25 7.53938 15.25 7.53569 15.25C7.532 15.25 7.5283 15.25 7.52461 15.25C7.52091 15.25 7.51722 15.25 7.51352 15.25C7.50982 15.25 7.50612 15.25 7.50242 15.25C7.49872 15.25 7.49501 15.25 7.49131 15.25C7.48761 15.25 7.4839 15.25 7.4802 15.25C7.47649 15.25 7.47278 15.25 7.46907 15.25C7.46536 15.25 7.46165 15.25 7.45794 15.25C7.45423 15.25 7.45051 15.25 7.4468 15.25C7.44308 15.25 7.43936 15.25 7.43564 15.25C7.43193 15.25 7.42821 15.25 7.42448 15.25C7.42076 15.25 7.41704 15.25 7.41332 15.25C7.40959 15.25 7.40587 15.25 7.40214 15.25C7.39841 15.25 7.39468 15.25 7.39095 15.25C7.38722 15.25 7.38349 15.25 7.37975 15.25C7.37602 15.25 7.37228 15.25 7.36855 15.25C7.36481 15.25 7.36107 15.25 7.35733 15.25C7.35359 15.25 7.34985 15.25 7.34611 15.25C7.34236 15.25 7.33862 15.25 7.33487 15.25C7.33112 15.25 7.32737 15.25 7.32362 15.25C7.31987 15.25 7.31612 15.25 7.31237 15.25C7.30862 15.25 7.30486 15.25 7.3011 15.25C7.29735 15.25 7.29359 15.25 7.28983 15.25C7.28607 15.25 7.28231 15.25 7.27854 15.25C7.27478 15.25 7.27101 15.25 7.26725 15.25C7.26348 15.25 7.25971 15.25 7.25594 15.25C7.25217 15.25 7.2484 15.25 7.24462 15.25C7.24085 15.25 7.23707 15.25 7.2333 15.25C7.22952 15.25 7.22574 15.25 7.22196 15.25C7.21818 15.25 7.21439 15.25 7.21061 15.25C7.20683 15.25 7.20304 15.25 7.19925 15.25C7.19546 15.25 7.19167 15.25 7.18788 15.25C7.18409 15.25 7.18029 15.25 7.1765 15.25C7.1727 15.25 7.1689 15.25 7.16511 15.25C7.16131 15.25 7.1575 15.25 7.1537 15.25C7.1499 15.25 7.14609 15.25 7.14229 15.25C7.13848 15.25 7.13467 15.25 7.13086 15.25C7.12705 15.25 7.12324 15.25 7.11942 15.25C7.11561 15.25 7.11179 15.25 7.10797 15.25C7.10415 15.25 7.10033 15.25 7.09651 15.25C7.09269 15.25 7.08886 15.25 7.08504 15.25C7.08121 15.25 7.07738 15.25 7.07355 15.25C7.06972 15.25 7.06589 15.25 7.06205 15.25C7.05822 15.25 7.05438 15.25 7.05054 15.25C7.04671 15.25 7.04287 15.25 7.03902 15.25C7.03518 15.25 7.03134 15.25 7.02749 15.25C7.02364 15.25 7.01979 15.25 7.01594 15.25C7.01209 15.25 7.00824 15.25 7.00438 15.25C7.00053 15.25 6.99667 15.25 6.99281 15.25C6.98896 15.25 6.98509 15.25 6.98123 15.25C6.97737 15.25 6.9735 15.25 6.96963 15.25C6.96577 15.25 6.9619 15.25 6.95803 15.25C6.95415 15.25 6.95028 15.25 6.9464 15.25C6.94253 15.25 6.93865 15.25 6.93477 15.25C6.93089 15.25 6.92701 15.25 6.92312 15.25C6.91924 15.25 6.91535 15.25 6.91146 15.25C6.90757 15.25 6.90368 15.25 6.89979 15.25C6.89589 15.25 6.892 15.25 6.8881 15.25C6.8842 15.25 6.8803 15.25 6.8764 15.25C6.87249 15.25 6.86859 15.25 6.86468 15.25C6.86077 15.25 6.85687 15.25 6.85295 15.25C6.84904 15.25 6.84513 15.25 6.84121 15.25C6.8373 15.25 6.83338 15.25 6.82946 15.25C6.82553 15.25 6.82161 15.25 6.81769 15.25C6.81376 15.25 6.80983 15.25 6.8059 15.25C6.80197 15.25 6.79804 15.25 6.7941 15.25C6.79017 15.25 6.78623 15.25 6.78229 15.25C6.77835 15.25 6.77441 15.25 6.77047 15.25C6.76652 15.25 6.76258 15.25 6.75863 15.25C6.75468 15.25 6.75073 15.25 6.74677 15.25C6.74282 15.25 6.73886 15.25 6.7349 15.25C6.73094 15.25 6.72698 15.25 6.72302 15.25C6.71905 15.25 6.71509 15.25 6.71112 15.25C6.70715 15.25 6.70318 15.25 6.6992 15.25C6.69523 15.25 6.69125 15.25 6.68728 15.25C6.6833 15.25 6.67932 15.25 6.67533 15.25C6.67135 15.25 6.66736 15.25 6.66337 15.25C6.65938 15.25 6.65539 15.25 6.6514 15.25C6.64741 15.25 6.64341 15.25 6.63941 15.25C6.63541 15.25 6.63141 15.25 6.62741 15.25C6.6234 15.25 6.6194 15.25 6.61539 15.25C6.61138 15.25 6.60736 15.25 6.60335 15.25C6.59934 15.25 6.59532 15.25 6.5913 15.25C6.58728 15.25 6.58326 15.25 6.57923 15.25C6.57521 15.25 6.57118 15.25 6.56715 15.25C6.56312 15.25 6.55909 15.25 6.55505 15.25C6.55101 15.25 6.54698 15.25 6.54294 15.25C6.53889 15.25 6.53485 15.25 6.5308 15.25C6.52676 15.25 6.52271 15.25 6.51866 15.25C6.51461 15.25 6.51055 15.25 6.50649 15.25C6.50244 15.25 6.49838 15.25 6.49431 15.25C6.49025 15.25 6.48619 15.25 6.48212 15.25C6.47805 15.25 6.47398 15.25 6.46991 15.25C6.46583 15.25 6.46176 15.25 6.45768 15.25C6.4536 15.25 6.44952 15.25 6.44543 15.25C6.44135 15.25 6.43726 15.25 6.43317 15.25C6.42908 15.25 6.42498 15.25 6.42089 15.25C6.41679 15.25 6.41269 15.25 6.40859 15.25C6.40449 15.25 6.40038 15.25 6.39628 15.25C6.39217 15.25 6.38806 15.25 6.38394 15.25C6.37983 15.25 6.37572 15.25 6.3716 15.25C6.36748 15.25 6.36336 15.25 6.35923 15.25C6.35511 15.25 6.35098 15.25 6.34685 15.25C6.34272 15.25 6.33858 15.25 6.33445 15.25C6.33031 15.25 6.32617 15.25 6.32203 15.25C6.31788 15.25 6.31374 15.25 6.30959 15.25C6.30544 15.25 6.30129 15.25 6.29714 15.25C6.29298 15.25 6.28882 15.25 6.28466 15.25C6.2805 15.25 6.27634 15.25 6.27217 15.25C6.26801 15.25 6.26384 15.25 6.25967 15.25C6.25549 15.25 6.25132 15.25 6.24714 15.25C6.24296 15.25 6.23878 15.25 6.23459 15.25C6.23041 15.25 6.22622 15.25 6.22203 15.25C6.21784 15.25 6.21364 15.25 6.20945 15.25C6.20525 15.25 6.20105 15.25 6.19685 15.25C6.19264 15.25 6.18844 15.25 6.18423 15.25C6.18002 15.25 6.17581 15.25 6.17159 15.25C6.16737 15.25 6.16316 15.25 6.15893 15.25C6.15471 15.25 6.15049 15.25 6.14626 15.25C6.14203 15.25 6.1378 15.25 6.13356 15.25C6.12933 15.25 6.12509 15.25 6.12085 15.25C6.11661 15.25 6.11236 15.25 6.10812 15.25C6.10387 15.25 6.09962 15.25 6.09536 15.25C6.09111 15.25 6.08685 15.25 6.08259 15.25C6.07833 15.25 6.07407 15.25 6.0698 15.25C6.06553 15.25 6.06126 15.25 6.05699 15.25C6.05271 15.25 6.04844 15.25 6.04416 15.25C6.03988 15.25 6.03559 15.25 6.03131 15.25C6.02702 15.25 6.02273 15.25 6.01844 15.25C6.01414 15.25 6.00985 15.25 6.00555 15.25C6.00125 15.25 5.99694 15.25 5.99264 15.25C5.98833 15.25 5.98402 15.25 5.9797 15.25C5.97539 15.25 5.97107 15.25 5.96675 15.25C5.96243 15.25 5.95811 15.25 5.95378 15.25C5.94946 15.25 5.94512 15.25 5.94079 15.25C5.93646 15.25 5.93212 15.25 5.92778 15.25C5.92344 15.25 5.91909 15.25 5.91475 15.25C5.9104 15.25 5.90605 15.25 5.90169 15.25C5.89734 15.25 5.89298 15.25 5.88862 15.25C5.88426 15.25 5.87989 15.25 5.87552 15.25C5.87115 15.25 5.86678 15.25 5.86241 15.25C5.85803 15.25 5.85365 15.25 5.84927 15.25C5.84489 15.25 5.8405 15.25 5.83611 15.25C5.83172 15.25 5.82733 15.25 5.82293 15.25C5.81853 15.25 5.81413 15.25 5.80973 15.25C5.80533 15.25 5.80092 15.25 5.79651 15.25C5.7921 15.25 5.78768 15.25 5.78326 15.25C5.77885 15.25 5.77442 15.25 5.77 15.25C5.76557 15.25 5.76114 15.25 5.75671 15.25C5.75228 15.25 5.74784 15.25 5.7434 15.25C5.73896 15.25 5.73452 15.25 5.73007 15.25C5.72562 15.25 5.72117 15.25 5.71672 15.25C5.71226 15.25 5.7078 15.25 5.70334 15.25C5.69888 15.25 5.69441 15.25 5.68994 15.25C5.68547 15.25 5.681 15.25 5.67652 15.25C5.67205 15.25 5.66757 15.25 5.66308 15.25C5.6586 15.25 5.65411 15.25 5.64962 15.25C5.64513 15.25 5.64063 15.25 5.63613 15.25C5.63163 15.25 5.62713 15.25 5.62262 15.25C5.61811 15.25 5.6136 15.25 5.60909 15.25C5.60457 15.25 5.60006 15.25 5.59553 15.25C5.59101 15.25 5.58649 15.25 5.58196 15.25C5.57743 15.25 5.57289 15.25 5.56835 15.25C5.56382 15.25 5.55928 15.25 5.55473 15.25C5.55018 15.25 5.54564 15.25 5.54108 15.25C5.53653 15.25 5.53197 15.25 5.52741 15.25C5.52285 15.25 5.51829 15.25 5.51372 15.25C5.50915 15.25 5.50458 15.25 5.5 15.25V16.75ZM13.7499 13V16H15.2499V13H13.7499ZM14.4999 16.75H18.4999V15.25H14.4999V16.75ZM19.2499 16V13H17.7499V16H19.2499ZM18.4999 12.25H14.4999V13.75H18.4999V12.25Z" fill="currentColor"/>
</svg>
`, Y5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 3.5V7.5M4.5 20.5V11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 3.5V14.5M12 20.5V18.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="12" cy="16.5" r="1.75" stroke="currentColor" stroke-width="1.5"/>
<path d="M19.5 3.5V5.5M19.5 20.5V9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="19.5" cy="7.5" r="1.75" stroke="currentColor" stroke-width="1.5"/>
<circle cx="4.5" cy="9.5" r="1.75" stroke="currentColor" stroke-width="1.5"/>
</svg>
`, t2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.25 12C3.25 12.4142 3.58579 12.75 4 12.75C4.41421 12.75 4.75 12.4142 4.75 12H3.25ZM8.41719 18.8612C8.07298 18.6308 7.60715 18.723 7.37674 19.0673C7.14633 19.4115 7.23859 19.8773 7.58281 20.1077L8.41719 18.8612ZM2.07617 9.01986C1.81099 8.70165 1.33807 8.65866 1.01986 8.92383C0.701654 9.18901 0.658661 9.66193 0.923834 9.98014L2.07617 9.01986ZM4 12.5L3.42383 12.9801C3.55873 13.142 3.75551 13.2397 3.96601 13.2492C4.17652 13.2588 4.38133 13.1793 4.53033 13.0303L4 12.5ZM7.53033 10.0303C7.82322 9.73744 7.82322 9.26256 7.53033 8.96967C7.23744 8.67678 6.76256 8.67678 6.46967 8.96967L7.53033 10.0303ZM21.25 12C21.25 16.5563 17.5563 20.25 13 20.25V21.75C18.3848 21.75 22.75 17.3848 22.75 12H21.25ZM4.75 12C4.75 7.44365 8.44365 3.75 13 3.75V2.25C7.61522 2.25 3.25 6.61522 3.25 12H4.75ZM13 3.75C17.5563 3.75 21.25 7.44365 21.25 12H22.75C22.75 6.61522 18.3848 2.25 13 2.25V3.75ZM13 20.25C11.303 20.25 9.7277 19.7384 8.41719 18.8612L7.58281 20.1077C9.1325 21.145 10.9967 21.75 13 21.75V20.25ZM0.923834 9.98014L3.42383 12.9801L4.57617 12.0199L2.07617 9.01986L0.923834 9.98014ZM4.53033 13.0303L7.53033 10.0303L6.46967 8.96967L3.46967 11.9697L4.53033 13.0303Z" fill="currentColor"/>
</svg>
`, o2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 12L21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, e2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 12L21.5 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, i2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.03033 12.4697C2.73744 12.1768 2.26256 12.1768 1.96967 12.4697C1.67678 12.7626 1.67678 13.2374 1.96967 13.5303L3.03033 12.4697ZM9.5 20L8.96967 20.5303C9.12341 20.6841 9.3363 20.7635 9.55317 20.7481C9.77004 20.7327 9.96955 20.6239 10.1 20.45L9.5 20ZM22.1 4.45C22.3485 4.11863 22.2814 3.64853 21.95 3.4C21.6186 3.15147 21.1485 3.21863 20.9 3.55L22.1 4.45ZM1.96967 13.5303L8.96967 20.5303L10.0303 19.4697L3.03033 12.4697L1.96967 13.5303ZM10.1 20.45L22.1 4.45L20.9 3.55L8.9 19.55L10.1 20.45Z" fill="currentColor"/>
</svg>
`, C2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.5737 9.4831C16.8405 9.16627 16.7999 8.69313 16.4831 8.42632C16.1663 8.15951 15.6931 8.20006 15.4263 8.5169L10.8704 13.9271L8.49882 11.8149C8.1895 11.5394 7.71541 11.5669 7.43993 11.8762C7.16444 12.1855 7.19186 12.6596 7.50118 12.9351L10.4486 15.5601C10.5998 15.6948 10.7991 15.7626 11.0011 15.7481C11.2031 15.7336 11.3906 15.638 11.5211 15.4831L16.5737 9.4831Z" fill="currentColor"/>
</svg>
`, n2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7V9C15.5 10.933 13.933 12.5 12 12.5C10.067 12.5 8.5 10.933 8.5 9V7C8.5 5.067 10.067 3.5 12 3.5C13.933 3.5 15.5 5.067 15.5 7ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9C17 10.1785 16.5922 11.2618 15.9101 12.1165L19.3354 13.8292C19.3526 13.8378 19.3694 13.847 19.3859 13.8569C19.8771 14.1516 20.3398 14.5009 20.6765 14.9703C21.0258 15.4572 21.2065 16.0267 21.2065 16.6986V20.5C21.2065 21.4665 20.423 22.25 19.4565 22.25H4.54346C3.57696 22.25 2.79346 21.4665 2.79346 20.5V16.6986C2.79346 16.0267 2.9742 15.4571 3.32346 14.9703C3.66018 14.5009 4.12288 14.1516 4.61413 13.8569C4.63059 13.847 4.64742 13.8378 4.66459 13.8292L8.08987 12.1165C7.40775 11.2618 7 10.1785 7 9V7ZM9.28209 13.1975L5.3619 15.1576C4.96317 15.3993 4.7047 15.6182 4.54228 15.8446C4.38918 16.058 4.29346 16.3167 4.29346 16.6986V20.5C4.29346 20.6381 4.40539 20.75 4.54346 20.75H19.4565C19.5945 20.75 19.7065 20.6381 19.7065 20.5V16.6986C19.7065 16.3167 19.6108 16.058 19.4577 15.8446C19.2953 15.6182 19.0368 15.3992 18.6381 15.1576L14.7179 13.1975C13.9355 13.7052 13.0022 14 12 14C10.9978 14 10.0645 13.7052 9.28209 13.1975Z" fill="currentColor"/>
</svg>
`, r2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25 17.5C5.25 17.0858 4.91421 16.75 4.5 16.75C4.08579 16.75 3.75 17.0858 3.75 17.5H5.25ZM3.75 6.5C3.75 6.91421 4.08579 7.25 4.5 7.25C4.91421 7.25 5.25 6.91421 5.25 6.5H3.75ZM11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967C9.67678 7.76256 9.67678 8.23744 9.96967 8.53033L11.0303 7.46967ZM14.5 12L15.0303 12.5303C15.3232 12.2374 15.3232 11.7626 15.0303 11.4697L14.5 12ZM4.5 11.25C4.08579 11.25 3.75 11.5858 3.75 12C3.75 12.4142 4.08579 12.75 4.5 12.75V11.25ZM9.96967 15.4697C9.67678 15.7626 9.67678 16.2374 9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303L9.96967 15.4697ZM18.75 3.5V20.5H20.25V3.5H18.75ZM18.5 20.75H5.5V22.25H18.5V20.75ZM5.25 20.5V17.5H3.75V20.5H5.25ZM18.5 1.75H5.5V3.25H18.5V1.75ZM3.75 3.5V6.5H5.25V3.5H3.75ZM5.5 1.75C4.5335 1.75 3.75 2.5335 3.75 3.5H5.25C5.25 3.36193 5.36193 3.25 5.5 3.25V1.75ZM5.5 20.75C5.36193 20.75 5.25 20.6381 5.25 20.5H3.75C3.75 21.4665 4.5335 22.25 5.5 22.25V20.75ZM18.75 20.5C18.75 20.6381 18.6381 20.75 18.5 20.75V22.25C19.4665 22.25 20.25 21.4665 20.25 20.5H18.75ZM20.25 3.5C20.25 2.5335 19.4665 1.75 18.5 1.75V3.25C18.6381 3.25 18.75 3.36193 18.75 3.5H20.25ZM9.96967 8.53033L13.9697 12.5303L15.0303 11.4697L11.0303 7.46967L9.96967 8.53033ZM14.5 11.25H4.5V12.75H14.5V11.25ZM11.0303 16.5303L15.0303 12.5303L13.9697 11.4697L9.96967 15.4697L11.0303 16.5303Z" fill="currentColor"/>
</svg>
`, l2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 8.5H21.25C21.25 8.30109 21.171 8.11032 21.0303 7.96967L20.5 8.5ZM14.5 2.5L15.0303 1.96967C14.8897 1.82902 14.6989 1.75 14.5 1.75V2.5ZM3.75 3.5V20.5H5.25V3.5H3.75ZM5.5 22.25H19.5V20.75H5.5V22.25ZM21.25 20.5V8.5H19.75V20.5H21.25ZM21.0303 7.96967L15.0303 1.96967L13.9697 3.03033L19.9697 9.03033L21.0303 7.96967ZM14.5 1.75H5.5V3.25H14.5V1.75ZM13.75 2.5V7.5H15.25V2.5H13.75ZM15.5 9.25H20.5V7.75H15.5V9.25ZM19.5 22.25C20.4665 22.25 21.25 21.4665 21.25 20.5H19.75C19.75 20.6381 19.6381 20.75 19.5 20.75V22.25ZM3.75 20.5C3.75 21.4665 4.5335 22.25 5.5 22.25V20.75C5.36193 20.75 5.25 20.6381 5.25 20.5H3.75ZM13.75 7.5C13.75 8.4665 14.5335 9.25 15.5 9.25V7.75C15.3619 7.75 15.25 7.63807 15.25 7.5H13.75ZM5.25 3.5C5.25 3.36193 5.36193 3.25 5.5 3.25V1.75C4.5335 1.75 3.75 2.5335 3.75 3.5H5.25Z" fill="currentColor"/>
</svg>
`, s2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7.36842H20.75C20.75 7.17241 20.6733 6.98418 20.5362 6.84404L20 7.36842ZM14.75 2L15.2862 1.47562C15.1451 1.33133 14.9518 1.25 14.75 1.25V2ZM5.25 3V18H6.75V3H5.25ZM7 19.75H19V18.25H7V19.75ZM20.75 18V7.36842H19.25V18H20.75ZM20.5362 6.84404L15.2862 1.47562L14.2138 2.52438L19.4638 7.8928L20.5362 6.84404ZM14.75 1.25H7V2.75H14.75V1.25ZM14 2V6.36842H15.5V2H14ZM15.75 8.11842H20V6.61842H15.75V8.11842ZM19 19.75C19.9665 19.75 20.75 18.9665 20.75 18H19.25C19.25 18.1381 19.1381 18.25 19 18.25V19.75ZM5.25 18C5.25 18.9665 6.0335 19.75 7 19.75V18.25C6.86193 18.25 6.75 18.1381 6.75 18H5.25ZM14 6.36842C14 7.33492 14.7835 8.11842 15.75 8.11842V6.61842C15.6119 6.61842 15.5 6.50649 15.5 6.36842H14ZM6.75 3C6.75 2.86193 6.86193 2.75 7 2.75V1.25C6.0335 1.25 5.25 2.0335 5.25 3H6.75Z" fill="currentColor"/>
<path d="M2.25 6V21H3.75V6H2.25ZM4 22.75H16V21.25H4V22.75ZM6 4.25H4V5.75H6V4.25ZM17.75 21V19H16.25V21H17.75ZM16 22.75C16.9665 22.75 17.75 21.9665 17.75 21H16.25C16.25 21.1381 16.1381 21.25 16 21.25V22.75ZM2.25 21C2.25 21.9665 3.0335 22.75 4 22.75V21.25C3.86193 21.25 3.75 21.1381 3.75 21H2.25ZM3.75 6C3.75 5.86193 3.86193 5.75 4 5.75V4.25C3.0335 4.25 2.25 5.0335 2.25 6H3.75Z" fill="currentColor"/>
<path d="M13 14.5V9.5M13 9.5L11 11.547M13 9.5L15 11.547" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, m2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.22194 11.3634L1.62813 10.9053H1.62813L2.22194 11.3634ZM21.7675 11.3529L22.3565 10.8886V10.8886L21.7675 11.3529ZM2.21045 12.6489L1.60826 13.0959H1.60826L2.21045 12.6489ZM21.7923 12.6565L22.3943 13.1038H22.3943L21.7923 12.6565ZM21.6513 3.53384C21.9461 3.2429 21.9493 2.76803 21.6584 2.4732C21.3674 2.17837 20.8925 2.17522 20.5977 2.46616L21.6513 3.53384ZM2.35714 20.4662C2.06231 20.7571 2.05916 21.232 2.3501 21.5268C2.64104 21.8216 3.1159 21.8248 3.41074 21.5338L2.35714 20.4662ZM2.81574 11.8216C5.00291 8.98678 7.69675 6.58333 10.7208 6.05271C13.6555 5.53776 17.1843 6.75052 21.1785 11.8173L22.3565 10.8886C18.1745 5.58359 14.1471 3.92857 10.4615 4.57529C6.86512 5.20634 3.8743 7.99402 1.62813 10.9053L2.81574 11.8216ZM1.60826 13.0959C4.70556 17.2679 8.28884 19.4986 12.0008 19.5C15.7128 19.5014 19.2965 17.2733 22.3943 13.1038L21.1903 12.2092C18.2498 16.1669 15.0613 18.0012 12.0013 18C8.94126 17.9988 5.75279 16.1621 2.81263 12.2018L1.60826 13.0959ZM21.1785 11.8173C21.2726 11.9366 21.2709 12.1008 21.1903 12.2092L22.3943 13.1038C22.8889 12.4381 22.8597 11.5269 22.3565 10.8886L21.1785 11.8173ZM1.62813 10.9053C1.13088 11.5498 1.12384 12.4434 1.60826 13.0959L2.81263 12.2018C2.72777 12.0875 2.72947 11.9334 2.81574 11.8216L1.62813 10.9053ZM15.8144 12C15.8144 14.0617 14.1179 15.75 12.0042 15.75V17.25C14.9275 17.25 17.3144 14.9089 17.3144 12H15.8144ZM12.0042 15.75C9.89052 15.75 8.19408 14.0617 8.19408 12H6.69408C6.69408 14.9089 9.08093 17.25 12.0042 17.25V15.75ZM8.19408 12C8.19408 9.93829 9.89052 8.25 12.0042 8.25V6.75C9.08093 6.75 6.69408 9.09115 6.69408 12H8.19408ZM12.0042 8.25C14.1179 8.25 15.8144 9.93829 15.8144 12H17.3144C17.3144 9.09115 14.9275 6.75 12.0042 6.75V8.25ZM20.5977 2.46616L2.35714 20.4662L3.41074 21.5338L21.6513 3.53384L20.5977 2.46616Z" fill="currentColor"/>
</svg>
`, a2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.25 12C3.25 12.4142 3.58579 12.75 4 12.75C4.41421 12.75 4.75 12.4142 4.75 12H3.25ZM8.41719 18.8612C8.07298 18.6308 7.60715 18.723 7.37674 19.0673C7.14633 19.4115 7.23859 19.8773 7.58281 20.1077L8.41719 18.8612ZM2.07617 9.01986C1.81099 8.70165 1.33807 8.65866 1.01986 8.92383C0.701654 9.18901 0.658661 9.66193 0.923834 9.98014L2.07617 9.01986ZM4 12.5L3.42383 12.9801C3.55873 13.142 3.75551 13.2397 3.96601 13.2492C4.17652 13.2588 4.38133 13.1793 4.53033 13.0303L4 12.5ZM7.53033 10.0303C7.82322 9.73744 7.82322 9.26256 7.53033 8.96967C7.23744 8.67678 6.76256 8.67678 6.46967 8.96967L7.53033 10.0303ZM21.25 12C21.25 16.5563 17.5563 20.25 13 20.25V21.75C18.3848 21.75 22.75 17.3848 22.75 12H21.25ZM4.75 12C4.75 7.44365 8.44365 3.75 13 3.75V2.25C7.61522 2.25 3.25 6.61522 3.25 12H4.75ZM13 3.75C17.5563 3.75 21.25 7.44365 21.25 12H22.75C22.75 6.61522 18.3848 2.25 13 2.25V3.75ZM13 20.25C11.303 20.25 9.7277 19.7384 8.41719 18.8612L7.58281 20.1077C9.1325 21.145 10.9967 21.75 13 21.75V20.25ZM0.923834 9.98014L3.42383 12.9801L4.57617 12.0199L2.07617 9.01986L0.923834 9.98014ZM4.53033 13.0303L7.53033 10.0303L6.46967 8.96967L3.46967 11.9697L4.53033 13.0303Z" fill="currentColor"/>
<path d="M15.25 12C15.25 13.2426 14.2426 14.25 13 14.25C11.7574 14.25 10.75 13.2426 10.75 12C10.75 10.7574 11.7574 9.75 13 9.75C14.2426 9.75 15.25 10.7574 15.25 12Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
`, h2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25 2.5C7.25 2.08579 6.91421 1.75 6.5 1.75C6.08579 1.75 5.75 2.08579 5.75 2.5H7.25ZM6.5 17.5H5.75C5.75 17.9142 6.08579 18.25 6.5 18.25V17.5ZM21.5 18.25C21.9142 18.25 22.25 17.9142 22.25 17.5C22.25 17.0858 21.9142 16.75 21.5 16.75V18.25ZM2.5 5.75C2.08579 5.75 1.75 6.08579 1.75 6.5C1.75 6.91421 2.08579 7.25 2.5 7.25V5.75ZM17.5 6.5H18.25C18.25 6.08579 17.9142 5.75 17.5 5.75V6.5ZM16.75 21.5C16.75 21.9142 17.0858 22.25 17.5 22.25C17.9142 22.25 18.25 21.9142 18.25 21.5H16.75ZM9.53033 15.5303C9.82322 15.2374 9.82322 14.7626 9.53033 14.4697C9.23744 14.1768 8.76256 14.1768 8.46967 14.4697L9.53033 15.5303ZM6.03033 19.0303C6.32322 18.7374 6.32322 18.2626 6.03033 17.9697C5.73744 17.6768 5.26256 17.6768 4.96967 17.9697L6.03033 19.0303ZM3.46967 19.4697C3.17678 19.7626 3.17678 20.2374 3.46967 20.5303C3.76256 20.8232 4.23744 20.8232 4.53033 20.5303L3.46967 19.4697ZM13.5303 11.5303C13.8232 11.2374 13.8232 10.7626 13.5303 10.4697C13.2374 10.1768 12.7626 10.1768 12.4697 10.4697L13.5303 11.5303ZM10.4697 12.4697C10.1768 12.7626 10.1768 13.2374 10.4697 13.5303C10.7626 13.8232 11.2374 13.8232 11.5303 13.5303L10.4697 12.4697ZM14.4697 8.46967C14.1768 8.76256 14.1768 9.23744 14.4697 9.53033C14.7626 9.82322 15.2374 9.82322 15.5303 9.53033L14.4697 8.46967ZM20.5303 4.53033C20.8232 4.23744 20.8232 3.76256 20.5303 3.46967C20.2374 3.17678 19.7626 3.17678 19.4697 3.46967L20.5303 4.53033ZM17.9697 4.96967C17.6768 5.26256 17.6768 5.73744 17.9697 6.03033C18.2626 6.32322 18.7374 6.32322 19.0303 6.03033L17.9697 4.96967ZM5.75 2.5V6.5H7.25V2.5H5.75ZM5.75 6.5V17.5H7.25V6.5H5.75ZM6.5 18.25H17.5V16.75H6.5V18.25ZM17.5 18.25H21.5V16.75H17.5V18.25ZM2.5 7.25H6.5V5.75H2.5V7.25ZM6.5 7.25H17.5V5.75H6.5V7.25ZM16.75 6.5V17.5H18.25V6.5H16.75ZM16.75 17.5V21.5H18.25V17.5H16.75ZM8.46967 14.4697L5.96967 16.9697L7.03033 18.0303L9.53033 15.5303L8.46967 14.4697ZM4.96967 17.9697L3.46967 19.4697L4.53033 20.5303L6.03033 19.0303L4.96967 17.9697ZM12.4697 10.4697L10.4697 12.4697L11.5303 13.5303L13.5303 11.5303L12.4697 10.4697ZM16.9697 5.96967L14.4697 8.46967L15.5303 9.53033L18.0303 7.03033L16.9697 5.96967ZM19.4697 3.46967L17.9697 4.96967L19.0303 6.03033L20.5303 4.53033L19.4697 3.46967Z" fill="currentColor"/>
</svg>
`, c2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6856 16.6856L21.5 21.5M19.1314 10.8157C19.1314 15.4084 15.4084 19.1314 10.8157 19.1314C6.22307 19.1314 2.5 15.4084 2.5 10.8157C2.5 6.22307 6.22307 2.5 10.8157 2.5C15.4084 2.5 19.1314 6.22307 19.1314 10.8157Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8.5 11H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, d2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 11H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 13.5V8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16.6856 16.6856L21.5 21.5M19.1314 10.8157C19.1314 15.4084 15.4084 19.1314 10.8157 19.1314C6.22307 19.1314 2.5 15.4084 2.5 10.8157C2.5 6.22307 6.22307 2.5 10.8157 2.5C15.4084 2.5 19.1314 6.22307 19.1314 10.8157Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, p2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 8.5H21.25C21.25 8.30109 21.171 8.11032 21.0303 7.96967L20.5 8.5ZM14.5 2.5L15.0303 1.96967C14.8897 1.82902 14.6989 1.75 14.5 1.75V2.5ZM3.75 3.5V20.5H5.25V3.5H3.75ZM5.5 22.25H19.5V20.75H5.5V22.25ZM21.25 20.5V8.5H19.75V20.5H21.25ZM21.0303 7.96967L15.0303 1.96967L13.9697 3.03033L19.9697 9.03033L21.0303 7.96967ZM14.5 1.75H5.5V3.25H14.5V1.75ZM13.75 2.5V7.5H15.25V2.5H13.75ZM15.5 9.25H20.5V7.75H15.5V9.25ZM19.5 22.25C20.4665 22.25 21.25 21.4665 21.25 20.5H19.75C19.75 20.6381 19.6381 20.75 19.5 20.75V22.25ZM3.75 20.5C3.75 21.4665 4.5335 22.25 5.5 22.25V20.75C5.36193 20.75 5.25 20.6381 5.25 20.5H3.75ZM13.75 7.5C13.75 8.4665 14.5335 9.25 15.5 9.25V7.75C15.3619 7.75 15.25 7.63807 15.25 7.5H13.75ZM5.25 3.5C5.25 3.36193 5.36193 3.25 5.5 3.25V1.75C4.5335 1.75 3.75 2.5335 3.75 3.5H5.25Z" fill="currentColor"/>
<path d="M7.44727 15.7324H7.74609C8.02539 15.7324 8.23438 15.6777 8.37305 15.5684C8.51172 15.457 8.58105 15.2959 8.58105 15.085C8.58105 14.8721 8.52246 14.7148 8.40527 14.6133C8.29004 14.5117 8.1084 14.4609 7.86035 14.4609H7.44727V15.7324ZM9.49805 15.0527C9.49805 15.5137 9.35352 15.8662 9.06445 16.1104C8.77734 16.3545 8.36816 16.4766 7.83691 16.4766H7.44727V18H6.53906V13.7168H7.90723C8.42676 13.7168 8.82129 13.8291 9.09082 14.0537C9.3623 14.2764 9.49805 14.6094 9.49805 15.0527Z" fill="currentColor"/>
<path d="M13.8604 15.8174C13.8604 16.5225 13.6592 17.0625 13.2568 17.4375C12.8564 17.8125 12.2773 18 11.5195 18H10.3066V13.7168H11.6514C12.3506 13.7168 12.8936 13.9014 13.2803 14.2705C13.667 14.6396 13.8604 15.1553 13.8604 15.8174ZM12.917 15.8408C12.917 14.9209 12.5107 14.4609 11.6982 14.4609H11.2148V17.25H11.6045C12.4795 17.25 12.917 16.7803 12.917 15.8408Z" fill="currentColor"/>
<path d="M15.6416 18H14.748V13.7168H17.2031V14.4609H15.6416V15.5654H17.0947V16.3066H15.6416V18Z" fill="currentColor"/>
</svg>
`, g2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 8.5H21.25C21.25 8.30109 21.171 8.11032 21.0303 7.96967L20.5 8.5ZM14.5 2.5L15.0303 1.96967C14.8897 1.82902 14.6989 1.75 14.5 1.75V2.5ZM3.75 3.5V20.5H5.25V3.5H3.75ZM5.5 22.25H19.5V20.75H5.5V22.25ZM21.25 20.5V8.5H19.75V20.5H21.25ZM21.0303 7.96967L15.0303 1.96967L13.9697 3.03033L19.9697 9.03033L21.0303 7.96967ZM14.5 1.75H5.5V3.25H14.5V1.75ZM13.75 2.5V7.5H15.25V2.5H13.75ZM15.5 9.25H20.5V7.75H15.5V9.25ZM19.5 22.25C20.4665 22.25 21.25 21.4665 21.25 20.5H19.75C19.75 20.6381 19.6381 20.75 19.5 20.75V22.25ZM3.75 20.5C3.75 21.4665 4.5335 22.25 5.5 22.25V20.75C5.36193 20.75 5.25 20.6381 5.25 20.5H3.75ZM13.75 7.5C13.75 8.4665 14.5335 9.25 15.5 9.25V7.75C15.3619 7.75 15.25 7.63807 15.25 7.5H13.75ZM5.25 3.5C5.25 3.36193 5.36193 3.25 5.5 3.25V1.75C4.5335 1.75 3.75 2.5335 3.75 3.5H5.25Z" fill="currentColor"/>
<path d="M10.0928 15.8174C10.0928 16.5225 9.8916 17.0625 9.48926 17.4375C9.08887 17.8125 8.50977 18 7.75195 18H6.53906V13.7168H7.88379C8.58301 13.7168 9.12598 13.9014 9.5127 14.2705C9.89941 14.6396 10.0928 15.1553 10.0928 15.8174ZM9.14941 15.8408C9.14941 14.9209 8.74316 14.4609 7.93066 14.4609H7.44727V17.25H7.83691C8.71191 17.25 9.14941 16.7803 9.14941 15.8408ZM14.8682 15.8525C14.8682 16.5615 14.6924 17.1064 14.3408 17.4873C13.9893 17.8682 13.4854 18.0586 12.8291 18.0586C12.1729 18.0586 11.6689 17.8682 11.3174 17.4873C10.9658 17.1064 10.79 16.5596 10.79 15.8467C10.79 15.1338 10.9658 14.5898 11.3174 14.2148C11.6709 13.8379 12.1768 13.6494 12.835 13.6494C13.4932 13.6494 13.9961 13.8389 14.3438 14.2178C14.6934 14.5967 14.8682 15.1416 14.8682 15.8525ZM11.7422 15.8525C11.7422 16.3311 11.833 16.6914 12.0146 16.9336C12.1963 17.1758 12.4678 17.2969 12.8291 17.2969C13.5537 17.2969 13.916 16.8154 13.916 15.8525C13.916 14.8877 13.5557 14.4053 12.835 14.4053C12.4736 14.4053 12.2012 14.5273 12.0176 14.7715C11.834 15.0137 11.7422 15.374 11.7422 15.8525ZM17.5752 14.4111C17.2334 14.4111 16.9688 14.54 16.7812 14.7979C16.5938 15.0537 16.5 15.4111 16.5 15.8701C16.5 16.8252 16.8584 17.3027 17.5752 17.3027C17.876 17.3027 18.2402 17.2275 18.668 17.0771V17.8389C18.3164 17.9854 17.9238 18.0586 17.4902 18.0586C16.8672 18.0586 16.3906 17.8701 16.0605 17.4932C15.7305 17.1143 15.5654 16.5713 15.5654 15.8643C15.5654 15.4189 15.6465 15.0293 15.8086 14.6953C15.9707 14.3594 16.2031 14.1025 16.5059 13.9248C16.8105 13.7451 17.167 13.6553 17.5752 13.6553C17.9912 13.6553 18.4092 13.7559 18.8291 13.957L18.5361 14.6953C18.376 14.6191 18.2148 14.5527 18.0527 14.4961C17.8906 14.4395 17.7314 14.4111 17.5752 14.4111Z" fill="currentColor"/>
</svg>
`, u2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 8.5H21.25C21.25 8.30109 21.171 8.11032 21.0303 7.96967L20.5 8.5ZM14.5 2.5L15.0303 1.96967C14.8897 1.82902 14.6989 1.75 14.5 1.75V2.5ZM3.75 3.5V20.5H5.25V3.5H3.75ZM5.5 22.25H19.5V20.75H5.5V22.25ZM21.25 20.5V8.5H19.75V20.5H21.25ZM21.0303 7.96967L15.0303 1.96967L13.9697 3.03033L19.9697 9.03033L21.0303 7.96967ZM14.5 1.75H5.5V3.25H14.5V1.75ZM13.75 2.5V7.5H15.25V2.5H13.75ZM15.5 9.25H20.5V7.75H15.5V9.25ZM19.5 22.25C20.4665 22.25 21.25 21.4665 21.25 20.5H19.75C19.75 20.6381 19.6381 20.75 19.5 20.75V22.25ZM3.75 20.5C3.75 21.4665 4.5335 22.25 5.5 22.25V20.75C5.36193 20.75 5.25 20.6381 5.25 20.5H3.75ZM13.75 7.5C13.75 8.4665 14.5335 9.25 15.5 9.25V7.75C15.3619 7.75 15.25 7.63807 15.25 7.5H13.75ZM5.25 3.5C5.25 3.36193 5.36193 3.25 5.5 3.25V1.75C4.5335 1.75 3.75 2.5335 3.75 3.5H5.25Z" fill="currentColor"/>
<path d="M7.44727 15.7324H7.74609C8.02539 15.7324 8.23438 15.6777 8.37305 15.5684C8.51172 15.457 8.58105 15.2959 8.58105 15.085C8.58105 14.8721 8.52246 14.7148 8.40527 14.6133C8.29004 14.5117 8.1084 14.4609 7.86035 14.4609H7.44727V15.7324ZM9.49805 15.0527C9.49805 15.5137 9.35352 15.8662 9.06445 16.1104C8.77734 16.3545 8.36816 16.4766 7.83691 16.4766H7.44727V18H6.53906V13.7168H7.90723C8.42676 13.7168 8.82129 13.8291 9.09082 14.0537C9.3623 14.2764 9.49805 14.6094 9.49805 15.0527ZM11.2148 15.7324H11.5137C11.793 15.7324 12.002 15.6777 12.1406 15.5684C12.2793 15.457 12.3486 15.2959 12.3486 15.085C12.3486 14.8721 12.29 14.7148 12.1729 14.6133C12.0576 14.5117 11.876 14.4609 11.6279 14.4609H11.2148V15.7324ZM13.2656 15.0527C13.2656 15.5137 13.1211 15.8662 12.832 16.1104C12.5449 16.3545 12.1357 16.4766 11.6045 16.4766H11.2148V18H10.3066V13.7168H11.6748C12.1943 13.7168 12.5889 13.8291 12.8584 14.0537C13.1299 14.2764 13.2656 14.6094 13.2656 15.0527ZM15.7266 18H14.8184V14.4727H13.6553V13.7168H16.8896V14.4727H15.7266V18Z" fill="currentColor"/>
</svg>
`, M2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 8.5H21.25C21.25 8.30109 21.171 8.11032 21.0303 7.96967L20.5 8.5ZM14.5 2.5L15.0303 1.96967C14.8897 1.82902 14.6989 1.75 14.5 1.75V2.5ZM3.75 3.5V20.5H5.25V3.5H3.75ZM5.5 22.25H19.5V20.75H5.5V22.25ZM21.25 20.5V8.5H19.75V20.5H21.25ZM21.0303 7.96967L15.0303 1.96967L13.9697 3.03033L19.9697 9.03033L21.0303 7.96967ZM14.5 1.75H5.5V3.25H14.5V1.75ZM13.75 2.5V7.5H15.25V2.5H13.75ZM15.5 9.25H20.5V7.75H15.5V9.25ZM19.5 22.25C20.4665 22.25 21.25 21.4665 21.25 20.5H19.75C19.75 20.6381 19.6381 20.75 19.5 20.75V22.25ZM3.75 20.5C3.75 21.4665 4.5335 22.25 5.5 22.25V20.75C5.36193 20.75 5.25 20.6381 5.25 20.5H3.75ZM13.75 7.5C13.75 8.4665 14.5335 9.25 15.5 9.25V7.75C15.3619 7.75 15.25 7.63807 15.25 7.5H13.75ZM5.25 3.5C5.25 3.36193 5.36193 3.25 5.5 3.25V1.75C4.5335 1.75 3.75 2.5335 3.75 3.5H5.25Z" fill="currentColor"/>
<path d="M7.53613 18.543C7.33105 18.543 7.15234 18.5215 7 18.4785V17.7227C7.15625 17.7617 7.29883 17.7812 7.42773 17.7812C7.62695 17.7812 7.76953 17.7188 7.85547 17.5938C7.94141 17.4707 7.98438 17.2773 7.98438 17.0137V13H8.89258V17.0078C8.89258 17.5078 8.77832 17.8887 8.5498 18.1504C8.32129 18.4121 7.9834 18.543 7.53613 18.543Z" fill="currentColor"/>
<path d="M10.8789 15.0156H11.1777C11.457 15.0156 11.666 14.9609 11.8047 14.8516C11.9434 14.7402 12.0127 14.5791 12.0127 14.3682C12.0127 14.1553 11.9541 13.998 11.8369 13.8965C11.7217 13.7949 11.54 13.7441 11.292 13.7441H10.8789V15.0156ZM12.9297 14.3359C12.9297 14.7969 12.7852 15.1494 12.4961 15.3936C12.209 15.6377 11.7998 15.7598 11.2686 15.7598H10.8789V17.2832H9.9707V13H11.3389C11.8584 13 12.2529 13.1123 12.5225 13.3369C12.7939 13.5596 12.9297 13.8926 12.9297 14.3359Z" fill="currentColor"/>
<path d="M15.3164 14.9746H17.0156V17.1953C16.7402 17.2852 16.4805 17.3477 16.2363 17.3828C15.9941 17.4199 15.7461 17.4385 15.4922 17.4385C14.8457 17.4385 14.3516 17.249 14.0098 16.8701C13.6699 16.4893 13.5 15.9434 13.5 15.2324C13.5 14.541 13.6973 14.002 14.0918 13.6152C14.4883 13.2285 15.0371 13.0352 15.7383 13.0352C16.1777 13.0352 16.6016 13.123 17.0098 13.2988L16.708 14.0254C16.3955 13.8691 16.0703 13.791 15.7324 13.791C15.3398 13.791 15.0254 13.9229 14.7891 14.1865C14.5527 14.4502 14.4346 14.8047 14.4346 15.25C14.4346 15.7148 14.5293 16.0703 14.7188 16.3164C14.9102 16.5605 15.1875 16.6826 15.5508 16.6826C15.7402 16.6826 15.9326 16.6631 16.1279 16.624V15.7305H15.3164V14.9746Z" fill="currentColor"/>
</svg>
`, w2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 8.5H21.25C21.25 8.30109 21.171 8.11032 21.0303 7.96967L20.5 8.5ZM14.5 2.5L15.0303 1.96967C14.8897 1.82902 14.6989 1.75 14.5 1.75V2.5ZM3.75 3.5V20.5H5.25V3.5H3.75ZM5.5 22.25H19.5V20.75H5.5V22.25ZM21.25 20.5V8.5H19.75V20.5H21.25ZM21.0303 7.96967L15.0303 1.96967L13.9697 3.03033L19.9697 9.03033L21.0303 7.96967ZM14.5 1.75H5.5V3.25H14.5V1.75ZM13.75 2.5V7.5H15.25V2.5H13.75ZM15.5 9.25H20.5V7.75H15.5V9.25ZM19.5 22.25C20.4665 22.25 21.25 21.4665 21.25 20.5H19.75C19.75 20.6381 19.6381 20.75 19.5 20.75V22.25ZM3.75 20.5C3.75 21.4665 4.5335 22.25 5.5 22.25V20.75C5.36193 20.75 5.25 20.6381 5.25 20.5H3.75ZM13.75 7.5C13.75 8.4665 14.5335 9.25 15.5 9.25V7.75C15.3619 7.75 15.25 7.63807 15.25 7.5H13.75ZM5.25 3.5C5.25 3.36193 5.36193 3.25 5.5 3.25V1.75C4.5335 1.75 3.75 2.5335 3.75 3.5H5.25Z" fill="currentColor"/>
<path d="M7.44727 15.7324H7.74609C8.02539 15.7324 8.23438 15.6777 8.37305 15.5684C8.51172 15.457 8.58105 15.2959 8.58105 15.085C8.58105 14.8721 8.52246 14.7148 8.40527 14.6133C8.29004 14.5117 8.1084 14.4609 7.86035 14.4609H7.44727V15.7324ZM9.49805 15.0527C9.49805 15.5137 9.35352 15.8662 9.06445 16.1104C8.77734 16.3545 8.36816 16.4766 7.83691 16.4766H7.44727V18H6.53906V13.7168H7.90723C8.42676 13.7168 8.82129 13.8291 9.09082 14.0537C9.3623 14.2764 9.49805 14.6094 9.49805 15.0527ZM14.1064 18H12.9521L11.0889 14.7598H11.0625C11.0996 15.332 11.1182 15.7402 11.1182 15.9844V18H10.3066V13.7168H11.4521L13.3125 16.9248H13.333C13.3037 16.3682 13.2891 15.9746 13.2891 15.7441V13.7168H14.1064V18ZM16.8135 15.5947H18.5127V17.8154C18.2373 17.9053 17.9775 17.9678 17.7334 18.0029C17.4912 18.04 17.2432 18.0586 16.9893 18.0586C16.3428 18.0586 15.8486 17.8691 15.5068 17.4902C15.167 17.1094 14.9971 16.5635 14.9971 15.8525C14.9971 15.1611 15.1943 14.6221 15.5889 14.2354C15.9854 13.8486 16.5342 13.6553 17.2354 13.6553C17.6748 13.6553 18.0986 13.7432 18.5068 13.9189L18.2051 14.6455C17.8926 14.4893 17.5674 14.4111 17.2295 14.4111C16.8369 14.4111 16.5225 14.543 16.2861 14.8066C16.0498 15.0703 15.9316 15.4248 15.9316 15.8701C15.9316 16.335 16.0264 16.6904 16.2158 16.9365C16.4072 17.1807 16.6846 17.3027 17.0479 17.3027C17.2373 17.3027 17.4297 17.2832 17.625 17.2441V16.3506H16.8135V15.5947Z" fill="currentColor"/>
</svg>
`, H2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 8.5H21.25C21.25 8.30109 21.171 8.11032 21.0303 7.96967L20.5 8.5ZM14.5 2.5L15.0303 1.96967C14.8897 1.82902 14.6989 1.75 14.5 1.75V2.5ZM3.75 3.5V20.5H5.25V3.5H3.75ZM5.5 22.25H19.5V20.75H5.5V22.25ZM21.25 20.5V8.5H19.75V20.5H21.25ZM21.0303 7.96967L15.0303 1.96967L13.9697 3.03033L19.9697 9.03033L21.0303 7.96967ZM14.5 1.75H5.5V3.25H14.5V1.75ZM13.75 2.5V7.5H15.25V2.5H13.75ZM15.5 9.25H20.5V7.75H15.5V9.25ZM19.5 22.25C20.4665 22.25 21.25 21.4665 21.25 20.5H19.75C19.75 20.6381 19.6381 20.75 19.5 20.75V22.25ZM3.75 20.5C3.75 21.4665 4.5335 22.25 5.5 22.25V20.75C5.36193 20.75 5.25 20.6381 5.25 20.5H3.75ZM13.75 7.5C13.75 8.4665 14.5335 9.25 15.5 9.25V7.75C15.3619 7.75 15.25 7.63807 15.25 7.5H13.75ZM5.25 3.5C5.25 3.36193 5.36193 3.25 5.5 3.25V1.75C4.5335 1.75 3.75 2.5335 3.75 3.5H5.25Z" fill="currentColor"/>
<path d="M11.002 18H9.96484L8.96875 16.3799L7.97266 18H7L8.4209 15.791L7.09082 13.7168H8.09277L9.01562 15.2578L9.9209 13.7168H10.8994L9.55469 15.8408L11.002 18ZM11.541 18V13.7168H12.4492V17.25H14.1865V18H11.541ZM17.4619 16.8105C17.4619 17.1973 17.3223 17.502 17.043 17.7246C16.7656 17.9473 16.3789 18.0586 15.8828 18.0586C15.4258 18.0586 15.0215 17.9727 14.6699 17.8008V16.957C14.959 17.0859 15.2031 17.1768 15.4023 17.2295C15.6035 17.2822 15.7871 17.3086 15.9531 17.3086C16.1523 17.3086 16.3047 17.2705 16.4102 17.1943C16.5176 17.1182 16.5713 17.0049 16.5713 16.8545C16.5713 16.7705 16.5479 16.6963 16.501 16.6318C16.4541 16.5654 16.3848 16.502 16.293 16.4414C16.2031 16.3809 16.0186 16.2842 15.7393 16.1514C15.4775 16.0283 15.2812 15.9102 15.1504 15.7969C15.0195 15.6836 14.915 15.5518 14.8369 15.4014C14.7588 15.251 14.7197 15.0752 14.7197 14.874C14.7197 14.4951 14.8477 14.1973 15.1035 13.9805C15.3613 13.7637 15.7168 13.6553 16.1699 13.6553C16.3926 13.6553 16.6045 13.6816 16.8057 13.7344C17.0088 13.7871 17.2207 13.8613 17.4414 13.957L17.1484 14.6631C16.9199 14.5693 16.7305 14.5039 16.5801 14.4668C16.4316 14.4297 16.2852 14.4111 16.1406 14.4111C15.9688 14.4111 15.8369 14.4512 15.7451 14.5312C15.6533 14.6113 15.6074 14.7158 15.6074 14.8447C15.6074 14.9248 15.626 14.9951 15.6631 15.0557C15.7002 15.1143 15.7588 15.1719 15.8389 15.2285C15.9209 15.2832 16.1133 15.3828 16.416 15.5273C16.8164 15.7188 17.0908 15.9111 17.2393 16.1045C17.3877 16.2959 17.4619 16.5312 17.4619 16.8105Z" fill="currentColor"/>
</svg>
`, v2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.71499V12.5259H2.9525V18.2399H2V21.0974H2.9525H5.81H7.715H10.5725H12.4775H15.335H17.2399L20.0974 21.0985V21.0974H21.05V18.2399H20.0974V12.5259H21.05V8.71499L11.525 3L2 8.71499ZM5.81 18.2399V12.5259H7.715V18.2399H5.81ZM10.5725 18.2399V12.5259H12.4775V18.2399H10.5725ZM17.2399 18.2399H15.335V12.5259H17.2399V18.2399ZM13.43 8.71499C13.43 9.76656 12.5765 10.62 11.525 10.62C10.4734 10.62 9.61999 9.76656 9.61999 8.71499C9.61999 7.66343 10.4734 6.81 11.525 6.81C12.5765 6.81 13.43 7.66343 13.43 8.71499Z" fill="currentColor"/>
</svg>
`, f2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12C20 10.897 19.103 10 18 10H17V7.00001C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7.00001V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12ZM9 7.00001C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7.00001V10H9V7.00001Z" fill="currentColor"/>
</svg>
`, V2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="10.5" cy="20.5" r="1.75" stroke="currentColor" stroke-width="1.5"/>
<circle cx="18.5" cy="20.5" r="1.75" stroke="currentColor" stroke-width="1.5"/>
</svg>
`, Z2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0475 16.4733C18.8438 15 17.9939 14.25 17.9939 10.1883C17.9939 6.46875 16.0945 5.14359 14.5313 4.5C14.3236 4.41469 14.1281 4.21875 14.0648 4.00547C13.7906 3.07219 13.0219 2.25 12 2.25C10.9781 2.25 10.2089 3.07266 9.9375 4.00641C9.87422 4.22203 9.67875 4.41469 9.4711 4.5C7.90594 5.14453 6.00844 6.465 6.00844 10.1883C6.0061 14.25 5.15625 15 3.9525 16.4733C3.45375 17.0836 3.89063 18 4.76297 18H19.2417C20.1094 18 20.5434 17.0808 20.0475 16.4733Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 18V18.75C15 19.5456 14.6839 20.3087 14.1213 20.8713C13.5587 21.4339 12.7956 21.75 12 21.75C11.2044 21.75 10.4413 21.4339 9.87868 20.8713C9.31607 20.3087 9 19.5456 9 18.75V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, C1 = {
  home: q1,
  "log-out": O1,
  profile: j1,
  close: U1,
  "arrow-up": N1,
  "arrow-down": T1,
  "arrow-left": D1,
  "arrow-right": R1,
  "chevron-up": W1,
  "chevron-down": J1,
  "chevron-left": F1,
  "chevron-right": K1,
  "chevron-first": G1,
  "chevron-last": Q1,
  search: X1,
  edit: Y1,
  print: t5,
  save: o5,
  delete: e5,
  "open-in-new": i5,
  calendar: C5,
  time: n5,
  add: r5,
  remove: l5,
  terminate: s5,
  sort: m5,
  "sort-up": a5,
  "sort-down": h5,
  download: c5,
  upload: d5,
  "document-upload": p5,
  checkbox: g5,
  "checkbox-checked": u5,
  "radio-button": M5,
  "radio-button-checked": w5,
  error: H5,
  warning: v5,
  info: f5,
  success: V5,
  question: Z5,
  incomplete: L5,
  lightbulb: x5,
  "internet-lost": b5,
  dot: y5,
  menu: _5,
  list: k5,
  location: $5,
  telephone: B5,
  laptop: A5,
  form: z5,
  news: S5,
  graph: I5,
  safety: E5,
  link: P5,
  "profile-2": q5,
  "lightbulb-2": O5,
  message: j5,
  printer: U5,
  calculator: N5,
  dots: T5,
  book: D5,
  mic: R5,
  page: W5,
  setting: J5,
  email: F5,
  "arrow-circle-right": K5,
  "loading-spinner": G5,
  power: Q5,
  "card-payment": X5,
  filter: Y5,
  reset: t2,
  plus: o2,
  minus: e2,
  tick: i2,
  "tick-circle": C2,
  identity: n2,
  "log-in": r2,
  file: l2,
  "files-upload": s2,
  hide: m2,
  rotate: a2,
  crop: h2,
  "zoom-out": c2,
  "zoom-in": d2,
  "file-pdf": p2,
  "file-word": g2,
  "file-ppt": u2,
  "file-jpeg": M2,
  "file-png": w2,
  "file-excel": H2,
  govt: v2,
  lock: f2,
  "shopping-cart": V2,
  notification: Z2
}, L2 = Object.keys(C1).sort((C, t) => C.localeCompare(t)).reduce(
  (C, t) => (C[t] = C1[t], C),
  {}
), x2 = ':root{--font-family: "Open Sans", "Lato", sans-serif;--letter-spacing-m: 0;--letter-spacing-s: -.5px}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,main,section{display:block}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}button{appearance:none;border:none;background:none}:-moz-ui-invalid{box-shadow:none}:root{font-size:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}html,body{height:100%}html:focus,body:focus{outline:none!important}*,*:before,*:after{box-sizing:border-box}::-moz-focus-inner{border:0}body{font-family:var(--font-family);color:var(--body-text)}body{font-size:1rem!important}body{line-height:1.5rem!important}.mom-h1,.mom-h2,.mom-h3,.mom-h4,.mom-h5,.mom-h6{max-width:45rem}.mom-h1,.mom-h2,.mom-h3,.mom-h4,.mom-h5,.mom-h6{margin-bottom:1rem}.mom-h1:last-child,.mom-h2:last-child,.mom-h3:last-child,.mom-h4:last-child,.mom-h5:last-child,.mom-h6:last-child{margin-bottom:0}.mom-h1,.mom-h2,.mom-h3,.mom-h4,.mom-h5,.mom-h6{font-weight:600!important}.mom-h1{letter-spacing:var(--letter-spacing-s);color:var(--heading-text)}.mom-h1{font-size:1.75rem!important}.mom-h1{line-height:2.25rem!important}.mom-h2{letter-spacing:var(--letter-spacing-s)}.mom-h2{font-size:1.5rem!important}.mom-h2{line-height:2rem!important}.mom-h3{font-size:1.25rem!important}.mom-h3{line-height:1.75rem!important}.mom-h4{font-size:1rem!important}.mom-h4{line-height:1.5rem!important}.mom-p{max-width:45rem}.mom-p{font-size:1rem!important}.mom-p{line-height:1.5rem!important}.mom-p{margin-bottom:1.5rem}.mom-p:last-child{margin-bottom:0}.mom-p-s{max-width:45rem}.mom-p-s{font-size:.875rem!important}.mom-p-s{line-height:1.25rem!important}.mom-p-s{margin-bottom:1.5rem}.mom-p-s:last-child{margin-bottom:0}.mom-a,a{color:var(--color-blue-70);text-decoration:none;cursor:pointer}.mom-a:active,a:active{color:var(--color-blue-80)}.mom-a:visited,a:visited{color:var(--color-purple-90)}.mom-a:hover,a:hover,.mom-a:hover .MomIcon,a:hover .MomIcon{color:var(--color-blue-80)}ul,ol{list-style-type:none}.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{max-width:80rem;padding-left:1.75rem}.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{font-size:1rem!important}.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{line-height:1.5rem!important}.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{margin-bottom:1.5rem}.mom-ul:last-child,.mom-ul-disc:last-child,.mom-ul-circle:last-child,.mom-ul-square:last-child,.mom-ol:last-child,.mom-ol-alpha:last-child,.mom-ol-decimal:last-child,.mom-ol-roman:last-child{margin-bottom:0}.mom-ul li,.mom-ul-disc li,.mom-ul-circle li,.mom-ul-square li,.mom-ol li,.mom-ol-alpha li,.mom-ol-decimal li,.mom-ol-roman li{margin-bottom:.25rem}.mom-ul li:last-child,.mom-ul-disc li:last-child,.mom-ul-circle li:last-child,.mom-ul-square li:last-child,.mom-ol li:last-child,.mom-ol-alpha li:last-child,.mom-ol-decimal li:last-child,.mom-ol-roman li:last-child{margin-bottom:0}.mom-p+.mom-ul,.mom-p+.mom-ul-disc,.mom-p+.mom-ul-circle,.mom-p+.mom-ul-square,.mom-p+.mom-ol,.mom-p+.mom-ol-alpha,.mom-p+.mom-ol-decimal,.mom-p+.mom-ol-roman{margin-top:-1.25rem}.mom-p-s+.mom-ul,.mom-p-s+.mom-ul-disc,.mom-p-s+.mom-ul-circle,.mom-p-s+.mom-ul-square,.mom-p-s+.mom-ol,.mom-p-s+.mom-ol-alpha,.mom-p-s+.mom-ol-decimal,.mom-p-s+.mom-ol-roman{margin-top:-1.25rem}.mom-ul-s,.mom-ul-s-disc,.mom-ul-s-circle,.mom-ul-s-square,.mom-ol-s,.mom-ol-s-alpha,.mom-ol-s-decimal,.mom-ol-s-roman{max-width:45rem;padding-left:1.75rem}.mom-ul-s,.mom-ul-s-disc,.mom-ul-s-circle,.mom-ul-s-square,.mom-ol-s,.mom-ol-s-alpha,.mom-ol-s-decimal,.mom-ol-s-roman{font-size:.875rem!important}.mom-ul-s,.mom-ul-s-disc,.mom-ul-s-circle,.mom-ul-s-square,.mom-ol-s,.mom-ol-s-alpha,.mom-ol-s-decimal,.mom-ol-s-roman{line-height:1.25rem!important}.mom-ul-s,.mom-ul-s-disc,.mom-ul-s-circle,.mom-ul-s-square,.mom-ol-s,.mom-ol-s-alpha,.mom-ol-s-decimal,.mom-ol-s-roman{margin-bottom:1.5rem}.mom-ul-s:last-child,.mom-ul-s-disc:last-child,.mom-ul-s-circle:last-child,.mom-ul-s-square:last-child,.mom-ol-s:last-child,.mom-ol-s-alpha:last-child,.mom-ol-s-decimal:last-child,.mom-ol-s-roman:last-child{margin-bottom:0}.mom-ul-s li,.mom-ul-s-disc li,.mom-ul-s-circle li,.mom-ul-s-square li,.mom-ol-s li,.mom-ol-s-alpha li,.mom-ol-s-decimal li,.mom-ol-s-roman li{margin-bottom:.25rem}.mom-ul-s li:last-child,.mom-ul-s-disc li:last-child,.mom-ul-s-circle li:last-child,.mom-ul-s-square li:last-child,.mom-ol-s li:last-child,.mom-ol-s-alpha li:last-child,.mom-ol-s-decimal li:last-child,.mom-ol-s-roman li:last-child{margin-bottom:0}.mom-p+.mom-ul-s,.mom-p+.mom-ul-s-disc,.mom-p+.mom-ul-s-circle,.mom-p+.mom-ul-s-square,.mom-p+.mom-ol-s,.mom-p+.mom-ol-s-alpha,.mom-p+.mom-ol-s-decimal,.mom-p+.mom-ol-s-roman{margin-top:-1.25rem}.mom-p-s+.mom-ul-s,.mom-p-s+.mom-ul-s-disc,.mom-p-s+.mom-ul-s-circle,.mom-p-s+.mom-ul-s-square,.mom-p-s+.mom-ol-s,.mom-p-s+.mom-ol-s-alpha,.mom-p-s+.mom-ol-s-decimal,.mom-p-s+.mom-ol-s-roman{margin-top:-1.25rem}.mom-ul,.mom-ul-disc,.mom-ul-s,.mom-ul-s-disc{list-style-type:disc}.mom-ul-circle,.mom-ul-s-circle{list-style-type:circle}.mom-ul-square,.mom-ul-s-square{list-style-type:square}.mom-ol,.mom-ol-alpha,.mom-ol-s,.mom-ol-s-alpha{counter-reset:alpha;list-style-type:none}.mom-ol>li:before,.mom-ol-alpha>li:before,.mom-ol-s>li:before,.mom-ol-s-alpha>li:before{counter-increment:alpha;content:"(" counter(alpha,lower-alpha) ") ";display:inline-flex;width:1.5rem;margin-left:-1.5rem}.mom-ol-decimal,.mom-ol-s-decimal{list-style-type:decimal}.mom-ol-roman,.mom-ol-s-roman{list-style-type:lower-roman}.mom-list-li{margin-bottom:.25rem}.mom-list-li--last{margin-bottom:0}label{cursor:pointer}input,select,textarea,button{margin:0;padding:0;font-family:Open Sans,sans-serif;font-size:inherit;line-height:inherit;color:inherit}textarea{width:100%}button{cursor:pointer;-webkit-user-select:none;user-select:none}button[disabled]{cursor:not-allowed}img,svg{display:block;max-width:100%}strong{font-weight:600!important}em{font-style:italic}.prewrap{white-space:pre-wrap}.nowrap{white-space:nowrap}.mom-transition-fade-enter-active,.mom-transition-fade-leave-active{transition:opacity var(--transition-duration-s) var(--transition-timing-function-ease)}.mom-transition-fade-enter,.mom-transition-fade-leave-to{opacity:0}@keyframes spin{to{transform:rotate(360deg) translateZ(0)}}@keyframes trace{to{stroke-dashoffset:0}}.MomHeroBanner__Slotted{margin-bottom:2rem!important}.snapshot{margin-bottom:1.5rem}.snapshot:last-child{margin-bottom:0}@media(min-width:48rem){body{font-size:1rem!important;line-height:1.5rem!important}.mom-h1{font-size:2.25rem!important;line-height:2.5rem!important}.mom-h2{font-size:1.75rem!important;line-height:2.25rem!important}.mom-h3{font-size:1.25rem!important;line-height:1.75rem!important}.mom-h4,.mom-p,.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{font-size:1rem!important;line-height:1.5rem!important}}@media print{body{width:21cm;height:29.7cm;margin:0 auto!important}}.mom-button-l,.mom-button,.mom-button-s{font-weight:600!important}.mom-button-l{font-size:1.25rem!important}.mom-button-l{line-height:1.75rem!important}.mom-button{font-size:1rem!important}.mom-button{line-height:1.5rem!important}.mom-button-s{font-size:.875rem!important}.mom-button-s{line-height:1.25rem!important}.mom-is-h1,.mom-is-h2,.mom-is-h3,.mom-is-h4,.mom-is-h5,.mom-is-h6{max-width:45rem}.mom-is-h1,.mom-is-h2,.mom-is-h3,.mom-is-h4,.mom-is-h5,.mom-is-h6{margin-bottom:1rem}.mom-is-h1:last-child,.mom-is-h2:last-child,.mom-is-h3:last-child,.mom-is-h4:last-child,.mom-is-h5:last-child,.mom-is-h6:last-child{margin-bottom:0}.mom-is-h1{letter-spacing:var(--letter-spacing-s);color:var(--heading-text)}.mom-is-h1{font-weight:600!important}.mom-is-h1{font-size:1.875rem!important}.mom-is-h1{line-height:2.5rem!important}.mom-is-h2{letter-spacing:var(--letter-spacing-s)}.mom-is-h2{font-weight:600!important}.mom-is-h2{font-size:1.625rem!important}.mom-is-h2{line-height:2.25rem!important}.mom-is-h3{letter-spacing:var(--letter-spacing-s)}.mom-is-h3{font-weight:300!important}.mom-is-h3{font-size:1.625rem!important}.mom-is-h3{line-height:2.25rem!important}.mom-is-h4{font-weight:600!important}.mom-is-h4{font-size:1.25rem!important}.mom-is-h4{line-height:1.75rem!important}.mom-is-h5{font-weight:600!important}.mom-is-h5{font-size:1.125rem!important}.mom-is-h5{line-height:1.5rem!important}.mom-is-h6{font-weight:600!important}.mom-is-h6{font-size:1rem!important}.mom-is-h6{line-height:1.5rem!important}.mom-is-md{font-size:1rem!important}.mom-is-md{line-height:1.5rem!important}.mom-is-sm{font-size:.875rem!important}.mom-is-sm{line-height:1.25rem!important}.mom-is-xs{font-size:.8125rem!important}.mom-is-xs{line-height:1.125rem!important}.mom-is-2xs{font-size:.75rem!important}.mom-is-2xs{line-height:1rem!important}@media(min-width:48rem){.mom-is-h1{font-size:2.375rem!important}.mom-is-h1{line-height:3.25rem!important}}.stack-y\\:24,.stack-y\\:48{display:flex;flex-direction:column}:host{display:inline-flex;vertical-align:bottom;line-height:1;font-size:inherit;height:auto}.MomIcon{font-family:var(--font-family);display:inline-flex;vertical-align:bottom;flex:0 0 auto;fill:currentColor}.MomIcon--size-s{width:1.25rem;height:1.25rem}.MomIcon--size-m{width:1.5rem;height:1.5rem}.MomIcon--size-l{width:2rem;height:2rem}.MomIcon--size-l1{width:2.5rem;height:2.5rem}.MomIcon--size-xl{width:3rem;height:3rem}.MomIcon--variant-primary{color:var(--mom-icon-color-primary)}.MomIcon--variant-secondary{color:var(--mom-icon-color-secondary)}.MomIcon--variant-error{color:var(--mom-icon-color-error)}.MomIcon--variant-warning{color:var(--mom-icon-color-warning)}.MomIcon--variant-success{color:var(--mom-icon-color-success)}.MomIcon--variant-info{color:var(--mom-icon-color-info)}.MomIcon--variant-default{color:var(--mom-icon-color-default)}.MomIcon--variant-light{color:var(--mom-icon-color-light)}.MomIcon--variant-muted{color:var(--mom-icon-color-muted)}.MomIcon--variant-disabled{color:var(--mom-icon-color-disabled)}.MomIcon--variant-link{color:var(--mom-icon-color-link)}.MomIcon>svg{position:relative;width:100%;height:100%}.MomMetricCard__DotIcon svg{width:12px;height:12px}.MomImageCarousel__NextButtonIcon,.MomImageCarousel__PrevButtonIcon,.MomImageCarousel__ThumbnailPrevButtonIcon,.MomImageCarousel__ThumbnailNextButtonIcon{color:var(--mom-image-carousel-button-color)}.MomIcon--variant-light.MomImageCarousel__NextButtonIcon,.MomIcon--variant-light.MomImageCarousel__PrevButtonIcon{color:var(--mom-icon-color-light)}.MomPagination__PrevIcon,.MomPagination__NextIcon{color:var(--mom-pagination-button-color)}.MomLinkListItem__Icon--dot{display:flex;justify-content:center;align-items:center}.MomLinkListItem__Icon--dot svg{width:12px;height:12px}.MomStepIndicator__Icon.MomStepIndicator__Icon--vertical svg{height:1.25rem;width:1.25rem;position:relative}.MomStepIndicator__Icon.MomStepIndicator__Icon--vertical svg path{scale:1.2;transform-origin:center}.MomInputSelect__Tag__CloseIcon svg{width:14px;height:14px}.MomMenuMobileContent__MobileMenuItemIcon{color:var(--color-cool-grey-100)!important}.MomMenuMobileContent__MobileMenuItemIcon--active{color:var(--color-blue-80)!important}.MomMenuMobileContent__MobileMenuViewAllIcon{margin-left:.5rem;margin-top:.125rem}';
var b2 = Object.defineProperty, y2 = Object.getOwnPropertyDescriptor, $ = (C, t, o, e) => {
  for (var i = e > 1 ? void 0 : e ? y2(t, o) : t, n = C.length - 1, r; n >= 0; n--)
    (r = C[n]) && (i = (e ? r(t, o, i) : r(i)) || i);
  return e && i && b2(t, o, i), i;
};
let V = class extends r1 {
  constructor() {
    super(...arguments), this.icon = "", this.iconSrc = "", this.size = "m", this.variant = "default";
  }
  render() {
    const C = this.icon ? W.sanitize(L2[this.icon]).replace("<svg", '<svg focusable="false" data-testid="icon-svg"') : "", t = this.iconSrc ? W.sanitize(`<img src="${this.iconSrc}" alt="" role="presentation"></img>`).replace("<img", '<img focusable="false"') : "";
    return A`
      ${C ? A`<span part="icon" class="MomIcon MomIcon--size-${this.size} MomIcon--variant-${this.variant} ${this.className}">${i1(C)}</span>` : ""}
      ${!C && t ? A`<span part="icon" class="MomIcon MomIcon--size-${this.size} MomIcon--variant-${this.variant} ${this.className}">${i1(t)}</span>` : ""}
    `;
  }
};
V.styles = n1(x2);
$([
  d({ type: String })
], V.prototype, "icon", 2);
$([
  d({ type: String, attribute: "icon-src" })
], V.prototype, "iconSrc", 2);
$([
  d({ type: String })
], V.prototype, "size", 2);
$([
  d({ type: String })
], V.prototype, "variant", 2);
V = $([
  l1("mom-icon")
], V);
const _2 = ':root{--font-family: "Open Sans", "Lato", sans-serif;--letter-spacing-m: 0;--letter-spacing-s: -.5px}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,main,section{display:block}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}button{appearance:none;border:none;background:none}:-moz-ui-invalid{box-shadow:none}:root{font-size:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}html,body{height:100%}html:focus,body:focus{outline:none!important}*,*:before,*:after{box-sizing:border-box}::-moz-focus-inner{border:0}body{font-family:var(--font-family);color:var(--body-text)}body{font-size:1rem!important}body{line-height:1.5rem!important}.mom-h1,.mom-h2,.mom-h3,.mom-h4,.mom-h5,.mom-h6{max-width:45rem}.mom-h1,.mom-h2,.mom-h3,.mom-h4,.mom-h5,.mom-h6{margin-bottom:1rem}.mom-h1:last-child,.mom-h2:last-child,.mom-h3:last-child,.mom-h4:last-child,.mom-h5:last-child,.mom-h6:last-child{margin-bottom:0}.mom-h1,.mom-h2,.mom-h3,.mom-h4,.mom-h5,.mom-h6{font-weight:600!important}.mom-h1{letter-spacing:var(--letter-spacing-s);color:var(--heading-text)}.mom-h1{font-size:1.75rem!important}.mom-h1{line-height:2.25rem!important}.mom-h2{letter-spacing:var(--letter-spacing-s)}.mom-h2{font-size:1.5rem!important}.mom-h2{line-height:2rem!important}.mom-h3{font-size:1.25rem!important}.mom-h3{line-height:1.75rem!important}.mom-h4{font-size:1rem!important}.mom-h4{line-height:1.5rem!important}.mom-p{max-width:45rem}.mom-p{font-size:1rem!important}.mom-p{line-height:1.5rem!important}.mom-p{margin-bottom:1.5rem}.mom-p:last-child{margin-bottom:0}.mom-p-s{max-width:45rem}.mom-p-s{font-size:.875rem!important}.mom-p-s{line-height:1.25rem!important}.mom-p-s{margin-bottom:1.5rem}.mom-p-s:last-child{margin-bottom:0}.mom-a,a{color:var(--color-blue-70);text-decoration:none;cursor:pointer}.mom-a:active,a:active{color:var(--color-blue-80)}.mom-a:visited,a:visited{color:var(--color-purple-90)}.mom-a:hover,a:hover,.mom-a:hover .MomIcon,a:hover .MomIcon{color:var(--color-blue-80)}ul,ol{list-style-type:none}.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{max-width:80rem;padding-left:1.75rem}.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{font-size:1rem!important}.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{line-height:1.5rem!important}.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{margin-bottom:1.5rem}.mom-ul:last-child,.mom-ul-disc:last-child,.mom-ul-circle:last-child,.mom-ul-square:last-child,.mom-ol:last-child,.mom-ol-alpha:last-child,.mom-ol-decimal:last-child,.mom-ol-roman:last-child{margin-bottom:0}.mom-ul li,.mom-ul-disc li,.mom-ul-circle li,.mom-ul-square li,.mom-ol li,.mom-ol-alpha li,.mom-ol-decimal li,.mom-ol-roman li{margin-bottom:.25rem}.mom-ul li:last-child,.mom-ul-disc li:last-child,.mom-ul-circle li:last-child,.mom-ul-square li:last-child,.mom-ol li:last-child,.mom-ol-alpha li:last-child,.mom-ol-decimal li:last-child,.mom-ol-roman li:last-child{margin-bottom:0}.mom-p+.mom-ul,.mom-p+.mom-ul-disc,.mom-p+.mom-ul-circle,.mom-p+.mom-ul-square,.mom-p+.mom-ol,.mom-p+.mom-ol-alpha,.mom-p+.mom-ol-decimal,.mom-p+.mom-ol-roman{margin-top:-1.25rem}.mom-p-s+.mom-ul,.mom-p-s+.mom-ul-disc,.mom-p-s+.mom-ul-circle,.mom-p-s+.mom-ul-square,.mom-p-s+.mom-ol,.mom-p-s+.mom-ol-alpha,.mom-p-s+.mom-ol-decimal,.mom-p-s+.mom-ol-roman{margin-top:-1.25rem}.mom-ul-s,.mom-ul-s-disc,.mom-ul-s-circle,.mom-ul-s-square,.mom-ol-s,.mom-ol-s-alpha,.mom-ol-s-decimal,.mom-ol-s-roman{max-width:45rem;padding-left:1.75rem}.mom-ul-s,.mom-ul-s-disc,.mom-ul-s-circle,.mom-ul-s-square,.mom-ol-s,.mom-ol-s-alpha,.mom-ol-s-decimal,.mom-ol-s-roman{font-size:.875rem!important}.mom-ul-s,.mom-ul-s-disc,.mom-ul-s-circle,.mom-ul-s-square,.mom-ol-s,.mom-ol-s-alpha,.mom-ol-s-decimal,.mom-ol-s-roman{line-height:1.25rem!important}.mom-ul-s,.mom-ul-s-disc,.mom-ul-s-circle,.mom-ul-s-square,.mom-ol-s,.mom-ol-s-alpha,.mom-ol-s-decimal,.mom-ol-s-roman{margin-bottom:1.5rem}.mom-ul-s:last-child,.mom-ul-s-disc:last-child,.mom-ul-s-circle:last-child,.mom-ul-s-square:last-child,.mom-ol-s:last-child,.mom-ol-s-alpha:last-child,.mom-ol-s-decimal:last-child,.mom-ol-s-roman:last-child{margin-bottom:0}.mom-ul-s li,.mom-ul-s-disc li,.mom-ul-s-circle li,.mom-ul-s-square li,.mom-ol-s li,.mom-ol-s-alpha li,.mom-ol-s-decimal li,.mom-ol-s-roman li{margin-bottom:.25rem}.mom-ul-s li:last-child,.mom-ul-s-disc li:last-child,.mom-ul-s-circle li:last-child,.mom-ul-s-square li:last-child,.mom-ol-s li:last-child,.mom-ol-s-alpha li:last-child,.mom-ol-s-decimal li:last-child,.mom-ol-s-roman li:last-child{margin-bottom:0}.mom-p+.mom-ul-s,.mom-p+.mom-ul-s-disc,.mom-p+.mom-ul-s-circle,.mom-p+.mom-ul-s-square,.mom-p+.mom-ol-s,.mom-p+.mom-ol-s-alpha,.mom-p+.mom-ol-s-decimal,.mom-p+.mom-ol-s-roman{margin-top:-1.25rem}.mom-p-s+.mom-ul-s,.mom-p-s+.mom-ul-s-disc,.mom-p-s+.mom-ul-s-circle,.mom-p-s+.mom-ul-s-square,.mom-p-s+.mom-ol-s,.mom-p-s+.mom-ol-s-alpha,.mom-p-s+.mom-ol-s-decimal,.mom-p-s+.mom-ol-s-roman{margin-top:-1.25rem}.mom-ul,.mom-ul-disc,.mom-ul-s,.mom-ul-s-disc{list-style-type:disc}.mom-ul-circle,.mom-ul-s-circle{list-style-type:circle}.mom-ul-square,.mom-ul-s-square{list-style-type:square}.mom-ol,.mom-ol-alpha,.mom-ol-s,.mom-ol-s-alpha{counter-reset:alpha;list-style-type:none}.mom-ol>li:before,.mom-ol-alpha>li:before,.mom-ol-s>li:before,.mom-ol-s-alpha>li:before{counter-increment:alpha;content:"(" counter(alpha,lower-alpha) ") ";display:inline-flex;width:1.5rem;margin-left:-1.5rem}.mom-ol-decimal,.mom-ol-s-decimal{list-style-type:decimal}.mom-ol-roman,.mom-ol-s-roman{list-style-type:lower-roman}.mom-list-li{margin-bottom:.25rem}.mom-list-li--last{margin-bottom:0}label{cursor:pointer}input,select,textarea,button{margin:0;padding:0;font-family:Open Sans,sans-serif;font-size:inherit;line-height:inherit;color:inherit}textarea{width:100%}button{cursor:pointer;-webkit-user-select:none;user-select:none}button[disabled]{cursor:not-allowed}img,svg{display:block;max-width:100%}strong{font-weight:600!important}em{font-style:italic}.prewrap{white-space:pre-wrap}.nowrap{white-space:nowrap}.mom-transition-fade-enter-active,.mom-transition-fade-leave-active{transition:opacity var(--transition-duration-s) var(--transition-timing-function-ease)}.mom-transition-fade-enter,.mom-transition-fade-leave-to{opacity:0}@keyframes spin{to{transform:rotate(360deg) translateZ(0)}}@keyframes trace{to{stroke-dashoffset:0}}.MomHeroBanner__Slotted{margin-bottom:2rem!important}.snapshot{margin-bottom:1.5rem}.snapshot:last-child{margin-bottom:0}@media(min-width:48rem){body{font-size:1rem!important;line-height:1.5rem!important}.mom-h1{font-size:2.25rem!important;line-height:2.5rem!important}.mom-h2{font-size:1.75rem!important;line-height:2.25rem!important}.mom-h3{font-size:1.25rem!important;line-height:1.75rem!important}.mom-h4,.mom-p,.mom-ul,.mom-ul-disc,.mom-ul-circle,.mom-ul-square,.mom-ol,.mom-ol-alpha,.mom-ol-decimal,.mom-ol-roman{font-size:1rem!important;line-height:1.5rem!important}}@media print{body{width:21cm;height:29.7cm;margin:0 auto!important}}.mom-button-l,.mom-button,.mom-button-s{font-weight:600!important}.mom-button-l{font-size:1.25rem!important}.mom-button-l{line-height:1.75rem!important}.mom-button{font-size:1rem!important}.mom-button{line-height:1.5rem!important}.mom-button-s{font-size:.875rem!important}.mom-button-s{line-height:1.25rem!important}.mom-is-h1,.mom-is-h2,.mom-is-h3,.mom-is-h4,.mom-is-h5,.mom-is-h6{max-width:45rem}.mom-is-h1,.mom-is-h2,.mom-is-h3,.mom-is-h4,.mom-is-h5,.mom-is-h6{margin-bottom:1rem}.mom-is-h1:last-child,.mom-is-h2:last-child,.mom-is-h3:last-child,.mom-is-h4:last-child,.mom-is-h5:last-child,.mom-is-h6:last-child{margin-bottom:0}.mom-is-h1{letter-spacing:var(--letter-spacing-s);color:var(--heading-text)}.mom-is-h1{font-weight:600!important}.mom-is-h1{font-size:1.875rem!important}.mom-is-h1{line-height:2.5rem!important}.mom-is-h2{letter-spacing:var(--letter-spacing-s)}.mom-is-h2{font-weight:600!important}.mom-is-h2{font-size:1.625rem!important}.mom-is-h2{line-height:2.25rem!important}.mom-is-h3{letter-spacing:var(--letter-spacing-s)}.mom-is-h3{font-weight:300!important}.mom-is-h3{font-size:1.625rem!important}.mom-is-h3{line-height:2.25rem!important}.mom-is-h4{font-weight:600!important}.mom-is-h4{font-size:1.25rem!important}.mom-is-h4{line-height:1.75rem!important}.mom-is-h5{font-weight:600!important}.mom-is-h5{font-size:1.125rem!important}.mom-is-h5{line-height:1.5rem!important}.mom-is-h6{font-weight:600!important}.mom-is-h6{font-size:1rem!important}.mom-is-h6{line-height:1.5rem!important}.mom-is-md{font-size:1rem!important}.mom-is-md{line-height:1.5rem!important}.mom-is-sm{font-size:.875rem!important}.mom-is-sm{line-height:1.25rem!important}.mom-is-xs{font-size:.8125rem!important}.mom-is-xs{line-height:1.125rem!important}.mom-is-2xs{font-size:.75rem!important}.mom-is-2xs{line-height:1rem!important}@media(min-width:48rem){.mom-is-h1{font-size:2.375rem!important}.mom-is-h1{line-height:3.25rem!important}}.stack-y\\:24,.stack-y\\:48{display:flex;flex-direction:column}:host{display:inline-flex;vertical-align:bottom;line-height:1;font-size:inherit;height:auto}.MomBadge{font-family:var(--font-family);position:relative;display:inline-block}.MomBadge--pointer{cursor:pointer}.MomBadge--size-s{width:1.25rem;height:1.25rem}.MomBadge--size-m{width:1.5rem;height:1.5rem}.MomBadge--size-l{width:2rem;height:2rem}.MomBadge--size-l1{width:2.5rem;height:2.5rem}.MomBadge--size-xl{width:3rem;height:3rem}.MomBadge__Badge{position:absolute;display:flex;align-items:center;justify-content:center;line-height:1;padding:0 3px;border-radius:.75rem;background:var(--mom-badge-bg);color:var(--mom-badge-text)}.MomBadge__Badge--size-s{font-size:.5rem;min-width:.625rem;height:.625rem}.MomBadge__Badge--size-m{font-size:.625rem;min-width:.75rem;height:.75rem}.MomBadge__Badge--size-l{font-size:.75rem;min-width:.875rem;height:.875rem}.MomBadge__Badge--size-l1{font-size:.75rem;min-width:1rem;height:1rem}.MomBadge__Badge--size-xl{font-size:.875rem;min-width:1.125rem;height:1.125rem}.MomBadge__Badge--position-tr{right:-.375rem;top:0}.MomBadge__Badge--position-tl{left:-.375rem;top:0}.MomBadge__Badge--position-br{right:-.375rem;bottom:0}.MomBadge__Badge--position-bl{left:-.375rem;bottom:0}.MomBadge__Badge--hideIndicator-true{display:none}';
var k2 = Object.defineProperty, $2 = Object.getOwnPropertyDescriptor, g = (C, t, o, e) => {
  for (var i = e > 1 ? void 0 : e ? $2(t, o) : t, n = C.length - 1, r; n >= 0; n--)
    (r = C[n]) && (i = (e ? r(t, o, i) : r(i)) || i);
  return e && i && k2(t, o, i), i;
};
let p = class extends r1 {
  constructor() {
    super(...arguments), this.size = "m", this.number = 0, this.maxDisplay = 99, this.position = "tr", this.hideIndicator = !1, this.indicatorOnly = !1, this.iconName = "", this.iconSrc = "", this.variant = "default";
  }
  get numberStr() {
    return this.maxDisplay != null && this.number > this.maxDisplay ? this.maxDisplay + "+" : String(this.number);
  }
  render() {
    return A`
      <div class="MomBadge MomBadge--size-${this.size} MomBadge--pointer" @click="${this.onClick}">
        <mom-icon .icon="${this.iconName}" .iconSrc="${this.iconSrc}" .size="${this.size}" .variant="${this.variant}"></mom-icon>
        <span class="MomBadge__Badge MomBadge__Badge--size-${this.size} MomBadge__Badge--position-${this.position} MomBadge__Badge--hideIndicator-${this.hideIndicator}">
          ${this.indicatorOnly ? "" : this.numberStr}
        </span>
      </div>
    `;
  }
  onClick(C) {
    this.dispatchEvent(new CustomEvent("click", { detail: C }));
  }
};
p.styles = n1(_2);
g([
  d({ type: String })
], p.prototype, "size", 2);
g([
  d({ type: Number })
], p.prototype, "number", 2);
g([
  d({ type: Number, attribute: "max-display" })
], p.prototype, "maxDisplay", 2);
g([
  d({ type: String })
], p.prototype, "position", 2);
g([
  d({ type: Boolean, attribute: "hide-indicator" })
], p.prototype, "hideIndicator", 2);
g([
  d({ type: Boolean, attribute: "indicator-only" })
], p.prototype, "indicatorOnly", 2);
g([
  d({ type: String, attribute: "icon-name" })
], p.prototype, "iconName", 2);
g([
  d({ type: String, attribute: "icon-src" })
], p.prototype, "iconSrc", 2);
g([
  d({ type: String })
], p.prototype, "variant", 2);
p = g([
  l1("mom-badge")
], p);
export {
  p as MomBadge
};
