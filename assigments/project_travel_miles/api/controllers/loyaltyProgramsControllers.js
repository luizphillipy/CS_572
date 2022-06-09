require("../data/travellers-model");
const { response } = require("express");
const mongoose = require("mongoose");

const Traveller = mongoose.model(process.env.TRAVELLER_MODEL);

const _sendResponse = function(res,response){
    res.status(response.status).json(response.message);
}

const getAll = function(req, res){
    console.log("GET all loyaltyProgram Controller Requested");
    const travellerId = req.params.travellerId;

    Traveller.findById(travellerId).select("loyaltyPrograms").exec(function(err,traveller){
        if(err){
            console.log("No loyalty Programs found",err);
            res.status(404).send("Error: ",err);
        }
        console.log("Found LoyaltyPrograms: ",traveller.loyaltyPrograms.length);
        res.status(200).json(traveller.loyaltyPrograms);


    });

}
const getOne = function(req,res){
    console.log("GET one loyaltyProgram Controller Requested");
    const travellerId = req.params.travellerId;
    const loyaltyprogramId = req.params.loyaltyProgramId;
    Traveller.findById(travellerId).select("loyaltyPrograms").exec(function(err,traveller){
        console.log(traveller.loyaltyPrograms.id(loyaltyprogramId));
        const response = {status:200, message:traveller.loyaltyPrograms.id(loyaltyprogramId)}
        if(err){
            console.log("LoyaltyProgramId not found", err);
            response.status = 500;
            response.message = {message:"Internal server error."};
        }
        // console.log("Found loyaltyProgram: ",traveller.loyaltyPrograms.id(loyaltyprogramId),"for traveller: ",traveller);
        res.status(response.status).json(response.message);
    })
}

const addOne = function(req,res){
   
    console.log("Add Loyalty Program Controller");
    const travellerId=req.params.travellerId;
    Traveller.findById(travellerId).select("loyaltyPrograms").exec(function(err,traveller){
        // console.log("Found Traveller: ",traveller);
        const response = {status:200,message: traveller};
        if(err){
            console.log("Error finding traveller",err);
            response.status = 500;
            response.message = {message:"Internal server error."};
        }else if(!traveller){
            console.log("Error finding traveller");
            response.status=404;
            response.message={"message": "TravellerId not found "+travellerId};
        }
        if(traveller){
            // console.log();
            _addLoyaltyProgram(req,res, traveller);
        }else{
            res.status(response.status).json(response.message);
        }
    })

}
// const newLoyaltyProgram = {
//     name:req.body.loyaltyProgramName,
//     memberId:req.body.memberId,
//     milesAmount:req.body.milesAmount
// }
const _addLoyaltyProgram = function(req,res,traveller){
    const newLoyaltyProgram = {
        name: req.body.loyaltyProgramName,
        memberId: req.body.memberId,
        milesAmount: req.body.milesAmount
    };
    traveller.loyaltyPrograms = [...traveller.loyaltyPrograms, newLoyaltyProgram];

    traveller.save(function(err,updatedTraveller){
        const response = {status:200, message:[]};
        if(err){
            response.status=500;
            response.message=err;
        }else{
            response.status=201;
            response.message=updatedTraveller.loyaltyPrograms;
        }
        res.status(response.status).json(response.message);
    });
}


const deleteOne = function(req, res){
    console.log("Delete Loyalty Program Controller");
    const travellerId=req.params.travellerId;
    Traveller.findById(travellerId).select("loyaltyPrograms").exec(function(err,traveller){
        // console.log("Found Traveller: ",traveller);
        const response = {status:200,message: traveller};
        if(err){
            console.log("Error finding traveller",err);
            response.status = 500;
            response.message = {message:"Internal server error."};
        }else if(!traveller){
            console.log("Error finding traveller");
            response.status=404;
            response.message={"message": "TravellerId not found "+travellerId};
        }
        if(traveller){
            // console.log();
            _deleteLoyaltyProgram(req,res, traveller);
        }else{
            res.status(response.status).json(response.message);
        }
    });
};
const _deleteLoyaltyProgram = function(req,res,traveller){
    const loyaltyprogram=req.params.loyaltyProgramId;
    console.log(loyaltyprogram);
    traveller.loyaltyPrograms.id(loyaltyprogram).remove();
    traveller.save(function(err,updatedTraveller){
        const response = {status: 201, message:"Loyalty Program Deleted"}
        if(err){
            response.status = 500;
            response.message = {message : "Internal server error."}
        }
        res.status(response.status).json(response.message);
    });
}
  const updateFull = function(req,res){
      console.log("LoyaltProgram Update Full Controller Requested");
      loyaltyprogramUpdate = function(req,res,traveler,loyaltyProgramId,response){
          console.log("in the callback function");
          console.log(loyaltyProgramId);
          traveler.loyaltyPrograms.id(loyaltyProgramId).name=req.body.loyaltyProgramName;
          traveler.loyaltyPrograms.id(loyaltyProgramId).memberId = req.body.memberId;
          traveler.loyaltyPrograms.id(loyaltyProgramId).milesAmount = req.body.milesAmount;
          console.log(traveler.loyaltyPrograms.id(loyaltyProgramId));
          traveler.save().then(updatedLoyaltyprogram =>{
              console.log("LoyaltProgram Sucessfully updated");
              response.status=process.env.UPDATE_SUCESS_STATUS_CODE;
              response.message=updatedLoyaltyprogram;
          }).catch(err=>{
              console.log("Error updating loyaltyProgram: ",err);
              response.status=process.env.UPDATE_ERROR_CODE;
              response.message=err;
          })
          .finally(()=>{
            _sendResponse(res,response);
          });
          
      }
_updateOne(req,res,loyaltyprogramUpdate);

    


  }
     

const _updateOne =function(req,res,updatedLoyaltyprogramCallback){
    
    console.log("_updateOne controller Requested");
    response.status=process.env.UPDATE_SUCESS_STATUS_CODE;
    response.message={};
    let loyaltyProgramToBeUpdated={};
    const travelerId = req.params.travellerId;
    const loyaltyProgramId =req.params.loyaltyProgramId;
    if(!mongoose.isValidObjectId(travelerId)){
        console.log("Invalid TravelerId");
        response.status=process.env.USER_ERROR_CODE;
        response.message={"travellerId not found:":travelerId};
    }else{
        console.log("valid traveler ID");
        Traveller.findById(travelerId).exec().then(traveler=>{
            console.log("Loyalty Program found: ",traveler.loyaltyPrograms.id(loyaltyProgramId));
            response.message=traveler;
            loyaltyProgramToBeUpdated = traveler;

            console.log("inside promise: ",loyaltyProgramToBeUpdated);

        }).catch(err=>{
            console.log("Loyalty Program was not found: ",err);
            response.status=process.env.UPDATE_ERROR_CODE;
            response.message=err;
        })
        .finally(()=>{
            if(response.status!=process.env.UPDATE_SUCESS_STATUS_CODE){
                console.log("Error found");
                _sendResponse(res,response);
            }else{
                console.log("calling callbackfunction");
                console.log(loyaltyProgramId);
                console.log(loyaltyProgramToBeUpdated);
                updatedLoyaltyprogramCallback(req,res,loyaltyProgramToBeUpdated,loyaltyProgramId, response);
            };
        });
        console.log("after promise: ",loyaltyProgramToBeUpdated);

    } 


    
}

module.exports={ getAll,addOne,getOne, deleteOne, updateFull};