const { fork } = require("child_process");
const path = require("path");

// Get the absolute path to the child script
const childScriptPath = path.join(__dirname, "child_script.js");

// Fork a child process
const childProcess = fork(childScriptPath);

// Listen for messages from the child process
childProcess.on("message", (message) => {
  console.log("Message from child process:", message);
});

// Send a message to the child process
childProcess.send({ command: "start", data: "Some data" });

// Handle exit of child process
childProcess.on("exit", (code) => {
  console.log(`Child process exited with code ${code}`);
});
