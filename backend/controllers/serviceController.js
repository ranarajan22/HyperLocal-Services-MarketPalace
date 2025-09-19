const Service = require('../models/Service');

exports.createService = async (req, res) => {
    const { name, description, price } = req.body;
    const service = new Service({ name, description, price, provider: req.user.id });
    await service.save();
    res.status(201).json(service);
};

exports.getServices = async (req, res) => {
    const services = await Service.find();
    res.json(services);
};
