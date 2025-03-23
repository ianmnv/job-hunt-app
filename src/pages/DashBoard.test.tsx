import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { mockData } from "../mocks/mockApplications";
import DashBoard from "./DashBoard";

describe("DashBoard", () => {
  beforeEach(() => {
    renderWithProviders(<DashBoard />, {
      preloadedState: { application: mockData },
    });
  });

  it("should render title", () => {
    const h1 = screen.getByRole("heading", { name: /dashboard/i });

    expect(h1).toBeInTheDocument();
  });

  it("buttons flow", async () => {
    const allBtns = screen.getAllByRole("button");

    const buttonToContentMap = {
      applied: /Applied to TestCo/i,
      offers: /Offer from DevCorp/i,
      upcoming: /Upcoming interview on 2025-01-02/i,
      rejected: /Rejected from CompanyRejected/i,
      pending: /Pending application from CompanyPending/i,
    };

    expect(allBtns).toHaveLength(5);

    for (const [btnText, expectedContent] of Object.entries(
      buttonToContentMap
    )) {
      const btn = allBtns.find((btn) =>
        btn.textContent?.toLowerCase().includes(btnText)
      );
      expect(btn).toBeDefined();
      expect(btn).toBeInTheDocument();

      if (btn) {
        fireEvent.click(btn);

        const link = await screen.findByRole("link", { name: expectedContent });
        expect(link).toBeInTheDocument();

        expect(link.tagName.toLowerCase()).toBe("a");
        expect(link).toHaveAttribute("href");
      }
    }
  });

  it("should check textarea and label", () => {
    const textarea = screen.getByRole("textbox", { name: /notes/i });

    expect(textarea).toBeInTheDocument();
  });
});
