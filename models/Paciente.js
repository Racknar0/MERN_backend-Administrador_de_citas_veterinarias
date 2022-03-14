import mongoose from "mongoose";

const pacientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        req: true,
    },
    propietario: {
        type: String,
        req: true,
    },
    email: {
        type: String,
        req: true,
    },
    fecha: {
        type: Date,
        req: true,
        default: Date.now(),
    },
    sintomas: {
        type: String,
        req: true,
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario'
    }
}, {
    timestamps: true
});

const Paciente = mongoose.model('Paciente', pacientesSchema)

export default Paciente