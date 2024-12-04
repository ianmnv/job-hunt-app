import { render, RenderResult } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import EachJob from "./EachJob";

describe("Test sidebar ListJobs component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<EachJob />);
  });

  it("should render component", () => {
    const { getByRole } = component;
    expect(getByRole("contentInfo")).toBeInTheDocument();
  });
});
