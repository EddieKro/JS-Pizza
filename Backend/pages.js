exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Піца цілодобово'
    });
};

exports.orderPage = function(req, res) {
    res.render('orderPage', {
        pageTitle: 'Замовлення',
    });
};