import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Homepage from './customer/Pages/HomePage/Homepage.jsx';
import Product from './customer/components/Product/Product.jsx';
import Footer from './customer/components/FOOTER/Footer.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Cart from '../src/customer/components/Cart/Cart.jsx'
import Checkout from './customer/components/Checkout/Checkout.jsx';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
      {/*<Homepage/> */}
      {/* <Product/> */}
      {/* <ProductDetails /> */}
      {/* <Cart/> */}
      <Checkout  />
    </div>
    <Footer/>
    </div>
    
  );
}

export default App;
