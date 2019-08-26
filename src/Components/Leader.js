import {Component} from 'react';
import React from "react";

class Leader extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return <fragment>
            <div className="row">
                <div className="col lead-index">{this.props.user.id}</div>
                <div className="col lead-avatar">
                    <span className="rounded-circle avatar-placeholder"></span>
                </div>
                <div className="col lead-name text-left">
                    {this.props.user.firstName} {this.props.user.lastName} <br/>
                    <span className="level">Bathroom Beginner</span>
                </div>
                <div className="col leaderboard-points">{this.props.user.totalScore}</div>
                <div className="col leaderboard-star"></div>
            </div>
        </fragment>
    }
}

export default Leader;