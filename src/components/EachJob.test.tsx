import { render, screen } from "@testing-library/react";
import EachJob from "./EachJob";

test("should render applications", () => {
  render(<EachJob />);

  const aside = screen.getByRole("complementary");

  expect(aside).toBeInTheDocument();
});
