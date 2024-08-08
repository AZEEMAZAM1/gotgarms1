
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Animated, SafeAreaView, ScrollView, Dimensions, Modal, TouchableOpacity } from 'react-native';

// const popularColors = [
//   '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF6',
//   '#F3FF33', '#FF8F33', '#8F33FF', '#33FF8F', '#FF3333'
// ];

// const fontFamilies = [
//   'sans-serif', 'serif', 'monospace', 'cursive', 'fantasy', 
//   'Arial', 'Verdana', 'Courier New', 'Times New Roman', 'Georgia'
// ];

// const fontSizes = [16, 18, 20, 22, 24, 26, 28, 30, 32, 34];

// const DesignScreen = () => {
//   const [shirtSize, setShirtSize] = useState('M');
//   const [text, setText] = useState('');
//   const [imageOpacity] = useState(new Animated.Value(1)); // Animation for the shirt image
//   const [shirtColor, setShirtColor] = useState('#FFFFFF'); // State for shirt color
//   const [textColor, setTextColor] = useState('#FFFFFF');
//   const [fontSize, setFontSize] = useState(24);
//   const [fontFamily, setFontFamily] = useState('sans-serif');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [colorType, setColorType] = useState('');
//   const [fontModalVisible, setFontModalVisible] = useState(false);
//   const [fontType, setFontType] = useState('');

//   const openColorPicker = (type) => {
//     setColorType(type);
//     setModalVisible(true);
//   };

//   const saveColor = (color) => {
//     if (colorType === 'shirtColor') {
//       setShirtColor(color);
//     } else if (colorType === 'textColor') {
//       setTextColor(color);
//     }
//     setModalVisible(false);
//   };

//   const openFontModal = (type) => {
//     setFontType(type);
//     setFontModalVisible(true);
//   };

//   const saveFont = (value) => {
//     if (fontType === 'fontSize') {
//       setFontSize(value);
//     } else if (fontType === 'fontFamily') {
//       setFontFamily(value);
//     }
//     setFontModalVisible(false);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ImageBackground source={require('./gg.jpg')} style={styles.backgroundImage}>
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <View style={styles.container}>
//             <Text style={styles.title}>Design Your Shirt</Text>

//             <View style={styles.sectionContainer}>
//               <Text>Select Shirt Size:</Text>
//               <TouchableOpacity onPress={() => openColorPicker('shirtSize')} style={styles.input}>
//                 <Text style={styles.selectedValue}>{shirtSize}</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.sectionContainer}>
//               <TextInput
//                 placeholder="Enter Text that you want to appear on shirt"
//                 value={text}
//                 onChangeText={setText}
//                 style={styles.input}
//               />
//             </View>

//             <View style={styles.sectionContainer}>
//               <Text>Select Shirt Color:</Text>
//               <TouchableOpacity onPress={() => openColorPicker('shirtColor')} style={[styles.colorPreview, { backgroundColor: shirtColor }]}>
//                 <Text style={styles.selectedValue}>Pick Color</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.sectionContainer}>
//               <Text>Select Text Color:</Text>
//               <TouchableOpacity onPress={() => openColorPicker('textColor')} style={[styles.colorPreview, { backgroundColor: textColor }]}>
//                 <Text style={styles.selectedValue}>Pick Color</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.sectionContainer}>
//               <Text>Select Font Size:</Text>
//               <TouchableOpacity onPress={() => openFontModal('fontSize')} style={styles.input}>
//                 <Text style={styles.selectedValue}>{fontSize}</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.sectionContainer}>
//               <Text>Select Font Family:</Text>
//               <TouchableOpacity onPress={() => openFontModal('fontFamily')} style={styles.input}>
//                 <Text style={styles.selectedValue}>{fontFamily}</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.sectionContainer}>
//               <Button title="Pick an image" onPress={() => {}} />
//               <View style={styles.imageContainer}>
//                 <Animated.Image
//                   source={require('./bb.jpg')}
//                   style={[styles.image, { opacity: imageOpacity, tintColor: shirtColor }]}
//                 />
//                 <Text style={[styles.overlayText, { color: textColor, fontSize, fontFamily }]}>
//                   {text}
//                 </Text>
//               </View>
//             </View>

