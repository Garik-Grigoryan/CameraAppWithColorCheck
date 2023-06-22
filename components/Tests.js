import React from "react";
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

export default function App() {
      return (
        <View style={styles.container}>
           <Text>Tests</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});
