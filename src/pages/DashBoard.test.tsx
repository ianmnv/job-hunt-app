import { getAllByTestId, render, RenderResult } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import DashBoard from "./DashBoard";

describe("Test sidebar ListJobs component", () => {
  let sut: RenderResult;

  beforeEach(() => {
    sut = render(<DashBoard />);
  });

  it("should render component & title", () => {
    const { getByRole } = sut;
    const mainContainer = getByRole("main");
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveTextContent("OVERVIEW");
  });

  it("should render metrics container & p elements", () => {
    const { getByTestId } = sut;
    const mainContainer = getByTestId("main-content");
    const overallCont = getByTestId("overall-metrics-cont");
    const allPElements = getAllByTestId(overallCont, "overall-results");

    expect(mainContainer).toContainElement(overallCont);
    expect(allPElements).toBeTruthy();
    expect(allPElements).toBeDefined();
  });
});
