import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';

import { Button, ButtonContainer } from '../components/Button';
import { Alert } from '../components/Alert';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        letterSpacing: -0.02,
        fontWeight: '600'
    },
    titleText: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    safeareaview: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'space-between'
    }
});


export default function Quiz({ route, navigation }) {
    const { questions } = route.params;
    const [correctCount, setCorrectCount] = useState(0);
    const [totalCount] = useState(questions.length);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const question = questions[activeQuestionIndex];
    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);
    const fAnswer = (correct) => {
        if (correct) {
            setCorrectCount(correctCount + 1);
            setAnswerCorrect(true);
        }
        else { setAnswerCorrect(false); }
        setAnswered(true);
        setTimeout(() => fNextQuestion(), 500);
    }

    const fNextQuestion = () => {
        let nextIndex = activeQuestionIndex + 1;
        if (nextIndex >= totalCount)
            nextIndex = 0;
        setAnswered(false);
        setActiveQuestionIndex(nextIndex);
    }

    return (
        <View style={[styles.container, { backgroundColor: route.params.color }]}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.safeareaview}>
                <View>
                    <Text style={styles.titleText}>Question {activeQuestionIndex + 1}</Text>
                    <Text style={styles.text}>{question.question}</Text>
                    <ButtonContainer>
                        {question.answers.map(answer => {
                            return <Button
                                key={answer.id}
                                text={answer.text}
                                onPress={() => fAnswer(answer.correct)}>
                            </Button>
                        })}
                    </ButtonContainer>
                </View>
                <Text style={styles.text}>{`${correctCount}/${totalCount}`}</Text>
            </SafeAreaView>
            <Alert correct={answerCorrect} visible={answered}></Alert>
        </View >
    );
};