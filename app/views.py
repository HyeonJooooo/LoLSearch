from django.shortcuts import render, redirect
import requests

# Create your views here.

# 전적 검색
def home(request):
    return render(request, 'app/home.html')
def no_result(request):
    return render(request, 'app/no_result.html')

def search_result(request):
    if request.method == "GET":
        summoner_name = request.GET.get('search_text')
        summoner_exist = False
        sum_result = {}
        solo_tier = {}
        win = []
        deaths = []
        kills = []
        assists = []
        kda = []
        champion_data = {}
        champion_names = []
        solo_tier_korean = ''
        champion_ids = []
        api_key = 'RGAPI-79dbe176-bd2c-41bb-8cd3-07f21ded7da9'
        
        # 티어 이름 딕셔너리
        tier_names = {
            "IRON": "아이언",
            "BRONZE": "브론즈",
            "SILVER": "실버",
            "GOLD": "골드",
            "PLATINUM": "플래티넘",
            "EMERALD": "에메랄드",
            "DIAMOND": "다이아몬드",
            "MASTER": "마스터",
            "GRANDMASTER": "그랜드마스터",
            "CHALLENGER": "챌린저"
        }

        
        # 소환사 정보 검색
        tagLine = "KR1"
        summoner_url = f"https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{summoner_name}/{tagLine}?api_key={api_key}"
        params = {'api_key': api_key}
        res = requests.get(summoner_url, params=params)
        
        if res.status_code == requests.codes.ok:
            # 결과값이 정상적으로 반환되었을 때만 실행
            summoner_exist = True
            summoners_result = res.json()
            
            puuid = summoners_result.get('puuid')
            
            summoner_url_2 = f"https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/{puuid}?api_key={api_key}"
            puu_result = requests.get(summoner_url_2, params=params).json()
            
            # Debug: Check the content of puu_result
            print("PUU Result: ", puu_result)
            
            if puu_result:
                sum_result['name'] = summoners_result['gameName']
                sum_result['id'] = puu_result['id']
                sum_result['level'] = puu_result['summonerLevel']
                sum_result['profileIconId'] = puu_result['profileIconId']
                
                # 소환사 티어 검색
                tier_url = f"https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/{sum_result['id']}?api_key={api_key}"
                tier_info = requests.get(tier_url, params=params).json()
                
                for entry in tier_info:
                    if entry['queueType'] == 'RANKED_SOLO_5x5':
                        # 솔로랭크 티어 가져오기
                        solo_tier = {
                            'rank_type' : '솔로 랭크',
                            'tier' : entry['tier'],
                            'rank': entry['rank'],
                            'points': entry['leaguePoints'],
                            'wins': entry['wins'],
                            'losses': entry['losses']
                        }
                        solo_tier_korean = tier_names.get(solo_tier["tier"], solo_tier["tier"])
                        break
                
                
                # 랭크 경기 매치 아이디 가져오기 
                n = str(10)
                rank_url = f"https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?start=0&count={n}&api_key={api_key}"
                match_ids = requests.get(rank_url, params=params).json()
                
                for i in match_ids:
                    wdk_url = f"https://asia.api.riotgames.com/lol/match/v5/matches/{i}?api_key={api_key}"
                    game_info = requests.get(wdk_url, params=params).json()
                
                    info = game_info['info'] # 모든 정보에서 info만 추출
                    participants = info['participants'] # info 중에서도 participants데이터만 추출
                    
                    # 10명 중에서 puuid맞는 데이터 가져오기
                    for j in range(10):
                        if participants[j]['puuid'] == puuid:
                            win.append(participants[j]['win'])
                            deaths.append(participants[j]['deaths'])
                            kills.append(participants[j]['kills'])
                            assists.append(participants[j]['assists'])
                            kda.append(participants[j]['challenges']['kda'])
                            champion_data[i] = participants[j]['championId']
                            champion_ids.append(participants[j]['championId'])
                            break
                            
                
                 #  챔피언 아이디를 이름이랑 매핑
                champion_data_url = "http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json"
                champion_list = requests.get(champion_data_url, params=params).json()
                champion_id_to_name = {int(details['key']): name for name, details in champion_list['data'].items()}
                
                
                for match_id, champion_id in champion_data.items():
                    champion_names.append(champion_id_to_name.get(champion_id, "Unknown Champion"))
                        
                        
                match_data = zip(match_ids, champion_names, win, deaths, kills, assists, kda, champion_ids)
                
                
        
                return render(request, 'app/search_result.html', {
                    'summoner_exist': summoner_exist,
                    'summoners_result': sum_result,
                    'solo_tier': solo_tier,
                    'win': win,
                    'deaths' : deaths,
                    'kills' : kills,
                    'assists' : assists,
                    'kda' : kda,
                    'tier_names' : tier_names,
                    'solo_tier_korean': solo_tier_korean,
                    'champion_ids' : champion_ids,
                    'champion_names' : champion_names,
                    'match_data' : match_data
                })  
        else:
            # 소환사 이름이 존재하지 않는 경우
            return redirect('app:no_result')
        
    # 기본적으로 home으로 리다이렉트
    return redirect('app:home')