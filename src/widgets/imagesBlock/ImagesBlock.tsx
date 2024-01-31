// import { useForm } from "react-hook-form";
// import Search from "../../entities/search/Search";
// import Input from "../../shared/default/input/Input";
// import { Button } from "@mui/material";
// import Fancybox from "../../features/fancyBox/FancyBox";
// import Images from "../../entities/images/Images";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export type TypeQuery = {
//   query: string;
// };

// export type TypeImage = {
//   id: string;
//   urls: {
//     regular: string;
//     small: string;
//   };
// };
// const ImagesBlock = () => {
//   const [images, setImages] = useState<TypeImage[]>([]);
//   const [requestCount, setRequestCount] = useState<number>(0);
//   const [results, setResults] = useState<TypeImage[]>([]);

//   const { register } = useForm();

//   const getImages = async () => {
//     if (requestCount < 0) {
//       try {
//         const result = await axios.get(
//           `https://api.unsplash.com/photos/random?count=50&client_id=${
//             import.meta.env.VITE_REACT_APP_UNSPLASH_ACCESS_TOKEN
//           }`
//         );
//         setImages((prevImages) => [...prevImages, ...result.data]);
//         console.log(result);

//         setRequestCount(requestCount + 1);
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       console.log(requestCount);
//       console.log("Превышено максимальное количество запросов");
//     }
//   };
//   useEffect(() => {
//     getImages();
//   }, []);

//   const onSubmit = async (query: TypeQuery) => {
//     if (requestCount < 2) {
//       try {
//         setRequestCount(0);
//         const result = await axios.get(
//           `https://api.unsplash.com/search/photos?per_page=40&order_by=relevant&query=${
//             query
//           }&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_TOKEN}`
//         );
//         setResults(result.data.results);
//         setRequestCount(requestCount + 1);
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       console.log(requestCount);
//       console.log("Превышено максимальное количество запросов");
//     }
//   };
//   return (
//     <>
//       <Search onSubmit={onSubmit}>
//         <Input
//           type={"text"}
//           label={"Search"}
//           name={"query"}
//           register={register}
//         />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//       </Search>

//       <Fancybox
//         options={{
//           Carousel: {
//             infinite: true,
//           },
//         }}
//       >
//         {results.length > 0 ? (
//           <Images images={results} />
//         ) : (
//           <Images images={images} />
//         )}
//       </Fancybox>

//       <div className="show-more">
//         <Button variant="contained" type="submit" onClick={getImages}>
//           Show more
//         </Button>
//       </div>
//     </>
//   );
// };

// export default ImagesBlock;
