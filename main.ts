import express from "express";

const app=()=> {
    const app = express();
    const port = 3200;
    app.use(express.json());

    app.listen(port, ()=>{
        console.log(`Server is running at http://localhost:${port}`);
    })

}

app();