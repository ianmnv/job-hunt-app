import { render, RenderResult } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  let sut: RenderResult;

  beforeEach(() => {
    sut = render(<Header />);
  });

  it("should render title component", () => {
    const h1 = sut.getByRole("heading");

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/job hunt app/i);
  });

  it("should render section and input element", () => {
    const { getByPlaceholderText } = sut;

    expect(
      getByPlaceholderText(/search application, job title/i)
    ).toBeDefined();
  });
});
