export async function getItem() {
  const value = await localStorage.getItem('userToken');
}
export async function setItem(value) {
  return localStorage.setItem('userToken', JSON.stringify(value));
}
export async function removeItem() {
  return localStorage.removeItem('userToken');
}