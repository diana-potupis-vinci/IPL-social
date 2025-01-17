function passwordChecker(password) {

  const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
  const hasLetter = /[a-zA-Z]/.test(password);

  if (!hasLetter) {
    return false;
  }

  for (let i = 0; i < specialCharacters.length; i++) {
    if (password.includes(specialCharacters[i]) && password.length >= 8) {
      return true;
    }
  }

  return false;
}

module.exports = passwordChecker;
