"use strict";
const itemsContainer = document.querySelectorAll('.items-container');
const addContainerListeners = (currentContainer) => {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    deleteBtnListeners(currentContainerDeletionBtn);
};
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
const deleteBtnListeners = (btn) => {
    btn.addEventListener('click', handleContainerDeletion);
};
const handleContainerDeletion = (event) => {
    const btn = event.target;
    const arrayBtn = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[arrayBtn.indexOf(btn)].remove();
};
