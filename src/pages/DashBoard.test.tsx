import { fireEvent, render, screen } from "@testing-library/react";
import type Application from "../index";
import MainContext from "../MainContext";
import DashBoard from "./DashBoard";

const mockData: Application[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TestCo",
    country: "US",
    salaryOffered: 100000,
    salaryWanted: 110000,
    requirements: "React, TypeScript",
    applicationDate: "2025-01-02",
    technologies: ["React", "TypeScript"],
    status: "applied",
    link: "https://example.com",
    benefits: ["Health", "401k"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "DevCorp",
    country: "US",
    salaryOffered: 95000,
    salaryWanted: 100000,
    requirements: "React, JavaScript",
    applicationDate: "2025-01-02",
    technologies: ["React", "JavaScript"],
    status: "offers",
    link: "https://example.com",
    benefits: ["benefits"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "CopmanyUpcoming",
    country: "US",
    salaryOffered: 95000,
    salaryWanted: 100000,
    requirements: "React, JavaScript",
    applicationDate: "2025-01-02",
    technologies: ["React", "JavaScript"],
    status: "upcoming",
    link: "https://example.com",
    benefits: ["benefits"],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "CompanyRejected",
    country: "US",
    salaryOffered: 95000,
    salaryWanted: 100000,
    requirements: "React, JavaScript",
    applicationDate: "2025-01-02",
    technologies: ["React", "JavaScript"],
    status: "rejected",
    link: "https://example.com",
    benefits: ["benefits"],
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "CompanyPending",
    country: "US",
    salaryOffered: 95000,
    salaryWanted: 100000,
    requirements: "React, JavaScript",
    applicationDate: "2025-01-02",
    technologies: ["React", "JavaScript"],
    status: "pending",
    link: "https://example.com",
    benefits: ["benefits"],
  },
];

describe("DashBoard", () => {
  beforeEach(() => {
    render(
      <MainContext.Provider value={mockData}>
        <DashBoard />
      </MainContext.Provider>
    );
  });

  it("should render title", () => {
    const h1 = screen.getByRole("heading", { name: /overview/i });

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

        // Verify a link appears with correct text
        const link = await screen.findByRole("link", { name: expectedContent });
        expect(link).toBeInTheDocument();

        // // Verify it's an anchor tag with correct attributes
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
