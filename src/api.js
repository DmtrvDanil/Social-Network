import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: {
        "API-KEY": "bd0aa8b8-a0fa-4897-85d6-b6b7edd70837"
    }
});
export const usersAPI = {
    getUsers(selectedPage, pageSize) {
        return (
            instance.get(`users?page=${selectedPage}&count=${pageSize}`).then(response => {
                return response.data;
            })
        )
    },
    getUserPage(pageNum, pageSize) {
        return (
            instance.get(`users?page=${pageNum}&count=${pageSize}`).then(response => {
                return response.data;
            })
        )
    }
};

export const followAPI = {
    follow(userId) {
        return (
            instance.post(`follow/${userId}`).then(response => {
                return response.data;
            })
        )
    },
    unfollow(userId) {
        return (
            instance.delete(`follow/${userId}`).then(response => {
                return response.data;
            })
        )
    }
}

export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`).then(response => {

                return response.data;
            })
        )
    },

    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`).then(response => {
                return response.data;
            })
        )
    },

    updateStatus(statusText) {
        return (
            instance.put(`profile/status`, {status: statusText}).then(response => {
                return response.data;
            })
        )
    }
}

export const headerAPI = {
    getAuth() {
        return (
            instance.get(`auth/me`).then(response => {
                return response.data;
            })
        )
    }
}