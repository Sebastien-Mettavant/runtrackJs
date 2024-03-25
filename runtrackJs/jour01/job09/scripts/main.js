function tri(numbers, order) {
    // Copie du tableau pour éviter la modification directe
    let copiedArray = numbers.slice();
  
    if (order === "asc") {
      copiedArray.sort(function(a, b) {
        return a - b;
      });
    } else if (order === "desc") {
      copiedArray.sort(function(a, b) {
        return b - a;
      });
    } else {
      console.log("Le paramètre 'order' doit être 'asc' ou 'desc'");
      // Retourner une copie du tableau non trié en cas de paramètre incorrect
      return numbers.slice();
    }
    return copiedArray;
  }
  
  // Exemple d'utilisation
  let tableau = [3, 1, 5, 2, 4];
  console.log(tri(tableau, "asc")); // Résultat attendu : [1, 2, 3, 4, 5]
  console.log(tri(tableau, "desc")); // Résultat attendu : [5, 4, 3, 2, 1]
  