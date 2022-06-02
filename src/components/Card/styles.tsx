import { Colors } from "@constants/colors";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  card:{
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.WHITE,
    height: 80,
    flexDirection: 'row',
    minWidth: 320,
    maxWidth: 500,
    marginVertical: 5,
    width: '100%',
    padding: 10,

    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  picture:{
    borderRadius: 50,
    width: 60,
    height: 60,
    marginRight: 20,
  },
  text:{
    color: Colors.TEXT_DARK
  },
  title:{
    fontWeight: '700'
  },
  subtitle:{
    fontWeight: '500'
  },
  info: {
    minWidth: '50%'
  }
});

export {styles as style, Colors}