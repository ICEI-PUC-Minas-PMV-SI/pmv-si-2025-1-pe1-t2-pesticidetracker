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
  setTimeout(() => alertDiv.remove(), 5000);
}

document.addEventListener('DOMContentLoaded', () => {
 
 const currentUrl = window.location.href;

  const url = new URL(currentUrl);

  const params = new URLSearchParams(url.search);

  const pesticideName =  params.get('pesticida'); // Placeholder for dynamic pesticide name
  // Obter dados de db.json
  fetch('../db/db.json')
    .then(response => response.json())
    .then(data => {
      const pesticide = data[pesticideName];
      if (pesticide) {
        // Populate the fields with data from db.json
        document.getElementById('nomeComum').textContent = `${pesticide.ptBrName} (${pesticide.enName})`;
        document.getElementById('nomeQuimico').textContent = pesticide.nome_químico;
        document.getElementById('grupoQuimico').textContent = pesticide.grupo_químico;
        document.getElementById('classe').textContent = pesticide.classe;
        document.getElementById('formulaBruta').textContent = pesticide.fórmula_bruta;
        document.getElementById('aprovadoEm').textContent = pesticide.aprovadoEm.join(', ');

      
        const monitorButton = document.querySelector('.page-detalhamento-pesticida__btn');
        monitorButton.addEventListener('click', () => {
          const pesticideData = {
            nomecomum: `${pesticide.ptBrName} (${pesticide.enName})`,
            nomequímico: pesticide.nome_químico,
            grupo: pesticide.grupo_químico,
            classe: pesticide.classe,
            formula: pesticide.fórmula_bruta,
            aprovado: pesticide.aprovadoEm.join(', '),
            banido: pesticide.banidoEm || 'Não especificado'
          };

          try {
            let pesticidasMonitorados = JSON.parse(localStorage.getItem('pesticidasMonitorados')) || [];
            if (!Array.isArray(pesticidasMonitorados)) pesticidasMonitorados = [];
            if (!pesticidasMonitorados.some(p => p.nomecomum === pesticideData.nomecomum)) {
              pesticidasMonitorados.push(pesticideData);
              localStorage.setItem('pesticidasMonitorados', JSON.stringify(pesticidasMonitorados));
              showAlert('Pesticida adicionado aos monitorados!', true);
            } else {
              showAlert('Pesticida já está sendo monitorado!', false);
            }
          } catch (e) {
            showAlert('Erro ao adicionar. Tente novamente!', false);
          }
        });
      } else {
        showAlert('Pesticida não encontrado!', false);
      }
    })
    .catch(error => {
      console.error('Error fetching db.json:', error);
      showAlert('Erro ao carregar os dados do pesticida!', false);
    });
});