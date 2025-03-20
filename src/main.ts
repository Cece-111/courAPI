import express from "express";
import { initHandlers } from "./handlers/handlers";

const app=()=> {
    const app = express();
    const port = 3200;
    app.use(express.json());
    initHandlers(app);

    app.listen(port, ()=>{
        console.log(`Server is running at http://localhost:${port}`);
    })

}

app();