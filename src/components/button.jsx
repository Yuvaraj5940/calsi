import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const width = Dimensions.get('screen').width;
const Buttons = props => {
  return (
    <View
      style={[styles.box, {backgroundColor: props.colr, flexGrow: props.grow}]}>
      <TouchableOpacity
        style={[styles.touchable]}
        onPress={() => props.fun(props?.btext)}>
        <Text
          style={[styles.text, {fontSize: props.textsize, color: props?.tclr}]}>
          {props?.btext}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
const styles = StyleSheet.create({
  box: {
    width: 'auto',
    minWidth: width / 4 - (width / 4 - 16 * 5),
    height: width / 4 - (width / 4 - 16 * 5),
    backgroundColor: 'gray',
    borderRadius: width / 4,
  },
  text: {
    fontSize: 20,
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
