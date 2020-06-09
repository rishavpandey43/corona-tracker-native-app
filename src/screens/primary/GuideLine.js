// * Import required modules/dependencies
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Header} from 'react-native-elements';

// * Import all store related stuffs

// * Import all screens/components

// * Import utilites

// * Import all styling stuffs
import mainStyles from '../../styles/mainStyles';
import variables from '../../styles/variables';

class GuideLineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={mainStyles.container}>
        <View>
          <Header
            centerComponent={{
              text: 'World Dashboard',
              style: {color: '#fff'},
            }}
            rightComponent={{icon: 'home', color: '#fff'}}
            containerStyle={mainStyles.header}
            backgroundColor={variables.mainThemeColor}
          />
          <Text> Guideline Screen </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default GuideLineScreen;
