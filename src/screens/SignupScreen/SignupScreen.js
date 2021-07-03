import React, {useState, useEffect, useContext, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import {showMessage} from 'react-native-flash-message';
// import {signUp, resetAuthState} from '../../store/actions';
import {Button, TextInput, Icon} from '../../components';
// import {NAVIGATION_TO_LOGIN_SCREEN} from '../../navigation/routes';
import Status from '../../magento/Status';
// import {magento} from '../../magento';
import {ThemeContext} from '../../theme';
import {translate} from '../../i18n';
import {SPACING, LIMITS} from '../../constants';
import {isEmailValid, isPasswordValid, isNonEmptyString} from '../../utils';

import {WithLocalSvg} from 'react-native-svg';
import CommerceImage from '../../assets/images/commerce-01.svg';
import {DIMENS} from '../../constants';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

// TODO: Check KeyboardAvoidingView behaviour on iOS, on Android it's working fine
const SignupScreen = ({navigation}) => {
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

  // const onSignupPress = () => {
  //   Keyboard.dismiss();
  //   if (!checkValidation()) {
  //     return;
  //   }
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
  // };

  return (
    <View>
      <View style={styles.imageContainer}>
        <WithLocalSvg width="100%" height={220} asset={CommerceImage} />
      </View>
      <TextInput
        placeholder={translate('common.email')}
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
        assignRef={component => {
          emailInputRef.current = component;
        }}
        errorMessage={
          form.incorrectEmail ? translate('errors.invalidEmail') : ''
        }
        returnKeyType={translate('common.keyboardNext')}
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
        placeholder={translate('common.password')}
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
        errorMessage={
          form.incorrectPassword ? translate('errors.invalidPassword') : ''
        }
        assignRef={component => {
          passwordInputRef.current = component;
        }}
        // onSubmitEditing={onSignupPress}
      />
      <Button
        loading={apiStatus === Status.LOADING}
        title={translate('common.signup')}
        // onPress={onSignupPress}
        style={styles.defaultMargin}
      />
      <Button
        type="clear"
        style={styles.defaultMargin}
        disabled={apiStatus === Status.LOADING}
        title={translate('signupScreen.haveAccount')}
        // onPress={() => navigation.navigate(NAVIGATION_TO_LOGIN_SCREEN)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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

SignupScreen.propTypes = propTypes;

SignupScreen.defaultProps = defaultProps;

// export default connect(null, {
//   signUp,
//   resetAuthState,
// })(SignupScreen);
export default SignupScreen;
