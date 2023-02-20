import React, {useEffect} from "react";
import axios from "axios";
import {getProfileAC} from "../../redux/profile-reducer";
import {preloadAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {Navigate, useParams} from 'react-router-dom';
import {profileAPI} from "../../api";
import Dialogs from "../Dialogs/Dialogs";
import {withAuthNavigate} from "../hoc/hoc";

let mapStateToProps = (state) => {
    // debugger
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth
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
            this.props.getProfile(response);
        })
    }
    render() {
        return (
                <Profile {...this.props} profilePage={this.props.profilePage}></Profile>
        )
    }
}

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let authHocProfile = withAuthNavigate(ProfileCont);
authHocProfile = connect(mapStateToPropsForRedirect)(authHocProfile);



const ProfileContWithRouter = withRouter(authHocProfile);


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContWithRouter);
export default ProfileContainer;

/////// перенести стейт в hoc!!!!!!