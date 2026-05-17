/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

  
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }
  
  // Если время не передали (забыли таймер)
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  }
  
  // Во всех остальных случаях (если число больше 0)
  return 'Not done, please wait.';
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
  
}
export function quantities(layers) {
  let noodleCount = 0;
  let sauceCount = 0;

  for (const layer of layers) {
    if (layer === 'noodles'){
      noodleCount += 50;
    } else if (layer === 'sauce') {
      sauceCount += 0.2;
    }
  }
  return {
    noodles: noodleCount,
    sauce: sauceCount
  }
}
  export function addSecretIngredient(friendsList, myList) {
    const secret = friendsList[friendsList.length -1];
    myList.push(secret);
  }
    export function scaleRecipe(recipe,portions ) {
      const scaled = {...recipe};

      const factor = portions / 2;
      for(const ingredient in scaled) {
        scaled[ingredient] *=factor;
      }
      return scaled
    }