const express=require('express')
const cors=require('cors')
const path = require('path')

const app=express()


const {connectDB}=require('./connection')

const {brick}=require('./usermodel')
const {concrete}=require('./usermodel')
const {paint}=require('./usermodel')
const {plaster}=require('./usermodel')
const {total_wages}=require('./usermodel')
const {user_login}=require('./usermodel')

app.use(express.json())
app.use(cors())


app.use(express.static(__dirname+'/measurement_insert/assets'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})


// app.get('/Login_admin',(req,res)=>{
//     res.sendFile(__dirname+'/measurement_insert/Login_admin.html')
// })


// app.get('/Login_admin',(req,res)=>{
//     res.sendFile(__dirname+'/measurement_insert/Login_admin')
// })

app.get('/brickwork',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/brickwork.html')
})


app.get('/concretework',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/concretework.html')
})


app.get('/index_admin',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/index_admin.html')
})


app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})



app.get('/admin',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/admin.html')
})


app.get('/Login_admin',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/Login_admin.html')
})

app.get('/Login_user',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/Login_user.html')
})


app.get('/Login_user',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/Login_user.html')
})



app.get('/first',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/first.html')
})

app.get('/Paintwork',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/Paintwork.html')
})

app.get('/Plastering',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/Plastering.html')
})

app.get('/Plasteringwork',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/Plasteringwork.html')
})

app.get('/put_wages',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/put_wages.html')
})

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/register.html')
})

app.get('/wages_print',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/wages_print.html')
})

app.get('/brick_final',(req,res)=>{
    res.sendFile(__dirname+'/measurement_insert/brick_final.html')
})




app.post('/insert_paint',async(req,res)=>{
    // console.log("inserted");
    const body=req.body;
    // console.log(body)
    const data=await paint.create(body);
    res.json(data);
})   

app.post('/insert_concrete',async(req,res)=>{
    // console.log("inserted");
    const body=req.body;
    // console.log(body)
    const data=await concrete.create(body);
    res.json(data);
})  
app.post('/insert_plaster',async(req,res)=>{
    // console.log("inserted");
    const body=req.body;
    // console.log(body)
    const data=await plaster.create(body);
    res.json(data);
})  
app.post('/insert_brick',async(req,res)=>{
    //console.log("inserted");
    const body=req.body;
    console.log(req.body)
    const data=await brick.create(body);
    res.json(data);
})


app.post('/insert_wages',async(req,res)=>{
    //console.log("inserted");
    const body=req.body;
    console.log(req.body)
    const data=await total_wages.create(body);
    res.json(data);
})

app.post('/user_create',async(req,res)=>{
    console.log("hi");
    const body=req.body;
    console.log(body);
    const data=await user_login.create(body);
    res.json(data);
})


//GET
app.get('/get',async(req,res)=>{
    const data=await brick.find();
    console.log(data);   
    res.json(data);
})
app.get('/get',async(req,res)=>{
    const data=await plaster.find();
    console.log(data);   
    res.json(data);
})
app.get('/get',async(req,res)=>{
    const data=await paint.find();
    console.log(data);   
    res.json(data);
})
app.get('/get',async(req,res)=>{
    const data=await concrete.find();
    console.log(data);   
    res.json(data);
})




//GET BU ID
app.get('/get/:Name',async(req,res)=>{
  
    const name= req.params.Name;
    const data=await users.find({id:name});
    console.log(data);
   // console.log(data);
    res.json(data)
    })
    


    app.get('/print_wages/:id/:da',async(req,res)=>{
  
        const site_id= req.params.id;
        const da= req.params.da;
        console.log(da);
        const data=await total_wages.find({site_id:site_id,date:da});
        console.log(data);
       // console.log(data);
        res.json(data)
        })


app.get('/user_log/:Name/:pass',async(req,res)=>{
  
        const name= req.params.Name;
        const pass=req.params.pass;
        console.log(name,pass);
        const data=await user_login.find({username:name,password:pass})
        // const data=await user_login.find({$and: [{username:name},{password:pass}]});
        console.log(data);
       // console.log(data);
        res.json(data)
        })
        

//UPDATE
app.put('/update',async(req,res)=>{
    const name=req.body.id;
    const n_q=req.body.quantity;   
      
    const data=await users.updateMany({id:name},{$set:{quantity:n_q}})
    // console.log(d);
    // console.log(data.quantity);
    res.json(data);
})






app.delete('/delete',async(req,res)=>{
    const name=req.body.Name;
    const data=await users.deleteMany({Name:name})
    console.log(data);
    res.json(data);
})
app.get('/get_brick/:id/:da',async(req,res)=>{
  
    const site_id= req.params.id;
    const da= req.params.da;
    console.log(da);
    const data=await brick.find({site_id:site_id,date:da});
    console.log(data);
   // console.log(data);
    res.json(data)
    })

    app.get('/get_paint/:id/:da',async(req,res)=>{
  
        const site_id= req.params.id;
        const da= req.params.da;
        console.log(da);
        const data=await paint.find({site_id:site_id,date:da});
        console.log(data);
       // console.log(data);
        res.json(data)
        })


        app.get('/get_concrete/:id/:da',async(req,res)=>{
  
            const site_id= req.params.id;
            const da= req.params.da;
            console.log(da);
            const data=await concrete.find({site_id:site_id,date:da});
            console.log(data);
           // console.log(data);
            res.json(data)
            })




            app.get('/get_plaster/:id/:da',async(req,res)=>{
  
                const site_id= req.params.id;
                const da= req.params.da;
                console.log(da);
                const data=await plaster.find({site_id:site_id,date:da});
                console.log(data);
               // console.log(data);
                res.json(data)
                })

                


app.listen(3010,()=>{
    console.log("server is started at port number 3010");
connectDB()
.then((e)=>{
console.log("mongodb connected")
})
.catch((e)=>{
    console.log("mongodb error occured!!!");
})

})


