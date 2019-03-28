(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{911:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"json-rpc-interface-interaction-format-and-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc-interface-interaction-format-and-specification","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON-RPC Interface interaction format and specification")]),t._v(" "),a("h3",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body","aria-hidden":"true"}},[t._v("#")]),t._v(" Request Body")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nuls_accounts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"min_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("parameters")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("required")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cmd")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("The command to call")])]),t._v(" "),a("tr",[a("td",[t._v("params")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("parameters")])]),t._v(" "),a("tr",[a("td",[t._v("min_version")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("float")]),t._v(" "),a("td",[t._v("The minimum version of the interface to call")])])])]),t._v(" "),a("h3",{attrs:{id:"response-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-body","aria-hidden":"true"}},[t._v("#")]),t._v(" Response Body")]),t._v(" "),a("ul",[a("li",[t._v("success")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("returns")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("required")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("code")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ture")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),a("td",[t._v("The result status of the request, 0 means success. Otherwise return an error code")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",[t._v("User-friendly request execution result description")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("result")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),a("td",[t._v("Method return value")])])])]),t._v(" "),a("h3",{attrs:{id:"error-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Error Code")]),t._v(" "),a("h4",{attrs:{id:"json-rpc-standard-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc-standard-errors","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON RPC Standard errors")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Code")]),t._v(" "),a("th",[t._v("Possible Return message")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("Success")]),t._v(" "),a("td",[t._v("Operation success")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("Parse error")]),t._v(" "),a("td",[t._v("Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Invalid Request")]),t._v(" "),a("td",[t._v("The JSON sent is not a valid Request object.")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Method not found")]),t._v(" "),a("td",[t._v("The method does not exist / is not available.")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("Invalid params")]),t._v(" "),a("td",[t._v("Invalid method parameter(s).")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("Internal error")]),t._v(" "),a("td",[t._v("Internal JSON-RPC error.")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("Unauthorized")]),t._v(" "),a("td",[t._v("Should be used when some action is not authorized, e.g. sending from a locked account.")])]),t._v(" "),a("tr",[a("td",[t._v("7")]),t._v(" "),a("td",[t._v("Action not allowed")]),t._v(" "),a("td",[t._v("Should be used when some action is not allowed, e.g. preventing an action, while another depending action is processing on, like sending again when a confirmation popup is shown to the user (?).")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("Timeout")]),t._v(" "),a("td",[t._v("Should be used when an action timedout.")])]),t._v(" "),a("tr",[a("td",[t._v("9")]),t._v(" "),a("td",[t._v("Conflict")]),t._v(" "),a("td",[t._v("Should be used when an action conflicts with another (ongoing?) action.")])]),t._v(" "),a("tr",[a("td",[t._v("10")]),t._v(" "),a("td",[t._v("Execution error")]),t._v(" "),a("td",[t._v("Will contain a subset of custom errors in the data field. See below.")])]),t._v(" "),a("tr",[a("td",[t._v("11 to 100")]),t._v(" "),a("td",[a("code",[t._v("Server error")])]),t._v(" "),a("td",[t._v("Reserved for implementation-defined server-errors.")])])])]),t._v(" "),a("h4",{attrs:{id:"custom-error-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-error-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom error fields")]),t._v(" "),a("p",[t._v("Custom error "),a("code",[t._v("10")]),t._v(" can contain custom error(s) to further explain what went wrong.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Execution error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);r.options.__file="interfaceStandard.md";e.default=r.exports}}]);