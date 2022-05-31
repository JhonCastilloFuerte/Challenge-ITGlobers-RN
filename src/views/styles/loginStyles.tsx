import { StyleSheet } from "react-native";
import { Colors } from "@constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY
  },
  logo:{
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

export default styles;

export {styles as style, Colors}