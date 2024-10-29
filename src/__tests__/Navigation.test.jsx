import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navigation";

describe("Navbar component", () => {
  it("should have the correct class and styles", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toHaveClass(
      "fixed left-0 top-0 z-50 flex h-12 w-full items-center justify-evenly bg-[#181a1b] text-white shadow-md",
    );
  });

  it("should contain the expected elements", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toContainElement(screen.getByText("dress.me"));
    expect(navbar).toContainElement(
      screen.getByRole("button", { name: "Shop" }),
    );
    expect(navbar).toContainElement(
      screen.getByRole("button", { name: "cart ( )" }),
    );
  });

  it("should have the correct text on shop dropdown", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const shopButton = screen.getByRole("button", { name: "Shop" });
    expect(shopButton).toHaveTextContent("Shop");
  });

  it("should have the correct text(count) on cart button", async () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    await waitFor(() => {
      const cartButton = screen.getByRole("button", { name: "cart ( )" });
      expect(cartButton).toHaveTextContent("( )");
      expect(cartButton).toHaveTextContent("cart");
    });
  });
});
