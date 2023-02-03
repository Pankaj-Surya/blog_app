import {db} from "../db.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//console.log(db)

export const register = (req,res)=>{
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email=? or username =?"
    db.query(q,[req.body.email,req.body.username],(err,data)=>{
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists!");
        
        return res.json({data : req.body })
    })
    //Hash the password and create a user

}

export const login = (req,res)=>{
    console.log("login")
}

export const logout = (req,res)=>{
  console.log("logout")    
}

