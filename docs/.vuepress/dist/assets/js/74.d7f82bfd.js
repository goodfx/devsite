(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{857:function(a,t,e){"use strict";e.r(t);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"nrc-20-token-standard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nrc-20-token-standard","aria-hidden":"true"}},[a._v("#")]),a._v(" NRC-20 Token Standard")]),a._v(" "),e("h2",{attrs:{id:"simple-summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary","aria-hidden":"true"}},[a._v("#")]),a._v(" Simple Summary")]),a._v(" "),e("p",[a._v("A standard interface for tokens.")]),a._v(" "),e("h2",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract","aria-hidden":"true"}},[a._v("#")]),a._v(" Abstract")]),a._v(" "),e("p",[a._v("The following standard allows for the implementation of a standard API for tokens within smart contracts.\nThis standard provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party.")]),a._v(" "),e("h2",{attrs:{id:"motivation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motivation","aria-hidden":"true"}},[a._v("#")]),a._v(" Motivation")]),a._v(" "),e("p",[a._v("A standard interface allows any tokens on Nuls to be re-used by other applications: from wallets to decentralized exchanges.")]),a._v(" "),e("h2",{attrs:{id:"specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specification","aria-hidden":"true"}},[a._v("#")]),a._v(" Specification")]),a._v(" "),e("h2",{attrs:{id:"token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token","aria-hidden":"true"}},[a._v("#")]),a._v(" Token")]),a._v(" "),e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[a._v("#")]),a._v(" Methods")]),a._v(" "),e("p",[e("strong",[a._v("NOTE")]),a._v(": Callers MUST handle "),e("code",[a._v("false")]),a._v(" from "),e("code",[a._v("return boolean")]),a._v(".  Callers MUST NOT assume that "),e("code",[a._v("false")]),a._v(" is never returned!")]),a._v(" "),e("h4",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[a._v("#")]),a._v(" name")]),a._v(" "),e("p",[a._v("Returns the name of the token - e.g. "),e("code",[a._v('"MyToken"')]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@View")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" String "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h4",{attrs:{id:"symbol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#symbol","aria-hidden":"true"}},[a._v("#")]),a._v(" symbol")]),a._v(" "),e("p",[a._v('Returns the symbol of the token. E.g. "MT".')]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@View")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" String "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("symbol")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h4",{attrs:{id:"decimals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decimals","aria-hidden":"true"}},[a._v("#")]),a._v(" decimals")]),a._v(" "),e("p",[a._v("Returns the number of decimals the token uses - e.g. "),e("code",[a._v("8")]),a._v(", means to divide the token amount by "),e("code",[a._v("100000000")]),a._v(" to get its user representation.")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@View")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("decimals")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h4",{attrs:{id:"totalsupply"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#totalsupply","aria-hidden":"true"}},[a._v("#")]),a._v(" totalSupply")]),a._v(" "),e("p",[a._v("Returns the total token supply.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("@View\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" BigInteger "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("totalSupply")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h4",{attrs:{id:"balanceof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#balanceof","aria-hidden":"true"}},[a._v("#")]),a._v(" balanceOf")]),a._v(" "),e("p",[a._v("Returns the account balance of another account with address "),e("code",[a._v("owner")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@View")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" BigInteger "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("balanceOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address owner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h4",{attrs:{id:"transfer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transfer","aria-hidden":"true"}},[a._v("#")]),a._v(" transfer")]),a._v(" "),e("p",[a._v("Transfers "),e("code",[a._v("value")]),a._v(" amount of tokens to address "),e("code",[a._v("to")]),a._v(", and MUST fire the "),e("code",[a._v("TransferEvent")]),a._v(" event.\nThe function SHOULD "),e("code",[a._v("revert")]),a._v(" if the "),e("code",[a._v("from")]),a._v(" account balance does not have enough tokens to spend.")]),a._v(" "),e("p",[a._v("A token contract which creates new tokens SHOULD trigger a Transfer event with the "),e("code",[a._v("from")]),a._v(" address set to "),e("code",[a._v("null")]),a._v(" when tokens are created.")]),a._v(" "),e("p",[e("em",[a._v("Note")]),a._v(" Transfers of 0 values MUST be treated as normal transfers and fire the "),e("code",[a._v("TransferEvent")]),a._v(" event.")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("transfer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" BigInteger value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h4",{attrs:{id:"transferfrom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transferfrom","aria-hidden":"true"}},[a._v("#")]),a._v(" transferFrom")]),a._v(" "),e("p",[a._v("Transfers "),e("code",[a._v("value")]),a._v(" amount of tokens from address "),e("code",[a._v("from")]),a._v(" to address "),e("code",[a._v("to")]),a._v(", and MUST fire the "),e("code",[a._v("TransferEvent")]),a._v(" event.")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("transferFrom")]),a._v(" method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf.\nThis can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies.\nThe function SHOULD "),e("code",[a._v("revert")]),a._v(" unless the "),e("code",[a._v("from")]),a._v(" account has deliberately authorized the sender of the message via some mechanism, such as calling "),e("code",[a._v("approve(@Required Address spender, @Required BigInteger value)")]),a._v(".")]),a._v(" "),e("p",[e("em",[a._v("Note")]),a._v(" Transfers of 0 values MUST be treated as normal transfers and fire the "),e("code",[a._v("TransferEvent")]),a._v(" event.")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("transferFrom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" BigInteger value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h4",{attrs:{id:"approve"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#approve","aria-hidden":"true"}},[a._v("#")]),a._v(" approve")]),a._v(" "),e("p",[a._v("Allows "),e("code",[a._v("spender")]),a._v(" to withdraw from your account multiple times, up to the "),e("code",[a._v("value")]),a._v(" amount. If this function is called again it overwrites the current allowance with "),e("code",[a._v("value")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("approve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address spender"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" BigInteger value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h4",{attrs:{id:"allowance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowance","aria-hidden":"true"}},[a._v("#")]),a._v(" allowance")]),a._v(" "),e("p",[a._v("Returns the amount which "),e("code",[a._v("spender")]),a._v(" is still allowed to withdraw from "),e("code",[a._v("owner")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@View")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" BigInteger "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("allowance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address owner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address spender"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[a._v("#")]),a._v(" Events")]),a._v(" "),e("h4",{attrs:{id:"transferevent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transferevent","aria-hidden":"true"}},[a._v("#")]),a._v(" TransferEvent")]),a._v(" "),e("p",[a._v("MUST trigger when tokens are transferred, including zero value transfers.")]),a._v(" "),e("p",[a._v("A token contract which creates new tokens SHOULD trigger a Transfer event with the "),e("code",[a._v("from")]),a._v(" address set to "),e("code",[a._v("null")]),a._v(" when tokens are created.")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("TransferEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Address from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" BigInteger value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("h4",{attrs:{id:"approvalevent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#approvalevent","aria-hidden":"true"}},[a._v("#")]),a._v(" ApprovalEvent")]),a._v(" "),e("p",[a._v("MUST trigger on any successful call to "),e("code",[a._v("approve(@Required Address spender, @Required BigInteger value)")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ApprovalEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address owner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" Address spender"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Required")]),a._v(" BigInteger value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[a._v("#")]),a._v(" Implementation")]),a._v(" "),e("h4",{attrs:{id:"example-implementations-are-available-at"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-implementations-are-available-at","aria-hidden":"true"}},[a._v("#")]),a._v(" Example implementations are available at")]),a._v(" "),e("ul",[e("li",[a._v("https://github.com/nuls-io/nuls-nrc20")])])])}],!1,null,null,null);n.options.__file="NRC-20TokenStandard.md";t.default=n.exports}}]);