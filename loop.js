const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

myFile.runContents();

function shouldContinue() {
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

while (shouldContinue()) {
    
}