const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket
}

function create(req, res) {
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body);
    console.log(req.body);
    ticket.save(function(err) {
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
    let flight = req.params.id;
    res.render('tickets/new', { flight });
}