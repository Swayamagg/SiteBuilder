import express from "express"
import { authUser, logOut } from "../controllers/user.controller.js";
const authRoute=express.Router();

authRoute.post("/google",authUser);
authRoute.get("/logout",logOut);

export default authRoute;
