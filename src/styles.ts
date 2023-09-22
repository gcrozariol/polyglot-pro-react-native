import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  gestureHandlerRootViewStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#8ED7FA',
  },
  bottomSheetContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',

    marginTop: 100,
    paddingTop: 50,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    backgroundColor: '#476B7F',
  },
  title: {
    color: 'white',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionTextContainer: {
    marginRight: 5,
  },
  questionText: {
    color: 'white',
    fontSize: 24,
    marginTop: 25,
  },
  questionWordHighlighted: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingTop: 23,
  },
  answerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    minHeight: 50,
  },
  answerText: {
    fontSize: 24,

    color: 'white',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  continueButton: {
    display: 'flex',
    position: 'absolute',

    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 20,
    bottom: 40,

    width: '80%',
    borderRadius: 100,
    backgroundColor: '#6D90A4',
  },
  continueText: {
    color: 'white',
    fontWeight: 'bold',
  },
  answerWordContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    flexWrap: 'wrap',
    flexDirection: 'row',

    gap: 10,
    marginTop: 25,
  },
  answerWordButton: {
    padding: 15,
    borderRadius: 15,
    // marginHorizontal: 10,

    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 0,
    },

    backgroundColor: 'white',
  },
  selectedAnswerWordButton: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#6D90A4',
  },
  answerWord: {
    // color: '#476B7F',
    fontWeight: 'bold',
  },
  selectedAnswerWord: {
    color: '#6D90A4',
    fontWeight: 'bold',
  },
  bottomSheetHandleStyle: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  bottomSheetMessage: {
    paddingLeft: '10%',
    color: 'white',
    fontWeight: 'bold',
  },
  unselectedAnswer: {
    color: 'white',
    paddingTop: 9,
  },
});
