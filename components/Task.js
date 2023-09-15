import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Task({item, clickHandle}) {
    return <TouchableOpacity onPress={() => clickHandle(item.id)}>
        <View style={styles.item}>  
        <MaterialIcons name="delete" size={24} color="#888" />
            <Text>{item.title}</Text>
        </View>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
    borderWidth: 2,
        marginVertical: 10,
        borderColor: "#ddd",
        borderRadius: 10,
        borderStyle:"dashed",
  },
});
