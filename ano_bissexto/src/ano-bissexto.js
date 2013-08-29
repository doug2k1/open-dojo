function dividido4(ano){
    if (ano % 4 == 0){
      return true;
    }
  return false;
}

function dividido100(ano){
  if (ano % 100 == 0){
      return true;
  }
  return false;
}

function dividido400(ano){
  if(ano%400 == 0)  {
    return true;
  }
  return false;
}

function isBissexto(ano) {
  return (ano %400 == 0 || (ano%4 == 0 && ano%100 != 0))
  // if (dividido400(ano)){
  //   return true;
  // }
  // if( dividido4(ano) && !dividido100(ano)){
  //   return true;
  // }
  // return false;
}
