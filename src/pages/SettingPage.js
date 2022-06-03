import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
   
} from 'react-native'
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';




const headerImage = require('../assets/images/header.jpg');
const notification = require('../assets/images/Notification.png');
const banner = require('../assets/images/BG.png');
const fire = require('../assets/images/fire.png');
const model = require('../assets/images/model.png');
const couple = require('../assets/images/couple.jpg');
const cycle = require('../assets/images/cycle.png');
const yoga = require('../assets/images/yoga.png');
const walk = require('../assets/images/walk.png');
const next = require('../assets/images/next.png');
const play = require('../assets/images/play.png');
const star = require('../assets/images/Star.png');
const book = require('../assets/images/Book.png');
const home = require('../assets/images/Home.png');
const heart = require('../assets/images/H.png');
const calendar = require('../assets/images/Calender.png');
const profile = require('../assets/images/User.png');
const plus = require('../assets/images/Plus.png');






const SettingPage = ({ navigation }) => {
    const [number, setNumber] = useState('')


    const api = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts/1');
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.screen}>
               
            </View>
            <View style={{ marginHorizontal: '3%' }}>
                <Label>Your Activities</Label>
                <View style={{ flexDirection: 'row' }}>
                    {data.map((item, index) => (
                        <Card data={item} index={index} />
                    ))}
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Label>Fitness Video</Label>
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            opacity: 0.5,
                            fontSize: 12,
                        }}>
                        View All
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {data.map((item, index) => (
                        <VideoPlay index={index} />
                    ))}
                </View>
            </View>
        </SafeAreaView>
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
