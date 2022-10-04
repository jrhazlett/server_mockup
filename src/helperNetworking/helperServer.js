/*
Libraries needed to make this work...

This is the server
npm i express

This is necessary to prevent express from returning CORS errors
npm i cors

This is necessary to get and parse data in requests
npm i bodyParser
*/
//
// Libraries - downloaded
//
import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
//
// Libraries - custom
//
import helperSleep from "../helpers/helperSleep.js"
import prettyPrinterForHumans from "pretty_printer_for_humans"
//
// Class
//
export default class helperServer {

    static runServer = () => {

        const objectServer = this._getNewConfiguredObjectServer()

        this._addCommandGetDelayed( objectServer, 10, )

        this._addCommandGetText( objectServer )

        this._addCommandGetTest403( objectServer )

        this._addCommandPostTestData( objectServer )

        this._runServer( objectServer, 8000, )
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
    //
    // Private - get
    //
    /**
     * @returns Object
     * */
    static _getNewConfiguredObjectServer = () => {
        const objectToReturn = express()
        objectToReturn.use(bodyParser.json())
        objectToReturn.use(bodyParser.urlencoded( { extended: true } ))
        objectToReturn.use(cors())
        return objectToReturn
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
    //
    // Private - run
    //
    /**
     * @param {Object} argObjectServer
     * @param {number} argIntPort
     * */
    static _runServer = ( argObjectServer, argIntPort ) => {
        argObjectServer.listen( argIntPort, () => { console.log( `Running server; listening on port: ${ argIntPort }` ) } )
    }
}


















































