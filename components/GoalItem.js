import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={props.myGoals}
        renderItem={(itemData) => {
          return (
            <Pressable onPress={() => props.deleteGoal(itemData.item.key)}>
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    flex: 4,
  },
  goalItem: {
    backgroundColor: "#5e0aac",
    padding: 8,
    margin: 8,
    borderRadius: 6,
  },
  goalText: {
    color: "#fff",
  },
});
export default GoalItem;
