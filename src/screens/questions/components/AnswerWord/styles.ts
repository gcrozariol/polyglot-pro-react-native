import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  answerWord: {
    fontWeight: 'bold',
  },
  answerWordButton: {
    padding: 15,
    borderRadius: 15,

    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 0,
    },

    backgroundColor: 'white',
  },
  answerText: {
    fontSize: 24,

    color: 'white',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  unselectedAnswer: {
    color: 'white',
    paddingTop: 9,
  },
});
