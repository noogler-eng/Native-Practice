import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="(level1)" options={{ headerShown: true }} />
      <Stack.Screen name="(level2)" options={{ headerShown: false }} />
    </Stack>
  );
}
