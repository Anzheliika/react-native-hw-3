import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
    backgroundColor: '#333',
  },
  form: {
    position: 'relative',
    paddingTop: 92,
    paddingBottom: 45,
    paddingHorizontal: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: COLORS.white,
  },
  avatar: {
    position: 'absolute',
    flex: 1,
    top: -60,
    left: '50%',
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: COLORS.gray,
  },
  icon: {
    color: COLORS.accent,
    top: 65,
    left: 100,
  },
  title: {
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
    color: COLORS.title,
  },
  input: {
    marginBottom: 16,
    padding: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.border,
    backgroundColor: COLORS.gray,
  },
  inputFocused: {
    backgroundColor: '#ffffff',
    borderColor: '#ff6c00',
  },
  inputTextBtn: {
    position: 'absolute',
    right: 16,
  },
  passwordText: {
    position: 'absolute',
    top: 16,
    right: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: COLORS.text,
  },
  button: {
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: COLORS.accent,
  },
  buttonTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.text,
  },
});

export default styles;
