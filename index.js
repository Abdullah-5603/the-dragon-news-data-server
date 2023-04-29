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
});

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const selectedNews = news.find(newsId => newsId._id === id)
    res.send(selectedNews)
});

app.get('/categories/:id', (req, res) =>{
    const id = req.params.id;
    if(id === '0'){
        res.send(news)
    } else{

        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }
})

app.listen(port, ()=>{

})