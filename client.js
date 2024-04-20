const i = document.createElement("link");
//i.href = "https://cdn.jsdelivr.net/gh/maprangsoft/test-run-winget@main/bundle.css",
i.href = "./bundle.css",
i.type = "text/css",
i.rel = "stylesheet",

document.getElementsByTagName("head")[0].appendChild(i)

import './bundle.js'
