const playerController = require("../controllers/players.controller");

module.exports = (app) => {
    app.post('/api/players', playerController.create);
    app.get('/api/players', playerController.getAll);
    app.get('/api/players/:_id', playerController.getOne);
    app.put('/api/players/:_id', playerController.update);
    app.delete('/api/players/:_id', playerController.delete);
};