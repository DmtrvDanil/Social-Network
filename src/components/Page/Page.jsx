import React from "react";
import Post from './Post/Post'
import style from './Page.module.css'
import Profile from "../Profile/Profile";
import {Field, Form, Formik} from "formik";

const Page = (props) => {
    let postElements = props.postPage.postsData.map((post) => {
        return (
            <Post name={post.name} age={post.age} message={post.message}></Post>
        )
    })


    let textMessage = React.createRef();
    let onAddPost = (postText) => {
        props.addPost(postText);
    }
    let onUpdateText = () => {
       let message= textMessage.current.value;
       props.updateText(message);
    }

    return (
        <div className={style.page}>
            <div className='posts'>
                <div className='addPost'>
                    <PostText onAddPost={onAddPost}></PostText>
                </div>
                <div className={style.post__wrapper}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}

const PostText = (props) => (
    <div>
        <h3 className='posts__heading'>
            My posts
        </h3>
        <Formik
            initialValues={{post: ''}}
            onSubmit={(values, { setSubmitting }) => {
                props.onAddPost(values.post);
                }
            }
        >
            {({ isSubmitting }) => (
            <Form>
                <Field type="text" name="post" />
                <button type="submit">
                    Add Post
                </button>
            </Form>
                )}
        </Formik>
    </div>
)


export default Page;