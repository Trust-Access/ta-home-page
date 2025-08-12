import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LanguageSwitcher from "@/components/atoms/language-switcher";
import { I18nProvider } from "@/lib/i18n";
import { routerPush } from "@/vitest.setup";

describe("LanguageSwitcher", () => {
  beforeEach(() => {
    localStorage.clear();
    routerPush.mockClear();
  });

  it("allows keyboard navigation to change language", async () => {
    const user = userEvent.setup();
    render(
      <I18nProvider>
        <LanguageSwitcher />
      </I18nProvider>,
    );

    const trigger = screen.getByRole("combobox");
    await screen.findByText("Português");
    trigger.focus();
    await user.keyboard("{Enter}");
    await user.keyboard("{ArrowUp}{ArrowUp}{Enter}");
    await screen.findByText("English");
    expect(trigger).toHaveTextContent("English");
    expect(localStorage.getItem("locale")).toBe("en");
    expect(routerPush).toHaveBeenCalledWith("/en");
  });

  it("renders options with accessible labels", async () => {
    const user = userEvent.setup();
    render(
      <I18nProvider>
        <LanguageSwitcher />
      </I18nProvider>,
    );

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);
    expect(
      await screen.findByRole("option", { name: "English" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("option", { name: "Español" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("option", { name: "Português" }),
    ).toBeInTheDocument();
  });
});
