// 검색창 요소(.serach)찾기
const serachEl = document.querySelector('.search');
const serachInputEl = serachEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
serachEl.addEventListener('click', function(){
    serachInputEl.focus();
});

// 검색창 input 요소에 포커스되면 작동
serachInputEl.addEventListener('focus' , function(){
    serachEl.classList.add('focused');
    serachInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 input 요소에 포커스 해제되면 작동
serachInputEl.addEventListener('blur' , function(){
    serachEl.classList.remove('focused');
    serachInputEl.setAttribute('placeholder','');
});