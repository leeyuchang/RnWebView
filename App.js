import React from 'react';
import {View} from 'react-native';
// import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import {ThemeProvider, lightTheme} from './src/theme';

const App = props => {
  return (
    <ThemeProvider theme={lightTheme}>
      <View style={{padding: 10}}>
        <SignupScreen />
        {/* <LoginScreen /> */}
      </View>
    </ThemeProvider>
  );
};

export default App;
