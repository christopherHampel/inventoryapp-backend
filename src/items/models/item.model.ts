import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema() // Eine "Blaupause" für Mongose
export class Item {
    id: string; //ID kommt direkt von MongoDB

    @Prop({ required: true })
    public name: string;

    @Prop({ required: true })
    public amount: number;

    @Prop({ required: true })
    public description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);