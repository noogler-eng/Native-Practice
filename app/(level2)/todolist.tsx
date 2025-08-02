import ButtonComponent from "@/components/Button";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

// we have to use AsyncStorage to persist the data
// npm install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TodoList() {
  const [todos, setTodos] = useState<
    {
      id: string;
      text: string;
      completed: boolean;
    }[]
  >([]);

  const [input, setInput] = useState<string>("");

  // this is how we use async storage in react native
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error("unable to fetch todos from async storage", error);
      }
    };

    // this will run only once when the component mounts
    // making load and save functions async
    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch (error) {
        console.error("unable to save todos to async storage", error);
      }
    };

    // this will run every time todos change
    saveTodos();
  }, [todos]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold">Todo List</Text>
      <View className="mt-4 flex gap-3">
        <TextInput
          placeholder="enter todo"
          className="p-4 border-2 border-black"
          onChangeText={(text) => setInput(text)}
          value={input}
        />
        <ButtonComponent
          title="add todo"
          onPress={() => {
            if (input.length == 0) return;
            setTodos([
              ...todos,
              { id: Date.now().toString(), text: input, completed: false },
            ]);
            setInput("");
          }}
        />
      </View>

      <View className="mt-4">
        {todos?.length == 0 ? (
          <Text className="text-gray-500">No tasks available</Text>
        ) : (
          <View className="mt-4">
            {todos.map(
              (todo: { id: string; text: string; completed: boolean }) => (
                <View key={todo.id} className="flex-row items-center mb-2">
                  <Text
                    className={`text-lg ${todo.completed ? "line-through" : ""}`}
                  >
                    {todo.text}
                  </Text>
                </View>
              )
            )}
          </View>
        )}
      </View>
    </View>
  );
}
