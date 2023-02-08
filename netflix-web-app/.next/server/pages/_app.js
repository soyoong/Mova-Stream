/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/firebaseConfig.ts":
/*!**********************************!*\
  !*** ./config/firebaseConfig.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDQO8YgxCdEVW9rFyFTMTPnywnJDoGwFe4\",\n    authDomain: \"mova-stream.firebaseapp.com\",\n    projectId: \"mova-stream\",\n    storageBucket: \"mova-stream.appspot.com\",\n    messagingSenderId: \"461195211384\",\n    appId: \"1:461195211384:web:7f2f757fc7dc04b79bb38d\"\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\n// const db = getFirestore()\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2VDb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNNO0FBRXRCO0FBQ3ZDLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSxNQUFNSSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1Q7QUFFQSxzQkFBc0I7QUFDdEIsTUFBTUMsTUFBTSxDQUFDVCxxREFBT0EsR0FBR1UsTUFBTSxHQUFHWiwyREFBYUEsQ0FBQ0ksa0JBQWtCSCxvREFBTUEsRUFBRTtBQUN4RSw0QkFBNEI7QUFDNUIsTUFBTVksT0FBT1Ysc0RBQU9BO0FBRXBCLGlFQUFlUSxHQUFHQSxFQUFBO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvZmlyZWJhc2VDb25maWcudHM/MWZhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHAsIGdldEFwcHMgfSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEUU84WWd4Q2RFVlc5ckZ5RlRNVFBueXduSkRvR3dGZTRcIixcbiAgYXV0aERvbWFpbjogXCJtb3ZhLXN0cmVhbS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcIm1vdmEtc3RyZWFtXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibW92YS1zdHJlYW0uYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDYxMTk1MjExMzg0XCIsXG4gIGFwcElkOiBcIjE6NDYxMTk1MjExMzg0OndlYjo3ZjJmNzU3ZmM3ZGMwNGI3OWJiMzhkXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKVxuLy8gY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKVxuY29uc3QgYXV0aCA9IGdldEF1dGgoKVxuXG5leHBvcnQgZGVmYXVsdCBhcHBcbmV4cG9ydCB7IGF1dGggfSJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwIiwiZ2V0QXBwcyIsImdldEF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImxlbmd0aCIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/firebaseConfig.ts\n");

/***/ }),

