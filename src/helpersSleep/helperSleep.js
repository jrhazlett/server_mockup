//
// Public
//
export default class helperSleep {
    //
    // Public - sleep
    //
    static sleepForSeconds = ( argIntSeconds ) => new Promise( ( resolve ) => setTimeout( resolve, helperSleep._getSecondsFromInt( argIntSeconds ), ) )

    static _getSecondsFromInt = ( argIntSeconds ) => argIntSeconds * 1000
}




















































