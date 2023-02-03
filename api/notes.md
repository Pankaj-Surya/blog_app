
## Basic config 
1. npm init -y
2. yarn add express mysql nodemon
3. package.json 
   "type":"module",
   "scripts": {
    "start": "nodemon index.js"
    }
4. db.js --> mysql.createConnection()
5. created db in mysql with db - blog
6. created two table 1.user 2.post - fk uid
7. added records in user and post table 
8. create route auth,users,posts route


## 
1. Make index.js where all main routes will be there ex. auth,user,post -> app.use("/api/auth",authRoutes)
2. make routes folder->  
router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
3. controller -> auth.js 
   export const register = (req,res)=>{
   console.log("register")
   res.json({
    data : req.body
    })
   }