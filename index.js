function config({ page }) {
  return ['landing', 'login'].includes(page) && NODE_ENV !== 'development';
}
