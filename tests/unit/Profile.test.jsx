import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Profile } from "../../src/components/Profile.jsx";

describe("Profile", () => {
  it("renders nothing when no user", () => {
    const { container } = render(<Profile user={null} position={"-"} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders name, level, and position", () => {
    render(<Profile user={{ firstName: "Sipho", lastName: "M", level: "Tile Tactician" }} position={2} />);
    expect(screen.getByText(/Sipho M/)).toBeInTheDocument();
    expect(screen.getByText(/Tile Tactician/)).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("uses the default avatar when avatarUrl missing", () => {
    render(<Profile user={{ firstName: "X", lastName: "Y", level: "Z" }} position={1} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("src")).toBe("/images/avatar.png");
  });
});
