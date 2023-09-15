import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View>
            <Text style={styles.header}>ToDo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "coral",
        padding: 10,
        color: "white",
        fontSize: 24,
        textAlign: "center",
    },
})