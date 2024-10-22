import { Router } from "express";
import { userDao } from "../dao/user.dao.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userDao.getAll();
    return res.status(200).json({ status: "ok", users });
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    return res.status(500).json({
      error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
      detalle: `${error.message}`,
    });
  }
});

router.post("/", async(req, res) => {
    try{
        const body = req.body;
        console.log(body)
        const user = await userDao.create(body);

        return res.status(200).json({status:"ok", user});

    }catch ( error){
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})

export default router;
