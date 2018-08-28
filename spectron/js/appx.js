/********************************************************
Copyright 2016 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*********************************************************/

var Util = window.Util || {};

Util.loadTrackSrc = function(context, src, callback, opt_progressCallback) {
  var request = new XMLHttpRequest();
  request.open('GET', src, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously.
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      callback(buffer);
    }, function(e) {
      console.error(e);
    });
  };
  if (opt_progressCallback) {
    request.onprogress = function(e) {
      var percent = e.loaded / e.total;
      opt_progressCallback(percent);
    };
  }

  request.send();
};

// Log scale conversion functions. Cheat sheet:
// http://stackoverflow.com/questions/19472747/convert-linear-scale-to-logarithmic
Util.setLogScale = function(x1, y1, x2, y2) {
  this.b = Math.log(y1/y2) / (x1-x2);
  this.a = y1 / Math.exp( this.b * x1 );
};

Util.lin2log = function(x) {
  return this.a * Math.exp( this.b * x );
};

Util.log2lin = function(y) {
  return Math.log( y / this.a ) / this.b;
};



! function e(t, n, i) {
    function r(o, a) {
        if (!n[o]) {
            if (!t[o]) {
                var h = "function" == typeof require && require;
                if (!a && h) return h(o, !0);
                if (s) return s(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return r(n ? n : e)
            }, l, l.exports, e, t, n, i)
        }
        return n[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < i.length; o++) r(i[o]);
    return r
}({
    1: [function(e, t, n) {
        (function(e, t, i, r, s, o, a, h, l) {
            var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            ! function(e) {
                "use strict";

                function t(e) {
                    var t = e.charCodeAt(0);
                    return t === s || t === f ? 62 : t === o || t === c ? 63 : t < a ? -1 : t < a + 10 ? t - a + 26 + 26 : t < l + 26 ? t - l : t < h + 26 ? t - h + 26 : void 0
                }

                function n(e) {
                    function n(e) {
                        l[f++] = e
                    }
                    var i, s, o, a, h, l;
                    if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var u = e.length;
                    h = "=" === e.charAt(u - 2) ? 2 : "=" === e.charAt(u - 1) ? 1 : 0, l = new r(3 * e.length / 4 - h), o = h > 0 ? e.length - 4 : e.length;
                    var f = 0;
                    for (i = 0, s = 0; i < o; i += 4, s += 3) a = t(e.charAt(i)) << 18 | t(e.charAt(i + 1)) << 12 | t(e.charAt(i + 2)) << 6 | t(e.charAt(i + 3)), n((16711680 & a) >> 16), n((65280 & a) >> 8), n(255 & a);
                    return 2 === h ? (a = t(e.charAt(i)) << 2 | t(e.charAt(i + 1)) >> 4, n(255 & a)) : 1 === h && (a = t(e.charAt(i)) << 10 | t(e.charAt(i + 1)) << 4 | t(e.charAt(i + 2)) >> 2, n(a >> 8 & 255), n(255 & a)), l
                }

                function i(e) {
                    function t(e) {
                        return u.charAt(e)
                    }

                    function n(e) {
                        return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e)
                    }
                    var i, r, s, o = e.length % 3,
                        a = "";
                    for (i = 0, s = e.length - o; i < s; i += 3) r = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], a += n(r);
                    switch (o) {
                        case 1:
                            r = e[e.length - 1], a += t(r >> 2), a += t(r << 4 & 63), a += "==";
                            break;
                        case 2:
                            r = (e[e.length - 2] << 8) + e[e.length - 1], a += t(r >> 10), a += t(r >> 4 & 63), a += t(r << 2 & 63), a += "="
                    }
                    return a
                }
                var r = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                    s = "+".charCodeAt(0),
                    o = "/".charCodeAt(0),
                    a = "0".charCodeAt(0),
                    h = "a".charCodeAt(0),
                    l = "A".charCodeAt(0),
                    f = "-".charCodeAt(0),
                    c = "_".charCodeAt(0);
                e.toByteArray = n, e.fromByteArray = i
            }("undefined" == typeof n ? this.base64js = {} : n)
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/base64-js/lib/b64.js", "/../../node_modules/base64-js/lib")
    }, {
        buffer: 2,
        rH1JPG: 4
    }],
    2: [function(e, t, n) {
        (function(t, i, r, s, o, a, h, l, u) {
            function r(e, t, n) {
                if (!(this instanceof r)) return new r(e, t, n);
                var i = typeof e;
                if ("base64" === t && "string" === i)
                    for (e = M(e); e.length % 4 !== 0;) e += "=";
                var s;
                if ("number" === i) s = q(e);
                else if ("string" === i) s = r.byteLength(e, t);
                else {
                    if ("object" !== i) throw new Error("First argument needs to be a number, array or string.");
                    s = q(e.length)
                }
                var o;
                r._useTypedArrays ? o = r._augment(new Uint8Array(s)) : (o = this, o.length = s, o._isBuffer = !0);
                var a;
                if (r._useTypedArrays && "number" == typeof e.byteLength) o._set(e);
                else if (k(e))
                    for (a = 0; a < s; a++) r.isBuffer(e) ? o[a] = e.readUInt8(a) : o[a] = e[a];
                else if ("string" === i) o.write(e, 0, t);
                else if ("number" === i && !r._useTypedArrays && !n)
                    for (a = 0; a < s; a++) o[a] = 0;
                return o
            }

            function f(e, t, n, i) {
                n = Number(n) || 0;
                var s = e.length - n;
                i ? (i = Number(i), i > s && (i = s)) : i = s;
                var o = t.length;
                W(o % 2 === 0, "Invalid hex string"), i > o / 2 && (i = o / 2);
                for (var a = 0; a < i; a++) {
                    var h = parseInt(t.substr(2 * a, 2), 16);
                    W(!isNaN(h), "Invalid hex string"), e[n + a] = h
                }
                return r._charsWritten = 2 * a, a
            }

            function c(e, t, n, i) {
                var s = r._charsWritten = j(H(t), e, n, i);
                return s
            }

            function d(e, t, n, i) {
                var s = r._charsWritten = j(O(t), e, n, i);
                return s
            }

            function g(e, t, n, i) {
                return d(e, t, n, i)
            }

            function m(e, t, n, i) {
                var s = r._charsWritten = j(X(t), e, n, i);
                return s
            }

            function y(e, t, n, i) {
                var s = r._charsWritten = j($(t), e, n, i);
                return s
            }

            function p(e, t, n) {
                return 0 === t && n === e.length ? Q.fromByteArray(e) : Q.fromByteArray(e.slice(t, n))
            }

            function w(e, t, n) {
                var i = "",
                    r = "";
                n = Math.min(e.length, n);
                for (var s = t; s < n; s++) e[s] <= 127 ? (i += z(r) + String.fromCharCode(e[s]), r = "") : r += "%" + e[s].toString(16);
                return i + z(r)
            }

            function v(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var r = t; r < n; r++) i += String.fromCharCode(e[r]);
                return i
            }

            function b(e, t, n) {
                return v(e, t, n)
            }

            function E(e, t, n) {
                var i = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                for (var r = "", s = t; s < n; s++) r += G(e[s]);
                return r
            }

            function T(e, t, n) {
                for (var i = e.slice(t, n), r = "", s = 0; s < i.length; s += 2) r += String.fromCharCode(i[s] + 256 * i[s + 1]);
                return r
            }

            function A(e, t, n, i) {
                i || (W("boolean" == typeof n, "missing or invalid endian"), W(void 0 !== t && null !== t, "missing offset"), W(t + 1 < e.length, "Trying to read beyond buffer length"));
                var r = e.length;
                if (!(t >= r)) {
                    var s;
                    return n ? (s = e[t], t + 1 < r && (s |= e[t + 1] << 8)) : (s = e[t] << 8, t + 1 < r && (s |= e[t + 1])), s
                }
            }

            function _(e, t, n, i) {
                i || (W("boolean" == typeof n, "missing or invalid endian"), W(void 0 !== t && null !== t, "missing offset"), W(t + 3 < e.length, "Trying to read beyond buffer length"));
                var r = e.length;
                if (!(t >= r)) {
                    var s;
                    return n ? (t + 2 < r && (s = e[t + 2] << 16), t + 1 < r && (s |= e[t + 1] << 8), s |= e[t], t + 3 < r && (s += e[t + 3] << 24 >>> 0)) : (t + 1 < r && (s = e[t + 1] << 16), t + 2 < r && (s |= e[t + 2] << 8), t + 3 < r && (s |= e[t + 3]), s += e[t] << 24 >>> 0), s
                }
            }

            function x(e, t, n, i) {
                i || (W("boolean" == typeof n, "missing or invalid endian"), W(void 0 !== t && null !== t, "missing offset"), W(t + 1 < e.length, "Trying to read beyond buffer length"));
                var r = e.length;
                if (!(t >= r)) {
                    var s = A(e, t, n, !0),
                        o = 32768 & s;
                    return o ? (65535 - s + 1) * -1 : s
                }
            }

            function I(e, t, n, i) {
                i || (W("boolean" == typeof n, "missing or invalid endian"), W(void 0 !== t && null !== t, "missing offset"), W(t + 3 < e.length, "Trying to read beyond buffer length"));
                var r = e.length;
                if (!(t >= r)) {
                    var s = _(e, t, n, !0),
                        o = 2147483648 & s;
                    return o ? (4294967295 - s + 1) * -1 : s
                }
            }

            function B(e, t, n, i) {
                return i || (W("boolean" == typeof n, "missing or invalid endian"), W(t + 3 < e.length, "Trying to read beyond buffer length")), K.read(e, t, n, 23, 4)
            }

            function R(e, t, n, i) {
                return i || (W("boolean" == typeof n, "missing or invalid endian"), W(t + 7 < e.length, "Trying to read beyond buffer length")), K.read(e, t, n, 52, 8)
            }

            function L(e, t, n, i, r) {
                r || (W(void 0 !== t && null !== t, "missing value"), W("boolean" == typeof i, "missing or invalid endian"), W(void 0 !== n && null !== n, "missing offset"), W(n + 1 < e.length, "trying to write beyond buffer length"), Y(t, 65535));
                var s = e.length;
                if (!(n >= s))
                    for (var o = 0, a = Math.min(s - n, 2); o < a; o++) e[n + o] = (t & 255 << 8 * (i ? o : 1 - o)) >>> 8 * (i ? o : 1 - o)
            }

            function S(e, t, n, i, r) {
                r || (W(void 0 !== t && null !== t, "missing value"), W("boolean" == typeof i, "missing or invalid endian"), W(void 0 !== n && null !== n, "missing offset"), W(n + 3 < e.length, "trying to write beyond buffer length"), Y(t, 4294967295));
                var s = e.length;
                if (!(n >= s))
                    for (var o = 0, a = Math.min(s - n, 4); o < a; o++) e[n + o] = t >>> 8 * (i ? o : 3 - o) & 255
            }

            function D(e, t, n, i, r) {
                r || (W(void 0 !== t && null !== t, "missing value"), W("boolean" == typeof i, "missing or invalid endian"), W(void 0 !== n && null !== n, "missing offset"), W(n + 1 < e.length, "Trying to write beyond buffer length"), J(t, 32767, -32768));
                var s = e.length;
                n >= s || (t >= 0 ? L(e, t, n, i, r) : L(e, 65535 + t + 1, n, i, r))
            }

            function C(e, t, n, i, r) {
                r || (W(void 0 !== t && null !== t, "missing value"), W("boolean" == typeof i, "missing or invalid endian"), W(void 0 !== n && null !== n, "missing offset"), W(n + 3 < e.length, "Trying to write beyond buffer length"), J(t, 2147483647, -2147483648));
                var s = e.length;
                n >= s || (t >= 0 ? S(e, t, n, i, r) : S(e, 4294967295 + t + 1, n, i, r))
            }

            function U(e, t, n, i, r) {
                r || (W(void 0 !== t && null !== t, "missing value"), W("boolean" == typeof i, "missing or invalid endian"), W(void 0 !== n && null !== n, "missing offset"), W(n + 3 < e.length, "Trying to write beyond buffer length"), V(t, 3.4028234663852886e38, -3.4028234663852886e38));
                var s = e.length;
                n >= s || K.write(e, t, n, i, 23, 4)
            }

            function F(e, t, n, i, r) {
                r || (W(void 0 !== t && null !== t, "missing value"), W("boolean" == typeof i, "missing or invalid endian"), W(void 0 !== n && null !== n, "missing offset"), W(n + 7 < e.length, "Trying to write beyond buffer length"), V(t, 1.7976931348623157e308, -1.7976931348623157e308));
                var s = e.length;
                n >= s || K.write(e, t, n, i, 52, 8)
            }

            function M(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function P(e, t, n) {
                return "number" != typeof e ? n : (e = ~~e, e >= t ? t : e >= 0 ? e : (e += t, e >= 0 ? e : 0))
            }

            function q(e) {
                return e = ~~Math.ceil(+e), e < 0 ? 0 : e
            }

            function N(e) {
                return (Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                })(e)
            }

            function k(e) {
                return N(e) || r.isBuffer(e) || e && "object" == typeof e && "number" == typeof e.length
            }

            function G(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function H(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    if (i <= 127) t.push(e.charCodeAt(n));
                    else {
                        var r = n;
                        i >= 55296 && i <= 57343 && n++;
                        for (var s = encodeURIComponent(e.slice(r, n + 1)).substr(1).split("%"), o = 0; o < s.length; o++) t.push(parseInt(s[o], 16))
                    }
                }
                return t
            }

            function O(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t
            }

            function $(e) {
                for (var t, n, i, r = [], s = 0; s < e.length; s++) t = e.charCodeAt(s), n = t >> 8, i = t % 256, r.push(i), r.push(n);
                return r
            }

            function X(e) {
                return Q.toByteArray(e)
            }

            function j(e, t, n, i) {
                for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); r++) t[r + n] = e[r];
                return r
            }

            function z(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return String.fromCharCode(65533)
                }
            }

            function Y(e, t) {
                W("number" == typeof e, "cannot write a non-number as a number"), W(e >= 0, "specified a negative value for writing an unsigned value"), W(e <= t, "value is larger than maximum value for type"), W(Math.floor(e) === e, "value has a fractional component")
            }

            function J(e, t, n) {
                W("number" == typeof e, "cannot write a non-number as a number"), W(e <= t, "value larger than maximum allowed value"), W(e >= n, "value smaller than minimum allowed value"), W(Math.floor(e) === e, "value has a fractional component")
            }

            function V(e, t, n) {
                W("number" == typeof e, "cannot write a non-number as a number"), W(e <= t, "value larger than maximum allowed value"), W(e >= n, "value smaller than minimum allowed value")
            }

            function W(e, t) {
                if (!e) throw new Error(t || "Failed assertion")
            }
            var Q = e("base64-js"),
                K = e("ieee754");
            n.Buffer = r, n.SlowBuffer = r, n.INSPECT_MAX_BYTES = 50, r.poolSize = 8192, r._useTypedArrays = function() {
                try {
                    var e = new ArrayBuffer(0),
                        t = new Uint8Array(e);
                    return t.foo = function() {
                        return 42
                    }, 42 === t.foo() && "function" == typeof t.subarray
                } catch (n) {
                    return !1
                }
            }(), r.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, r.isBuffer = function(e) {
                return !(null === e || void 0 === e || !e._isBuffer)
            }, r.byteLength = function(e, t) {
                var n;
                switch (e += "", t || "utf8") {
                    case "hex":
                        n = e.length / 2;
                        break;
                    case "utf8":
                    case "utf-8":
                        n = H(e).length;
                        break;
                    case "ascii":
                    case "binary":
                    case "raw":
                        n = e.length;
                        break;
                    case "base64":
                        n = X(e).length;
                        break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        n = 2 * e.length;
                        break;
                    default:
                        throw new Error("Unknown encoding")
                }
                return n
            }, r.concat = function(e, t) {
                if (W(N(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length) return new r(0);
                if (1 === e.length) return e[0];
                var n;
                if ("number" != typeof t)
                    for (t = 0, n = 0; n < e.length; n++) t += e[n].length;
                var i = new r(t),
                    s = 0;
                for (n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.copy(i, s), s += o.length
                }
                return i
            }, r.prototype.write = function(e, t, n, i) {
                if (isFinite(t)) isFinite(n) || (i = n, n = void 0);
                else {
                    var r = i;
                    i = t, t = n, n = r
                }
                t = Number(t) || 0;
                var s = this.length - t;
                n ? (n = Number(n), n > s && (n = s)) : n = s, i = String(i || "utf8").toLowerCase();
                var o;
                switch (i) {
                    case "hex":
                        o = f(this, e, t, n);
                        break;
                    case "utf8":
                    case "utf-8":
                        o = c(this, e, t, n);
                        break;
                    case "ascii":
                        o = d(this, e, t, n);
                        break;
                    case "binary":
                        o = g(this, e, t, n);
                        break;
                    case "base64":
                        o = m(this, e, t, n);
                        break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        o = y(this, e, t, n);
                        break;
                    default:
                        throw new Error("Unknown encoding")
                }
                return o
            }, r.prototype.toString = function(e, t, n) {
                var i = this;
                if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, n = void 0 !== n ? Number(n) : n = i.length, n === t) return "";
                var r;
                switch (e) {
                    case "hex":
                        r = E(i, t, n);
                        break;
                    case "utf8":
                    case "utf-8":
                        r = w(i, t, n);
                        break;
                    case "ascii":
                        r = v(i, t, n);
                        break;
                    case "binary":
                        r = b(i, t, n);
                        break;
                    case "base64":
                        r = p(i, t, n);
                        break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        r = T(i, t, n);
                        break;
                    default:
                        throw new Error("Unknown encoding")
                }
                return r
            }, r.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, r.prototype.copy = function(e, t, n, i) {
                var s = this;
                if (n || (n = 0), i || 0 === i || (i = this.length), t || (t = 0), i !== n && 0 !== e.length && 0 !== s.length) {
                    W(i >= n, "sourceEnd < sourceStart"), W(t >= 0 && t < e.length, "targetStart out of bounds"), W(n >= 0 && n < s.length, "sourceStart out of bounds"), W(i >= 0 && i <= s.length, "sourceEnd out of bounds"), i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                    var o = i - n;
                    if (o < 100 || !r._useTypedArrays)
                        for (var a = 0; a < o; a++) e[a + t] = this[a + n];
                    else e._set(this.subarray(n, n + o), t)
                }
            }, r.prototype.slice = function(e, t) {
                var n = this.length;
                if (e = P(e, n, 0), t = P(t, n, n), r._useTypedArrays) return r._augment(this.subarray(e, t));
                for (var i = t - e, s = new r(i, (void 0), (!0)), o = 0; o < i; o++) s[o] = this[o + e];
                return s
            }, r.prototype.get = function(e) {
                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
            }, r.prototype.set = function(e, t) {
                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
            }, r.prototype.readUInt8 = function(e, t) {
                if (t || (W(void 0 !== e && null !== e, "missing offset"), W(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return this[e]
            }, r.prototype.readUInt16LE = function(e, t) {
                return A(this, e, !0, t)
            }, r.prototype.readUInt16BE = function(e, t) {
                return A(this, e, !1, t)
            }, r.prototype.readUInt32LE = function(e, t) {
                return _(this, e, !0, t)
            }, r.prototype.readUInt32BE = function(e, t) {
                return _(this, e, !1, t)
            }, r.prototype.readInt8 = function(e, t) {
                if (t || (W(void 0 !== e && null !== e, "missing offset"), W(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) {
                    var n = 128 & this[e];
                    return n ? (255 - this[e] + 1) * -1 : this[e]
                }
            }, r.prototype.readInt16LE = function(e, t) {
                return x(this, e, !0, t)
            }, r.prototype.readInt16BE = function(e, t) {
                return x(this, e, !1, t)
            }, r.prototype.readInt32LE = function(e, t) {
                return I(this, e, !0, t)
            }, r.prototype.readInt32BE = function(e, t) {
                return I(this, e, !1, t)
            }, r.prototype.readFloatLE = function(e, t) {
                return B(this, e, !0, t)
            }, r.prototype.readFloatBE = function(e, t) {
                return B(this, e, !1, t)
            }, r.prototype.readDoubleLE = function(e, t) {
                return R(this, e, !0, t)
            }, r.prototype.readDoubleBE = function(e, t) {
                return R(this, e, !1, t)
            }, r.prototype.writeUInt8 = function(e, t, n) {
                n || (W(void 0 !== e && null !== e, "missing value"), W(void 0 !== t && null !== t, "missing offset"), W(t < this.length, "trying to write beyond buffer length"), Y(e, 255)), t >= this.length || (this[t] = e)
            }, r.prototype.writeUInt16LE = function(e, t, n) {
                L(this, e, t, !0, n)
            }, r.prototype.writeUInt16BE = function(e, t, n) {
                L(this, e, t, !1, n)
            }, r.prototype.writeUInt32LE = function(e, t, n) {
                S(this, e, t, !0, n)
            }, r.prototype.writeUInt32BE = function(e, t, n) {
                S(this, e, t, !1, n)
            }, r.prototype.writeInt8 = function(e, t, n) {
                n || (W(void 0 !== e && null !== e, "missing value"), W(void 0 !== t && null !== t, "missing offset"), W(t < this.length, "Trying to write beyond buffer length"), J(e, 127, -128)), t >= this.length || (e >= 0 ? this.writeUInt8(e, t, n) : this.writeUInt8(255 + e + 1, t, n))
            }, r.prototype.writeInt16LE = function(e, t, n) {
                D(this, e, t, !0, n)
            }, r.prototype.writeInt16BE = function(e, t, n) {
                D(this, e, t, !1, n)
            }, r.prototype.writeInt32LE = function(e, t, n) {
                C(this, e, t, !0, n)
            }, r.prototype.writeInt32BE = function(e, t, n) {
                C(this, e, t, !1, n)
            }, r.prototype.writeFloatLE = function(e, t, n) {
                U(this, e, t, !0, n)
            }, r.prototype.writeFloatBE = function(e, t, n) {
                U(this, e, t, !1, n)
            }, r.prototype.writeDoubleLE = function(e, t, n) {
                F(this, e, t, !0, n)
            }, r.prototype.writeDoubleBE = function(e, t, n) {
                F(this, e, t, !1, n)
            }, r.prototype.fill = function(e, t, n) {
                if (e || (e = 0), t || (t = 0), n || (n = this.length), "string" == typeof e && (e = e.charCodeAt(0)), W("number" == typeof e && !isNaN(e), "value is not a number"), W(n >= t, "end < start"), n !== t && 0 !== this.length) {
                    W(t >= 0 && t < this.length, "start out of bounds"), W(n >= 0 && n <= this.length, "end out of bounds");
                    for (var i = t; i < n; i++) this[i] = e
                }
            }, r.prototype.inspect = function() {
                for (var e = [], t = this.length, i = 0; i < t; i++)
                    if (e[i] = G(this[i]), i === n.INSPECT_MAX_BYTES) {
                        e[i + 1] = "...";
                        break
                    }
                return "<Buffer " + e.join(" ") + ">"
            }, r.prototype.toArrayBuffer = function() {
                if ("undefined" != typeof Uint8Array) {
                    if (r._useTypedArrays) return new r(this).buffer;
                    for (var e = new Uint8Array(this.length), t = 0, n = e.length; t < n; t += 1) e[t] = this[t];
                    return e.buffer
                }
                throw new Error("Buffer.toArrayBuffer not supported in this browser")
            };
            var Z = r.prototype;
            r._augment = function(e) {
                return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = Z.get, e.set = Z.set, e.write = Z.write, e.toString = Z.toString, e.toLocaleString = Z.toString, e.toJSON = Z.toJSON, e.copy = Z.copy, e.slice = Z.slice, e.readUInt8 = Z.readUInt8, e.readUInt16LE = Z.readUInt16LE, e.readUInt16BE = Z.readUInt16BE, e.readUInt32LE = Z.readUInt32LE, e.readUInt32BE = Z.readUInt32BE, e.readInt8 = Z.readInt8, e.readInt16LE = Z.readInt16LE, e.readInt16BE = Z.readInt16BE, e.readInt32LE = Z.readInt32LE, e.readInt32BE = Z.readInt32BE, e.readFloatLE = Z.readFloatLE, e.readFloatBE = Z.readFloatBE, e.readDoubleLE = Z.readDoubleLE, e.readDoubleBE = Z.readDoubleBE, e.writeUInt8 = Z.writeUInt8, e.writeUInt16LE = Z.writeUInt16LE, e.writeUInt16BE = Z.writeUInt16BE, e.writeUInt32LE = Z.writeUInt32LE, e.writeUInt32BE = Z.writeUInt32BE, e.writeInt8 = Z.writeInt8, e.writeInt16LE = Z.writeInt16LE, e.writeInt16BE = Z.writeInt16BE, e.writeInt32LE = Z.writeInt32LE, e.writeInt32BE = Z.writeInt32BE, e.writeFloatLE = Z.writeFloatLE, e.writeFloatBE = Z.writeFloatBE, e.writeDoubleLE = Z.writeDoubleLE, e.writeDoubleBE = Z.writeDoubleBE, e.fill = Z.fill, e.inspect = Z.inspect, e.toArrayBuffer = Z.toArrayBuffer, e
            }
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/buffer/index.js", "/../../node_modules/buffer")
    }, {
        "base64-js": 1,
        buffer: 2,
        ieee754: 3,
        rH1JPG: 4
    }],
    3: [function(e, t, n) {
        (function(e, t, i, r, s, o, a, h, l) {
            n.read = function(e, t, n, i, r) {
                var s, o, a = 8 * r - i - 1,
                    h = (1 << a) - 1,
                    l = h >> 1,
                    u = -7,
                    f = n ? r - 1 : 0,
                    c = n ? -1 : 1,
                    d = e[t + f];
                for (f += c, s = d & (1 << -u) - 1, d >>= -u, u += a; u > 0; s = 256 * s + e[t + f], f += c, u -= 8);
                for (o = s & (1 << -u) - 1, s >>= -u, u += i; u > 0; o = 256 * o + e[t + f], f += c, u -= 8);
                if (0 === s) s = 1 - l;
                else {
                    if (s === h) return o ? NaN : (d ? -1 : 1) * (1 / 0);
                    o += Math.pow(2, i), s -= l
                }
                return (d ? -1 : 1) * o * Math.pow(2, s - i)
            }, n.write = function(e, t, n, i, r, s) {
                var o, a, h, l = 8 * s - r - 1,
                    u = (1 << l) - 1,
                    f = u >> 1,
                    c = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = i ? 0 : s - 1,
                    g = i ? 1 : -1,
                    m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -o)) < 1 && (o--, h *= 2), t += o + f >= 1 ? c / h : c * Math.pow(2, 1 - f), t * h >= 2 && (o++, h /= 2), o + f >= u ? (a = 0, o = u) : o + f >= 1 ? (a = (t * h - 1) * Math.pow(2, r), o += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, r), o = 0)); r >= 8; e[n + d] = 255 & a, d += g, a /= 256, r -= 8);
                for (o = o << r | a, l += r; l > 0; e[n + d] = 255 & o, d += g, o /= 256, l -= 8);
                e[n + d - g] |= 128 * m
            }
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/ieee754/index.js", "/../../node_modules/ieee754")
    }, {
        buffer: 2,
        rH1JPG: 4
    }],
    4: [function(e, t, n) {
        (function(e, n, i, r, s, o, a, h, l) {
            function u() {}
            var e = t.exports = {};
            e.nextTick = function() {
                var e = "undefined" != typeof window && window.setImmediate,
                    t = "undefined" != typeof window && window.postMessage && window.addEventListener;
                if (e) return function(e) {
                    return window.setImmediate(e)
                };
                if (t) {
                    var n = [];
                    return window.addEventListener("message", function(e) {
                            var t = e.source;
                            if ((t === window || null === t) && "process-tick" === e.data && (e.stopPropagation(), n.length > 0)) {
                                var i = n.shift();
                                i()
                            }
                        }, !0),
                        function(e) {
                            n.push(e), window.postMessage("process-tick", "*")
                        }
                }
                return function(e) {
                    setTimeout(e, 0)
                }
            }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = u, e.addListener = u, e.once = u, e.off = u, e.removeListener = u, e.removeAllListeners = u, e.emit = u, e.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, e.cwd = function() {
                return "/"
            }, e.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/process/browser.js", "/../../node_modules/process")
    }, {
        buffer: 2,
        rH1JPG: 4
    }],
    5: [function(e, t, n) {
        (function(e, n, i, r, s, o, a, h, l) {
            function u(e, t, n) {
                this.onchange = null, this.xRot = 0, this.yRot = 0, this.zRot = 0, this.scaleFactor = 3, this.dragging = !1, this.curX = 0, this.curY = 0, t && (this.canvas_ = t), n && (this.context_ = n)
            }
            t.exports = u
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/3D/cameraController.js", "/3D")
    }, {
        buffer: 2,
        rH1JPG: 4
    }],
    6: [function(e, t, n) {
        (function(e, n, i, r, s, o, a, h, l) {
            function u() {
                this.elements = Array(16), this.loadIdentity()
            }
            u.prototype = {
                scale: function(e, t, n) {
                    return this.elements[0] *= e, this.elements[1] *= e, this.elements[2] *= e, this.elements[3] *= e, this.elements[4] *= t, this.elements[5] *= t, this.elements[6] *= t, this.elements[7] *= t, this.elements[8] *= n, this.elements[9] *= n, this.elements[10] *= n, this.elements[11] *= n, this
                },
                translate: function(e, t, n) {
                    return this.elements[12] += this.elements[0] * e + this.elements[4] * t + this.elements[8] * n, this.elements[13] += this.elements[1] * e + this.elements[5] * t + this.elements[9] * n, this.elements[14] += this.elements[2] * e + this.elements[6] * t + this.elements[10] * n, this.elements[15] += this.elements[3] * e + this.elements[7] * t + this.elements[11] * n, this
                },
                rotate: function(e, t, n, i) {
                    var r = Math.sqrt(t * t + n * n + i * i),
                        s = Math.sin(e * Math.PI / 180),
                        o = Math.cos(e * Math.PI / 180);
                    if (r > 0) {
                        var a, h, l, f, c, d, g, m, y, p, w;
                        t /= r, n /= r, i /= r, a = t * t, h = n * n, l = i * i, f = t * n, c = n * i, d = i * t, g = t * s, m = n * s, y = i * s, p = 1 - o, w = new u, w.elements[0] = p * a + o, w.elements[1] = p * f - y, w.elements[2] = p * d + m, w.elements[3] = 0, w.elements[4] = p * f + y, w.elements[5] = p * h + o, w.elements[6] = p * c - g, w.elements[7] = 0, w.elements[8] = p * d - m, w.elements[9] = p * c + g, w.elements[10] = p * l + o, w.elements[11] = 0, w.elements[12] = 0, w.elements[13] = 0, w.elements[14] = 0, w.elements[15] = 1, w = w.multiply(this), this.elements = w.elements
                    }
                    return this
                },
                frustum: function(e, t, n, i, r, s) {
                    var o, a = t - e,
                        h = i - n,
                        l = s - r;
                    return r <= 0 || s <= 0 || a <= 0 || h <= 0 || l <= 0 ? this : (o = new u, o.elements[0] = 2 * r / a, o.elements[1] = o.elements[2] = o.elements[3] = 0, o.elements[5] = 2 * r / h, o.elements[4] = o.elements[6] = o.elements[7] = 0, o.elements[8] = (t + e) / a, o.elements[9] = (i + n) / h, o.elements[10] = -(r + s) / l, o.elements[11] = -1, o.elements[14] = -2 * r * s / l, o.elements[12] = o.elements[13] = o.elements[15] = 0, o = o.multiply(this), this.elements = o.elements, this)
                },
                perspective: function(e, t, n, i) {
                    var r = Math.tan(e / 360 * Math.PI) * n,
                        s = r * t;
                    return this.frustum(-s, s, -r, r, n, i)
                },
                ortho: function(e, t, n, i, r, s) {
                    var o = t - e,
                        a = i - n,
                        h = s - r,
                        l = new u;
                    return 0 == o || 0 == a || 0 == h ? this : (l.elements[0] = 2 / o, l.elements[12] = -(t + e) / o, l.elements[5] = 2 / a, l.elements[13] = -(i + n) / a, l.elements[10] = -2 / h, l.elements[14] = -(r + s) / h, l = l.multiply(this), this.elements = l.elements, this)
                },
                multiply: function(e) {
                    for (var t = new u, n = 0; n < 4; n++) t.elements[4 * n + 0] = this.elements[4 * n + 0] * e.elements[0] + this.elements[4 * n + 1] * e.elements[4] + this.elements[4 * n + 2] * e.elements[8] + this.elements[4 * n + 3] * e.elements[12], t.elements[4 * n + 1] = this.elements[4 * n + 0] * e.elements[1] + this.elements[4 * n + 1] * e.elements[5] + this.elements[4 * n + 2] * e.elements[9] + this.elements[4 * n + 3] * e.elements[13], t.elements[4 * n + 2] = this.elements[4 * n + 0] * e.elements[2] + this.elements[4 * n + 1] * e.elements[6] + this.elements[4 * n + 2] * e.elements[10] + this.elements[4 * n + 3] * e.elements[14], t.elements[4 * n + 3] = this.elements[4 * n + 0] * e.elements[3] + this.elements[4 * n + 1] * e.elements[7] + this.elements[4 * n + 2] * e.elements[11] + this.elements[4 * n + 3] * e.elements[15];
                    return this.elements = t.elements, this
                },
                copy: function() {
                    for (var e = new u, t = 0; t < 16; t++) e.elements[t] = this.elements[t];
                    return e
                },
                get: function(e, t) {
                    return this.elements[4 * e + t]
                },
                invert: function() {
                    var e = this.get(2, 2) * this.get(3, 3),
                        t = this.get(3, 2) * this.get(2, 3),
                        n = this.get(1, 2) * this.get(3, 3),
                        i = this.get(3, 2) * this.get(1, 3),
                        r = this.get(1, 2) * this.get(2, 3),
                        s = this.get(2, 2) * this.get(1, 3),
                        o = this.get(0, 2) * this.get(3, 3),
                        a = this.get(3, 2) * this.get(0, 3),
                        h = this.get(0, 2) * this.get(2, 3),
                        l = this.get(2, 2) * this.get(0, 3),
                        u = this.get(0, 2) * this.get(1, 3),
                        f = this.get(1, 2) * this.get(0, 3),
                        c = this.get(2, 0) * this.get(3, 1),
                        d = this.get(3, 0) * this.get(2, 1),
                        g = this.get(1, 0) * this.get(3, 1),
                        m = this.get(3, 0) * this.get(1, 1),
                        y = this.get(1, 0) * this.get(2, 1),
                        p = this.get(2, 0) * this.get(1, 1),
                        w = this.get(0, 0) * this.get(3, 1),
                        v = this.get(3, 0) * this.get(0, 1),
                        b = this.get(0, 0) * this.get(2, 1),
                        E = this.get(2, 0) * this.get(0, 1),
                        T = this.get(0, 0) * this.get(1, 1),
                        A = this.get(1, 0) * this.get(0, 1),
                        _ = e * this.get(1, 1) + i * this.get(2, 1) + r * this.get(3, 1) - (t * this.get(1, 1) + n * this.get(2, 1) + s * this.get(3, 1)),
                        x = t * this.get(0, 1) + o * this.get(2, 1) + l * this.get(3, 1) - (e * this.get(0, 1) + a * this.get(2, 1) + h * this.get(3, 1)),
                        I = n * this.get(0, 1) + a * this.get(1, 1) + u * this.get(3, 1) - (i * this.get(0, 1) + o * this.get(1, 1) + f * this.get(3, 1)),
                        B = s * this.get(0, 1) + h * this.get(1, 1) + f * this.get(2, 1) - (r * this.get(0, 1) + l * this.get(1, 1) + u * this.get(2, 1)),
                        R = 1 / (this.get(0, 0) * _ + this.get(1, 0) * x + this.get(2, 0) * I + this.get(3, 0) * B),
                        L = R * _,
                        S = R * x,
                        D = R * I,
                        C = R * B,
                        U = R * (t * this.get(1, 0) + n * this.get(2, 0) + s * this.get(3, 0) - (e * this.get(1, 0) + i * this.get(2, 0) + r * this.get(3, 0))),
                        F = R * (e * this.get(0, 0) + a * this.get(2, 0) + h * this.get(3, 0) - (t * this.get(0, 0) + o * this.get(2, 0) + l * this.get(3, 0))),
                        M = R * (i * this.get(0, 0) + o * this.get(1, 0) + f * this.get(3, 0) - (n * this.get(0, 0) + a * this.get(1, 0) + u * this.get(3, 0))),
                        P = R * (r * this.get(0, 0) + l * this.get(1, 0) + u * this.get(2, 0) - (s * this.get(0, 0) + h * this.get(1, 0) + f * this.get(2, 0))),
                        q = R * (c * this.get(1, 3) + m * this.get(2, 3) + y * this.get(3, 3) - (d * this.get(1, 3) + g * this.get(2, 3) + p * this.get(3, 3))),
                        N = R * (d * this.get(0, 3) + w * this.get(2, 3) + E * this.get(3, 3) - (c * this.get(0, 3) + v * this.get(2, 3) + b * this.get(3, 3))),
                        k = R * (g * this.get(0, 3) + v * this.get(1, 3) + T * this.get(3, 3) - (m * this.get(0, 3) + w * this.get(1, 3) + A * this.get(3, 3))),
                        G = R * (p * this.get(0, 3) + b * this.get(1, 3) + A * this.get(2, 3) - (y * this.get(0, 3) + E * this.get(1, 3) + T * this.get(2, 3))),
                        H = R * (g * this.get(2, 2) + p * this.get(3, 2) + d * this.get(1, 2) - (y * this.get(3, 2) + c * this.get(1, 2) + m * this.get(2, 2))),
                        O = R * (b * this.get(3, 2) + c * this.get(0, 2) + v * this.get(2, 2) - (w * this.get(2, 2) + E * this.get(3, 2) + d * this.get(0, 2))),
                        $ = R * (w * this.get(1, 2) + A * this.get(3, 2) + m * this.get(0, 2) - (T * this.get(3, 2) + g * this.get(0, 2) + v * this.get(1, 2))),
                        X = R * (T * this.get(2, 2) + y * this.get(0, 2) + E * this.get(1, 2) - (b * this.get(1, 2) + A * this.get(2, 2) + p * this.get(0, 2)));
                    return this.elements[0] = L, this.elements[1] = S, this.elements[2] = D, this.elements[3] = C, this.elements[4] = U, this.elements[5] = F, this.elements[6] = M, this.elements[7] = P, this.elements[8] = q, this.elements[9] = N, this.elements[10] = k, this.elements[11] = G, this.elements[12] = H, this.elements[13] = O, this.elements[14] = $, this.elements[15] = X, this
                },
                inverse: function() {
                    var e = this.copy();
                    return e.invert()
                },
                transpose: function() {
                    var e = this.elements[1];
                    return this.elements[1] = this.elements[4], this.elements[4] = e, e = this.elements[2], this.elements[2] = this.elements[8], this.elements[8] = e, e = this.elements[3], this.elements[3] = this.elements[12], this.elements[12] = e, e = this.elements[6], this.elements[6] = this.elements[9], this.elements[9] = e, e = this.elements[7], this.elements[7] = this.elements[13], this.elements[13] = e, e = this.elements[11], this.elements[11] = this.elements[14], this.elements[14] = e, this
                },
                loadIdentity: function() {
                    for (var e = 0; e < 16; e++) this.elements[e] = 0;
                    return this.elements[0] = 1, this.elements[5] = 1, this.elements[10] = 1, this.elements[15] = 1, this
                }
            }, t.exports = u
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/3D/matrix4x4.js", "/3D")
    }, {
        buffer: 2,
        rH1JPG: 4
    }],
    7: [function(e, t, n) {
        (function(n, i, r, s, o, a, h, l, u) {
            var f = e("./matrix4x4"),
                c = e("./cameraController"),
                d = 0,
                g = 1,
                m = 2,
                y = 3,
                p = 0,
                w = 0,
                v = 0;
            AnalyserView = function(e) {
                this.analysisType = m, this.sonogram3DWidth = 256, this.sonogram3DHeight = 256, this.sonogram3DGeometrySize = 9.5, this.freqByteData = 0, this.texture = 0, this.TEXTURE_HEIGHT = 256, this.yoffset = 0, this.frequencyShader = 0, this.waveformShader = 0, this.sonogramShader = 0, this.sonogram3DShader = 0, this.backgroundColor = [.08, .08, .08, 1], this.foregroundColor = [0, .7, 0, 1], this.canvas = e, this.initGL()
            }, AnalyserView.prototype.getAvailableContext = function(e, t) {
                if (e.getContext)
                    for (var n = 0; n < t.length; ++n) try {
                        var i = e.getContext(t[n], {
                            antialias: !0
                        });
                        if (null !== i) return i
                    } catch (r) {}
                return null
            }, AnalyserView.prototype.initGL = function() {
                p = new f, w = new f, v = new f;
                var e = this.sonogram3DWidth,
                    t = this.sonogram3DHeight,
                    n = this.sonogram3DGeometrySize,
                    i = this.backgroundColor,
                    r = this.canvas,
                    s = this.getAvailableContext(r, ["webgl", "experimental-webgl"]);
                this.gl = s, this.has3DVisualizer = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0, this.has3DVisualizer || this.analysisType != m || (this.analysisType = d);
                var o = new c(r);
                this.cameraController = o, o.xRot = -180, o.yRot = 270, o.zRot = 90, o.xT = 0, o.yT = -2, o.zT = -2, s.clearColor(i[0], i[1], i[2], i[3]), s.enable(s.DEPTH_TEST);
                var a = new Float32Array([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0]),
                    h = new Float32Array([1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]),
                    l = a.byteLength;
                this.vboTexCoordOffset = l;
                var u = s.createBuffer();
                this.vbo = u, s.bindBuffer(s.ARRAY_BUFFER, u), s.bufferData(s.ARRAY_BUFFER, l + h.byteLength, s.STATIC_DRAW), s.bufferSubData(s.ARRAY_BUFFER, 0, a), s.bufferSubData(s.ARRAY_BUFFER, l, h);
                var g = e * t;
                if (g > 65536) throw "Sonogram 3D resolution is too high: can only handle 65536 vertices max";
                a = new Float32Array(3 * g), h = new Float32Array(2 * g);
                for (var y = 0; y < t; y++)
                    for (var b = 0; b < e; b++) a[3 * (e * y + b) + 0] = n * (b - e / 2) / e, a[3 * (e * y + b) + 1] = 0, a[3 * (e * y + b) + 2] = n * (y - t / 2) / t, h[2 * (e * y + b) + 0] = b / (e - 1), h[2 * (e * y + b) + 1] = y / (t - 1);
                var E = a.byteLength;
                this.vbo3DTexCoordOffset = E;
                var T = s.createBuffer();
                this.sonogram3DVBO = T, s.bindBuffer(s.ARRAY_BUFFER, T), s.bufferData(s.ARRAY_BUFFER, E + h.byteLength, s.STATIC_DRAW), s.bufferSubData(s.ARRAY_BUFFER, 0, a), s.bufferSubData(s.ARRAY_BUFFER, E, h);
                var A = (e - 1) * (t - 1) * 6;
                this.sonogram3DNumIndices = A - 3600;
                for (var _ = new Uint16Array(A), x = 0, y = 0; y < t - 1; y++)
                    for (var b = 0; b < e - 1; b++) _[x++] = y * e + b, _[x++] = y * e + b + 1, _[x++] = (y + 1) * e + b + 1, _[x++] = y * e + b, _[x++] = (y + 1) * e + b + 1, _[x++] = (y + 1) * e + b;
                var I = s.createBuffer();
                this.sonogram3DIBO = I, s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, I), s.bufferData(s.ELEMENT_ARRAY_BUFFER, _, s.STATIC_DRAW), this.frequencyShader = o3djs.shader.loadFromURL(s, "bin/shaders/common-vertex.shader", "bin/shaders/frequency-fragment.shader"), this.waveformShader = o3djs.shader.loadFromURL(s, "bin/shaders/common-vertex.shader", "bin/shaders/waveform-fragment.shader"), this.sonogramShader = o3djs.shader.loadFromURL(s, "bin/shaders/common-vertex.shader", "bin/shaders/sonogram-fragment.shader"), this.has3DVisualizer && (this.sonogram3DShader = o3djs.shader.loadFromURL(s, "bin/shaders/sonogram-vertex.shader", "bin/shaders/sonogram-fragment.shader")), console.log("this.sonogramShader", this.sonogramShader), console.log("this.sonogram3DShader", this.sonogram3DShader)
            }, AnalyserView.prototype.initByteBuffer = function() {
                var e = this.gl,
                    t = this.TEXTURE_HEIGHT;
                if (!this.freqByteData || this.freqByteData.length != this.analyser.frequencyBinCount) {
                    freqByteData = new Uint8Array(this.analyser.frequencyBinCount), this.freqByteData = freqByteData, this.texture && (e.deleteTexture(this.texture), this.texture = null);
                    var n = e.createTexture();
                    this.texture = n, e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
                    var i = new Uint8Array(freqByteData.length * t);
                    e.texImage2D(e.TEXTURE_2D, 0, e.ALPHA, freqByteData.length, t, 0, e.ALPHA, e.UNSIGNED_BYTE, i)
                }
            }, AnalyserView.prototype.setAnalysisType = function(e) {
                (this.has3DVisualizer || e != m) && (this.analysisType = e)
            }, AnalyserView.prototype.analysisType = function() {
                return this.analysisType
            }, AnalyserView.prototype.doFrequencyAnalysis = function(e) {
                var t = this.freqByteData;
                switch (this.analysisType) {
                    case d:
                        this.analyser.smoothingTimeConstant = .75, this.analyser.getByteFrequencyData(t);
                        break;
                    case g:
                    case m:
                        this.analyser.smoothingTimeConstant = 0, this.analyser.getByteFrequencyData(t);
                        break;
                    case y:
                        this.analyser.smoothingTimeConstant = .1, this.analyser.getByteTimeDomainData(t)
                }
                this.drawGL()
            }, AnalyserView.prototype.drawGL = function() {
                var e = this.canvas,
                    t = this.gl,
                    n = this.vbo,
                    i = this.vboTexCoordOffset,
                    r = this.sonogram3DVBO,
                    s = this.vbo3DTexCoordOffset,
                    o = this.sonogram3DGeometrySize,
                    a = this.sonogram3DNumIndices,
                    h = (this.sonogram3DWidth, this.sonogram3DHeight),
                    l = this.freqByteData,
                    u = this.texture,
                    c = this.TEXTURE_HEIGHT,
                    b = this.frequencyShader,
                    E = this.waveformShader,
                    T = this.sonogramShader,
                    A = this.sonogram3DShader;
                t.bindTexture(t.TEXTURE_2D, u), t.pixelStorei(t.UNPACK_ALIGNMENT, 1), this.analysisType != g && this.analysisType != m && (this.yoffset = 0), t.texSubImage2D(t.TEXTURE_2D, 0, 0, this.yoffset, l.length, 1, t.ALPHA, t.UNSIGNED_BYTE, l), this.analysisType != g && this.analysisType != m || (this.yoffset = (this.yoffset + 1) % c);
                var _, x, I, B, R, L, S, D = this.yoffset;
                switch (this.analysisType) {
                    case d:
                    case y:
                        t.bindBuffer(t.ARRAY_BUFFER, n), S = this.analysisType == d ? b : E, S.bind(), _ = S.gPositionLoc, x = S.gTexCoord0Loc, I = S.frequencyDataLoc, B = S.foregroundColorLoc, R = S.backgroundColorLoc, t.uniform1f(S.yoffsetLoc, .5 / (c - 1)), L = i;
                        break;
                    case g:
                        t.bindBuffer(t.ARRAY_BUFFER, n),
                            T.bind(), _ = T.gPositionLoc, x = T.gTexCoord0Loc, I = T.frequencyDataLoc, B = T.foregroundColorLoc, R = T.backgroundColorLoc, t.uniform1f(T.yoffsetLoc, D / (c - 1)), L = i;
                        break;
                    case m:
                        t.bindBuffer(t.ARRAY_BUFFER, r), A.bind(), _ = A.gPositionLoc, x = A.gTexCoord0Loc, I = A.frequencyDataLoc, B = A.foregroundColorLoc, R = A.backgroundColorLoc, t.uniform1i(A.vertexFrequencyDataLoc, 0);
                        var C = this.yoffset / (c - 1);
                        t.uniform1f(A.yoffsetLoc, C);
                        var U = Math.floor(C * (h - 1)) / (h - 1);
                        t.uniform1f(A.vertexYOffsetLoc, U), t.uniform1f(A.verticalScaleLoc, o / 3.5), v.loadIdentity(), v.perspective(55, e.width / e.height, 1, 100), w.loadIdentity(), w.translate(0, 0, -9), p.loadIdentity(), p.rotate(this.cameraController.xRot, 1, 0, 0), p.rotate(this.cameraController.yRot, 0, 1, 0), p.rotate(this.cameraController.zRot, 0, 0, 1), p.translate(this.cameraController.xT, this.cameraController.yT, this.cameraController.zT);
                        var F = new f;
                        F.multiply(p), F.multiply(w), F.multiply(v), t.uniformMatrix4fv(A.worldViewProjectionLoc, t.FALSE, F.elements), L = s
                }
                I && t.uniform1i(I, 0), B && t.uniform4fv(B, this.foregroundColor), R && t.uniform4fv(R, this.backgroundColor), t.enableVertexAttribArray(_), t.vertexAttribPointer(_, 3, t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(x), t.vertexAttribPointer(x, 2, t.FLOAT, t.FALSE, 0, L), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), this.analysisType == d || this.analysisType == y || this.analysisType == g ? t.drawArrays(t.TRIANGLES, 0, 6) : this.analysisType == m && t.drawElements(t.TRIANGLES, a, t.UNSIGNED_SHORT, 0), t.disableVertexAttribArray(_), t.disableVertexAttribArray(x)
            }, AnalyserView.prototype.setAnalyserNode = function(e) {
                this.analyser = e
            }, t.exports = AnalyserView
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/3D/visualizer.js", "/3D")
    }, {
        "./cameraController": 5,
        "./matrix4x4": 6,
        buffer: 2,
        rH1JPG: 4
    }],
    8: [function(e, t, n) {
        (function(t, n, i, r, s, o, a, h, l) {
            "use strict";
            window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), window.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, window.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 60)
                }
            }();
            var u = e("./ui/spectrogram");
            $(function() {
                window.sources = [], window.sourcesIndex = {}, window.sourcesReady = !1, window.SCORE_TOP_PADDING = 150, window.recording_score = !0;
                var e = function() {
                        function e() {
                            o = requestAnimationFrame(e), r.getFloatTimeDomainData(a);
                            for (var t = 0, s = 0; s < a.length; s++) t += a[s] * a[s];
                            t /= a.length, t = 100 * Math.sqrt(t), d[g++ % d.length] = t;
                            for (var h = 0, s = 0; s < d.length; s++) h += d[s];
                            h /= d.length, h > c && window.recording_score && (c = h), i.lineWidth = 2, i.strokeStyle = "rgb(0, 0, 0)", i.beginPath(), i.clearRect(0, 0, n.width, n.height);
                            var l = "" + parseInt(100 * h),
                                u = "" + parseInt(100 * c),
                                f = i,
                                m = n.width / 2,
                                y = n.height / 2 - window.SCORE_TOP_PADDING;
                            f.font = "150px Arial", f.textAlign = "center", f.fillText(u, m, y), f.font = "80px Arial", f.textAlign = "center", f.fillText(l, m, y + 95), i.stroke()
                        }
                        window.parent.postMessage("ready", "*"), window.RECORDING_TIME = 15e3;
                        var t = u;
                        t.attached(), t.startRender(), t.stop(), t.drawingMode = !1, setTimeout(function() {
                            t.live()
                        }, 1e3), window.sp = t, window.analyser = t.player.analyser;
                               var n = document.querySelector("#legend"),
                            i = n.getContext("2d"),
                            r = t.player.analyser,
                            s = r.frequencyBinCount;
                        console.log(r.frequencyBinCount, r.fftSize);
                        var o, a = new Float32Array(s),
                            h = (n.width, n.height, 0),
                            l = 0,
                            f = -1e3,
                            c = 0,
                            d = new Float32Array(100),
                            g = 0;
                        e(), $(".music-box__tool-tip").hide(0), $("#loadingSound").hide(0), $(".music-box__buttons__button").click(function(e) {
                            t.startRender(), t.stop(), t.drawingMode = !1, $(this).hasClass("selected") ? $(".music-box__buttons__button").removeClass("selected") : ($(".music-box__buttons__button").removeClass("selected"), $(this).addClass("selected"), void 0 !== $(this).attr("data-mic") && (window.isIOS ? (window.parent.postMessage("error2", "*"), $(this).removeClass("selected")) : (window.recording_score = !1, h = 0, l = 0, f = -1e3, c = 0, d = new Uint8Array(100), g = 0, $("#record").clearQueue(), $(".music-box__modal__icon").removeClass("icon-guy").addClass("icon-mic"), $("#record").fadeIn().delay(2e3).fadeOut(function() {
                                window.recording_score = !0
                            }), t.live(), setTimeout(function() {
                                $(".music-box__modal__icon").removeClass("icon-mic").addClass("icon-guy"), $("#record").fadeIn().delay(1e3).fadeOut(function() {
                                    $(".music-box__buttons__button").click()
                                })
                            }, window.RECORDING_TIME))))
                        })
                    },
                    t = $("#iosButton");
                window.isIOS ? (window.parent.postMessage("loaded", "*"), t[0].addEventListener("touchend", function(n) {
                    t.addClass("hide"), e()
                }, !1)) : (e(), t.addClass("hide"))
            })
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_15fdc360.js", "/")
    }, {
        "./ui/spectrogram": 10,
        buffer: 2,
        rH1JPG: 4
    }],
    9: [function(e, t, n) {
        (function(n, i, r, s, o, a, h, l, u) {
            function f() {
                window.AudioContext = window.AudioContext || window.webkitAudioContext, context = new AudioContext;
                var e = context.createAnalyser();
                e.fftSize = window.isMobile ? 1024 : 2048, e.smoothingTimeConstant = 0;
                var t = context.createGain(),
                    n = context.createBiquadFilter();
                n.Q.value = 10, n.type = "bandpass";
                var i = context.createGain();
                i.gain.value = 1, t.connect(e), e.connect(i), i.connect(context.destination), this.context = context, this.mix = t, this.filterGain = i, this.analyser = e, this.buffers = {}, c.loadTrackSrc(this.context, "bin/snd/empty.mp3", function(e) {
                    var t = this.createSource_(e, !0);
                    t.loop = !0, t.start(0)
                }.bind(this))
            }
          var c = e("../util/util.js");
            f.prototype.playSrc = function(e) {
                return this.filterGain.gain.value = 1, this.input ? (this.input.disconnect(), void(this.input = null)) : this.buffers[e] ? ($("#loadingSound").fadeIn(100).delay(1e3).fadeOut(500), void this.playHelper_(e)) : ($("#loadingSound").fadeIn(100),
                void c.loadTrackSrc(this.context, e, function(t) {
                    this.buffers[e] = t, this.playHelper_(e), $("#loadingSound").delay(500).fadeOut(500)
                }.bind(this)))
            }, f.prototype.playHelper_ = function(e) {
                var t = this.buffers[e];
                this.source = this.createSource_(t, !0), this.source.start(0), this.loop || (this.playTimer = setTimeout(function() {
                    this.stop()
                }.bind(this), 2e3 * t.duration))
            }, f.prototype.live = function() {
                if (window.isIOS) window.parent.postMessage("error2", "*"), console.log("cant use mic on ios");
                else {
                    if (this.input) return this.input.disconnect(), void(this.input = null);
                    var e = window.PLAYER_LIVE_OPTIONS || {
                        audio: !0
                    };
                    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, navigator.getUserMedia(e, this.onStream_.bind(this), this.onStreamError_.bind(this)), this.filterGain.gain.value = 0
                }
            }, f.prototype.onStream_ = function(e) {
                var t = this.context.createMediaStreamSource(e);
                t.connect(this.mix), this.input = t, this.stream = e
            }, f.prototype.onStreamError_ = function(e) {}, f.prototype.setLoop = function(e) {
                this.loop = e
            }, f.prototype.createSource_ = function(e, t) {
                var n = this.context.createBufferSource();
                return n.buffer = e, n.loop = t, n.connect(this.mix), n
            }, f.prototype.setMicrophoneInput = function() {}, f.prototype.stop = function() {
                if (this.source && (this.source.stop(0), this.source = null, clearTimeout(this.playTimer), this.playTimer = null), this.input) return this.input.disconnect(), void(this.input = null)
            }, f.prototype.getAnalyserNode = function() {
                return this.analyser
            }, f.prototype.setBandpassFrequency = function(e) {
                null == e ? (console.log("Removing bandpass filter"), this.mix.disconnect(), this.mix.connect(this.analyser)) : (console.log("Setting bandpass frequency to %d Hz", e), this.bandpass.frequency.value = e, this.mix.disconnect(), this.mix.connect(this.bandpass), this.filterGain.connect(this.analyser))
            }, f.prototype.playTone = function(e) {
                this.osc || (this.osc = this.context.createOscillator(), this.osc.connect(this.mix), this.osc.type = "sine", this.osc.start(0)), this.osc.frequency.value = e, this.filterGain.gain.value = .2
            }, f.prototype.stopTone = function() {
                this.osc.stop(0), this.osc = null
            }, t.exports = f
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/ui/player.js", "/ui")
    }, {
        "../util/util.js": 11,
        buffer: 2,
        rH1JPG: 4
    }],
    10: [function(e, t, n) {
        (function(n, i, r, s, o, a, h, l, u) {
            "use strict";
            var f = e("../util/util.js"),
                c = e("../ui/player"),
                d = e("../3D/visualizer"),
                g = {
                    cxRot: 90,
                    drawingMode: !1,
                    prevX: 0,
                    handleTrack: function(e) {
                        switch (e.type) {
                            case "mousedown":
                            case "touchstart":
                                if (g.prevX = Number(e.pageX) || Number(e.originalEvent.touches[0].pageX), $(e.currentTarget).on("mousemove", g.handleTrack), $(e.currentTarget).on("touchmove", g.handleTrack), 0 == g.drawingMode) return !1;
                                var t = g.yToFreq(Number(e.pageY) || Number(e.originalEvent.touches[0].pageY));
                                return g.isPlaying() ? g.player.setBandpassFrequency(t) : g.player.playTone(t), !1;
                            case "mousemove":
                            case "touchmove":
                                var n = (Number(e.pageX) || Number(e.originalEvent.touches[0].pageX)) - g.prevX;
                                if (g.prevX = Number(e.pageX) || Number(e.originalEvent.touches[0].pageX), g.drawingMode) {
                                    var i = Number(e.pageY) || Number(e.originalEvent.touches[0].pageY),
                                        t = g.yToFreq(i);
                                    g.isPlaying() ? g.player.setBandpassFrequency(t) : g.player.playTone(t)
                                } else g.isPlaying() && (g.cxRot += .2 * n, g.cxRot < 0 ? g.cxRot = 0 : g.cxRot > 90 && (g.cxRot = 90));
                                return !1;
                            case "mouseup":
                            case "touchend":
                               // return $(e.currentTarget).off("mousemove", g.handleTrack), $(e.currentTarget).off("touchmove", g.handleTrack), 0 != g.drawingMode && (g.isPlaying() ? g.player.setBandpassFrequency(null) : g.player.stopTone(), !1)
                        }
                    },
                    attached: function() {
                        console.log("spectrogram-3d attached"), f.setLogScale(20, 20, 2e4, 2e4), g.onResize_(), g.init_(), window.addEventListener("resize", g.onResize_.bind(g))
                    },
                    stop: function() {
                        g.player.stop()
                    },
                    isPlaying: function() {
                        return !!this.player.source
                    },
                    stopRender: function() {
                        g.isRendering = !1
                    },
                    startRender: function() {
                        g.isRendering || (g.isRendering = !0, g.draw_())
                    },
                    loopChanged: function(e) {
                        console.log("loopChanged", e), g.player.setLoop(e)
                    },
                    play: function(e) {
                        g.src = e, g.player.playSrc(e)
                    },
                    live: function() {
                        g.player.live()
                    },
                    init_: function() {
                        var e = new c,
                            t = e.getAnalyserNode(),
                            n = new d(this.canvas);
                        n.setAnalyserNode(t), n.initByteBuffer(), g.player = e, g.analyserView = n, $("#spectrogram").on("mousedown", this.handleTrack).on("touchstart", this.handleTrack).on("mouseup", this.handleTrack).on("touchend", this.handleTrack)
                    },
                    onResize_: function() {
                        console.log("onResize_");
                        var e = $("#spectrogram")[0];
                        g.canvas = e, e.width = $(window).width(), e.height = $(window).height();
                        var t = $("#legend")[0];
                        t.width = $(window).width(), t.height = $(window).height() - 158, g.drawLegend_()
                    },
                    draw_: function() {
                        return g.isRendering ? (g.analyserView.doFrequencyAnalysis(), void requestAnimationFrame(g.draw_.bind(g))) : void console.log("stopped draw_")
                    },
                    drawLegend_: function() {

                        var e = $("#legend")[0],
                            t = e.getContext("2d"),
                            n = e.width - 10;
                        t.fillStyle = "#FFFFFF", t.font = "14px Roboto", t.textAlign = "right", t.textBaseline = "middle", t.fillText("20,000 Hz -", n, e.height - g.freqToY(2e4)), t.fillText("2,000 Hz -", n, e.height - g.freqToY(2e3)), t.fillText("200 Hz -", n, e.height - g.freqToY(200)), t.fillText("20 Hz -", n, e.height - g.freqToY(20))
                    },
                    freqStart: 20,
                    freqEnd: 2e4,
                    padding: 30,
                    yToFreq: function(e) {
                        var t = g.padding,
                            n = $("#spectrogram").height();
                        if (n < 2 * t || e < t || e > n - t) return null;
                        var i = 1 - (e - t) / (n - t),
                            r = g.freqStart + (g.freqEnd - g.freqStart) * i;
                        return f.lin2log(r)
                    },
                    freqToY: function(e) {
                        var t = f.log2lin(e),
                            n = $("#spectrogram").height(),
                            i = g.padding,
                            r = (t - g.freqStart) / (g.freqEnd - g.freqStart);
                        return g.padding + r * (n - 2 * i)
                    },
                    easeInOutCubic: function(e, t, n, i) {
                        return (e /= i / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                    },
                    easeInOutQuad: function(e, t, n, i) {
                        return (e /= i / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                    },
                    easeInOutQuint: function(e, t, n, i) {
                        return (e /= i / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                    },
                    easeInOutExpo: function(e, t, n, i) {
                        return 0 == e ? t : e == i ? t + n : (e /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                    }
                };
            t.exports = g
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/ui/spectrogram.js", "/ui")
    }, {
        "../3D/visualizer": 7,
        "../ui/player": 9,
        "../util/util.js": 11,
        buffer: 2,
        rH1JPG: 4
    }],
    11: [function(e, t, n) {
        (function(e, n, i, r, s, o, a, h, l) {
            var u = window.Util || {};
            u.loadTrackSrc = function(e, t, n, i) {
                var r = new XMLHttpRequest;
                r.open("GET", t, !0), r.responseType = "arraybuffer", r.onload = function() {
                    e.decodeAudioData(r.response, function(e) {
                        n(e)
                    }, function(e) {
                        console.error(e)
                    })
                }, i && (r.onprogress = function(e) {
                    var t = e.loaded / e.total;
                    i(t)
                }), r.send()
            }, u.setLogScale = function(e, t, n, i) {
                this.b = Math.log(t / i) / (e - n), this.a = t / Math.exp(this.b * e)
            }, u.lin2log = function(e) {
                return this.a * Math.exp(this.b * e)
            }, u.log2lin = function(e) {
                return Math.log(e / this.a) / this.b
            }, t.exports = u
        }).call(this, e("rH1JPG"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/util/util.js", "/util")
    }, {
        buffer: 2,
        rH1JPG: 4
    }]
}, {}, [8]);
