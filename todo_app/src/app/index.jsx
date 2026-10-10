import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Color";
import { TASKS } from "@/constants/tasks";
import Header from "@/components/Header";
import DateSelector from "@/components/DateSelector";
import FilterTabs from "@/components/FilterTabs";
import TaskCard from "@/components/TaskCard";

import { useState } from "react";

import { StatusBar } from "expo-status-bar";

const index = () => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTasks =
    activeFilter === "All"
      ? TASKS
      : TASKS.filter((task) => task.status === activeFilter);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        ListHeaderComponent={
          <>
            <Header />
            <DateSelector />
            <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    paddingBottom: 24,
  },
});
