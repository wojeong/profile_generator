const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (name) => {
  rl.question("What is an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favorite", (meal) => {
        rl.question("What sport is your absolute favourite", (sport) => {
          rl.question("What is your superpower?", (superpower) => {
            console.log(`Hello ${name}. You like to do ${activity} while listening to ${music}.`);
            rl.close()
          });
        });
      });
    });
  });
});