const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/mean_stack')
.then((value) => console.info('Connected to db successfully')).catch(e => console.warn('Error caught: ',e));