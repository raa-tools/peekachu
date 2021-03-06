require("dotenv").config();

const owner = "raa-tools";
const api = `https://api.github.com/repos/${owner}`;
const authHeader = {
  Authorization: `token ${process.env.GITHUB_TOKEN}`,
  "User-Agent": "jtanadi"
};

module.exports = { api, authHeader };
