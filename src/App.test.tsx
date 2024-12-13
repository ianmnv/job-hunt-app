import { render, RenderResult } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  let sut: RenderResult;

  beforeEach(() => {
    sut = render(<App />);
  });

  it("should render app-container & main containers", () => {
    const { getByRole, getByTestId } = sut;

    expect(getByTestId("app-container")).toBeInTheDocument();
    expect(getByRole("main")).toBeInTheDocument();
  });
});
