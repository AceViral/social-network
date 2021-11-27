import { authAPI } from "../api/api";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const SET_MESSAGE = "social-network/auth/SET_MESSAGE";

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   messages: [],
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return { ...state, ...action.payload };
      case SET_MESSAGE:
         return {
            ...state,
            messages: [...state.messages, ...action.message],
         };
      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
   type: SET_USER_DATA,
   payload: { userId, email, login, isAuth },
});
export const setMessages = (message) => ({ type: SET_MESSAGE, message });
// THUNK
export const getAuthUserData = () => async (dispatch) => {
   let responce = await authAPI.me();
   if (responce.resultCode === 0) {
      let { id, email, login } = responce.data;
      dispatch(setAuthUserData(id, email, login, true));
   }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
   let responce = await authAPI.login(email, password, rememberMe);
   if (responce.resultCode === 0) {
      dispatch(getAuthUserData());
   } else {
      dispatch(setMessages(responce.messages));
   }
};
export const logout = () => async (dispatch) => {
   let responce = await authAPI.logout();
   if (responce.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
   }
};

export default authReducer;
