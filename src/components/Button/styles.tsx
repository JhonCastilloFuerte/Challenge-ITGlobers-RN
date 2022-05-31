import { Colors } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.ROSE,
    borderRadius: 5,
    width: '80%',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    fontWeight: '700',
    padding: 10,
  },
  gradient: {
    alignItems: 'center',
    width: '100%',
    borderRadius: 5,
  }
});

export default styles;
