const { Navigation } = require('react-native-navigation');
const Screen = require('./Screen');

function registerScreens() {
  Navigation.registerComponent(`RNNBootstrap.screen`, () => Screen);
}

module.exports = {
  registerScreens
};
