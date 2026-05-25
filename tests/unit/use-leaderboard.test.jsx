import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useLeaderboard } from "../../src/services/use-leaderboard.js";

describe("useLeaderboard", () => {
  it("starts loading, then populates users", async () => {
    const fetcher = vi.fn().mockResolvedValue({ ok: true, users: [{ id: 1, firstName: "A", lastName: "B", points: 1, level: "x" }] });
    const { result } = renderHook(() => useLeaderboard({ fetcher }));
    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.users).toHaveLength(1);
    expect(result.current.error).toBeNull();
  });

  it("captures error on fetch failure", async () => {
    const fetcher = vi.fn().mockResolvedValue({ ok: false, error: { status: 500, message: "boom" } });
    const { result } = renderHook(() => useLeaderboard({ fetcher }));
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.error.message).toBe("boom");
    expect(result.current.users).toEqual([]);
  });

  it("refresh re-fetches", async () => {
    const fetcher = vi.fn().mockResolvedValue({ ok: true, users: [] });
    const { result } = renderHook(() => useLeaderboard({ fetcher }));
    await waitFor(() => expect(result.current.loading).toBe(false));
    await result.current.refresh();
    expect(fetcher).toHaveBeenCalledTimes(2);
  });
});
