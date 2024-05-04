# MQTT Client and Server Example

This project demonstrates how to set up an MQTT broker and client using Node.js. The MQTT broker serves as the server, and the MQTT client connects to it to publish and receive messages. It is crucial to run the client and the server in separate terminal windows to facilitate concurrent operation and real-time interaction.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- [Yarn](https://yarnpkg.com/) (as a package manager)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-repository/mqtt-example.git
   ```
2. Navigate into the project directory:
   ```bash
   cd mqtt-example
   ```
3. Install the required packages using Yarn:
   ```bash
   yarn install
   ```

## Running the Broker (Server)

To start the MQTT broker, open a terminal window and run:

```bash
node server.js
```

This command starts the MQTT broker, which will listen for incoming connections and messages on port 1883.

## Running the Client

1. Open a **new split terminal** window or tab to ensure you can observe real-time interactions between the client and server.
2. Run the client with the following command:
   ```bash
   node client.js
   ```
   Follow the prompts in the client's terminal to interact with the MQTT server by publishing and receiving messages.

## Usage

With both the broker and client operational, you can type messages into the client's terminal to see them processed by the broker. The client will also display messages received from the broker based on the subscribed topics.

### Exiting the Program

To exit the client, type `exit` when prompted for a message. This will close the client and terminate the connection cleanly. Stop the broker by pressing `Ctrl+C` in the broker's terminal window.

## Support

For help or to report issues, please open an issue on the project's GitHub issue tracker.

## Contributing

Contributions are warmly welcomed. Please feel free to submit pull requests or suggest new features through the GitHub issue tracker.

---

Enjoy building and interacting with your real-time MQTT applications in Node.js!
