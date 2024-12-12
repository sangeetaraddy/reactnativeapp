import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { upComing } from '../Utils/Data'
import { MaterialIcons } from '@expo/vector-icons'

const ComingSoon = () => {
  return (
    <FlatList
      numColumns={2}
      data={upComing}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            nav.navigate("Details")
          }}>
          <View
            style={{
              flex: 1,
              margin: "1%",
              backgroundColor: "red",
              borderRadius: 10
            }}>
            <Image
              style={{ height: 400, borderRadius: 10 }}
              source={{ uri: item.img }}
            />
            <View style={{ position: "absolute", bottom: 25, left: 15, gap: 5 }}>
              <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }} >
                {item.title}
              </Text>
              <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                <MaterialIcons name='favorite' size={24} color="red" />
                <Text style={{ fontSize: 13, color: "white", fontWeight: "400" }}>
                  Release Soon
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default ComingSoon
//rnfe