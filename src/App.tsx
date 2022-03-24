import { Route, Routes } from "react-router-dom"
import NotFound from "./components/NotFound";
import ForgotPage from "./pages/auth/ForgotPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import MyAccountLayout from "./pages/layouts/MyAccountLayout";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import AboutPage from "./pages/user/AboutPage";
import CartPage from "./pages/user/cart/CartPage";
import CheckoutPage from "./pages/user/cart/CheckoutPage";
import ThankPage from "./pages/user/cart/ThankPage";
import ContactPage from "./pages/user/ContactPage";
import HomePage from "./pages/user/HomePage";
import AddressDetailPage from "./pages/user/my-account/AddressDetailPage";
import AddressPage from "./pages/user/my-account/AddressPage";
import MyCartDetailPage from "./pages/user/my-account/MyCartDetailPage";
import MyCartPage from "./pages/user/my-account/MyCartPage";
import UpdateInfoPage from "./pages/user/my-account/UpdateInfoPage";
import UpdatePasswordPage from "./pages/user/my-account/UpdatePasswordPage";
import NewsPage from "./pages/user/NewsPage";
import ProductDetailPage from "./pages/user/ProductDetailPage";
import ProductPage from "./pages/user/ProductPage";
import StorePage from "./pages/user/StorePage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<HomePage />} />
                <Route path="gioi-thieu" element={<AboutPage />} />
                <Route path="thuc-don" element={<ProductPage />} />
                <Route path="san-pham/:slug" element={<ProductDetailPage />} />
                <Route path="tin-tuc" element={<NewsPage />} />
                <Route path="lien-he" element={<ContactPage />} />
                <Route path="cua-hang" element={<StorePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="forgot" element={<ForgotPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="thank-you" element={<ThankPage />} />
                <Route path="my-account" element={<MyAccountLayout />}>
                    <Route index element={<UpdateInfoPage />} />
                    <Route path="update-password" element={<UpdatePasswordPage />} />
                    <Route path="cart" element={<MyCartPage />} />
                    <Route path="cart/:id" element={<MyCartDetailPage />} />
                    <Route path="address" element={<AddressPage />} />
                    <Route path="address/:id" element={<AddressDetailPage />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App;