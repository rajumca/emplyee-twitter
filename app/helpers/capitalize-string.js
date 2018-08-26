import { helper } from '@ember/component/helper';

export function capitalizeString([value]) {
  let capitalString="";
  for(let i=0;i<value.length;i++){
    capitalString+=(value.charAt(i)+"").toUpperCase();
  }
  return capitalString;
}

export default helper(capitalizeString);
