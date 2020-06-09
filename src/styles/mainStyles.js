import {StyleSheet} from 'react-native';

import variables from './variables';

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainWrapper: {
    marginBottom: 50,
    backgroundColor: '#fff',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flex1: {
    flex: 1,
  },
  col1: {
    width: '8.333333%',
  },
  col2: {
    width: '16.666667%',
  },
  col3: {
    width: '25%',
  },
  col4: {
    width: '33.333333%',
  },
  col5: {
    width: '41.666667%',
  },
  col6: {
    width: '50%',
  },
  col7: {
    width: '58.333333%',
  },
  col8: {
    width: '66.666667%',
  },
  col9: {
    width: '75%',
  },
  col10: {
    width: '83.333333%',
  },
  col11: {
    width: '91.666667%',
  },
  col12: {
    width: '100%',
  },
  header: {
    paddingTop: 0,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  iconStyle: {
    width: 40,
    height: 40,
  },
});

export default mainStyles;
