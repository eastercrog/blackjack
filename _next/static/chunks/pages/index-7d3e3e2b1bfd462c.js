(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return c(4902)
            }])
        },
        4902: function(a, b, c) {
            "use strict";
            c.r(b), c.d(b, {
                default: function() {
                    return F
                }
            });
            var d = c(5893),
                e = c(9008),
                f = c.n(e),
                g = c(7294),
                h = c(7568),
                i = c(4051),
                j = c.n(i),
                k = c(2484),
                l = c.n(k),
                m = c(2999),
                n = c(7922),
                o = c(1163),
                p = c(4845),
                q = {
                    walletconnect: {
                        package: p.Z,
                        options: {
                            infuraId: '"https://solitary-blue-arm.bsc-testnet.discover.quiknode.pro/a9781fb8425084fcbbfda18d0a0962ff73ef2f41/"'
                        }
                    }
                },
                r = function(a) {
                    var b, c = a.account,
                        e = a.setAccount,
                        f = a.setProvider,
                        i = a.provider,
                        k = a.setLibrary;
                    a.library;
                    var p, r = (0, o.useRouter)();
                    b = new(l())({
                        providerOptions: q,
                        cacheProvider: !0
                    });
                    var s, t, u = (p = (0, h.Z)(j().mark(function a() {
                            return j().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, a.next = 3, i.request({
                                            method: "wallet_switchEthereumChain",
                                            params: [{
                                                chainId: "0x5"
                                            }, ]
                                        });
                                    case 3:
                                        r.reload(), a.next = 9;
                                        break;
                                    case 6:
                                        a.prev = 6, a.t0 = a.catch(0), console.error(a.t0.message);
                                    case 9:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, null, [
                                [0, 6]
                            ])
                        })), function() {
                            return p.apply(this, arguments)
                        }),
                        v = (s = (0, h.Z)(j().mark(function a() {
                            return j().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, u();
                                    case 2:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), function() {
                            return s.apply(this, arguments)
                        }),
                        w = function() {
                            e("")
                        };
                    (0, g.useEffect)(function() {
                        (null == b ? void 0 : b.cachedProvider) && z()
                    }, []), (0, g.useEffect)(function() {
                        if (null == i ? void 0 : i.on) {
                            var a = function(a) {
                                    a && (e(a[0]), z())
                                },
                                b = function() {
                                    y()
                                };
                            return i.on("accountsChanged", a), i.on("disconnect", b), i.on("chainChanged", v),
                                function() {
                                    i.removeListener && (i.removeListener("accountsChanged", a), i.removeListener("disconnect", b), i.removeListener("chainChanged", v))
                                }
                        }
                    }, [i]);
                    var x, y = (t = (0, h.Z)(j().mark(function a() {
                            return j().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, null == b ? void 0 : b.clearCachedProvider();
                                    case 2:
                                        w();
                                    case 3:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), function() {
                            return t.apply(this, arguments)
                        }),
                        z = (x = (0, h.Z)(j().mark(function a() {
                            var c, d, g, h, i;
                            return j().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, a.next = 3, null == b ? void 0 : b.connect();
                                    case 3:
                                        return c = a.sent, d = new n.Q(c), a.next = 7, d.listAccounts();
                                    case 7:
                                        return g = a.sent, a.next = 10, d.getNetwork();
                                    case 10:
                                        if (h = a.sent.chainId, f(c), k(d), i = d.getSigner(), !g || (e(g[0]), !(5 !== h))) {
                                            a.next = 19;
                                            break
                                        }
                                        return a.next = 19, u();
                                    case 19:
                                        a.next = 24;
                                        break;
                                    case 21:
                                        a.prev = 21, a.t0 = a.catch(0), console.error(a.t0);
                                    case 24:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, null, [
                                [0, 21]
                            ])
                        })), function() {
                            return x.apply(this, arguments)
                        });
                    return (0, d.jsx)("div", {
                        children: c ? (0, d.jsx)("button", {
                            className: "focus:outline-none font-roboto text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-[#ea5959] hover:bg-[#de4646] focus:ring-blue-800",
                            onClick: y,
                            children: (0, m.Z)(c)
                        }) : (0, d.jsx)("button", {
                            className: "focus:outline-none font-roboto text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-[#ea5959] hover:bg-[#de4646] focus:ring-blue-800",
                            onClick: z,
                            children: "Connect Wallet"
                        })
                    })
                },
                s = c(797),
                t = c(6076),
                u = c(5553),
                v = c(8928),
                w = [{
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "player",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "totalPrize",
                        type: "uint256"
                    }, ],
                    name: "GameEnded",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "player",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "bet",
                        type: "uint256"
                    }, ],
                    name: "GameStarted",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }, ],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    stateMutability: "payable",
                    type: "fallback"
                }, {
                    inputs: [],
                    name: "betAmount",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "casinoAddress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_casinoAddress",
                        type: "address"
                    }, ],
                    name: "changeAddress",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_bet",
                        type: "uint256"
                    }, ],
                    name: "changeBetAmount",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_player",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_finalBet",
                        type: "uint256"
                    }, ],
                    name: "endGame",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, ],
                    name: "players",
                    outputs: [{
                        internalType: "uint256",
                        name: "bet",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "isGameActive",
                        type: "bool"
                    }, {
                        internalType: "address",
                        name: "playerAddress",
                        type: "address"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "startGame",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }, ],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }, ],
                    name: "withdrawBet",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }, ],
                x = "0x277C1045FB8D972d7775E87c6806dFb66A66E3de",
                y = c(9260),
                z = c.n(y),
                A = c(2920);
            c(993);
            var B = c(2670),
                C = function(a) {
                    var b = a.isModalOpen,
                        c = a.setIsModalOpen,
                        e = a.startGame,
                        f = function(a) {
                            (0, B.Z)(null == a ? void 0 : a.target, Element) && "background" === a.target.id && c(!1)
                        };
                    return b ? (0, d.jsx)("div", {
                        onClick: f,
                        id: "background",
                        className: "fixed inset-0 z-20 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center",
                        children: (0, d.jsx)("div", {
                            id: "modal",
                            className: " ",
                            children: (0, d.jsx)("div", {
                                className: "relative p-4 w-full max-w-md h-1/2 md:h-auto",
                                children: (0, d.jsxs)("div", {
                                    className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
                                    children: [(0, d.jsxs)("div", {
                                        className: "flex justify-center text-center items-center p-5 rounded-t border-b dark:border-gray-600",
                                        children: [(0, d.jsx)("h3", {
                                            className: "text-xl font-medium text-gray-900 dark:text-white",
                                            children: "Game Rules"
                                        }), (0, d.jsxs)("button", {
                                            onClick: function() {
                                                return c(!1)
                                            },
                                            type: "button",
                                            className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
                                            "data-modal-toggle": "small-modal",
                                            children: [(0, d.jsx)("svg", {
                                                "aria-hidden": "true",
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0, d.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                                    clipRule: "evenodd"
                                                })
                                            }), (0, d.jsx)("span", {
                                                className: "sr-only",
                                                children: "Close modal"
                                            })]
                                        })]
                                    }), (0, d.jsxs)("ul", {
                                        className: "p-6 space-y-6",
                                        children: [(0, d.jsx)("li", {
                                            className: "text-base leading-relaxed text-gray-500 dark:text-gray-400",
                                            children: "Entry fee is 0.01 Goerli ETH."
                                        }), (0, d.jsx)("li", {
                                            className: "text-base leading-relaxed text-gray-500 dark:text-gray-400",
                                            children: "If your game score is positive then you will win the game and get extra 0.01 Goerli ETH."
                                        }), (0, d.jsx)("li", {
                                            className: "text-base leading-relaxed text-gray-500 dark:text-gray-400",
                                            children: "Game continues till one deck (52 cards) is finished. I guess you can count cards easily on this game."
                                        })]
                                    }), (0, d.jsx)("div", {
                                        className: "flex justify-center items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600",
                                        children: (0, d.jsx)("button", {
                                            onClick: function() {
                                                e(), c(!1)
                                            },
                                            "data-modal-toggle": "small-modal",
                                            type: "button",
                                            className: "text-white bg-[#d94d4d] hover:bg-[#b32d2d] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ",
                                            children: "Start Game"
                                        })
                                    })]
                                })
                            })
                        })
                    }) : null
                },
                D = function(a) {
                    var b = a.library,
                        c = a.account,
                        e = (0, g.useState)(0),
                        f = e[0],
                        i = e[1],
                        k = (0, g.useState)(0),
                        l = k[0],
                        m = k[1],
                        n = (0, g.useState)([]),
                        o = n[0],
                        p = n[1],
                        q = (0, g.useState)([]),
                        r = q[0],
                        y = q[1],
                        B = (0, g.useState)(!1),
                        D = B[0],
                        E = B[1],
                        F = (0, g.useState)(0),
                        G = F[0],
                        H = F[1],
                        I = (0, g.useState)(0),
                        J = I[0],
                        K = I[1],
                        L = (0, g.useState)([]),
                        M = L[0],
                        N = L[1],
                        O = (0, g.useState)(!1),
                        P = O[0],
                        Q = O[1],
                        R = (0, g.useState)(),
                        S = R[0],
                        T = R[1],
                        U = (0, g.useState)(!1),
                        V = U[0],
                        W = U[1],
                        X = (0, g.useState)([]),
                        Y = X[0],
                        Z = X[1],
                        $ = (0, g.useState)(!1),
                        _ = $[0],
                        aa = $[1],
                        ab = (0, g.useState)(!1),
                        ac = ab[0],
                        ad = ab[1],
                        ae = (0, g.useState)(!1),
                        af = ae[0],
                        ag = ae[1],
                        ah = (0, g.useRef)(!1);
                    (0, g.useEffect)(function() {
                        return !1 === ah.current && (Z([]), aa(!1), E(!1), ag(!1), p([]), y([]), m(0), i(0), H(0), K(0)),
                            function() {
                                ah.current = !0
                            }
                    }, []), (0, g.useEffect)(function() {
                        c ? Z([]) : Z(["Connect", "Wallet"])
                    }, [c]);
                    var ai, aj, ak = [],
                        al = (ai = (0, h.Z)(j().mark(function a() {
                            var c, d, e, f, g, h;
                            return j().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (a.prev = 0, ad(!1), c = null == b ? void 0 : b.getSigner(), d = new t.CH(x, w, c), !(S > 0)) {
                                            a.next = 13;
                                            break
                                        }
                                        return a.next = 7, A.Am.promise(d.withdrawBet(u.fi("0.02")), {
                                            pending: "Withdrawing...",
                                            success: "Withdrew succesfully",
                                            error: "Something went wrong \uD83E\uDD2F"
                                        });
                                    case 7:
                                        return e = a.sent, a.next = 10, b.waitForTransaction(e.hash);
                                    case 10:
                                        f = a.sent, a.next = 20;
                                        break;
                                    case 13:
                                        if (0 != S) {
                                            a.next = 20;
                                            break
                                        }
                                        return a.next = 16, A.Am.promise(d.withdrawBet(u.fi("0.01")), {
                                            pending: "Withdrawing...",
                                            success: "Withdrew succesfully",
                                            error: "Something went wrong \uD83E\uDD2F"
                                        });
                                    case 16:
                                        return g = a.sent, a.next = 19, b.waitForTransaction(g.hash);
                                    case 19:
                                        h = a.sent;
                                    case 20:
                                        Z(["Play", "Again"]), ag(!1), aa(!1), a.next = 28;
                                        break;
                                    case 25:
                                        a.prev = 25, a.t0 = a.catch(0), console.error(a.t0);
                                    case 28:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, null, [
                                [0, 25]
                            ])
                        })), function() {
                            return ai.apply(this, arguments)
                        });
                    (0, g.useEffect)(function() {
                        !0 === af && (am(), window.setTimeout(function() {
                            S > 0 ? (A.Am.info("You have won the game and extra 0.01 ETH! Wait for withdraw button to come", {
                                position: "top-center",
                                autoClose: 5e3,
                                hideProgressBar: !0,
                                closeOnClick: !0,
                                pauseOnHover: !0,
                                draggable: !0,
                                progress: 0
                            }), Z(["Wait for", "Evaluation"])) : 0 === S ? (A.Am.info("It was a close game but it ended in tie. Wait for withdraw button to come to get back your initial bet", {
                                position: "top-center",
                                autoClose: 5e3,
                                hideProgressBar: !0,
                                closeOnClick: !0,
                                pauseOnHover: !0,
                                draggable: !0,
                                progress: 0
                            }), Z(["Wait for", "Evaluation"])) : (A.Am.info("It was a close game but you have lost it. Play again to earn back your 0.01 ETH ", {
                                position: "top-center",
                                autoClose: 5e3,
                                hideProgressBar: !0,
                                closeOnClick: !0,
                                pauseOnHover: !0,
                                draggable: !0,
                                progress: 0
                            }), Z(["Wait for", "Evaluation"])), E(!1), ad(!0)
                        }, 2e3))
                    }, [af]), (0, g.useEffect)(function() {
                        !1 === D && (p([]), y([]))
                    }, [D]);
                    var am = (aj = (0, h.Z)(j().mark(function a() {
                            var d, e, f, g, h, i, k, l, m, n, o, p;
                            return j().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (a.prev = 0, e = (d = new v.w5("912e4eb387d9cd78cfc1cddc061bdebbf0f2369c3898937745ccb1833a76d63b", b)).getAddress(), f = new t.CH(x, w, d), !(S > 0)) {
                                            a.next = 21;
                                            break
                                        }
                                        return g = {
                                            from: e,
                                            to: x,
                                            value: u.fi("0.01")
                                        }, a.next = 8, d.sendTransaction(g);
                                    case 8:
                                        return h = a.sent, a.next = 11, b.waitForTransaction(h.hash);
                                    case 11:
                                        return i = a.sent, a.next = 14, f.endGame(c, u.fi("0.02"));
                                    case 14:
                                        return k = a.sent, a.next = 17, b.waitForTransaction(k.hash);
                                    case 17:
                                        l = a.sent, aa(!0), a.next = 38;
                                        break;
                                    case 21:
                                        if (0 !== S) {
                                            a.next = 31;
                                            break
                                        }
                                        return a.next = 24, f.endGame(c, u.fi("0.01"));
                                    case 24:
                                        return m = a.sent, a.next = 27, b.waitForTransaction(m.hash);
                                    case 27:
                                        n = a.sent, aa(!0), a.next = 38;
                                        break;
                                    case 31:
                                        return a.next = 33, f.endGame(c, u.fi("0.00"));
                                    case 33:
                                        return o = a.sent, a.next = 36, b.waitForTransaction(o.hash);
                                    case 36:
                                        p = a.sent, aa(!1);
                                    case 38:
                                        Z(["Play", "Again"]), a.next = 44;
                                        break;
                                    case 41:
                                        a.prev = 41, a.t0 = a.catch(0), console.error(a.t0);
                                    case 44:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, null, [
                                [0, 41]
                            ])
                        })), function() {
                            return aj.apply(this, arguments)
                        }),
                        an = function() {
                            for (var a = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ], b = ["D", "C", "H", "S"], c = 0; c < b.length; c++)
                                for (var d = 0; d < a.length; d++) ak.push(a[d] + "-" + b[c]);
                            for (var e = 0; e < ak.length; e++) {
                                var f, g = Math.floor(Math.random() * ak.length),
                                    h = ak[e];
                                ak[e] = null !== (f = ak[g]) && void 0 !== f ? f : "", ak[g] = null != h ? h : ""
                            }
                            return N(ak), ak
                        },
                        ao = function(a) {
                            if (f >= 21) A.Am.error("You can't get more cards", {
                                position: "top-center",
                                autoClose: 3e3,
                                hideProgressBar: !0,
                                closeOnClick: !0,
                                pauseOnHover: !1,
                                draggable: !0,
                                progress: void 0
                            });
                            else {
                                var b = a,
                                    c = 0,
                                    d = b.pop(),
                                    e = "/".concat(d, ".png"),
                                    g = at(d);
                                c += g, 11 == g && H(function(a) {
                                    return a + 1
                                }), p(function(a) {
                                    return (0, s.Z)(a).concat([e])
                                }), i(function(a) {
                                    return a + c
                                }), N(b)
                            }
                        };
                    (0, g.useEffect)(function() {
                        aq()
                    }, [f]);
                    var ap = function(a) {
                            if (a.length >= 4) {
                                Z([]), K(0), H(0), Q(!1);
                                for (var b = 0, c = [], d = 0; d < 2; d++) {
                                    var e = null == a ? void 0 : a.pop(),
                                        f = "/".concat(e, ".png"),
                                        g = at(e);
                                    b += g, c.push(f), 11 == g && K(function(a) {
                                        return a + 1
                                    })
                                }
                                for (; b < 17 && 2 !== a.length;) {
                                    var h = a.pop(),
                                        j = "/".concat(h, ".png");
                                    c.push(j);
                                    var k = at(h);
                                    11 == k && K(function(a) {
                                        return a + 1
                                    }), b += k
                                }
                                m(function(a) {
                                    return a + b
                                }), y(c);
                                for (var l = 0, n = [], q = 0; q < 2; q++) {
                                    var r = a.pop(),
                                        s = "/".concat(r, ".png");
                                    n.push(s);
                                    var t = at(r);
                                    l += t, 11 == t && H(function(a) {
                                        return a + 1
                                    })
                                }
                                p(n), i(l), N(a), a.length <= 4 && o.length < 2 && (E(!1), Q(!0), A.Am.error("No more cards left. This is the final round!", {
                                    position: "top-center",
                                    autoClose: 3e3,
                                    hideProgressBar: !0,
                                    closeOnClick: !0,
                                    pauseOnHover: !1,
                                    draggable: !0,
                                    progress: void 0
                                }))
                            } else E(!1)
                        },
                        aq = function() {
                            return f > 21 && 0 !== G ? (i(function(a) {
                                return a - 10
                            }), H(function(a) {
                                return a - 1
                            }), !0) : l > 21 && 0 !== J ? (m(function(a) {
                                return a - 10
                            }), K(function(a) {
                                return a - 1
                            }), !0) : void 0
                        },
                        ar = function() {
                            Q(!0), f > 21 ? (Z(["You", "Lost!"]), T(function(a) {
                                return a - 1
                            })) : l > 21 ? (Z(["You", "Won!"]), T(function(a) {
                                return a + 1
                            })) : f == l ? Z(["It's a", "Tie!"]) : f > l ? (Z(["You", "Won"]), T(function(a) {
                                return a + 1
                            })) : f < l && (Z(["You", "Lost!"]), T(function(a) {
                                return a - 1
                            })), i(0), m(0);
                            var a = M;
                            a.length >= 4 ? window.setTimeout(function() {
                                ap(a)
                            }, 2e3) : ag(!0)
                        };
                    (0, g.useEffect)(function() {
                        M.length <= 4 && E(!1)
                    }, [M]);
                    var as, at = function(a) {
                            var b = (null == a ? void 0 : a.split("-"))[0];
                            return !1 != /\d/.test(b) ? parseInt(b) : "A" == b ? 11 : 10
                        },
                        au = (as = (0, h.Z)(j().mark(function a() {
                            var c, d, e, f, g;
                            return j().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, c = null == b ? void 0 : b.getSigner(), d = new t.CH(x, w, c), a.next = 5, A.Am.promise(d.startGame({
                                            value: u.fi("0.01")
                                        }), {
                                            pending: "Sending transaction...",
                                            success: "Starting the game",
                                            error: "Something went wrong \uD83E\uDD2F"
                                        });
                                    case 5:
                                        return e = a.sent, ad(!0), a.next = 9, b.waitForTransaction(e.hash);
                                    case 9:
                                        f = a.sent, ad(!1), g = an(), T(0), E(!0), aa(!1), ap(g), a.next = 21;
                                        break;
                                    case 18:
                                        a.prev = 18, a.t0 = a.catch(0), console.error(a.t0);
                                    case 21:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, null, [
                                [0, 18]
                            ])
                        })), function() {
                            return as.apply(this, arguments)
                        });
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsxs)("div", {
                            className: " md:grid mt-20 md:grid-cols-3 md:-mt-12 justify-center items-center ",
                            id: "page",
                            children: [(0, d.jsxs)("div", {
                                className: " lg:col-start-1 pt-5 md:mt-0 items-center flex flex-col ",
                                children: [D ? (0, d.jsxs)("h1", {
                                    className: "text-3xl pb-4 ",
                                    children: ["Player score : ", S]
                                }) : af ? (0, d.jsxs)("h1", {
                                    className: "text-3xl pb-5 ",
                                    children: ["Player score : ", S]
                                }) : "", (0, d.jsx)("h1", {}), !_ && "Wait for" !== Y[0] && c && (0, d.jsx)("button", {
                                    className: "".concat(D ? "hidden" : "md:mt-4", " p-4 mb-4 hover:scale-110 transition duration-200"),
                                    onClick: function() {
                                        return W(function(a) {
                                            return !a
                                        })
                                    },
                                    children: (0, d.jsx)(z(), {
                                        src: "/start.svg",
                                        width: 120,
                                        height: 120,
                                        layout: "fixed"
                                    })
                                }), _ && S >= 0 && (0, d.jsx)("button", {
                                    className: "".concat(D ? "mt-8" : "", " hover:scale-110 transition duration-200"),
                                    onClick: al,
                                    children: (0, d.jsx)(z(), {
                                        className: " ",
                                        src: "/withdraw.svg",
                                        width: 120,
                                        height: 120,
                                        layout: "fixed"
                                    })
                                })]
                            }), (0, d.jsxs)("div", {
                                className: " md:col-start-2 flex flex-col justify-center items-center",
                                children: [(0, d.jsx)("h1", {
                                    className: " p-1 text-2xl font-roboto mt-2 mb-6",
                                    children: "Dealer"
                                }), (0, d.jsx)("div", {
                                    className: "flex flex-wrap lg:flex-nowrap justify-evenly lg:row-start-1 md:flex-row md:justify-center items-center md:gap-10 ",
                                    children: (null == r ? void 0 : r.length) !== 0 ? null == r ? void 0 : r.map(function(a, b) {
                                        return 0 == b ? (0, d.jsx)("div", {
                                            className: "".concat(P ? "transition translate-x-1 duration-300" : ""),
                                            children: (0, d.jsx)(z(), {
                                                src: P ? a : "/back.png",
                                                layout: "fixed",
                                                width: 160,
                                                height: 220,
                                                priority: !0
                                            })
                                        }, b) : (0, d.jsx)("div", {
                                            className: "".concat(0 !== b ? "-ml-[8rem] md:-ml-[10.5rem]" : "", "  "),
                                            children: (0, d.jsx)(z(), {
                                                src: a,
                                                layout: "fixed",
                                                width: 160,
                                                height: 220,
                                                priority: !0
                                            })
                                        }, b)
                                    }) : (0, d.jsxs)("div", {
                                        className: "flex gap-10",
                                        children: [(0, d.jsx)(z(), {
                                            src: "/back.png",
                                            layout: "fixed",
                                            width: 160,
                                            height: 220,
                                            loading: "lazy"
                                        }), (0, d.jsx)(z(), {
                                            src: "/back.png",
                                            layout: "fixed",
                                            width: 160,
                                            height: 220,
                                            loading: "lazy"
                                        })]
                                    })
                                }), (0, d.jsx)(C, {
                                    isModalOpen: V,
                                    setIsModalOpen: W,
                                    startGame: au
                                }), (0, d.jsxs)("div", {
                                    className: "flex flex-row w-full -my-2 justify-evenly items-center ",
                                    children: [Y && !ac && (0, d.jsx)("span", {
                                        className: " text-3xl w-1/3 text-right ".concat((Y[0], ""), "  mt-4 font-sans  "),
                                        children: Y[0]
                                    }), (0, d.jsx)("div", {
                                        className: "".concat(Y ? "" : " ", " ").concat((Y && Y[0], ""), " mt-4 md:mt-10 w-1/3 ").concat(ac ? "opacity-60" : "opacity-20", " mb-5 md:mb-0 flex justify-center "),
                                        children: (0, d.jsx)(z(), {
                                            className: "".concat(ac ? "animate-spin " : ""),
                                            src: "/logo.svg",
                                            width: ac ? 90 : 56,
                                            height: 89,
                                            layout: "fixed"
                                        })
                                    }), Y && !ac && (0, d.jsx)("span", {
                                        className: " text-3xl w-1/3 font-sans mt-4",
                                        children: Y[1]
                                    })]
                                }), (0, d.jsx)("div", {
                                    className: "flex justify-evenly md:flex-row md:justify-center items-center md:gap-10 md:mt-10 md:mb-4",
                                    children: 0 !== o.length ? o.map(function(a, b) {
                                        return (0, d.jsx)("div", {
                                            className: " ".concat(0 !== b ? "-ml-[8rem] md:-ml-[10.5rem]" : "", "  flex gap-10  "),
                                            children: (0, d.jsx)(z(), {
                                                src: a,
                                                layout: "fixed",
                                                width: 160,
                                                height: 220,
                                                priority: !0
                                            })
                                        }, b)
                                    }) : (0, d.jsxs)("div", {
                                        className: "flex gap-10",
                                        children: [(0, d.jsx)(z(), {
                                            src: "/back.png",
                                            layout: "fixed",
                                            width: 160,
                                            height: 220,
                                            loading: "lazy"
                                        }), (0, d.jsx)(z(), {
                                            src: "/back.png",
                                            layout: "fixed",
                                            width: 160,
                                            height: 220,
                                            loading: "lazy"
                                        })]
                                    })
                                }), (0, d.jsxs)("h1", {
                                    className: "mt-2 font-roboto text-2xl",
                                    children: ["Player - ", f]
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "col-start-2 md:row-start-3 lg:row-start-1 lg:col-start-3 mt-4 md:mt-8 mr-4 md:mr-0 gap-4 flex justify-center items-center lg:mr-0 lg:flex-col lg:content-end",
                                children: [D && f > 0 && (0, d.jsx)("button", {
                                    className: "lg:px-8 hover:scale-110 mx-2 transition duration-200",
                                    onClick: ar,
                                    children: (0, d.jsx)(z(), {
                                        src: "/stand.svg",
                                        width: 120,
                                        height: 120,
                                        layout: "fixed"
                                    })
                                }), D && f > 0 && M.length > 0 && (0, d.jsx)("button", {
                                    className: "".concat(f >= 21 ? "cursor-not-allowed " : "cursor-pointer", " hover:scale-110 transition duration-200"),
                                    onClick: function() {
                                        return ao(M)
                                    },
                                    children: (0, d.jsx)(z(), {
                                        src: "/hit.svg",
                                        width: 120,
                                        height: 120,
                                        layout: "fixed"
                                    })
                                })]
                            })]
                        }), (0, d.jsx)(A.Ix, {
                            position: "top-center",
                            hideProgressBar: !0,
                            newestOnTop: !1,
                            closeOnClick: !0,
                            rtl: !1,
                            pauseOnFocusLoss: !0,
                            draggable: !0
                        })]
                    })
                },
                E = function() {
                    var a = (0, g.useState)(),
                        b = a[0],
                        c = a[1],
                        e = (0, g.useState)(""),
                        h = e[0],
                        i = e[1],
                        j = (0, g.useState)(),
                        k = j[0],
                        l = j[1];
                    return (0, d.jsxs)("div", {
                        className: "",
                        children: [(0, d.jsxs)(f(), {
                            children: [(0, d.jsx)("title", {
                                children: "Blackjack dApp"
                            }), (0, d.jsx)("meta", {
                                name: "description",
                                content: "blackjack dApp"
                            })]
                        }), (0, d.jsxs)("main", {
                            className: "bg-[#144b1e] pb-1 text-white",
                            children: [(0, d.jsx)("nav", {
                                className: "px-8 md:px-2 fixed w-full z-20 top-0 left-0 py-3.5 ",
                                children: (0, d.jsxs)("div", {
                                    className: "container flex flex-wrap justify-between items-center mx-auto",
                                    children: [(0, d.jsx)("h1", {
                                        className: "text-2xl leading-normal font-bold ",
                                        children: "Blackjack"
                                    }), (0, d.jsx)(r, {
                                        account: h,
                                        setAccount: i,
                                        setProvider: l,
                                        provider: k,
                                        setLibrary: c,
                                        library: b
                                    })]
                                })
                            }), (0, d.jsx)("div", {
                                className: "md:mt-20 lg:mt-12",
                                children: (0, d.jsx)(D, {
                                    library: b,
                                    account: h
                                })
                            })]
                        })]
                    })
                },
                F = E
        },
        8677: function() {},
        2808: function() {},
        6601: function() {},
        9214: function() {},
        5568: function() {},
        9386: function() {},
        1616: function() {},
        9120: function() {},
        6586: function() {},
        6567: function() {}
    },
    function(a) {
        a.O(0, [277, 550, 774, 888, 179], function() {
            var b;
            return a(a.s = 8312)
        }), _N_E = a.O()
    }
])