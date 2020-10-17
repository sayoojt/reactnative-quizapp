import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';

const { Navigator, Screen } = createStackNavigator();

const MainStack = () => (
    <Navigator>
        <Screen name="Quizzes" component={QuizIndex} options={{ title: 'Quizzes', headerTitleAlign: 'center' }} />
        <Screen name="Quiz" component={Quiz}
            options={({ route }) => ({
                headerTitleAlign: 'center',
                headerTitle: route.params.title,
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: route.params.color, borderBottomColor: route.params.color }
            })} />
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
);

export default AppNavigator;




