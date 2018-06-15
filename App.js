import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import {Provider, FAB} from 'react-native-paper';

const reasons = require('./reasons.json');

export default class App extends Component {
  
  state={
    msg: 'clique'
  };

  getDay = () => {
      let now = new Date();
      let start = new Date(now.getFullYear(), 0, 0);
      let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
      let oneDay = 1000 * 60 * 60 * 24;
      let day = Math.floor(diff / oneDay);
      return day;
  }

  getMessage = () => {
      let day = this.getDay();
      let msg = reasons[day];
      this.setState({msg: 'teste'});
  }
  
  render() {
    return (
      <Provider>
          <View style={styles.container}>
              <View style={styles.textContainer}>
                  <Text style={styles.textStyle}>
                      {this.state.msg}
                  </Text>
              </View>
              <FAB
                  style={styles.fabStyle}
                  dark
                  icon="favorite"
                  onPress={this.getMessage} />
          </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
  },
  textContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
  },
  fabStyle: {
    backgroundColor: 'red'
  }
});
