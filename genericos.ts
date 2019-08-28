function removeIt<T>(theInput: T, theIt: string): T {
    let theRegex = new RegExp(theIt, "gi");
    return theInput.replace(theRegex, '');
}