// Fake user database
const USERS_DB = [
  {
    id: "1",
    username: "player1",
    password: "password1",
  },
  {
    id: "2",
    username: "player2",
    password: "password2",
  },
  {
    id: "3",
    username: "player3",
    password: "password3",
  },
];

// Fake API call that should be triggered when the login form is submitted
// Should return the user
export const loginUser = ({ username, password }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: Find user in USERS_DB and compare password, return user if login is a match

      // Reject the promise with an error if user is not found / login is wrong
      reject(new Error("Bad credentials"));
    }, 1000);
  });
