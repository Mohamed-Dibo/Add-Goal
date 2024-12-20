import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Modal, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [enterGoals, setEnterGoals] = useState();
  const [modelVisiable, setModelVisible] = useState(false);
  const [myGoals, setMyGoals] = useState([]);
  function handleGoal(enterdText) {
    setEnterGoals(enterdText);
  }
  function addGoals() {
    if (enterGoals === "") {
      alert("Please enter a goal");
      return;
    }
    setMyGoals((currentGoals) => [
      ...currentGoals,
      { text: enterGoals, key: Math.random().toString() },
    ]);
    setEnterGoals("");
    setModelVisible(false);
  }
  function deleteGoal(key) {
    setMyGoals(myGoals.filter((item) => key !== item.key));
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#A065ec"
          onPress={() => setModelVisible(true)}
        />
        <Modal
          visible={modelVisiable}
          style={{ backgroundColor: "blue" }}
          animationType="slide"
        >
          <GoalInput
            handleChangeText={handleGoal}
            enterGoals={enterGoals}
            addGoals={addGoals}
          />
        </Modal>
        <GoalItem myGoals={myGoals} deleteGoal={deleteGoal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#1e085a",
    paddingHorizontal: 16,
  },
});
