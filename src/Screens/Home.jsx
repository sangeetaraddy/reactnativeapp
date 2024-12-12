import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useColors } from '../Utils/Colors';
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import NowShowing from '../Components/NowShowing';
import ComingSoon from '../Components/ComingSoon';
const Home = () => {
  const nav = useNavigation();
  const [option, setoption] = useState(0)
  return (
    <SafeAreaView style={{ flex: 1, gap: 20 }}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: "space-evenly"
        }}>
        <TouchableOpacity
          onPress={() => {
            setoption(0);
          }}>
          <Text
            style={{
              color: option == 0 ? useColors.default : "grey",
              fontSize: 16,
              fontWeight: 'bold'
            }}>Latest Movies</Text>
          {
            option == 0 && (
              <View
                style={{
                  backgroundColor: useColors.default,
                  width: 50,
                  height: 2,
                  alignSelf: 'center',
                  marginTop: 5
                }}>

              </View>
            )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setoption(1);
          }}>
          <Text style={{
            color: option == 1 ? useColors.default : "grey",
            fontSize: 16,
            fontWeight: 'bold'
          }}>Coming Soon</Text>
          {
            option == 1 && (
              <View
                style={{
                  backgroundColor: useColors.default,
                  width: 50,
                  height: 2,
                  alignSelf: 'center',
                  marginTop: 5
                }}>

              </View>
            )}
        </TouchableOpacity>
      </View>
      {
        option == 0 ? <NowShowing /> : <ComingSoon />
      }
    </SafeAreaView>
  )
}

export default Home;