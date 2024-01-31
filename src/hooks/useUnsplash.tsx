import { useEffect, useState } from "react";
import axios from "axios";
import { TypeImage, TypeQuery } from "../pages/home/HomePage";

export const useUnsplash = () => {
  const [images, setImages] = useState<TypeImage[]>([]);
  //   const [requestCount, setRequestCount] = useState<number>(0);
  const [results, setResults] = useState<TypeImage[]>([]);

  const getImages = async () => {
    // if (requestCount < 1) {
    try {
      const result = await axios.get(
        `https://api.unsplash.com/photos/random?count=30&client_id=${
          import.meta.env.VITE_UNSPLASH_ACCESS_TOKEN
        }`
      );
      setImages((prevImages) => [...prevImages, ...result.data]);

      //   setRequestCount(requestCount + 1);
    } catch (error) {
      console.log(error);
    }
    // } else {
    //   console.log(requestCount);
    //   console.log("Превышено максимальное количество запросов");
    // }
  };
  useEffect(() => {
    getImages();
  }, []);

  const onSubmit = async (query: TypeQuery) => {
    // if (requestCount < 2) {
    try {
      //   setRequestCount(0);
      const result = await axios.get(
        `https://api.unsplash.com/search/photos?per_page=40&order_by=relevant&query=${
          query
        }&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_TOKEN}`
      );
      console.log(query);
      
      setResults(result.data.results);
      //   setRequestCount(requestCount + 1);
    } catch (error) {
      console.log(error);
    }
    // } else {
    //   console.log(requestCount);
    //   console.log("Превышено максимальное количество запросов");
    // }
  };
  return { images, results, onSubmit, getImages };
};
