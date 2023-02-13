import React, {useEffect} from "react";
import axios from "axios";
import {getProfileAC} from "../../redux/profile-reducer";
import {preloadAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {useParams} from 'react-router-dom';

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


// const ProfileCont = (props) => {
//
//     const params = useParams();
//     debugger;
//     let userId = params.userId;
//     useEffect(() => {
//         props.preloader(true);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
//             props.preloader(false);
//             props.getProfile(response.data);
//         })
//     })
//
//     return (
//
//         <Profile profilePage={props.profilePage}></Profile>
//     );
// }


class ProfileCont extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        console.log(this.props.match.params);
        this.props.preloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.preloader(false);
            this.props.getProfile(response.data);
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
