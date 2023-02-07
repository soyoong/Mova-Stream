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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/firebaseConfig */ \"./config/firebaseConfig.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    error: null,\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [initialLoading, setInitialLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Persisting the user\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(true);\n                router.push(\"/login\");\n            }\n            setInitialLoading(false);\n        }), [\n        _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            setLoading(false);\n            router.push(\"/\");\n        })// .catch((error) => console.log(error.message))\n        .finally(()=>setLoading(false));\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        })// .catch((error) => console.log(error.message))\n        .finally(()=>setLoading(false));\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(null);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user,\n            signUp,\n            signIn,\n            loading,\n            logout,\n            error\n        }), [\n        user,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoedValue,\n        children: !initialLoading && children\n    }, void 0, false, {\n        fileName: \"/Users/haunguyen/Desktop/cloud/Mova-Stream/netflix-web-app/hooks/useAuth.tsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VBdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU91QjtBQUNpQjtBQUN3QztBQUNoQztBQVdoRCxNQUFNVyw0QkFBY04sb0RBQWFBLENBQVE7SUFDdkNPLE1BQU0sSUFBSTtJQUNWQyxRQUFRLFVBQVksQ0FBQztJQUNyQkMsUUFBUSxVQUFZLENBQUM7SUFDckJDLFFBQVEsVUFBWSxDQUFDO0lBQ3JCQyxPQUFPLElBQUk7SUFDWEMsU0FBUyxLQUFLO0FBQ2hCO0FBTU8sTUFBTUMsZUFBZSxDQUFDLEVBQUVDLFNBQVEsRUFBcUIsR0FBSztJQUMvRCxNQUFNLENBQUNGLFNBQVNHLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNHLE1BQU1TLFFBQVEsR0FBR1osK0NBQVFBLENBQWMsSUFBSTtJQUNsRCxNQUFNLENBQUNPLE9BQU9NLFNBQVMsR0FBR2IsK0NBQVFBLENBQUMsSUFBSTtJQUN2QyxNQUFNLENBQUNjLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUFDLElBQUk7SUFDekQsTUFBTWdCLFNBQVNyQixzREFBU0E7SUFFeEIsc0JBQXNCO0lBQ3RCRyxnREFBU0EsQ0FDUCxJQUNFTixpRUFBa0JBLENBQUNTLHdEQUFJQSxFQUFFLENBQUNFLE9BQVM7WUFDakMsSUFBSUEsTUFBTTtnQkFDUixlQUFlO2dCQUNmUyxRQUFRVDtnQkFDUlEsV0FBVyxLQUFLO1lBQ2xCLE9BQU87Z0JBQ0wsbUJBQW1CO2dCQUNuQkMsUUFBUSxJQUFJO2dCQUNaRCxXQUFXLElBQUk7Z0JBQ2ZLLE9BQU9DLElBQUksQ0FBQztZQUNkLENBQUM7WUFFREYsa0JBQWtCLEtBQUs7UUFDekIsSUFDRjtRQUFDZCx3REFBSUE7S0FBQztJQUdSLE1BQU1HLFNBQVMsT0FBT2MsT0FBZUMsV0FBcUI7UUFDeERSLFdBQVcsSUFBSTtRQUVmLE1BQU1wQiw2RUFBOEJBLENBQUNVLHdEQUFJQSxFQUFFaUIsT0FBT0MsVUFDL0NDLElBQUksQ0FBQyxDQUFDQyxpQkFBbUI7WUFDeEJULFFBQVFTLGVBQWVsQixJQUFJO1lBQzNCUSxXQUFXLEtBQUs7WUFDaEJLLE9BQU9DLElBQUksQ0FBQztRQUNkLEVBQ0EsZ0RBQWdEO1NBQy9DSyxPQUFPLENBQUMsSUFBTVgsV0FBVyxLQUFLO0lBQ25DO0lBRUEsTUFBTU4sU0FBUyxPQUFPYSxPQUFlQyxXQUFxQjtRQUN4RFIsV0FBVyxJQUFJO1FBRWYsTUFBTWxCLHlFQUEwQkEsQ0FBQ1Esd0RBQUlBLEVBQUVpQixPQUFPQyxVQUMzQ0MsSUFBSSxDQUFDLENBQUNDLGlCQUFtQjtZQUN4QlQsUUFBUVMsZUFBZWxCLElBQUk7WUFDM0JhLE9BQU9DLElBQUksQ0FBQztZQUNaTixXQUFXLEtBQUs7UUFDbEIsRUFDQSxnREFBZ0Q7U0FDL0NXLE9BQU8sQ0FBQyxJQUFNWCxXQUFXLEtBQUs7SUFDbkM7SUFFQSxNQUFNTCxTQUFTLFVBQVk7UUFDekJLLFdBQVcsSUFBSTtRQUVmakIsc0RBQU9BLENBQUNPLHdEQUFJQSxFQUNUbUIsSUFBSSxDQUFDLElBQU07WUFDVlIsUUFBUSxJQUFJO1FBQ2QsR0FDQ1csS0FBSyxDQUFDLENBQUNoQixRQUFVaUIsTUFBTWpCLE1BQU1rQixPQUFPLEdBQ3BDSCxPQUFPLENBQUMsSUFBTVgsV0FBVyxLQUFLO0lBQ25DO0lBRUEsTUFBTWUsY0FBYzNCLDhDQUFPQSxDQUN6QixJQUFPO1lBQ0xJO1lBQ0FDO1lBQ0FDO1lBQ0FHO1lBQ0FGO1lBQ0FDO1FBQ0YsSUFDQTtRQUFDSjtRQUFNSztLQUFRO0lBR2pCLHFCQUNFLDhEQUFDTixZQUFZeUIsUUFBUTtRQUFDQyxPQUFPRjtrQkFDMUIsQ0FBQ1osa0JBQWtCSjs7Ozs7O0FBRzFCLEVBQUU7QUFFYSxTQUFTbUIsVUFBVTtJQUNoQyxPQUFPaEMsaURBQVVBLENBQUNLO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VBdXRoLnRzeD9mYmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIkBmaXJlYmFzZS91dGlsXCI7XG5pbXBvcnQge1xuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIHNpZ25PdXQsXG4gIFVzZXIsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vY29uZmlnL2ZpcmViYXNlQ29uZmlnXCI7XG5cbmludGVyZmFjZSBJQXV0aCB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xuICBzaWduVXA6IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBzaWduSW46IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBsb2dvdXQ6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUF1dGg+KHtcbiAgdXNlcjogbnVsbCxcbiAgc2lnblVwOiBhc3luYyAoKSA9PiB7fSxcbiAgc2lnbkluOiBhc3luYyAoKSA9PiB7fSxcbiAgbG9nb3V0OiBhc3luYyAoKSA9PiB7fSxcbiAgZXJyb3I6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxufSk7XG5cbmludGVyZmFjZSBBdXRoUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2luaXRpYWxMb2FkaW5nLCBzZXRJbml0aWFsTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gUGVyc2lzdGluZyB0aGUgdXNlclxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT5cbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIC8vIExvZ2dlZCBpbi4uLlxuICAgICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm90IGxvZ2dlZCBpbi4uLlxuICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEluaXRpYWxMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pLFxuICAgIFthdXRoXVxuICApO1xuXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcbiAgICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAvLyAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgfTtcblxuICBjb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcbiAgICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAvLyAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIHNpZ25PdXQoYXV0aClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgfTtcblxuICBjb25zdCBtZW1vZWRWYWx1ZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHVzZXIsXG4gICAgICBzaWduVXAsXG4gICAgICBzaWduSW4sXG4gICAgICBsb2FkaW5nLFxuICAgICAgbG9nb3V0LFxuICAgICAgZXJyb3IsXG4gICAgfSksXG4gICAgW3VzZXIsIGxvYWRpbmddXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21lbW9lZFZhbHVlfT5cbiAgICAgIHshaW5pdGlhbExvYWRpbmcgJiYgY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImF1dGgiLCJBdXRoQ29udGV4dCIsInVzZXIiLCJzaWduVXAiLCJzaWduSW4iLCJsb2dvdXQiLCJlcnJvciIsImxvYWRpbmciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldExvYWRpbmciLCJzZXRVc2VyIiwic2V0RXJyb3IiLCJpbml0aWFsTG9hZGluZyIsInNldEluaXRpYWxMb2FkaW5nIiwicm91dGVyIiwicHVzaCIsImVtYWlsIiwicGFzc3dvcmQiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJmaW5hbGx5IiwiY2F0Y2giLCJhbGVydCIsIm1lc3NhZ2UiLCJtZW1vZWRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// import { RecoilRoot } from \"recoil\";\nfunction MyApp({ Component , pageProps  }) {\n    return(// HOOKS\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/haunguyen/Desktop/cloud/Mova-Stream/netflix-web-app/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/haunguyen/Desktop/cloud/Mova-Stream/netflix-web-app/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCO0FBRWlCO0FBQ2hELHVDQUF1QztBQUV2QyxTQUFTQyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDakQsT0FDRSxRQUFRO2tCQUNSLDhEQUFDSCx3REFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFDQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xuLy8gaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIC8vIEhPT0tTXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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