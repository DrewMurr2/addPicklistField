let jsforce = require("jsforce")
let config = require('./config')
let run = async () => {
    // let connection = new jsforce.Connection({
    //     loginUrl: config.salesForceCredentials.loginUrl
    // })
    // await connection.login(config.salesForceCredentials.userName, config.salesForceCredentials.password + config.salesForceCredentials.token)

    // let os = await connection.metadata.list([{
    //     type: 'CustomObject',
    //     folder: null
    // }], '48.0')
    console.log(config)
    // console.log(os)
    // return
}

run()