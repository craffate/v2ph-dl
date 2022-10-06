browser.runtime.onMessage.addListener((msg) => {
  browser.downloads.download({
    url: msg.url,
    filename: `${msg.name}.${msg.extension}`,
    saveAs: false
  });
});