import { helper } from '@ember/component/helper';

export function formatDate([value]) {
  format: "MM-DD-YYYY hh:mm a";
  return moment(value).format(format);
}

export default helper(formatDate);
