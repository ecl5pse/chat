import React from 'react';
import { Formik, Form, Field } from 'formik';
import { createSignUpRequestAction } from '../../../actions';
import { connect } from 'react-redux';
import style from './SignUpForm.module.scss'

const SignUpForm = props => {

  const handleSubmit = (values) => {
    const formData = new FormData();

    Object.keys(values).forEach(key => {
      console.log(values[ key ]);
      formData.append(key, values[ key ]);
    });
    props.signUp(formData);
  };

  return (
    <Formik onSubmit={ handleSubmit } initialValues={ {
      login: '',
      password: '',
      profilePicture: '',
    } }>
      {
        ({ setFieldValue, ...rest }) => (
          <Form encType="multipart/form-data" className={style.container}>
            Sign Up
            <Field type="text" name="login" placeholder="Login" className = {style.login} />

            <Field type="password" name="password" placeholder="Password" className = {style.password}/>

            <input name={ 'profilePicture' } type="file" multiple={ false }
                   onChange={ (event) => {

                     setFieldValue('profilePicture',
                       event.currentTarget.files[ 0 ]);
                   } } className={style.profilePicture}/>

            <button type={ 'submit' } className={style.button}>Sign Up</button>
          </Form>
        )
      }
    </Formik>
  );
};

const mapStateToProps = state => ( {} );

const mapDispatchToProps = dispatch => ( {
  signUp: (data) => dispatch(createSignUpRequestAction(data)),
} );
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);