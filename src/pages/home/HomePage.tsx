import { useEffect, useState } from "react";
import Fancybox from "../../features/fancyBox/FancyBox";
import DefaultLayout from "../../layout/default/DefaultLayout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Input from "../../shared/default/input/Input";

export type TypeImage = {
  urls: {
    regular: string;
    small: string;
  };
};

export type TypeQuery = {
  query: string;
};

const HomePage = () => {
  const [images, setImages] = useState<TypeImage[]>([]);
  const [requestCount, setRequestCount] = useState<number>(0);
  const [results, setResults] = useState<TypeImage[]>([]);

  const { register, handleSubmit } = useForm<TypeQuery>();

  const getImages = async () => {
    // if (requestCount < 0) {
    try {
      const result = await axios.get(
        `https://api.unsplash.com/photos/random?count=50&client_id=${
          import.meta.env.VITE_UNSPLASH_ACCESS_TOKEN
        }`
      );
      setImages((prevImages) => [...prevImages, ...result.data]);
      console.log(result);

      setRequestCount(requestCount + 1);
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
      setRequestCount(0);
      const result = await axios.get(
        `https://api.unsplash.com/search/photos?per_page=40&order_by=relevant&query=${
          query.query
        }&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_TOKEN}`
      );
      setResults(result.data.results);
      setRequestCount(requestCount + 1);
    } catch (error) {
      console.log(error);
    }
    // } else {
    //   console.log(requestCount);
    //   console.log("Превышено максимальное количество запросов");
    // }
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="search">
        <Input
          type={"text"}
          label={"Search"}
          name={"query"}
          register={register}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      <Fancybox
        options={{
          Carousel: {
            infinite: true,
          },
        }}
      >
        {results.length > 0
          ? results.map((img: TypeImage, index: number) => (
              <a
                data-fancybox={`gallery`}
                href={img.urls.regular}
                className="picture"
                key={index}
              >
                <LazyLoadImage src={img.urls.small} alt="" effect="blur" 
                style={{
                  transition: "scale ease 0.15s,box-shadow ease 0.2s",
                }}
                />
              </a>
            ))
          : images.map((img: TypeImage, index: number) => (
              <a
                data-fancybox={`gallery`}
                href={img.urls.regular}
                className="picture"
                key={index}
              >
                <LazyLoadImage
                  src={img.urls.small}
                  alt=""
                  effect="blur"
                  style={{
                    transition: "scale ease 0.15s,box-shadow ease 0.2s",
                  }}
                />
              </a>
            ))}
      </Fancybox>

      <div className="show-more">
        <Button variant="contained" type="submit" onClick={getImages}>
          Show more
        </Button>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
