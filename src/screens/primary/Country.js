// * Import required modules/dependencies
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header, Image} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

// * Import all store related stuffs

// * Import all screens/components

// * Import utilites

// * Import all styling stuffs
import mainStyles from '../../styles/mainStyles';
import variables from '../../styles/variables';

class CountryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showDate: false,
    };
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={() => (
            <Image
              source={require('../../assets/icons/virus_icon2.png')}
              style={mainStyles.iconStyle}
            />
          )}
          centerComponent={{
            text: 'India Dashboard',
            style: {color: variables.mainThemeColor},
          }}
          rightComponent={() => (
            <TouchableOpacity
              onPress={() => {
                this.setState({showDate: true});
              }}>
              <Text>{this.state.date.toDateString().toString()}</Text>
            </TouchableOpacity>
          )}
          containerStyle={mainStyles.header}
          backgroundColor={'#fff'}
        />
        <ScrollView>
          <View
            style={[mainStyles.justifyContentCenter, mainStyles.mainWrapper]}>
            <Text> Country Screen1 </Text>

            <Text> Hello World </Text>
          </View>
        </ScrollView>
        {this.state.showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={this.state.date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              this.setState({
                date: selectedDate || this.state.date,
                showDate: false,
              });
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default CountryScreen;
