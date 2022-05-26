const fs = require("fs");
const chalk = require("chalk");

const addSuperHero = (Name, Gender) => {
  const notes = loadSuperHero();
  const duplicateNote = notes.find((note) => note.Name === Name);

  if (!duplicateNote) {
    notes.push({
      Name: Name,
      Gender: Gender,
    });
    saveSuperHero(notes);
    console.log(chalk.blue.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("SuperHero Name is Taken"));
  }
};

const removeSuperHero = (Name) => {
  const notes = loadSuperHero();
  const notesToKeep = notes.filter((note) => note.Name !== Name);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.blue.inverse("Superhero Removed"));
    saveSuperHero(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No Superhero Found!"));
  }
};

const listSuperHero = () => {
  const notes = loadSuperHero();
  var allSuperHeroNames = ``;
  notes.forEach((note) => {
    allSuperHeroNames += `${note.Name},`;
  });
  console.log(
    chalk.blue.inverse(
      `${allSuperHeroNames.slice(0, allSuperHeroNames.length - 1)}`
    )
  );
};

const readSuperHero = (Name) => {
  const notes = loadSuperHero();
  const note = notes.find((note) => note.Name === Name);

  if (note) {
    console.log(chalk.blue.inverse(note.Name, note.Gender));
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const saveSuperHero = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("superHero.json", dataJSON);
};

const loadSuperHero = () => {
  try {
    const dataBuffer = fs.readFileSync("superHero.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addSuperHero: addSuperHero,
  removeSuperHero: removeSuperHero,
  listSuperHero: listSuperHero,
  readSuperHero: readSuperHero,
};
