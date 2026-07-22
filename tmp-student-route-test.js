const axios = require("axios");
const base = "http://localhost:9000/api";
const url = base + "/students/1";
const payload = { name: "Test1 Updated", email: "unique-update-test@example.com", age: 23 };

async function test() {
  const methods = [
    { name: "GET", fn: () => axios.get(url, { validateStatus: () => true }) },
    { name: "POST", fn: () => axios.post(url, payload, { validateStatus: () => true }) },
    { name: "PUT", fn: () => axios.put(url, payload, { validateStatus: () => true }) },
    { name: "PATCH", fn: () => axios.patch(url, payload, { validateStatus: () => true }) },
    { name: "DELETE", fn: () => axios.delete(url, { validateStatus: () => true }) },
  ];
  for (const method of methods) {
    try {
      const res = await method.fn();
      console.log(method.name, res.status, JSON.stringify(res.data));
    } catch (err) {
      console.error(method.name, "ERROR", err.message);
      if (err.response) console.error(err.response.status, JSON.stringify(err.response.data));
    }
  }
}

test();
