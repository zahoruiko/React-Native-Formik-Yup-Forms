import React from 'react';

import {
  Field,
  Formik,
} from 'formik';
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

import CustomInput from './CustomInput';
import { isTablet } from '../utils/Device';

const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: yup
    .string()
    .matches(/[0-9().+ -]/, 'Enter a valid phone number')
    // .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})

const SignUp = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.signupContainer}>
            <Text style={styles.formTitle}>Sign Up</Text>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                fullName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={
                (values, { resetForm }) => {
                  console.log(values);
                  resetForm()
                }
              }
            >
              {({ handleSubmit, isValid }) => (
                <>
                  <Field
                    component={CustomInput}
                    name="fullName"
                    placeholder="Full Name"
                  />
                  <Field
                    component={CustomInput}
                    name="email"
                    placeholder="Email Address"
                    keyboardType="email-address"
                  />
                  <Field
                    component={CustomInput}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    keyboardType="numeric"
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                  />
                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                  />
                  <View style={styles.buttonsWrapper}>
                    <Button
                      onPress={() => navigation.navigate('SignIn')}
                      title="Sign In"
                      uppercase={true}
                      containerStyle={styles.button}
                    />
                    <Button
                      onPress={handleSubmit}
                      title="Sign In"
                      uppercase={false}
                      disabled={!isValid}
                      containerStyle={styles.button}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: isTablet() ? '50%' : '85%',
  },
  signupContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    backgroundColor: '#e6e6e6',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
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
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  button: {
    fontFamily: 'Bitwise',
    fontSize: 30,
    color: 'navy',
  }
})

export default SignUp;
