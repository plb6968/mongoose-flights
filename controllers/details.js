const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req, res) {
    Flight.find(req.params.id, function(err, flight) {
        console.log(flight);
        flight.details.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${movie._id}`);
        })
    })
}