//
// Libraries - downloaded
//
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";
//
// Libraries - custom
//
// Public
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
    addGetPairPathUrlSubAndPathFileWebPage = (
        argStringUrlSubPath,
        argStringPathFileWebPageAbsolute
    ) => {
        //
        // Return error if defined
        //
        const err = this.getErrorIfPathIsNotAbsolute(
            argStringPathFileWebPageAbsolute
        );
        if (err) {
            return err;
        }

        this.fieldObjectServer.get(argStringUrlSubPath, (req, res) =>
            res.sendFile(argStringPathFileWebPageAbsolute)
        );
        //
        // Return undefined if no error
        //
        return undefined;
    };

    /**
     * Reminder: The callback must take ( req, res ) as arguments.
     *
     * @param {string} argStringUrlSubPath
     * @param {Function} argCallback
     * */
    addGetPairPathUrlSubAndCallback = (argStringUrlSubPath, argCallback) =>
        this.fieldObjectServer.get(argStringUrlSubPath, argCallback);
    //
    // Public - get
    //
    /**
     * @param {string} argStringPath
     * @returns {Error | undefined}
     * */
    getErrorIfPathIsNotAbsolute = (argStringPath) =>
        path.isAbsolute(argStringPath)
            ? undefined
            : Error(
                  [
                      "Path is not absolute.",
                      `argStringPath = ${argStringPath}`,
                      `path.isAbsolute( argStringPath ) = ${path.isAbsolute(
                          argStringPath
                      )}`,
                  ].reduce(
                      (itemStringPrev, itemString) =>
                          `${itemStringPrev}\n${itemString}`
                  )
              );
    //
    // Public - run
    //
    /**
     * @returns {Object}
     * */
    runServer = () => {
        this.fieldObjectServer.listen(this.fieldIntPort, () =>
            console.log(`Server listening on port: ${this.fieldIntPort}`)
        );
        return this;
    };
    //
    // Constructor
    //
    /**
     * @param {number} argIntPort
     * */
    constructor(argIntPort = 8001) {
        this.fieldIntPort = argIntPort;
        this.fieldObjectServer = express();
        //
        // Enable json parsing
        //
        this.fieldObjectServer.use(bodyParser.json());
        this.fieldObjectServer.use(bodyParser.urlencoded({ extended: true }));
        //
        // Prevent cors errors
        //
        this.fieldObjectServer.use(cors());
    }
}
