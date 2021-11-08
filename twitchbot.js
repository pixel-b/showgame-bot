"use strict";

const tmi = require("tmi.js");
const axios = require("axios");
require("dotenv").config();

const twitch_oauth = process.env.twitch_oauth;
const twitch_channel = process.env.twitch_channel;

const steam_id = process.env.steam_id;
const steam_api = process.env.steam_api;

const opts = {
  options: { debug: true },
  identity: {
    username: `${twitch_channel}`,
    password: `${twitch_oauth}`,
  },
  channels: [`${twitch_channel}`],
};

const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  }

  const commandName = msg.trim();

  if (commandName === "!showgame") {
    try {
      fetchPlayerInfo(target);
      console.log(`* Executed ${commandName} command`);
    } catch (e) {
      console.error(e);
    }
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

//end twitch portion

const key = `${steam_api}`;
const steamID = `${steam_id}`;

const checkCurrentGame = (data, target) => {
  const currentGame = data["data"]["response"]["players"][0]["gameextrainfo"];
  const gameID = data["data"]["response"]["players"][0]["gameid"];

  if (gameID === undefined) {
    client.say(
      target,
      `${twitch_channel} isn't currently playing anything on Steam.`
    );
  } else {
    client.say(
      target,
      `${twitch_channel} is currently playing ${currentGame}! You can find it on Steam here: ${
        "https://store.steampowered.com/app/" + gameID
      }`
    );
  }
};

const fetchPlayerInfo = async (target) => {
  try {
    const response = await axios(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&steamids=${steamID}`
    );
    return checkCurrentGame(response, target);
  } catch (e) {
    console.error(e);
  }
};
