import * as React from "react";
import { WebView } from "react-native-webview";

export default class WebViewcomponent extends React.Component {
  render() {
    return (
      <WebView source={{ uri: "https://expo.io" }} style={{ marginTop: 20 }} />
    );
  }
}
