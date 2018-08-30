import { helper } from '@ember/component/helper';

export function stringArrayContains(params/*, hash*/) {
    let result=false;
  if(params!=null&&params.get(0)!=null&&params.get(0).length>0){
    params.get(0).forEach(function(item) {
      if(item==params.get(1)){
        result= true;
      }
    });
  }

return result;
}

export default helper(stringArrayContains);
