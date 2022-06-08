import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Login } from "../login";
import { act } from "react-dom/test-utils";

describe("Login page", () => {
  it("Should render login page", () => {
    act(() => {
      render(<Login />);
    });
    expect(screen.getByText("Log in to Twitter.")).toBeInTheDocument();
  });
});
