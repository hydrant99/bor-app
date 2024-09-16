import React from 'react';
import '../App.css';
import Product1 from '../images/BOR_Ticket-12.png';
import Product2 from '../images/ProductImagesv4-2.png';


const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>The Box of Rocks</h1>
      <div className="product-details">
        <div className="photo-gallery">
         {/*<img src={Product1} alt="Box of Rocks" />  */}
         {/* <img src={Product2} alt="Box of Rocks" /> */}
        </div>
        <div className="product-info">
          <p><strong>Price:</strong> $12.99</p>
          <p><strong>Details:</strong> Send a box of rocks to any address in the USA and spread some unexpected fun!

                Each box contains one pound of river rocks, perfect for surprising friends, family, or colleagues.  

                Each box comes with 4 card options.  Adhere the blank card to fill out your own custom message, or use one of the other card options as you see fit!


                Please note: Due to the surprise nature of this product, refunds/returns are not allowed after the product has shipped.

                Product Dimensions:
                Box Size: 4in x 4in x 2in 
                Packaged Weight: 16 oz. 
                Add a touch of spontaneity to someone's day with a Box of Rocks!</p>
        
        </div>
      </div>
      <div className="paypal-button-container">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="4PPKH492WX98U" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
