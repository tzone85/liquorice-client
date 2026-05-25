export function Leader({ user, rank, isWinner = false }) {
  return (
    <div className={`row align-items-center py-2 ${isWinner ? "winner" : ""}`} data-testid={`leader-row-${user.id}`}>
      <div className="col-1 lead-index fw-bold">{rank}</div>
      <div className="col-2 lead-avatar">
        <img className="rounded-circle" src={user.avatarUrl ?? "/images/avatars/default.png"} alt="" width="40" height="40" />
      </div>
      <div className="col-6 lead-name text-start">
        <div>{user.firstName} {user.lastName}</div>
        <small className="text-muted">{user.level}</small>
      </div>
      <div className="col-3 leaderboard-points text-end fw-bold">{user.points.toLocaleString()}</div>
    </div>
  );
}
