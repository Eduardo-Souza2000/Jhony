// código para exibir o ícone do WhatsApp flutuante
const btnWhatsapp = document.querySelector('.btn-whatsapp');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    btnWhatsapp.classList.add('show');
  } else {
    btnWhatsapp.classList.remove('show');
  }
});

