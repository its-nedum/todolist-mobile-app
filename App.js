import React, { useState } from 'react';
import { 
  Alert, 
  FlatList, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  View,
  Keyboard
} from 'react-native';
import Header from './components/layouts/Header';
import TodoItem from './components/todos/TodoItem';
import AddTodo from './components/todos/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'Take bath', key: '1'},
    {text: 'Eat breakfast', key: '2'},
    {text: 'Dress up', key: '3'},
    {text: 'Go to work', key: '4'},
    {text: 'Write some code', key: '5'}
  ]);
  const [text, setText] = useState("");

  const pressHandler = (key) => setTodos((prev) => prev.filter(item => item.key !== key));

  const submitHandler = (text) => {
    if(text.length < 3) {
      Alert.alert('Oops!', 'Todos must be min of 3 character', [
        {text: "Understood", onPress: () => console.log("Alert closed")}
      ])
      return
    }
    setTodos((prev) => [{text, key: Math.random().toString()}, ...prev]);
    // clear input text
    setText("")
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo 
            submitHandler={submitHandler} 
            text={text}
            setText={setText}
            />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem 
                item={item} 
                pressHandler={pressHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
