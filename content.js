function loadScript(scriptPath) {
  chrome.runtime.sendMessage({ action: "injectScript", scriptPath }, (response) => {
    if (response?.status === "success") {
      console.log(`✅ Script loaded: ${scriptPath}`);
    } else {
      console.error(`❌ Failed to load script: ${scriptPath}`);
    }
  });
}

const scriptMap = {
  "/Fha/index.php": "pages/index.js",
  "/Fha": "pages/index.js",
  "/Fha/": "pages/index.js",
  "/Fha/user/index.php": {
    default: "pages/user-index.js",
    pj : "pages/pj.js",
    add: "pages/add.js",
    rck: "pages/rck.js",
    uploadfile: "pages/uploadfile.js",
    listactivity: "pages/listactivity.js",
    showactivity: "pages/showactivity.js",
    passactivity: "pages/passactivity.js",
    datauser: "pages/datauser.js",
  },
};

function handleScriptInjection() {
  const { pathname, search } = window.location;

  if (scriptMap[pathname]) {
    const scriptConfig = scriptMap[pathname];

    if (typeof scriptConfig === "string") {
      loadScript(scriptConfig);
    } else if (typeof scriptConfig === "object") {
      const page = new URLSearchParams(search).get("page") || "default";
      const scriptPath = scriptConfig[page];

      if (scriptPath) {
        loadScript(scriptPath);
      } else {
        console.warn(`⚠️ No script mapped for page parameter: "${page}"`);
      }
    }
  } else {
    console.info(`ℹ️ No script mapped for pathname: "${pathname}"`);
  }
}

document.addEventListener("DOMContentLoaded", handleScriptInjection);
