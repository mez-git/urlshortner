import express from "express"
import { urlModel } from "../model/shortUrl"
import { triggerAsyncId } from "async_hooks";

export const createUrl=async(
    req:express.Request,
    res:express.Response
) =>{
try {
    const {fullUrl}=req.body;
    const urlFound=await urlModel.find({fullUrl}) ;
    if(urlFound.length>0){
        res.status(409);
        res.send(urlFound)

    }else{
        const shortUrl=await urlModel.create({fullUrl});
        res.status(201).send(shortUrl)
    }
} catch (error) {
    res.status(500).send({message:"something went wrong"})
}
}

export const getAllUrl = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const shortUrls = await urlModel.find().sort({createdAt:-1});
      if (shortUrls.length === 0) {
        // If no short URLs found, send a 404 Not Found
        res.status(404).send({ message: "Short URLs not found" });
      } else {
        // If URLs are found, send them with a 200 OK status
        res.status(200).send(shortUrls);
      }
    } catch (error) {
      // If there's an error in the request, send a 500 Internal Server Error
      res.status(500).send({ message: "Something went wrong" });
    }
  };

export const getUrl=async(
    req:express.Request,
    res:express.Response
) =>{
    try {
        const shortUrl=await urlModel.findOne({shortUrl:req.params.id})
        if(!shortUrl){
            res.status(404).send({"message":"full Url not found"})

        }else{
            shortUrl.clicks++
            shortUrl.save()
            res.redirect(`${shortUrl.fullUrl}`)
        }
    } catch (error) {
        res.status(500).send({message:"something went wrong"})
    }
    
}

export const deleteUrl=async(
    req:express.Request,
    res:express.Response
) =>{
    try {
        const shortUrl=await urlModel.findByIdAndDelete({_id:req.params.id})
        if(shortUrl){
            res.status(200).send({message:"requested url sucessfully deleted"})

        }
    } catch (error) {
        res.status(500).send({message:"something went wrong"})
    }
}





















