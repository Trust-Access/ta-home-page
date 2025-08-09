import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModeToggle from "@/components/atoms/ui/mode-toggle";
import { ThemeProvider } from "@/components/templates/theme-provider";
import { vi } from "vitest";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe("ModeToggle", () => {
  beforeEach(() => {
    document.documentElement.className = "";
    localStorage.clear();
  });

  it("applies dark class to html when dark mode is selected", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <ModeToggle />
      </ThemeProvider>,
    );
    const button = screen.getByRole("button", { name: /toggle theme/i });
    await user.click(button);
    await user.click(await screen.findByText("Dark"));
    expect(document.documentElement).toHaveClass("dark");
  });
});
