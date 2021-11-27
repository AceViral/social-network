const UPDATE_NEW_MESSAGE_BODY =
   "social-network/dialogs/UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "social-network/dialogs/SEND-MESSAGE";

let initialState = {
   dialogs: [
      { id: 1, name: "Sasha" },
      { id: 2, name: "Vadim" },
      { id: 3, name: "Kirill" },
      { id: 4, name: "Gulnaz" },
      { id: 5, name: "Valeria" },
      { id: 6, name: "Bulat" },
   ],
   messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Hi" },
      { id: 3, message: "How are you?" },
      { id: 4, message: "I'm fine, and you?" },
      { id: 5, message: "I'm well" },
      { id: 6, message: "Bye" },
   ],
   newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
   let stateCopy;

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         stateCopy = { ...state, newMessageBody: action.body };
         return stateCopy;
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         stateCopy = {
            ...state,
            messages: [...state.messages, { id: 7, message: body }],
            newMessageBody: "",
         };
         return stateCopy;
      default:
         return state;
   }
};

export const onSendMessage = () => ({
   type: SEND_MESSAGE,
});
export const updateNewMessageBody = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   body: body,
});

export default dialogsReducer;
