export default class helperApp {

    /**
     * @param {Function} argCallback
     * */
    static appendCallbackToArrayToRunOnExit = ( argCallback ) => { process.on( "exit", argCallback, ) }

    /**
     * Call this at the end of the app to make sure it closes
     * */
    static exitApp = ( { argBoolPrintScriptComplete = true, argBoolRunExit = true } ) => {
        if ( argBoolPrintScriptComplete ) { console.log( "SCRIPT COMPLETE" ) }
        if (argBoolRunExit) {process.exit( 0 )}
    }

    /***/
    static printAppStart = () => { console.log( "STARTING APP...\n" ) }
    //
    // Setup
    //
    /***/
    constructor() {}
}
















































