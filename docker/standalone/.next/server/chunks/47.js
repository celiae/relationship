"use strict";
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 47:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_i": () => (/* binding */ fetcher)
/* harmony export */ });
/* unused harmony exports UpdatePost, useNetworkLength, useFamilyLength, useNetwork */
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function UpdatePost(api, method, data) {
    if (method === "PUT") {
        fetch(`/api/network/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    } else if (method === "POST") {
        fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    } else {
        console.log("error");
    }
}
const fetcher = (url)=>fetch(url).then((res)=>res.json());
function useNetworkLength() {
    const { data , error  } = useSWR(`/api/network/length`, fetcher);
    return {
        network_length: data
    };
}
function useFamilyLength() {
    const { data , error  } = useSWR(`/api/family/length`, fetcher);
    return {
        family_length: data
    };
}
function useNetwork(id) {
    const { data , error  } = useSWR(`/api/network/${id}`, fetcher);
    return {
        network: data,
        isLoading: !error && !data,
        isError: error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;