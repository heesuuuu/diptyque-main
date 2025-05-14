import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import {
  Cart,
  Collection,
  GuestOrder,
  Main,
  Maison,
  Mypage,
  Payment,
  ProductDetail,
  ProductList,
  Promotion,
  Register,
  SearchResult,
  Service,
  SignIn,
} from './pages';
import './styles/globals.scss';
import ScrollToTop from './utils/ScrollToTop';
import CategoryList from './components/productList/CategoryList';
import MyPageInfoEdit from './components/mypage/MyPageInfoEdit';
import MyPageMyAsk from './components/mypage/MyPageMyAsk';
import MyPageMyPayment from './components/mypage/MyPageMyPayment';
import MyPageOrder from './components/mypage/MyPageOrder';
import PaymentLayout from './components/payment/PaymentLayout';
import ShippingAddress from './components/payment/ShippingAddress';
import ShippingMethod from './components/payment/ShippingMethod';
import PaymentMethod from './components/payment/PaymentMethod';

const GOOGLE_CLIENT_ID = '938549800295-jauqqv8g7482gt4o5k7sm9l5kbbhbhid.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/maison" element={<Maison />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/product" element={<ProductList />}>
              <Route path=":categoryName" element={<CategoryList />} />
            </Route>
            <Route path="/product/detail/:productId" element={<ProductDetail />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/service" element={<Service />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/mypage/info" element={<MyPageInfoEdit />} />
            <Route path="/mypage/order" element={<MyPageOrder />} />
            <Route path="/mypage/payment" element={<MyPageMyPayment />} />
            <Route path="/mypage/ask" element={<MyPageMyAsk />} />

            <Route path="/payment" element={<PaymentLayout />}>
              <Route path="shipping-address" element={<ShippingAddress />} />
              <Route path="shipping-method" element={<ShippingMethod />} />
              <Route path="payment-method" element={<PaymentMethod />} />
            </Route>

            <Route path="/guestorder" element={<GuestOrder />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/searchresult" element={<SearchResult />} />
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
