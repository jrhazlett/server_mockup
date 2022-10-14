//
// Libraries - downloaded
//
import fs from "fs";
//
// Class
//
export default class helperFiles {

    /**
     * @param {string} argStringPathFile
     * */
    static getStringFromFile = ( argStringPathFile ) => {

        return fs.readFileSync(
            argStringPathFile,
            "utf-8"
        )
    }
}


















































