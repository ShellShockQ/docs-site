(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{370:function(e,t,o){"use strict";o.r(t);var a=o(3),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"updating-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-zowe-cli"}},[e._v("#")]),e._v(" Updating Zowe CLI ")]),e._v(" "),o("p",[e._v("Zowe™ CLI is updated continuously. You can update Zowe CLI to a more recent version using online registry method or the local package method. However, you can only update Zowe CLI using the method that you used to install Zowe CLI.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#migrating-to-long-term-support-lts-version"}},[e._v("Migrating to Long-term Support (LTS) version")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#identify-the-currently-installed-version-of-zowe-cli"}},[e._v("Identify the currently installed version of Zowe CLI")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#identify-the-currently-installed-versions-of-zowe-cli-plug-ins"}},[e._v("Identify the currently installed versions of Zowe CLI plug-ins")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#update-zowe-cli-from-the-online-registry"}},[e._v("Update Zowe CLI from the online registry")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#update-or-revert-zowe-cli-to-a-specific-version"}},[e._v("Update or revert Zowe CLI to a specific version")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#update-zowe-cli-from-a-local-package"}},[e._v("Update Zowe CLI from a local package")])])]),e._v(" "),o("h2",{attrs:{id:"migrating-to-long-term-support-lts-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-long-term-support-lts-version"}},[e._v("#")]),e._v(" Migrating to Long-term Support (LTS) version")]),e._v(" "),o("p",[e._v("If you have an "),o("code",[e._v("@lts-incremental")]),e._v(" version of Zowe CLI (Zowe v1.0.x - v1.8.x), you can update to "),o("code",[e._v("@zowe-v1-lts")]),e._v(" (LTS version) to leverage new functionality and plug-ins.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" Copy the contents of "),o("code",[e._v("~/.zowe/profiles")]),e._v(" or "),o("code",[e._v("%homepath%\\.zowe\\profiles")]),e._v(" to another directory on your computer to preserve your existing user profiles (zosmf, cics, db2, etc..).")])]),e._v(" "),o("li",[o("p",[e._v("Delete the "),o("code",[e._v("~/.zowe/plugins")]),e._v(" or "),o("code",[e._v("%homepath%\\.zowe\\plugins")]),e._v(" directory to uninstall all plug-ins.")])]),e._v(" "),o("li",[o("p",[e._v("Uninstall the pre-LTS version of core CLI. Issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe uninstall -g @brightside/core\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" You might recieve an "),o("code",[e._v("ENOENT")]),e._v(" error when issuing this command if you installed Zowe CLI from a local package (.tgz) and the package was moved from its original location. In the event    that you recieve the error, open an issue in the   Zowe CLI GitHub repository.")])]),e._v(" "),o("li",[o("p",[e._v("Install the most recent "),o("code",[e._v("@zowe-v1-lts")]),e._v(" version CLI and optional plug-ins. For more information, see "),o("router-link",{attrs:{to:"/user-guide/cli-installcli.html"}},[e._v("Installing CLI")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" Reestablish your user profiles. Move the profile configuration files that you saved in Step 1 into the "),o("code",[e._v("~/.zowe/profiles")]),e._v(" or "),o("code",[e._v("%homepath%\\.zowe\\profiles")]),e._v(" folder on your computer.")])])]),e._v(" "),o("p",[e._v("You updated to the Zowe CLI LTS version!")]),e._v(" "),o("p",[e._v("Ensure that you review the "),o("router-link",{attrs:{to:"/getting-started/summaryofchanges.html"}},[e._v("Release Notes")]),e._v(", which describes "),o("strong",[e._v("Notable Changes")]),e._v(" in this version. We recommend issuing familiar commands and running scripts to ensure that your profiles/scripts are compatible. You might need to take corrective action to address the breaking changes.")],1),e._v(" "),o("h2",{attrs:{id:"identify-the-currently-installed-version-of-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#identify-the-currently-installed-version-of-zowe-cli"}},[e._v("#")]),e._v(" Identify the currently installed version of Zowe CLI")]),e._v(" "),o("p",[e._v("Issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe -V\n")])])]),o("h2",{attrs:{id:"identify-the-currently-installed-versions-of-zowe-cli-plug-ins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#identify-the-currently-installed-versions-of-zowe-cli-plug-ins"}},[e._v("#")]),e._v(" Identify the currently installed versions of Zowe CLI plug-ins")]),e._v(" "),o("p",[e._v("Issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe plugins list\n")])])]),o("h2",{attrs:{id:"update-zowe-cli-from-the-online-registry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-zowe-cli-from-the-online-registry"}},[e._v("#")]),e._v(" Update Zowe CLI from the online registry")]),e._v(" "),o("p",[e._v("You can update Zowe CLI to the latest version from the online registry on Windows, Mac, and Linux computers.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" The following steps assume that you previously installed the CLI as described in "),o("router-link",{attrs:{to:"/user-guide/cli-installcli.html#installing-zowe-cli-from-an-online-registry"}},[e._v("Installing Zowe CLI from an online registry")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("To update Zowe CLI to the most recent "),o("code",[e._v("@zowe-v1-lts")]),e._v(" version, issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm install -g @zowe/cli@zowe-v1-lts\n")])])])]),e._v(" "),o("li",[o("p",[e._v("To update existing plug-ins and install new plug-ins, issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe plugins install @zowe/cics-for-zowe-cli@zowe-v1-lts @zowe/db2-for-zowe-cli@zowe-v1-lts @zowe/ims-for-zowe-cli@zowe-v1-lts @zowe/mq-for-zowe-cli@zowe-v1-lts @zowe/zos-ftp-for-zowe-cli@zowe-v1-lts @zowe/secure-credential-store-for-zowe-cli@zowe-v1-lts\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Recreate any user profiles that you created before you updated to the latest version of Zowe CLI.")])])]),e._v(" "),o("h2",{attrs:{id:"update-or-revert-zowe-cli-to-a-specific-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-or-revert-zowe-cli-to-a-specific-version"}},[e._v("#")]),e._v(" Update or revert Zowe CLI to a specific version")]),e._v(" "),o("p",[e._v("Optionally, you can update Zowe CLI (or revert) to a known version. The following example illustrates the syntax to update Zowe CLI to version 6.1.2:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm install -g @zowe/cli@6.1.2\n")])])]),o("h2",{attrs:{id:"update-zowe-cli-from-a-local-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-zowe-cli-from-a-local-package"}},[e._v("#")]),e._v(" Update Zowe CLI from a local package")]),e._v(" "),o("p",[e._v("To update Zowe CLI from an offline ("),o("code",[e._v(".tgz")]),e._v("), local package, uninstall your current package then reinstall from a new package using the Install from a Local package instructions. For more information, see "),o("router-link",{attrs:{to:"/user-guide/cli-uninstall.html"}},[e._v("Uninstalling Zowe CLI from the desktop")]),e._v(" and "),o("router-link",{attrs:{to:"/user-guide/cli-installcli.html#installing-zowe-cli-from-a-local-package"}},[e._v("Installing Zowe CLI from a local package")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("Important!")]),e._v(" Recreate any user profiles that you created before the update.")])])}),[],!1,null,null,null);t.default=r.exports}}]);