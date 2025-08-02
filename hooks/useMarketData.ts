import { useState, useEffect } from "react";
import axios from "axios";

export default function useMarketData() {
  const [marketData, setMarketData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("https://dummyjson.com/products");
        setMarketData(response.data.products);
      } catch (err) {
        console.error("Error in useMarketData:", err);
        setError("Failed to fetch market data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { marketData, loading, error };
}
