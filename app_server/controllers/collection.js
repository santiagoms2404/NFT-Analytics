/* GET collection page. */
module.exports.index = function(req,res){
    res.render('collection', { title: 'Collection' });
}