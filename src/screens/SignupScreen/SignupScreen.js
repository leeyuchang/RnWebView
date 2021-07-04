import React, {useState, useContext, useRef} from 'react';
import {StyleSheet, View, Keyboard} from 'react-native';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import {showMessage} from 'react-native-flash-message';
// import {signUp, resetAuthState} from '../../store/actions';
import {Button, TextInput, Icon} from '../../components';
// import {NAVIGATION_TO_LOGIN_SCREEN} from '../../navigation/routes';
import Status from '../../magento/Status';
// import {magento} from '../../magento';
import {ThemeContext} from '../../theme';
import {translate as t} from '../../i18n';
import {SPACING, LIMITS} from '../../constants';
import {isEmailValid, isPasswordValid} from '../../utils';

import {WithLocalSvg} from 'react-native-svg';
import CommerceImage from '../../assets/images/new-commerce-01.svg';
import {DIMENS} from '../../constants';

// const propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired,
//     replace: PropTypes.func.isRequired,
//   }).isRequired,
// };

// TODO: Check KeyboardAvoidingView behaviour on iOS, on Android it's working fine
const SignupScreen = () => {
  const [apiStatus, setApiStatus] = useState('');
  const [form, setValues] = useState({
    email: '',
    incorrectEmail: false,
    password: '',
    incorrectPassword: false,
  });
  const [secureEntry, toggleSecureEntry] = useState(true);
  const {theme} = useContext(ThemeContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // useEffect(() => {
  //   if (apiStatus === Status.SUCCESS) {
  //     showMessage({
  //       message: translate('common.success'),
  //       description: translate('signupScreen.signupSuccessMessage'),
  //       type: 'success',
  //     });
  //     navigation.replace(NAVIGATION_TO_LOGIN_SCREEN);
  //   }
  // }, [apiStatus]);

  const checkField = (fieldKey, fieldErrorKey, fieldValidator) => {
    if (!fieldValidator(form[fieldKey])) {
      setValues(prevState => ({
        ...prevState,
        [fieldErrorKey]: true,
      }));
      return false;
    }
    return true;
  };

  const checkValidation = () => {
    let isValid = true;
    isValid = isValid && checkField('email', 'incorrectEmail', isEmailValid);
    isValid =
      isValid && checkField('password', 'incorrectPassword', isPasswordValid);
    return isValid;
  };

  const onSignupPress = () => {
    Keyboard.dismiss();
    if (!checkValidation()) {
      return;
    }
    //   // Api call
    //   setApiStatus(Status.LOADING);
    //   const {firstName, lastName, email, password} = form;
    //   magento.guest
    //     .signup({
    //       firstName,
    //       lastName,
    //       email,
    //       password,
    //     })
    //     .then(() => {
    //       setApiStatus(Status.SUCCESS);
    //     })
    //     .catch(error => {
    //       showMessage({
    //         message: translate('common.error'),
    //         description: error.message || translate('errors.genericError'),
    //         type: 'danger',
    //       });
    //       setApiStatus(Status.ERROR);
    //     });
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <WithLocalSvg width="100%" height={180} asset={CommerceImage} />
      </View>
      <TextInput
        placeholder={t('common.email')}
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        editable={!(apiStatus === Status.LOADING)}
        containerStyle={styles.defaultMargin}
        onChangeText={value =>
          setValues(prevState => ({
            ...prevState,
            email: value.trim(),
            incorrectEmail: false,
          }))
        }
        assignRef={component => (emailInputRef.current = component)}
        errorMessage={form.incorrectEmail ? t('errors.invalidEmail') : ''}
        returnKeyType={t('common.keyboardNext')}
        onSubmitEditing={() => passwordInputRef.current.focus()}
        onBlur={() => checkField('email', 'incorrectEmail', isEmailValid)}
      />
      <TextInput
        autoCapitalize="none"
        secureTextEntry={secureEntry}
        rightIcon={
          <Icon
            type="material-community"
            name={secureEntry ? 'eye' : 'eye-off'}
            size={20}
            style={styles.iconPadding}
            color={theme.colors.gray400}
            onPress={() => toggleSecureEntry(!secureEntry)}
          />
        }
        textContentType="password"
        placeholder={t('common.password')}
        autoCorrect={false}
        editable={!(apiStatus === Status.LOADING)}
        containerStyle={styles.defaultMargin}
        onChangeText={value =>
          setValues(prevState => ({
            ...prevState,
            password: value.trim(),
            incorrectPassword: false,
          }))
        }
        errorMessage={form.incorrectPassword ? t('errors.invalidPassword') : ''}
        assignRef={component => (passwordInputRef.current = component)}
        onSubmitEditing={onSignupPress}
      />
      <Button
        loading={apiStatus === Status.LOADING}
        title={t('common.signup')}
        style={styles.defaultMargin}
        onPress={
          onSignupPress
          // showMessage({
          //   message: t('common.success'),
          //   description: t('signupScreen.signupSuccessMessage'),
          //   type: 'success',
          // })
        }
      />
      <Button
        type="clear"
        style={styles.defaultMargin}
        disabled={apiStatus === Status.LOADING}
        title={t('signupScreen.haveAccount')}
        // onPress={() => navigation.navigate(NAVIGATION_TO_LOGIN_SCREEN)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  container: {
    padding: SPACING.large,
  },
  defaultMargin: {
    marginTop: SPACING.large,
  },
  iconPadding: {
    padding: SPACING.small,
  },
});

export default SignupScreen;
