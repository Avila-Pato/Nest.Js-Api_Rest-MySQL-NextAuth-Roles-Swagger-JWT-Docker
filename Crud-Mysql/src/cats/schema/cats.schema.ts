
// Craendo un modelo esquema de datos para la base de datos
// se implementara  en el en los controladores y servicios
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true,
})
export class CastTaks {
    @Prop({
        required: true,
        type: String,
        unique: true,
    })
    title: string;

    @Prop({
        required: true,
        type: String,
        trim: true, //Elimina los espacios en blanco
    })
    description: string;

    @Prop({
        required: true,
        type: Boolean,
        default: false,
    })
    done: boolean;
}
export const CatsSchema = SchemaFactory.createForClass(CastTaks);  