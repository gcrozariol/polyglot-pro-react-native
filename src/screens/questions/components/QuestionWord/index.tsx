import React, {View, Text} from 'react-native';
import {styles} from './styles';

interface QuestionWordProps {
  questionWord: string;
  wordToTranslate: string;
}

export function QuestionWord({
  questionWord,
  wordToTranslate,
}: QuestionWordProps) {
  return (
    <View style={styles.questionTextContainer}>
      <Text
        style={
          wordToTranslate === questionWord
            ? styles.questionWordHighlighted
            : styles.questionText
        }>
        {questionWord}
      </Text>
    </View>
  );
}
