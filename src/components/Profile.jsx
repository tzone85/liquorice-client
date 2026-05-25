export function Profile({ user, position }) {
  if (!user) return null;
  return (
    <div className="profile-container text-center pl-sm-5">
      <div className="avatar-container mb-3">
        <img
          className="rounded-circle"
          src={user.avatarUrl ?? "/images/avatar.png"}
          alt={`${user.firstName} ${user.lastName} avatar`}
          width="160"
          height="160"
        />
      </div>
      <div className="profile-details">
        <div className="name text-center h4">{user.firstName} {user.lastName}</div>
        <div className="level text-muted">{user.level}</div>
      </div>
      <div className="point-holder mt-4">
        <div className="point-text small text-muted">Your position</div>
        <div className="point-value display-4">{position}</div>
        <div className="point-motivation small text-muted mt-2">
          Earn more points by doing<br />
          <u><i>daily activities!</i></u>
        </div>
      </div>
    </div>
  );
}
