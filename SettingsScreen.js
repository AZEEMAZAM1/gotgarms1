// // screens/SettingsScreen.js
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const SettingsScreen = ({ navigation }) => {
//   const handleSignOut = () => {
//     navigation.navigate('Auth');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Settings</Text>
//       <Button title="Sign Out" onPress={handleSignOut} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });

// export default SettingsScreen;
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SettingsScreen;
