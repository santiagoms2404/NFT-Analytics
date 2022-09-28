/* GET about page. */
module.exports.index = function(req,res){
    res.render('index', { title: 'About NFT Mountain' });
}
