import {renderTree} from "../Render";
let state = {
    postPage: {
        postsData: [
            {name: 'Danil', age: '21', message: 'lol'},
            {name: 'Danil', age: '21', message: 'lol'},
            {name: 'Danil', age: '21', message: 'lol'},
            {name: 'Danil', age: '21', message: 'lol'}
        ],
        postText: 'something'
    },
 dialogPage: {
        dialogData: [
    {name: 'Tema', message: 'hello'},
    {name: 'Katya', message: 'hello_lol'}
 ],
     messageText: 'Write your message'
},
    profilePage: {
        profileData: [
            {name: 'Danil', date: '02.05.2001', city: 'California'}
        ]
    }
}

export let addPost = (postMesage) => {
    let newPost = {
        name: "Tema",
        age: '20',
        message: postMesage
    }
    state.postPage.postsData.push(newPost);
    renderTree(state);
}

export let updateText = (postText) => {
    state.postPage.postText = postText;
    renderTree(state);
}

export let updateMessageText = (messageText) => {
    state.dialogPage.messageText = messageText;
    renderTree(state);
}

export  default state;