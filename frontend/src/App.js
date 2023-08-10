import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import SuperAdminHome from './dashboards/superAdmin/pages/SuperAdminHome';
import SuperAdminLayout from './dashboards/superAdmin/pages/SuperAdminLayout';
import AddAdmin from './dashboards/superAdmin/pages/AddAdmin';
import DeleteAdmin from './dashboards/superAdmin/pages/DeleteAdmin';
import ViewAdmins from './dashboards/superAdmin/pages/ViewAdmins';
import UserHome from './dashboards/user/pages/UserHome';
import AddMyForum from './dashboards/user/pages/AddMyForum';
import DeleteMyForum from './dashboards/user/pages/DeleteMyForum';
import EditUserProfile from './dashboards/user/pages/EditUserProfile';
import ViewForums from './components/ViewForums';
import ViewHotels from './components/ViewHotels';
import ViewRestaurants from './components/ViewRestaurants'
import ViewTripAgencies from './components/ViewTripAgencies';
import ViewUserProfile from './dashboards/user/pages/ViewUserProfile';
import AdminHome from './dashboards/admin/pages/AdminHome';
import ViewAdminProfile from './dashboards/admin/pages/ViewAdminProfile';
import AdminEditProfile from './dashboards/admin/pages/AdminEditProfile';
import AddForum from './dashboards/admin/pages/AddForum';
import DeleteForum from './dashboards/admin/pages/DeleteForum';
import ViewUsers from './components/ViewUsers';
import AddRestaurant from './dashboards/admin/pages/AddRestaurant';
import DeleteRestaurant from './dashboards/admin/pages/DeleteRestaurant';
import AddHotel from './dashboards/admin/pages/AddHotel';
import DeleteHotel from './dashboards/admin/pages/DeleteHotel';
import AddTripAgency from './dashboards/admin/pages/AddTripAgency';
import DeleteTripAgency from './dashboards/admin/pages/DeleteTripAgency';
import AddUser from './dashboards/admin/pages/AddUser';
import DeleteUser from './dashboards/admin/pages/DeleteUser';
import AddMyArticle from './dashboards/contentWriter/pages/AddMyArticle';
import ContentWriterHome from './dashboards/contentWriter/pages/ContentWriterHome';
import DeleteMyArticle from './dashboards/contentWriter/pages/DeleteMyArticle';
import EditWriterProfile from './dashboards/contentWriter/pages/EditWriterProfile';
import ViewWriterProfile from './dashboards/contentWriter/pages/ViewWriterProfile';
import ViewMyArticles from './dashboards/contentWriter/pages/ViewWriterProfile';
import ViewTripAgencyProfile from './dashboards/tripAgency/pages/ViewTripAgencyProfile';
import EditTripAgencyProfile from './dashboards/tripAgency/pages/EditTripAgencyProfile';
import TripAgencyHome from './dashboards/tripAgency/pages/TripAgencyHome';
import TripAgencyLayout from './dashboards/tripAgency/pages/TripAgencyLayout';
import RestaurantHome from './dashboards/restaurant/pages/RestaurantHome';
import RestaurantLayout from './dashboards/restaurant/pages/RestaurantLayout';
import EditRestaurantProfile from './dashboards/restaurant/pages/EditRestaurantProfile';
import ViewRestaurantProfile from './dashboards/restaurant/pages/ViewRestaurantProfile';
import HotelHome from './dashboards/hotel/pages/HotelHome';
import HotelLayout from './dashboards/hotel/pages/HotelLayout';
import ViewHotelProfile from './dashboards/hotel/pages/ViewHotelProfile';
import EditHotelProfile from './dashboards/hotel/pages/EditHotelProfile';
import HomePage from './pages/HomePage';
import UserLayout from './dashboards/user/pages/UserLayout';
import ViewArticles from './components/ViewArticles';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/superAdmin" element={<SuperAdminLayout />}>
          <Route index element={<SuperAdminHome />} />
          <Route path="/superAdmin/viewAdmins" element={<ViewAdmins />} />
          <Route path="/superAdmin/addAdmin" element={<AddAdmin />} />
          <Route path="/superAdmin/deleteAdmin" element={<DeleteAdmin />} />
          <Route path="/superAdmin/viewForums" element={<ViewForums />} />
          <Route path="/superAdmin/viewUsers" element={<ViewUsers />} />
          <Route path="/superAdmin/viewHotels" element={<ViewHotels />} />
          <Route path="/superAdmin/viewRestaurants" element={<ViewRestaurants />} />
          <Route path="/superAdmin/viewTripAgencies" element={<ViewTripAgencies />} />
        </Route>
        <Route path="/admin" element={<AdminHome />}>
          <Route path="/admin/viewProfileInformation" element={<ViewAdminProfile />} />
          <Route path="/admin/editProfileInformation" element={<AdminEditProfile />} />
          <Route path="/admin/viewForums" element={<ViewForums />} />
          <Route path="/admin/viewTripAgencies" element={<ViewTripAgencies />} />
          <Route path="/admin/viewUsers" element={<ViewUsers />} />
          <Route path="/admin/viewHotels" element={<ViewHotels />} />
          <Route path="/admin/viewRestaurants" element={<ViewRestaurants />} />
          <Route path="/admin/addForum" element={<AddForum />} />
          <Route path="/admin/deleteForum" element={<DeleteForum />} />
          <Route path="/admin/addUser" element={<AddUser />} />
          <Route path="/admin/deleteUser" element={<DeleteUser />} />
          <Route path="/admin/addTripAgency" element={<AddTripAgency />} />
          <Route path="/admin/deleteTripAgency" element={<DeleteTripAgency />} />
          <Route path="/admin/addHotel" element={<AddHotel />} />
          <Route path="/admin/deleteHotel" element={<DeleteHotel />} />
          <Route path="/admin/addRestaurant" element={<AddRestaurant />} />
          <Route path="/admin/deleteRestaurant" element={<DeleteRestaurant />} />
        </Route>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserHome />} />
          <Route path="/user/viewProfileInformation" element={<ViewUserProfile />} />
          <Route path="/user/editProfileInformation" element={<EditUserProfile />} />
          <Route path="/user/viewTripAgencies" element={<ViewTripAgencies />} />
          <Route path="/user/viewHotels" element={<ViewHotels />} />
          <Route path="/user/viewRestaurants" element={<ViewRestaurants />} />
          <Route path = "/user/viewArticles" element = {<ViewArticles />} />
          <Route path="/user/viewForums" element={<ViewForums />} />
          <Route path="/user/addForum" element={<AddMyForum />} />
          <Route path="/user/deleteForum" element={<DeleteMyForum />} />
        </Route>
        <Route path="/contentWriter" element={<ContentWriterHome />}>
          <Route path="/contentWriter/viewProfileInformation" element={<ViewWriterProfile />} />
          <Route path="/contentWriter/editProfileInformation" element={<EditWriterProfile />} />
          <Route path="/contentWriter/viewForums" element={<ViewForums />} />
          <Route path="/contentWriter/viewTripAgencies" element={<ViewTripAgencies />} />
          <Route path="/contentWriter/viewHotels" element={<ViewHotels />} />
          <Route path="/contentWriter/viewRestaurants" element={<ViewRestaurants />} />
          <Route path="/contentWriter/viewMyArticles" element={<ViewMyArticles />} />
          <Route path="/contentWriter/addArticle" element={<AddMyArticle />} />
          <Route path="/contentWriter/deleteArticle" element={<DeleteMyArticle />} />
        </Route>
        <Route path="/tripAgency" element={<TripAgencyLayout />}>
          <Route index element={<TripAgencyHome />} />
          <Route path="/tripAgency/viewProfileInformation" element={<ViewTripAgencyProfile />} />
          <Route path="/tripAgency/editProfileInformation" element={<EditTripAgencyProfile />} />
          <Route path="/tripAgency/viewForums" element={<ViewForums />} />
          <Route path="/tripAgency/viewUsers" element={<ViewUsers />} />
          <Route path="/tripAgency/viewHotels" element={<ViewHotels />} />
          <Route path="/tripAgency/viewRestaurants" element={<ViewRestaurants />} />
          <Route path="/tripAgency/viewTripAgencies" element={<ViewTripAgencies />} />
        </Route>
        <Route path="/restaurant" element={<RestaurantLayout />}>
          <Route index element={<RestaurantHome />} />
          <Route path="/restaurant/viewProfileInformation" element={<ViewRestaurantProfile />} />
          <Route path="/restaurant/editProfileInformation" element={<EditRestaurantProfile />} />
          <Route path="/restaurant/viewForums" element={<ViewForums />} />
          <Route path="/restaurant/viewUsers" element={<ViewUsers />} />
          <Route path="/restaurant/viewHotels" element={<ViewHotels />} />
          <Route path="/restaurant/viewRestaurants" element={<ViewRestaurants />} />
          <Route path="/restaurant/viewTripAgencies" element={<ViewTripAgencies />} />
        </Route>
        <Route path="/hotel" element={<HotelLayout />}>
          <Route index element={<HotelHome />} />
          <Route path="/hotel/viewProfileInformation" element={<ViewHotelProfile />} />
          <Route path="/hotel/editProfileInformation" element={<EditHotelProfile />} />
          <Route path="/hotel/viewForums" element={<ViewForums />} />
          <Route path="/hotel/viewUsers" element={<ViewUsers />} />
          <Route path="/hotel/viewHotels" element={<ViewHotels />} />
          <Route path="/hotel/viewRestaurants" element={<ViewRestaurants />} />
          <Route path="/hotel/viewTripAgencies" element={<ViewTripAgencies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;