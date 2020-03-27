import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { createSignUpRequestAction } from '../../../actions';
import { connect } from 'react-redux';

const SignUpForm = props => {

  const handleSubmit = (values) => {
    const formData = new FormData();
    for (const prop in values) {
      formData.append(prop, values[ prop ]);
    }
    props.signUp(formData);
  };

  return (
    <Formik onSubmit={ handleSubmit } initialValues={ {
      login: '',
      password: '',
      profilePicture: '',
    } }>
      {
        ({ setFieldValue }) => (
          <Form encType="multipart/form-data">
            <Field type="text" name="login" placeholder="Login"/>
            <br/>
            <Field type="password" name="password" placeholder="Password"/>
            <br/>
            <input name={ 'profilePicture' } type="file" onChange={ (event) => {
              setFieldValue('profilePicture', event.currentTarget.files[ 0 ]);
            } }/>
            <br/>
            <button type={ 'submit' }>Sign Up</button>
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