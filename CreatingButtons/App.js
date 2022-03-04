/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Text
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>

      {/* Button Set 1 */}
      <View style={style.container}>
      <TouchableHighlight onPress={() => Alert.alert('Pressed')}>
        <View style={style.buttonSet1}>
          <Text style = {style.buttonText}>DEFAULT</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => Alert.alert('Pressed')}>
        <View style={style.buttonSet1}>
          <Text style = {style.buttonText}>ICON</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => Alert.alert('Pressed')}>
        <View style={style.buttonSet1}>
          <Text style = {style.buttonText}>LOADING</Text>
        </View>
      </TouchableHighlight>
    </View>

      {/* Button Set 2 */}
      <View style={style.container}>
      <TouchableHighlight onPress={() => Alert.alert('Pressed')}>
        <View style={style.buttonSet2}>
          <Text style = {style.buttonText}>DEFAULT</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => Alert.alert('Pressed')}>
        <View style={style.buttonSet2}>
          <Text style = {style.buttonText}>ICON</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => Alert.alert('Pressed')}>
        <View style={style.buttonSet2}>
          <Text style = {style.buttonText}>LOADING</Text>
        </View>
      </TouchableHighlight>
    </View>

      {/* Button Set 3 */}
      <View style={style.container}>
      <TouchableHighlight onPress={() => Alert.alert('Pressed')}>
        <View style={style.buttonSet3}>
          <Text style = {style.buttonTextwbg}>DEFAULT</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => Alert.alert('Pressed')}>
        <View style={style.buttonSet3}>
          <Text style = {style.buttonTextwbg}>ICON</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => Alert.alert('Pressed')}>
        <View style={style.buttonSet3}>
          <Text style = {style.buttonTextwbg}>LOADING</Text>
        </View>
      </TouchableHighlight>
    </View>
    </SafeAreaView>
  );
};

const style = {
  container: {
    padding: 24,
    margin: 12
  },
  buttonSet1: {
    marginTop: 8,
    alignItems: 'center'
  },
  buttonSet2: {
    marginTop: 8,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    marginHorizontal: 72
  },
  buttonSet3: {
    marginTop: 8,
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 72,
    backgroundColor: "blue"
  },
  buttonText: {
    color: "blue",
  },

  // With background
  buttonTextwbg: { 
    color: "white",
  }
}

export default App;
