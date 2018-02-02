import axios from "axios";

export default {
  // Gets all adventures
  getAdventure: function() {
    return axios.get("/api/adventure");
  },
  // Gets the adventures with the given id
  // getAdventure: function(id) {
  //   return axios.get("/api/adventure/" + id);
  // },
  // Deletes the adventures with the given id
  deleteAdventure: function(id) {
    return axios.delete("/api/adventure/" + id);
  },
  // Saves a adventures to the database
  saveAdventure: function(adventureData) {
    return axios.post("/api/adventure", adventureData);
  }
};
