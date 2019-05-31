import cuid from 'cuid';

const callApi = (id = '') => {
  const currentId = cuid();
  console.log('cuid ##', currentId);
  return currentId;
}
;


export default callApi
;
