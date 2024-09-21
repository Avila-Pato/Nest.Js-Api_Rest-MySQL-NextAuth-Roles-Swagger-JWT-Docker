import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true, // Añade createdAt y updatedAt automáticamente
})
export class BreedsTaks extends Document {
    @Prop({
        required: true,
        type: String,
        unique: true,
    })
    title: string;

    @Prop({
        required: true,
        type: String,
        trim: true, // Elimina los espacios en blanco
    })
    description: string;

    @Prop({
        required: true,
        type: Boolean,
        default: false,
    })
    done: boolean;
}

// Exporta el esquema generado por el SchemaFactory
export const BreedsSchema = SchemaFactory.createForClass(BreedsTaks);
