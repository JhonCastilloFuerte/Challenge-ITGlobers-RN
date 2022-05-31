import { StyleSheet } from 'react-native';
import { Colors } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%',
    marginVertical: 5,
    borderColor: Colors.ROSE,
    borderWidth: 3,
    borderRadius: 10,
    paddingRight: 10
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: Colors.TEXT,
    maxHeight: 40,
    padding: 10
  },
});

export default styles;