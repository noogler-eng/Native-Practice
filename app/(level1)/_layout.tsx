import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="helloworld" options={{ headerShown: false }} />
      <Stack.Screen name="colorchanger" options={{ headerShown: false }} />
      <Stack.Screen name="counter" options={{ headerShown: false }} />
    </Stack>
  );
}
