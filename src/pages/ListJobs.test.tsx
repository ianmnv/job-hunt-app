import { render, RenderResult } from "@testing-library/react";
import ListJobs from "./ListJobs";

describe("ListJobs", () => {
  let sut: RenderResult;

  beforeEach(() => {
    sut = render(<ListJobs />);
  });

  it("should render child component", () => {
    const { getByTestId } = sut;
    expect(getByTestId("eachJob")).toBeInTheDocument();
  });
});
