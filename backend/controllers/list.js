const { default: Category } = require("../../src/components/Category");

exports.getList = (req, res, next) => {
    console.log("req");
}

exports.postCategory = (req, res, next) => {
    const categoryName = req.body.categoryName;
    const category = new Category(cate);
}