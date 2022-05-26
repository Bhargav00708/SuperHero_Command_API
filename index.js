const yargs = require("yargs");
const superHero = require("./superHero.js");

// Customize yargs version
yargs.version("1.1.0");

// Add SuperHero Command
yargs.command({
  command: "Add_SuperHero",
  describe: "Add a new SuperHero",
  builder: {
    Name: {
      describe: "Superhero Name",
      demandOption: true,
      type: "string",
    },
    Gender: {
      describe: "SuperHero Gender",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    superHero.addSuperHero(argv.Name, argv.Gender);
  },
});

// Remove SuoerHero Command
yargs.command({
  command: "Remove_SuperHero",
  describe: "Remove a SuperHero",
  builder: {
    Name: {
      describe: "Superhero Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    superHero.removeSuperHero(argv.Name);
  },
});

// List Of All SuperHero
yargs.command({
  command: "List_SuperHero",
  describe: "List All SuperHero",
  handler() {
    superHero.listSuperHero();
  },
});

// Perticuler SuperHero Command
yargs.command({
  command: "One_SuperHero",
  describe: "Details About One SuperHero",
  builder: {
    Name: {
      describe: "SuperHero Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    superHero.readSuperHero(argv.Name);
  },
});

yargs.parse();
