// メモ作成画面
import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MemoCreateScreen() {

    /**
     * [作成]が押下されたときの処理
     */
    const handleCreatePress = () => {
        router.back(); // backは一画面前に戻る
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>メモ作成</Text>
            <Button title="作成" onPress={handleCreatePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFF4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
