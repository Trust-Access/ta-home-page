import "@testing-library/jest-dom";

// Polyfills for Radix UI components in JSDOM
window.HTMLElement.prototype.scrollIntoView = function () {};
window.HTMLElement.prototype.hasPointerCapture = function () {
  return false;
};
