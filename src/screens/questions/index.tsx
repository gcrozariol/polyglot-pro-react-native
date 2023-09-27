/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useMemo, useRef, useState} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import {styles} from './styles';
import {colors} from 'src/styles/colors';

import {AnswerWord} from './components/AnswerWord';
import {QuestionWord} from './components/QuestionWord';
import {LoadingScreen} from './components/LoadingScreen';
import {PossibleAnswerCard} from './components/PossibleAnswerCard';

import {QuestionsContext} from 'src/contexts/QuestionsContext';

export function QuestionsScreen() {
  const [selectedWord, setSelectedWord] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const snapPoints = useMemo(() => [150], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const {currentQuestion, goToNextQuestion} = useContext(QuestionsContext);

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
    setSelectedWord('');
    goToNextQuestion();
  }

  const isWordSelected = selectedWord !== '';
  const isAnswerCorrect =
    currentQuestion !== null && selectedWord === currentQuestion.answer;

  return currentQuestion ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Fill in the missing word</Text>

        {/* Question */}
        <View style={styles.questionContainer}>
          {currentQuestion.question.split(' ').map(questionWord => (
            <QuestionWord
              key={questionWord}
              questionWord={questionWord}
              wordToTranslate={currentQuestion.wordToTranslate}
            />
          ))}
        </View>

        {/* Answer */}
        <View style={styles.answerContainer}>
          {currentQuestion.fullAnswer.split(' ').map(answerWord => (
            <AnswerWord
              key={answerWord}
              answer={currentQuestion.answer}
              answerWord={answerWord}
              selectedWord={selectedWord}
              isWordSelected={isWordSelected}
              isAnswerCorrect={isAnswerCorrect}
              isBottomSheetOpen={isBottomSheetOpen}
            />
          ))}
        </View>

        {/* Possible Answers */}
        <View style={styles.answerWordContainer}>
          {currentQuestion.possibleAnswers.map(word => (
            <PossibleAnswerCard
              key={word}
              word={word}
              selectedWord={selectedWord}
              isBottomSheetOpen={isBottomSheetOpen}
              selectWord={handleWordSelection}
            />
          ))}
        </View>

        {/* Check Answer Button */}
        <Pressable
          disabled={!isWordSelected}
          style={
            isWordSelected
              ? [styles.continueButton, {backgroundColor: colors.lightBlue}]
              : styles.continueButton
          }
          onPress={handleCheckAnswer}>
          <Text style={styles.continueText}>
            {isWordSelected ? 'CHECK ANSWER' : 'CONTINUE'}
          </Text>
        </Pressable>
      </View>

      {/* Result Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        handleIndicatorStyle={{display: 'none'}}
        handleStyle={[
          styles.bottomSheetHandleStyle,
          {
            backgroundColor: isAnswerCorrect
              ? colors.lightBlue
              : colors.lightRed,
          },
        ]}>
        <View
          style={[
            styles.bottomSheetContainer,
            {
              backgroundColor: isAnswerCorrect
                ? colors.lightBlue
                : colors.lightRed,
            },
          ]}>
          <Text style={styles.bottomSheetMessage}>
            {isAnswerCorrect
              ? 'Great Job!'
              : `Answer: ${currentQuestion.answer}`}
          </Text>
          <Pressable
            style={[
              styles.continueButton,
              {alignSelf: 'center', backgroundColor: 'white'},
            ]}
            onPress={handleContinue}>
            <Text
              style={[
                styles.continueText,
                {color: isAnswerCorrect ? colors.lightBlue : colors.lightRed},
              ]}>
              CONTINUE
            </Text>
          </Pressable>
        </View>
      </BottomSheet>
    </SafeAreaView>
  ) : (
    <LoadingScreen />
  );
}
