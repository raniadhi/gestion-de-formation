// navigation.js
function navigate(page) {
  // Redirige vers la page HTML correspondante en minuscule
  const url = page.toLowerCase() + '.html';
  window.location.href = url;
}
