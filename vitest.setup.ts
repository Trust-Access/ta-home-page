import "@testing-library/jest-dom";
import { vi } from "vitest";

let currentPath = "/pt";
export const routerPush = vi.fn((path: string) => {
  currentPath = path;
});

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPush }),
  usePathname: () => currentPath,
}));

beforeEach(() => {
  routerPush.mockClear();
  currentPath = "/pt";
});

// Polyfills for Radix UI components in JSDOM
window.HTMLElement.prototype.scrollIntoView = function () {};
window.HTMLElement.prototype.hasPointerCapture = function () {
  return false;
};
