import { describe, it, expect, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("Footer component", () => {
  it("renders the footer element", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders the dress.me logo", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(screen.getByText("dress.me")).toBeInTheDocument();
  });

  it("renders the Discover section", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(screen.getByText("Discover")).toBeInTheDocument();
    expect(screen.getByText("New Arrivals")).toBeInTheDocument();
    expect(screen.getByText("Best Sellers")).toBeInTheDocument();
  });

  it("renders the Support section", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Order Status")).toBeInTheDocument();
    expect(screen.getByText("FAQs")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("renders the Subscribe section", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(screen.getByText("Subscribe to our newsletter")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(screen.getByText("Subscribe")).toBeInTheDocument();
  });

  it("calls the scrollToTop function when New Arrivals is clicked", () => {
    const scrollToTop = vitest.fn();
    window.scrollTo = scrollToTop;
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    screen.getByText("New Arrivals").click();
    expect(scrollToTop).toHaveBeenCalledTimes(1);
  });

  it("calls the scrollToTop function when Best Sellers is clicked", () => {
    const scrollToTop = vitest.fn();
    window.scrollTo = scrollToTop;
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    screen.getByText("Best Sellers").click();
    expect(scrollToTop).toHaveBeenCalledTimes(1);
  });

  it("displays an alert when About Us is clicked", () => {
    window.alert = vitest.fn();
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    screen.getByText("About Us").click();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  it("displays an alert when Careers is clicked", () => {
    window.alert = vitest.fn();
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    screen.getByText("Careers").click();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  it("displays an alert when Order Status is clicked", () => {
    window.alert = vitest.fn();
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    screen.getByText("Order Status").click();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  it("displays an alert when FAQs is clicked", () => {
    window.alert = vitest.fn();
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    screen.getByText("FAQs").click();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  it("displays an alert when Contact Us is clicked", () => {
    window.alert = vitest.fn();
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    screen.getByText("Contact Us").click();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  it("displays an alert when Subscribe is clicked", () => {
    window.alert = vitest.fn();
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    screen.getByText("Subscribe").click();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
});
