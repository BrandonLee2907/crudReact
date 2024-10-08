import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'test_vite_react'
});

app.get('/', (req,res) => {
    const sql = " SELECT * FROM estudiantes";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error de server"});
        return res.json(result);
    });
})

app.post('/estudiante', (req,res) => {
    const sql = " INSERT INTO estudiantes ( `nombre`, `correo` ) values (?) "

    const values = [
        req.body.nombre,
        req.body.correo
    ]
    db.query(sql, [values], (err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get('/ver/:id', (req,res) => {
    const sql = " SELECT * FROM estudiantes WHERE ID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result) => {
        if(err) return res.json({Message: "Error de server"});
        return res.json(result);
    });
})

app.put('/editar/:id', (req,res) => {
    const sql = 'UPDATE estudiante SET `nombre`=?, `correo`=? WHERE id=? ';
    const id = req.params.id;
    db.query(sql, [req.body.nombre, req.body.correo, id], (err, result) => {
        if(err) return res.json({Message: "Error de server"});
        return res.json(result);
    })
})

app.delete('/eliminar/:id', (req,res) => {
    const sql = "DELETE FROM estudiante WHERE id=?";
    const id = req.params.id;
    db.query(sql,[id], (err,result) => {
        if(err) return res.json({ Message: "Error de server"});
        return res.json(result);
    })

})


app.listen(8082, ()=> {
    console.log("Hola");
});


