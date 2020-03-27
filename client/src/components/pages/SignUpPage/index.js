import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../forms/SignUpForm';

const SignUpPage = (props) => {

  return (

    <SignUpForm/>

  );
};

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps)(SignUpPage);
