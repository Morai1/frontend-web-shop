import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/loadingspinner/LoadingSpinner";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// We will be using lazy loading to only load the components that are needed

const HomePage = lazy(() => import("./views/Home/HomePage.tsx"));

const AboutPage = lazy(() => import("./views/About/AboutPage.tsx"));

const ProductsPage = lazy(() => import("./views/Products/ProductsPage.tsx"));

const CheckoutOverviewPage = lazy(
  () => import("./views/Checkout/CheckoutOverview.tsx")
);

const AddressForm = lazy(() => import("./views/Checkout/AddressForm.tsx"));

const PaymentForm = lazy(() => import("./views/Checkout/Payment.tsx"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/checkout" element={<CheckoutOverviewPage />} />
            <Route path="/checkout/address" element={<AddressForm />} />
            <Route path="/checkout/payment" element={<PaymentForm />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