//             <Button title="Save Design and " onPress={() => alert('Design saved!')} />
//           </View>
//         </ScrollView>

//         {/* Color Picker Modal */}
//         <Modal visible={modalVisible} animationType="slide" transparent={true}>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Select Color</Text>
//               <View style={styles.colorsContainer}>
//                 {popularColors.map((color, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[styles.colorOption, { backgroundColor: color }]}
//                     onPress={() => saveColor(color)}
//                   />
//                 ))}
//               </View>
//               <Button title="Close" onPress={() => setModalVisible(false)} />
//             </View>
//           </View>
//         </Modal>

//         {/* Font Picker Modal */}
//         <Modal visible={fontModalVisible} animationType="slide" transparent={true}>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Select {fontType === 'fontSize' ? 'Font Size' : 'Font Family'}</Text>
//               {fontType === 'fontSize' ? (
//                 <View style={styles.fontOptionsContainer}>
//                   {fontSizes.map((size, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.fontOption}
//                       onPress={() => saveFont(size)}
//                     >
//                       <Text style={{ fontSize: size }}>{size}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               ) : (
//                 <View style={styles.fontOptionsContainer}>
//                   {fontFamilies.map((family, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.fontOption}
//                       onPress={() => saveFont(family)}
//                     >
//                       <Text style={{ fontFamily: family }}>{family}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               )}
//               <Button title="Close" onPress={() => setFontModalVisible(false)} />
//             </View>
//           </View>
//         </Modal>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     minHeight: Dimensions.get('window').height,
//   },
//   container: {
//     width: '100%',
//     maxWidth: 400,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: 20,
//     marginVertical: 20,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   sectionContainer: {
//     marginBottom: 20,
//     width: '100%',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   colorPreview: {
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
//   selectedValue: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   imageContainer: {
//     position: 'relative',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     aspectRatio: 4 / 3, // Maintain aspect ratio
//     borderRadius: 10,
//   },
//   image: {
//     width: '100%',
//     height: undefined,
//     aspectRatio: 4 / 3,
//     borderRadius: 10,
//   },
//   overlayText: {
//     position: 'absolute',
//     textAlign: 'center',
//     backgroundColor: 'transparent',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: 300,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   colorsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   colorOption: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     margin: 5,
//   },
//   fontOptionsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   fontOption: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     margin: 5,
//   },
// });

// export default DesignScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Animated, SafeAreaView, ScrollView, Dimensions, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const popularColors = [
  '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF6',
  '#F3FF33', '#FF8F33', '#8F33FF', '#33FF8F', '#FF3333'
];

const fontFamilies = [
  'sans-serif', 'serif', 'monospace', 'cursive', 'fantasy', 
  'Arial', 'Verdana', 'Courier New', 'Times New Roman', 'Georgia'
];

const fontSizes = [16, 18, 20, 22, 24, 26, 28, 30, 32, 34];

