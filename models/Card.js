import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trin: true},
        link: { type: String, required: true, trin: true},
        description: { type: String, required: true, },
        like: { type: Boolean, default: false},
    },
    {
        timestamps: true,
    }
);

export const Card = mongoose.model("Card", cardSchema);