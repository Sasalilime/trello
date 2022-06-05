"use strict";
const itemsContainer = document.querySelectorAll('.items-container');
let actualContainer, actualBtn, actualTextInput, actualForm, actualValidation, actualUl;
function addContainerListeners(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    deleteBtnListeners(currentContainerDeletionBtn);
}
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion);
}
function handleContainerDeletion(event) {
    const btn = event.target;
    const arrayBtns = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[arrayBtns.indexOf(btn)].remove();
}
