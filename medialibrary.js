import React from "react";
import { View, Text, Button } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useEffect } from "react";
import * as Expo from "expo";

const Media = () => {
  useEffect(() => {
    async () => await MediaLibrary.requestPermissionsAsync();
  }, []);
  const mediaLibraryAsync = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: ["photo", "video"],
    });
    let video = await MediaLibrary.getAssetInfoAsync(media.assets[0]);

    console.log(video);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onPress={() => mediaLibraryAsync()}
        title="Do MediaLibrary Stuff"
      />
    </View>
  );
};

export default Media;
