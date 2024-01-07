import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const urlRegex =
  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i;

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
      validate: (url) =>
        urlRegex.test(url)
          ? true
          : "Please enter a valid URL (e.g https://google.com)",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
