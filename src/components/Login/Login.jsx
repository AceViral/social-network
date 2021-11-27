import { Field, Form, Formik } from "formik";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import * as yup from "yup";
import s from "./Login.module.css";

const LoginForm = (props) => {
   const validate = yup.object({
      email: yup
         .string()
         .typeError("Должно быть строкой")
         .required("Обязательно"),
      password: yup
         .string()
         .typeError("Должно быть строкой")
         .required("Обязательно"),
   });
   return (
      <Formik
         initialValues={{ email: "", password: "", rememberMe: false }}
         validateOnBlur
         validationSchema={validate}
         onSubmit={props.onSubmit}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
         }) => (
            <Form onSubmit={handleSubmit}>
               <div>
                  <Field
                     placeholder={"Login"}
                     name={"email"}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}
                     className={touched.email && errors.email ? s.error : null}
                  />
                  {touched.email && errors.email ? (
                     <p className={s.errorText}>{errors.email}</p>
                  ) : null}
               </div>
               <div>
                  <Field
                     placeholder={"Password"}
                     name={"password"}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                     className={
                        touched.password && errors.password ? s.error : null
                     }
                  />
                  {touched.password && errors.password ? (
                     <p className={s.errorText}>{errors.password}</p>
                  ) : null}
               </div>
               <div>
                  <Field
                     name={"rememberMe"}
                     component={"input"}
                     type={"checkbox"}
                  />
                  Remember me
               </div>
               <div>
                  <button type="submit" disabled={!isValid && !dirty}>
                     Login
                  </button>
               </div>
               {!props.isAuth ? props.messages : null}
            </Form>
         )}
      </Formik>
   );
};

const Login = (props) => {
   const onSubmit = (values) => {
      props.login(values.email, values.password, values.rememberMe);
   };

   return (
      <div>
         <h1>Login</h1>
         <LoginForm
            onSubmit={onSubmit}
            messages={props.messages}
            isAuth={props.isAuth}
         />
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      messages: state.auth.messages,
      isAuth: state.auth.isAuth,
   };
};

export default connect(mapStateToProps, { login })(Login);
