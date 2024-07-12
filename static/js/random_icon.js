// 기본 URL 템플릿
const baseUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/';
const imageExtension = '.png';

// 무작위로 110부터 200 사이의 숫자를 선택
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 무작위 이미지 URL 생성
function getRandomImageUrl() {
    const randomNumber = getRandomNumber(1, 45);
    return `${baseUrl}${randomNumber}${imageExtension}`;
}

// 선택된 이미지를 img 태그에 설정
document.addEventListener('DOMContentLoaded', function() {
    const randomImageElement = document.getElementById('random-image');
    randomImageElement.src = getRandomImageUrl();
});
