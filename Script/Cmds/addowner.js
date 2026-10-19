module.exports = {
  config: {
    name: "addowner",
    version: "1.0",
    author: "〲MAMUNツ࿐ T.T　o.O",
    countDown: 5,
    role: 0,
    shortDescription: "Add bot owner to group",
    category: "group",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const ownerID = "61595546250453"; // Owner Facebook ID

    try {
      await api.addUserToGroup(ownerID, event.threadID);
      api.sendMessage(
        "〲𝙼𝙸𝚁𝙹𝙰𝙵𝙾𝚁ツ࿐ ke group e add kora holo.",
        event.threadID
      );
    } catch (e) {
      api.sendMessage(
        "〲𝙼𝙸𝚁𝙹𝙰𝙵𝙾𝚁ツ࿐ ke add kora jay nai. Bot admin na hole add korte parbe na.",
        event.threadID
      );
    }
  }
};
