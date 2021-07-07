const { check } = require("express-validator");

module.exports = function (params) {
  // Receive call with an array of parameters to determine what checks to add to the returning array
  const returnArray = [];

  // Iterate through the params array and push onto returning array any params that match
  for (const ele of params) {
    switch (ele) {
      case "usernameRequired":
        returnArray.push(check("username", "Name is required").not().isEmpty());
        break;

      case "nameRequired":
        returnArray.push(check("name", "Name is required").not().isEmpty());
        break;

      case "authorRequired":
        returnArray.push(check("author", "Author is required").not().isEmpty());
        break;

      case "emailRequired":
        returnArray.push(check("email", "Email is required").not().isEmpty());
        break;

      case "emailValid":
        returnArray.push(
          check("email", "Please include a valid email").isEmail()
        );
        break;

      case "passwordLength":
        returnArray.push(
          check(
            "password",
            "Please enter a password with 6 or more characters"
          ).isLength({ min: 6 })
        );
        break;

      case "passwordRequired":
        returnArray.push(check("password", "Password is required").exists());
        break;

      case "descriptionRequired":
        returnArray.push(
          check("description", "Description is required").not().isEmpty()
        );
        break;

      case "scheduleRequired":
        returnArray.push(
          check("schedule", "Schedule is required").not().isEmpty()
        );
        break;

      case "tagsRequired":
        returnArray.push(
          check("tags", "Tag(s) is/are required").not().isEmpty()
        );
        break;

      case "textRequired":
        returnArray.push(check("text", "Text is required").not().isEmpty());
        break;

      case "createdDateRequired":
        returnArray.push(
          check("created", "Created date is required").not().isEmpty()
        );
        break;
      default:
        break;
    }
  }
  return returnArray;
};
