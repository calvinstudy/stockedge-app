exports.getBarang = (req, res, next) => {
    let isAdmin = false;
    if(req.admin) {
        isAdmin = true;
    }
    res.render('admin/barang', {
        isAdmin : isAdmin,
    });
}