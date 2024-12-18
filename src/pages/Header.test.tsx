import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render title and input element", () => {
    render(<Header />);

    const h1 = screen.getByRole("heading");
    const searchBox = screen.getByRole("searchbox");
    const placeholderBox = screen.getByPlaceholderText(/search app/i);

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/job hunt app/i);

    expect(searchBox).toBeInTheDocument();
    expect(placeholderBox).toBeDefined();
  });
});
