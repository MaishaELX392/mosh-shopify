document.addEventListener('DOMContentLoaded', () => {
  const optionCards = document.querySelectorAll('.variety-offer__option-card');
  const variantInput = document.querySelector('[data-variety-variant]');
  const sellingPlanInput = document.querySelector('[data-variety-selling-plan]');

  const updateSelectedOption = (card) => {
    if (!card) return;
    
    const variantId = card.getAttribute('data-variant-id') || '';
    const sellingPlanId = card.getAttribute('data-selling-plan') || '';

    if (variantInput) variantInput.value = variantId;
    if (sellingPlanInput) sellingPlanInput.value = sellingPlanId;
  };

  const defaultCard = document.querySelector('.variety-offer__option-card.is-selected');
  if (defaultCard) {
    updateSelectedOption(defaultCard);
  }

  optionCards.forEach((card) => {
    card.addEventListener('click', () => {
      optionCards.forEach((c) => c.classList.remove('is-selected'));
      
      const radio = card.querySelector('.variety-offer__radio');
      if (radio) {
        radio.checked = true;
        card.classList.add('is-selected');
      }

      updateSelectedOption(card);
    });
  });
});