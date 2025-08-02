import UseMarketData from "@/hooks/useMarketData";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Market() {
  const { marketData, loading, error } = UseMarketData();

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4 text-center mt-4">
        Market Data
      </Text>
      <View className="flex-1 bg-white p-4">
        <FlatList
          data={marketData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View className="p-4 bg-gray-100 rounded-lg shadow mb-4">
                <Text className="text-lg font-bold">{item.title}</Text>
                <Text className="text-gray-500">{item.description}</Text>
                <Text className="text-green-600">${item.price}</Text>
                <Text className="text-sm text-gray-400">
                  Stock: {item.stock}
                </Text>
                <Text className="text-sm text-gray-400">
                  Category: {item.category}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View className="h-4" />}
        />
      </View>
    </SafeAreaView>
  );
}
