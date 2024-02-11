import * as React from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

export default function LittleLemonForm() {
    const [firstName, onChangeFirstName] = React.useState('')
    const [lastName, onChangeLastName] = React.useState('')

    return (
        <ScrollView>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
            <TextInput
                style={styles.inputBox}
                value={firstName}
                onChangeText={onChangeFirstName}
                placeholder={'First Name'}
            />
            <TextInput
                style={styles.inputBox}
                value={lastName}
                onChangeText={onChangeLastName}
                placeholder={'Last Name'}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerText: {
        padding: 40,
        fontSize: 30,
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        textAlign: 'center',
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
    },
});