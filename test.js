// 1. HTML 요소들을 가져옵니다.
const modal = document.getElementById('modal');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// 2. [열기] 버튼을 눌렀을 때
openBtn.addEventListener('click', () => {
    // show()가 아니라 showModal()을 써야 배경이 어두워집니다.
    modal.showModal();
    console.log("모달이 열렸습니다!");
});

// 3. [닫기] 버튼을 눌렀을 때
closeBtn.addEventListener('click', () => {
    modal.close();
    console.log("모달이 닫혔습니다!");
});

// (선택사항) 모달 바깥 배경을 클릭했을 때 닫히게 하기
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});