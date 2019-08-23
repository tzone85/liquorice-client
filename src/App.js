import React from 'react';
import Profile from "./Components/Profile";
import Leaderboard from "./Components/Leaderboard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
    return <fragment>
        <Header />
        <div className="pr-3">
            <div className="row text-left">
                <div id="left-column" className="col-lg-7">
                <Profile />
                </div>
                <div id="right-column" className="col-lg-5  text-center">
                <Leaderboard />
                </div>
            </div>
        </div>
        <Footer />
    </fragment>
}

export default App;