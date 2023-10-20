try {
    // Put in here any code you believe may potentially output an error.
    throw new Error("Test exception");
} catch (error) {
    // Take the error input and decide what you want to do with it.
    console.log(error);
} finally {
    // Any code you want to be run after the statement, whether or not it passed or was caught.
    // You do not have to include the finally block if you don't want to. The only mandatory blocks are "try" and "catch"
    console.log("See above");
}
