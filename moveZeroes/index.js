/**
 * @param {number[]} nums
 * @return {void} Não retorna nada, modifica o array localmente
 */
var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0; // ponteiro para o último número não zero encontrado

  // Primeiro loop: move todos os números não zero para o início do array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i]; // coloca o número na posição do último não zero encontrado
      lastNonZeroFoundAt++; // incrementa o ponteiro
    }
  }
  // Preenche o restante do array com zeros
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }

  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]
moveZeroes([0]); // [0]
