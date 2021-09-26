const Joi = require('joi');
const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();

const schema = Joi.object({
    email: Joi.string()
        .pattern(/^(?!.*([.])\1)([a-zA-Z0-9_\-\+]+)([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9]+)([a-zA-Z0-9_\-\.]+)\.([a-zA-Z0-9]{2,6})$/)
        .required()
        .messages({
            'string.pattern.base': 'The email is not valid',
            'any.required': 'The email field is required.'
        }),

    name: Joi.string()
        .required()
        .messages({
            'any.required': 'The name field is required.'
        }),

    message: Joi.string()
        .required()
        .messages({
            'any.required': 'The name field is required.'
        }),
});

const sendMessage = async (reqObj) => {
    const recordKey = datastore.key(['Inquiry', reqObj.name]);
    const inquiry = {
        key: recordKey,
        data: JSON.parse(reqObj),
    };
    await datastore.save(inquiry);
}

exports.submit = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        res.set('Access-Control-Allow-Methods', 'GET, POST');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    } else {
        // CF triggering will send the request body as a string empty obj
        if (JSON.stringify(req.body) === '{}') {
            res.status(400).send({message: 'Bad Request: An empty request body was sent.'});
        } else if (req.body.scraperCheck !== '') {
            res.status(200).send();
        } else {
            const body = {
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
            }
            schema.validateAsync(body).then(() => {
                try {
                    sendMessage(JSON.stringify(body)).then(() => {
                        res.status(200).send({});
                    })
                } catch (e) {
                    console.error('Received an error: ', JSON.stringify(e));
                    res.status(500).send();
                }
            }).catch((e) => {
                console.error('The request was not valid: ', JSON.stringify(e));
                res.status(400).send({message: e});
            });
        }
    }
};
