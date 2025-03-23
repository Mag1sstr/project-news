import axios from "axios";
import { useEffect, useState } from "react";
import { ICurrencies } from "../interfaces/interfaces";

export function useCurrencies() {
  const [data, setData] = useState<ICurrencies[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    axios
      .get(`https://openexchangerates.org/api/latest.json`, {
        params: {
          app_id: "f3d4ba0c6d4e4c77a162179a24f6c53e",
        },
      })
      .then((resp) => {
        const images = [
          "https://tengrinews.kz/img/euro.svg",
          "https://tengrinews.kz/img/rubl.svg",
          "https://tengrinews.kz/img/dollar.svg",
        ];

        const data = Object.entries(resp.data.rates)
          .filter(([key, value]) => {
            if (key === "USD") {
              return {
                key,
                value,
              };
            } else if (key === "RUB") {
              return {
                key,
                value,
              };
            } else if (key === "EUR") {
              return {
                key,
                value,
              };
            }
          })
          .map((item, i) => {
            return {
              name: item[0],
              price: item[1],
              img: images[i],
            };
          });

        setData(data);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);
  return { data, isLoading, error };
}
