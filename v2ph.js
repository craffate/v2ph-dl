'use strict';

const btn = document.createElement("button");
const nav = document.querySelectorAll("nav")[1];
const activePageLink = nav.querySelector("li.page-item.active a.page-link");
const photos = document.querySelectorAll("img.album-photo");

btn.type = "button";
btn.textContent = "Download images";
btn.className = "btn btn-outline-primary btn-block";

btn.addEventListener('click', () => {
  let idx = 0;

  while (idx < photos.length) {
    const datasrc = photos[idx].getAttribute("data-src");

    browser.runtime.sendMessage({
      name: idx + 1 + (activePageLink.innerHTML * 10 - 10),
      extension: datasrc.split('.').pop(),
      url: datasrc
    });
    idx += 1;
  }
});

nav.parentNode.appendChild(btn);