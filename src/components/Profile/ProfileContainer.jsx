import React, {useEffect} from "react";
import {getProfileAC, getStatusAC, updateStatusAC} from "../../redux/profile-reducer";
import {preloadAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {Navigate, useParams} from 'react-router-dom';
import {profileAPI} from "../../api";
import {withAuthNavigate} from "../hoc/hoc";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        statusText: state.profilePage.statusText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        preloader: (preload) => {
            dispatch(preloadAC(preload));
        },
        getProfile: (profileData) => {
            dispatch(getProfileAC(profileData));
        },
        getStatus: (status) => {
            dispatch(getStatusAC(status));
        },
        updateStatus: (statusText) => {
            dispatch(updateStatusAC(statusText));
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
        if (userId) {
                profileAPI.getProfile(userId).then(response => {
                this.props.preloader(false);
                this.props.getProfile(response);
            });
            profileAPI.getStatus(userId).then(response => {
                this.props.getStatus(response);
            });
        }

            // profileAPI.updateStatus(this.props.statusText).then(response => {
            //     profileAPI.getStatus(24313).then(response => {
            //         this.props.getStatus(response);
            //         console.log(response);
            //     });
            //
            // });
    }

    render() {
        return (
                <Profile {...this.props} status={this.props.status}
                         profilePage={this.props.profilePage}
                         statusTex={this.props.statusText} updateStatus={this.props.updateStatus}></Profile>
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