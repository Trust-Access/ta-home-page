import React from "react";
import userEvent from "@testing-library/user-event";
import LanguageSwitcher from "@/components/atoms/language-switcher";
import { render, screen } from "@/test/test-utils";
import { routerPush } from "@/vitest.setup";

describe("LanguageSwitcher", () => {
  beforeEach(() => {
    routerPush.mockClear();
  });

  it("changes language when selecting an option", async () => {
    const user = userEvent.setup();
    render(
      <LanguageSwitcher
        locale="pt"
        languages={[
          { value: "en", label: "English", flag: "🇺🇸" },
          { value: "es", label: "Español", flag: "🇪🇸" },
          { value: "pt", label: "Português", flag: "🇧🇷" },
        ]}
      />,
    );

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);
    await user.click(await screen.findByRole("option", { name: "English" }));
    expect(routerPush).toHaveBeenCalledWith("/en");
  });

  it("renders options with accessible labels", async () => {
    const user = userEvent.setup();
    render(
      <LanguageSwitcher
        locale="pt"
        languages={[
          { value: "en", label: "English", flag: "🇺🇸" },
          { value: "es", label: "Español", flag: "🇪🇸" },
          { value: "pt", label: "Português", flag: "🇧🇷" },
        ]}
      />,
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
