/* GET about page. */
module.exports.index = function(req,res){
    res.render('about', { title: 'About NFT Mountain' });
}
