import { helper } from '@ember/component/helper';

export function arrayContains(params) {
  let result=false;
  params.get(0).forEach(function(item) {
    if(item==params.get(1)){
      result= true;
    }
  });
  return result;
}

export default helper(arrayContains);
