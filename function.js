window.function = function (str) {
    // Extract and assign default value if undefined
    let text = str.value ?? "";

    // Split the text into two parts using ':'
    let [firstString = "", secondString = ""] = text.split(':');

    // Convert the strings to arrays
    let firstArray = firstString.split(',').filter(Boolean); // Filter out any empty strings
    let secondArray = secondString.split(',').filter(Boolean);

    let isIncluded = false;

    // Check if any element from firstArray is in secondArray
    for (let element of firstArray) {
        if (secondArray.includes(element)) {
            isIncluded = true;
            break;
        }
    }

    return isIncluded;
};
