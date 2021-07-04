import React from 'react';
import {View} from 'react-native';
// import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import {ThemeProvider, lightTheme} from './src/theme';
import FlashMessage from 'react-native-flash-message';

const App = props => {
  return (
    <ThemeProvider theme={lightTheme}>
      <View style={{padding: 10}}>
        <SignupScreen />
        <FlashMessage
          position="top"
          duration={2500}
          textStyle={{fontSize: 16}}
        />
        {/* <LoginScreen /> */}
      </View>
    </ThemeProvider>
  );
};

export default App;
