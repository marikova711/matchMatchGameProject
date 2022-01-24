export function chooseEasyLevel(){
    return {
      type: 'EASY_LEVEL'
    }
  }

export function chooseMiddleLevel(){
    return {
      type: 'MIDDLE_LEVEL'
    }
  }

export function chooseHardLevel(){
    return {
      type: 'HARD_LEVEL'
    }
  }

  export function setCurrentCardBack(cardback){
    return {
      type: 'SET_CURRENT_CARDBACK',
      payload: cardback
    }
  }
