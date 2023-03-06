import React from "react";


export const getUsersPage = (state) => {
    return state.usersPage;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getCountUsers = (state) => {
    return state.usersPage.usersCount;
}

export const getSelectedPage = (state) => {
    return state.usersPage.selectedPage;
}

export const getFollowingProgress = (state) => {
    return state.usersPage.followProgress;
}

export const getPreload = (state) => {
    return state.preload;
}