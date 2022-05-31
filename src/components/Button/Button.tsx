import React from 'react';
import style from '@components/Button/styles';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@constants/colors';

interface IProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<TextStyle>;
}

const Button = (props: IProps) => {
  const { onPress, title, textStyle, buttonStyle } = props;

  return (
      <TouchableOpacity
        style={[style.container, buttonStyle]}
        onPress={onPress}
      >
        <LinearGradient 
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={[Colors.ORANGE, Colors.VIOLET]}
          style={style.gradient}
        >
        <Text style={[style.text, textStyle]}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
  );
};

export { Button };
