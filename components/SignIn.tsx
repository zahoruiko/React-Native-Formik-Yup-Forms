import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as yup from 'yup';
import { Field, Formik } from 'formik';
import CustomInput from './CustomInput';
import { isPortrait, isTablet } from '../utils/Device';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const SignIn = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.loginContainer}>
            <Text style={styles.formTitle}>Sign In</Text>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
              }}>
              {({ handleSubmit, isValid }) => (
                <>
                  <Field
                    component={CustomInput}
                    name="email"
                    placeholder="E-mail Address"
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                  />
                  <View style={styles.buttonsWrapper}>
                    <Button
                      onPress={() => navigation.navigate('SignUp')}
                      title="Sign Up"
                      // uppercase={false}
                      containerStyle={styles.button}
                    />
                    <Button
                      onPress={handleSubmit}
                      title="Sign In"
                      // uppercase={false}
                      disabled={!isValid}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: isTablet() ? '50%' : '85%',
  },
  loginContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    backgroundColor: '#e6e6e6',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: isTablet() ? 110 : 30,
    marginBottom: 30,
  },
  formTitle: {
    fontSize: 22,
    fontFamily: 'Bitwise',
    color: '#222',
    marginTop: 5,
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    padding: 5,
    fontFamily: 'Bitwise',
  },
  // errorText: {
  //   fontSize: 10,
  //   color: 'red',
  //   fontFamily: 'Bitwise',
  // },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  button: {
    fontFamily: 'Bitwise',
    fontSize: 30,
    color: 'navy',
    capitalizeString: false,
  },
});

export default SignIn;
