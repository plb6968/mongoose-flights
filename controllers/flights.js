const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({ flight:flight._id }, (err, tickets) => {
            res.render('flights/show', { flight, tickets });
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'ADD  A FLIGHT'
    });
}
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}


function create(req, res) {
    console.log('CREATE TRIGGERED');
    const flight = new Flight(req.body);
    flight.save(function(err) {
        console.log(flight)
        res.redirect('/flights')
    })
}