import * as path from "path";

export default class helperPaths {

    /**
     * @param {[]} argArrayOfStrings
     * @returns string
     * */
    static getPathByCombiningStrings = ( argArrayOfStrings ) => {
        return path.join( ...argArrayOfStrings )
    }

    /**
     * @param {string} argStringPath
     * @returns boolean
     * */
    static logicPathIsAbsolute = ( argStringPath ) => { return path.isAbsolute( argStringPath ) }
}



















































