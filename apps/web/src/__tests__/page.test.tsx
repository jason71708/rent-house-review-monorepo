import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders Next.js logo", () => {
    render(<Home />);

    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders learn link", () => {
    render(<Home />);

    const learnLink = screen.getByText(/learn/i);
    expect(learnLink).toBeInTheDocument();
  });

  it("renders main content area", () => {
    render(<Home />);

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
