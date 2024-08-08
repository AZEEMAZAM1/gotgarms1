// // // // // // // // screens/AuthScreen.js
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

// // // // // // // const AuthScreen = ({ navigation }) => {
// // // // // // //   const [isSignUp, setIsSignUp] = useState(true);
// // // // // // //   const [email, setEmail] = useState('');
// // // // // // //   const [password, setPassword] = useState('');

// // // // // // //   const handleAuth = () => {
// // // // // // //     navigation.navigate('Design');
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <ImageBackground source={{ uri: 'https://example.com/bg-image.jpg' }} style={styles.background}>
// // // // // // //       <View style={styles.container}>
// // // // // // //         <Text style={styles.title}>{isSignUp ? 'Register' : 'Sign In'}</Text>
// // // // // // //         <TextInput 
// // // // // // //           placeholder="Email" 
// // // // // // //           value={email} 
// // // // // // //           onChangeText={setEmail} 
// // // // // // //           style={styles.input} 
// // // // // // //         />
// // // // // // //         <TextInput 
// // // // // // //           placeholder="Password" 
// // // // // // //           value={password} 
// // // // // // //           onChangeText={setPassword} 
// // // // // // //           secureTextEntry 
// // // // // // //           style={styles.input} 
// // // // // // //         />
// // // // // // //         <Button title={isSignUp ? 'Register' : 'Sign In'} onPress={handleAuth} />
// // // // // // //         <Button title={`Switch to ${isSignUp ? 'Sign In' : 'Register'}`} onPress={() => setIsSignUp(!isSignUp)} />
// // // // // // //       </View>
// // // // // // //     </ImageBackground>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   background: {
// // // // // // //     flex: 1,
// // // // // // //     resizeMode: 'cover',
// // // // // // //     justifyContent: 'center',
// // // // // // //   },
// // // // // // //   container: {
// // // // // // //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// // // // // // //     padding: 20,
// // // // // // //     margin: 20,
// // // // // // //     borderRadius: 10,
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: 24,
// // // // // // //     marginBottom: 20,
// // // // // // //     textAlign: 'center',
// // // // // // //   },
// // // // // // //   input: {
// // // // // // //     height: 40,
// // // // // // //     borderColor: 'gray',
// // // // // // //     borderWidth: 1,
// // // // // // //     marginBottom: 20,
// // // // // // //     paddingHorizontal: 10,
// // // // // // //   },
// // // // // // // });

// // // // // // // export default AuthScreen;
// // // // // // // screens/AuthScreen.js
// // // // // // import React, { useState } from 'react';
// // // // // // import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

// // // // // // const AuthScreen = ({ navigation }) => {
// // // // // //   const [isSignUp, setIsSignUp] = useState(true);
// // // // // //   const [email, setEmail] = useState('');
// // // // // //   const [password, setPassword] = useState('');

// // // // // //   const handleAuth = () => {
// // // // // //     navigation.navigate('Design');
// // // // // //   };

