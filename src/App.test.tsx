import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App component", () => {
  it("should render component", () => {
    render(<App />);
    const mainContainer = screen.getByTestId("main");
    expect(mainContainer).toBeInTheDocument();
  });
});
