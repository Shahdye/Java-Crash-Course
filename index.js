let users = [
  {
    username: "David",
    email: "david@frontend.com",
    subsciptionStatus: "VIP",
    discordID: "David Bragg#0001",
    lessonsCompleted: [0],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("log the user in - the details are correct");
      } else {
        console.log("password is incorrect - try again");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}

login("");

function register(
  username,
  email,
  password,
  subsciptionStatus,
  discordID,
  lessonsCompleted
) {
  console.log(email, password);
}

register("zen", "zenFES@gmail.com", "zen123", "VIP", "Zen#0001", [0, 1]);
