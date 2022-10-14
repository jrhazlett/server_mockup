//
// Libraries - downloaded
//
import bodyParser from "body-parser"
import cors from "cors";
import express from "express";
import path from "path";
//
// Libraries - custom
//
// Class
//
export default class HelperServerExpress {
    //
    // Public - add
    //
    /**
     * @param {string} argStringUrlSubPath
     * @param {string} argStringPathFileWebPageAbsolute
     * @returns {Error | undefined}
     * */
    addGetPairPathUrlSubAndPathFileWebPage = ( argStringUrlSubPath, argStringPathFileWebPageAbsolute ) => {
        //
        // Return error if defined
        //
        const err = this.getErrorIfPathIsNotAbsolute( argStringPathFileWebPageAbsolute )
        if ( err ) { return err }

        this.fieldServer.get(
            argStringUrlSubPath,
            ( req, res ) => { return res.sendFile( argStringPathFileWebPageAbsolute ) },
        )
        //
        // Return undefined if no error
        //
        return undefined
    }

    /**
     * Reminder: The callback must take ( req, res ) as arguments.
     *
     * @param {string} argStringUrlSubPath
     * @param {Function} argCallback
     * */
    addGetPairPathUrlSubAndCallback = ( argStringUrlSubPath, argCallback ) => { this.fieldServer.get( argStringUrlSubPath, argCallback, ) }
    //
    // Public - get
    //
    /**
     * @param {string} argStringPath
     * @returns {Error | undefined}
     * */
    getErrorIfPathIsNotAbsolute = ( argStringPath ) => {

        if ( !path.isAbsolute( argStringPath ) ) {
            const arrayError = []
            arrayError.push( "Path is not absolute." )
            arrayError.push( `argStringPath = ${argStringPath}` )
            arrayError.push( `path.isAbsolute( argStringPath ) = ${path.isAbsolute( argStringPath )}` )
            return Error( arrayError.reduce( ( itemStringPrev, itemString ) => itemStringPrev + "\n" + itemString ) )
        }
        return undefined
    }
    //
    // Public - run
    //
    /**
     * Reminder: This function exists because the IDE keeps auto-inserting '()' when
     * trying to refer to this.fieldServer. This triggers errors.
     *
     * @returns Object
     * */
    getObjectServer() { return this.fieldServer }

    /**
     * @returns {Object}
     * */
    runServer() {
        this.fieldServer.listen( this.fieldIntPort, () => console.log( `Server listening on port: ${this.fieldIntPort}` ), )
        return this
    }
    //
    // Constructor
    //
    /**
     * @param {number} argIntPort
     * */
    constructor( argIntPort = 8080 ) {

        this.fieldIntPort = argIntPort
        this.fieldServer = express()
        //
        // Enable json parsing
        //
        this.fieldServer.use( bodyParser.json() )
        this.fieldServer.use( bodyParser.urlencoded( { extended: true } ) )
        //
        // Prevent cors errors
        //
        this.fieldServer.use( cors() )
    }
}




























































