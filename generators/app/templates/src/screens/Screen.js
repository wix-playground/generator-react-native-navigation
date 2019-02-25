const React = require('react');
const { Component } = require('react');
const { View, Text } = require('react-native');

class WelcomeScreen extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'My Screen'
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.bar}>
        <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: 'red', alignSelf: 'center' }} />
        <View style={styles.root} key={'root'}>
          <Text style={styles.h1}>{`${this.props.screenName}`}</Text>
        </View>
        <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: 'red', alignSelf: 'center' }} />
      </View>
    );
  }
}

module.exports = WelcomeScreen;

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    margin: 30
  },
  footer: {
    fontSize: 10,
    color: '#888',
    marginTop: 10
  }
};
