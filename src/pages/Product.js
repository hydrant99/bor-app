import React, { useState, useRef } from 'react';
import '../App.css';

// Import your images and video
import img1 from '../images/IMG_2951.jpg';
import img2 from '../images/ProductImagesv4-7.png';
import img3 from '../images/ProductImagesv4-3.png';
import video from '../images/ProductImagesv4-13.mp4'; // Replace with your video file
import videoThumbnail from '../images/thumb.png'; // Replace with your video thumbnail image

const ProductPage = () => {
  const [mainImage, setMainImage] = useState(img1); // Default image
  const [isVideo, setIsVideo] = useState(false); // State to check if main content is a video
  const videoRef = useRef(null); // Ref for controlling video playback

  const images = [
    img1,
    img2,
    img3,
    video, // Video added to the gallery
  ];

  const handleThumbnailClick = (media, isVideo) => {
    setIsVideo(isVideo);
    setMainImage(media);
    if (isVideo && videoRef.current) {
      videoRef.current.pause(); // Ensure video doesn't play automatically
    }
  };

  return (
    <div className="product-container">
      <div className="image-gallery">
        <div className="main-image">
          {isVideo ? (
            <div className="video-container">
              <video
                ref={videoRef}
                src={mainImage}
                controls
                poster={videoThumbnail} // Adding the video thumbnail
              />
            </div>
          ) : (
            <img src={mainImage} alt="Main Product" />
          )}
        </div>
        <div className="thumbnail-gallery">
          {images.map((media, index) => (
            <img
              key={index}
              src={media !== video ? media : videoThumbnail} // Show video thumbnail for video
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => handleThumbnailClick(media, media === video)}
            />
          ))}
        </div>
      </div>
      
      <div className="product-details">
      <hr />
        <h2>The Box of Rocks</h2>
        <p className="price">$12.99</p>
        <div className="paypal-button-container">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="4PPKH492WX98U" />
            <input type="hidden" name="currency_code" value="USD" />
            <input 
              type="image" 
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" 
              border="0" 
              name="submit" 
              title="PayPal - The safer, easier way to pay online!" 
              alt="Buy Now" 
            />
          </form>
        </div>


        <p className="description">
            <ul>
                <li>Send a box of rocks to any address in the USA and spread some unexpected fun!</li>

              <li>Each box contains one pound of river rocks, perfect for surprising friends, family, or colleagues.  </li>

              <li>Each box comes with 4 card options.  Adhere the blank card to fill out your own custom message, or use one of the other card options as you see fit!</li>


              <li>Please note: Due to the surprise nature of this product, refunds/returns are not allowed after the product has shipped.</li>

              <li>Product Dimensions:</li>
              Box Size: 4in x 4in x 2in <br />
              Packaged Weight: 16 oz. <br />
              <br/>
              Add a touch of spontaneity to someone's day with a Box of Rocks!
            </ul>
        </p>


      </div>
    </div>
  );
};

export default ProductPage;
