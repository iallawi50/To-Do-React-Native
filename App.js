import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([
    { title: "Task 1", id: 1 },
    { title: "Task 2", id: 2 },
    { title: "Task 3", id: 3 },
    { title: "Task 4", id: 4 },
  ]);

  const clickHandle = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id != id);
    });
  };

  const addTaskHandle = (task) => {
    if (task == "") {
      Alert.alert("OOPS!", "Please Write a Task", [
        {
          text: "Understood",
          onPress: () => {
            console.log("window closed");
          },
        },
      ]);
    } else {
      setTasks((prevTasks) => {
        return [{ title: task, id: tasks.length + 1 }, ...tasks];
      });
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // Alert.alert("SUCCESS!", "Your Clicked has ben successfully")
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTask addTaskHandle={addTaskHandle} />
            <View style={styles.list}>
              <FlatList
                data={tasks}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                  <Task item={item} clickHandle={clickHandle} />
                )}
              />
            </View>
          </View>

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    margin: 16,
  },
  list: {
    flex: 1,
  }
});
