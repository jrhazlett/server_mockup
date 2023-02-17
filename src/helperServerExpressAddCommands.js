//
// Libraries - downloaded
//
import path from "path";
import pretty_printer_for_humans from "pretty_printer_for_humans";
//
// Libraries - custom
//
import HelperServerExpress from "./helpersServers/helperServerExpress.js";
import helperPathsProject from "./helpersDisk/helpersPaths/helperPathsProject.js";
import prettyPrinterForHumans from "pretty_printer_for_humans";
import helperSleep from "./helpersSleep/helperSleep.js";
import helperStrings from "./helpersStrings/helperStrings.js";
//
// Public
//
export default class HelperServerExpressAddCommands {
    //
    // Public - add - addCommandsToServerExpress
    //
    /**
     * @param {HelperServerExpress} argHelperServerExpress
     * */
    addCommandsToServerExpress = (argHelperServerExpress) => {
        const objectServer = argHelperServerExpress.fieldObjectServer;

        this._addCommandGetDelayed(objectServer, 10);
        this._addCommandGetText(objectServer);
        this._addCommandGetTest403(objectServer);
        this._addCommandPostTestData(objectServer);
        this._addHtmlTestForm(objectServer);
        this._addHtmlTestFormCheckboxes(objectServer);
    };
    //
    // Private - add - get
    //
    /**
     * @param {Object} argObjectServer
     * @param {number} argIntSeconds
     * */
    _addCommandGetDelayed = (argObjectServer, argIntSeconds) => {
        const stringSubPath = "/delayed";
        this._printAddedRESTCommand("get", stringSubPath);
        argObjectServer.get(stringSubPath, (req, res) => {
            const stringMessage = "TEST_SUCCESSFUL_DELAYED";
            this._printMessageForAction(
                `GET request received. Returning: ${stringMessage}`
            );
            helperSleep.sleepForSeconds(argIntSeconds).then(() => {
                res.status(200).send(`${stringMessage}`);
            });
        });
    };

    /**
     * @param {Object} argObjectServer
     * */
    _addCommandGetText = (argObjectServer) => {
        const stringSubPath = "/test";
        this._printAddedRESTCommand("get", stringSubPath);
        argObjectServer.get(stringSubPath, (req, res) => {
            const stringMessage = "TEST_SUCCESSFUL2";
            this._printMessageForAction(
                `GET request received. Returning: ${stringMessage}`
            );
            res.send({ data: stringMessage });
        });
    };

    /**
     * @param {Object} argObjectServer
     * */
    _addCommandGetTest403 = (argObjectServer) => {
        const stringSubPath = "/test403";
        this._printAddedRESTCommand("get", stringSubPath);
        argObjectServer.get(stringSubPath, (req, res) => {
            const stringMessage = "TEST_SUCCESSFUL_403";
            this._printMessageForAction(
                `GET request received. Returning: ${stringMessage}`
            );
            res.status(403).send(`${stringMessage}`);
        });
    };
    //
    // Private - add - post
    //
    /**
     * @param {Object} argObjectServer
     * */
    _addCommandPostTestData = (argObjectServer) => {
        const stringSubPath = "/testData";
        this._printAddedRESTCommand("post", stringSubPath);
        argObjectServer.post(stringSubPath, (req, res) => {
            const stringMessage = "TEST_SUCCESSFUL_TESTDATA";
            this._printMessageForAction(
                `POST request received. Returning: ${stringMessage}\n`
            );
            prettyPrinterForHumans.pprint(req.body, {
                argStringNameToOutput: "req.body",
                argStringTrailingSpace: "\n",
            });
            res.status(200).send(`${stringMessage}`);
        });
    };

    /**
     * @param {Object} argObjectServer
     * */
    _addHtmlTestForm = (argObjectServer) => {
        let stringSubPath;
        //
        // Setup ability to submit form
        //
        stringSubPath = "/testFormSubmit";
        this._printAddedRESTCommand("get", stringSubPath);
        argObjectServer.use(stringSubPath, (req, res, next) => {
            this._printMessageForAction(
                helperStrings.getStringByCombiningArray(
                    [
                        "req (form submitted) =",
                        prettyPrinterForHumans.pformat(req.body),
                    ],
                    "\n"
                )
            );
        });
        //
        // Setup ability to access form
        //
        stringSubPath = "/testForm";
        this._printAddedRESTCommand("get", stringSubPath);
        argObjectServer.get(stringSubPath, (req, res, next) => {
            res.sendFile(
                path.join(
                    helperPathsProject.fieldStringPathDirProject,
                    "src/srcWeb/testForm.html"
                )
            );
        });
    };

    /**
     * @param {Object} argObjectServer
     * */
    _addHtmlTestFormCheckboxes = (argObjectServer) => {
        let stringSubPath;
        //
        // Setup ability to submit form
        //
        stringSubPath = "/testFormSubmit";
        this._printAddedRESTCommand("get", stringSubPath);
        argObjectServer.use(stringSubPath, (req, res, next) => {
            this._printMessageForAction(
                helperStrings.getStringByCombiningArray(
                    [
                        "req (form submitted) =",
                        prettyPrinterForHumans.pformat(req.body),
                    ],
                    "\n"
                )
            );
        });
        //
        // Setup ability to access form
        //
        stringSubPath = "/testFormCheckboxes";
        this._printAddedRESTCommand("get", stringSubPath);
        argObjectServer.get(stringSubPath, (req, res, next) => {
            res.sendFile(
                path.join(
                    helperPathsProject.fieldStringPathDirProject,
                    "src/srcWeb/testFormCheckboxes.html"
                )
            );
        });
    };
    //
    // Private - print
    //
    /**
     * @param {string} argStringMethod
     * @param {string} argStringSubPath
     * */
    _printAddedRESTCommand = (argStringMethod, argStringSubPath) => {
        console.log(
            `Added rest command: ${argStringMethod.toUpperCase()} : ${argStringSubPath}`
        );
    };

    /**
     * @param {string} argStringMessage
     * */
    _printMessageForAction = (argStringMessage) => {
        console.log(
            helperStrings.getStringByCombiningArray(
                [
                    `this.fieldIntCounterForMessages = ${this.fieldIntCounterForMessages}`,
                    argStringMessage,
                    "\n",
                ],
                "\n"
            )
        );
        this.fieldIntCounterForMessages++;
    };
    //
    // Setup
    //
    constructor() {
        this.fieldIntCounterForMessages = 0;
    }
}
