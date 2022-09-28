/* GET profile page. */
module.exports.index = function(req,res){
    res.render('index', { title: 'Your profile' });
}
