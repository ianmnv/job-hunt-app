import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Header from "./Header";

describe("Testing Header component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render title component", () => {
    const header = screen.getByText("Job Hunt App");
    expect(header).toBeInTheDocument();
  });

  it("should render section and input element", () => {
    const headerComponent = screen.getByRole("headerSection");
    expect(headerComponent).toBeInTheDocument();

    const input = screen.getByTestId("inputSearch");
    expect(headerComponent).toContainElement(input);
  });
});
