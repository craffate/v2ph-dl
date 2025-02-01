'use strict';

const btn = document.createElement("button");
const nav = document.querySelectorAll("nav")[1];
const pageNavElements = Array.from(nav.querySelectorAll("li.page-item"));
const activeNavElement = pageNavElements.find(pl => pl.classList.contains("active"));
const photos = document.querySelectorAll("img.album-photo");

btn.type = "button";
btn.textContent = "Download images";
btn.className = "btn btn-outline-primary btn-block";

btn.addEventListener('click', () => {
  let idx = 0;

  while (idx < photos.length) {
    const datasrc = photos[idx].getAttribute("data-src");

    browser.runtime.sendMessage({
      name: idx + 1 + (activeNavElement.firstElementChild.textContent * 10 - 10),
      extension: datasrc.split('.').pop(),
      url: datasrc
    });
    idx += 1;
  }
});

nav.parentNode.appendChild(btn);