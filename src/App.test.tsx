import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  render(<App />);

  it("should render header & main containers", () => {
    const header = screen.getByRole("heading", { name: /job hunt app/i });
    const main = screen.getByRole("main");

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
