import { Text, View } from "react-native";
import "../global.css";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-green-100">
      <Text className="text-4xl text-green-500">
        learning react native with sharad
      </Text>
      <Link href={"/market"}>market</Link>
    </View>
  );
}
