import { fireEvent, render, screen } from "@testing-library/react";
import DashBoard from "./DashBoard";

describe("DashBoard", () => {
  beforeEach(() => {
    render(<DashBoard />);
  });

  it("should render title", () => {
    const h1 = screen.getByRole("heading", { name: /overview/i });

    expect(h1).toBeInTheDocument();
  });

  it("should render navigation, buttons & buttons flow", () => {
    const allBtns = screen.getAllByRole("button");
    const labels = [/applied/i, /offer/i, /upcoming/i, /rejected/i, /pending/i];

    const navEl = screen.getByRole("navigation");

    const sectionEl = screen.getByRole("region", { name: /overview section/i });
    const anchors = screen.getByRole("link");

    expect(navEl).toBeInTheDocument();
    expect(sectionEl).toBeInTheDocument();

    expect(allBtns).toHaveLength(labels.length);
    allBtns.forEach((el, i) => {
      expect(el).toHaveTextContent(labels[i]);

      fireEvent.click(el);
      expect(anchors).toHaveTextContent(labels[i]);
    });
  });

  it("should check textarea and label", () => {
    const textarea = screen.getByRole("textbox", { name: /notes/i });

    expect(textarea).toBeInTheDocument();
  });
});
