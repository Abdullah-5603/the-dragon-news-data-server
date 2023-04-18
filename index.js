const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const categories = require('./Data/Categories.json');
const news = require('./Data/News.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('')
});

app.get('/categories', (req, res) =>{
    res.send(categories)
});

app.get('/news', (req, res)=>{
    res.send(news)
})

app.listen(port, ()=>{

})