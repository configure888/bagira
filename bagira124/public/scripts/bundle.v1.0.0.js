!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.WebflowTools = e())
    : (t.WebflowTools = e());
})(self, function () {
  return (function () {
    "use strict";
    var t = {
        966: function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = {
              defaultInputErrorClass: "cc-error",
              defaultInputValidClass: "cc-valid",
              defaultMessageClass: "c-error-message",
              defaultMessageShownClass: "cc-shown",
              defaultDebounce: 500,
              defaultValidateNonRequired: !1,
            });
        },
        154: function (t, e, n) {
          var r =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = r(n(966));
          function i(t, e, n) {
            var r,
              o =
                "checkbox" === t.type
                  ? null === (r = t.parentElement) || void 0 === r
                    ? void 0
                    : r.querySelector(".w-checkbox-input")
                  : t;
            o && o.classList.toggle(e, n);
          }
          n(938),
            document
              .querySelectorAll("form[data-wt-fv-form]")
              .forEach(function (t) {
                if (t && t instanceof HTMLFormElement) {
                  var e =
                      t.dataset.wtFvInput_error_class ||
                      o.default.defaultInputErrorClass,
                    n =
                      t.dataset.wtFvInput_valid_class ||
                      o.default.defaultInputValidClass,
                    r =
                      t.dataset.wtFvMessage_class ||
                      o.default.defaultMessageClass,
                    a =
                      t.dataset.wtFvMessage_shown_class ||
                      o.default.defaultMessageShownClass,
                    s = t.dataset.wtFvDont_validate_while_typing,
                    l =
                      Number(t.dataset.wtFvInput_debounce) ||
                      o.default.defaultDebounce,
                    u =
                      t.dataset.wtFvValidate_non_required ||
                      o.default.defaultValidateNonRequired,
                    c = Array.from(t.elements);
                  t.setAttribute("novalidate", "1"),
                    t.addEventListener("submit", function (e) {
                      t.checkValidity() ||
                        (e.preventDefault(),
                        e.stopPropagation(),
                        c.forEach(function (t) {
                          return d(t);
                        }),
                        f());
                    }),
                    c.forEach(function (t) {
                      t.addEventListener("change", function () {
                        d(t, !0), f();
                      }),
                        s ||
                          t.addEventListener(
                            "input",
                            (function () {
                              for (
                                var t = this, e = [], n = 0;
                                n < arguments.length;
                                n++
                              )
                                e[n] = arguments[n];
                              var r,
                                o = e[0],
                                i = e[1];
                              return function () {
                                clearTimeout(r),
                                  (r = setTimeout(function () {
                                    (r = null), o.apply(t, e);
                                  }, i));
                              };
                            })(function () {
                              d(t, !0), f();
                            }, l)
                          );
                    });
                }
                function f() {
                  var r = t.checkValidity(),
                    o = t.querySelector('[type="submit"]');
                  if (o) {
                    var i = r ? n : e,
                      a = r ? e : n;
                    o.classList.remove(a), o.classList.add(i);
                  }
                }
                function d(o, s) {
                  if (
                    (void 0 === s && (s = !1),
                    (o instanceof HTMLSelectElement ||
                      o instanceof HTMLInputElement ||
                      o instanceof HTMLTextAreaElement) &&
                      (u || o.required))
                  ) {
                    var l = o.validity.valid;
                    i(o, e, !l),
                      i(o, n, l),
                      s &&
                        "radio" === o.type &&
                        t
                          .querySelectorAll(
                            'input[type="radio"][name="' + o.name + '"]'
                          )
                          .forEach(function (t) {
                            return d(t);
                          });
                    var c = (function (t, e) {
                      var n,
                        r,
                        o =
                          ("checkbox" !== t.type && "radio" !== t.type) ||
                          !t.parentElement
                            ? t
                            : t.parentElement;
                      return (
                        null === (n = o.nextElementSibling) || void 0 === n
                          ? void 0
                          : n.classList.contains(e)
                      )
                        ? o.nextElementSibling
                        : (
                            null === (r = o.previousElementSibling) ||
                            void 0 === r
                              ? void 0
                              : r.classList.contains(e)
                          )
                        ? o.previousElementSibling
                        : (t.name &&
                            document.querySelector(
                              "[data-wt-fv-error_message_for=" + t.name + "]"
                            )) ||
                          null;
                    })(o, r);
                    c && c.classList.toggle(a, !l);
                  }
                }
              });
        },
        938: function () {
          "document" in self &&
            (("classList" in document.createElement("_") &&
              (!document.createElementNS ||
                "classList" in
                  document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  ))) ||
              (function (t) {
                if ("Element" in t) {
                  var e = "classList",
                    n = "prototype",
                    r = t.Element[n],
                    o = Object,
                    i =
                      String[n].trim ||
                      function () {
                        return this.replace(/^\s+|\s+$/g, "");
                      },
                    a =
                      Array[n].indexOf ||
                      function (t) {
                        for (var e = 0, n = this.length; n > e; e++)
                          if (e in this && this[e] === t) return e;
                        return -1;
                      },
                    s = function (t, e) {
                      (this.name = t),
                        (this.code = DOMException[t]),
                        (this.message = e);
                    },
                    l = function (t, e) {
                      if ("" === e)
                        throw new s(
                          "SYNTAX_ERR",
                          "The token must not be empty."
                        );
                      if (/\s/.test(e))
                        throw new s(
                          "INVALID_CHARACTER_ERR",
                          "The token must not contain space characters."
                        );
                      return a.call(t, e);
                    },
                    u = function (t) {
                      for (
                        var e = i.call(t.getAttribute("class") || ""),
                          n = e ? e.split(/\s+/) : [],
                          r = 0,
                          o = n.length;
                        o > r;
                        r++
                      )
                        this.push(n[r]);
                      this._updateClassName = function () {
                        t.setAttribute("class", this.toString());
                      };
                    },
                    c = (u[n] = []),
                    f = function () {
                      return new u(this);
                    };
                  if (
                    ((s[n] = Error[n]),
                    (c.item = function (t) {
                      return this[t] || null;
                    }),
                    (c.contains = function (t) {
                      return ~l(this, t + "");
                    }),
                    (c.add = function () {
                      var t,
                        e = arguments,
                        n = 0,
                        r = e.length,
                        o = !1;
                      do {
                        (t = e[n] + ""),
                          ~l(this, t) || (this.push(t), (o = !0));
                      } while (++n < r);
                      o && this._updateClassName();
                    }),
                    (c.remove = function () {
                      var t,
                        e,
                        n = arguments,
                        r = 0,
                        o = n.length,
                        i = !1;
                      do {
                        for (t = n[r] + "", e = l(this, t); ~e; )
                          this.splice(e, 1), (i = !0), (e = l(this, t));
                      } while (++r < o);
                      i && this._updateClassName();
                    }),
                    (c.toggle = function (t, e) {
                      var n = this.contains(t),
                        r = n ? !0 !== e && "remove" : !1 !== e && "add";
                      return r && this[r](t), !0 === e || !1 === e ? e : !n;
                    }),
                    (c.replace = function (t, e) {
                      var n = l(t + "");
                      ~n && (this.splice(n, 1, e), this._updateClassName());
                    }),
                    (c.toString = function () {
                      return this.join(" ");
                    }),
                    o.defineProperty)
                  ) {
                    var d = { get: f, enumerable: !0, configurable: !0 };
                    try {
                      o.defineProperty(r, e, d);
                    } catch (t) {
                      (void 0 !== t.number && -2146823252 !== t.number) ||
                        ((d.enumerable = !1), o.defineProperty(r, e, d));
                    }
                  } else o[n].__defineGetter__ && r.__defineGetter__(e, f);
                }
              })(self),
            (function () {
              var t = document.createElement("_");
              if ((t.classList.add("c1", "c2"), !t.classList.contains("c2"))) {
                var e = function (t) {
                  var e = DOMTokenList.prototype[t];
                  DOMTokenList.prototype[t] = function (t) {
                    var n,
                      r = arguments.length;
                    for (n = 0; r > n; n++) (t = arguments[n]), e.call(this, t);
                  };
                };
                e("add"), e("remove");
              }
              if ((t.classList.toggle("c3", !1), t.classList.contains("c3"))) {
                var n = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function (t, e) {
                  return 1 in arguments && !this.contains(t) == !e
                    ? e
                    : n.call(this, t);
                };
              }
              "replace" in document.createElement("_").classList ||
                (DOMTokenList.prototype.replace = function (t, e) {
                  var n = this.toString().split(" "),
                    r = n.indexOf(t + "");
                  ~r &&
                    ((n = n.slice(r)),
                    this.remove.apply(this, n),
                    this.add(e),
                    this.add.apply(this, n.slice(1)));
                }),
                (t = null);
            })()),
            Array.from ||
              (Array.from = (function () {
                var t;
                try {
                  t = Symbol.iterator
                    ? Symbol.iterator
                    : "Symbol(Symbol.iterator)";
                } catch (e) {
                  t = "Symbol(Symbol.iterator)";
                }
                var e = Object.prototype.toString,
                  n = function (t) {
                    return (
                      "function" == typeof t ||
                      "[object Function]" === e.call(t)
                    );
                  },
                  r = Math.pow(2, 53) - 1,
                  o = function (t) {
                    var e = (function (t) {
                      var e = Number(t);
                      return isNaN(e)
                        ? 0
                        : 0 !== e && isFinite(e)
                        ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e))
                        : e;
                    })(t);
                    return Math.min(Math.max(e, 0), r);
                  };
                return function (e) {
                  var r = Object(e),
                    i = n(r[t]);
                  if (null == e && !i)
                    throw new TypeError(
                      "Array.from requires an array-like object or iterator - not null or undefined"
                    );
                  var a,
                    s = arguments.length > 1 ? arguments[1] : void 0;
                  if (void 0 !== s) {
                    if (!n(s))
                      throw new TypeError(
                        "Array.from: when provided, the second argument must be a function"
                      );
                    arguments.length > 2 && (a = arguments[2]);
                  }
                  var l = o(r.length);
                  return (function (t, e, n, r, o, i) {
                    for (var a = 0; a < n || o; ) {
                      var s = r(a),
                        l = o ? s.value : s;
                      if (o && s.done) return e;
                      (e[a] = i
                        ? void 0 === t
                          ? i(l, a)
                          : i.call(t, l, a)
                        : l),
                        (a += 1);
                    }
                    if (o)
                      throw new TypeError(
                        "Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1"
                      );
                    return (e.length = n), e;
                  })(
                    a,
                    n(this) ? Object(new this(l)) : new Array(l),
                    l,
                    (function (e, n) {
                      var r = e && n[t]();
                      return function (t) {
                        return e ? r.next() : n[t];
                      };
                    })(i, r),
                    i,
                    s
                  );
                };
              })()),
            window.NodeList &&
              !NodeList.prototype.forEach &&
              (NodeList.prototype.forEach = Array.prototype.forEach);
        },
      },
      e = {};
    return (function n(r) {
      var o = e[r];
      if (void 0 !== o) return o.exports;
      var i = (e[r] = { exports: {} });
      return t[r].call(i.exports, i, i.exports, n), i.exports;
    })(154);
  })();
});
