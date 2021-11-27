import {
   onSendMessage,
   updateNewMessageBody,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import { compose } from "redux";

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   };
};

export default compose(
   connect(mapStateToProps, { updateNewMessageBody, onSendMessage }),
   withAuthRedirect
)(Dialogs);
