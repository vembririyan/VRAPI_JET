const {router,DB,validation, status_500} = require('../app/main')
const TUTELA = require('../app/connection').TUTELA()

router.get('/user', validation, (req, res) =>{
    DB.query(`select "path","from","to" from nasional.bandwidth_uplink_bw where created_by='vembri'`, (err, result) => {
        err ? res.json(status_500) : res.json(result.rows)
    })
})

router.get('/city_benchmark', validation, (req, res) =>{
    TUTELA.query(`SELECT kabupaten,remark_telkomsel,remark_competitor, max(delta_tsel_competitor_cw) delta_tsel_competitor_cw from report.weekly_report_detail_city where yearweek='202448' AND kpi='latency' GROUP BY kabupaten,remark_telkomsel, remark_competitor`, (err, result) => {
        console.log(err)
        err ? res.json(status_500) : res.json(result.rows)
    })
})



module.exports = router