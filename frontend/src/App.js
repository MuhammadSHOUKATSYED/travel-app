import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
const App = () => {
  return (
    <BrowserRouter>
    <Router>
      <Route path = "/" element =  {<HomePage/>} />
      <Route path = "/login" element =  {<LoginPage/>} />
      <Route path = "/signUp" element =  {<SignUpPage/>} />
      <Route path = "/admin" element =  {<AdminHome/>}>
        <Route path = "/viewProfileInformation" element = {<ViewAdminProfile/>}/>
        <Route path = "/editProfileInformation" element = {<AdminEditProfile/>}/>
        <Route path = "/viewForums" element = {<ViewForums/>}/>
        <Route path = "/viewTripAgencies" element = {<ViewTripAgencies/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/addForum" element = {<AddForum/>}/>
        <Route path = "/deleteForum" element = {<DeleteForum/>}/>
        <Route path = "/addUser" element = {<AddUser/>}/>
        <Route path = "/deleteUser" element = {<DeleteUser/>}/>
        <Route path = "/addTripAgency" element = {<AddTripAgency/>}/>
        <Route path = "/deleteTripAgency" element = {<DeleteTripAgency/>}/>
        <Route path = "/addHotel" element = {<AddHotel/>}/>
        <Route path = "/deleteHotel" element = {<DeleteHotel/>}/>
        <Route path = "/addRestaurant" element = {<AddRestaurant/>}/>
        <Route path = "/deleteRestaurant" element = {<DeleteRestaurant/>}/>
      </Route>
      <Route path = "/superAdmin" element =  {<SuperAdminHome/>}>
        <Route path = "/viewAdmins" element = {<ViewAdmins/>}/>
        <Route path = "/addAdmin" element = {<AddAdmin/>}/>
        <Route path = "/deleteAdmin" element = {<DeleteAdmin/>}/>
        <Route path = "/viewForums" element = {<ViewForums/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/vieHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/user" element =  {<UserHome/>}>
        <Route path = "/viewProfileInformation" element = {<viewUserProfile/>}/>
        <Route path = "/editProfileInformation" element = {<EditUserProfile/>}/>
        <Route path = "/viewTripAgencies" element = {<ViewTripAgencies/>}/>
        <Route path = "/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/viewForums" element = {<ViewForums/>}/>
        <Route path = "/addForum" element = {<AddMyForum/>}/>
        <Route path = "/deleteForum" element = {<DeleteMyForum/>}/>
      </Route>
      <Route path = "/tripAgency" element =  {<TripAgencyPage/>}>
        <Route path = "/viewProfileInformation" element = {<ViewTripAgencyProfile/>}/>
        <Route path = "/editProfileInformation" element = {<EditTripAgencyProfile/>}/>
        <Route path = "/viewForums" element = {<ViewForums/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/superAdmin/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/restaurant" element =  {<RestaurantPage/>}>
        <Route path = "/viewProfileInformation" element = {<ViewRestaurantProfile/>}/>
        <Route path = "/editProfileInformation" element = {<EditRestaurantProfile/>}/>
        <Route path = "/viewForums" element = {<ViewForums/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/hotel" element =  {<HotelPage/>}>
        <Route path = "/viewProfileInformation" element = {<ViewHotelProfile/>}/>
        <Route path = "/editProfileInformation" element = {<EditHotelProfile/>}/>
        <Route path = "/viewForums" element = {<ViewForums/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/contentWriter" element = {<ContentWriterPage/>}>
        <Route path = "/viewProfileInformation" element = {<ViewContentWriterProfile/>}/>
        <Route path = "/editProfileInformation" element = {<EditContentWriterProfile/>}/>
        <Route path = "/viewForums" element = {<ViewForums/>}/>
        <Route path = "/viewMyArticles" element = {<ViewMyArticles/>}/>
        <Route path = "/addArticle" element = {<AddMyArticle/>}/>
        <Route path = "/deleteArticle" element = {<DeleteMyArticle/>}/>
      </Route>
    </Router>
    </BrowserRouter>
  );
};

export default App;
