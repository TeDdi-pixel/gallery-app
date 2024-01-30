import { useForm } from "react-hook-form";
import { useUnsplash } from "../../hooks/useUnsplash";
import Search from "../../entities/search/Search";
import Input from "../../shared/default/input/Input";
import { Button } from "@mui/material";
import Fancybox from "../../features/fancyBox/FancyBox";
import Images from "../../entities/images/Images";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImagesBlock = () => {
  const { register } = useForm();
  const { images, results, onSubmit, getImages } = useUnsplash();
  return (
    <>
      <Search onSubmit={onSubmit}>
        <Input
          type={"text"}
          label={"Search"}
          name={"query"}
          register={register}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Search>

      <Fancybox
        options={{
          Carousel: {
            infinite: true,
          },
        }}
      >
        {results.length > 0 ? (
          <Images images={results} />
        ) : (
          <Images images={images} />
        )}
      </Fancybox>

      <div className="show-more">
        <Button variant="contained" type="submit" onClick={getImages}>
          Show more
        </Button>
      </div>
    </>
  );
};

export default ImagesBlock;
