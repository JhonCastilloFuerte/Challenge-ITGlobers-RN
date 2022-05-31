import React from 'react'
import { FlatList, SafeAreaView } from 'react-native';

import { style, Colors } from '@views/styles/paginationStyles';
import { Card } from '@components/index';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    email: 'jhoncastillo-123@hotmail.com',
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    email: 'jhoncastillo-123@hotmail.com',
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    email: 'jhoncastillo-123@hotmail.com',
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
];

const PaginationView = () => {

  return (
    <SafeAreaView style={[style.container]}>
      <LinearGradient colors={[ Colors.PRIMARY, Colors.VIOLET, Colors.ORANGE ]} style={style.containerGradient}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item, index, separators }) =>{
            return (
              <Card 
                key={item.id}
                title={item.title}
                picture={item.avatar}
                subtitle={item.email}
              />            
            )}
          }
        />
      </LinearGradient>
    </SafeAreaView>
  )
}

export default PaginationView