const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>;

const addContainerListeners = (currentContainer: HTMLDivElement) => {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
    deleteBtnListeners(currentContainerDeletionBtn);
};

itemsContainer.forEach((container: HTMLDivElement) => {
    addContainerListeners(container);
});

const deleteBtnListeners = (btn: HTMLButtonElement) => {
    btn.addEventListener('click', handleContainerDeletion);
};

const handleContainerDeletion = (event: MouseEvent) => {
    const btn = event.target as HTMLButtonElement;
    const arrayBtn = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
    const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];
    containers[arrayBtn.indexOf(btn)].remove();
};