/***/ "./hooks/useAuth.tsx":
/*!***************************!*\
  !*** ./hooks/useAuth.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/firebaseConfig */ \"./config/firebaseConfig.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [initialLoading, setInitialLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Persisting the user\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(false);\n                router.push(\"/login\");\n            }\n            setInitialLoading(false);\n        }), [\n        _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            let user = userCredential.user;\n            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.sendEmailVerification)(user).then(()=>{\n                let msg = \"An email verification link has been sent to \" + user.email;\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(msg);\n            });\n            setUser(user);\n            setLoading(false);\n        }).catch((error)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(error.code);\n        }).finally(()=>setLoading(false));\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            let user = userCredential.user;\n            if (user.emailVerified) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"User login successful \\uD83C\\uDF89\");\n                setUser(user);\n                router.push(\"/\");\n            } else {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(\"Please verify the email address in your mailbox\");\n            }\n            setLoading(false);\n        }).catch((error)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(error.code);\n        }).finally(()=>setLoading(false));\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(null);\n            setLoading(false);\n        }).catch((error)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(error.code);\n            setLoading(false);\n        });\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user,\n            signUp,\n            signIn,\n            logout,\n            loading\n        }), [\n        user,\n        signUp,\n        signIn,\n        logout,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoedValue,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {\n                position: \"top-center\",\n                reverseOrder: false\n            }, void 0, false, {\n                fileName: \"/Users/haunguyen/Desktop/cloud/Mova-Stream/netflix-web-app/hooks/useAuth.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined),\n            !initialLoading && children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/haunguyen/Desktop/cloud/Mova-Stream/netflix-web-app/hooks/useAuth.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDTE07WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRixJQUNBO1FBQUNKO1FBQU1DO1FBQVFDO1FBQVFDO1FBQVFDO0tBQVE7SUFHekMscUJBQ0UsOERBQUNMLFlBQVkwQixRQUFRO1FBQUNDLE9BQU9GOzswQkFDM0IsOERBQUMxQixvREFBT0E7Z0JBQUM2QixVQUFTO2dCQUFhQyxjQUFjLEtBQUs7Ozs7OztZQUNqRCxDQUFDbkIsa0JBQWtCSDs7Ozs7OztBQUcxQixFQUFFO0FBRWEsU0FBU3VCLFVBQVU7SUFDaEMsT0FBT3JDLGlEQUFVQSxDQUFDTztBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQXV0aC50c3g/ZmJhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3luYyB9IGZyb20gXCJAZmlyZWJhc2UvdXRpbFwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gIHNlbmRFbWFpbFZlcmlmaWNhdGlvbixcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIHNpZ25PdXQsXG4gIFVzZXIsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vY29uZmlnL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuaW50ZXJmYWNlIElBdXRoIHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG4gIHNpZ25VcDogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIHNpZ25JbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIGxvZ291dDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoPih7XG4gIHVzZXI6IG51bGwsXG4gIHNpZ25VcDogYXN5bmMgKCkgPT4ge30sXG4gIHNpZ25JbjogYXN5bmMgKCkgPT4ge30sXG4gIGxvZ291dDogYXN5bmMgKCkgPT4ge30sXG4gIGxvYWRpbmc6IGZhbHNlLFxufSk7XG5cbmludGVyZmFjZSBBdXRoUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2luaXRpYWxMb2FkaW5nLCBzZXRJbml0aWFsTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gUGVyc2lzdGluZyB0aGUgdXNlclxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT5cbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIC8vIExvZ2dlZCBpbi4uLlxuICAgICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm90IGxvZ2dlZCBpbi4uLlxuICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SW5pdGlhbExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSksXG4gICAgW2F1dGhdXG4gICk7XG5cbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICBsZXQgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XG5cbiAgICAgICAgc2VuZEVtYWlsVmVyaWZpY2F0aW9uKHVzZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxldCBtc2cgPSBcIkFuIGVtYWlsIHZlcmlmaWNhdGlvbiBsaW5rIGhhcyBiZWVuIHNlbnQgdG8gXCIgKyB1c2VyLmVtYWlsO1xuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MobXNnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5jb2RlKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XG4gIH07XG5cbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XG4gICAgICAgIGxldCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcblxuICAgICAgICBpZiAodXNlci5lbWFpbFZlcmlmaWVkKSB7XG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlVzZXIgbG9naW4gc3VjY2Vzc2Z1bCDwn46JXCIpO1xuICAgICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvYXN0LmVycm9yKFwiUGxlYXNlIHZlcmlmeSB0aGUgZW1haWwgYWRkcmVzcyBpbiB5b3VyIG1haWxib3hcIik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5jb2RlKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBzaWduT3V0KGF1dGgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IuY29kZSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbWVtb2VkVmFsdWUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICB1c2VyLFxuICAgICAgc2lnblVwLFxuICAgICAgc2lnbkluLFxuICAgICAgbG9nb3V0LFxuICAgICAgbG9hZGluZyxcbiAgICB9KSxcbiAgICBbdXNlciwgc2lnblVwLCBzaWduSW4sIGxvZ291dCwgbG9hZGluZ11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bWVtb2VkVmFsdWV9PlxuICAgICAgPFRvYXN0ZXIgcG9zaXRpb249XCJ0b3AtY2VudGVyXCIgcmV2ZXJzZU9yZGVyPXtmYWxzZX0gLz5cbiAgICAgIHshaW5pdGlhbExvYWRpbmcgJiYgY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImF1dGgiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJBdXRoQ29udGV4dCIsInVzZXIiLCJzaWduVXAiLCJzaWduSW4iLCJsb2dvdXQiLCJsb2FkaW5nIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRVc2VyIiwic2V0TG9hZGluZyIsImluaXRpYWxMb2FkaW5nIiwic2V0SW5pdGlhbExvYWRpbmciLCJyb3V0ZXIiLCJwdXNoIiwiZW1haWwiLCJwYXNzd29yZCIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsIm1zZyIsInN1Y2Nlc3MiLCJjYXRjaCIsImVycm9yIiwiY29kZSIsImZpbmFsbHkiLCJlbWFpbFZlcmlmaWVkIiwibWVtb2VkVmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwicG9zaXRpb24iLCJyZXZlcnNlT3JkZXIiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// import { RecoilRoot } from \"recoil\";\nfunction MyApp({ Component , pageProps  }) {\n    return(// HOOKS\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/haunguyen/Desktop/cloud/Mova-Stream/netflix-web-app/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/haunguyen/Desktop/cloud/Mova-Stream/netflix-web-app/pages/_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/haunguyen/Desktop/cloud/Mova-Stream/netflix-web-app/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFaUI7QUFDWjtBQUNwQyx1Q0FBdUM7QUFFdkMsU0FBU0UsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQ2pELE9BQ0UsUUFBUTtrQkFDUiw4REFBQ0gsOENBQVVBO2tCQUVULDRFQUFDRCx3REFBWUE7c0JBQ1gsNEVBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFDQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcbi8vIGltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tIFwicmVjb2lsXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBIT09LU1xuICAgIDxSZWNvaWxSb290PlxuICAgICAgey8qIEhpZ2hlciBPZGVyIENvbXBvbmVudCAqL31cbiAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIDwvUmVjb2lsUm9vdD5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIlJlY29pbFJvb3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();