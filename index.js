const app = require('express')()

app.listen(3000, () => {
  console.log("webserver ready!")
})

app.get("/", (req, res) => {
res.send("sus")})
const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(process.env.token);
