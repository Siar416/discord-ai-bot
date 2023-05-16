require("dotenv/config");
const { Client, IntentsBitField } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds, // Guilds in the discord server
    IntentsBitField.Flags.GuildMessages, // Messages within the discord server
    IntentsBitField.Flags.MessageContent, // Access to the message content itself
  ],
});

// Event listener for everytime the bot comes online
client.on("ready", () => {
  console.log("Ai bot is online!");
});

// Configuration need to communicate with openai
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

// Event to listen for messages
client.on("messageCreate", (message) => {
  // will not respond to bots
  if (message.author.bot) return;

  // bot will only respond to messages to specified server/channel
  if (message.channel.id !== process.env.CHANNEL_ID) return;

  // bot will only get triggered if message starts with !ai
  if (!message.content.startsWith("!ai")) return;

  let conversationLog = [
    { role: "system", content: "You are a friendly chatbot." },
  ];

  conversationLog.push({
    role: "user",
    content: message.content,
  });
});

client.login(process.env.TOKEN);
