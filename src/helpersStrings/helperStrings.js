//
// Public
//
export default class helperStrings {
    //
    // Public - get
    //
    /**
     * @param {string[]} argArrayOfStrings
     * @param {string} argStringDelimiter
     * */
    static getStringByCombiningArray = ( argArrayOfStrings, argStringDelimiter = "" ) =>
        argArrayOfStrings.length === 0
            ? ""
            : argArrayOfStrings.reduce( ( itemStringPrev, itemString ) => itemStringPrev + argStringDelimiter + itemString )

    /**
     * @param {any} argIterable
     * @returns string
     * */
    static getStringPrintableArrayFromIterable = ( argIterable ) => {
        const arrayFromArg = Array.from(argIterable)
        return arrayFromArg.length === 0
            ? "[]"
            : `[${arrayFromArg.reduce((itemPrev, item) => ( typeof itemPrev === "symbol" ? itemPrev.toString() : `${itemPrev}` ) + ", " + ( typeof item === "symbol" ? item.toString() : `${item}` ) )}]`
    }
}
















































