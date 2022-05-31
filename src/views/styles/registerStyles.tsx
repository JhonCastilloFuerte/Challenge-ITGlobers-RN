import { Colors } from '@constants/colors';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY
  },
  logo:{
    alignSelf: 'center',
    marginBottom: 20
  },
  register: {
    color: Colors.WHITE,
    opacity: 0.5,
    fontWeight: '700',
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  }
});

export default style;

export {style, Colors}