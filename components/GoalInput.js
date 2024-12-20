import { Button, Image, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <Image source={require("../assets/goal.png")} style={styles.img} />
      <TextInput
        style={styles.inputText}
        placeholder="Enter Your Goals"
        placeholderTextColor="gray"
        onChangeText={props.handleChangeText}
        value={props.enterGoals}
      />
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button title="Add Goal" onPress={props.addGoals} color="#b180f0" />
        </View>
        <View style={styles.btn}>
          <Button
            title="Cancel"
            onPress={() => setModelVisible(false)}
            color="#f31282"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "culmnum",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#5e0aac",
    paddingTop: 200,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "100%",
    color: "#120438",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    padding: 16,
  },

  btnContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  btn: {
    marginHorizontal: 8,
    width: "40%",
  },
  img: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
