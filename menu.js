const form = document.querySelector('section.Formulario form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const telefone = document.querySelector('#telefone').value;
  const mensagem = document.querySelector('#mensagem').value;

  // Validation (Optional): You can add client-side validation here for basic checks like empty fields or email format.

  // Send the form data using a more secure method (explained below):
  fetch('/submit-form.php', { // Replace with your server-side script URL
    method: 'POST',
    body: new URLSearchParams({ // Create form data with URLSearchParams
      nome,
      email,
      telefone,
      mensagem,
    })
  })
  .then(response => {
    if (response.ok) {
      alert('Formulário enviado com sucesso!');
    } else {
      console.error('Erro ao enviar o formulário:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Erro inesperado:', error);
  });
});
