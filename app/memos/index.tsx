// メモ一覧画面
import Feather from '@expo/vector-icons/Feather';
import { router, useLocalSearchParams, usePathname, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MemoListScreen() {
    const navigation = useNavigation();
    const { labelId } = useLocalSearchParams();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Feather name="edit" size={24} color="black" onPress={handleCreatePress}/>;
            }
        });
    }, []);

    /**
     * [作成]を押下されたときの処理
     */
    const handleCreatePress = () => {
        router.push({ pathname: '/memos/create' });
    };

    /**
     * 修正メモが押下されたときの処理
     * @param memoId メモID
     */
    const handleMemoPress = (memoId: string) => {
        router.push({ pathname: `/memos/${memoId}` });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{labelId ? `ラベルID： ${labelId}` : 'すべてのメモ'}</Text>

            <Button title="メモ1" onPress={() => handleMemoPress('ABC')} />
            <Button title="メモ2" onPress={() => handleMemoPress('DEF')} />
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
