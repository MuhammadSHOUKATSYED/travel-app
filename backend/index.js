const express = require('express');
const app = express();
const connectdb = require('./config_db');
require("dotenv").config();
const MONGODB_URI = "mongodb+srv://i202303:Password1234@cluster0.hl8yuqy.mongodb.net/travel-app";
connectdb(MONGODB_URI);

const adminRouter = require('./routes/version01/adminRoutes/adminEndPoints');
const articleRouter = require('./routes/version01/articleRoutes/articleEndpoints');
const commentRouter = require('./routes/version01/articleRoutes/commentEndpoints');
const contentWriterRouter = require('./routes/version01/contentWriterRoutes/contentWriterEndpoints');
const forumRouter = require('./routes/version01/forumRoutes/forumEndpoints');
const hotelRouter = require('./routes/version01/hotelRoutes/hotelEndPoints');
const restaurantRouter = require('./routes/version01/restaurantRoutes/restaurantEndPoints');
const superAdminRouter = require('./routes/version01/superAdminRoutes/superAdminEndpoints');
const tripagencyRouter = require('./routes/version01/tripAgencyRoutes/tripAgencyEndpoints');
const userRouter = require('./routes/version01/userRoutes/userEndpoints');


app.use('/admins', adminRouter);
app.use('/articles', articleRouter);
app.use('/comments', commentRouter);
app.use('/contentWriters', contentWriterRouter);
app.use('/forums', forumRouter);
app.use('/hotels', hotelRouter);
app.use('/restaurants', restaurantRouter);
app.use('/superAdmin', superAdminRouter);
app.use('/tripAgencies', tripagencyRouter);
app.use('/users', userRouter);


app.listen(3001, (req,res)=>{
    console.log('server running on the port 3001');
});