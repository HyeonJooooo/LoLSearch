# 🏆 LEAGUE of LEGENDS 전적 검색 사이트 · 스킨 뽑기 🏆
<br>

### ⚡ 전적 검색


https://github.com/user-attachments/assets/0d998132-f38d-40c9-ab4c-8a8de3ad6982

<br>

### ⚡ 스킨 뽑기

https://github.com/user-attachments/assets/cbab0bb8-367f-4c4c-8955-6a3f065ee492


<br>

## 🔍 프로젝트 소개
이 프로젝트는 Python과 Django를 사용하여 Riot Games API를 통해 리그 오브 레전드(LoL) 플레이어의 게임 전적을 검색하고 챔피언을 뽑고 뽑은 챔피언의 스킨을 랜덤으로 5개 뽑을 수 있는 웹 애플리케이션입니다. 사용자는 소환사 이름을 입력하여 전적을 조회할 수 있고, 특정 랜덤한 스킨을 확인할 수 있습니다.  

<br>

## 🔧 기술 스택
- **백엔드**: Python, Django
- **API**: Riot Games API
- **데이터베이스**: SQLite (개발 환경 기준)
- **프론트엔드**: HTML, CSS, JavaScript (필요에 따라 추가적인 프레임워크 사용 가능)
<br>

## 📚 기능 설명
1. **소환사 전적 검색**
   - 소환사 이름을 입력하여 해당 플레이어의 전적을 조회합니다.
   - 소환사 티어(레벨, 아이콘)을 제공합니다.
   - 게임 통계 (승/패, KDA, 게임 모드 등)를 제공합니다.

2. **챔피언 스킨 뽑기**
   - 마법공학 상자를 사용해서 5명의 챔피언(리븐/이렐리아/엘리스/에코/야스오) 중 하나의 챔피언을 뽑습니다.
   - 챔피언 이미지와 이름을 제공합니다.
   - 뽑은 챔피언의 랜덤한 스킨 5개를 카드를 뒤집어서 뽑을 수 있다.
<br>

## 🖼️ 실행 이미지

#### 1. 메인 화면
<img src="https://github.com/user-attachments/assets/e43958ad-ea78-4fa6-967a-7a8e685a465d" alt="메인 화면" style="vertical-align: top;" />

#### 2. 전적 검색
<img src="https://github.com/user-attachments/assets/b94b1077-8df7-4b7b-8cdc-dcf2fbac1691" alt="전적 검색" style="vertical-align: top;" />

#### 3. 스킨 뽑기
<img src="https://github.com/user-attachments/assets/e339bbbc-10b6-43f9-93ca-b7a44754d694" alt="스킨 뽑기" style="vertical-align: top;" />

<br>

## 🗂️ 프로젝트 구조
```plaintext
📂C:.
├─📂app
│  ├─migrations
│  │  └─ ...
│  ├─templates
│  │  └─app
│  │     ├─home.html
│  │     ├─no_result.html
│  │     └─search_result.html
│  └─__pycache__
├─📂myvenv
│  ├─Include
│  ├─Lib
│  └─Scripts
├─📂pythonProject
│  └─ ...
└─📂static
    ├─css
    ├─images
    │  ├─banner
    │  ├─chest-effect
    │  └─ranked-emblem
    │      ├─tier
    │      ├─tier_icon
    │      ├─trim
    │      └─wings
    └─js
```

<br>

## 📞 문의
- **Email**: la0503ab@naver.com
- **GitHub Issues**: 프로젝트 관련 문제나 제안사항은 [Issues](https://github.com/lolsearch-0712/Python-LoLSearch/issues)에 남겨주세요.

