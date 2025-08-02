import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-green-100">
      <View className="flex flex-row items-center justify-center gap-4">
        <Pressable
          onPress={() => {
            setCount(count + 1);
          }}
          className="bg-black text-white p-4 rounded select-none"
        >
          increment
        </Pressable>
        <Text className="bg-white text-black p-4 rounded">{count}</Text>
        <Pressable
          onPress={() => {
            setCount(count - 1);
          }}
          className="bg-black text-white p-4 rounded select-none"
        >
          decrement
        </Pressable>
      </View>
    </View>
  );
}
