function passwordChecker(password) {

  const hasLetter = /[a-zA-Z]/.test(password);

  const hasSpecialCharacter = /[!@#$%^&*]/.test(password);

  const hasIPL = password.toLowerCase().includes('ipl');

  return hasLetter && hasSpecialCharacter && password.length >= 8 && !hasIPL;
}

module.exports = passwordChecker;
