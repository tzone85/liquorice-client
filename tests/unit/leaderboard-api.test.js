import { describe, expect, it, vi } from "vitest";
import { fetchLeaderboard } from "../../src/services/leaderboard-api.js";

describe("fetchLeaderboard", () => {
  it("returns fixture when apiBase=mock://", async () => {
    const r = await fetchLeaderboard({ apiBase: "mock://" });
    expect(r.ok).toBe(true);
    expect(r.users.length).toBeGreaterThan(0);
  });

  it("returns fixture when apiBase is empty", async () => {
    const r = await fetchLeaderboard({ apiBase: "" });
    expect(r.ok).toBe(true);
  });

  it("calls fetch with /api/users for a real base", async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([{ id: 1, firstName: "X", lastName: "Y", points: 0, level: "L" }]),
    });
    const r = await fetchLeaderboard({ apiBase: "https://api.test", fetchImpl });
    expect(fetchImpl).toHaveBeenCalledWith("https://api.test/api/users", expect.objectContaining({ mode: "cors" }));
    expect(r.users[0].id).toBe(1);
  });

  it("returns ok=false on non-2xx", async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: false, status: 500, statusText: "kaboom" });
    const r = await fetchLeaderboard({ apiBase: "https://api.test", fetchImpl });
    expect(r.ok).toBe(false);
    expect(r.error.status).toBe(500);
  });

  it("returns ok=false on transport error", async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new Error("ECONNREFUSED"));
    const r = await fetchLeaderboard({ apiBase: "https://api.test", fetchImpl });
    expect(r.ok).toBe(false);
    expect(r.error.status).toBe(0);
  });

  it("returns ok=false when API returns non-array", async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve({ not: "array" }),
    });
    const r = await fetchLeaderboard({ apiBase: "https://api.test", fetchImpl });
    expect(r.ok).toBe(false);
  });
});
