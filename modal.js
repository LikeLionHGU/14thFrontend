

function openModal(event) {

    const div= event.currentTarget;
    const modalId=div.innerText;
    const modal= document.getElementById(modalId);
    modal.showModal();
    // const x = event.currentTarget;
    // const x1 = x.innerText;
    // const modal=document.getElementById(x1);
    // modal.showModal();
}

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', closeModal);
});

function closeModal(event){
    const modal =event.target.closest('dialog');
    modal.close();
}


// function openModal(){
//     const a=btn.innerText;
//     console.log(a);
// }
// btn.addEventListener('onclick',ifonClick);

// openBtn.addEventListener('click', () => {
//     modal.showModal();
//     console.log("모달이 열렸습니다!");
// });
// closeBtn.addEventListener('click', () => {
//     modal.close();
//     console.log("모달이 닫혔습니다!");
// });

// modal.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.close();
//     }
// });