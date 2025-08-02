import ButtonComponent from "@/components/Button";
import { useState } from "react";
import { View } from "react-native";

const colors = [
  "bg-green-100",
  "bg-blue-100",
  "bg-red-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-orange-100",
  "bg-teal-100",
  "bg-gray-100",
];

export default function ColorChanger() {
  const [color, setColor] = useState("bg-green-100");

  const handleChangeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  return (
    <View className={`flex-1 items-center justify-center ${color}`}>
      <ButtonComponent title={"Change Color"} onPress={handleChangeColor} />
    </View>
  );
}
