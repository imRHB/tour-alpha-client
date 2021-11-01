import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import PackageDetails from './Pages/Details/PackageDetails/PackageDetails';
import Home from './Pages/Landing/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import TourPackage from './Pages/TourAlphaPackage/TourPackage/TourPackage';
import Login from './Pages/User/Login/Login';
import PrivateRoute from './Pages/User/PrivateRoute/PrivateRoute';
import Register from './Pages/User/Register/Register';
import Dashboard from './Pages/User/Dashboard/Dashboard/Dashboard';
import AddPackage from './Pages/User/Dashboard/AddPackage/AddPackage';
import DiscountPackages from './Pages/Landing/DiscountOffer/DiscountPackages/DiscountPackages';
import DiscountPackDetails from './Pages/Details/DiscountPackDetails/DiscountPackDetails';
import MyBooking from './Pages/User/Dashboard/MyBooking/MyBooking';
import AllBooking from './Pages/User/Dashboard/AllBooking/AllBooking';
import ManagePackages from './Pages/User/Dashboard/ManagePackages/ManagePackages';
import './App.css';

function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/packages">
              <TourPackage></TourPackage>
            </Route>
            <PrivateRoute exact path="/packages/:packgId">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <Route exact path="/discount-package">
              <DiscountPackages></DiscountPackages>
            </Route>
            <PrivateRoute exact path="/discount-package/:packgId">
              <DiscountPackDetails></DiscountPackDetails>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/manage-packages">
              <ManagePackages></ManagePackages>
            </PrivateRoute>
            <PrivateRoute path="/my-booking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/all-booking">
              <AllBooking></AllBooking>
            </PrivateRoute>
            <PrivateRoute path="/add-package">
              <AddPackage></AddPackage>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
