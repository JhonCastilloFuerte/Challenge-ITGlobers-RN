import React, { Dispatch, SetStateAction, useState } from 'react';
import { Colors } from '@constants/colors';
import styles from './styles';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

interface IProps {
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  placeHolder?: string;
  secureText?: boolean;
  secureIconSize?: number;
  value: string;
  onChangeValue: Dispatch<SetStateAction<string>>;
  placeHolderColor?: string;
  underlineColor?: string;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
}

const CustomTextInput = (props: IProps) => {
  const {
    inputStyle,
    placeHolder,
    secureText = false,
    secureIconSize = 25,
    value,
    onChangeValue,
    placeHolderColor = Colors.PLACEHOLDER,
    containerStyle,
    keyboardType,
    editable = true,
  } = props;

  const [isSecure, setIsSecure] = useState(secureText);

  const onEyePress = () => {
    setIsSecure(!isSecure);
  };

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholderTextColor={placeHolderColor}
          secureTextEntry={isSecure}
          placeholder={placeHolder}
          onChangeText={onChangeValue}
          value={value}
          keyboardType={keyboardType}
          editable={editable}
        />
        {secureText && (
          <View>
            <TouchableOpacity onPress={() => onEyePress()}>
              <FeatherIcon
                name={isSecure ? 'eye' : 'eye-off'}
                size={secureIconSize}
                color={Colors.SECONDARY}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export { CustomTextInput as TextInput };
