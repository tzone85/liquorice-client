import { useCallback, useEffect, useState } from "react";
import { fetchLeaderboard } from "./leaderboard-api.js";

export function useLeaderboard({ fetcher = fetchLeaderboard } = {}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const result = await fetcher();
    if (result.ok) {
      setUsers(result.users);
    } else {
      setError(result.error);
    }
    setLoading(false);
  }, [fetcher]);

  useEffect(() => {
    load();
  }, [load]);

  return { users, loading, error, refresh: load };
}
