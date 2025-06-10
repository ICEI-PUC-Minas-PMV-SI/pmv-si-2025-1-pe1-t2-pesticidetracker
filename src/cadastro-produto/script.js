let usedPesticides = []
let mercados = []


const loadJSON = async() => {
    try {
        const response = await fetch('../db/db.json'); // Adjust the path as necessary
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const pesticidas = await response.json(); // Parse JSON data
        const pesticidasNomes = Object.keys(pesticidas)

        const datalist = document.getElementById('pesticidas')
        pesticidasNomes.forEach((pesticida)=>{
            const option = document.createElement('option')
            option.value = pesticida
            datalist.appendChild(option)
        })

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
loadJSON()


const pesticideInput = document.getElementById('pesticidasInput')
const addPesticide = document.getElementById('button-adicionar-pesticida')
const usedPesticidesElement = document.getElementById('usedPesticides')

addPesticide.addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log(pesticideInput.value)

    const currentValue = pesticideInput.value;

    if (currentValue.trim() !== '') {
        usedPesticides.push(currentValue);

        pesticideInput.value = '';
        const newPesticide = document.createElement('span');
        newPesticide.textContent = currentValue
        usedPesticidesElement.appendChild(newPesticide)
        
        console.log(usedPesticides);
    } else {
        alert('Por favor, escreva o nome do pesticida.'); // Alert if input is empty
    }
    
});

const mercadoInput = document.getElementById('mercadosInput')
const addMercado = document.getElementById('button-adicionar-mercado')
const addedMercadosElement = document.getElementById('mercadosAdicionados')

addMercado.addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log(mercadoInput.value)

    const currentValue = mercadoInput.value;

    if (currentValue.trim() !== '') {
        mercados.push(currentValue);

        mercadoInput.value = '';

        const newMercado = document.createElement('span');
        newMercado.textContent = currentValue
        addedMercadosElement.appendChild(newMercado)

    } else {
        alert('Por favor, escreva o nome do mercado.'); // Alert if input is empty
    }
    
});

const botaoAdicionarProduto = document.getElementById('botaoAdicionarPorduto')

botaoAdicionarProduto.addEventListener('click', (event) => {
    event.preventDefault(); 
    const nomeElement = document.getElementById('produto')
    const dataPlantioElement = document.getElementById('dataPlantio')
    const dataColheitaElement = document.getElementById('dataColheita')
    const id = Date.now()

    const list = localStorage.getItem("produtos")
        ? JSON.parse(localStorage.getItem("produtos"))
        : [];

    list.push({    
        id,
        nome: nomeElement.value,
        dataPlantio: dataPlantioElement.value,
        dataColheita: dataColheitaElement.value,
        pesticidas: usedPesticides,
        mercados: mercados
    })

    localStorage.setItem("produtos", JSON.stringify(list));
    
    
    nomeElement.value = ''
    dataPlantioElement.value = ''
    dataColheitaElement.value = ''
    mercados = []
    usedPesticides = [] 
    usedPesticidesElement.innerHTML = ''
    addedMercadosElement.innerHTML = ''
})