import React from 'react';
import Profile from "./Components/Profile";
import Leaderboard from "./Components/Leaderboard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
    return <fragment>
        <Header />
        <div className="pr-lg-5">
            <div className="row text-left">
                <div id="left-column" className="col-lg-7 pb-0">
                <Profile />
                </div>
                <div id="right-column" className="col-lg-5 ml-5 mr-5 mr-lg-0 ml-lg-0 mt-5 mb-5 text-center">
                <Leaderboard />
                </div>
            </div>
        </div>
        <Footer />
    </fragment>
}

export default App;