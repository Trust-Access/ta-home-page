import "@testing-library/jest-dom";
import { beforeEach, vi } from "vitest";

let currentPath = "/pt";
export const routerPush = vi.fn((path: string) => {
  currentPath = path;
});

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPush }),
  usePathname: () => currentPath,
}));

vi.mock('server-only', () => ({}));

beforeEach(() => {
  routerPush.mockClear();
  currentPath = "/pt";
});

// Polyfills for Radix UI components in JSDOM
window.HTMLElement.prototype.scrollIntoView = function () {};
window.HTMLElement.prototype.hasPointerCapture = function () {
  return false;
};
