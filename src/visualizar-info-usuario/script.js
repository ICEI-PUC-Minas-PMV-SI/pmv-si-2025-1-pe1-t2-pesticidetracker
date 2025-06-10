"use strict";

const user = JSON.parse(localStorage.getItem('user'));

const updateField = (elementId, value) => {
    const element = document.querySelector(`#${elementId}`);
    if (element) {
        element.textContent = value || 'Não informado';
    }
};
/*Atualizado*/
if (user) {
    updateField('nome', user.nome);
    updateField('sobrenome', user.sobrenome);
    updateField('email', user.email);
    updateField('celular', user.tel);
} else {
    updateField('nome', 'Não informado');
    updateField('sobrenome', 'Não informado');
    updateField('email', 'Não informado');
    updateField('celular', 'Não informado');
}