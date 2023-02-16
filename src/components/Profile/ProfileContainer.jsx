import React, {useEffect} from "react";
import axios from "axios";
import {getProfileAC} from "../../redux/profile-reducer";
import {preloadAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {useParams} from 'react-router-dom';
import {profileAPI} from "../../api";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        preloader: (preload) => {
            dispatch(preloadAC(preload));
        },
        getProfile: (profileData) => {
            dispatch(getProfileAC(profileData));
        }
    }
}


export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileCont extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.preloader(true);
            profileAPI.getProfile(userId).then(response => {
            this.props.preloader(false);
            debugger;
            this.props.getProfile(response);
        })
    }
    render() {
        return (
                <Profile {...this.props} profilePage={this.props.profilePage}></Profile>
        )
    }
}


const ProfileContWithRouter = withRouter(ProfileCont);

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContWithRouter);
export default ProfileContainer;