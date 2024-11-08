import React from 'react';
import { View, StyleSheet } from 'react-native';



export function Divider() {
  return (
    <View style={styles.dividerContainer}>
        <View style={styles.divider}> </View>
    </View>
  );
}


const styles = StyleSheet.create({
    dividerContainer: {
        alignItems: 'center',

    },
    divider: {
        alignItems: 'center',
        height: 1,
        width: '80%',
        backgroundColor: '#01A6B3',
        marginVertical: 10,

    }
});