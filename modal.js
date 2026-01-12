

function openModal(event) {

    const div= event.currentTarget;
    const modalId=div.innerText;
    const modal= document.getElementById(modalId);
    modal.showModal();
}

document.querySelectorAll('.X-btn').forEach(btn => {
    btn.addEventListener('click', closeModal);
});

function closeModal(event){
    const modal =event.target.closest('dialog');
    modal.close();
}

