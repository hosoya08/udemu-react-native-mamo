// メモ作成画面
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MemoCreateScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title='作成' onPress={handleCreatePress} />
            }
        })
    })

    /**
     * [作成]が押下されたときの処理
     */
    const handleCreatePress = () => {
        router.back(); // backは一画面前に戻る
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>メモ作成</Text>
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
