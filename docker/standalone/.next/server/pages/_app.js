"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Avatar"
const Avatar_namespaceObject = require("@mui/material/Avatar");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Adb"
const Adb_namespaceObject = require("@mui/icons-material/Adb");
var Adb_default = /*#__PURE__*/__webpack_require__.n(Adb_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/useScrollTrigger"
const useScrollTrigger_namespaceObject = require("@mui/material/useScrollTrigger");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Slide"
const Slide_namespaceObject = require("@mui/material/Slide");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/app-bar.tsx


















const pages = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Network",
        href: "/network"
    },
    {
        name: "Family",
        href: "/family"
    }
];
const settings = [
    "Profile",
    "Account",
    "Dashboard",
    "Logout"
];
function HideOnScroll(props) {
    const { children , window  } = props;
    const trigger = useScrollTrigger_default()({
        target: window ? window() : undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((Slide_default()), {
        appear: false,
        direction: "down",
        in: !trigger,
        children: children
    });
}
function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = external_react_.useState(null);
    const [anchorElUser, setAnchorElUser] = external_react_.useState(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(HideOnScroll, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                maxWidth: "xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                    disableGutters: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Adb_default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                mr: 1
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            noWrap: true,
                            component: "a",
                            href: "/",
                            sx: {
                                mr: 2,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none"
                            },
                            children: "Relationship"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "flex",
                                    md: "none"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    size: "large",
                                    "aria-label": "account of current user",
                                    "aria-controls": "menu-appbar",
                                    "aria-haspopup": "true",
                                    onClick: handleOpenNavMenu,
                                    color: "inherit",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                    id: "menu-appbar",
                                    anchorEl: anchorElNav,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    },
                                    keepMounted: true,
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left"
                                    },
                                    open: Boolean(anchorElNav),
                                    onClose: handleCloseNavMenu,
                                    sx: {
                                        display: {
                                            xs: "block",
                                            md: "none"
                                        }
                                    },
                                    children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            onClick: ()=>{
                                                handleCloseNavMenu;
                                                router.push(page.href);
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                textAlign: "center",
                                                children: page.name
                                            })
                                        }, page.name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Adb_default()), {
                            sx: {
                                display: {
                                    xs: "flex",
                                    md: "none"
                                },
                                mr: 1
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h5",
                            noWrap: true,
                            component: "a",
                            href: "",
                            sx: {
                                mr: 2,
                                display: {
                                    xs: "flex",
                                    md: "none"
                                },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none"
                            },
                            children: "Relationship"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            },
                            children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    onClick: ()=>{
                                        handleCloseNavMenu;
                                        router.push(page.href);
                                    },
                                    sx: {
                                        my: 2,
                                        color: "white",
                                        display: "block"
                                    },
                                    children: page.name
                                }, page.name))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                flexGrow: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                    title: "Open settings",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        onClick: handleOpenUserMenu,
                                        sx: {
                                            p: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                            alt: "Remy Sharp"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                    sx: {
                                        mt: "45px"
                                    },
                                    id: "menu-appbar",
                                    anchorEl: anchorElUser,
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "right"
                                    },
                                    keepMounted: true,
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "right"
                                    },
                                    open: Boolean(anchorElUser),
                                    onClose: handleCloseUserMenu,
                                    children: settings.map((setting)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            onClick: handleCloseUserMenu,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                textAlign: "center",
                                                children: setting
                                            })
                                        }, setting))
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const app_bar = (ResponsiveAppBar);

;// CONCATENATED MODULE: external "@mui/material/Fade"
const Fade_namespaceObject = require("@mui/material/Fade");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_namespaceObject);
;// CONCATENATED MODULE: ./components/scroll-top.tsx





function ScrollTop(props) {
    const { children , window  } = props;
    const trigger = useScrollTrigger_default()({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({
                block: "center"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: "fixed",
                bottom: 16,
                right: 16
            },
            children: children
        })
    });
}
/* harmony default export */ const scroll_top = (ScrollTop);

;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/KeyboardArrowUp"
const KeyboardArrowUp_namespaceObject = require("@mui/icons-material/KeyboardArrowUp");
var KeyboardArrowUp_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowUp_namespaceObject);
;// CONCATENATED MODULE: ./components/layout.tsx







function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(app_bar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {
                id: "back-to-top-anchor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(scroll_top, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowUp_default()), {})
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx


function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(540));
module.exports = __webpack_exports__;

})();