const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const {v4: uuidv4} = require('uuid');

app.listen(port,()=>{
    console.log('listen on port 8080');
})
const method = require('method-override');
app.use(express.static(path.join(__dirname,'public')));
app.use(method('_method'));
app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
let data = [
    {
        user:"IbrahimAli",
        id:uuidv4(),
        follower:150000,
        following:120,
        backgroundImg:"https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        posts:[
            {
                img:"https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                like:12000,
                Comment:100,
                caption:"Live life like that"
            }
        ]
    },
    {
        user:"eddy_078",
        id:uuidv4(),
        follower:15000,
        following:10,
        backgroundImg:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        posts:[
            {
                img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                like:15000,
                Comment:90,
                caption:"this is mine"
            }
        ]
    },
    {
        user:"ismailAli",
        id:uuidv4(),
        follower:15000,
        following:10,
        backgroundImg:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        posts:[
            {
                img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                like:15000,
                Comment:90,
                caption:"this is mine"
            }
        ]
    },
    {
        user:"HasanAli",
        id:uuidv4(),
        follower:15000,
        following:10,
        backgroundImg:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        posts:[
            {
                img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                like:15000,
                Comment:90,
                caption:"this is mine"
            }
        ]
    },
    {
        user:"mohammed",
        id:uuidv4(),
        follower:15000,
        following:10,
        backgroundImg:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        posts:[
            {
                img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                like:15000,
                Comment:90,
                caption:"this is mine"
            }
        ]
    },
    {
        user:"Radhika",
        id:uuidv4(),
        follower:15000,
        following:10,
        backgroundImg:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        posts:[
            {
                img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                like:15000,
                Comment:90,
                caption:"this is mine"
            }
        ]
    },
    {
        user:"simran_07",
        id:uuidv4(),
        follower:15000,
        following:10,
        backgroundImg:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        posts:[
            {
                img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                like:15000,
                Comment:90,
                caption:"this is mine"
            }
        ]
    },
    {
        user:"dimple_qu..",
        id:uuidv4(),
        follower:15000,
        following:10,
        backgroundImg:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        posts:[
            {
                img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                like:15000,
                Comment:90,
                caption:"this is mine"
            }
        ]
    },
];
app.get("/home",(req,res)=>{
    res.render('insta-index.ejs',{data});
});
app.get("/home/:id",(req,res)=>{
   let {id} = req.params;
   for(let i=0;i<data.length;i++)
    {
        if(id==data[i].id)
        {
            res.render("show.ejs",{datas:data[i]});
        }
    }
});
app.get('/home/posts/help',(req,res)=>{
    res.send('thankyou');
})