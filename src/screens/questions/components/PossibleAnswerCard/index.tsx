import React, {Pressable, Text} from 'react-native';
import {styles} from './styles';

interface PossibleAnswerCardProps {
  word: string;
  selectedWord: string;
  isBottomSheetOpen: boolean;
  selectWord: (word: string) => void;
}

export function PossibleAnswerCard({
  word,
  selectedWord,
  isBottomSheetOpen,
  selectWord,
}: PossibleAnswerCardProps) {
  return (
    <Pressable
      key={word}
      style={
        selectedWord === word
          ? [
              styles.selectedAnswerWordButton,
              {opacity: isBottomSheetOpen ? 0.5 : 1},
            ]
          : [styles.answerWordButton, {opacity: isBottomSheetOpen ? 0.5 : 1}]
      }
      onPress={() => selectWord(word)}
      disabled={isBottomSheetOpen}>
      <Text
        style={
          selectedWord === word ? styles.selectedAnswerWord : styles.answerWord
        }>
        {word}
      </Text>
    </Pressable>
  );
}
