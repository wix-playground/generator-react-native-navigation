const {Navigation} = require('react-native-navigation');

function start() {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [{
            stack: {
              children: [
                {
                  component: {
                    name: 'RNNBootstrap.screen',
                    passProps: {
                      screenName: 'Screen 1'
                    },
                    options: {
                      bottomTab: {
                        text: 'Screen 1'
                      }
                    }
                  }
                }
              ]
            }
          }, {
            stack: {
              children: [
                {
                  component: {
                    name: 'RNNBootstrap.screen',
                    passProps: {
                      screenName: 'Screen 2'
                    },
                    options: {
                      bottomTab: {
                        text: 'Screen 2'
                      }
                    }
                  }
                }
              ]
            }
          }]
        }
      }
    });
  });
}

module.exports = {
  start
};
