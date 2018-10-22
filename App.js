/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Picker, Image} from 'react-native';

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
  onChange(state) {
      this.setState(state);
  }

  render() {
    return (
      <View style={styles.container}>
      <Image
                style={{width: 300, height: 200}}
                source={require('./Resources/images/Avo.gif')}
              />
        <Text style={styles.welcome}>Welcome to Avohouse</Text>
        <Text style={styles.instructions}>How many Avocados must you give up for a house?</Text>
        <Text style={styles.instructions}>Which Country?</Text>
        <Picker
            selectedValue={this.state.Country}
          style={{ height: 70, width: 250 }}
          onValueChange={(itemValue,itemIndex) => this.setState({Country : itemValue})}>
          <Picker.Item label="USA" value=".75" />
          <Picker.Item label="UK" value="1" />
        </Picker>
        <Text style={styles.instructions}>What property?</Text>
        <Picker
        selectedValue={this.state.Property}
          style={{ height: 70, width: 250 }}
          onValueChange={(itemValue,itemIndex) => this.setState({Property : itemValue})}>
          <Picker.Item label="House" value="250000" />
          <Picker.Item label="Flat" value="175000" />
        </Picker>
        <Text>An avocado costs: {this.state.Country}</Text>
        <Text>Average property cost is: {this.state.Property}</Text>
        <Text>You need to give up {this.state.Country * this.state.Property} Avocados</Text>
        <Text>Give up {(this.state.Country * this.state.Property) / 9125} per day for 25 years!</Text>
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
