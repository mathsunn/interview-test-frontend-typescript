import React from "react";
import { withFormik, FormikProps, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Router from "next/router";

interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, status } = props;
  return (
    <Form>
      <img className="logo" src="/img/icons/logo.svg" />

      {status && status.error && <div className="error">{status.error}</div>}

      <div className="input-wrapper">
        <Field type="email" name="email" placeholder="Adresse e-mail" />
        {touched.email && errors.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>

      <div className="input-wrapper">
        <Field type="password" name="password" placeholder="Mot de passe" />
        {touched.password && errors.password && (
          <div className="error">{errors.password}</div>
        )}
      </div>

      <button type="submit" className="submit" disabled={isSubmitting}>
        Connexion
      </button>
      <button type="button" className="forget-password">
        Mot de passe oublié
      </button>
    </Form>
  );
};

interface MyFormProps {
  initialEmail?: string;
}

const LoginForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Votre email est invalide")
      .required("Ce champ est requis"),
    password: Yup.string().required("Ce champ est requis"),
  }),
  handleSubmit: (values, { setSubmitting, setStatus }) => {
    axios
      .post("/api/login", {
        email: values.email,
        password: values.password,
      })
      .then(function () {
        Router.push("/dashboard");
      })
      .catch(function () {
        setStatus({
          error:
            "Oups, nous n'avons pas trouvé de compte correspondant à ces identifiants ! Veuillez réessayer.",
        });
        setSubmitting(false);
      });
  },
})(InnerForm);

const Index = () => (
  <div id="login-container">
    <div id="login">
      <LoginForm />
    </div>
  </div>
);

export default Index;
