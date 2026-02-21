import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchBar from "../Components/SearchBar";

const Orders = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const DATA = [
    { id: "1", title: "Burger", price: "P45" },
    { id: "2", title: "Pizza", price: "P60" },
    { id: "3", title: "Salad", price: "P35" },
    { id: "4", title: "Pasta", price: "P50" },
    { id: "5", title: "Sushi", price: "P75" },  
    { id: "6", title: "Steak", price: "P80" },
  ];

  const filteredData = DATA.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>

      <ImageBackground
        source={require("../assets/images/order_bg.jpg")}
        style={styles.background}
        resizeMode="cover">

        <View style={styles.content}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <Text style={styles.text}>Orders Screen</Text>

          <FlatList data={filteredData} keyExtractor={item => item.id}
            style={styles.list}
            renderItem={({ item }) => (

              <View style={styles.listItem}>
                <Text style={styles.listText}>{item.title} - {item.price}</Text>
              </View>

            )}
          />

          <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start", 
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 15,
  },
  list: {
    width: "100%",
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: "orange",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  listText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    width: 150,
    padding: 10,
    backgroundColor: "#fd8312",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});