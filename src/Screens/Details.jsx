import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import { nowShowing } from "../Utils/Data";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/Header";

const Details = () => {
    // const Details = useSelector((state) => state.data.Details);
    const Details = nowShowing[0];
    return (
        <SafeAreaView style={{ flex: 1, gap: 20 }}>
            <Header />
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    {/* Movie Poster */}
                    <View style={styles.posterContainer}>
                        <Image
                            style={styles.poster}
                            source={{ uri: Details.img }}
                        />
                    </View>

                    {/* Movie Info */}
                    <View style={styles.infoContainer}>
                        <View style={styles.headerRow}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.movieTitle}>{Details.title}</Text>
                            </View>
                            <View style={styles.releaseDateContainer}>
                                <Text style={styles.releaseDate}>Released On</Text>
                                <Text style={styles.releaseDate}>{Details.releaseDate}</Text>
                            </View>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.releaseDate}>duration</Text>
                            <Text style={styles.duration}>{Details.duration}</Text>
                        </View>

                        {/* Movie Rating */}
                        <View style={styles.ratingContainer}>
                            {Array.from(Array(Details.rank), (e, i) => (
                                <Text key={i} style={styles.star}>★</Text>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40, // Adjusting for status bar
    },
    row: {
        flexDirection: "row",
        padding: 16,
    },
    posterContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight:15
    },
    poster: {
        width: 150,
        height: 225,
        resizeMode: "contain",
    },
    infoContainer: {
        flex: 2,
        paddingLeft: 16,
        paddingTop: 14
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleContainer: {
        flex: 1,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    releaseDateContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    releaseDate: {
        fontSize: 14,
        color: "#888",
    },
    detailsRow: {
        marginTop: 16,
        paddingTop: 8,
    },
    duration: {
        fontSize: 16,
        color: "#333",
    },
    ratingContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    star: {
        color: "#FFD700", // Gold color for stars
        fontSize: 18,
        marginRight: 5,
    },
});

export default Details;
