const axios = require("axios");
const base = "http://localhost:9000/api";

async function run() {
  try {
    const putRes = await axios.put(`${base}/students/1`, { name: "Test1 Updated", email: "phea@gmail1-updated.com", age: 23 }, { validateStatus: () => true });
    console.log("PUT status", putRes.status);
    console.log("PUT data", JSON.stringify(putRes.data));
  } catch (err) {
    console.error("PUT error", err.message);
    if (err.response) console.error(err.response.status, err.response.data);
  }

  try {
    const delRes = await axios.delete(`${base}/students/1`, { validateStatus: () => true });
    console.log("DELETE status", delRes.status);
    console.log("DELETE data", JSON.stringify(delRes.data));
  } catch (err) {
    console.error("DELETE error", err.message);
    if (err.response) console.error(err.response.status, err.response.data);
  }
}

run();
