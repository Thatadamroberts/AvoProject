/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Picker} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(){
      super();
      this.state={
          Country : '',
          Property : '',
          GiveUp : ''
      };
      this.onChange = this.onChange.bind(this);
  }
  updateProperty = (Property) => {
  this.setState({ Property: Property })
  this.state.GiveUp = (this.state.Property.value / this.state.Country.value)
  }
  updateCountry = (Country) => {
  this.setState({ Country: Country })
  this.state.GiveUp = (this.state.Property.value / this.state.Country.value)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Avohouse</Text>
        <Text style={styles.instructions}>How many Avocados must you give up for a house?</Text>
        <Text style={styles.instructions}>Which Country?</Text>
        <Picker
            selectedValue={this.state.Country}
          style={{ height: 70, width: 250 }}
          onValueChange={(itemValue,itemIndex) => setState(Country : itemValue)}>
          <Picker.Item label="USA" value=".75" />
          <Picker.Item label="UK" value="1" />
        </Picker>
        <Text style={styles.instructions}>What property?</Text>
        <Picker
        selectedValue={this.state.Property}
          style={{ height: 70, width: 250 }}
          onValueChange={(itemValue,itemIndex) => setState(Property : itemValue)}>
          <Picker.Item label="House" value="250000" />
          <Picker.Item label="Flat" value="175000" />
        </Picker>
        <Text>{this.state.Country * this.state.Property}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
