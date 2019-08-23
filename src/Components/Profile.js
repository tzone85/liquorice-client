import { Component } from 'react';
import React from 'react';

class Profile extends Component{

    render() {

        return <fragment>

                <div className="profile-container text-center">
                    <div className="avatar-container">
                        <img className="avatar" src="/images/avatar.png" width="223" height="204"/>
                    </div>
                    <div className="profile-details">
                        <div className="name text-center">
                            Nancy Modjaka Meke
                        </div>
                        <div className="level">Bathroom Beginner</div>
                    </div>
                    <div className="point-holder text-center">
                        <div className="point-text">
                            Your position:
                        </div>
                        <div className="point-value">227</div>
                        <div className="point-motivation">
                            Earn more points by doing <br/>
                            <u><i>daily activities!</i></u>
                        </div>
                    </div>
                </div>
                <img className='tree-style' src="/images/tree-wt-grass.png" />
        </fragment>
    }
}

export default Profile;