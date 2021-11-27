import { Formik, Field, Form } from "formik";
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Textarea } from "../../common/Preloader/FormsControls/formsControl";
import * as yup from "yup";

const MyPosts = (props) => {
   let postsElements = props.posts.map((post) => (
      <Post text={post.message} likesCount={post.likesCount} />
   ));

   let onAddPost = () => {
      props.addPost();
   };

   let onPostChange = (e) => {
      props.updateNewPostText(e.target.value);
   };
   return (
      <div className={s.postsBlock}>
         <AddPostForm
            onPostChange={onPostChange}
            newPostText={props.newPostText}
            onAddPost={onAddPost}
         />
         <div className={s.posts}>{postsElements}</div>
      </div>
   );
};

function AddPostForm(props) {
   const validate = yup.object({ post: yup.string().required("Обязательно") });
   return (
      <Formik
         initialValues={{ post: "" }}
         validateOnBlur
         validationSchema={validate}
      >
         {({ handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
               <div>
                  <Field
                     component="textarea"
                     placeholder={"Post"}
                     name={"post"}
                     onBlur={handleBlur}
                     onChange={props.onPostChange}
                     value={props.newPostText}
                  />
               </div>
               <button type="submit" onClick={props.onAddPost}>
                  Add post
               </button>
            </Form>
         )}
      </Formik>
   );
}

export default MyPosts;
