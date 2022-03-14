import express from "express";
import dotenv from "dotenv"; //Dot ENV para leer variable de entorno
import cors from "cors"
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js"
import pacienteRoutes from "./routes/pacienteRoutes.js"

const app = express();

app.use(express.json());

dotenv.config();

conectarDB(); //Funcion conectarDB

const dominiosPermitidos = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function(origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1) {
            // El origen del request esta permitido
            callback(null, true)
        } else {
            callback( new Error('No permitido por CORS') )
        }
    }
}

app.use(cors(corsOptions));

app.use('/api/veterinarios' ,veterinarioRoutes);
app.use('/api/pacientes' ,pacienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor Funcionando en el Puerto ${PORT}`);
});