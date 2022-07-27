const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let surveyFormContent = "";

fs.readFile("home.html", function (err, home) {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", function (err, project) {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("surveyForm.html", function (err, surveyForm) {
  if (err) {
    throw err;
  }
  surveyFormContent = surveyForm;
});

http
  .createServer(function (request, response) {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/project/wd101-form":
        response.write(surveyFormContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(3000, function () {
    console.log("Server is running on port 3000");
  });
