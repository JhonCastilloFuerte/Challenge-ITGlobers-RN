import { Colors } from "@constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  containerGradient:{
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5
  },
  navigation:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    justifyContent: 'space-between',
    width: '90%'
  },
  buttonNext:{
    width: 120,
    maxWidth: 300,
  },
  options: {
    paddingRight: 5
  },
  headerOptions:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.TEXT_DARK,
    width: '100%',
    padding: 15,
    justifyContent: 'center'
  },
  closeText:{
    textAlign: 'center',
    fontWeight: '700',
  }
});

export {styles as style, Colors} 