const { Navigation } = require('react-native-navigation');

function start() {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'RNNBootstrap.screen'
              }
            }
          ]
        }
      }
    });
  });
}

module.exports = {
  start
};
