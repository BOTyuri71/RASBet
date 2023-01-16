export async function getItem() {
  const value = await sessionStorage.getItem('userToken');
}
export async function setItem(value) {
  return sessionStorage.setItem('userToken', JSON.stringify(value));
}
export async function removeItem() {
  return sessionStorage.removeItem('userToken');
}