const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>;

function addContainerListeners(currentContainer: HTMLDivElement) {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
    deleteBtnListeners(currentContainerDeletionBtn);
}

itemsContainer.forEach((container: HTMLDivElement) => {
    addContainerListeners(container);
});

function deleteBtnListeners(btn: HTMLButtonElement) {
    btn.addEventListener('click', handleContainerDeletion);
}

function handleContainerDeletion(event: MouseEvent) {
    const btn = event.target as HTMLButtonElement;
    const arrayBtns = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
    const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];
    containers[arrayBtns.indexOf(btn)].remove();
}
