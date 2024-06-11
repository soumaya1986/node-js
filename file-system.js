const fs = require("fs");

// Créer le fichier welcome.txt avec le contenu "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File has been created");

  // Lire le fichier welcome.txt et afficher le contenu dans la console
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
