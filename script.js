JavaScript
function openModals() {
    const container = document.getElementById('popup-container');
    const count = 36; 
    const modals = [];

    // 변경된 창 크기(320x140) 기준으로 화면 중앙 좌표 설정
    const startX = 10; // 왼쪽 구석에서 10px 띄우기
    const startY = 10; // 위쪽 구석에서 10px 띄우기

    for (let index = 0; index < count; index++) {
        setTimeout(() => {
            const modal = document.createElement('div');
            modal.className = 'mini-modal';
            
            // 이미지처럼 계단식으로 따다닥 겹치게 설정
            modal.style.left = `${startX + (index * 25)}px`;
            modal.style.top = `${startY + (index * 25)}px`;

            modal.innerHTML = `
                <div class="modal-header">
                    <span>Invalid File</span>
                    <span class="modal-close-x" onclick="this.closest('.mini-modal').remove()">✕</span>
                </div>
                <div class="modal-body">
                    <div class="modal-icon">!</div>
                    <div class="modal-text">File not found. (Code: C7358)</div>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn" onclick="this.closest('.mini-modal').remove()">OK</button>
                </div>
            `;

            container.appendChild(modal);
            modals.push(modal);

                if (index === count - 1) {
                setTimeout(() => {
                    modals.forEach(m => { 
                        if (m) {
                            // 1단계: 모든 모달창에 'fade-out' 스타일을 주어 스르륵 투명하게 만듭니다.
                            m.classList.add('fade-out');
                            
                            // 2단계: 애니메이션 시간(0.5초 = 500ms)이 지난 후에 화면에서 완전히 삭제합니다.
                            setTimeout(() => { m.remove(); }, 100);
                        } 
                    });
                }, 50); // 5초 대기
            }
        }, index * 50);
    }
}