import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
const App = () => {
  return (
    <BrowserRouter>
    <Router>
      <Route path = "/" element =  {<HomePage/>} />
      <Route path = "/login" element =  {<loginPage/>} />
      <Route path = "/signUp" element =  {<signUpPage/>} />
      <Route path = "/admin" element =  {<AdminHome/>}>
        <Route path = "/admin/viewProfileInformation" element = {<viewAdminProfile/>}/>
        <Route path = "/admin/editProfileInformation" element = {<AdminEditProfile/>}/>
        <Route path = "/admin/viewForums" element = {<ViewForums/>}/>
        <Route path = "/admin/viewTripAgencies" element = {<ViewTripAgencies/>}/>
        <Route path = "/admin/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/admin/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/admin/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/admin/addForum" element = {<AddForum/>}/>
        <Route path = "/admin/deleteForum" element = {<deleteForum/>}/>
        <Route path = "/admin/addUser" element = {<addUser/>}/>
        <Route path = "/admin/deleteUser" element = {<deleteUser/>}/>
        <Route path = "/admin/addTripAgency" element = {<addTripAgency/>}/>
        <Route path = "/admin/deleteTripAgency" element = {<deleteTripAgency/>}/>
        <Route path = "/admin/addHotel" element = {<addHotel/>}/>
        <Route path = "/admin/deleteHotel" element = {<deleteHotel/>}/>
        <Route path = "/admin/addRestaurant" element = {<addRestaurant/>}/>
        <Route path = "/admin/deleteRestaurant" element = {<deleteRestaurant/>}/>
      </Route>
      <Route path = "/superAdmin" element =  {<SuperAdminHome/>}>
        <Route path = "/superAdmin/viewAdmins" element = {<viewAdmins/>}/>
        <Route path = "/superAdmin/addAdmin" element = {<addAdmin/>}/>
        <Route path = "/superAdmin/deleteAdmin" element = {<deleteAdmin/>}/>
        <Route path = "/superAdmin/viewForums" element = {<ViewForums/>}/>
        <Route path = "/superAdmin/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/superAdmin/vieHotels" element = {<ViewHotels/>}/>
        <Route path = "/superAdmin/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/superAdmin/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/user" element =  {<HomePage/>}>
        <Route path = "/user/viewProfileInformation" element = {<viewUserProfile/>}/>
        <Route path = "/user/editProfileInformation" element = {<editUserProfile/>}/>
        <Route path = "/user/viewTripAgencies" element = {<viewTripAgencies/>}/>
        <Route path = "/user/viewHotels" element = {<viewHotels/>}/>
        <Route path = "/user/viewRestaurants" element = {<viewRestaurants/>}/>
        <Route path = "/user/viewForums" element = {<viewForums/>}/>
        <Route path = "/user/addForum" element = {<addMyForum/>}/>
        <Route path = "/user/deleteForum" element = {<deleteMyForum/>}/>
      </Route>
      <Route path = "/tripAgency" element =  {<TripAgencyPage/>}>
        <Route path = "/tripAgency/viewProfileInformation" element = {<viewTripAgencyProfile/>}/>
        <Route path = "/tripAgency/editProfileInformation" element = {<editTripAgencyProfile/>}/>
        <Route path = "/tripAgency/viewForums" element = {<viewForums/>}/>
        <Route path = "/superAdmin/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/superAdmin/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/superAdmin/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/superAdmin/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/restaurant" element =  {<RestaurantPage/>}>
        <Route path = "/restaurant/viewProfileInformation" element = {<viewRestaurantProfile/>}/>
        <Route path = "/restaurant/editProfileInformation" element = {<editRestaurantProfile/>}/>
        <Route path = "/restaurant/viewForums" element = {<viewForums/>}/>
        <Route path = "/restaurant/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/restaurant/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/restaurant/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/restaurant/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/hotel" element =  {<HotelPage/>}>
        <Route path = "/hotel/viewProfileInformation" element = {<viewHotelProfile/>}/>
        <Route path = "/hotel/editProfileInformation" element = {<editHotelProfile/>}/>
        <Route path = "/hotel/viewForums" element = {<viewForums/>}/>
        <Route path = "/hotel/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/hotel/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/hotel/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/hotel/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/contentWriter" element = {<ContentWriterPage/>}>
        <Route path = "/contentWriter/viewProfileInformation" element = {<viewContentWriterProfile/>}/>
        <Route path = "/contentWriter/editProfileInformation" element = {<editContentWriterProfile/>}/>
        <Route path = "/contentWriter/viewForums" element = {<viewForums/>}/>
        <Route path = "/contentWriter/viewMyArticles" element = {<viewMyArticles/>}/>
        <Route path = "/contentWriter/addArticle" element = {<addMyArticle/>}/>
        <Route path = "/contentWriter/deleteArticle" element = {<deleteMyArticle/>}/>
      </Route>
    </Router>
    </BrowserRouter>
  );
};

export default App;
