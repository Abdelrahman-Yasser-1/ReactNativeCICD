import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 4,
  },
  labelContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
  },
  input: {
    textAlignVertical: 'top',
    flex: 1,
    fontSize: 16,
    padding: 8,
    color: 'black',
    backgroundColor: 'transparent',
  },
});

export default styles;
