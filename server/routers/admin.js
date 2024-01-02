const express = require('express');
const adminRouter = express.Router();
const {approveProduct, rejectProduct, adminGetDashboard, adminGetSellers, adminApproveSeller} = require('..//controllers/adminController');

adminRouter.put('/admin/product/approve/:productId', approveProduct);
adminRouter.put('/admin/product/reject/:productId', rejectProduct);
adminRouter.get('/admin/dashboard', adminGetDashboard);
adminRouter.get('/admin/sellers', adminGetSellers);
adminRouter.put('/admin/sellers/approve/:sellerId', adminApproveSeller);
module.exports = adminRouter;
