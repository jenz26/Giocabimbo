export const printActivity = (activity) => {
    const content = `
      <h1>${activity.title}</h1>
      <p>${activity.description.replace(/\n/g, '<br/>')}</p>
      <h3>Materiali Necessari:</h3>
      <ul>${activity.materials.map(m => `<li>${m}</li>`).join('')}</ul>
      <h3>Benefici Educativi:</h3>
      <ul>${activity.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
      <h3>Categorie:</h3>
      <ul>${activity.category.map(c => `<li>${c}</li>`).join('')}</ul>
    `;
    const win = window.open('', '', 'height=700,width=800');
    win.document.write('<html><head><title>Stampa Attività</title></head><body>');
    win.document.write(content);
    win.document.write('</body></html>');
    win.document.close();
    win.print();
  };
  