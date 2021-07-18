function config({ page }) {
  if (page === 'landing' || page === 'login') {
    return true;
  }
  return false;
}
