/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  Rechercher si une recette appartient à l'utilisateur connecté
 * @param {Array} trainings - les trainings utilisateur
 * @param {string} searchedId - le slug du training affiché
 * @return {Object} - Le training trouvée
 */
export function isMineTraining(trainings, searchedId) {
    const training = trainings.find((testedTraining) => (testedTraining.id === searchedId));
    
    if (training !== undefined) return true;
    return false;
}
  