import React from 'react';
import { Button, StyleSheet, View, TextInput } from "react-native"


const Input = () => {
    const [text, onChangeText] = React.useState("Useless Text");

    return (
        <View style={styles.button}>
            <Button
                onPress={() => console.log("button pressed")}
                title="Send"
                color="red"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'pink',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 40,
    },
    input: {
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 40,
        // margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        // padding: 10,
        height: 50,
        marginHorizontal: 10,
        marginVertical: 58,
    },
}
)

export default Input;