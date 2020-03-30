import React from 'react';
import { connect } from 'react-redux';
import { createLoginRequestAction } from '../../../actions';
import style                        from './LoginForm.module.scss'
import Input                        from '../Input';
import { Field, Formik, Form } from 'formik';

let LoginForm = props => {

  const handleSubmit = (values) => {
    props.login(values);
  };

  return (
    <Formik onSubmit={ handleSubmit } initialValues={ {
      login: '',
      password: '',
    } }>
      {
        ({}) => (
          <Form className={style.container}>
            LOGIN
            <Field name={'login'} type={'text'} placeholder={'login'}
                   className={style.login}/>
            <Field name={'password'} type={'password'} placeholder={'password'}
                   className={style.password}/>
            <button type={ 'submit' } className={style.button}>Login</button>
          </Form>
        )
      }
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ( {
  login: (data) => dispatch(createLoginRequestAction(data)),
} );

export default connect(null, mapDispatchToProps)(LoginForm);
