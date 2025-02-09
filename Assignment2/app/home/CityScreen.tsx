import React from "react";
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from "react-native";

interface CityScreenProps {
  city: string;
  link: string;
}

export default function CityScreen({ city, link }: CityScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city}</Text>
      <Image
        source={{ uri: city === "Calgary" ? "https://source.unsplash.com/600x400/?calgary" : "https://source.unsplash.com/600x400/?edmonton" }}
        style={styles.image}
      />
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <Text style={styles.link}>Go to city page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 15,
  },
  link: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
});
