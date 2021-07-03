// import React, {useEffect, useState} from 'react';
// import {WebView} from 'react-native-webview';
// import {
//   KeyboardAvoidingView,
//   StyleSheet,
//   Platform,
//   ActivityIndicator,
//   View,
//   Text,
// } from 'react-native';

// import axios from 'axios';
// import config from './config';

// const App = props => {
//   const [url, setUrl] = useState(null);
//   useEffect(() => {
//     (async () => {
//       try {
//         const {data} = await axios.post(
//           `${config.publicDomain}/onboard-merchant`,
//         );
//         setUrl(data.url);
//       } catch ({response: {data}}) {
//         //console.log('error', data);
//       }
//     })();
//   }, []);

//   const handleShouldStartLoadWithRequest = event => {
//     if (event.url.includes('youlpass')) {
//       console.log('pass here　handleShouldStartLoadWithRequest');
//       return false;
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       enabled
//       style={styles.container}
//       contentContainerStyle={styles.container}
//       behavior={Platform.select({ios: 'position', android: null})}>
//       <WebView
//         source={{uri: url}}
//         startInLoadingState={true}
//         renderLoading={LoadingIndicatorView}
//         onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
//         allowsBackForwardNavigationGestures={false}
//       />
//     </KeyboardAvoidingView>
//   );
// };

// function LoadingIndicatorView() {
//   return (
//     <View style={styles.activityIndicator}>
//       <ActivityIndicator color="#0a1142" size="large" />
//       <Text>Loading...</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   activityIndicator: {
//     backgroundColor: '#fff',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;
