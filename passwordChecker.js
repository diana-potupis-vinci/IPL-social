function passwordChecker(password) {

  const specialCharacters = /[!@#$%^&*]/;
  const hasLetter = /[a-zA-Z]/.test(password);
  
  const hasSpecialCharacter = specialCharacters.test(password);

  return hasLetter && hasSpecialCharacter && password.length >= 8;
}

module.exports = passwordChecker;
