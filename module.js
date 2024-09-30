const users = [
  { username: "vatsal301", password: "vatsal123" },
  { username: "vatsal302", password: "vatsal321" },
];

function authenticateUser(username, password) {
  if (!username || !password) {
    throw new Error("Username and Password are required");
  }
  const user = users.find(
    (user) => user.username == username && user.password == password
  );
  console.log("user", user);
  return user ? true : false;
}

module.exports = authenticateUser;
