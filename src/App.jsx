import { Fragment } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Leaderboard } from "./components/Leaderboard.jsx";
import { Profile } from "./components/Profile.jsx";
import { useLeaderboard } from "./services/use-leaderboard.js";

const CURRENT_USER_ID = 1; // TODO: replace with auth-derived id when login lands

export function App() {
  const { users, loading, error, refresh } = useLeaderboard();
  const me = users.find((u) => u.id === CURRENT_USER_ID);
  const myPosition = users.findIndex((u) => u.id === CURRENT_USER_ID) + 1 || "—";

  return (
    <Fragment>
      <Header />
      <main className="container-fluid pr-lg-5">
        <div className="row text-start">
          <div id="left-column" className="col-lg-7 py-4">
            <Profile user={me} position={myPosition} />
          </div>
          <div id="right-column" className="col-lg-5 py-4">
            <Leaderboard users={users} loading={loading} error={error} onRetry={refresh} />
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
