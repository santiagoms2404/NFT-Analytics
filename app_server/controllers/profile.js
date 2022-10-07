/* GET profile page. */
module.exports.index = function(req,res){
    res.render('profile', { title: 'Profile' });
}
