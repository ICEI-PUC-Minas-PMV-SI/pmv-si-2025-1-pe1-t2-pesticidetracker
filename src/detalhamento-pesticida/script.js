function showAlert(message, isSuccess) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert ${isSuccess ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`;
  alertDiv.style.position = 'fixed';
  alertDiv.style.top = '20px';
  alertDiv.style.left = '50%';
  alertDiv.style.transform = 'translateX(-50%)';
  alertDiv.style.zIndex = '1000';
  alertDiv.innerHTML = `
    <strong>${message}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  document.body.appendChild(alertDiv);
  setTimeout(() => alertDiv.remove(), 5000); // Remove alert after 5 seconds
}

document.addEventListener('DOMContentLoaded', () => {
  const monitorButton = document.querySelector('.page-detalhamento-pesticida__btn');
  monitorButton.addEventListener('click', () => {
    const pesticide = {
      nomecomum: 'Acefato (Acephate)',
      nomequímico: 'O,S-dimethyl acetylphosphoramidothioate',
      group: 'Organofosforado',
      classe: 'Inseticida e acaricida',
      formula: 'C4H10NO3PS',
      aprovado: 'Brasil, Estados Unidos, Canadá e Japão',
      banido: 'União Europeia'
    };

    try {
      let pesticidasMonitorados = JSON.parse(localStorage.getItem('pesticidasMonitorados')) || [];
      if (!Array.isArray(pesticidasMonitorados)) pesticidasMonitorados = [];
      if (!pesticidasMonitorados.some(p => p.name === pesticide.name)) {
        pesticidasMonitorados.push(pesticide);
        localStorage.setItem('pesticidasMonitorados', JSON.stringify(pesticidasMonitorados));
        showAlert('Pesticida adicionado aos monitorados!', true);
      } else {
        showAlert('Pesticida já está sendo monitorado!', false);
      }
    } catch (e) {
      showAlert('Erro ao adicionar. Tente novamente!', false);
    }
  });
});