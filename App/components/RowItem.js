import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#36B1F0',
        marginBottom: 1
    },
    text: {
        fontSize: 18,
        color: '#fff'
    }
});
export const RowItem = ({ name, onPress = () => { }, color }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={[styles.row, { backgroundColor: color }]}>
            <Text style={styles.text}>{name}</Text>
        </View>
    </TouchableOpacity >
);