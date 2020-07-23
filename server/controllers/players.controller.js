const Player = require("../models/players.models");

module.exports = {
    create(req, res) {
        Player.create(req.body)
            .then((player) => {
                res.json(player);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getAll(req, res) {
        Player.find()
            .then((players) => {
                res.json(players);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOne(req, res) {
        Player.findById(req.params._id)
            .then((player) => {
                res.json(player);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    update(req, res) {
        Player.findByIdAndUpdate(req.params._id, req.body, {
            runValidators: true,
            new: true,
        })
            .then((player) => {
                res.json(player);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        Player.findByIdAndDelete(req.params._id)
            .then((player) => {
                res.json(player);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};