const mqtt = require('mqtt');
const readline = require("readline");

// Connection options
const options = {
    host: 'localhost',
    port: 1883,
    clientId: 'mqttjs_client'
};

// Create an MQTT client instance
const client = mqtt.connect(options);

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('connect', function () {
    console.log('Client connected to MQTT broker');

    // Subscribe to a topic
    client.subscribe('test/topic', function (err) {
        if (!err) {
            console.log('Successfully subscribed to test/topic');
            askQuestion();  // Start asking user input after successful subscription
        }
    });
});

// Function to ask user input
function askQuestion() {
    rl.question('Type your message (type "exit" to quit): ', (answer) => {
        if (answer === "exit") {
            console.log("Quitting MQTT Client...");
            rl.close();   // Close the readline interface
            client.end(); // Close the MQTT client
            return;
        }
        client.publish('test/topic', answer);
        askQuestion();  // Ask for next message
    });
}

// // Handling incoming messages
// client.on('message', function (topic, message) {
//     console.log(`Received message on ${topic}: ${message.toString()}`);
// });

// Handling connection errors
client.on('error', function (error) {
    console.error('Connection error:', error);
    client.end();
});
