// ラベル編集画面
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function LabelEditScreen() {

    const { id } = useLocalSearchParams();

    /**
     * [ラベル修正]が押下されたときの処理
     */
    const handleEditPress = ()=> {
        router.dismiss();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ラベル修正： {id}</Text>
            <Button title='修正' onPress={handleEditPress} />
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
