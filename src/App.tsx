/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useRef, useState} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

const question = 'The house is small.';
const wordToTranlate = 'house';
const possibleAnswers = ['folgen', 'schaf', 'bereiden', 'hause'];
const answer = 'hause';
const fullAnswer = 'Das hause ist klein.';

function App() {
  const [selectedWord, setSelectedWord] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Bottom Sheet Config
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [150], []);

  function handleWordSelection(word: string) {
    setSelectedWord(word);
  }

  function handleCheckAnswer() {
    if (!bottomSheetRef.current) {
      return;
    }

    bottomSheetRef.current.expand();
    setIsBottomSheetOpen(true);
  }

  function handleContinue() {
    if (!bottomSheetRef.current) {
      return;
    }

    bottomSheetRef.current.close();
    setIsBottomSheetOpen(false);
  }

  const isWordSelected = selectedWord !== '';
  const isAnswerCorrect = selectedWord === answer;

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootViewStyle}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Fill in the missing word</Text>
          <View style={styles.questionContainer}>
            {question.split(' ').map(questionWord => {
              return (
                <View key={questionWord} style={styles.questionTextContainer}>
                  <Text
                    style={
                      wordToTranlate === questionWord
                        ? styles.questionWordHighlighted
                        : styles.questionText
                    }>
                    {questionWord}
                  </Text>
                </View>
              );
            })}
          </View>
          <View style={styles.answerContainer}>
            {fullAnswer.split(' ').map(answerWord => {
              return answerWord === answer ? (
                <>
                  {isWordSelected ? (
                    <View
                      key={selectedWord}
                      style={
                        !isBottomSheetOpen
                          ? [styles.answerWordButton, {marginHorizontal: 10}]
                          : [
                              [styles.answerWordButton, {marginHorizontal: 10}],
                              {
                                backgroundColor: isAnswerCorrect
                                  ? '#69E0E6'
                                  : '#EE838B',
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
                </>
              ) : (
                <Text style={styles.answerText}>{answerWord} </Text>
              );
            })}
          </View>
          <View style={styles.answerWordContainer}>
            {possibleAnswers.map(word => {
              return (
                <Pressable
                  key={word}
                  style={
                    selectedWord === word
                      ? styles.selectedAnswerWordButton
                      : styles.answerWordButton
                  }
                  onPress={() => handleWordSelection(word)}
                  disabled={isBottomSheetOpen}>
                  <Text
                    style={
                      selectedWord === word
                        ? styles.selectedAnswerWord
                        : styles.answerWord
                    }>
                    {word}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <Pressable
            disabled={!isWordSelected}
            style={
              isWordSelected
                ? [styles.continueButton, {backgroundColor: '#69E0E6'}]
                : styles.continueButton
            }
            onPress={handleCheckAnswer}>
            <Text style={styles.continueText}>
              {isWordSelected ? 'CHECK ANSWER' : 'CONTINUE'}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        handleIndicatorStyle={{display: 'none'}}
        handleStyle={[
          styles.bottomSheetHandleStyle,
          {
            backgroundColor: isAnswerCorrect ? '#69E0E6' : '#EE838B',
          },
        ]}>
        <View
          style={
            isAnswerCorrect
              ? [styles.bottomSheetContainer, {backgroundColor: '#69E0E6'}]
              : [styles.bottomSheetContainer, {backgroundColor: '#EE838B'}]
          }>
          <Text style={styles.bottomSheetMessage}>
            {isAnswerCorrect ? 'Great Job!' : 'Answer: Hause'}
          </Text>
          <Pressable
            style={[
              styles.continueButton,
              {alignSelf: 'center', backgroundColor: 'white'},
            ]}
            onPress={handleContinue}>
            <Text
              style={
                isAnswerCorrect
                  ? [styles.continueText, {color: '#69E0E6'}]
                  : [styles.continueText, {color: '#EE838B'}]
              }>
              CONTINUE
            </Text>
          </Pressable>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

export default App;
