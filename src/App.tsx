import "toastr/build/toastr.css";
import 'sweetalert2/dist/sweetalert2.css';
import { Route, Routes } from "react-router-dom"
import NotFound from "./components/NotFound";
import CartDetailPage from "./pages/admin/cart/CartDetailPage";
import CartListPage from "./pages/admin/cart/CartListPage";
import AddCateNewsPage from "./pages/admin/category-news/AddCateNewsPage";
import CateNewsListPage from "./pages/admin/category-news/CateNewsListPage";
import EditCateNewsPage from "./pages/admin/category-news/EditCateNewsPage";
import AddCategoryPage from "./pages/admin/category/AddCategoryPage";
import CategoryListPage from "./pages/admin/category/CategoryListPage";
import EditCategoryPage from "./pages/admin/category/EditCategoryPage";
import CommentDetailPage from "./pages/admin/comment/CommentDetailPage";
import CommentListPage from "./pages/admin/comment/CommentListPage";
import ContactDetailPage from "./pages/admin/contact/ContactDetailPage";
import ContactListPage from "./pages/admin/contact/ContactListPage";
import Dashboard from "./pages/admin/Dashboard";
import AddNewsPage from "./pages/admin/news/AddNewsPage";
import EditNewsPage from "./pages/admin/news/EditNewsPage";
import NewsListPage from "./pages/admin/news/NewsListPage";
import AddProductPage from "./pages/admin/product/AddProductPage";
import EditProductPage from "./pages/admin/product/EditProductPage";
import ProductListPage from "./pages/admin/product/ProductListPage";
import AdminUpdateInfoPage from "./pages/admin/profile/AdminUpdateInfoPage";
import AdminUpdatePassword from "./pages/admin/profile/AdminUpdatePassword";
import AddSizePage from "./pages/admin/size/AddSizePage";
import EditSizePage from "./pages/admin/size/EditSizePage";
import SizeListPage from "./pages/admin/size/SizeListPage";
import AddSlidePage from "./pages/admin/slider/AddSlidePage";
import EditSlidePage from "./pages/admin/slider/EditSlidePage";
import SliderListPage from "./pages/admin/slider/SliderListPage";
import AddStorePage from "./pages/admin/store/AddStorePage";
import EditStorePage from "./pages/admin/store/EditStorePage";
import StoreListPage from "./pages/admin/store/StoreListPage";
import AddToppingPage from "./pages/admin/topping/AddToppingPage";
import EditToppingPage from "./pages/admin/topping/EditToppingPage";
import ToppingListPage from "./pages/admin/topping/ToppingListPage";
import AddUserPage from "./pages/admin/user/AddUserPage";
import EditUserPage from "./pages/admin/user/EditUserPage";
import AdminUserList from "./pages/admin/user/UserListPage";
import AddVoucherPage from "./pages/admin/voucher/AddVoucherPage";
import EditVoucherPage from "./pages/admin/voucher/EditVoucherPage";
import VoucherListPage from "./pages/admin/voucher/VoucherListPage";
import ForgotPage from "./pages/auth/ForgotPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AdminLayout from "./pages/layouts/AdminLayout";
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

            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="user">
                    <Route index element={<AdminUserList />} />
                    <Route path="add" element={<AddUserPage />} />
                    <Route path=":id/edit" element={<EditUserPage />} />
                </Route>

                <Route path="news">
                    <Route index element={<NewsListPage />} />
                    <Route path="add" element={<AddNewsPage />} />
                    <Route path=":id/edit" element={<EditNewsPage />} />
                </Route>

                <Route path="category-news">
                    <Route index element={<CateNewsListPage />} />
                    <Route path="add" element={<AddCateNewsPage />} />
                    <Route path=":id/edit" element={<EditCateNewsPage />} />
                </Route>

                <Route path="product">
                    <Route index element={<ProductListPage />} />
                    <Route path="add" element={<AddProductPage />} />
                    <Route path=":id/edit" element={<EditProductPage />} />
                </Route>

                <Route path="size">
                    <Route index element={<SizeListPage />} />
                    <Route path="add" element={<AddSizePage />} />
                    <Route path=":id/edit" element={<EditSizePage />} />
                </Route>

                <Route path="slider">
                    <Route index element={<SliderListPage />} />
                    <Route path="add" element={<AddSlidePage />} />
                    <Route path=":id/edit" element={<EditSlidePage />} />
                </Route>

                <Route path="topping">
                    <Route index element={<ToppingListPage />} />
                    <Route path="add" element={<AddToppingPage />} />
                    <Route path=":id/edit" element={<EditToppingPage />} />
                </Route>

                <Route path="store">
                    <Route index element={<StoreListPage />} />
                    <Route path="add" element={<AddStorePage />} />
                    <Route path=":id/edit" element={<EditStorePage />} />
                </Route>

                <Route path="voucher">
                    <Route index element={<VoucherListPage />} />
                    <Route path="add" element={<AddVoucherPage />} />
                    <Route path=":id/edit" element={<EditVoucherPage />} />
                </Route>

                <Route path="category">
                    <Route index element={<CategoryListPage />} />
                    <Route path="add" element={<AddCategoryPage />} />
                    <Route path=":slug/edit" element={<EditCategoryPage />} />
                </Route>

                <Route path="contact">
                    <Route index element={<ContactListPage />} />
                    <Route path=":id/detail" element={<ContactDetailPage />} />
                </Route>

                <Route path="comment">
                    <Route index element={<CommentListPage />} />
                    <Route path=":id/detail" element={<CommentDetailPage />} />
                </Route>

                <Route path="cart">
                    <Route index element={<CartListPage />} />
                    <Route path=":id/detail" element={<CartDetailPage />} />
                </Route>

                <Route path="profile">
                    <Route index element={<AdminUpdateInfoPage />} />
                    <Route path="change-password" element={<AdminUpdatePassword />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App;