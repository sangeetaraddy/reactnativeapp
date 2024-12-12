import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useColors } from '../Utils/Colors';
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
    const nav = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('login').then((value)=>{
                value!=null?nav.replace("Home"):nav.replace("SelectCity");
            })
            nav.replace('SelectCity')
        }, 2000);
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: useColors.primary }}>
            <Image
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                source={{
                    uri: logo
                    // uri: "https://mir-s3-cdn-cf.behance.net/projects/404/4fabff156214799.Y3JvcCw5ODEsNzY4LDIxLDA.png"
                }} />
        </View>
    )
}

export default Splash;