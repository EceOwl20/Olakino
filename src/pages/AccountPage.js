import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ImageBackground } from 'react-native';

const AccountPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/couplepracticing1.jpg')}
                style={styles.backgroundImage}>

                <View>
                    <Text>AccountPage</Text>
                </View>
                <Text style={{ fontSize: 20, }}>Email :</Text>
                <View>

                </View>
                <View style={styles.buttonLogOut}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('LoginScreen')
                        }
                    >
                        <Text style={styles.homebuttonText}>Log Out</Text>
                    </TouchableOpacity>

                </View>


            </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#F5FCFF',


    },
    buttonLogOut: {
        marginTop: 50,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }, homebuttonText: {
        marginTop: 10,
        color: '#fff',
        borderColor: 'black',
        borderWidth: .2,
        padding: 15,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#27ae60',

    },

});
export default AccountPage
