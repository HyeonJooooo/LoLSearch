var championSkins = {
    riven: ['01','02','03','04','05','06','07','16','18','20','22','23','34','44','45','55','63'],
    irelia: ['01','02','03','04','05','06','15','16','17','18','26','36','37','45'],
    elise: ['01','02','03','04','05','06','15','24'],
    ekko: ['01','02','03','11','12','19','28','36','45','46','56'],
    yasuo: ['01','02','03','09','10','17','18','35','36','45','54','55','56','57','68']
};

document.querySelectorAll('.image-container').forEach(function(container) {
    container.addEventListener('click', function clickHandler() {
        const foreground = container.querySelector('.foreground-image');
        foreground.src = 'https://raw.communitydragon.org/pbe/plugins/rcp-fe-lol-static-assets/global/default/po-offer-card-back.png';
        foreground.classList.add('shrink');

        setTimeout(function() {
            foreground.classList.remove('shrink');
            foreground.src = 'https://raw.communitydragon.org/pbe/plugins/rcp-fe-lol-static-assets/global/default/po-offer-card-front.png';


            // 선택된 챔피언의 스킨 리스트 가져오기
            var skinList = championSkins[selectedChampionName];

            // 랜덤으로 인덱스 선택
            var randomIndex = Math.floor(Math.random() * skinList.length);

            // 선택된 스킨
            var selectedSkin = skinList[randomIndex];

            // 선택된 스킨을 skinList 배열에서 제거
            skinList.splice(randomIndex, 1);



            // 두 가지 형식으로 숫자를 분리
            var selectedSkinWithLeadingZero = selectedSkin;
            var selectedSkinWithoutLeadingZero = parseInt(selectedSkin).toString();

            const background = document.createElement('img');
            background.src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${selectedChampionName}/skins/skin${selectedSkinWithLeadingZero}/${selectedChampionName}loadscreen_${selectedSkinWithoutLeadingZero}.jpg`;
            background.className = 'background-image';
            container.insertBefore(background, foreground);

            // 클릭 이벤트 리스너 제거
            container.removeEventListener('click', clickHandler);

        }, 1500);
    });
});
