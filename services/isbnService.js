// Fonction de vérification d'un ISBN-10
function validateISBN10(isbn) {
  console.debug('isbn dgffffffffffffffffffffffffffffffffff');
  const cleanedISBN = isbn.replace(/-/g, ''); // Supprimer les tirets éventuels de l'ISBN

  const digits = cleanedISBN.split('').map((digit, index) => {
    if (index === 9 && digit === 'X') {
      return 10; // 'X' est équivalent à 10 en ISBN-10
    }
    return parseInt(digit);
  });

  const weightedSum = digits.reduce((sum, digit, index) => {
    return sum + digit * (10 - index);
  }, 0);

  return weightedSum % 11 === 0;
}

// Fonction de vérification d'un ISBN-13
function validateISBN13(isbn) {
  const cleanedISBN = isbn.replace(/-/g, ''); // Supprimer les tirets éventuels de l'ISBN

  const digits = cleanedISBN.split('').map(digit => parseInt(digit));

  const weightedSum = digits.reduce((sum, digit, index) => {
    const weight = index % 2 === 0 ? 1 : 3;
    return sum + digit * weight;
  }, 0);

  return weightedSum % 10 === 0;
}

// Fonction de vérification d'un ISBN
function validateISBN (isbn) {
  const cleanedISBN = isbn.replace(/-/g, ''); // Supprimer les tirets éventuels de l'ISBN

  console.debug('cleanedISBN', cleanedISBN);
  
  if (cleanedISBN.length === 10) {
    return validateISBN10(cleanedISBN);
  } else if (cleanedISBN.length === 13) {
    return validateISBN13(cleanedISBN);
  } else {
    return false;
  }
}

module.exports = {
  validateISBN, // Exporter la fonction validateISBN
};