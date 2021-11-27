import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";

const Dialogs = (props) => {
   let state = props.dialogsPage;

   let dialogsElements = state.dialogs.map((dialog) => (
      <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
   ));
   let messagesElements = state.messages.map((message) => (
      <Message text={message.message} key={message.id} id={message.id} />
   ));

   let newMessageBody = state.newMessageBody;

   let onSendMessageClick = () => {
      props.onSendMessage();
   };
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
   };

   if (!props.isAuth) return <Redirect to={"/login"} />;

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>{dialogsElements}</div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <AddMessageForm
               onNewMessageChange={onNewMessageChange}
               newMessageBody={newMessageBody}
               onSendMessageClick={onSendMessageClick}
            />
         </div>
      </div>
   );
};

const AddMessageForm = (props) => {
   const validate = yup.object({});
   return (
      <Formik initialValues={{ message: "" }}>
         <Form>
            <div>
               <Field
                  component="textarea"
                  placeholder="Enter your message"
                  onChange={props.onNewMessageChange}
                  value={props.newMessageBody}
                  name={"message"}
               ></Field>
            </div>
            <div>
               <button onClick={props.onSendMessageClick} type="submit">
                  Send
               </button>
            </div>
         </Form>
      </Formik>
   );
};

export default Dialogs;
