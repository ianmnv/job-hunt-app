import { render, RenderResult } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import ListJobs from "./ListJobs";

describe("Test sidebar ListJobs component", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<ListJobs />);
  });

  it("should render component", () => {
    const { getByTestId } = component;
    expect(getByTestId("sideBar")).toBeDefined();
  });

  it("should render child component", () => {
    const { getByRole } = component;
    expect(getByRole("contentInfo")).toBeInTheDocument();
  });
});
