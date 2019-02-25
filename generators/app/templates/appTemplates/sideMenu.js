const { Navigation } = require('react-native-navigation');

function start() {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            stack: {
              children: [
                {
                  component: {
                    name: 'RNNBootstrap.screen',
                    passProps: {
                      screenName: 'left drawer'
                    }
                  }
                }
              ]
            }
          },
          center: {
            stack: {
              children: [
                {
                  component: {
                    name: 'RNNBootstrap.screen',
                    passProps: {
                      screenName: 'Side menu screen'
                    }
                  }
                }
              ]
            }
          }
        }
      }
    });
  });
}

module.exports = {
  start
};
