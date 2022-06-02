import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { messageToast } from '@components/index';
import {style} from './styles';


interface IPROPS{
  title: string;
  picture ?: string;
  subtitle ?: string;
}


const Card = ({title, picture, subtitle}: IPROPS) => {

  const handleClick = () => {
    messageToast({
      text1: `${title}: ${subtitle}`,
      type: 'info'
    })
  }

  return (
    <TouchableOpacity style={[style.card]}
      onPress={handleClick}
    >
      <Image
        style={style.picture}
        source={{uri: picture}}
      />
      <View style={[style.info]}>
        <Text style={[style.title, style.text]}>{title}</Text>
        <Text style={[style.subtitle, style.text]}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card