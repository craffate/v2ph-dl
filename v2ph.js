'use strict';

const btn = document.createElement("button");
const nav = document.querySelectorAll("nav")[1];
const pageNavElements = Array.from(nav.querySelectorAll("li.page-item"));
const activeNavElement = pageNavElements.find(pl => pl.classList.contains("active"));
const activePageNumber = activeNavElement.firstElementChild.textContent
const nextNavElement = pageNavElements.find(pl => pl.firstElementChild.textContent === "Next")
const photos = document.querySelectorAll("img.album-photo");

function sendDownloadMessage() {
  let idx = 0;

  while (idx < photos.length) {
    const datasrc = photos[idx].getAttribute("data-src");

    browser.runtime.sendMessage({
      name: idx + 1 + (activePageNumber * 10 - 10),
      extension: datasrc.split('.').pop(),
      url: datasrc,
      isLastPage: nextNavElement ? false : true
    });
    idx += 1;
  }
}

btn.type = "button";
btn.textContent = "Download images";
btn.className = "btn btn-outline-primary btn-block";

sendDownloadMessage();

btn.addEventListener('click', () => {
  browser.runtime.sendMessage(true);
  sendDownloadMessage();
});

if (activePageNumber === "1") {
  nav.parentNode.appendChild(btn);
}