import { getAllByTestId, render, RenderResult } from "@testing-library/react";
import DashBoard from "./DashBoard";

describe("DashBoard", () => {
  let sut: RenderResult;

  beforeEach(() => {
    sut = render(<DashBoard />);
  });

  it("should render title", () => {
    const { getByRole } = sut;

    const h1 = getByRole("heading");

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/overview/i);
  });

  it("should render metrics container & p elements", () => {
    const { getByTestId } = sut;
    const overallCont = getByTestId("overall-results-cont");

    const allPElements = getAllByTestId(overallCont, "overall-results");
    const expectedValues = [/applied/i, /offers/i, /rejected/i];

    expect(allPElements).toHaveLength(3);
    allPElements.forEach((el, i) => {
      expect(el).toHaveTextContent(expectedValues[i]);
    });

    // it("should render nav & buttons", () => {});
  });
});
