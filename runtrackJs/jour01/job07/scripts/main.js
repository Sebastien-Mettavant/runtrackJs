function workDay(date) {
    var year = date.getFullYear(); // Récupère l'année
    var month = date.getMonth() + 1; // Les mois vont de 0 à 11, donc on ajoute 1
    var day = date.getDate(); // Récupère le jour du mois
    var dayOfWeek = date.getDay(); // Récupère le jour de la semaine (0 pour dimanche, 1 pour lundi, etc.)
  
    // Liste des jours fériés en 2022
    var holidays = [];
   
    var dateString = day + "/" + month + "/" + year; // Crée une chaîne de caractères pour la date au format jour/mois/année
  
    var isHoliday = holidays.includes(year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2));
    var isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    var isWorkDay = !isHoliday && !isWeekend;
  
    return {
      dateString: dateString,
      isHoliday: isHoliday,
      isWeekend: isWeekend,
      isWorkDay: isWorkDay
    };
  }
  
  var myDate1 = new Date("2022-01-01");
  var myDate2 = new Date("2022-06-09");
  var myDate3 = new Date("2022-06-25");
  
  console.log(workDay(myDate1)); // Appel de la fonction avec la première date spécifiée
  console.log(workDay(myDate2)); // Appel de la fonction avec la deuxième date spécifiée
  console.log(workDay(myDate3)); // Appel de la fonction avec la troisième date spécifiée