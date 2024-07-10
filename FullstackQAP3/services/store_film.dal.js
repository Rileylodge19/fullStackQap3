const dal = require('./db')

var getStoreById = function (id) {
  return new Promise(function (resolve, reject) {
    const sql =
      "SELECT * FROM top_ten_by_store_id WHERE store_id = $1 LIMIT 10";
    dal.query(sql, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

module.exports = {getStoreById}
  