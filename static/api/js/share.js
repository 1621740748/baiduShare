window._bd_share_main ? window._bd_share_is_recently_loaded = !0 : (window._bd_share_is_recently_loaded = !1, window._bd_share_main = {
    version: "2.0",
    jscfg: {
        domain: {
            staticUrl: "//js.jrjimg.cn/"
        }
    }
}), !window._bd_share_is_recently_loaded && (window._bd_share_main.F = window._bd_share_main.F || function (e, t) {
    function n(e, t) {
        if (e instanceof Array) {
            for (var n = 0, s = e.length; s > n; n++)
                if (t.call(e[n], e[n], n) === !1) return
        } else
            for (var n in e)
                if (e.hasOwnProperty(n) && t.call(e[n], e[n], n) === !1) return
    }

    function s(e, t) {
        if (this.svnMod = "", this.name = null, this.path = e, this.fn = null, this.exports = {}, this._loaded = !1, this._requiredStack = [], this._readyStack = [], s.cache[this.path] = this, t && "." !== t.charAt(0)) {
            var n = t.split(":");
            n.length > 1 ? (this.svnMod = n[0], this.name = n[1]) : this.name = t
        }
        this.svnMod || (this.svnMod = this.path.split("/js/")[0].substr(1)), this.type = "js", this.getKey = function () {
            return this.svnMod + ":" + this.name
        }, this._info = {}
    }

    function i(e, t) {
        var n = "css" == t,
            s = document.createElement(n ? "link" : "script");
        return s
    }

    function a(t, n, s, a) {
        function c() {
            c.isCalled || (c.isCalled = !0, clearTimeout(_), s && s())
        }
        var d = i(t, n);
        "SCRIPT" === d.nodeName ? r(d, c) : o(d, c);
        var _ = setTimeout(function () {
                throw new Error("load " + n + " timeout : " + t)
            }, e._loadScriptTimeout || 1e4),
            l = document.getElementsByTagName("head")[0];
        "css" == n ? (d.rel = "stylesheet", d.href = t, l.appendChild(d)) : (d.type = "text/javascript", d.src = t, l.insertBefore(d, l.firstChild))
    }

    function r(e, t) {
        e.onload = e.onerror = e.onreadystatechange = function () {
            if (/loaded|complete|undefined/.test(e.readyState)) {
                if (e.onload = e.onerror = e.onreadystatechange = null, e.parentNode) {
                    e.parentNode.removeChild(e);
                    try {
                        if (e.clearAttributes) e.clearAttributes();
                        else
                            for (var n in e) delete e[n]
                    } catch (s) {}
                }
                e = void 0, t && t()
            }
        }
    }

    function o(e, t) {
        e.attachEvent ? e.attachEvent("onload", t) : setTimeout(function () {
            c(e, t)
        }, 0)
    }

    function c(e, t) {
        if (!t || !t.isCalled) {
            var n, s = navigator.userAgent,
                i = ~s.indexOf("AppleWebKit"),
                a = ~s.indexOf("Opera");
            if (i || a) e.sheet && (n = !0);
            else if (e.sheet) try {
                e.sheet.cssRules && (n = !0)
            } catch (r) {
                ("SecurityError" === r.name || "NS_ERROR_DOM_SECURITY_ERR" === r.name) && (n = !0)
            }
            setTimeout(function () {
                n ? t && t() : c(e, t)
            }, 1)
        }
    }
    var d = "api";
    e.each = n, s.currentPath = "", s.loadedPaths = {}, s.loadingPaths = {}, s.cache = {}, s.paths = {}, s.handlers = [], s.moduleFileMap = {}, s.requiredPaths = {}, s.lazyLoadPaths = {}, s.services = {}, s.isPathsLoaded = function (e) {
        var t = !0;
        return n(e, function (e) {
            return e in s.loadedPaths ? void 0 : t = !1
        }), t
    }, s.require = function (e, t) {
        e.search(":") < 0 && (t || (t = d, s.currentPath && (t = s.currentPath.split("/js/")[0].substr(1))), e = t + ":" + e);
        var n = s.get(e, s.currentPath);
        if ("css" != n.type) {
            if (n) {
                if (!n._inited) {
                    n._inited = !0;
                    var i, a = n.svnMod;
                    (i = n.fn.call(null, function (e) {
                        return s.require(e, a)
                    }, n.exports, new h(n.name, a))) && (n.exports = i)
                }
                return n.exports
            }
            throw new Error('Module "' + e + '" not found!')
        }
    }, s.baseUrl = t ? "/" == t[t.length - 1] ? t : t + "/" : "/", s.getBasePath = function (e) {
        var t, n;
        return -1 !== (n = e.indexOf("/")) && (t = e.slice(0, n)), t && t in s.paths ? s.paths[t] : s.baseUrl
    }, s.getJsPath = function (t, n) {
        if ("." === t.charAt(0)) {
            n = n.replace(/\/[^\/]+\/[^\/]+$/, ""), 0 === t.search("./") && (t = t.substr(2));
            var i = 0;
            for (t = t.replace(/^(\.\.\/)+/g, function (e) {
                    return i = e.length / 3, ""
                }); i > 0;) n = n.substr(0, n.lastIndexOf("/")), i--;
            return n + "/" + t + "/" + t.substr(t.lastIndexOf("/") + 1) + ".js"
        }
        var a, r, o, c, _, l;
        if (t.search(":") >= 0) {
            var h = t.split(":");
            a = h[0], t = h[1]
        } else n && (a = n.split("/")[1]);
        a = a || d;
        var u = /\.css(?:\?|$)/i.test(t);
        u && e._useConfig && s.moduleFileMap[a][t] && (t = s.moduleFileMap[a][t]);
        var t = _ = t,
            f = s.getBasePath(t);
        return -1 !== (o = t.indexOf("/")) && (r = t.slice(0, o), c = t.lastIndexOf("/"), _ = t.slice(c + 1)), r && r in s.paths && (t = t.slice(o + 1)), l = f + a + "/js/" + t + ".js"
    }, s.get = function (e, t) {
        var n = s.getJsPath(e, t);
        return s.cache[n] ? s.cache[n] : new s(n, e)
    }, s.prototype = {
        load: function () {
            s.loadingPaths[this.path] = !0;
            var t = this.svnMod || d,
                n = window._bd_share_main.jscfg.domain.staticUrl + "static/" + t + "/",
                i = this,
                a = /\.css(?:\?|$)/i.test(this.name);
            this.type = a ? "css" : "js";
            var r = "/" + this.type + "/" + s.moduleFileMap[t][this.name];
            if (n += e._useConfig && s.moduleFileMap[t][this.name] ? this.type + "/" + s.moduleFileMap[t][this.name] : this.type + "/" + this.name + (a ? "" : ".js"), e._firstScreenCSS.indexOf(this.name) > 0 || e._useConfig && r == e._firstScreenJS) i._loaded = !0, i.ready();
            else {
                var o = (new Date).getTime();
                _.create({
                    src: n,
                    type: this.type,
                    loaded: function () {
                        i._info.loadedTime = (new Date).getTime() - o, "css" == i.type && (i._loaded = !0, i.ready())
                    }
                })
            }
        },
        lazyLoad: function () {
            if (this.name, s.lazyLoadPaths[this.getKey()]) this.define(), delete s.lazyLoadPaths[this.getKey()];
            else {
                if (this.exist()) return;
                s.requiredPaths[this.getKey()] = !0, this.load()
            }
        },
        ready: function (e, t) {
            var i = t ? this._requiredStack : this._readyStack;
            if (e) this._loaded ? e() : i.push(e);
            else {
                if (s.loadedPaths[this.path] = !0, delete s.loadingPaths[this.path], this._loaded = !0, s.currentPath = this.path, this._readyStack && this._readyStack.length > 0) {
                    this._inited = !0;
                    var a, r = this.svnMod;
                    this.fn && (a = this.fn.call(null, function (e) {
                        return s.require(e, r)
                    }, this.exports, new h(this.name, r))) && (this.exports = a), n(this._readyStack, function (e) {
                        e()
                    }), delete this._readyStack
                }
                this._requiredStack && this._requiredStack.length > 0 && (n(this._requiredStack, function (e) {
                    e()
                }), delete this._requiredStack)
            }
        },
        define: function () {
            var e = this,
                t = this.deps,
                i = (this.path, []);
            t || (t = this.getDependents()), t.length ? (n(t, function (t) {
                i.push(s.getJsPath(t, e.path))
            }), n(t, function (t) {
                var n = s.get(t, e.path);
                n.ready(function () {
                    s.isPathsLoaded(i) && e.ready()
                }, !0), n.lazyLoad()
            })) : this.ready()
        },
        exist: function () {
            var e = this.path;
            return e in s.loadedPaths || e in s.loadingPaths
        },
        getDependents: function () {
            var e = this.fn.toString(),
                t = e.match(/function\s*\(([^,]*),/i),
                s = new RegExp("[^.]\\b" + t[1] + "\\(\\s*('|\")([^()\"']*)('|\")\\s*\\)", "g"),
                i = e.match(s),
                a = [];
            return i && n(i, function (e, n) {
                a[n] = e.substr(t[1].length + 3).slice(0, -2)
            }), a
        }
    };
    var _ = {
        create: function (e) {
            var t = e.src;
            t in this._paths || (this._paths[t] = !0, n(this._rules, function (e) {
                t = e.call(null, t)
            }), a(t, e.type, e.loaded))
        },
        _paths: {},
        _rules: [],
        addPathRule: function (e) {
            this._rules.push(e)
        }
    };
    e.version = "1.0", e.use = function (e, t) {
        "string" == typeof e && (e = [e]);
        var i = [],
            a = [];
        n(e, function (e, t) {
            a[t] = !1
        }), n(e, function (e, r) {
            var o = s.get(e),
                c = o._loaded;
            o.ready(function () {
                var e = o.exports || {};
                e._INFO = o._info, e._INFO && (e._INFO.isNew = !c), i[r] = e, a[r] = !0;
                var s = !0;
                n(a, function (e) {
                    return e === !1 ? s = !1 : void 0
                }), t && s && t.apply(null, i)
            }), o.lazyLoad()
        })
    }, e.module = function (e, t, n) {
        var i = s.get(e);
        i.fn = t, i.deps = n, s.requiredPaths[i.getKey()] ? i.define() : s.lazyLoadPaths[i.getKey()] = !0
    }, e.pathRule = function (e) {
        _.addPathRule(e)
    }, e._addPath = function (e, t) {
        if ("/" !== t.slice(-1) && (t += "/"), e in s.paths) throw new Error(e + " has already in Module.paths");
        s.paths[e] = t
    };
    var l = d;
    e._setMod = function (e) {
        l = e || d
    }, e._fileMap = function (t, i) {
        if ("object" == typeof t) n(t, function (t, n) {
            e._fileMap(n, t)
        });
        else {
            var a = l;
            "string" == typeof i && (i = [i]), t = 1 == t.indexOf("js/") ? t.substr(4) : t, t = 1 == t.indexOf("css/") ? t.substr(5) : t;
            var r = s.moduleFileMap[a];
            r || (r = {}), n(i, function (e) {
                r[e] || (r[e] = t)
            }), s.moduleFileMap[a] = r
        }
    }, e._eventMap = {}, e.call = function (t, n, s) {
        for (var i = [], a = 2, r = arguments.length; r > a; a++) i.push(arguments[a]);
        e.use(t, function (e) {
            for (var t = n.split("."), s = 0, a = t.length; a > s; s++) e = e[t[s]];
            e && e.apply(this, i)
        })
    }, e._setContext = function (e) {
        "object" == typeof e && n(e, function (e, t) {
            h.prototype[t] = s.require(e)
        })
    }, e._setContextMethod = function (e, t) {
        h.prototype[e] = t
    };
    var h = function (e, t) {
        this.modName = e, this.svnMod = t
    };
    return h.prototype = {
        domain: window._bd_share_main.jscfg.domain,
        use: function (t, n) {
            "string" == typeof t && (t = [t]);
            for (var s = t.length - 1; s >= 0; s--) t[s] = this.svnMod + ":" + t[s];
            e.use(t, n)
        }
    }, e._Context = h, e.addLog = function (t, n) {
        e.use("lib/log", function (e) {
            e.defaultLog(t, n)
        })
    }, e.fire = function (t, n, s) {
        e.use("lib/mod_evt", function (e) {
            e.fire(t, n, s)
        })
    }, e._defService = function (e, t) {
        if (e) {
            var i = s.services[e];
            i = i || {}, n(t, function (e, t) {
                i[t] = e
            }), s.services[e] = i
        }
    }, e.getService = function (t, n, i) {
        var a = s.services[t];
        if (!a) throw new Error(t + " mod didn't define any services");
        var r = a[n];
        if (!r) throw new Error(t + " mod didn't provide service " + n);
        e.use(t + ":" + r, i)
    }, e
}({})), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module("base/min_tangram", function (e, t) {
    var n = {};
    n.each = function (e, t, n) {
        var s, i, a, r = e.length;
        if ("function" == typeof t)
            for (a = 0; r > a && (i = e[a], s = t.call(n || e, a, i), s !== !1); a++);
        return e
    };
    var s = function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    };
    n.extend = function () {
        for (var e = arguments[0], t = 1, n = arguments.length; n > t; t++) s(e, arguments[t]);
        return e
    }, n.domready = function (e, t) {
        if (t = t || document, /complete/.test(t.readyState)) e();
        else if (t.addEventListener) "interactive" == t.readyState ? e() : t.addEventListener("DOMContentLoaded", e, !1);
        else {
            var n = function () {
                n = new Function, e()
            };
            void
            function () {
                try {
                    t.body.doScroll("left")
                } catch (e) {
                    return setTimeout(arguments.callee, 10)
                }
                n()
            }(), t.attachEvent("onreadystatechange", function () {
                "complete" == t.readyState && n()
            })
        }
    }, n.isArray = function (e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }, t.T = n
}), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module("base/class", function (e, t, n) {
    var s = e("base/min_tangram").T;
    t.BaseClass = function () {
        var e = this,
            t = {};
        e.on = function (e, n) {
            var s = t[e];
            s || (s = t[e] = []), s.push(n)
        }, e.un = function (e, n) {
            if (!e) return void(t = {});
            var i = t[e];
            i && (n ? s.each(i, function (e, t) {
                return t == n ? (i.splice(e, 1), !1) : void 0
            }) : t[e] = [])
        }, e.fire = function (n, i) {
            var a = t[n];
            a && (i = i || {}, s.each(a, function (t, n) {
                i._result = n.call(e, s.extend({
                    _ctx: {
                        src: e
                    }
                }, i))
            }))
        }
    };
    var i = {};
    i.create = function (e, n) {
        return n = n || t.BaseClass,
            function () {
                n.apply(this, arguments);
                var t = s.extend({}, this);
                e.apply(this, arguments), this._super = t
            }
    }, t.Class = i
}), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module("conf/const", function (e, t, n) {
    t.CMD_ATTR = "data-cmd", t.CONFIG_TAG_ATTR = "data-tag", t.URLS = {
        likeSetUrl: "http://like.baidu.com/set",
        commitUrl: "http://s.share.baidu.com/commit",
        jumpUrl: "http://s.share.baidu.com",
        mshareUrl: "http://s.share.baidu.com/mshare",
        emailUrl: "http://s.share.baidu.com/sendmail",
        nsClick: "/",
        backUrl: "http://s.share.baidu.com/back",
        shortUrl: "http://dwz.cn/v2cut.php"
    }
}), !window._bd_share_is_recently_loaded && function () {
    window._bd_share_main.F._setMod("api"), window._bd_share_main.F._fileMap({
        "/js/share.js?v=da893e3e.js": ["conf/define", "base/fis", "base/tangrammin", "base/class.js", "conf/define.js", "conf/const.js", "config", "share/api_base.js", "view/view_base.js", "start/router.js", "component/comm_tools.js", "trans/trans.js"],
        "/js/base/tangram.js?v=37768233.js": ["base/tangram"],
        "/js/view/share_view.js?v=3ae6026d.js": ["view/share_view"],
        "/js/view/slide_view.js?v=08373964.js": ["view/slide_view"],
        "/js/view/like_view.js?v=df3e0eca.js": ["view/like_view"],
        "/js/view/select_view.js?v=85fc7cec.js": ["view/select_view"],
        "/js/trans/data.js?v=17af2bd2.js": ["trans/data"],
        "/js/trans/logger.js?v=d16ec0e3.js": ["trans/logger"],
        "/js/trans/trans_bdxc.js?v=7ac21555.js": ["trans/trans_bdxc"],
        "/js/trans/trans_bdysc.js?v=fc21acaa.js": ["trans/trans_bdysc"],
        "/js/trans/trans_weixin.js?v=080be124.js": ["trans/trans_weixin"],
        "/js/share/combine_api.js?v=8d37a7b3.js": ["share/combine_api"],
        "/js/share/like_api.js?v=d3693f0a.js": ["share/like_api"],
        "/js/share/likeshare.js?v=e1f4fbf1.js": ["share/likeshare"],
        "/js/share/share_api.js?v=226108fe.js": ["share/share_api"],
        "/js/share/slide_api.js?v=ec14f516.js": ["share/slide_api"],
        "/js/component/animate.js?v=5b737477.js": ["component/animate"],
        "/js/component/anticheat.js?v=44b9b245.js": ["component/anticheat"],
        "/js/component/partners.js?v=911c4302.js": ["component/partners"],
        "/js/component/pop_base.js?v=36f92e70.js": ["component/pop_base"],
        "/js/component/pop_dialog.js?v=d479767d.js": ["component/pop_dialog"],
        "/js/component/pop_popup.js?v=4387b4e1.js": ["component/pop_popup"],
        "/js/component/pop_popup_slide.js?v=b16a1f10.js": ["component/pop_popup_slide"],
        "/js/component/qrcode.js?v=d69754a9.js": ["component/qrcode"],
        "/css/share_style0_16.css?v=6aba13f0.css": ["share_style0_16.css"],
        "/css/share_style0_32.css?v=4413acf0.css": ["share_style0_32.css"],
        "/css/share_style2.css?v=611d4f74.css": ["share_style2.css"],
        "/css/share_style4.css?v=cef2b8f3.css": ["share_style4.css"],
        "/css/slide_share.css?v=9c50d088.css": ["slide_share.css"],
        "/css/share_popup.css?v=240f357d.css": ["share_popup.css"],
        "/css/like.css?v=d52a0ea5.css": ["like.css"],
        "/css/imgshare.css?v=a7830602.css": ["imgshare.css"],
        "/css/select_share.css?v=15f56735.css": ["select_share.css"],
        "/css/weixin_popup.css?v=1a56666e.css": ["weixin_popup.css"]
    }), window._bd_share_main.F._loadScriptTimeout = 15e3, window._bd_share_main.F._useConfig = !0, window._bd_share_main.F._firstScreenCSS = "", window._bd_share_main.F._firstScreenJS = ""
}(), !window._bd_share_is_recently_loaded && window._bd_share_main.F.use("base/min_tangram", function (e) {
    function t(e, t, n) {
        var s = new e(n);
        s.setView(new t(n)), s.init(), n && n._handleId && (_bd_share_main.api = _bd_share_main.api || {}, _bd_share_main.api[n._handleId] = s)
    }

    function n(e, n) {
        window._bd_share_main.F.use(e, function (e, s) {
            i.isArray(n) ? i.each(n, function (n, i) {
                t(e.Api, s.View, i)
            }) : t(e.Api, s.View, n)
        })
    }

    function s(e) {
        var t = e.common || window._bd_share_config && _bd_share_config.common || {},
            n = {
                like: {
                    type: "like"
                },
                share: {
                    type: "share",
                    bdStyle: 0,
                    bdMini: 2,
                    bdSign: "on"
                },
                slide: {
                    type: "slide",
                    bdStyle: "1",
                    bdMini: 2,
                    bdImg: 0,
                    bdPos: "right",
                    bdTop: 100,
                    bdSign: "on"
                },
                image: {
                    viewType: "list",
                    viewStyle: "0",
                    viewPos: "top",
                    viewColor: "black",
                    viewSize: "16",
                    viewList: ["qzone", "tsina", "huaban", "tqq", "renren"]
                },
                selectShare: {
                    type: "select",
                    bdStyle: 0,
                    bdMini: 2,
                    bdSign: "on"
                }
            },
            s = {
                share: {
                    __cmd: "",
                    __buttonType: "",
                    __type: "",
                    __element: null
                },
                slide: {
                    __cmd: "",
                    __buttonType: "",
                    __type: "",
                    __element: null
                },
                image: {
                    __cmd: "",
                    __buttonType: "",
                    __type: "",
                    __element: null
                }
            };
        return i.each(["like", "share", "slide", "image", "selectShare"], function (a, r) {
            e[r] && (i.isArray(e[r]) && e[r].length > 0 ? i.each(e[r], function (a, o) {
                e[r][a] = i.extend({}, n[r], t, o, s[r])
            }) : e[r] = i.extend({}, n[r], t, e[r], s[r]))
        }), e
    }
    var i = e.T;
    _bd_share_main.init = function (e) {
        if (e = e || window._bd_share_config || {
                share: {}
            }) {
            var t = s(e);
            t.like && n(["share/like_api", "view/like_view"], t.like), t.share && n(["share/share_api", "view/share_view"], t.share), t.slide && n(["share/slide_api", "view/slide_view"], t.slide), t.selectShare && n(["share/select_api", "view/select_view"], t.selectShare), t.image && n(["share/image_api", "view/image_view"], t.image)
        }
    }, window._bd_share_main._LogPoolV2 = [], window._bd_share_main.n1 = (new Date).getTime(), i.domready(function () {
        window._bd_share_main.n2 = (new Date).getTime() + 1e3, _bd_share_main.init(), setTimeout(function () {
            window._bd_share_main.F.use("trans/logger", function (e) {
                e.nsClick(), e.back(), e.duration()
            })
        }, 3e3)
    })
}), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module("component/comm_tools", function (e, t) {
    var n = function () {
            var e = window.location || document.location || {};
            return e.href || ""
        },
        s = function (e, t) {
            for (var n = e.length, s = "", i = 1; t >= i; i++) {
                var a = Math.floor(n * Math.random());
                s += e.charAt(a)
            }
            return s
        },
        i = function () {
            var e = (+new Date).toString(36),
                t = s("0123456789abcdefghijklmnopqrstuvwxyz", 3);
            return e + t
        };
    t.getLinkId = i, t.getPageUrl = n
}), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module("trans/trans", function (e, t) {
    var n = e("component/comm_tools"),
        s = e("conf/const").URLS,
        i = function () {
            window._bd_share_main.F.use("base/tangram", function (e) {
                var t = e.T;
                null == t.cookie.get("bdshare_firstime") && t.cookie.set("bdshare_firstime", 1 * new Date, {
                    path: "/",
                    expires: (new Date).setFullYear(2022) - new Date
                })
            })
        },
        a = function (e) {
            var t = e.bdUrl || n.getPageUrl();
            return t = t.replace(/\'/g, "%27").replace(/\"/g, "%22")
        },
        r = function (e) {
            var t = (new Date).getTime() + 3e3,
                s = {
                    click: 1,
                    url: a(e),
                    uid: e.bdUid || "0",
                    to: e.__cmd,
                    type: "text",
                    pic: e.bdPic || "",
                    title: (e.bdText || document.title).substr(0, 300),
                    key: (e.bdSnsKey || {})[e.__cmd] || "",
                    desc: e.bdDesc || "",
                    comment: e.bdComment || "",
                    relateUid: e.bdWbuid || "",
                    searchPic: e.bdSearchPic || 0,
                    sign: e.bdSign || "on",
                    l: window._bd_share_main.n1.toString(32) + window._bd_share_main.n2.toString(32) + t.toString(32),
                    linkid: n.getLinkId(),
                    firstime: c("bdshare_firstime") || ""
                };
            switch (e.__cmd) {
                case "copy":
                    _(s);
                    break;
                case "print":
                    l();
                    break;
                case "bdxc":
                    h();
                    break;
                case "bdysc":
                    u(s);
                    break;
                case "weixin":
                    f(s);
                    break;
                default:
                    o(e, s)
            }
            window._bd_share_main.F.use("trans/logger", function (t) {
                t.commit(e, s)
            })
        },
        o = function (e, t) {
            var n = s.jumpUrl;
            "mshare" == e.__cmd ? n = s.mshareUrl : "mail" == e.__cmd && (n = s.emailUrl);
            var i = n + "?" + d(t);
            window.open(i)
        },
        c = function (e) {
            if (e) {
                var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
                    n = t.exec(document.cookie);
                if (n) return decodeURIComponent(n[2] || null)
            }
        },
        d = function (e) {
            var t = [];
            for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t.join("&").replace(/%20/g, "+")
        },
        _ = function (e) {
            window._bd_share_main.F.use("base/tangram", function (t) {
                var s = t.T;
                s.browser.ie ? (window.clipboardData.setData("text", document.title + " " + (e.bdUrl || n.getPageUrl())), alert("标题和链接复制成功，您可以推荐给QQ/MSN上的好友了！")) : window.prompt("您使用的是非IE核心浏览器，请按下 Ctrl+C 复制代码到剪贴板", document.title + " " + (e.bdUrl || n.getPageUrl()))
            })
        },
        l = function () {
            window.print()
        },
        h = function () {
            window._bd_share_main.F.use("trans/trans_bdxc", function (e) {
                e && e.run()
            })
        },
        u = function (e) {
            window._bd_share_main.F.use("trans/trans_bdysc", function (t) {
                t && t.run(e)
            })
        },
        f = function (e) {
            window._bd_share_main.F.use("trans/trans_weixin", function (t) {
                t && t.run(e)
            })
        },
        p = function (e) {
            r(e)
        };
    t.run = p, i()
});