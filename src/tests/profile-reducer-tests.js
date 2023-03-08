import { render, screen } from '@testing-library/react';
import {addPostActionCreator} from "../redux/page-reducer";
import profileReducer from "../redux/profile-reducer";

test ('check length of posts, should be incr', () => {
    let action = addPostActionCreator("rofl");
    let state = {
        postsData: [
            {name: 'Danil', age: '21', message: 'lol'},
            {name: 'Danil', age: '21', message: 'lol'},
            {name: 'Danil', age: '21', message: 'lol'},
            {name: 'Danil', age: '21', message: 'lol'}
        ],
        postText: 'something'
    };
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);
});