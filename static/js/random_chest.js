let selectedChampionName = '';

// 기본 URL 템플릿
const baseUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/';
const imageExtension = '.jpg';

// 무작위 url 만들기
function getRandomChampion() {
    var championList = ['riven', 'irelia', 'elise', 'ekko', 'yasuo'];
    var championList_KR = ['리븐', '이렐리아', '엘리스', '에코', '야스오'];

    var randomIndex = Math.floor(Math.random() * championList.length);
    var championName = championList[randomIndex];
    var championNameKR = championList_KR[randomIndex];

    // 전역 변수에 선택된 챔피언 이름 저장
    selectedChampionName = championName;

    // HTML 요소에 한국어 챔피언 이름 추가
    document.querySelector('.champion-name').textContent = championNameKR;

    return `${baseUrl}${championName}/skins/base/images/${championName}_splash_centered_0${imageExtension}`;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('open-btn').addEventListener('click', function() {
        var chest = document.getElementById('chest');
        var chestBack = document.getElementById('chest_back');

        // chest가 3초간 작아지는 애니메이션 추가
        chest.classList.add('shrink');

        // chest_back에 백그라운드 이미지를 honor_voting_selection_outro.png로 변경
        chestBack.style.backgroundImage = 'url(https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-honor/global/default/assets/honor_voting_selection_glow.png)';


        // 1초 후에 chest와 open-btn 숨기기
        setTimeout(function() {
            chest.classList.add('hidden');
            document.getElementById('open-btn').classList.add('hidden');
            document.getElementById('background').classList.add('hidden');

            // 챔피언 관련 요소들 보이기
            document.getElementById('champion-background').classList.remove('hidden');
            document.getElementById('random-champion').classList.remove('hidden');
            document.getElementById('container-skin').classList.remove('hidden');

            // 무작위 챔피언 이미지 설정
            const randomImageElement = document.getElementById('random-champion');
            randomImageElement.src = getRandomChampion();
        }, 1000);
    });
});

