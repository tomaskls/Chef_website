import { Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/292/1000/600",
    thumbnail: "https://picsum.photos/id/292/250/150",
  },
  {
    original: "https://picsum.photos/id/225/1000/600",
    thumbnail: "https://picsum.photos/id/225/250/150",
  },
  {
    original: "https://picsum.photos/id/75/1000/600",
    thumbnail: "https://picsum.photos/id/75/250/150",
  },
];

export const MyGallery = () => 
<div style={{marginBottom: '30px'}} id="gallery">
<Typography sx={{marginBottom:1, fontSize: { xs: '2rem', sm: '3rem'}}} variant="h3">My Gallery</Typography>
<ImageGallery items={images} />
</div>