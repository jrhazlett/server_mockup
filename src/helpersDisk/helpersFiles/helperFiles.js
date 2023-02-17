//
// Libraries - downloaded
//
import fs from "fs";
//
// Public
//
export default class helperFiles {
    //
    // Public - get
    //
    /**
     * @param {string} argStringPathFile
     * @returns {string}
     * */
    static getStringFromFile = ( argStringPathFile ) => {

        return fs.readFileSync(
            argStringPathFile,
            "utf-8"
        )
    }
}


















































