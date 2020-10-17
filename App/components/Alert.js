import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        backgroundColor: '#ff4136',
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleSuccess: {
        backgroundColor: '#28A125'
    },
    icon: {
        width: screen.width / 3
    }
});

export const Alert = ({ correct, visible }) => {
    if (!visible) return null;
    const icon = correct ?
        require('../assets/check.png') :
        require('../assets/close.png');
    const circleStyle = [styles.circle];
    if (correct) circleStyle.push(styles.circleSuccess);
    return (
        <View style={styles.container}>
            <View style={circleStyle}>
                <Image
                    style={styles.icon}
                    source={icon}
                    resizeMode='contain'
                />
            </View>
        </View>
    );
}