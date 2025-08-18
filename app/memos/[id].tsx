// メモ修正画面
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MemoEditScreen() {
    const navigation = useNavigation();
    const { id } = useLocalSearchParams();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title='保存' onPress={handleSavePress} />
            }
        })
    })

    /**
     * [保存]が押下されたときの処理
     */
    const handleSavePress = () => {
        router.back();
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>メモ修正： {id}</Text>
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
