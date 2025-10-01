const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

// Example CRUD resource (in-memory)
let resources = [
    { id: 1, name: 'Resource 1' },
    { id: 2, name: 'Resource 2' }
];

// Get all resources (protected)
router.get('/', authenticateToken, (req, res) => {
    res.json(resources);
});

// Create resource (protected, admin only)
router.post('/',
    authenticateToken,
    authorizeRoles('admin'),
    body('name').isString().notEmpty(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name } = req.body;
        const newResource = { id: resources.length + 1, name };
        resources.push(newResource);
        res.status(201).json(newResource);
    }
);

// Update resource (protected, admin only)
router.put('/:id',
    authenticateToken,
    authorizeRoles('admin'),
    body('name').isString().notEmpty(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const resource = resources.find(r => r.id === parseInt(req.params.id));
        if (!resource) return res.status(404).json({ error: 'Resource not found' });
        resource.name = req.body.name;
        res.json(resource);
    }
);

// Delete resource (protected, admin only)
router.delete('/:id',
    authenticateToken,
    authorizeRoles('admin'),
    (req, res) => {
        const index = resources.findIndex(r => r.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ error: 'Resource not found' });
        resources.splice(index, 1);
        res.status(204).send();
    }
);

module.exports = router;