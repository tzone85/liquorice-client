import {Component} from 'react';
import React from "react";
import Leader from "./Leader";

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };

        fetch('http://localhost:3000/api/users', {
            method: 'GET',
             mode: 'cors'
        })
            .then((result) => {
                result.json()
                    .then(data => this.setState({users: data}));
            })
            .catch(error => console.log('Error', error));
    }

    render() {
        let first = this.state.users.filter(item => item.id === 1);
        first = (typeof first[0] !== 'undefined')?first[0]:{};

        return <fregment>

            <h2 className="heading text-center mt-5 mb-5">Hygienica Leaderboard</h2>
            <div className="leaderboard">
                <div className="row winner">
                    <div className="col lead-index">{first.id}</div>
                    <div className="col lead-avatar">
                        <span className="rounded-circle avatar-placeholder"></span>
                    </div>
                    <div className="col lead-name text-left">
                        {first.firstName} {first.lastName} <br/>
                        <span className="level">Bathroom Beginner</span>
                    </div>
                    <div className="col leaderboard-points">
                        {first.totalScore}
                    </div>
                    <div className="col  leaderboard-star">
                        <i className="fa fa-star winner-star"></i>
                    </div>
                </div>
                {this.state.users.filter(item => item.id !== 1).map(user => <Leader user={user} />)}
            </div>
        </fregment>
    }
}

export default Leaderboard;