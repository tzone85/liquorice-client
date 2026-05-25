import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Leaderboard } from "../../src/components/Leaderboard.jsx";

const sample = [
  { id: 1, firstName: "Alice", lastName: "Alpha", level: "L1", points: 100, avatarUrl: "/a.png" },
  { id: 2, firstName: "Bob", lastName: "Beta", level: "L1", points: 90 },
  { id: 3, firstName: "Cara", lastName: "Gamma", level: "L1", points: 80 },
  { id: 4, firstName: "Dan", lastName: "Delta", level: "L1", points: 70 },
  { id: 5, firstName: "Eve", lastName: "Eps", level: "L1", points: 60 },
  { id: 6, firstName: "Fay", lastName: "Zeta", level: "L1", points: 50 },
  { id: 7, firstName: "Gus", lastName: "Eta", level: "L1", points: 40 },
];

describe("Leaderboard", () => {
  it("shows a loading message when loading", () => {
    render(<Leaderboard users={[]} loading error={null} />);
    expect(screen.getByRole("status")).toHaveTextContent(/loading/i);
  });

  it("shows error with retry when error", () => {
    const onRetry = vi.fn();
    render(<Leaderboard users={[]} loading={false} error={{ message: "down" }} onRetry={onRetry} />);
    expect(screen.getByRole("alert")).toHaveTextContent(/down/);
    fireEvent.click(screen.getByRole("button", { name: /try again/i }));
    expect(onRetry).toHaveBeenCalled();
  });

  it("renders top 5 by default and reveals more via Load more", () => {
    render(<Leaderboard users={sample} loading={false} error={null} />);
    expect(screen.getAllByTestId(/leader-row-/)).toHaveLength(5);
    fireEvent.click(screen.getByRole("button", { name: /load more/i }));
    expect(screen.getAllByTestId(/leader-row-/)).toHaveLength(7);
  });

  it("renders empty state when users is []", () => {
    render(<Leaderboard users={[]} loading={false} error={null} />);
    expect(screen.getByText(/no leaderboard data yet/i)).toBeInTheDocument();
  });
});
