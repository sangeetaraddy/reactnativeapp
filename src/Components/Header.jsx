import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useColors } from '../Utils/Colors';
import {Ionicons} from '@expo/vector-icons';

const Header = () => {
    return (
        <View
            style={{
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 10
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Entypo name="location-pin" size={30} color={useColors.default} />
                <Text style={{fontSize:17,color:useColors.default,fontWeight:'600'}}>Bangalore</Text>
            </View>
            <Ionicons name="search" size={28} color={useColors.default} />
        </View>
    )
}

export default Header;
//rnf snippet