function estNombrePremier(nombre) {
    if (nombre <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
      console.log(nombre1 + " et " + nombre2 + " sont des nombres premiers.");
      console.log("Leur somme est : " + (nombre1 + nombre2));
      return nombre1 + nombre2;
    } else {
      console.log(nombre1 + " et/ou " + nombre2 + " ne sont pas des nombres premiers.");
      return false;
    }
  }
  
  // Exemples d'utilisation
  console.log(sommeNombresPremiers(3, 5)); // Résultat attendu : 8
  console.log(sommeNombresPremiers(4, 7)); // Résultat attendu : false