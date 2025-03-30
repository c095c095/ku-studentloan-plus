chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const actions = {
    injectScript: () => injectScript(message.scriptPath, sender.tab?.id, sendResponse),
    injectCSS: () => injectCSS(message.css, sender.tab?.id, sendResponse),
    createImageUrl: () => createImageUrl(message.imagePath, sendResponse),
  };

  if (actions[message.action]) {
    actions[message.action]();
    return true;
  }

  console.warn(`Unknown action: ${message.action}`);
  sendResponse({ status: "failed", error: "Unknown action" });
  return false;
});

function injectScript(scriptPath, tabId, sendResponse) {
  if (!tabId) {
    console.error("No tab ID provided for script injection.");
    sendResponse({ status: "failed", error: "Invalid tab ID" });
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId },
    files: [scriptPath],
  }, (results) => {
    if (chrome.runtime.lastError) {
      console.error("Injection error:", chrome.runtime.lastError);
      sendResponse({ status: "failed", error: chrome.runtime.lastError.message });
    } else {
      console.log(`Script ${scriptPath} injected into tab ${tabId}.`, results);
      sendResponse({ status: "success" });
    }
  });
}

function injectCSS(css, tabId, sendResponse) {
  if (!tabId) {
    console.error("No tab ID provided for CSS injection.");
    sendResponse({ status: "failed", error: "Invalid tab ID" });
    return;
  }

  chrome.scripting.insertCSS({
    target: { tabId },
    css: css,
  }, () => {
    if (chrome.runtime.lastError) {
      console.error("CSS injection error:", chrome.runtime.lastError);
      sendResponse({ status: "failed", error: chrome.runtime.lastError.message });
    } else {
      console.log(`CSS injected into tab ${tabId}.`);
      sendResponse({ status: "success" });
    }
  });
}

function createImageUrl(imagePath, sendResponse) {
  if (!imagePath) {
    console.error("Image path is required.");
    sendResponse({ status: "failed", error: "Image path is missing" });
    return;
  }

  try {
    const url = chrome.runtime.getURL(imagePath);
    sendResponse({ status: "success", url });
  } catch (error) {
    console.error("URL creation error:", error);
    sendResponse({ status: "failed", error: error.message });
  }
}
