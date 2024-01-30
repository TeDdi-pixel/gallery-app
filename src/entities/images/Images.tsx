import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TypeImage } from '../../pages/home/HomePage';

const Images = ({ images }: { images: TypeImage[] }) => {
    return (
        <>
          {images.map((img: TypeImage, index: number) => (
            <a
              data-fancybox={`image${index}`}
              href={img.urls.regular}
              className="picture"
              key={img.id}
            >
              <LazyLoadImage src={img.urls.small} alt="" effect="blur" />
            </a>
          ))}
        </>
      );
}

export default Images
