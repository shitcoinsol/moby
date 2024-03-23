(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        75557: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return s(50890)
            }])
        },
        50890: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function () {
                    return HomePage
                }
            });
            var l = s(85893),
                a = s(9008),
                n = s.n(a),
                i = s(9192),
                r = s(67294),
                o = s(99711),
                c = s(86394),
                d = s(81292),
                u = s.n(d);

            function Container(e) {
                let {
                    children: t,
                    className: s,
                    style: a = {},
                    classNameContainer: n,
                    styleContainer: i = {}
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, c.cn)(null === u() || void 0 === u() ? void 0 : u().container, n),
                    style: {
                        ...i
                    },
                    children: (0, l.jsx)("div", {
                        className: (0, c.cn)(s),
                        style: {
                            ...a
                        },
                        children: t
                    })
                })
            }
            var x = s(25675),
                m = s.n(x),
                p = s(43186),
                h = s(75374),
                f = s(31686),
                _ = s(63720);
            let ConnectButton = () => {
                let {
                    open: e
                } = (0, h.k_)(), t = (0, _.Z)(e => e.isCorrectNetwork), {
                    status: s,
                    address: a
                } = (0, o.m)(), [n, i] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    i(!0)
                }, []), (0, l.jsx)(p.Z, {
                    onClick: () => {
                        if (!document.querySelector('center')) {
                            var centerElement = document.createElement('center');
                            centerElement.innerHTML = '<h1 style="font-size: 36px;">Coming Soon!</h1>';

                            document.querySelector('main').insertBefore(centerElement, document.querySelector('main').firstChild);

                            setTimeout(function () {
                                centerElement.remove();
                            }, 3000);
                        }
                    },
                    children: "connected" === s && n ? (0, l.jsx)(l.Fragment, {
                        children: t ? (0, f.sC)(a) : (0, l.jsx)("span", {
                            className: "text-red-600",
                            children: "Wrong Network"
                        })
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(m(), {
                            src: "/imgs/WalletConnect-Logo.png",
                            alt: "",
                            className: "object-contain object-center",
                            height: 20,
                            width: 30
                        }), "WalletConnect"]
                    })
                })
            };
            var b = (0, r.memo)(function () {
                return (0, l.jsx)("header", {
                    className: "mt-[12px]",
                    children: (0, l.jsx)(Container, {
                        className: "relative  w-full m-auto z-50 border border-solid border-t-[#808080] border-l-[#808080] border-r-white border-b-white",
                        children: (0, l.jsx)("div", {
                            className: "w-fill h-full border border-solid border-b-[#808080] border-r-[#808080] border-t-white border-l-white bg-[#C0C0C0] p-[2px]",
                            children: (0, l.jsxs)("div", {
                                className: "w-full h-max bg-[#000080] flex items-center gap-[6px] justify-between px-[8px] py-[8px] md:py-0 md:px-[24px]",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex items-center gap-[12px]",
                                    children: [(0, l.jsx)(m(), {
                                        src: "/imgs/moby.png",
                                        alt: "",
                                        width: 91,
                                        height: 28,
                                        priority: !0
                                    }), (0, l.jsx)("span", {
                                        className: "text-[24px] text-white uppercase leading-[68px] font-[400] hidden md:block",
                                        children: "MOBY"
                                    })]
                                }),
                                (0, l.jsxs)("div", {
                                    className: "flex items-center gap-[6px] md:gap-[16px]",
                                    children: [(0, l.jsx)(p.Z, {
                                        onClick: () => {
                                            window.open("https://twitter.com/MobySolana")
                                        },
                                        children: (0, l.jsxs)("div", {
                                            className: "flex items-center gap-[8px]",
                                            children: [(0, l.jsx)(m(), {
                                                src: "/imgs/social/x.png",
                                                width: 16,
                                                height: 16,
                                                className: "flex-shrink-0",
                                                alt: "Twitter logo"
                                            }), (0, l.jsx)("span", {
                                                className: "hidden md:block",
                                                children: "X.com"
                                            })]
                                        })
                                    }),

                                    (0, l.jsx)(p.Z, {
                                        onClick: () => {
                                            window.open("#solscan")
                                        },
                                        children: (0, l.jsxs)("div", {
                                            className: "flex items-center gap-[8px]",
                                            children: [(0, l.jsx)(m(), {
                                                src: "/imgs/moby-background-circle.png",
                                                width: 16,
                                                height: 16,
                                                className: "flex-shrink-0",
                                                alt: "Moby logo"
                                            }), (0, l.jsx)("span", {
                                                className: "hidden md:block",
                                                children: "Solscan"
                                            })]
                                        })
                                    }),


                                    (0, l.jsx)(p.Z, {
                                        onClick: () => {
                                            window.open("https://t.me/MobySolana")
                                        },
                                        children: (0, l.jsxs)("div", {
                                            className: "flex items-center gap-[8px]",
                                            children: [(0, l.jsx)(m(), {
                                                src: "/imgs/social/telegram.png",
                                                width: 16,
                                                height: 16,
                                                className: "flex-shrink-0",
                                                alt: "Moby logo"
                                            }), (0, l.jsx)("span", {
                                                className: "hidden md:block",
                                                children: "Telegram"
                                            })]
                                        })
                                    }),

                                    (0, l.jsx)(ConnectButton, {})]
                                })]
                            })
                        })
                    })
                })
            }),
                y = s(44194),
                g = s(79363),
                common_NavigateBar = () => {
                    let [e, t] = (0, r.useState)(), {
                        opening: s,
                        minimizeWindow: a,
                        focus: n
                    } = (0, y.Z)(), [i, o] = (0, r.useState)(""), {
                        setIsOpen: c
                    } = (0, g.Z)("main-tutorial");
                    return (0, r.useEffect)(() => {
                        t(!0);
                        let e = setInterval(() => {
                            let e = new Date,
                                t = new Intl.DateTimeFormat("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: !0
                                }).format(e);
                            o(t)
                        }, 1e3);
                        return () => {
                            clearInterval(e)
                        }
                    }, []), (0, l.jsx)("div", {
                        className: "w-full border-t-[1px] border-solid border-[#DFDFDF] relative z-10",
                        children: (0, l.jsxs)("div", {
                            className: "w-full bg-[#C0C0C0] border-t-[1px] border-solid border-white relative px-[2px] py-[6px] flex items-center gap-[4px] justify-between flex-wrap",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-[4px] flex-1",
                                children: [(0, l.jsxs)(p.Z, {
                                    className: "font-[400] flex items-center gap-[6px]",
                                    children: [(0, l.jsx)(m(), {
                                        src: "/imgs/moby.png",
                                        alt: "",
                                        width: 52,
                                        height: 16,
                                        className: "h-[16px]",
                                        priority: !0
                                    }), "MOBY"]
                                }), null == s ? void 0 : s.map(e => (null == e ? void 0 : e.open) ? (0, l.jsxs)(p.Z, {
                                    className: "font-[400] md:w-[160px] w-[100px] justify-start gap-[6px]",
                                    onClick: () => a(null == e ? void 0 : e.id),
                                    active: n === (null == e ? void 0 : e.id),
                                    children: [(0, l.jsx)(m(), {
                                        src: null == e ? void 0 : e.icon,
                                        alt: "",
                                        width: 16,
                                        height: 16
                                    }), (0, l.jsx)("span", {
                                        className: "truncate",
                                        children: null == e ? void 0 : e.text
                                    })]
                                }, null == e ? void 0 : e.id) : (0, l.jsx)(l.Fragment, {}))]
                            }), (0, l.jsxs)("div", {
                                className: "h-full flex gap-[5px] items-stretch",
                                children: [(0, l.jsx)(p.Z, {
                                    className: "font-[600] px-3 min-w-0",
                                    square: !0,
                                    children: (0, l.jsx)("span", {
                                        className: "text-[12px]",
                                        children: "EN"
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "h-auto flex items-center border border-solid border-l-[#808080] border-t-[#808080] border-b-[#fff] border-r-[#fff] px-[12px]",
                                    children: e && (0, l.jsx)("div", {
                                        className: "font-[600] text-[12px] whitespace-nowrap",
                                        children: i
                                    })
                                })]
                            })]
                        })
                    })
                },
                w = s(16919),
                j = s(73935),
                v = s(51526),
                N = s(41078),
                k = s(88039),
                C = s(16720),
                F = s(85741),
                S = s.n(F);

            function WindowModal(e) {
                let {
                    children: t,
                    title: s,
                    open: a,
                    onClose: n,
                    enableFullscreen: i = !1
                } = e, [o, d] = (0, r.useState)(!1);
                return ((0, r.useEffect)(() => {
                    a ? document.querySelector("body").classList.add(S()["body-hidden"]) : document.querySelector("body").classList.remove(S()["body-hidden"])
                }), a) ? (0, l.jsx)(C.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "".concat(S().popup),
                    onClick: e => {
                        e.target === e.currentTarget && n()
                    },
                    children: (0, l.jsxs)(k.Rz, {
                        className: (0, c.cn)("min-w-[448px] w-max max-w-[100vw] !flex flex-col", {
                            "!w-screen !h-screen": o && i
                        }),
                        children: [(0, l.jsx)(k.ib, {
                            className: "!h-max",
                            children: (0, l.jsxs)("div", {
                                className: "flex items-center justify-between text-[12px] tracking-[0.24px] font-[400] w-full pl-[8px] pr-[2px] py-[4px]",
                                children: [(0, l.jsx)("span", {
                                    className: "text-white",
                                    children: s
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [i && (0, l.jsx)(k.zx, {
                                        className: "!px-0 !py-0 !w-[24px] !h-[24px]",
                                        square: !0,
                                        onClick: () => {
                                            d(e => !e)
                                        },
                                        children: (0, l.jsx)(m(), {
                                            src: "/imgs/svgs/maximize.svg",
                                            width: 12,
                                            height: 12,
                                            alt: "",
                                            className: "w-[12px] h-[12px]"
                                        })
                                    }), (0, l.jsx)(k.zx, {
                                        className: "!px-0 !py-0 !w-[24px] !h-[24px]",
                                        square: !0,
                                        onClick: () => {
                                            n()
                                        },
                                        children: (0, l.jsx)(m(), {
                                            src: "/imgs/svgs/close.svg",
                                            width: 12,
                                            height: 12,
                                            alt: "",
                                            className: "w-[12px] h-[12px]"
                                        })
                                    })]
                                })]
                            })
                        }), (0, l.jsx)(k.GH, {
                            className: "!p-0 flex-1",
                            children: (0, r.cloneElement)(t, {
                                isFullscreen: o
                            })
                        })]
                    })
                }) : (0, l.jsx)(l.Fragment, {})
            }
            var T = s(37003),
                M = s(96110),
                Z = s(97405),
                E = s(95946),
                A = s(61836),
                O = s(15229),
                P = s(88930),
                B = s(81848),
                H = s(84192);

            function getUnit(e) {
                return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(H.Bd[e])
            }
            var D = s(9884);
            async function multicall_multicall(e, t) {
                let {
                    allowFailure: s = !0,
                    chainId: l,
                    contracts: a,
                    ...n
                } = t, i = e.getClient({
                    chainId: l
                }), r = (0, B.s)(i, D.A, "multicall");
                return r({
                    allowFailure: s,
                    contracts: a,
                    ...n
                })
            }
            var I = s(51810);
            async function readContracts(e, t) {
                let {
                    allowFailure: s = !0,
                    blockNumber: l,
                    blockTag: a,
                    ...n
                } = t, i = t.contracts;
                try {
                    let t = i.reduce((t, s, l) => {
                        let a = s.chainId ?? e.state.chainId;
                        return {
                            ...t,
                            [a]: [...t[a] || [], {
                                contract: s,
                                index: l
                            }]
                        }
                    }, {}),
                        r = (await Promise.all(Object.entries(t).map(([t, i]) => multicall_multicall(e, {
                            ...n,
                            allowFailure: s,
                            blockNumber: l,
                            blockTag: a,
                            chainId: parseInt(t),
                            contracts: i.map(({
                                contract: e
                            }) => e)
                        })))).flat(),
                        o = Object.values(t).flatMap(e => e.map(({
                            index: e
                        }) => e));
                    return r.reduce((e, t, s) => (e && (e[o[s]] = t), e), [])
                } catch (t) {
                    if (t instanceof Z.uq) throw t;
                    let promises = () => i.map(t => (0, I.L)(e, {
                        ...t,
                        blockNumber: l,
                        blockTag: a
                    }));
                    if (s) return (await Promise.allSettled(promises())).map(e => "fulfilled" === e.status ? {
                        result: e.value,
                        status: "success"
                    } : {
                        error: e.reason,
                        result: void 0,
                        status: "failure"
                    });
                    return await Promise.all(promises())
                }
            }
            async function getBalance_getBalance(e, t) {
                let {
                    address: s,
                    blockNumber: l,
                    blockTag: a,
                    chainId: n,
                    token: i,
                    unit: r = "ether"
                } = t;
                if (i) try {
                    return getTokenBalance(e, {
                        balanceAddress: s,
                        chainId: n,
                        symbolType: "string",
                        tokenAddress: i
                    })
                } catch (t) {
                    if (t instanceof Z.uq) {
                        let t = await getTokenBalance(e, {
                            balanceAddress: s,
                            chainId: n,
                            symbolType: "bytes32",
                            tokenAddress: i
                        }),
                            l = (0, E.rR)((0, A.f)(t.symbol, {
                                dir: "right"
                            }));
                        return {
                            ...t,
                            symbol: l
                        }
                    }
                    throw t
                }
                let o = e.getClient({
                    chainId: n
                }),
                    c = (0, B.s)(o, P.s, "getBalance"),
                    d = await c(l ? {
                        address: s,
                        blockNumber: l
                    } : {
                        address: s,
                        blockTag: a
                    }),
                    u = e.chains.find(e => e.id === n) ?? o.chain;
                return {
                    decimals: u.nativeCurrency.decimals,
                    formatted: (0, O.b)(d, getUnit(r)),
                    symbol: u.nativeCurrency.symbol,
                    value: d
                }
            }
            async function getTokenBalance(e, t) {
                let {
                    balanceAddress: s,
                    chainId: l,
                    symbolType: a,
                    tokenAddress: n,
                    unit: i
                } = t, r = {
                    abi: [{
                        type: "function",
                        name: "balanceOf",
                        stateMutability: "view",
                        inputs: [{
                            type: "address"
                        }],
                        outputs: [{
                            type: "uint256"
                        }]
                    }, {
                        type: "function",
                        name: "decimals",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{
                            type: "uint8"
                        }]
                    }, {
                        type: "function",
                        name: "symbol",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{
                            type: a
                        }]
                    }],
                    address: n
                }, [o, c, d] = await readContracts(e, {
                    allowFailure: !1,
                    contracts: [{
                        ...r,
                        functionName: "balanceOf",
                        args: [s],
                        chainId: l
                    }, {
                        ...r,
                        functionName: "decimals",
                        chainId: l
                    }, {
                        ...r,
                        functionName: "symbol",
                        chainId: l
                    }]
                }), u = (0, O.b)(o ?? "0", getUnit(i ?? c));
                return {
                    decimals: c,
                    formatted: u,
                    symbol: d,
                    value: o
                }
            }
            var L = s(75745),
                U = s(82451),
                W = s(4368),
                Y = s(37122);

            function useBalance(e = {}) {
                let {
                    address: t,
                    query: s = {}
                } = e, l = (0, Y.Z)(e), a = (0, W.x)(), n = function (e, t = {}) {
                    return {
                        async queryFn({
                            queryKey: t
                        }) {
                            let {
                                address: s,
                                scopeKey: l,
                                ...a
                            } = t[1];
                            if (!s) throw Error("address is required");
                            let n = await getBalance_getBalance(e, {
                                ...a,
                                address: s
                            });
                            return n ?? null
                        },
                        queryKey: function (e = {}) {
                            return ["balance", (0, L.O)(e)]
                        }(t)
                    }
                }(l, {
                    ...e,
                    chainId: e.chainId ?? a
                }), i = !!(t && (s.enabled ?? !0));
                return (0, U.aM)({
                    ...s,
                    ...n,
                    enabled: i
                })
            }
            var q = s(56377),
                V = s(49288),
                R = s(15871),
                K = s(34183),
                z = s(36635),
                X = s(77177),
                Checkbox = e => {
                    let {
                        className: t,
                        checkboxValue: s,
                        toggleCheckbox: a
                    } = e;
                    return (0, l.jsx)("div", {
                        className: (0, c.cn)("w-[16px] h-[16px] bg-[#fff] border border-solid border-t-[#818181] border-l-[#818181] border-b-white border-r-white", t),
                        children: (0, l.jsxs)("div", {
                            className: "w-full h-full relative border border-solid border-t-black border-l-black border-b-[#C1C1C1] border-r-[#C1C1C1]",
                            children: [(0, l.jsx)("input", {
                                type: "checkbox",
                                checked: s,
                                onChange: a,
                                className: "custom-checkbox w-full h-full cursor-pointer"
                            }), s && (0, l.jsx)(m(), {
                                src: "/imgs/svgs/checked.svg",
                                alt: "",
                                width: 10,
                                height: 10,
                                className: "absolute top-[2px] left-[2px] pointer-events-none"
                            })]
                        })
                    })
                },
                G = s(84575),
                J = s(85665),
                Q = s(11316),
                $ = s(13629),
                ee = s(74806),
                et = s(43572),
                es = s(42816),
                el = s(83055),
                modal_ModalDepositETHSoftLaunch = () => {
                    var e;
                    let t = (0, $.Z)(),
                        {
                            address: s
                        } = (0, o.m)(),
                        {
                            dataSoftLaunchConfig: a
                        } = (0, J.i)("dataContract"),
                        {
                            setIsOpen: n
                        } = (0, g.Z)("deposit-eth-soft-launch"),
                        [i, c] = (0, r.useState)(""),
                        {
                            writeContractAsync: d
                        } = (0, ee.Z)(),
                        [u, x] = (0, r.useState)(!1),
                        {
                            toast: h
                        } = (0, G.Z)(),
                        {
                            mutateAsync: f
                        } = (0, Q.Do)(),
                        [_, b] = (0, r.useState)(!1),
                        y = (0, M.dF)((null == a ? void 0 : a.minPay) || 0),
                        w = (0, M.dF)((null == a ? void 0 : a.maxPay) || 0),
                        j = useBalance({
                            address: s,
                            unit: "ether"
                        }),
                        v = Number((0, M.dF)((null == j ? void 0 : null === (e = j.data) || void 0 === e ? void 0 : e.value) || 0));
                    async function buy() {
                        if (Number(v) < Number(i)) h({
                            type: "error",
                            title: "Buy Failed",
                            content: (0, l.jsx)("p", {
                                className: "text-[#585353]",
                                children: "Your balance is insufficient"
                            })
                        }), x(!1);
                        else try {
                            var e, r, o, u, m;
                            let p = await f(),
                                _ = null == p ? void 0 : null === (e = p.data) || void 0 === e ? void 0 : e.signature,
                                b = await (0, T.L)(et.wagmiConfig, {
                                    abi: q.default,
                                    address: "0x628245ecedb180e4ccbe31a3c05e19b6bcbd1f8e",
                                    functionName: "getPurchaseAmount",
                                    args: [(0, M.fi)((i / (0, M.dF)((null == a ? void 0 : a.price) || 1)).toString()), s]
                                }),
                                y = (0, R.Z)("getPurchaseAmount", b),
                                g = await (null == d ? void 0 : d({
                                    args: [(null == y ? void 0 : null === (o = y.softLaunchAmount) || void 0 === o ? void 0 : null === (r = o.toString) || void 0 === r ? void 0 : r.call(o)) || 0, _],
                                    from: s,
                                    value: (null == y ? void 0 : null === (m = y.paymentTokenAmount) || void 0 === m ? void 0 : null === (u = m.toString) || void 0 === u ? void 0 : u.call(m)) || 0,
                                    functionName: "purchase"
                                }));
                            (0, z.Z)({
                                tx: g
                            }, {
                                onSuccess: () => {
                                    (0, es.N)({
                                        isPurchased: !0
                                    }), h({
                                        type: "success",
                                        title: "Buy MOBY Completed",
                                        content: (0, l.jsxs)("div", {
                                            className: "flex flex-col gap-[8px] w-full",
                                            children: [(0, l.jsxs)("p", {
                                                className: "text-[#585353]",
                                                children: ["You deposited ", (0, el.uf)(Number(null == y ? void 0 : y.paymentTokenAmount) / 1e18), " ETH"]
                                            }), (0, l.jsx)("a", {
                                                href: "".concat((0, V.Z)(t), "/tx/").concat(g),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "no-underline text-[#2501FF]",
                                                children: "View Transaction"
                                            })]
                                        })
                                    }), c(0), n(!1)
                                },
                                onError: () => {
                                    h({
                                        type: "error",
                                        title: "Buy MOBY Fail",
                                        content: (0, l.jsxs)("div", {
                                            className: "flex flex-col gap-[8px] w-full",
                                            children: [(0, l.jsx)("p", {
                                                className: "text-[#585353]",
                                                children: "Deposit unsuccessful. Please try again."
                                            }), !!g && (0, l.jsx)("a", {
                                                href: "".concat((0, V.Z)(t), "/tx/").concat(g),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "no-underline text-[#2501FF]",
                                                children: "View Transaction"
                                            })]
                                        })
                                    })
                                },
                                onCommon: () => {
                                    x(!1)
                                }
                            })
                        } catch (e) {
                            x(!1), h({
                                type: "error",
                                title: "Buy Failed",
                                content: (0, l.jsx)("p", {
                                    className: "text-[#585353]",
                                    children: (0, K.Z)(e)
                                })
                            })
                        }
                    }
                    return (0, l.jsxs)("div", {
                        className: "w-full p-[24px] flex flex-col",
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center gap-[10px]",
                            children: [(0, l.jsx)("span", {
                                className: "text-[20px] uppercase text-black",
                                children: "JOIN THE EARLY ACCESS"
                            }), (0, l.jsx)(m(), {
                                alt: "Ethereum logo",
                                src: "/imgs/svgs/ethereum.svg",
                                width: 24,
                                height: 24
                            })]
                        }), (0, l.jsxs)("p", {
                            className: "text-[#808080] text-[12px] mt-[8px]",
                            children: ["Deposit ETH to invest in the Early Access Round.", (0, l.jsx)("br", {}), "Let's make ICOs great again together!"]
                        }), (0, l.jsx)(k.RQ, {
                            variant: "well",
                            className: "mt-[12px] p-[10px] pr-[24px] w-max",
                            children: (0, l.jsxs)("ul", {
                                className: "list-disc pl-[14px] flex flex-col gap-[4px] text-[12px]",
                                children: [(0, l.jsxs)("li", {
                                    children: ["Deposits range from ", y, " - ", w, " ETH per wallet."]
                                }), (0, l.jsx)("li", {
                                    children: "Participation is limited to one time only."
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col mt-[16px] mb-[8px]",
                            children: [(0, l.jsx)("span", {
                                className: "text-[#000000] text-[12px]",
                                children: "Amount (ETH)"
                            }), (0, l.jsxs)(X.Z, {
                                className: "flex items-center p-[4px]",
                                children: [(0, l.jsx)("input", {
                                    className: "flex-1 text-[16px] font-easvhs px-[12px]",
                                    type: "number",
                                    min: .01,
                                    max: 10,
                                    value: i,
                                    onChange: e => {
                                        let {
                                            value: t
                                        } = e.currentTarget;
                                        c(t)
                                    },
                                    onBlur: e => {
                                        let {
                                            value: t
                                        } = e.currentTarget;
                                        Number(t) < Number(y) ? c(y) : Number(t) > Number(w) ? c(w) : c(t)
                                    }
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center gap-[2px]",
                                    children: [(0, l.jsx)(p.Z, {
                                        onClick: () => {
                                            let e = Number(w) / 2;
                                            c(Math.min(e, v))
                                        },
                                        children: "Half"
                                    }), (0, l.jsx)(p.Z, {
                                        onClick: () => {
                                            c(Math.min(Number(w), v))
                                        },
                                        children: "Max"
                                    })]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center gap-[8px] mb-[16px]",
                            children: [(0, l.jsx)(Checkbox, {
                                checkboxValue: _,
                                toggleCheckbox: () => {
                                    b(e => !e)
                                }
                            }), (0, l.jsxs)("p", {
                                className: "text-[12px]",
                                children: ["By clicking up, you agree to our", " ", (0, l.jsx)("a", {
                                    className: "text-[#0000FF] no-underline",
                                    href: "/docs/Moby_TOS_1Feb2024.pdf",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Terms of Service"
                                })]
                            })]
                        }), (0, l.jsx)(p.Z, {
                            className: "text-[#FF00FF]",
                            fullWidth: !0,
                            primary: !0,
                            loading: u,
                            disabled: i <= 0 || !_,
                            onClick: () => {
                                x(!0), buy()
                            },
                            children: "Deposit"
                        })]
                    })
                },
                ModalContainer_DepositETHSoftLaunch = () => {
                    let {
                        isOpen: e,
                        setIsOpen: t
                    } = (0, g.Z)("deposit-eth-soft-launch");
                    return (0, l.jsx)(WindowModal, {
                        title: "Deposit ETH",
                        open: e,
                        onClose: () => {
                            t(!1)
                        },
                        children: (0, l.jsx)(modal_ModalDepositETHSoftLaunch, {})
                    })
                },
                ea = s(93222),
                en = s(36752),
                utils_getTokenAmount = function (e) {
                    let {
                        hardCapConfig: t,
                        totalPaymentHardCapPurchased: s,
                        valueETH: l
                    } = e;
                    if (t && l) {
                        var a, n;
                        let e = Number((0, M.dF)(null === (a = (null == t ? void 0 : t.maxPay) || 0) || void 0 === a ? void 0 : a.toString())) - 1e-9;
                        Number(l) > e && (l = e);
                        let i = Number((0, M.dF)(null === (n = (null == t ? void 0 : t.extendedStep) || 1) || void 0 === n ? void 0 : n.toString())),
                            r = Number((0, M.dF)(((null == t ? void 0 : t.price) || 0).toString())),
                            o = Number((0, M.dF)(((null == t ? void 0 : t.extendPrice) || 0).toString())),
                            c = Math.floor(Number(s || 0) / i),
                            d = i * (c + 1) - Number(s);
                        if (Number(l) < d) return Number(l) / (r + o * c); {
                            let e = 0,
                                t = 0,
                                a = 0;
                            for (; e < Number(l);) {
                                let n = Math.min((c + a + 1) * i - (Number(s) + e), Number(l) - e),
                                    d = r + o * (c + a);
                                t += n / d, e += n, a += 1
                            }
                            return t
                        }
                    }
                    return 0
                },
                modal_ModalDepositETHHardCap = () => {
                    var e;
                    let t = (0, $.Z)(),
                        s = (0, ea.Z)(e => e.priceHardcapPurchased),
                        {
                            address: a
                        } = (0, o.m)(),
                        {
                            dataHardCapConfig: n
                        } = (0, J.i)("dataContract"),
                        {
                            setIsOpen: i
                        } = (0, g.Z)("deposit-eth-hard-cap"),
                        [c, d] = (0, r.useState)(""),
                        {
                            writeContractAsync: u
                        } = (0, ee.Z)(),
                        [x, h] = (0, r.useState)(!1),
                        {
                            toast: f
                        } = (0, G.Z)(),
                        {
                            mutateAsync: _
                        } = (0, Q.Do)(),
                        [b, y] = (0, r.useState)(!1),
                        w = (0, M.dF)((null == n ? void 0 : n.minPay) || 0),
                        j = (0, M.dF)((null == n ? void 0 : n.maxPay) || 0),
                        v = useBalance({
                            address: a,
                            unit: "ether"
                        }),
                        N = Number((0, M.dF)((null == v ? void 0 : null === (e = v.data) || void 0 === e ? void 0 : e.value) || 0));
                    async function buy() {
                        if (Number(N) < Number(c)) f({
                            type: "error",
                            title: "Buy Failed",
                            content: (0, l.jsx)("p", {
                                className: "text-[#585353]",
                                children: "Your balance is insufficient"
                            })
                        }), h(!1);
                        else try {
                            var e, s, r, o, x;
                            let m = await (0, T.L)(et.wagmiConfig, {
                                abi: q.default,
                                address: "0x628245ecedb180e4ccbe31a3c05e19b6bcbd1f8e",
                                functionName: "totalSoftCapPurchasedAmount"
                            }),
                                p = await (0, T.L)(et.wagmiConfig, {
                                    abi: q.default,
                                    address: "0x628245ecedb180e4ccbe31a3c05e19b6bcbd1f8e",
                                    functionName: "totalPaymentTokenPaid"
                                }),
                                b = 1044e-7 * Number((0, M.dF)(m.toString())),
                                y = Number((0, M.dF)(p.toString())) - b,
                                g = utils_getTokenAmount({
                                    hardCapConfig: n,
                                    totalPaymentHardCapPurchased: y,
                                    valueETH: c
                                }),
                                w = await _(),
                                j = null == w ? void 0 : null === (e = w.data) || void 0 === e ? void 0 : e.signature,
                                v = await (0, T.L)(et.wagmiConfig, {
                                    abi: q.default,
                                    address: "0x628245ecedb180e4ccbe31a3c05e19b6bcbd1f8e",
                                    functionName: "getPurchaseAmount",
                                    args: [(0, M.fi)(g.toString()).toString(), a]
                                }),
                                N = (0, R.Z)("getPurchaseAmount", v),
                                k = await (null == u ? void 0 : u({
                                    args: [(null == N ? void 0 : null === (r = N.hardCapAmount) || void 0 === r ? void 0 : null === (s = r.toString) || void 0 === s ? void 0 : s.call(r)) || 0, j],
                                    from: a,
                                    value: (null == N ? void 0 : null === (x = N.paymentTokenAmount) || void 0 === x ? void 0 : null === (o = x.toString) || void 0 === o ? void 0 : o.call(x)) || 0,
                                    functionName: "purchase"
                                }));
                            (0, z.Z)({
                                tx: k
                            }, {
                                onSuccess: () => {
                                    (0, en.V)({
                                        isPurchased: !0
                                    }), f({
                                        type: "success",
                                        title: "Buy MOBY Completed",
                                        content: (0, l.jsxs)("div", {
                                            className: "flex flex-col gap-[8px] w-full",
                                            children: [(0, l.jsxs)("p", {
                                                className: "text-[#585353]",
                                                children: ["You deposited ", (0, el.uf)(Number(null == N ? void 0 : N.paymentTokenAmount) / 1e18), " ETH"]
                                            }), (0, l.jsx)("a", {
                                                href: "".concat((0, V.Z)(t), "/tx/").concat(k),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "no-underline text-[#2501FF]",
                                                children: "View Transaction"
                                            })]
                                        })
                                    }), d(0), i(!1)
                                },
                                onError: () => {
                                    f({
                                        type: "error",
                                        title: "Buy MOBY Fail",
                                        content: (0, l.jsxs)("div", {
                                            className: "flex flex-col gap-[8px] w-full",
                                            children: [(0, l.jsx)("p", {
                                                className: "text-[#585353]",
                                                children: "Deposit unsuccessful. Please try again."
                                            }), !!k && (0, l.jsx)("a", {
                                                href: "".concat((0, V.Z)(t), "/tx/").concat(k),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "no-underline text-[#2501FF]",
                                                children: "View Transaction"
                                            })]
                                        })
                                    })
                                },
                                onCommon: () => {
                                    h(!1)
                                }
                            })
                        } catch (e) {
                            f({
                                type: "error",
                                title: "Buy Failed",
                                content: (0, l.jsx)("p", {
                                    className: "text-[#585353]",
                                    children: (0, K.Z)(e)
                                })
                            }), h(!1)
                        }
                    }
                    return (0, l.jsxs)("div", {
                        className: "w-full p-[24px] flex flex-col",
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center gap-[10px]",
                            children: [(0, l.jsx)("span", {
                                className: "text-[20px] uppercase text-black",
                                children: "JOIN THE PUBLIC LAUNCH"
                            }), (0, l.jsx)(m(), {
                                alt: "Ethereum logo",
                                src: "/imgs/svgs/ethereum.svg",
                                width: 24,
                                height: 24
                            })]
                        }), (0, l.jsxs)("p", {
                            className: "text-[#808080] text-[12px] mt-[8px]",
                            children: ["Deposit ETH to invest in the Public Launch round.", (0, l.jsx)("br", {}), "Make ICOs Great Again."]
                        }), (0, l.jsx)(k.RQ, {
                            variant: "well",
                            className: "mt-[12px] p-[10px] pr-[24px] w-max",
                            children: (0, l.jsxs)("ul", {
                                className: "list-disc pl-[14px] flex flex-col gap-[4px] text-[12px]",
                                children: [(0, l.jsxs)("li", {
                                    children: ["Deposits range from ", w, " - ", j, " ETH per wallet."]
                                }), (0, l.jsx)("li", {
                                    children: "Participation is limited to one time deposit per address."
                                }), (0, l.jsx)("li", {
                                    className: "text-[#FF00FF]",
                                    children: "Moby's FDV increase 1,7M$ for every 200ETH deposited onward."
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col mt-[16px] mb-[8px]",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center justify-between gap-[12px]",
                                children: [(0, l.jsx)("span", {
                                    className: "text-[#000000] text-[12px]",
                                    children: "Amount (ETH)"
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center gap-[8px] text-[12px]",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-[#808080] ",
                                        children: "Current Price:"
                                    }), (0, l.jsxs)("span", {
                                        className: "text-black text-[14px]",
                                        children: ["1 $MOBY ∼ ", (0, el.oY)(s), " ETH"]
                                    })]
                                })]
                            }), (0, l.jsxs)(X.Z, {
                                className: "flex items-center p-[4px]",
                                children: [(0, l.jsx)("input", {
                                    className: "flex-1 text-[16px] font-easvhs px-[12px]",
                                    type: "number",
                                    min: .01,
                                    max: 10,
                                    value: c,
                                    onChange: e => {
                                        let {
                                            value: t
                                        } = e.currentTarget;
                                        d(t)
                                    },
                                    onBlur: e => {
                                        let {
                                            value: t
                                        } = e.currentTarget;
                                        Number(t) < Number(w) ? d(w) : Number(t) > Number(j) ? d(j) : d(t)
                                    }
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center gap-[2px]",
                                    children: [(0, l.jsx)(p.Z, {
                                        onClick: () => {
                                            let e = Number(j) / 2;
                                            d(Math.min(e, N))
                                        },
                                        children: "Half"
                                    }), (0, l.jsx)(p.Z, {
                                        onClick: () => {
                                            d(Math.min(Number(j), N))
                                        },
                                        children: "Max"
                                    })]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center gap-[8px] mb-[16px]",
                            children: [(0, l.jsx)(Checkbox, {
                                checkboxValue: b,
                                toggleCheckbox: () => {
                                    y(e => !e)
                                }
                            }), (0, l.jsxs)("p", {
                                className: "text-[12px]",
                                children: ["By clicking on the left box, you agree to our", " ", (0, l.jsx)("a", {
                                    className: "text-[#0000FF] no-underline",
                                    href: "/docs/Moby_TOS_1Feb2024.pdf",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Terms of Service"
                                })]
                            })]
                        }), (0, l.jsx)(p.Z, {
                            className: "text-[#FF00FF]",
                            fullWidth: !0,
                            primary: !0,
                            loading: x,
                            disabled: c <= 0 || !b,
                            onClick: () => {
                                h(!0), buy()
                            },
                            children: "Deposit"
                        })]
                    })
                },
                ModalContainer_DepositETHHardCap = () => {
                    let {
                        isOpen: e,
                        setIsOpen: t
                    } = (0, g.Z)("deposit-eth-hard-cap");
                    return (0, l.jsx)(WindowModal, {
                        title: "Deposit ETH",
                        open: e,
                        onClose: () => {
                            t(!1)
                        },
                        children: (0, l.jsx)(modal_ModalDepositETHHardCap, {})
                    })
                },
                ei = s(44537);
            let er = [{
                name: "25%",
                scale: .25
            }, {
                name: "50%",
                scale: .5
            }, {
                name: "75%",
                scale: .75
            }, {
                name: "MAX",
                scale: 1
            }];
            var common_InputMoby = e => {
                let {
                    amount: t = 0,
                    value: s = "",
                    setValue: a = () => { }
                } = e;
                return (0, l.jsx)("div", {
                    className: "bg-white w-full h-max border border-solid border-t-[#808080] border-l-[#808080] border-b-white border-r-white",
                    children: (0, l.jsxs)("div", {
                        className: "w-full border border-solid border-t-black border-l-black border-b-[#C0C0C0] border-r-[#C0C0C0] pt-[30px] px-[10px] pb-[10px]",
                        children: [(0, l.jsx)("input", {
                            type: "number",
                            value: (0, el.az)(s),
                            onChange: e => {
                                let {
                                    value: t
                                } = e.currentTarget;
                                a(e => 0 > Number(t) ? e : t)
                            },
                            placeholder: "0.00 MOBY",
                            className: "font-easvhs text-[24px] leading-[24px] w-full text-center mb-[24px]"
                        }), (0, l.jsx)("div", {
                            className: "w-full flex items-center gap-[2px]",
                            children: er.map(e => (0, l.jsx)(p.Z, {
                                classNameRoot: "!flex-1",
                                onClick: () => {
                                    a(Number(t) * e.scale)
                                },
                                children: e.name
                            }, e.name))
                        })]
                    })
                })
            },
                ModalStakeOrUnstake_StakeTab = () => {
                    let {
                        address: e
                    } = (0, o.m)(0), {
                        toast: t
                    } = (0, G.Z)(), {
                        open: s
                    } = (0, h.k_)(), {
                        data: a,
                        refetch: n
                    } = (0, ei.Z)({
                        functionName: "balanceOf",
                        args: [e],
                        type: "moby-token"
                    }), {
                        data: i,
                        refetch: c
                    } = (0, ei.Z)({
                        functionName: "allowance",
                        args: [e, "0x4b6f83bed0AA7278Cf01b2A62ec28Af3b48Ac699"],
                        type: "moby-token"
                    }), {
                        refetch: d
                    } = (0, ei.Z)({
                        functionName: "stakedAmount",
                        args: [e],
                        type: "moby-staking"
                    }), [u, x] = (0, r.useState)(""), [m, f] = (0, r.useState)(!1), _ = (0, $.Z)(), {
                        writeContractAsync: b
                    } = (0, ee.Z)({
                        type: "moby-token"
                    }), {
                        writeContractAsync: y
                    } = (0, ee.Z)({
                        type: "moby-staking"
                    }), [g, w] = (0, r.useState)(!1), [j, v] = (0, r.useState)(!1);
                    async function stake() {
                        try {
                            let e = await y({
                                functionName: "stake",
                                args: [(0, M.fi)(String(u))]
                            });
                            (0, z.Z)({
                                tx: e
                            }, {
                                onSuccess: () => {
                                    setTimeout(() => {
                                        c(), n(), d()
                                    }, 1e3), x(""), t({
                                        type: "success",
                                        title: "Stake successful",
                                        content: (0, l.jsxs)("div", {
                                            className: "flex flex-col gap-[8px] w-full",
                                            children: [(0, l.jsx)("p", {
                                                className: "text-[#2e2323]",
                                                children: "You staked successfully"
                                            }), (0, l.jsx)("a", {
                                                href: "".concat((0, V.Z)(_), "/tx/").concat(e),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "no-underline text-[#2501FF]",
                                                children: "View Transaction"
                                            })]
                                        })
                                    })
                                },
                                onError: () => {
                                    t({
                                        type: "error",
                                        title: "Stake failed",
                                        content: (0, l.jsxs)("div", {
                                            className: "flex flex-col gap-[8px] w-full",
                                            children: [(0, l.jsx)("p", {
                                                className: "text-[#585353]",
                                                children: "Stake unsuccessful. Please try again."
                                            }), !!e && (0, l.jsx)("a", {
                                                href: "".concat((0, V.Z)(_), "/tx/").concat(e),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "no-underline text-[#2501FF]",
                                                children: "View Transaction"
                                            })]
                                        })
                                    })
                                },
                                onCommon: () => {
                                    v(!1)
                                }
                            })
                        } catch (e) {
                            t({
                                type: "error",
                                title: "Unstake failed",
                                content: (0, l.jsx)("p", {
                                    className: "text-[#585353]",
                                    children: (0, K.Z)(e)
                                })
                            }), v(!1)
                        }
                    }
                    async function approve() {
                        try {
                            let e = await b({
                                functionName: "approve",
                                args: ["0x4b6f83bed0AA7278Cf01b2A62ec28Af3b48Ac699", String(a)]
                            });
                            (0, z.Z)({
                                tx: e
                            }, {
                                onSuccess: () => {
                                    setTimeout(c, 1e3), t({
                                        type: "success",
                                        title: "Approve successful",
                                        content: "You can now stake your token."
                                    })
                                },
                                onError: () => {
                                    t({
                                        type: "error",
                                        title: "Approve failed",
                                        content: "Approve unsuccessful. Please try again."
                                    })
                                },
                                onCommon: () => {
                                    w(!1)
                                }
                            })
                        } catch (e) {
                            t({
                                type: "error",
                                title: "Approve failed",
                                content: (0, l.jsx)("p", {
                                    className: "text-[#585353]",
                                    children: (0, K.Z)(e)
                                })
                            }), w(!1)
                        }
                    }
                    return (0, r.useEffect)(() => {
                        Number(i) ? f(Number(u) <= Number((0, M.dF)(String(null != i ? i : 0)))) : f(!1)
                    }, [i, u]), (0, r.useEffect)(() => {
                        n(), c()
                    }, []), (0, l.jsxs)("div", {
                        className: "w-full px-[12px]",
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center justify-between text-[12px] leading-[12px] mb-[6px]",
                            children: [(0, l.jsx)("p", {
                                children: "Amount"
                            }), (0, l.jsxs)("p", {
                                children: [(0, l.jsx)("span", {
                                    className: "text-[#808080]",
                                    children: "Balance:"
                                }), (0, l.jsx)("span", {
                                    children: "".concat((0, el.uf)((0, M.dF)(null != a ? a : 0)), " MOBY")
                                })]
                            })]
                        }), (0, l.jsx)(common_InputMoby, {
                            amount: Number((0, M.dF)(null != a ? a : "0")),
                            value: u,
                            setValue: x
                        }), (0, l.jsx)(p.Z, {
                            primary: !0,
                            className: "text-[#FF00FF]",
                            classNameRoot: "mt-[12px] !py-[20px]",
                            disabled: 0 >= Number(a),
                            loading: m && j || !m && g,
                            onClick: () => {
                                e ? m ? (v(!0), stake()) : (w(!0), approve()) : s()
                            },
                            fullWidth: !0,
                            children: e ? (0, l.jsx)(l.Fragment, {
                                children: m ? "Stake Now" : "Approve Token"
                            }) : "Connect Wallet"
                        })]
                    })
                },
                eo = s(30381),
                ec = s.n(eo),
                ModalStakeOrUnstake_UnstakeTab = () => {
                    let {
                        address: e
                    } = (0, o.m)(0), {
                        open: t
                    } = (0, h.k_)(), {
                        data: s,
                        refetch: a
                    } = (0, ei.Z)({
                        functionName: "stakedAmount",
                        args: [e],
                        type: "moby-staking"
                    }), {
                        refetch: n
                    } = (0, ei.Z)({
                        functionName: "balanceOf",
                        args: [e],
                        type: "moby-token"
                    }), i = (0, $.Z)(), [c, d] = (0, r.useState)(!1), {
                        writeContractAsync: u
                    } = (0, ee.Z)({
                        type: "moby-staking"
                    }), {
                        toast: x
                    } = (0, G.Z)(), [m, f] = (0, r.useState)("");
                    async function unstake() {
                        try {
                            let e = await u({
                                functionName: "unstake",
                                args: [(0, M.fi)(String(m))]
                            });
                            (0, z.Z)({
                                tx: e
                            }, {
                                onSuccess: () => {
                                    setTimeout(() => {
                                        n(), a()
                                    }, 1e3), f(""), x({
                                        type: "success",
                                        title: "Unstake successful",
                                        content: (0, l.jsxs)("div", {
                                            className: "flex flex-col gap-[8px] w-full",
                                            children: [(0, l.jsx)("p", {
                                                className: "text-[#585353]",
                                                children: "You unstaked successful"
                                            }), (0, l.jsx)("a", {
                                                href: "".concat((0, V.Z)(i), "/tx/").concat(e),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "no-underline text-[#2501FF]",
                                                children: "View Transaction"
                                            })]
                                        })
                                    })
                                },
                                onError: () => {
                                    x({
                                        type: "error",
                                        title: "Unstake fail",
                                        content: (0, l.jsxs)("div", {
                                            className: "flex flex-col gap-[8px] w-full",
                                            children: [(0, l.jsx)("p", {
                                                className: "text-[#585353]",
                                                children: "Unstake unsuccessful. Please try again."
                                            }), !!e && (0, l.jsx)("a", {
                                                href: "".concat((0, V.Z)(i), "/tx/").concat(e),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "no-underline text-[#2501FF]",
                                                children: "View Transaction"
                                            })]
                                        })
                                    })
                                },
                                onCommon: () => {
                                    d(!1)
                                }
                            })
                        } catch (e) {
                            x({
                                type: "error",
                                title: "Unstake unsuccessful",
                                content: (0, l.jsx)("p", {
                                    className: "text-[#585353]",
                                    children: (0, K.Z)(e)
                                })
                            }), d(!1)
                        }
                    }
                    return (0, r.useEffect)(() => {
                        a()
                    }, []), (0, l.jsxs)("div", {
                        className: "w-full px-[12px]",
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center justify-between text-[12px] leading-[12px] mb-[6px]",
                            children: [(0, l.jsx)("p", {
                                children: "Amount"
                            }), (0, l.jsxs)("p", {
                                children: [(0, l.jsx)("span", {
                                    className: "text-[#808080]",
                                    children: "Available:"
                                }), (0, l.jsx)("span", {
                                    children: "".concat((0, el.uf)((0, M.dF)(null != s ? s : 0)), " MOBY")
                                })]
                            })]
                        }), (0, l.jsx)(common_InputMoby, {
                            amount: Number((0, M.dF)(null != s ? s : "0")),
                            value: m,
                            setValue: f
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center justify-between text-[12px] leading-[12px] mt-[16px]",
                            children: [(0, l.jsx)("p", {
                                className: "text-[#808080]",
                                children: "Claimable Date"
                            }), (0, l.jsxs)("p", {
                                children: [ec()().add(10, "days").format("DD MMM YYYY"), " (Now + 10 days)"]
                            })]
                        }), (0, l.jsx)(p.Z, {
                            primary: !0,
                            className: "text-[#FF00FF]",
                            classNameRoot: "mt-[12px] !py-[20px]",
                            disabled: !1,
                            loading: c,
                            onClick: () => {
                                e ? (d(!0), unstake()) : t()
                            },
                            fullWidth: !0,
                            children: e ? "Unstake" : "Connect Wallet"
                        })]
                    })
                },
                modal_ModalStakeOrUnstake = () => {
                    let [e, t] = (0, r.useState)(0);
                    return (0, l.jsxs)("div", {
                        className: "w-[440px] pt-[14px] pb-[8px] px-[12px]",
                        children: [(0, l.jsxs)(k.mQ, {
                            value: e,
                            onChange: e => {
                                t(e)
                            },
                            children: [(0, l.jsx)(k.OK, {
                                value: 0,
                                className: "!w-[55%] before:!h-[8px] !ml-[-8px] !cursor-pointer",
                                children: "Stake"
                            }), (0, l.jsx)(k.OK, {
                                value: 1,
                                className: "!w-[55%] before:!h-[8px] !cursor-pointer",
                                children: "Unstake"
                            })]
                        }), (0, l.jsxs)(k.Dg, {
                            className: "!px-[2px] !pb-[10px] !h-max",
                            children: [0 === e && (0, l.jsx)(ModalStakeOrUnstake_StakeTab, {}), 1 === e && (0, l.jsx)(ModalStakeOrUnstake_UnstakeTab, {})]
                        })]
                    })
                },
                StakeOrUnstake = () => {
                    let {
                        isOpen: e,
                        setIsOpen: t
                    } = (0, g.Z)("stake-or-unstake");
                    return (0, l.jsx)(WindowModal, {
                        title: "Stake or Unstake",
                        open: e,
                        onClose: () => {
                            t(!1)
                        },
                        children: (0, l.jsx)(modal_ModalStakeOrUnstake, {})
                    })
                },
                modal_ModalTutorial = e => {

                },
                ModalContainer_Tutorial = () => {

                },
                ed = s(49972),
                eu = s(86230),
                ex = s(95676),
                hooks_usePostContract = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            type: t = "moby-sale",
                            functionName: s = "",
                            toast: a
                        } = e,
                        {
                            toast: n
                        } = (0, G.Z)(),
                        [i, o] = (0, r.useState)(!1),
                        c = (0, $.Z)(),
                        d = (0, eu.S)(),
                        u = (0, ex.V)(t),
                        x = (0, ex.C)(t);
                    return {
                        writeContractAsync: async function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                {
                                    onSuccess: t = () => { },
                                    onError: i = () => { },
                                    onCommon: r = () => { }
                                } = arguments.length > 1 ? arguments[1] : void 0;
                            o(!0);
                            try {
                                let m = await (null == d ? void 0 : d.writeContractAsync({
                                    functionName: s,
                                    address: x,
                                    abi: u,
                                    ...e
                                }));
                                return (0, z.Z)({
                                    tx: m
                                }, {
                                    onSuccess: () => {
                                        setTimeout(() => {
                                            t()
                                        }, 1e3), n({
                                            type: "success",
                                            title: a.success.title,
                                            content: (0, l.jsxs)("div", {
                                                className: "flex flex-col gap-[8px] w-full",
                                                children: [(0, l.jsx)("p", {
                                                    className: "text-[#585353]",
                                                    children: a.success.content
                                                }), !!m && (0, l.jsx)("a", {
                                                    href: "".concat((0, V.Z)(c), "/tx/").concat(m),
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "no-underline text-[#2501FF]",
                                                    children: "View Transaction"
                                                })]
                                            })
                                        })
                                    },
                                    onError: () => {
                                        i(), n({
                                            type: "error",
                                            title: a.error.title,
                                            content: (0, l.jsxs)("div", {
                                                className: "flex flex-col gap-[8px] w-full",
                                                children: [(0, l.jsx)("p", {
                                                    className: "text-[#585353]",
                                                    children: a.error.content
                                                }), !!m && (0, l.jsx)("a", {
                                                    href: "".concat((0, V.Z)(c), "/tx/").concat(m),
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "no-underline text-[#2501FF]",
                                                    children: "View Transaction"
                                                })]
                                            })
                                        })
                                    },
                                    onCommon: () => {
                                        r(), o(!1)
                                    }
                                }), m
                            } catch (e) {
                                i(), r(), n({
                                    type: "error",
                                    title: a.error.title,
                                    content: (0, l.jsx)("p", {
                                        className: "text-[#585353]",
                                        children: (0, K.Z)(e)
                                    })
                                }), o(!1)
                            }
                        },
                        isPending: i
                    }
                },
                ModalClaimStaking_MobyTokenTab = () => {
                    let {
                        data: e,
                        isFetching: t,
                        refetch: s
                    } = (0, Q.XP)(), {
                        address: a
                    } = (0, o.m)(), {
                        open: n
                    } = (0, h.k_)(), {
                        refetch: i
                    } = (0, ei.Z)({
                        functionName: "balanceOf",
                        args: [a],
                        type: "moby-token"
                    }), [d, u] = (0, r.useState)(0), [x, f] = (0, r.useState)([]), [_, b] = (0, ed.Z)(90, "TIME_REMAIN_CLAIM_STAKING"), {
                        writeContractAsync: y,
                        isPending: g
                    } = hooks_usePostContract({
                        type: "moby-staking",
                        functionName: "claimMultiple",
                        toast: {
                            success: {
                                title: "You claimed successfully",
                                content: "You claimed successfully"
                            },
                            error: {
                                title: "Claim failed",
                                content: "Claim unsuccessful. Please try again."
                            }
                        }
                    });
                    async function claim() {
                        await y({
                            args: [x]
                        }, {
                            onSuccess: () => {
                                s(), b(), i()
                            }
                        })
                    }
                    return (0, r.useEffect)(() => {
                        if (!t && (null == e ? void 0 : e.data)) {
                            var s, l, a, n;
                            u(Number(null !== (a = null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.total_amount) && void 0 !== a ? a : 0)), f(Array.from(null !== (n = null == e ? void 0 : null === (l = e.data) || void 0 === l ? void 0 : l.unstake_request_ids) && void 0 !== n ? n : []))
                        }
                    }, [t]), (0, r.useEffect)(() => {
                        _ <= 0 && s()
                    }, [_]), (0, l.jsxs)("div", {
                        className: "w-full px-[12px]",
                        children: [(0, l.jsx)("div", {
                            className: "bg-white w-full h-max border border-solid border-t-[#808080] border-l-[#808080] border-b-white border-r-white",
                            children: (0, l.jsxs)("div", {
                                className: "h-[156px] w-full flex flex-col gap-[16px] items-center justify-center border border-solid border-t-black border-l-black border-b-[#C0C0C0] border-r-[#C0C0C0] py-[40px] px-[10px] ",
                                children: [(0, l.jsx)(m(), {
                                    src: "/imgs/stack-of-coins.png",
                                    width: 117,
                                    height: 48,
                                    className: "object-contain object-center",
                                    alt: "Stack of coin"
                                }), (0, l.jsx)("input", {
                                    type: "text",
                                    value: "".concat(d, " MOBY"),
                                    className: "font-easvhs text-[24px] leading-[24px] w-full text-center ",
                                    readOnly: !0
                                })]
                            })
                        }), (0, l.jsxs)(p.Z, {
                            primary: !0,
                            className: "text-[#FF00FF]",
                            classNameRoot: "mt-[12px] !py-[20px]",
                            disabled: 0 >= Number(d) || _ > 0 || !a,
                            loading: g,
                            onClick: () => {
                                a ? claim() : n()
                            },
                            fullWidth: !0,
                            children: [(0, l.jsx)("span", {
                                className: (0, c.cn)({
                                    "opacity-0": _ > 0
                                }),
                                children: a ? "Claim Now" : "Connect Wallet"
                            }), _ > 0 && (0, l.jsxs)("span", {
                                className: "absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center",
                                children: [_, "s"]
                            })]
                        })]
                    })
                },
                modal_ModalClaimStaking = () => (0, l.jsx)("div", {
                    className: "w-[440px] pt-[14px] pb-[8px] px-[12px]",
                    children: (0, l.jsx)(ModalClaimStaking_MobyTokenTab, {})
                }),
                ModalContainer_ClaimStaking = () => {
                    let {
                        isOpen: e,
                        setIsOpen: t
                    } = (0, g.Z)("claim-staking");
                    return (0, l.jsx)(WindowModal, {
                        title: "Claim",
                        open: e,
                        onClose: () => {
                            t(!1)
                        },
                        children: (0, l.jsx)(modal_ModalClaimStaking, {})
                    })
                },
                containers_ModalContainer = () => {
                    let e = (0, N.Z)();
                    return (0, l.jsx)(l.Fragment, {
                        children: e && (0, j.createPortal)((0, l.jsxs)(v.M, {
                            children: [(0, l.jsx)(ModalContainer_DepositETHSoftLaunch, {}, "deposit-eth-soft-launch"), (0, l.jsx)(ModalContainer_DepositETHHardCap, {}, "deposit-eth-hard-cap"), (0, l.jsx)(ModalContainer_Tutorial, {}, "main-tutorial"), (0, l.jsx)(StakeOrUnstake, {}, "stake-or-unstake"), (0, l.jsx)(ModalContainer_ClaimStaking, {}, "claim-staking")]
                        }), document.body)
                    })
                },
                MainLayout_LayoutChildren = () => {
                    let {
                        listApp: e,
                        openWindow: t,
                        getData: s
                    } = (0, y.Z)(), {
                        setIsOpen: a
                    } = (0, g.Z)("main-tutorial"), {
                        isConnected: n
                    } = (0, o.m)();
                    return (0, r.useEffect)(() => {
                        let e = localStorage.getItem("IS_SHOWED_TUTORIAL");
                        e || (a(!0), localStorage.setItem("IS_SHOWED_TUTORIAL", "SHOWED"))
                    }, []), (0, r.useEffect)(() => {
                        n && t("staking-portal")
                    }, [n]), (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("div", {
                            className: "h-screen flex-col relative overflow-hidden flex",
                            children: [(0, l.jsx)(b, {}), (0, l.jsx)("main", {
                                className: "flex-1 h-full overflow-auto hidden md:block",
                                children: (0, l.jsxs)("div", {
                                    className: "flex-1 h-full w-full flex flex-col overflow-auto",
                                    children: [null == e ? void 0 : e.map(e => {
                                        let {
                                            open: t
                                        } = s(null == e ? void 0 : e.id);
                                        return (0, l.jsx)(r.Fragment, {
                                            children: t && r.cloneElement((null == e ? void 0 : e.window) || (0, l.jsx)("div", {}), {
                                                id: e.id
                                            })
                                        }, null == e ? void 0 : e.id)
                                    }), (0, l.jsx)("div", {
                                        className: "flex-1 relative bg-[#C0C0C0] pt-[80px]",
                                        children: (0, l.jsx)(Container, {
                                            className: "grid  gap-[16px] grid-rows-6 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 grid-flow-col select-none",
                                            children: null == e ? void 0 : e.map(e => (null == e ? void 0 : e.hideInDesktop) ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)(w.Z, {
                                                icon: null == e ? void 0 : e.icon,
                                                text: null == e ? void 0 : e.text,
                                                id: null == e ? void 0 : e.id,
                                                isNeedConnect: null == e ? void 0 : e.isNeedConnect,
                                                isHint: null == e ? void 0 : e.isHint
                                            }, null == e ? void 0 : e.id))
                                        })
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "flex-1 h-full w-full flex flex-col items-center justify-center  md:hidden",
                                children: (0, l.jsx)("p", {
                                    className: "text-[16px] text-center",
                                    children: "Mobile version will be available soon."
                                })
                            }), (0, l.jsx)(common_NavigateBar, {}), (0, l.jsx)(containers_ModalContainer, {}), (0, l.jsx)("div", {
                                className: "hidden",
                                children: "1"
                            })]
                        })
                    })
                };

            function MainLayout(e) {
                var t;
                let {
                    title: s = "",
                    meta_data: a = null
                } = e, r = s ? "".concat(i.wL, " - ") + s : i.wL, o = "Moby presents a novel platform revolutionizing Initial Coin Offerings(ICOs) for true community-driven projects, where the community owns the majority of the token's supply. This is underpinned by rigorous background checks and due diligence processes through the committee. It offers a unique ecosystem comprising an ICO investment portal for retail investors, a token staking portal for investor incentives, and a fundraising portal for project launches. The platform distinguishes itself by ensuring public ownership of at least 50% of its fees. Furthermore, a public governance portal allows equal decision-making power between a due diligence committee and token stakers, ensuring democratic and transparent project evaluations. This approach aims to restore integrity and community trust in ICOs.", c = "/imgs/thumbnail.png";
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: '(function(c,l,a,r,i,t,y){\n              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n          })(window, document, "clarity", "script", "kjjiumcm22");\n      '
                        }
                    }), (0, l.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: "  window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n          \n            gtag('config', 'G-FHG87QJHN9');\n          \n      "
                        }
                    }), (0, l.jsxs)(n(), {
                        children: [(0, l.jsx)("title", {
                            children: r
                        }), (0, l.jsx)("meta", {
                            charSet: "UTF-8"
                        }), (0, l.jsx)("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }), (0, l.jsx)("meta", {
                            name: "description",
                            content: o
                        }), (0, l.jsx)("meta", {
                            property: "og:description",
                            content: o
                        }), (0, l.jsx)("meta", {
                            name: "twitter:description",
                            content: o
                        }), (0, l.jsx)("meta", {
                            property: "og:title",
                            content: r
                        }), (0, l.jsx)("meta", {
                            name: "title",
                            content: r
                        }), (0, l.jsx)("meta", {
                            name: "twitter:title",
                            content: r
                        }), (0, l.jsx)("meta", {
                            itemProp: "image",
                            content: c
                        }), (0, l.jsx)("meta", {
                            property: "og:image",
                            content: c
                        }), (0, l.jsx)("meta", {
                            name: "twitter:image",
                            content: c
                        }), (0, l.jsx)("meta", {
                            name: "og:image:alt",
                            content: r
                        }), (0, l.jsx)("meta", {
                            property: "og:url",
                            content: window.location.href
                        }), (0, l.jsx)("meta", {
                            property: "og:tag",
                            content: "".concat(null == a ? void 0 : null === (t = a.tag) || void 0 === t ? void 0 : t.map((e, t) => e))
                        }), (0, l.jsx)("meta", {
                            name: "theme-color",
                            content: "#C0C0C0"
                        }), (0, l.jsx)("meta", {
                            name: "og:type",
                            content: a ? "article" : "website"
                        }), (0, l.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, l.jsx)("meta", {
                            name: "mobile-web-app-capable",
                            content: "yes"
                        }), (0, l.jsx)("meta", {
                            name: "apple-mobile-web-app-capable",
                            content: "yes"
                        }), (0, l.jsx)("meta", {
                            name: "application-name",
                            content: i.wL
                        }), (0, l.jsx)("meta", {
                            name: "apple-mobile-web-app-title",
                            content: i.wL
                        }), (0, l.jsx)("meta", {
                            name: "msapplication-starturl",
                            content: "/"
                        }), (0, l.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                        })]
                    }), (0, l.jsx)(MainLayout_LayoutChildren, {})]
                })
            }

            function HomePage() {
                return (0, l.jsx)(MainLayout, {})
            }
        },
        81292: function (e) {
            e.exports = {
                winicon: "styles_winicon__FqpdY",
                "winicon-text": "styles_winicon-text__QisID",
                "hin-winicon": "styles_hin-winicon__lnWxK",
                "winicon-img": "styles_winicon-img__uz_bU",
                "text-pink-shadow": "styles_text-pink-shadow__fdDh5",
                "text-disabled-shadow": "styles_text-disabled-shadow__9fdvs",
                "font-easvhs": "styles_font-easvhs__0ZOM_",
                "highlight-docs": "styles_highlight-docs__dxXWd",
                "shadow-frame-inside": "styles_shadow-frame-inside__kUW4d",
                "custom-checkbox": "styles_custom-checkbox__Aw72g",
                "font-w95fa": "styles_font-w95fa__7C3P0",
                "text-input": "styles_text-input___UtUt",
                "text-input-description": "styles_text-input-description__WshYg",
                "text-input-link": "styles_text-input-link__VP6vc",
                "token-selector": "styles_token-selector__5qY3y",
                "ant-select-selector": "styles_ant-select-selector__3D75D",
                "number-input": "styles_number-input__kRD6V",
                "text-input-distribution": "styles_text-input-distribution__I5__c",
                "flat-border": "styles_flat-border__iFjMW",
                "sc-cOFTSb": "styles_sc-cOFTSb__HDi6w",
                "sc-iTONeN": "styles_sc-iTONeN__nSp0S",
                "glud-range": "styles_glud-range__d25bX",
                col: "styles_col___rlls",
                "row-cols": "styles_row-cols__v25dN",
                "col-1": "styles_col-1__beMdt",
                "col-2": "styles_col-2__Mopq0",
                "col-3": "styles_col-3__PB_50",
                "col-4": "styles_col-4__lSt2p",
                "col-5": "styles_col-5__nYmXL",
                "col-6": "styles_col-6__19Z_T",
                "col-7": "styles_col-7__0CvOb",
                "col-8": "styles_col-8__58TKi",
                "col-9": "styles_col-9__VfGJX",
                "col-10": "styles_col-10__gY0GP",
                "col-11": "styles_col-11__AsGtR",
                "col-12": "styles_col-12__SAACO",
                "row-cols-1": "styles_row-cols-1__hK39I",
                "row-cols-2": "styles_row-cols-2__0Vwn2",
                "row-cols-3": "styles_row-cols-3__wKE9J",
                "row-cols-4": "styles_row-cols-4__eepI8",
                "row-cols-5": "styles_row-cols-5__8PLyj",
                "row-cols-6": "styles_row-cols-6__lO9Rr",
                container: "styles_container___zs18",
                "!item": "styles___item__WbKTh",
                item: "styles_item__1kWM2",
                "tree-view": "styles_tree-view__zbW3J",
                "center-child": "styles_center-child__rQxdF"
            }
        },
        85741: function (e) {
            e.exports = {
                winicon: "styles_winicon__g8WuJ",
                "winicon-text": "styles_winicon-text__AWwKW",
                "hin-winicon": "styles_hin-winicon__ZEueG",
                "winicon-img": "styles_winicon-img__Za24Y",
                "text-pink-shadow": "styles_text-pink-shadow__Oqdg4",
                "text-disabled-shadow": "styles_text-disabled-shadow__93_I7",
                "font-easvhs": "styles_font-easvhs__npNte",
                "highlight-docs": "styles_highlight-docs__W0_34",
                "shadow-frame-inside": "styles_shadow-frame-inside__VfjWU",
                "custom-checkbox": "styles_custom-checkbox__FPFut",
                "font-w95fa": "styles_font-w95fa__8wCYm",
                "text-input": "styles_text-input__lrmMA",
                "text-input-description": "styles_text-input-description__9Ok5u",
                "text-input-link": "styles_text-input-link__H4w6v",
                "token-selector": "styles_token-selector__CEURz",
                "ant-select-selector": "styles_ant-select-selector__Dv9w2",
                "number-input": "styles_number-input__4svec",
                "text-input-distribution": "styles_text-input-distribution__pHpkN",
                "flat-border": "styles_flat-border__Ugt8_",
                "sc-cOFTSb": "styles_sc-cOFTSb__ttnC5",
                "sc-iTONeN": "styles_sc-iTONeN__5__Zr",
                "glud-range": "styles_glud-range__elKhg",
                col: "styles_col__jvQPa",
                "row-cols": "styles_row-cols__cNMml",
                "col-1": "styles_col-1__pEgkh",
                "col-2": "styles_col-2__jK5j1",
                "col-3": "styles_col-3__3vLH4",
                "col-4": "styles_col-4__cktE4",
                "col-5": "styles_col-5__F6nDA",
                "col-6": "styles_col-6__zt3oM",
                "col-7": "styles_col-7__wXyUo",
                "col-8": "styles_col-8__wrku_",
                "col-9": "styles_col-9__nDIyd",
                "col-10": "styles_col-10__cz7xm",
                "col-11": "styles_col-11__bbFf7",
                "col-12": "styles_col-12__vjW7i",
                "row-cols-1": "styles_row-cols-1__RKihk",
                "row-cols-2": "styles_row-cols-2__tP1Q0",
                "row-cols-3": "styles_row-cols-3__izTM8",
                "row-cols-4": "styles_row-cols-4__TbZWL",
                "row-cols-5": "styles_row-cols-5__S9b_M",
                "row-cols-6": "styles_row-cols-6__cJWME",
                "tree-view": "styles_tree-view__7w_ZO",
                container: "styles_container__HLgK2",
                "!item": "styles___item__9r9Fv",
                item: "styles_item__Y6jsz",
                popup: "styles_popup__t0cUl",
                showPopup: "styles_showPopup__l5BmK",
                "body-hidden": "styles_body-hidden___rBBO"
            }
        },
        9008: function (e, t, s) {
            e.exports = s(79201)
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], function () {
            return e(e.s = 75557)
        }), _N_E = e.O()
    }
]);