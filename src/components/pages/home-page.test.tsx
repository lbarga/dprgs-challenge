import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "./home-page";

describe("HomePage", () => {
  it("should render the correct title", () => {
    render(<HomePage />);
    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement).toHaveTextContent("Home");
  });

  it("should render the button with the correct text", () => {
    render(<HomePage />);
    const buttonElement = screen.getByRole("button", { name: "Hello World" });
    expect(buttonElement).toBeInTheDocument();
  });
});
