import { render, RenderResult } from "@testing-library/react";
import EachJob from "./EachJob";

describe("EachJob", () => {
  let sut: RenderResult;

  beforeEach(() => {
    sut = render(<EachJob />);
  });

  it("should render text", () => {
    const { getByText } = sut;

    expect(getByText(/individual/i)).toBeInTheDocument();
  });
});
