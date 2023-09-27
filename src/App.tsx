import React from 'react';
import {styles} from './styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QuestionsScreen} from './screens/questions';
import {QuestionsContextProvider} from './contexts/QuestionsContext';

function App() {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootViewStyle}>
      <QuestionsContextProvider>
        <QuestionsScreen />
      </QuestionsContextProvider>
    </GestureHandlerRootView>
  );
}

export default App;
