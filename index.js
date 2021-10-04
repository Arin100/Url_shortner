const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})
app.set("views", __dirname + "/views");
// app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));