import {
  StorageReference,
  getDownloadURL,
  listAll,
  ref,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../services/firebase/config";

export const useImages = ( folder: string ) => {
  const [images, setImages] = useState<string[] | null>(
    JSON.parse(localStorage.getItem("images") ?? "[]")
  );
  const imagesRef: StorageReference = ref(storage, folder);
  const [requestCount, setRequestCount] = useState<number>(0);

  useEffect(() => {
    if (localStorage.getItem("images")) {
      return;
    } else {
      if (!images && requestCount < 2) {
        listAll(imagesRef)
          .then((res) =>
            Promise.all(res.items.map((item) => getDownloadURL(item)))
          )
          .then((urls: string[]) => {
            setImages(urls);
            setRequestCount(requestCount + 1);
            localStorage.setItem("images", JSON.stringify(urls));
          })
          .catch((error: Error) => {
            console.error(
              `Error listing all items in folder cutesexyrobutts: ${error}`
            );
          });
      } else {
        console.log("Превышено максимальное количество запросов");
      }
    }
  }, [imagesRef, requestCount, images]);
  return { images };
};
