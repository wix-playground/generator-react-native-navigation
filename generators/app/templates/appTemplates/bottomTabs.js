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
                        text: 'Screen 1',
                        icon: require('./assets/one.png'),
                        selectedIcon: require('./assets/one.png'),
                        selectedIconColor: '#0f0',
                        selectedTextColor: '#0f0'
                      },
                      topBar: {
                        title: {
                          text: 'First Screen'
                        }
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
                        text: 'Screen 2',
                        icon: require('./assets/two.png'),
                        selectedIcon: require('./assets/two.png'),
                        selectedIconColor: '#0f0',
                        selectedTextColor: '#0f0'
                      },
                      topBar: {
                        title: {
                          text: 'Second Screen'
                        }
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
