//
// Libraries - downloaded
//
import fs from "fs";
import path from "path";
//
// Class
//
class HelperPathsProject {
    //
    // Public - get
    //
    /**
     * @param {string} argStringPath
     * @returns string
     * */
    getStringPathAncestor = (argStringPath) => path.dirname(argStringPath);

    /**
     * @param {string} argStringPath
     * @returns {Error | undefined}
     * */
    getErrorIfPathIsOutsideProject = (argStringPath) => {
        if (!argStringPath.startsWith(this.fieldStringPathDirProject)) {
            return Error(
                [
                    "argStringPath is outside the project.",
                    `argStringPath = ${argStringPath}`,
                    `this.fieldStringPathDirProject = ${this.fieldStringPathDirProject}`,
                    `argStringPath.startsWith( this.fieldStringPathDirProject ) = ${argStringPath.startsWith(
                        this.fieldStringPathDirProject
                    )}`,
                ].reduce(
                    (itemStringPrev, itemString) =>
                        `${itemStringPrev}\n${itemString}`
                )
            );
        }
        return undefined;
    };

    /**
     * @param {string} argStringPathRel
     * @returns string
     * */
    getStringPathAbsolute = (argStringPathRel) =>
        path.join(this.fieldStringPathDirProject, argStringPathRel);

    /**
     * @param {string} argStringPathRel
     * @returns string
     * */
    getStringPathDataInput = (argStringPathRel = undefined) =>
        argStringPathRel === undefined
            ? this.fieldStringPathDirDataOutput
            : path.join(this.fieldStringPathDirDataOutput, argStringPathRel);

    /**
     * @param {string} argStringPathRel
     * @returns string
     * */
    getStringPathDataOutput = (argStringPathRel = undefined) =>
        argStringPathRel === undefined
            ? this.fieldStringPathDirDataOutput
            : path.join(this.fieldStringPathDirDataOutput, argStringPathRel);
    //
    // Public - is
    //
    /**
     * @param {string} argStringPath
     * */
    isDirProjectRoot = (argStringPath) =>
        fs.readdirSync(argStringPath).includes("package.json");
    //
    // Setup
    //
    /***/
    constructor() {
        this.fieldStringPathDirProject = this._getStringPathDirProjectRoot();

        this.fieldStringPathDirData = path.join(
            this.fieldStringPathDirProject,
            "data"
        );

        this.fieldStringPathDirDataOutput = path.join(
            this.fieldStringPathDirData,
            "dataOutput"
        );
    }

    /**
     * This returns the path to the first dir that contains a "package.json" file
     *
     * @returns {string | undefined}
     * */
    _getStringPathDirProjectRoot = () => {
        let stringToReturn = path.resolve("");
        while (true) {
            //
            // Return the first dir that contains 'package.json'
            //
            if (this.isDirProjectRoot(stringToReturn)) {
                return stringToReturn;
            }
            //
            // If we get to the root dir, then obviously this is a major error; return undefined
            //
            if (stringToReturn === "/") {
                return undefined;
            }
            stringToReturn = path.dirname(stringToReturn);
        }
    };
}
//
// Public
//
let helperPathsProject = new HelperPathsProject();
export default helperPathsProject;
