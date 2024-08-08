import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Perform logout logic here
    alert('Logged out!');
    navigation.navigate('Design'); // Navigate back to Design screen after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      <Button title="Confirm Logout" onPress={handleLogout} />
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

export default LogoutScreen;
