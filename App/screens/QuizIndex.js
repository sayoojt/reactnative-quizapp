import React from 'react';
import { Button, StatusBar, ScrollView } from 'react-native';

import { RowItem } from '../components/RowItem';
import spaceQuestions from '../data/space';
import computerQuestions from '../data/computers';
import westernQuestions from '../data/westerns';

export default ({ navigation }) => {
    return (
        <ScrollView>
            <StatusBar barStyle="dark-content" />
            <RowItem
                name="Space"
                color="#36b1f0"
                onPress={() => navigation.navigate('Quiz', { title: 'Space', questions: spaceQuestions, color: '#36b1f0' })}
            />
            <RowItem
                name="Westerns"
                color="#799496"
                onPress={() => navigation.navigate('Quiz', { title: 'Westerns', questions: westernQuestions, color: '#799496' })}
            />
            <RowItem
                name="Computers"
                color="#49475B"
                onPress={() => navigation.navigate('Quiz', { title: 'Computers', questions: computerQuestions, color: '#49475B' })}
            />
        </ScrollView>
    );
}