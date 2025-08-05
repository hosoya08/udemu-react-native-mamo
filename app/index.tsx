// 起動画面
import { router } from 'expo-router';
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InitialScreen() {
    useEffect(() => {
    const timer = setTimeout(() => {
        router.replace("/home");
    }, 2000)
    return () => clearTimeout(timer);
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>アプリ起動中・・・</Text>
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
