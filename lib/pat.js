var path = require('path');

module.exports=function(app,exp){
app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../vie'));
    app.use(exp.static(path.join(__dirname, '../pub')));
}

