import { Component } from 'react';
import React from 'react';

class Profile extends Component{

    render() {

        return <fragment>

                <div className="profile-container text-center pl-sm-5">
                    <div className="avatar-container">
                        <img className="avatar d-none d-lg-inline-block d-xl-inline-block" src="/images/avatar.png" width="223" height="204"/>
                        <img className="avatar d-none d-lg-none d-xl-none d-inline-block" src="/images/avatar-mobile.png" width="175" height="161"/>
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
        </fragment>
    }
}

export default Profile;