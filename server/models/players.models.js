const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is a required field"],
            minlength: [2, "{PATH} must be {MINLENGTH} long"],
        },
        position: {
            type: String,
        },
        game_1_status: {
            type: String,
            default: "undecided",
            required: [true, "{PATH} is a required field"],
        },
        game_2_status: {
            type: String,
            default: "undecided",
            required: [true, "{PATH} is a required field"],
        },
        game_3_status: {
            type: String,
            default: "undecided",
            required: [true, "{PATH} is a required field"],
        },
    },
    { timestamps: true }
);

const Player = mongoose.model("player", PlayerSchema);

module.exports = Player;