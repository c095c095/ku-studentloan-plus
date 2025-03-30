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

document.addEventListener("DOMContentLoaded", () => {
  const injectStyles = () => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap';
    document.head.appendChild(fontLink);

    const fontStyles = `
      * {
        font-family: 'Sarabun', sans-serif !important;
      }
    `;

    chrome.runtime.sendMessage({ 
      action: "injectCSS", 
      css: fontStyles 
    }, (response) => {
      if (response?.status === "success") {
        console.log("✅ Styles injected");
      } else {
        console.error("❌ Failed to inject styles");
      }
    });
  }

  handleScriptInjection();
  injectStyles();
});
