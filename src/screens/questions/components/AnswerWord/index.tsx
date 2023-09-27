/* eslint-disable react-native/no-inline-styles */
import React, {View, Text} from 'react-native';
import {styles} from './styles';
import {colors} from 'src/styles/colors';

interface AnswerWordProps {
  answer: string;
  answerWord: string;
  selectedWord: string;
  isWordSelected: boolean;
  isBottomSheetOpen: boolean;
  isAnswerCorrect: boolean;
}

export function AnswerWord({
  answer,
  answerWord,
  selectedWord,
  isWordSelected,
  isBottomSheetOpen,
  isAnswerCorrect,
}: AnswerWordProps) {
  return answerWord === answer ? (
    <View key={selectedWord}>
      {isWordSelected ? (
        <View
          style={
            !isBottomSheetOpen
              ? [styles.answerWordButton, {marginHorizontal: 10}]
              : [
                  [styles.answerWordButton, {marginHorizontal: 10}],
                  {
                    backgroundColor: isAnswerCorrect
                      ? colors.lightBlue
                      : colors.lightRed,
                  },
                ]
          }>
          <Text
            style={[
              styles.answerWord,
              {color: isBottomSheetOpen ? 'white' : '#476B7F'},
            ]}>
            {selectedWord}
          </Text>
        </View>
      ) : (
        <Text style={styles.unselectedAnswer}>_____________</Text>
      )}
    </View>
  ) : (
    <Text key={answerWord} style={styles.answerText}>
      {answerWord}{' '}
    </Text>
  );
}
