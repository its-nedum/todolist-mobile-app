import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const AddTodo = ({ submitHandler, text, setText }) => {
  return (
    <View>
        <TextInput 
            style={styles.input}
            placeholder={"new todo..."}
            onChangeText={(val) => setText(val)}
            value={text}
        />
        <Button 
            onPress={() => submitHandler(text)}
            title={"add todo"}
            color={"coral"}
            />
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})