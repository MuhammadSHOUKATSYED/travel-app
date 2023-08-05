import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter, Router, Route } from 'react-router-dom';
>>>>>>> b10bc6b536a05461549c54a1eca5e570a112472c
import HomePage from './components/homePage/homePage';
import Login from './components/login/login'
import SignUp from './components/login/SignUp'

const App = () => {
  return (
<<<<<<< HEAD
    <Routes>
    component={<HomePage/>}
    <Route path="/" component={<HomePage/>}/>
    <Route path="/login" component={<Login/>}/>
  <Route path="/signup" component={<SignUp/>}/>
</Routes>
  )}
=======
    <BrowserRouter>
    <Router>
      <Route path = "/" element =  {<HomePage/>} />
      <Route path = "/login" element =  {<loginPage/>} />
      <Route path = "/signUp" element =  {<signUpPage/>} />
      <Route path = "/admin" element =  {<AdminHome/>}>
        <Route path = "/viewProfileInformation" element = {<viewAdminProfile/>}/>
        <Route path = "/editProfileInformation" element = {<AdminEditProfile/>}/>
        <Route path = "/viewForums" element = {<ViewForums/>}/>
        <Route path = "/viewTripAgencies" element = {<ViewTripAgencies/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/addForum" element = {<AddForum/>}/>
        <Route path = "/deleteForum" element = {<deleteForum/>}/>
        <Route path = "/addUser" element = {<addUser/>}/>
        <Route path = "/deleteUser" element = {<deleteUser/>}/>
        <Route path = "/addTripAgency" element = {<addTripAgency/>}/>
        <Route path = "/deleteTripAgency" element = {<deleteTripAgency/>}/>
        <Route path = "/addHotel" element = {<addHotel/>}/>
        <Route path = "/deleteHotel" element = {<deleteHotel/>}/>
        <Route path = "/addRestaurant" element = {<addRestaurant/>}/>
        <Route path = "/deleteRestaurant" element = {<deleteRestaurant/>}/>
      </Route>
      <Route path = "/superAdmin" element =  {<SuperAdminHome/>}>
        <Route path = "/viewAdmins" element = {<viewAdmins/>}/>
        <Route path = "/addAdmin" element = {<addAdmin/>}/>
        <Route path = "/deleteAdmin" element = {<deleteAdmin/>}/>
        <Route path = "/viewForums" element = {<ViewForums/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/vieHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/user" element =  {<UserHome/>}>
        <Route path = "/viewProfileInformation" element = {<viewUserProfile/>}/>
        <Route path = "/editProfileInformation" element = {<editUserProfile/>}/>
        <Route path = "/viewTripAgencies" element = {<viewTripAgencies/>}/>
        <Route path = "/viewHotels" element = {<viewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<viewRestaurants/>}/>
        <Route path = "/viewForums" element = {<viewForums/>}/>
        <Route path = "/addForum" element = {<addMyForum/>}/>
        <Route path = "/deleteForum" element = {<deleteMyForum/>}/>
      </Route>
      <Route path = "/tripAgency" element =  {<TripAgencyPage/>}>
        <Route path = "/viewProfileInformation" element = {<viewTripAgencyProfile/>}/>
        <Route path = "/editProfileInformation" element = {<editTripAgencyProfile/>}/>
        <Route path = "/viewForums" element = {<viewForums/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/superAdmin/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/restaurant" element =  {<RestaurantPage/>}>
        <Route path = "/viewProfileInformation" element = {<viewRestaurantProfile/>}/>
        <Route path = "/editProfileInformation" element = {<editRestaurantProfile/>}/>
        <Route path = "/viewForums" element = {<viewForums/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/hotel" element =  {<HotelPage/>}>
        <Route path = "/viewProfileInformation" element = {<viewHotelProfile/>}/>
        <Route path = "/editProfileInformation" element = {<editHotelProfile/>}/>
        <Route path = "/viewForums" element = {<viewForums/>}/>
        <Route path = "/viewUsers" element = {<ViewUsers/>}/>
        <Route path = "/viewHotels" element = {<ViewHotels/>}/>
        <Route path = "/viewRestaurants" element = {<ViewRestaurants/>}/>
        <Route path = "/viewTripAgencies" element = {<ViewTripAgencies/>}/>
      </Route>
      <Route path = "/contentWriter" element = {<ContentWriterPage/>}>
        <Route path = "/viewProfileInformation" element = {<viewContentWriterProfile/>}/>
        <Route path = "/editProfileInformation" element = {<editContentWriterProfile/>}/>
        <Route path = "/viewForums" element = {<viewForums/>}/>
        <Route path = "/viewMyArticles" element = {<viewMyArticles/>}/>
        <Route path = "/addArticle" element = {<addMyArticle/>}/>
        <Route path = "/deleteArticle" element = {<deleteMyArticle/>}/>
      </Route>
    </Router>
    </BrowserRouter>
  );
};

>>>>>>> b10bc6b536a05461549c54a1eca5e570a112472c
export default App;
