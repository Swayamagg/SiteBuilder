import express from 'express';
import isAuth from '../middlewares/isAuth.js';
import { genrateWebsite, getWebsiteById } from '../controllers/website.controller.js';

const websiteRouter=express.Router();

websiteRouter.post("/generate",isAuth,genrateWebsite);
websiteRouter.get("/get-by-id/:id",isAuth,getWebsiteById);

export default websiteRouter;