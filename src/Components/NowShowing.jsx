import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { nowShowing } from '../Utils/Data'
import { MaterialIcons } from '@expo/vector-icons'
import { useColors } from '../Utils/Colors'
import { Paragraph } from 'react-native-paper';

const NowShowing = () => {
  return (
    <FlatList
      numColumns={1}
      data={nowShowing}
      renderItem={({ item, index }) => (
        <View
          style={{
            flex: 1,
            margin: "1%",
            borderRadius: 10,
            flexDirection: "row",
            gap: 10
          }}>
          <Image
            style={{ height: 400, width: 200, borderRadius: 10, position: 'relative' }}
            source={{ uri: item.img }}
          />
          <View style={{
            position: "relative", alignSelf: 'center',
            marginTop: 5
          }}>
            <Text style={{ color: useColors.primary, fontWeight: "600", fontSize: 16 }} >
              {item.title}
            </Text>
            <Paragraph style={{ color: useColors.primary, fontWeight: "600", fontSize: 14 }}>{item.director}</Paragraph>
         
            <Paragraph style={{ color: useColors.primary, fontWeight: "600", fontSize: 14 }}>{item.genre}</Paragraph>

            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
              <MaterialIcons name='favorite' size={24} color="red" />
              <Text style={{ fontSize: 13, color: useColors.primary, fontWeight: "400" }}>
                {item.fav}%
              </Text>
            </View>
          </View>
        </View >
      )}
    />
  )
}


export default NowShowing