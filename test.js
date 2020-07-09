let jsforce = require("jsforce")
let config = require('./config')
let createPicklist = require('./index')
let run = async () => {
    let connection = new jsforce.Connection({
        loginUrl: config.salesForceCredentials.loginUrl
    })
    await connection.login(config.salesForceCredentials.userName, config.salesForceCredentials.password + config.salesForceCredentials.token)

    await createPicklist(config.salesForceCredentials, config.testParameters.customObjectName, config.testParameters.picklistFieldName, config.testParameters.picklistValues)

    let description = await connection.describe(config.testParameters.customObjectName)
    let field /**Field Object */ = description.fields.filter((field) => field.name === config.testParameters.picklistFieldName)[0]

    if (!field) {
        throw new Error('The picklist field which was created should be in the fields list!!!')
    }

    if (!field.picklistValues) {
        throw new Error('The picklist field should contain picklist values!!!')
    }


    if (!(field.picklistValues.length === config.testParameters.picklistValues.length)) {
        throw new Error('The picklist values length should be the same as test values length')
    }

    console.log("Congratulations! You did it!")
    console.log(field.picklistValues);

    return
}

run()