

function openModal(event) {

    const modalName= event.currentTarget.className;
    console.log(modalName);
    const modal= document.getElementById(modalName);
    modal.showModal();
}

document.querySelectorAll('.X-btn').forEach(btn => {
    btn.addEventListener('click', closeModal);
});

function closeModal(event){
    const modal =event.target.closest('dialog');
    modal.close();
}

