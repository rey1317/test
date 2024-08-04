(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
console.log("Script loaded");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  initializeRippleEffect();
  initializeContentEditable();
  initializeDownloadPDFButton();
});
function initializeRippleEffect() {
  console.log("Initializing ripple effect");
  document.addEventListener("pointerdown", handlePointerDown);
}
function handlePointerDown(mouseEvent) {
  console.log("Pointer down event", mouseEvent);
  const elementWithRipple = mouseEvent.target.closest(".ripple-effect");
  if (elementWithRipple) {
    console.log("Ripple effect element found");
    createRipple(elementWithRipple, mouseEvent);
  } else {
    console.log("No ripple effect element found");
  }
}
function createRipple(elementWithRipple, mouseEvent) {
  const rippleEl = document.createElement("div");
  rippleEl.classList.add("ripple");
  console.log("Creating ripple element", rippleEl);
  const { left, top } = elementWithRipple.getBoundingClientRect();
  const x = mouseEvent.clientX - left - 10;
  const y = mouseEvent.clientY - top - 10;
  setPosition(rippleEl, x, y);
  appendRipple(elementWithRipple, rippleEl);
}
function setPosition(rippleEl, x, y) {
  rippleEl.style.left = `${x}px`;
  rippleEl.style.top = `${y}px`;
  console.log(`Setting ripple position: (${x}, ${y})`);
}
function appendRipple(elementWithRipple, rippleEl) {
  elementWithRipple.appendChild(rippleEl);
  console.log("Appending ripple to element", elementWithRipple);
  requestAnimationFrame(() => {
    rippleEl.classList.add("run");
    console.log("Adding run class to ripple", rippleEl);
  });
  rippleEl.addEventListener("transitionend", () => {
    rippleEl.remove();
    console.log("Ripple transition ended and removed", rippleEl);
  });
}
function initializeContentEditable() {
  console.log("Initializing content editable");
  document.querySelectorAll('[contenteditable="true"]').forEach(setupContentEditable);
}
function setupContentEditable(element) {
  const key = element.getAttribute("data-key");
  if (!key) {
    console.error("Element does not have a data-key:", element);
    return;
  }
  const savedData = localStorage.getItem(key);
  if (savedData) {
    element.innerText = savedData;
  }
  element.addEventListener(
    "input",
    () => handleContentEditableInput(element, key)
  );
}
function handleContentEditableInput(element, key) {
  localStorage.setItem(key, element.innerText);
  markAsEdited(element);
}
function markAsEdited(element) {
  element.classList.add("edited");
  console.log("Element marked as edited", element);
  setTimeout(() => {
    element.classList.remove("edited");
    console.log("Edited class removed from element", element);
  }, 150);
}
function initializeDownloadPDFButton() {
  console.log("Initializing download PDF button");
  const downloadBtn = document.getElementById("download-pdf");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", downloadPDF);
  }
}
function downloadPDF() {
  console.log("Downloading PDF");
  const element = document.getElementById("app");
  const opt = getPDFOptions();
  html2pdf().from(element).set(opt).save();
}
function getPDFOptions() {
  return {
    margin: 1,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" }
  };
}
