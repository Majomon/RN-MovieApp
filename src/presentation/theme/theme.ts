import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#7037eb',
  secondary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  dangeer: '#e71d36',
  dark: '#22223b',

  background: '#eab308',
  text: '#eab308',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },

  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },

  text: {
    color: globalColors.dark,
    fontSize: 20,
  },
});
