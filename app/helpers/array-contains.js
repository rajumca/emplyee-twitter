import { helper } from '@ember/component/helper';

export function arrayContains(params) {
  
    let result=false;
    if(params!=null&&params.get(0)!=null){
      params.get(0).forEach(function(item) {
        if(item.userName==params.get(1)){
          result= true;
        }
      });
    }

  return result;
}

export default helper(arrayContains);
