//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = .env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "263784793611";
global.sudo = process.env.SUDO || "263784793611";
global.owner = process.env.OWNER_NUMBER || "263784793611";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FzZUExaHdzMHdWcEIwSmJVY1pEUGJ5S2duSVJYNVJocEcxK3BIc25YZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVNyVEl0Z0p5VjE2enpXT1g3WGpiT1ZNaGJ1TFpkYnJwZkpXSFc0VjJRMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSmhDS3Q1RlJnYzNINFM0WE04RnFyZDhvbU5yTkdUMUtUSkhxeDhaZVZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1NEpBbXBFWVR2V0VZenhlRWRtSXRhT2JoYjBiOGR1S1RkRitTMGFlSEZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDSmI2SGZ5N2dkY2hHSHJyVzhZamU3SUhtUEVWMGFQYTQ2YU9RR21Xazg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIMjVXdGI1OWlQS2FyRzdBek5iTkpwb051aDZ6MmYwMjFDUDZFcVFHVm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xrbERuMUN3Ny9tN25vUW9pMW0rbFo1YUFTR2grQm1qOE9TS3BlQ0kyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienJURzUvSDh1d3AxMk9QS1dYSHF1UmplbDhoNUFEQnEyRXZpSTZpV2xVST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0xV2RkWWxiaVRaQitHWkFhQUNLTUxBcnpKNUQ4TXZVNW5EMWZ3L1JGcjlrUTlSYjkzUXdFOVNPWVNPazNQbUU3L0lDTlo5dnQ3MkxXaGROajMrZWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJnQ25iL2VrY0pmL2J3bVRiYWxIbjdBdklIZm5Kc00vbjQrVGNnUmxiSGlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NTk4NTc2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRjIzRTc1MjYzNUMzQTVEMzE3OEU3MDBCMzNBMkZENSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyMDIzMTA3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKVnM0RVNEX1RzT2NyS0NObzl0M3R3IiwicGhvbmVJZCI6IjZhYmI0Y2ZlLWZjNzMtNDQyMy05MGFiLTAyMWYxZGIwNGExMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmUitRalV3V2xUMWZuSFpQTXV2L0ZiTW4xYmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHYwOCt4RHJjTWlzUHJoWGY0cmVncWJjUFJjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZKQ1dNQ0FRIiwibWUiOnsiaWQiOiIyNjM3NzU5ODU3NjM6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLDl1BywqQgwrLigbbCs+KBtiBzc8KkcsOXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQaVcrS01GRUxHbThya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZQ3N6ZVFxdUxoY2trT2tka1dSdExyaU5FTU9lcDVwTVFOQmtFYTFOalZ3PSIsImFjY291bnRTaWduYXR1cmUiOiJhTDNINzVteDFhb0VGZG5YZ2QyK1JQekVvbXVLREluZ3R6Mjg0NWk3RTBRUnR4QlU0K3U1azFaN1c3WW4vOHduWTdPeEg1NXdHMXlhVi9ib2hjTmtDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK1hlZk5iMFEyS3RMVEo4R1BUWUFyd1FFVjlDa0NqMzhVaTdxWGhycUxtdlE3M0hDNTBreUgyU25YaWFrdHk2UlZmZ1h5azQ2aWhEa0hiWHNzQURTZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3NzU5ODU3NjM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXQXJNM2tLcmk0WEpKRHBIWkZrYlM2NGpSRERucWVhVEVEUVpCR3RUWTFjIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyMDIzMTAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlLWSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
