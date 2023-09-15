import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AddTask({ addTaskHandle }) {
  const [task, setTask] = useState("");
  return (
    <View>
      <TextInput
              clearButtonMode="while-editing"
              textAlign="left"
        placeholder="Add a Task .."
        style={styles.input}
        onChangeText={(val) => {
            setTask(val);
              }}
              value={task}
      />
      <TouchableOpacity>

        <Text
          onPress={() => {
                      addTaskHandle(task);
                      setTask("")
          }}
          style={styles.button}
        >
          ADD TASK
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderBottomWidth: 1, width: "100%", paddingVertical: 10 },
  button: {
    backgroundColor: "coral",
    padding: 10,
    marginTop: 10,
    marginBottom: 30,
    width: "100%",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
