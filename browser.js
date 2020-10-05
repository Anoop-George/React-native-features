import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default class BrowserComponent extends Component {
  state = {
    result: null,
  };

  render() {
    return (
      <View style={{ top: 50 }}>
        <Button
          title="Open WebBrowser"
          onPress={this._handlePressButtonAsync}
        />
        <Text>{this.state.result && JSON.stringify(this.state.result)}</Text>
      </View>
    );
  }

  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    this.setState({ result });
  };
}
