import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { mockData } from "../mocks/mockApplications";
import EachJob from "./EachJob";

describe("<EachJob />", () => {
  beforeEach(() => {
    renderWithProviders(<EachJob />, {
      preloadedState: { application: mockData },
    });
  });

  it("should render job applications", () => {
    const aside = screen.getByRole("complementary");
    expect(aside).toBeInTheDocument();
  });
});
