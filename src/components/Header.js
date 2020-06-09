import React from 'react';
import {Text} from 'react-native';
import {Header, Image} from 'react-native-elements';

// * Import all styling stuffs
import mainStyles from '../styles/mainStyles';
import variables from '../styles/variables';

const HeaderComponent = () => (
  <Header
    leftComponent={() => (
      <Image
        source={require('../assets/icons/virus_icon2.png')}
        style={mainStyles.iconStyle}
      />
    )}
    centerComponent={{
      text: 'World Dashboard',
      style: {color: variables.mainThemeColor},
    }}
    rightComponent={() => <Text>Hello</Text>}
    containerStyle={mainStyles.header}
    backgroundColor={'#fff'}
  />
);

export default HeaderComponent;
