(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{411:function(e,t,s){"use strict";s.r(t);var a=s(15),o=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"add-a-react-app-to-zowe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-react-app-to-zowe","aria-hidden":"true"}},[e._v("#")]),e._v(" Add a React app to Zowe")]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Github Sample Repo:")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zowe/webui-scenarios/tree/master/basic-react",target:"_blank",rel:"noopener noreferrer"}},[e._v("basic-react"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("For this section we have provided a react sample (through an Iframe), which connects to the API defined in the API extension sample.")]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[e._v("Make sure that you first expose an API to connect to before following the steps below. To use the sample provided, first complete the steps listed in "),s("router-link",{attrs:{to:"/extend/extend-api/liberty-api-sample.html"}},[e._v("API extension sample")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"to-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-install","aria-hidden":"true"}},[e._v("#")]),e._v(" To Install")]),e._v(" "),s("ol",[s("li",[e._v("Point your project to the server that is hosting your API.\n"),s("ul",[s("li",[e._v("In the sample this can be defined in the "),s("code",[e._v("Constants.js")]),e._v(" file.")]),e._v(" "),s("li",[e._v("The default is: "),s("code",[e._v("localhost:7443")]),e._v(", but otherwise point to your hardware address.")])])]),e._v(" "),s("li",[e._v("Create a minified version of your project.\n"),s("ul",[s("li",[e._v("Generate minified version using "),s("code",[e._v("npm run build")])])])]),e._v(" "),s("li",[e._v("Create a folder for the project and create a new "),s("code",[e._v("web")]),e._v(" folder inside it.\n"),s("ul",[s("li",[e._v("EX: "),s("code",[e._v("/Desktop/<Your_Project_Name>")]),e._v(" and "),s("code",[e._v("Desktop/<Your_Project_Name>/web")])])])]),e._v(" "),s("li",[e._v("Copy the built project into "),s("code",[e._v("Desktop/<Your_Project_Name>/web")]),e._v(" "),s("ul",[s("li",[e._v("If you are using the sample, copy "),s("code",[e._v("app.min.js")]),e._v(" , "),s("code",[e._v("index.html")]),e._v(" , "),s("code",[e._v("icon.png")]),e._v(" and "),s("code",[e._v("css")]),e._v(" into to "),s("code",[e._v("/Desktop/<Your_Project_Name>/web/")])])])]),e._v(" "),s("li",[e._v("Create a "),s("code",[e._v("pluginDefinition.json")]),e._v(" "),s("router-link",{attrs:{to:"/extend/extend-api/ReactJSUI.html#configuring-your-app-for-zowe"}},[e._v("following the guide")]),e._v(" and copy it to "),s("code",[e._v("Desktop/<Your_Project_Name>/")]),e._v(" "),s("ul",[s("li",[e._v("If you are using the sample, this is included within the project. Copy to "),s("code",[e._v("Desktop/<Your_Project_Name>/")])])])],1),e._v(" "),s("li",[e._v("Copy the project from "),s("code",[e._v("/Desktop")]),e._v(" to "),s("code",[e._v("<zowe_base>/")]),e._v(" "),s("ul",[s("li",[e._v("Use "),s("code",[e._v("scp <userID>@<server> /Users/path/to/files <zowe_base>/")])])])]),e._v(" "),s("li",[e._v("Create a new file within the plugins folder ("),s("code",[e._v("<zowe_base>/zlux-app-server-plugins")]),e._v(") called "),s("code",[e._v("com.<Your_Project_Name>.json")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("touch com.<Your_Project_Name>.json")])])])]),e._v(" "),s("li",[e._v("Edit this folder (using vi) to read:")])]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"identifier"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"com.<Your_Project_Name>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pluginLocation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../../<Your_Project_Name>"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("ol",{attrs:{start:"9"}},[s("li",[e._v("Run "),s("code",[e._v("./deploy.sh")]),e._v(" found in "),s("code",[e._v("<zowe_base>/zlux-build")])]),e._v(" "),s("li",[e._v("Run "),s("code",[e._v("./zowe-stop.sh")]),e._v(" found in "),s("code",[e._v("<zowe_base>/scripts")])]),e._v(" "),s("li",[e._v("Run "),s("code",[e._v("./zowe-start.sh")]),e._v(" found in "),s("code",[e._v("<zowe_base>/scripts")])])]),e._v(" "),s("h2",{attrs:{id:"verify-the-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-install","aria-hidden":"true"}},[e._v("#")]),e._v(" Verify the Install")]),e._v(" "),s("p",[e._v("Upon restarting the server, navigate to the Zowe Application Server.")]),e._v(" "),s("ul",[s("li",[e._v("This can be found at: "),s("code",[e._v("https://<base>:<port>/ZLUX/plugins/org.zowe.zlux.bootstrap/web/")])])]),e._v(" "),s("p",[e._v("Make sure that your new plug-in was added and that it can interact with the server.")]),e._v(" "),s("p",[e._v("If it is not able to interact with the server and you are getting CORS errors, you might need to update the server to accept all connections.")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[e._v("Note: This is for development purposes only.")])]),e._v(" "),s("p",[e._v("To update the server:")]),e._v(" "),s("ul",[s("li",[e._v("Navigate to "),s("code",[e._v("<zowe-base>/explorer-server/wlp/usr/servers/Atlas/server.xml")])]),e._v(" "),s("li",[e._v("Open to the file with vi and paste in the following code.")])]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("FOR")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("TESTING")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("ONLY")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("cors allowCredentials"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),e._v(" allowedMethods"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GET, DELETE, POST, PUT, OPTIONS"')]),e._v(" allowedOrigins"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),e._v(" allowedHeaders"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),e._v(" domain"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("FOR")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("TESTING")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("ONLY")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])},[],!1,null,null,null);t.default=o.exports}}]);