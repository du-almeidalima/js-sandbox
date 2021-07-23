let token = "1234";
let intervalId;

const refreshToken = async (shouldWork) => {
  return new Promise((resolve, reject) => {
    if (shouldWork) {
      token = "worked";
      resolve(true);
    } else {
      let attempt = 0;
      intervalId = setInterval(() => {
        if (attempt > 2) {
          token = "worked";
          resolve(true);
        } else {
          attempt++;
        }
      }, 500);
    }
  });
};

const performAuthorize = async (identifier, request) => {
  try {
    request();
  } catch {
    console.log("Retrying");
    await refreshToken(false);
    console.log('asdf' + token);
  }

  console.log('Finished');
};

performAuthorize("TEST", () => {
  throw new Error("");
});
