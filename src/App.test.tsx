import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App component", () => {
  let appContainer: HTMLElement;

  function setup() {
    appContainer = render(<App />).container;
  }

  beforeEach(() => {
    setup();
  });

  it("should render component", () => {
    const mainContainer = screen.getByTestId("main");
    expect(mainContainer).toBeInTheDocument();
  });

  it("should display Hello World!", () => {});
});
