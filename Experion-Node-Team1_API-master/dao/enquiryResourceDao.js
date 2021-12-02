const resourceEnquiry =  require('../models/enquiryResource');

var resourcEnquiryDao =
{
    findAll:findAll,
    create:create,
    findById:findById,
    findByDate:findByDate,
    deleteById:deleteById,
    updateResourceEnquiry:updateResourceEnquiry
}
 function findAll(){
     return resourceEnquiry.findAll();
 }

 function findById(rEnquiryId){
     return resourceEnquiry.findByPk(rEnquiryId);
 }


 function findByDate(rEnquiryDate){
    return resourceEnquiry.findOne({where:{rEnquiryDate:rEnquiryDate}});
}


 function deleteById(rEnquiryId){
     return resourceEnquiry.destroy({where:{rEnquiryId:rEnquiryId}});
 }

 function create(rEnquiry){
     var newEnquiry = new resourceEnquiry(rEnquiry);
    
     return newEnquiry.save();
     
 }

 function updateResourceEnquiry(rEnquiry,rEnquiryId){
     var updateEnquiry={
        rEnquiryId:rEnquiry.rEnquiryId,
        resourceName:rEnquiry.resourceName,
        rEnquiryDate:rEnquiry.rEnquiryDate,
        rStatus:rEnquiry.rStatus       
     };
     return resourceEnquiry.update(updateEnquiry,{where:{rEnquiryId:rEnquiryId}});
 }
 module.exports=resourcEnquiryDao;