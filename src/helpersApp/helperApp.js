//
// Public
//
export default class helperApp {
    //
    // Public - append
    //
    /**
     * @param {Function} argCallback
     * */
    static appendCallbackToArrayToRunOnExit = ( argCallback ) => process.on( "exit", argCallback, )
    //
    // Public - exit
    //
    /**
     * Call this at the end of the app to make sure it closes
     * */
    static exitApp = ( { argBoolPrintScriptComplete = true, argBoolRunExit = true } ) => {
        if ( argBoolPrintScriptComplete ) { console.log( "SCRIPT COMPLETE" ) }
        if ( argBoolRunExit ) { process.exit( 0 ) }
    }
    //
    // Public - print
    //
    /***/
    static printAppStart = () => console.log( "STARTING APP...\n" )
}
















































