import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react';

import axios from 'axios';







const HomeScreen = () => {
    const [data, setData] = useState('');

    const getData = () => {
        axios.get('http://10.0.2.2:7209/api/diet/category/1')
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    
    };
    useEffect(() => {
        axios.get('http://10.0.2.2:46120/api/diet/category/1')
        .then(response => {
            console.log(response);
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
       
     
    }, []);
    

    return (
        <SafeAreaView>

            <Text>HomeScreen


            </Text>



            <FlatList
                data={data}

                key={(item) => item.id.toString()}
                numColumn={4}
                ListEmptyComponent={() => <View><Text>Veri Yok</Text></View>}
                renderItem={({ item }) => <View style={styles.container}>
                    <View style={styles.styletitle}>
                        <View>
                            <Text>id:{item.id}</Text>
                        </View>
                        <View>
                            <Text >name : {item.name}</Text>

                        </View>
                        <View>
                            <Text>email : {item.dietCategoryId}</Text>
                        </View>
                        <View>
                            <Text>body : {item.body}</Text>
                        </View>
                     





                    </View>

                </View>}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#ddd',
        textAlign: 'center',
        borderRadius: 10,
        margin: 15,
        borderColor: '#ddd'

    },
    styletitle: {
        padding: 5,
        flex: 1,
        backgroundColor: '#ddd',
        marginBottom: 5,
        borderRadius: 10,
    },
    style1: {
        fontWeight: '700'
    },
    style2: {
        fontWeight: '100'
    },
    imagestyle: {
        width: 80,
        height: 200,
        resizeMode: 'contain',
        alignItems: "center",
    }

})