var i18n = require('i18n-express');
var path = require('path');
var nat=["mail","shop","gis","iusr","imer","item"]

var i18=function(app){
for(let i=0;i<nat.length;i++){
    app.use(  i18n({    translationsPath: path.join(__dirname, '../i18n/'+nat[i]),
    siteLangs: ['en', 'ja'],    textsVarName: nat[i]  })
);
}
}//app

module.exports=i18
