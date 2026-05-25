import { useState } from "react";
import { Leader } from "./Leader.jsx";

const PAGE_SIZE = 5;

export function Leaderboard({ users, loading, error, onRetry }) {
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  if (loading) {
    return <p role="status" className="text-center py-4">Loading leaderboard…</p>;
  }
  if (error) {
    return (
      <div role="alert" className="alert alert-danger text-center">
        <p>Couldn’t load leaderboard ({error.message ?? "unknown"})</p>
        <button type="button" className="btn btn-outline-danger" onClick={onRetry}>Try again</button>
      </div>
    );
  }
  if (!users.length) {
    return <p className="text-center py-4">No leaderboard data yet.</p>;
  }

  const winner = users[0];
  const rest = users.slice(1, pageSize);
  const hasMore = pageSize < users.length;

  return (
    <section aria-labelledby="leaderboard-heading">
      <h2 id="leaderboard-heading" className="heading text-center mt-5 mb-4">Hygienica Leaderboard</h2>
      <Leader user={winner} rank={1} isWinner />
      {rest.map((user, idx) => (
        <Leader key={user.id} user={user} rank={idx + 2} />
      ))}
      {hasMore && (
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setPageSize((n) => n + PAGE_SIZE)}
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
}