const DesignScreen = () => {
  const [shirtSize, setShirtSize] = useState('M');
  const [text, setText] = useState('');
  const [imageOpacity] = useState(new Animated.Value(1)); // Animation for the shirt image
  const [shirtColor, setShirtColor] = useState('#FFFFFF'); // State for shirt color
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [fontSize, setFontSize] = useState(24);
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [modalVisible, setModalVisible] = useState(false);
  const [colorType, setColorType] = useState('');
  const [fontModalVisible, setFontModalVisible] = useState(false);
  const [fontType, setFontType] = useState('');

  const navigation = useNavigation();

  const openColorPicker = (type) => {
    setColorType(type);
    setModalVisible(true);
  };

  const saveColor = (color) => {
    if (colorType === 'shirtColor') {
      setShirtColor(color);
    } else if (colorType === 'textColor') {
      setTextColor(color);
    }
    setModalVisible(false);
  };

  const openFontModal = (type) => {
    setFontType(type);
    setFontModalVisible(true);
  };

  const saveFont = (value) => {
    if (fontType === 'fontSize') {
      setFontSize(value);
    } else if (fontType === 'fontFamily') {
      setFontFamily(value);
    }
    setFontModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('./gg.png')} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Design Your Shirt</Text>

            <View style={styles.sectionContainer}>
              <Text>Select Shirt Size:</Text>
              <TouchableOpacity onPress={() => openColorPicker('shirtSize')} style={styles.input}>
                <Text style={styles.selectedValue}>{shirtSize}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionContainer}>
              <TextInput
                placeholder="Enter Text that you want to appear on shirt"
                value={text}
                onChangeText={setText}
                style={styles.input}
              />
            </View>

            <View style={styles.sectionContainer}>
              <Text>Select Shirt Color:</Text>
              <TouchableOpacity onPress={() => openColorPicker('shirtColor')} style={[styles.colorPreview, { backgroundColor: shirtColor }]}>
                <Text style={styles.selectedValue}>Pick Color</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionContainer}>
              <Text>Select Text Color:</Text>
              <TouchableOpacity onPress={() => openColorPicker('textColor')} style={[styles.colorPreview, { backgroundColor: textColor }]}>
                <Text style={styles.selectedValue}>Pick Color</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionContainer}>
              <Text>Select Font Size:</Text>
              <TouchableOpacity onPress={() => openFontModal('fontSize')} style={styles.input}>
                <Text style={styles.selectedValue}>{fontSize}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionContainer}>
              <Text>Select Font Family:</Text>
              <TouchableOpacity onPress={() => openFontModal('fontFamily')} style={styles.input}>
                <Text style={styles.selectedValue}>{fontFamily}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionContainer}>
              <Button title="Choose custom image to Print " onPress={() => {}} />
              <View style={styles.imageContainer}>
                <Animated.Image
                  source={require('./bb.jpg')}
                  style={[styles.image, { opacity: imageOpacity, tintColor: shirtColor }]}
                />
                <Text style={[styles.overlayText, { color: textColor, fontSize, fontFamily }]}>
                  {text}
                </Text>
              </View>
            </View>

            <Button title="confirm Design and send " onPress={() => alert('your order is in the queue!')} />
            <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
            <Button title="Logout" onPress={() => navigation.navigate('Logout')} />
          </View>
        </ScrollView>

        {/* Color Picker Modal */}
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Color</Text>
              <View style={styles.colorsContainer}>
                {popularColors.map((color, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.colorOption, { backgroundColor: color }]}
                    onPress={() => saveColor(color)}
                  />
                ))}
              </View>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>

        {/* Font Picker Modal */}
        <Modal visible={fontModalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select {fontType === 'fontSize' ? 'Font Size' : 'Font Family'}</Text>
              {fontType === 'fontSize' ? (
                <View style={styles.fontOptionsContainer}>
                  {fontSizes.map((size, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.fontOption}
                      onPress={() => saveFont(size)}
                    >
                      <Text style={{ fontSize: size }}>{size}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ) : (
                <View style={styles.fontOptionsContainer}>
                  {fontFamilies.map((family, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.fontOption}
                      onPress={() => saveFont(family)}
                    >
                      <Text style={{ fontFamily: family }}>{family}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              <Button title="Close" onPress={() => setFontModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    minHeight: Dimensions.get('window').height,
  },
  container: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  colorPreview: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedValue: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    aspectRatio: 4 / 3, // Maintain aspect ratio
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 4 / 3,
    borderRadius: 10,
  },
  overlayText: {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
  },
  fontOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fontOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 5,
  },
});

export default DesignScreen;
