"use strict";

let shouldDownload = false

browser.runtime.onMessage.addListener((msg) => {
  if (msg === true) {
    shouldDownload = true;
  } else if (shouldDownload) {
    browser.downloads.download({
      url: msg.url,
      filename: `${msg.name}.${msg.extension}`,
      saveAs: false
    });
    if (msg.isLastPage) {
      shouldDownload = false;
    }
  }
});