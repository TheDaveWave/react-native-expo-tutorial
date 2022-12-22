import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const placeHolderImage = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled) {
      // console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select an Image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeHolderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
