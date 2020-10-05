const router = require('express').Router();
const noteRoute = require('./noteRoute');
const htmlRoute = require('./htmlRoute');

router.use(noteRoute);
router.use(htmlRoute);

module.exports = router;