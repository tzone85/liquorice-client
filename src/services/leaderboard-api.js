/**
 * Leaderboard API client.
 *
 * Reads VITE_API_BASE at module init. When unset or pointing at the fixture
 * URL `mock://`, returns LEADERBOARD_FIXTURE so the SPA works offline / in
 * tests without spinning up a backend.
 */
import { LEADERBOARD_FIXTURE } from "../fixtures/leaderboard.js";

const API_BASE = import.meta?.env?.VITE_API_BASE ?? "mock://";

export async function fetchLeaderboard({ apiBase = API_BASE, fetchImpl = fetch } = {}) {
  if (apiBase === "mock://" || !apiBase) {
    return { ok: true, users: LEADERBOARD_FIXTURE };
  }
  try {
    const response = await fetchImpl(`${apiBase}/api/users`, { mode: "cors" });
    if (!response.ok) {
      return { ok: false, error: { status: response.status, message: response.statusText } };
    }
    const users = await response.json();
    if (!Array.isArray(users)) {
      return { ok: false, error: { status: 500, message: "API returned non-array" } };
    }
    return { ok: true, users };
  } catch (err) {
    return { ok: false, error: { status: 0, message: err.message } };
  }
}
