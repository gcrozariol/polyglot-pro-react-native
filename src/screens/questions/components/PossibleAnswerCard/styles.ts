import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  selectedAnswerWordButton: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#6D90A4',
  },
  selectedAnswerWord: {
    color: '#6D90A4',
    fontWeight: 'bold',
  },
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
});