// // // // // //   return (
// // // // // //     <ImageBackground source={require('../assets/mountain.jpg')} style={styles.background}>
// // // // // //       <View style={styles.container}>
// // // // // //         <Text style={styles.title}>{isSignUp ? 'Register' : 'Sign In'}</Text>
// // // // // //         <TextInput 
// // // // // //           placeholder="Email" 
// // // // // //           value={email} 
// // // // // //           onChangeText={setEmail} 
// // // // // //           style={styles.input} 
// // // // // //         />
// // // // // //         <TextInput 
// // // // // //           placeholder="Password" 
// // // // // //           value={password} 
// // // // // //           onChangeText={setPassword} 
// // // // // //           secureTextEntry 
// // // // // //           style={styles.input} 
// // // // // //         />
// // // // // //         <Button title={isSignUp ? 'Register' : 'Sign In'} onPress={handleAuth} />
// // // // // //         <Button title={`Switch to ${isSignUp ? 'Sign In' : 'Register'}`} onPress={() => setIsSignUp(!isSignUp)} />
// // // // // //       </View>
// // // // // //     </ImageBackground>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   background: {
// // // // // //     flex: 1,
// // // // // //     resizeMode: 'cover',
// // // // // //     justifyContent: 'center',
// // // // // //   },
// // // // // //   container: {
// // // // // //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// // // // // //     padding: 20,
// // // // // //     margin: 20,
// // // // // //     borderRadius: 10,
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: 24,
// // // // // //     marginBottom: 20,
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   input: {
// // // // // //     height: 40,
// // // // // //     borderColor: 'gray',
// // // // // //     borderWidth: 1,
// // // // // //     marginBottom: 20,
// // // // // //     paddingHorizontal: 10,
// // // // // //   },
// // // // // // });

// // // // // // export default AuthScreen;
// // // // // // screens/AuthScreen.js
// // // // // import React, { useState } from 'react';
// // // // // import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground } from 'react-native';
// // // // // import * as ImagePicker from 'expo-image-picker';
// // // // // import { Picker } from '@react-native-picker/picker';

// // // // // const AuthScreen = ({ navigation }) => {
// // // // //   const [isSignUp, setIsSignUp] = useState(true);
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [password, setPassword] = useState('');
// // // // //   const [name, setName] = useState('');
// // // // //   const [country, setCountry] = useState('');
// // // // //   const [image, setImage] = useState(null);

// // // // //   const handleAuth = () => {
// // // // //     navigation.navigate('Design');
// // // // //   };

// // // // //   const pickImage = async () => {
// // // // //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // //     if (status !== 'granted') {
// // // // //       alert('Sorry, we need camera roll permissions to make this work!');
// // // // //       return;
// // // // //     }

// // // // //     let result = await ImagePicker.launchImageLibraryAsync({
// // // // //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// // // // //       allowsEditing: true,
// // // // //       aspect: [4, 3],
// // // // //       quality: 1,
// // // // //     });

// // // // //     if (!result.canceled) {
// // // // //       setImage(result.uri);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <ImageBackground source={require('../assets/mountain.jpg')} style={styles.background}>
// // // // //       <View style={styles.container}>
// // // // //         <Text style={styles.title}>{isSignUp ? 'Register' : 'Sign In'}</Text>
// // // // //         {isSignUp && (
// // // // //           <>
// // // // //             <TextInput 
// // // // //               placeholder="Name" 
// // // // //               value={name} 
// // // // //               onChangeText={setName} 
// // // // //               style={styles.input} 
// // // // //             />
// // // // //             <Picker
// // // // //               selectedValue={country}
// // // // //               style={styles.picker}
// // // // //               onValueChange={(itemValue) => setCountry(itemValue)}
// // // // //             >
// // // // //               <Picker.Item label="Select Country" value="" />
// // // // //               <Picker.Item label="United States" value="US" />
// // // // //               <Picker.Item label="Canada" value="CA" />
// // // // //               <Picker.Item label="United Kingdom" value="UK" />
// // // // //               <Picker.Item label="Australia" value="AU" />
// // // // //               {/* Add more countries as needed */}
// // // // //             </Picker>
// // // // //             <Button title="Pick a profile picture" onPress={pickImage} />
// // // // //             {image && <Image source={{ uri: image }} style={styles.image} />}
// // // // //           </>
// // // // //         )}
// // // // //         <TextInput 
// // // // //           placeholder="Email" 
// // // // //           value={email} 
// // // // //           onChangeText={setEmail} 
// // // // //           style={styles.input} 
// // // // //         />
// // // // //         <TextInput 
// // // // //           placeholder="Password" 
// // // // //           value={password} 
// // // // //           onChangeText={setPassword} 
// // // // //           secureTextEntry 
// // // // //           style={styles.input} 
// // // // //         />
// // // // //         <Button title={isSignUp ? 'Register' : 'Sign In'} onPress={handleAuth} />
// // // // //         <Button title={`Switch to ${isSignUp ? 'Sign In' : 'Register'}`} onPress={() => setIsSignUp(!isSignUp)} />
// // // // //       </View>
// // // // //     </ImageBackground>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   background: {
// // // // //     flex: 1,
// // // // //     resizeMode: 'cover',
// // // // //     justifyContent: 'center',
// // // // //   },
// // // // //   container: {
// // // // //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// // // // //     padding: 20,
// // // // //     margin: 20,
// // // // //     borderRadius: 10,
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: 24,
// // // // //     marginBottom: 20,
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   input: {
// // // // //     height: 40,
// // // // //     borderColor: 'gray',
// // // // //     borderWidth: 1,
// // // // //     marginBottom: 20,
// // // // //     paddingHorizontal: 10,
// // // // //   },
// // // // //   picker: {
// // // // //     height: 50,
// // // // //     width: '100%',
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   image: {
// // // // //     width: 100,
// // // // //     height: 100,
// // // // //     marginTop: 20,
// // // // //     alignSelf: 'center',
// // // // //   },
// // // // // });

// // // // // export default AuthScreen;
// // // // // screens/AuthScreen.js
// // // // import React, { useState } from 'react';
// // // // import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
// // // // import * as ImagePicker from 'expo-image-picker';
// // // // import { Picker } from '@react-native-picker/picker';

// // // // const AuthScreen = ({ navigation }) => {
// // // //   const [isSignUp, setIsSignUp] = useState(true);
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [name, setName] = useState('');
// // // //   const [country, setCountry] = useState('');
// // // //   const [image, setImage] = useState(null);

// // // //   const handleAuth = () => {
// // // //     navigation.navigate('Design');
// // // //   };

// // // //   const pickImage = async () => {
// // // //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // //     if (status !== 'granted') {
// // // //       alert('Sorry, we need camera roll permissions to make this work!');
// // // //       return;
// // // //     }

// // // //     let result = await ImagePicker.launchImageLibraryAsync({
// // // //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// // // //       allowsEditing: true,
// // // //       aspect: [4, 3],
// // // //       quality: 1,
// // // //     });

// // // //     if (!result.canceled) {
// // // //       setImage(result.uri);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <ImageBackground source={require('../assets/mountain.jpg')} style={styles.background}>
// // // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // // //         <View style={styles.container}>
// // // //           <Text style={styles.title}>{isSignUp ? 'Register' : 'Sign In'}</Text>
// // // //           {isSignUp && (
// // // //             <>
// // // //               <TextInput 
// // // //                 placeholder="Name" 
// // // //                 value={name} 
// // // //                 onChangeText={setName} 
// // // //                 style={styles.input} 
// // // //               />
// // // //               <Picker
// // // //                 selectedValue={country}
// // // //                 style={styles.picker}
// // // //                 onValueChange={(itemValue) => setCountry(itemValue)}
// // // //               >
// // // //                 <Picker.Item label="Select Country" value="" />
// // // //                 <Picker.Item label="United States" value="US" />
// // // //                 <Picker.Item label="Canada" value="CA" />
// // // //                 <Picker.Item label="United Kingdom" value="UK" />
// // // //                 <Picker.Item label="Australia" value="AU" />
// // // //                 {/* Add more countries as needed */}
// // // //               </Picker>
// // // //               <Button title="Pick a profile picture" onPress={pickImage} />
// // // //               {image && <Image source={{ uri: image }} style={styles.image} />}
// // // //             </>
// // // //           )}
// // // //           <TextInput 
// // // //             placeholder="Email" 
// // // //             value={email} 
// // // //             onChangeText={setEmail} 
// // // //             style={styles.input} 
// // // //           />
// // // //           <TextInput 
// // // //             placeholder="Password" 
// // // //             value={password} 
// // // //             onChangeText={setPassword} 
// // // //             secureTextEntry 
// // // //             style={styles.input} 
// // // //           />
// // // //           <View style={styles.buttonContainer}>
// // // //             <Button title={isSignUp ? 'Register' : 'Sign In'} onPress={handleAuth} />
// // // //           </View>
// // // //           <View style={styles.buttonContainer}>
// // // //             <Button title={`Switch to ${isSignUp ? 'Sign In' : 'Register'}`} onPress={() => setIsSignUp(!isSignUp)} />
// // // //           </View>
// // // //         </View>
// // // //       </ScrollView>
// // // //     </ImageBackground>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   background: {
// // // //     flex: 1,
// // // //     resizeMode: 'cover',
// // // //   },
// // // //   scrollContainer: {
// // // //     flexGrow: 1,
// // // //     justifyContent: 'center',
// // // //   },
// // // //   container: {
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// // // //     padding: 20,
// // // //     margin: 20,
// // // //     borderRadius: 10,
// // // //   },
// // // //   title: {
// // // //     fontSize: 24,
// // // //     marginBottom: 20,
// // // //     textAlign: 'center',
// // // //   },
// // // //   input: {
// // // //     height: 40,
// // // //     borderColor: 'gray',
// // // //     borderWidth: 1,
// // // //     marginBottom: 20,
// // // //     paddingHorizontal: 10,
// // // //     borderRadius: 5,
// // // //   },
// // // //   picker: {
// // // //     height: 50,
// // // //     width: '100%',
// // // //     marginBottom: 20,
// // // //     borderRadius: 5,
// // // //   },
// // // //   image: {
// // // //     width: 100,
// // // //     height: 100,
// // // //     marginTop: 20,
// // // //     alignSelf: 'center',
// // // //     borderRadius: 50,
// // // //   },
// // // //   buttonContainer: {
// // // //     marginVertical: 10,
// // // //   },
// // // // });

// // // // export default AuthScreen;
// // // // screens/AuthScreen.js
// // // import React, { useState } from 'react';
// // // import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
// // // import * as ImagePicker from 'expo-image-picker';
// // // import { Picker } from '@react-native-picker/picker';

// // // const AuthScreen = ({ navigation }) => {
// // //   const [isSignUp, setIsSignUp] = useState(true);
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [name, setName] = useState('');
// // //   const [country, setCountry] = useState('');
// // //   const [image, setImage] = useState(null);

// // //   const handleAuth = () => {
// // //     navigation.navigate('Design');
// // //   };

// // //   const pickImage = async () => {
// // //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // //     if (status !== 'granted') {
// // //       alert('Sorry, we need camera roll permissions to make this work!');
// // //       return;
// // //     }

// // //     let result = await ImagePicker.launchImageLibraryAsync({
// // //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// // //       allowsEditing: true,
// // //       aspect: [4, 3],
// // //       quality: 1,
// // //     });

// // //     if (!result.canceled) {
// // //       setImage(result.uri);
// // //     }
// // //   };

// // //   return (
// // //     <ImageBackground source={require('../assets/mountain.jpg')} style={styles.background}>
// // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // //         <View style={styles.container}>
// // //           <Text style={styles.title}>{isSignUp ? 'Register' : 'Sign In'}</Text>
// // //           {isSignUp && (
// // //             <>
// // //               <TextInput 
// // //                 placeholder="Name" 
// // //                 value={name} 
// // //                 onChangeText={setName} 
// // //                 style={styles.input} 
// // //               />
// // //               <View style={styles.sectionContainer}>
// // //                 <Text style={styles.label}>Select Country:</Text>
// // //                 <Picker
// // //                   selectedValue={country}
// // //                   style={styles.picker}
// // //                   onValueChange={(itemValue) => setCountry(itemValue)}
// // //                 >
// // //                   <Picker.Item label="Select Country" value="" />
// // //                   <Picker.Item label="United States" value="US" />
// // //                   <Picker.Item label="Canada" value="CA" />
// // //                   <Picker.Item label="United Kingdom" value="UK" />
// // //                   <Picker.Item label="Australia" value="AU" />
// // //                   {/* Add more countries as needed */}
// // //                 </Picker>
// // //               </View>
// // //               <View style={styles.sectionContainer}>
// // //                 <Button title="Pick a profile picture" onPress={pickImage} />
// // //                 {image && <Image source={{ uri: image }} style={styles.image} />}
// // //               </View>
// // //             </>
// // //           )}
// // //           <TextInput 
// // //             placeholder="Email" 
// // //             value={email} 
// // //             onChangeText={setEmail} 
// // //             style={styles.input} 
// // //           />
// // //           <TextInput 
// // //             placeholder="Password" 
// // //             value={password} 
// // //             onChangeText={setPassword} 
// // //             secureTextEntry 
// // //             style={styles.input} 
// // //           />
// // //           <View style={styles.buttonContainer}>
// // //             <Button title={isSignUp ? 'Register' : 'Sign In'} onPress={handleAuth} />
// // //           </View>
// // //           <View style={styles.buttonContainer}>
// // //             <Button title={`Switch to ${isSignUp ? 'Sign In' : 'Register'}`} onPress={() => setIsSignUp(!isSignUp)} />
// // //           </View>
// // //         </View>
// // //       </ScrollView>
// // //     </ImageBackground>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   background: {
// // //     flex: 1,
// // //     resizeMode: 'cover',
// // //   },
// // //   scrollContainer: {
// // //     flexGrow: 1,
// // //     justifyContent: 'center',
// // //   },
// // //   container: {
// // //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// // //     padding: 20,
// // //     margin: 20,
// // //     borderRadius: 10,
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     marginBottom: 20,
// // //     textAlign: 'center',
// // //   },
// // //   input: {
// // //     height: 40,
// // //     borderColor: 'gray',
// // //     borderWidth: 1,
// // //     marginBottom: 20,
// // //     paddingHorizontal: 10,
// // //     borderRadius: 5,
// // //   },
// // //   sectionContainer: {
// // //     marginBottom: 20,
// // //   },
// // //   label: {
// // //     marginBottom: 10,
// // //   },
// // //   picker: {
// // //     height: 50,
// // //     width: '100%',
// // //     borderColor: 'gray',
// // //     borderWidth: 1,
// // //     borderRadius: 5,
// // //   },
// // //   image: {
// // //     width: 100,
// // //     height: 100,
// // //     marginTop: 20,
// // //     alignSelf: 'center',
// // //     borderRadius: 50,
// // //   },
// // //   buttonContainer: {
// // //     marginVertical: 10,
// // //   },
// // // });

// // // export default AuthScreen;
// // // screens/AuthScreen.js
// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
// // import * as ImagePicker from 'expo-image-picker';
// // import { Picker } from '@react-native-picker/picker';

// // const AuthScreen = ({ navigation }) => {
// //   const [isSignUp, setIsSignUp] = useState(true);
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [name, setName] = useState('');
// //   const [country, setCountry] = useState('');
// //   const [image, setImage] = useState(null);

// //   const handleAuth = () => {
// //     navigation.navigate('Design');
// //   };

// //   const pickImage = async () => {
// //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// //     if (status !== 'granted') {
// //       alert('Sorry, we need camera roll permissions to make this work!');
// //       return;
// //     }

// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 1,
// //     });

// //     if (!result.canceled) {
// //       setImage(result.uri);
// //     }
// //   };

// //   return (
// //     <ImageBackground source={require('../assets/mountain.jpg')} style={styles.background}>
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         <View style={styles.container}>
// //           <Text style={styles.title}>{isSignUp ? 'Register' : 'Sign In'}</Text>
// //           {isSignUp && (
// //             <>
// //               <TextInput 
// //                 placeholder="Name" 
// //                 value={name} 
// //                 onChangeText={setName} 
// //                 style={styles.input} 
// //               />
// //               <View style={styles.sectionContainer}>
// //                 <Text style={styles.label}>Select Country:</Text>
// //                 <View style={styles.pickerContainer}>
// //                   <Picker
// //                     selectedValue={country}
// //                     style={styles.picker}
// //                     onValueChange={(itemValue) => setCountry(itemValue)}
// //                   >
// //                     <Picker.Item label="Select Country" value="" />
// //                     <Picker.Item label="United States" value="US" />
// //                     <Picker.Item label="Canada" value="CA" />
// //                     <Picker.Item label="United Kingdom" value="UK" />
// //                     <Picker.Item label="Australia" value="AU" />
// //                     {/* Add more countries as needed */}
// //                   </Picker>
// //                 </View>
// //               </View>
// //               <View style={styles.sectionContainer}>
// //                 <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
// //                   <Text style={styles.imagePickerButtonText}>Pick a profile picture</Text>
// //                 </TouchableOpacity>
// //                 {image && <Image source={{ uri: image }} style={styles.image} />}
// //               </View>
// //             </>
// //           )}
// //           <TextInput 
// //             placeholder="Email" 
// //             value={email} 
// //             onChangeText={setEmail} 
// //             style={styles.input} 
// //           />
// //           <TextInput 
// //             placeholder="Password" 
// //             value={password} 
// //             onChangeText={setPassword} 
// //             secureTextEntry 
// //             style={styles.input} 
// //           />
// //           <View style={styles.buttonContainer}>
// //             <Button title={isSignUp ? 'Register' : 'Sign In'} onPress={handleAuth} />
// //           </View>
// //           <View style={styles.buttonContainer}>
// //             <Button title={`Switch to ${isSignUp ? 'Sign In' : 'Register'}`} onPress={() => setIsSignUp(!isSignUp)} />
// //           </View>
// //         </View>
// //       </ScrollView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //     resizeMode: 'cover',
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //   },
// //   container: {
// //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// //     padding: 20,
// //     margin: 20,
// //     borderRadius: 10,
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     marginBottom: 20,
// //     paddingHorizontal: 10,
// //     borderRadius: 5,
// //   },
// //   sectionContainer: {
// //     marginBottom: 20,
// //   },
// //   label: {
// //     marginBottom: 10,
// //   },
// //   pickerContainer: {
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     overflow: 'hidden',
// //   },
// //   picker: {
// //     height: 50,
// //     width: '100%',
// //   },
// //   imagePickerButton: {
// //     backgroundColor: '#007BFF',
// //     padding: 10,
// //     borderRadius: 5,
// //     alignItems: 'center',
// //   },
// //   imagePickerButtonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   image: {
// //     width: 100,
// //     height: 100,
// //     marginTop: 20,
// //     alignSelf: 'center',
// //     borderRadius: 50,
// //   },
// //   buttonContainer: {
// //     marginVertical: 10,
// //   },
// // });

// // export default AuthScreen;
// // screens/AuthScreen.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Picker } from '@react-native-picker/picker';

// const AuthScreen = ({ navigation }) => {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [country, setCountry] = useState('');
//   const [image, setImage] = useState(null);

//   const handleAuth = () => {
//     navigation.navigate('Design');
//   };

//   const pickImage = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       alert('Sorry, we need camera roll permissions to make this work!');
//       return;
//     }

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.uri);
//     }
//   };

//   return (
//     <ImageBackground source={require('../assets/mountain.jpg')} style={styles.background}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.container}>
//           <Text style={styles.title}>{isSignUp ? 'Register' : 'Sign In'}</Text>
//           {isSignUp && (
//             <>
//               <TextInput 
//                 placeholder="Name" 
//                 value={name} 
//                 onChangeText={setName} 
//                 style={styles.input} 
//               />
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.label}>Select Country:</Text>
//                 <View style={styles.pickerContainer}>
//                   <Picker
//                     selectedValue={country}
//                     style={styles.picker}
//                     onValueChange={(itemValue) => setCountry(itemValue)}
//                   >
//                     <Picker.Item label="Select Country" value="" />
//                     <Picker.Item label="United States" value="US" />
//                     <Picker.Item label="Canada" value="CA" />
//                     <Picker.Item label="United Kingdom" value="UK" />
//                     <Picker.Item label="Australia" value="AU" />
//                     {/* Add more countries as needed */}
//                   </Picker>
//                 </View>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
//                   <Text style={styles.imagePickerButtonText}>Pick a profile picture</Text>
//                 </TouchableOpacity>
//                 {image && <Image source={{ uri: image }} style={styles.image} />}
//               </View>
//             </>
//           )}
//           <TextInput 
//             placeholder="Email" 
//             value={email} 
//             onChangeText={setEmail} 
//             style={styles.input} 
//           />
//           <TextInput 
//             placeholder="Password" 
//             value={password} 
//             onChangeText={setPassword} 
//             secureTextEntry 
//             style={styles.input} 
//           />
//           <View style={styles.buttonContainer}>
//             <Button title={isSignUp ? 'Register' : 'Sign In'} onPress={handleAuth} />
//           </View>
//           <View style={styles.buttonContainer}>
//             <Button title={`Switch to ${isSignUp ? 'Sign In' : 'Register'}`} onPress={() => setIsSignUp(!isSignUp)} />
//           </View>
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: 20,
//     margin: 20,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   sectionContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     marginBottom: 10,
//   },
//   pickerContainer: {
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//   },
//   imagePickerButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   imagePickerButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginTop: 20,
//     alignSelf: 'center',
//     borderRadius: 50,
//   },
//   buttonContainer: {
//     marginVertical: 10,
//   },
// });

// export default AuthScreen;
// screens/AuthScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

const AuthScreen = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(null);

  const handleAuth = () => {
    navigation.navigate('Design');
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <ImageBackground source={require('../assets/mountain.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>{isSignUp ? 'Register' : 'Sign In'}</Text>
          {isSignUp && (
            <>
              <TextInput 
                placeholder="Name" 
                value={name} 
                onChangeText={setName} 
                style={styles.input} 
              />
              <View style={styles.sectionContainer}>
                <Text style={styles.label}>Select Country:</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={country}
                    style={styles.picker}
                    onValueChange={(itemValue) => setCountry(itemValue)}
                  >
                    <Picker.Item label="Select Country" value="" />
                    <Picker.Item label="United States" value="US" />
                    <Picker.Item label="Canada" value="CA" />
                    <Picker.Item label="United Kingdom" value="UK" />
                    <Picker.Item label="Australia" value="AU" />
                    {/* Add more countries as needed */}
                  </Picker>
                </View>
              </View>
              <View style={styles.sectionContainer}>
                <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
                  <Text style={styles.imagePickerButtonText}>Pick a profile picture</Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={styles.image} />}
              </View>
            </>
          )}
          <TextInput 
            placeholder="Email" 
            value={email} 
            onChangeText={setEmail} 
            style={styles.input} 
          />
          <TextInput 
            placeholder="Password" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry 
            style={styles.input} 
          />
          <View style={styles.buttonContainer}>
            <Button title={isSignUp ? 'Register' : 'Sign In'} onPress={handleAuth} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title={`Switch to ${isSignUp ? 'Sign In' : 'Register'}`} onPress={() => setIsSignUp(!isSignUp)} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
  },
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white', // Ensure background is white for better visibility
  },
  picker: {
    height: 50,
    width: '100%',
  },
  imagePickerButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  imagePickerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 50,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  ...Platform.select({
    ios: {
      pickerContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 20,
        backgroundColor: 'white', // Ensure background is white for better visibility
      },
    },
    android: {
      pickerContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 20,
        backgroundColor: 'white', // Ensure background is white for better visibility
      },
    },
  }),
});

export default AuthScreen;
