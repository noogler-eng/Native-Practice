import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="todolist" options={{ headerShown: false }} />
      <Stack.Screen name="market" options={{ headerShown: false }} />
    </Stack>
  );
}
