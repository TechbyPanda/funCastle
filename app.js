const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.use(session,({
    secret: 'sdfasfaiefaoihrhgahf'
}));

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));



app.listen(3000,()=>{
    console.log('server running');
})