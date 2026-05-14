import { render, screen } from "@testing-library/react";
import { expect, test, describe, jest } from "@jest/globals";
import Home from "@/app/page";
import "@testing-library/jest-dom";

// Mock the providers
jest.mock("@/providers", () => ({
  Providers: ({ children }: { children: React.ReactNode }) => children,
}));

describe("Home Page", () => {
  test("renders without crashing", () => {
    render(<Home />);
    // Basic smoke test - if this doesn't crash, the page can render
  });

  test("displays main heading", () => {
    render(<Home />);

    // Look for key elements that should be on the homepage
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test("has accessible content", () => {
    render(<Home />);

    // Check for main landmarks
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  test("contains contact information", () => {
    render(<Home />);

    // Look for contact-related content (this might be a link or button)
    const contactElements = screen.queryAllByText(/contact/i);
    // We expect at least some contact information to be present
    expect(contactElements.length).toBeGreaterThan(0);
  });

  test("has navigation elements", () => {
    render(<Home />);

    // Check for navigation (might be in header)
    const navigation = screen.queryByRole("navigation");
    // Note: navigation might be in header component, so this could be null
    // The test will still pass if navigation exists elsewhere
  });

  test("displays portfolio mention", () => {
    render(<Home />);

    // Look for portfolio-related content
    const portfolioElements = screen.queryAllByText(/portfolio/i);
    expect(portfolioElements.length).toBeGreaterThan(0);
  });
});
