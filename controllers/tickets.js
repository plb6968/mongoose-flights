const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket
}

function create(req, res) {
    req.body.flight = req.params.id
    const ticket = new Ticket;
    ticket.save(function(err) {
        console.log(ticket);
        res.redirect('flight/${req.params.id}');
    });
}

function newTicket(req, res) {
    let flight = req.params.id;
    res.render('tickets/new', { flight });
}