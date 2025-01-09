# Express.js: Handling Empty or Invalid JSON Request Bodies
This repository demonstrates a common issue in Express.js applications where the `express.json()` middleware isn't properly handling empty or invalid JSON request bodies.  This can lead to unexpected errors and crashes.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides a robust solution to gracefully handle these scenarios.  This solution includes comprehensive error handling and clear responses to the client.