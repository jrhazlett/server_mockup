//
// Libraries - downloaded
//
// Libraries - custom
//
import helperApp from "./helpersApp/helperApp.js";
import HelperServerExpress from "./helpersServers/helperServerExpress.js";
import helperServerExpressAddCommands from "./helperServerExpressAddCommands.js";

const main = async () => {
    helperApp.printAppStart()

    const helperServerExpress = new HelperServerExpress()
    helperServerExpressAddCommands.addCommandsToServerExpress( helperServerExpress )
    helperServerExpress.runServer()












}
main().then( () => {
    helperApp.exitApp( {
        argBoolPrintScriptComplete: false,
        argBoolRunExit: false,
    } )
} )























































