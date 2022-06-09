import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const ListScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
     try {
      const response = await fetch('https://webapi20220604204829.azurewebsites.net/api/exercise/category'); //get
      const json = await response.json();
      console.log(json);
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={()=>getData()}>
              <Text>AAAA</Text>
            </TouchableOpacity>
            <FlatList
                data={data}

                key={(item) => item.id.toString()}
                numColumn={4}
                ListEmptyComponent={() => <View><Text>Veri Yok</Text></View>}
                renderItem={({ item }) => <View style={styles.container}>
                    <View style={styles.styletitle}>
                        <View>
                            <Text>id:{item.userId}</Text>
                        </View>
                        <View>
                            <Text >name : {item.id}</Text>

                        </View>
                        <View>
                            <Text>email : {item.title}</Text>
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

export default ListScreen

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
