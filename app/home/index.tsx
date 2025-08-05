// ホーム画面
import { StyleSheet, Text, View, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
    // 以下onPressでボタンを押下した際に実行される関数
    const handleAllMemoPress = () => {}

    const handleLabelPress = () => {}

    const handleAddLabelPress = () => {}

    const handleEditLabelPress = () => {}
    return (
        <View style={styles.container}>
            <Button title="ラベル追加" onPress={handleAddLabelPress} />

            <Button title="すべてのメモ" onPress={handleAllMemoPress} />

            <View style={{ flexDirection: "row", alignContent: "center" }}>
                <Button title="ラベル1" onPress={handleLabelPress} />
                <MaterialIcons name="edit" size={24} color={"gray"} onPress={handleEditLabelPress} />
            </View>

            <View style={{ flexDirection: "row", alignContent: "center" }}>
                <Button title="ラベル2" onPress={handleLabelPress} />
                <MaterialIcons name="edit" size={24} color={"gray"} onPress={handleEditLabelPress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFEFF4",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
