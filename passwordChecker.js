function passwordChecker(password) {

  const hasNumber = /\d/.test(password);

  const hasSpecialCharacter = /[!@#$%^&*]/.test(password);

  const hasIPL = password.toLowerCase().includes('ipl');

  return hasNumber && hasSpecialCharacter && password.length >= 8 && !hasIPL;
}

module.exports = passwordChecker;
