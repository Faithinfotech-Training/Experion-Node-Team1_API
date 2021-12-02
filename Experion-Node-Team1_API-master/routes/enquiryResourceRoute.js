const express = require('express');
const router = express.Router();
const resEnquiryController=require('../controller/enquiry.ResourceController');

//Enquiry Routing
router.post('/',resEnquiryController.addResourceEnquiry);
router.get('/',resEnquiryController.findResourceEnquiries);
router.get('/:rEnquiryId',resEnquiryController.findResEnquiryById);

//router.get('/:EnquiryDate',resEnquiryController.findResEnquiryByDate);
router.put('/:rEnquiryId',resEnquiryController.updateResEnquiry);
router.delete('/:rEnquiryId',resEnquiryController.deleteById);
module.exports = router;