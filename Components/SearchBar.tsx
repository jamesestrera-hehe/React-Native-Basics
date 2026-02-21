import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput } from "react-native";

const SearchBar = ({ searchTerm, setSearchTerm }: any) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </KeyboardAvoidingView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: "100%",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#f77a05",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
  },
});