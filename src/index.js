//
// Libraries - custom
//
import helperApp from "./helpersApp/helperApp.js";
import HelperServerExpress from "./helpersServers/helperServerExpress.js";
import HelperServerExpressAddCommands from "./helperServerExpressAddCommands.js";
//
// Main
//
const main = async () => {
    helperApp.printAppStart();

    const helperServerExpressAddCommands = new HelperServerExpressAddCommands();

    const helperServerExpress = new HelperServerExpress();
    helperServerExpressAddCommands.addCommandsToServerExpress(
        helperServerExpress
    );

    helperServerExpress.runServer();
};
main().then(() => {
    helperApp.exitApp({
        argBoolPrintScriptComplete: false,
        argBoolRunExit: false,
    });
});
