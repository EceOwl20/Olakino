import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

const SettingPage = ({ navigation }) => {
    const [number, setNumber] = useState('')


    const api = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts/1');
    };    
    return (
        <View style={styles.container}>
            <Text>SettingPage</Text>
            <View>
                <TextInput
                    style={{ fontSize: 18, color: '#27ae60' }}
                    placeholder="Number"
                    value={number}
                    keyboardType="numeric"
                    onChangeText={(text) => setHeat(text)}

                />
            
            </View>
        
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#F5FCFF',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    heatButton: {
        color: '#fff',
        borderColor: 'black',
        borderWidth: .2,
        padding: 15,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#27ae60',
    }


});

export default SettingPage
