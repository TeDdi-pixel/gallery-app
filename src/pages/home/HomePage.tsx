import DefaultLayout from "../../layout/default/DefaultLayout";
import ImagesBlock from "../../widgets/imagesBlock/ImagesBlock";

export type TypeQuery = {
  query: string;
};

export type TypeImage = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
};

const HomePage = () => {
  return (
    <DefaultLayout>
      <ImagesBlock />
    </DefaultLayout>
  );
};

export default HomePage;
