import { Pressable } from "react-native";

export default function ButtonComponent({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-black text-white p-4 rounded select-none"
    >
      {title}
    </Pressable>
  );
}
