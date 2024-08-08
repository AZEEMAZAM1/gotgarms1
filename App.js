// // // import { StatusBar } from 'expo-status-bar';
// // // import { StyleSheet, Text, View } from 'react-native';

// // // export default function App() {
// // //   return (
// // //     <View style={styles.container}>
// // //       <Text>Open up App.js to start working on your app!</Text>
// // //       <StatusBar style="auto" />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#fff',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },
// // // });
// // // App.js
// // import React from 'react';
// // import AppNavigator from './navigation/AppNavigator';

// // export default function App() {
// //   return <AppNavigator />;
// // }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import DesignScreen from './screens/DesignScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Design" component={DesignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import DesignScreen from './DesignScreen.js';
// import SettingsScreen from './SettingsScreen';
// import LogoutScreen from './LogoutScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Design">
//         <Stack.Screen name="Design" component={DesignScreen} />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//         <Stack.Screen name="Logout" component={LogoutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
