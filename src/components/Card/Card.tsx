import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import {style} from './styles';


interface IPROPS{
  title: string;
  picture ?: string;
  subtitle ?: string;
}

const Card = ({title, picture, subtitle}: IPROPS) => {
  return (
    <TouchableOpacity style={[style.card]}>
      <Image
        style={style.picture}
        source={{uri: picture}}
      />
      <View>
        <Text style={[style.title, style.text]}>{title}</Text>
        <Text style={[style.subtitle, style.text]}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card