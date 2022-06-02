import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, TouchableOpacity, Text } from 'react-native';

import { style, Colors } from '@views/styles/paginationStyles';
import { Button, Card, messageToast } from '@components/index';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { getResources } from '../../store/slices/pagination/thunks';
import { View } from 'react-native';
import { closeSession } from '@store/slices/auth/authSlice';
import { StackScreenProps } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { CommonActions } from '@react-navigation/native';

interface DataInterface {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const DATA:DataInterface[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    email: 'jhoncastillo-123@hotmail.com',
    first_name: 'Nombre',
    last_name: 'Apellido',
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
];

interface IProps extends StackScreenProps<any, any> {}

const PaginationView = ({ navigation }: IProps) => {

  const {pages, resources, page} = useSelector((state:any) => state.resources);

  const dispatch = useDispatch();
  const [items, setItems] = useState<DataInterface[]>(DATA);
  const [headerOptions, setHeaderOptions] = useState(false);
  const [pageActual, setPageActual] = useState(page);
  
  const getData = async () => {
    dispatch(getResources({page: pageActual, cuantity: 4 }) as any);
    setItems(resources);
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>(
        <TouchableOpacity style={[style.options]}
          onPress={() => setHeaderOptions(prevState => !prevState)}
        >
          <FeatherIcon 
            name="more-vertical" 
            size={20} 
            color={Colors.WHITE} 
          />
        </TouchableOpacity>
      )
    });
    dispatch(getResources({page: pageActual, cuantity: 4 }) as any);
    setItems(resources);
  },[pageActual, items])

  const handleClose = () =>{
    dispatch(closeSession());
    navigation.navigate('Login');
  }

  const handleNext = () => {
    if(pageActual < pages){
      setPageActual(pageActual + 1);
      getData();
    }else{
      messageToast({
        text1: 'No hay mas paginas para mostrar',
        type: 'info'
      })
    }
  }

  const handlePrev = () => {
    if(pageActual != 1){
      setPageActual(pageActual - 1);
      getData();
    }else{
      messageToast({
        text1: 'Estas en la primera pagina',
        type: 'info'
      })
    }
  }


  return (
    <>
      <SafeAreaView style={[style.container]}>
        <LinearGradient colors={[ Colors.PRIMARY, Colors.VIOLET, Colors.ORANGE ]} style={style.containerGradient}>
          <FlatList
            data={items}
            keyExtractor={items => items.id}
            renderItem={({ item }) =>{
              return (
                <Card 
                  key={item.id}
                  title={item.first_name}
                  picture={item.avatar}
                  subtitle={item.email}
                />            
              )}
            }
          />
          <View style={[style.navigation]}>
            <Button
              title='Anterior'
              onPress={handlePrev}
              buttonColor={Colors.GREEN}
              buttonStyle={style.buttonNext}
            />
            <Text>{`${pageActual} / ${pages}`}</Text>
            <Button
              title='Siguiente'
              onPress={handleNext}
              buttonColor={Colors.GREEN}
              buttonStyle={style.buttonNext}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
      {headerOptions ?
        <TouchableOpacity
          style={[style.headerOptions]}
          onPress={handleClose}
        >
          <Text style={[style.closeText]}>Cerrar Sesión</Text>
        </TouchableOpacity>:
        null
      }
    </>
  )
}

export default PaginationView