const React = require('react');
const {Component} = require('react');
const {View, Text, Button} = require('react-native');
const {Navigation} = require('react-native-navigation');

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
      <View style={styles.root} key={'root'}>
        <Text style={styles.h1}>{`${this.props.screenName}`}</Text>
        <Button title={`Push screen`} onPress={this.pushScreen} />
      </View>
    );
  }

  pushScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'RNNBootstrap.screen',
        passProps: {
          screenName: 'Pushed Screen'
        }
      }
    })
  }
}

module.exports = WelcomeScreen;

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7e7e7'
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
