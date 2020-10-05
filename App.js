import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImagePickerExample from "./Image";
import File from "./file";
import Social from "./googlelogin";
import Map from "./mapview";
import Media from "./medialibrary";
import Payment from "./payment";
import BrowserComponent from "./browser";
import Vedio from "./Vedio";
import WebViewcomponent from "./WebViewcomponent";

export default function App() {
  return (
    <>
      <WebViewcomponent />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
