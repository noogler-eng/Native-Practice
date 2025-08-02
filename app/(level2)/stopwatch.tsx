import ButtonComponent from "@/components/Button";
import { useState } from "react";
import { View } from "react-native";

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<any>();

  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-row justify-between items-center">
        {count > 0 ? (
          <View className="flex-row justify-between items-center gap-4">
            <ButtonComponent
              title="reset stopwatch"
              onPress={() => {
                setCount(0);
              }}
            />
            <ButtonComponent
              title="stop stopwatch"
              onPress={() => {
                setCount(0);
                clearInterval(intervalId);
              }}
            />
            <ButtonComponent
              title="stop in middle stopwatch"
              onPress={() => {
                clearInterval(intervalId);
              }}
            />
            {intervalId && (
              <ButtonComponent
                title="start in middle stopwatch"
                onPress={() => {
                  const intId = setInterval(() => {
                    setCount((prevCount) => prevCount + 1);
                  }, 1000 * 1);
                  setIntervalId(intId);
                }}
              />
            )}
          </View>
        ) : (
          <View className="flex-row justify-between items-center gap-4">
            <ButtonComponent
              title="start stopwatch"
              onPress={() => {
                const intId = setInterval(() => {
                  setCount((prevCount) => prevCount + 1);
                }, 1000 * 1);
                setIntervalId(intId);
              }}
            />
          </View>
        )}
      </View>
      <View className="text-4xl mt-4">{count}</View>
    </View>
  );
}
