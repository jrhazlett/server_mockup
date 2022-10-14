//
// Libraries - downloaded
//
import path from "path";
//
// Libraries - custom
//
import HelperServerExpress from "./helpersServers/helperServerExpress.js";
import helperPathsProject from "./helpersDisk/helpersPaths/helperPathsProject.js";
import prettyPrinterForHumans from "pretty_printer_for_humans";
import helperSleep from "./helpersSleep/helperSleep.js";
//
// Class
//
export default class helperServerExpressAddCommands {

    /**
     * @param {HelperServerExpress} argHelperServerExpress
     * */
    static addCommandsToServerExpress = ( argHelperServerExpress ) => {

        const objectServer = argHelperServerExpress.fieldServer

        helperServerExpressAddCommands._addCommandGetDelayed( objectServer, 10, )
        helperServerExpressAddCommands._addCommandGetText( objectServer )
        helperServerExpressAddCommands._addCommandGetTest403( objectServer )
        helperServerExpressAddCommands._addCommandPostTestData( objectServer )
        helperServerExpressAddCommands._addHtmlTestForm( objectServer )
    }
    //
    // Private - add - get
    //
    /**
     * @param {Object} argObjectServer
     * @param {number} argIntSeconds
     * */
    static _addCommandGetDelayed = ( argObjectServer, argIntSeconds ) => {
        const stringSubPath = "/delayed"
        this._printRESTCommand( "get", stringSubPath, )
        argObjectServer.get(
            stringSubPath,
            ( req, res ) => {
                const stringMessage = "TEST_SUCCESSFUL_DELAYED"
                console.log( `GET request received. Returning: ${ stringMessage }` )
                helperSleep
                    .sleepForSeconds( argIntSeconds )
                    .then( () => { res.status( 200 ).send( `${ stringMessage }` ) } )
            },
        )
    }

    /**
     * @param {Object} argObjectServer
     * */
    static _addCommandGetText = ( argObjectServer ) => {
        const stringSubPath = "/test"
        this._printRESTCommand( "get", stringSubPath, )
        argObjectServer.get(
            stringSubPath,
            ( req, res ) => {
                const stringMessage = "TEST_SUCCESSFUL2"
                console.log( `GET request received. Returning: ${ stringMessage }` )
                res.send( { data: stringMessage } )
            },
        )
    }

    /**
     * @param {Object} argObjectServer
     * */
    static _addCommandGetTest403 = ( argObjectServer ) => {
        const stringSubPath = "/test403"
        this._printRESTCommand( "get", stringSubPath, )
        argObjectServer.get(
            stringSubPath,
            ( req, res ) => {
                const stringMessage = "TEST_SUCCESSFUL_403"
                console.log( `GET request received. Returning: ${ stringMessage }` )
                res.status( 403 ).send( `${ stringMessage }` )
            },
        )
    }
    //
    // Private - add - post
    //
    /**
     * @param {Object} argObjectServer
     * */
    static _addCommandPostTestData = ( argObjectServer ) => {
        const stringSubPath = "/testData"
        this._printRESTCommand( "post", stringSubPath, )
        argObjectServer.post(
            stringSubPath,
            ( req, res ) => {
                const stringMessage = "TEST_SUCCESSFUL_TESTDATA"
                console.log( `POST request received. Returning: ${ stringMessage }\n` )
                prettyPrinterForHumans.pprint(
                    req.body,
                    {
                        argStringNameToOutput: "req.body",
                        argStringTrailingSpace: "\n",
                    },
                )
                res.status( 200 ).send( `${ stringMessage }` )
            },
        )
    }

    /**
     * @param {Object} argObjectServer
     * */
    static _addHtmlTestForm = ( argObjectServer ) => {

        argObjectServer.use(
            "/testFormSubmit",
            (req, res, next) => {
                console.log( "req (form submitted) =" )
                console.log( req.body )
                console.log( "\n" )
            }
        )

        const stringSubPath = "/testForm"
        argObjectServer.get(
            stringSubPath,
            ( req, res, next ) => {
                res.sendFile( path.join( helperPathsProject.fieldStringPathDirProject, "src/srcWeb/testForm.html", ) )
            },
        )

    }
    //
    // Private - print
    //
    /**
     * @param {string} argStringMethod
     * @param {string} argStringSubPath
     * */
    static _printRESTCommand = ( argStringMethod, argStringSubPath ) => {
        console.log( `Added rest command: ${argStringMethod.toUpperCase()} : ${argStringSubPath}` )
    }
}

































