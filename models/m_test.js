const {router,validation, status_500} = require('../app/main')
const  PG= require('../app/connection').PG()
const  MY= require('../app/connection').MY()

router.get('/test', validation, async (req, res) =>{
    let [rows] = await MY.query(`select * from config`)
    // let {rows} = await PG.query(`select * from production.users`)
    res.json(rows)
})



module.exports = router