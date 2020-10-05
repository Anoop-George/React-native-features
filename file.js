import React from "react";
import { View, Text, Button } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const File = () => {
  pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ multiple: false });
    console.log(result.uri);
    console.log(result);
  };
  return (
    <View style={{ margin: 39 }}>
      <Button title="Select Document" onPress={() => pickDocument()} />
    </View>
  );
};

export default File;
