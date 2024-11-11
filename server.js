
// tjib express mel dossier node module
const express=require("express")
// bsh to93odsh tekteb kol mara fy express()
const app =express();
// el port eli bsh trani alyh
const PORT =6300



// lista zama zama base mte3i

let users= [
    {
        name:"hamza",
        age:20,
        id:1
    },
    {
        name:"bayrem",
        age:26,
        id:2
    }
    ]

// function bsh taffichier haja



app.get('/bayrem',(req,res)=>{
    res.send("hello bayrem")
})



app.get('/affichagebase',(req,res)=>{
    res.send(users)
})







// hedhy fonction mta3 serveur


app.listen(PORT,(err)=> {
    err ? console.log(err):
    console.log("server yemshy")
})
