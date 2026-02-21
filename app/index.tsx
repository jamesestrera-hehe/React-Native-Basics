import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ImageBackground, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchBar from "../Components/SearchBar";

const Index = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => {
    setModalVisible(false);
    Alert.alert("Modal closed", "You closed the modal!"); 
  };

  const showAlert = () => {
    Alert.alert("Alert", "Button pressed!");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground 
        source={require("../assets/images/home_bg.jpg")} 
        style={styles.background} 
        resizeMode="cover"
      >
        <View style={styles.content}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <Text style={styles.text}>Home Screen</Text>

          <TouchableOpacity style={styles.button} onPress={() => router.push("/orders")}>
            <Text>Go to Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Text>Show Modal</Text>
          </TouchableOpacity>

          
          <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>This is a modal</Text>
                <TouchableOpacity style={styles.button} onPress={closeModal}>
                  <Text>Close Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, width: "100%", height: "100%" },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 35, fontWeight: "bold", color: "orange" },
  button: {
    marginTop: 20,
    width: 150,
    padding: 10,
    fontFamily: "Arial",
    backgroundColor: "#fd8312",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: { flexGrow: 1 },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    width: 250,
  },
  modalText: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
});