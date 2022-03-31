const mongoose = require('mongoose');

const connStr = 'mongodb+srv://quy1807:quynguyen@1807@cluster0.knclv.mongodb.net/myAppDB?retryWrites=true&w=majority'

mongoose.set('debug', true);
mongoose
    .connect(connStr,{
    useUnifiedtopology: true,
    useNewUrlParser: true,
    // reconnectTrles: Number.MAX_VALUE,
    // autoReconnect: true
    })
    .then(() => {
        console.log('Connected to the database')
    })
    .catch(err => {
        console.log('Cannot connect to the database', err)
        process.exit()
    })