const express=require('express')
const adminRouter=express.Router
adminRouter.get("/", getAdmins)
adminRouter.get('/:id', getAdminById)
adminRouter.post('/', createAdmin)
adminRouter.patch('/:id', updateAdmin)
adminRouter.delete('/:id', deleteAdmin)
module.exports=adminRouter