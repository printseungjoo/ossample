const mongoose = require("mongoose");
const categoryModel = require('./models/category');
const optionModel = require('./models/option');

// const MONGO_URI = "mongodb+srv://outstanding:osforsunystudent2025@outstandingspots.xbewg.mongodb.net/?retryWrites=true&w=majority&appName=outstandingspots";
const MONGO_URI = "mongodb://localhost:27017/places"
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB 연결 성공"))
  .catch(err => console.error("MongoDB 연결 실패:", err));

function createCategory(categoryObj){
    let newCategory = new categoryModel({
        name:categoryObj.name
    });
    return newCategory.save();
}

function createOption(optionObj){
    let newOption = new optionModel({
        photo:optionObj.photo,
        category:optionObj.category,
        name:optionObj.name,
        name2:optionObj.name2,
        naverMap:optionObj.naverMap,
        lat:optionObj.lat,
        lon:optionObj.lon,
        discount:optionObj.discount,
        etc:optionObj.etc
    });
    return newOption.save();
}

async function categoryData() {
    const category = [
        '놀거리', '음식점', '음료 및 디저트', '술집', '전자담배',
        '네일샵 및 헤어샵', '헬스장 및 필라테스', '서점', '공유모빌리티',
        '안경 및 렌즈', '스파&마사지', '병원'
    ];

    for(const name of category){
        await createCategory({name:name});
    }
}

async function optionData(){
    const option = [
        {
            photo:'/images/호랭이곳간 본점.png',
            category:'음식점',
            name:'호랭이곳간',
            name2:'본점',
            naverMap:'https://naver.me/xFprPwWK',
            lat:'37.379501',
            lon:'126.661170',
            discount:'10% 할인',
            etc:'없음'
        },
        {
            photo:'/images/머노까머나 트리플스트리트 2호점.png',
            category:'음식점',
            name:'머노까머나',
            name2:'트리플스트리트 2호점',
            naverMap:'https://naver.me/FpXMX885',
            lat:'37.379757',
            lon:'126.660962',
            discount:'10% 할인',
            etc:'없음'
        },
        // {
        //     category:'음식점',
        //     name:'버커스 프롬 오스틴',
        //     name2:'',
        //     naverMap:'https://naver.me/5vYZuHcX',
        //     lat:'',
        //     lon:'',
        //     discount:'15% 할인',
        //     etc:''
        // },
        // {
        //     category:'음식점',
        //     name:'포플러스한우쌀국수',
        //     name2:'본점',
        //     naverMap:'https://naver.me/xl8i443K',
        //     lat:'',
        //     lon:'',
        //     discount:'10% 할인,하루 전에 8명 이상 예약 후 방문시 추가 서비스 증정',
        //     etc:''
        // },
        {
            photo:'/images/샤오바오우육면 송도점.png',
            category:'음식점',
            name:'샤오바오우육면',
            name2:'송도점',
            naverMap:'https://naver.me/5wmOtZQy',
            lat:'37.379818',
            lon:'126.661293',
            discount:'[OUTSTANDING 단독 혜택]2만원 이상 주문 시: 샤오롱바오 증정 (단, 평일 오후 2시~마감시까지만 가능, 주말 공휴일 제외)',
            etc:'없음'
        },
        {
            photo:'/images/플래터세븐 본점.png',
            category:'음식점',
            name:'플래터세븐',
            name2:'본점',
            naverMap:'https://naver.me/5uxc5Vmg',
            lat:'37.380163',
            lon:'126.661359',
            discount:'2인당 음료 1개 증정',
            etc:'없음'
        },
        {
            photo:'/images/정씨함박 송도점.png',
            category:'음식점',
            name:'정씨함박',
            name2:'송도점',
            naverMap:'https://naver.me/5JJQ6V6e',
            lat:'37.381055',
            lon:'126.660009',
            discount:'2인당 음료 1개 증정',
            etc:'없음'
        },
        // {
        //     category:'음식점',
        //     name:'고기싸롱',
        //     name2:'송도트리플스트리트점',
        //     naverMap:'https://naver.me/F2i3MsPJ',
        //     lat:'',
        //     lon:'',
        //     discount:'1인당 음료 1개 증정',
        //     etc:''
        // },
        {
            photo:'/images/카사 데 타코 송도점.png',
            category:'음식점',
            name:'카사 데 타코',
            name2:'송도점',
            naverMap:'https://m.place.naver.com/share?id=1401862517&tabsPath=%2Fhome&appMode=detail',
            lat:'37.382530',
            lon:'126.660555',
            discount:'10% 할인',
            etc:'없음'
        },
        {
            photo:'/images/뽁식당 트리플스트리트점.png',
            category:'음식점',
            name:'뽁식당',
            name2:'트리플스트리트점',
            naverMap:'https://naver.me/Ggush8C3',
            lat:'37.380168',
            lon:'126.661137',
            discount:'10% 할인',
            etc:'없음'
        },
        {
            photo:'/images/정성순대 송도점.png',
            category:'음식점',
            name:'정성순대',
            name2:'송도점',
            naverMap:'https://naver.me/5vcABO65',
            lat:'37.381841',
            lon:'126.662479',
            discount:'국밥류 2천원 할인(1인당),주류 인당 2천원 할인(인원수와 동일하게 주문시), 전골 주문시 소주 맥주 3천원',
            etc:'없음'
        },
        {
            photo:'/images/에비슈라 송도점.png',
            category:'음식점',
            name:'에비슈라',
            name2:'송도점',
            naverMap:'https://naver.me/FzIKcS4A',
            lat:'37.380939',
            lon:'126.656466',
            discount:'평일 런치 30,000원, 평일 디너 10% 할인, 주말/공휴일 10% 할인',
            etc:'없음'
        },
        // {
        //     category:'음식점',
        //     name:'Poke all day 포케 & 샐러드',
        //     name2:'송도트리플타워점',
        //     naverMap:'https://naver.me/5c2tTcXK',
        //     lat:'',
        //     lon:'',
        //     discount:'음료 or 토핑 중 택1',
        //     etc:'음료 종류:제로콜라,제로사이다, 토핑:옥수수 추가, 게살 추가, 어니언후레이크 추가, 해초샐러드 추가:단호박무스 추가, 새우 2마리 추가, 초계란말이 추가:구운버섯 추가, 닭가슴살 1스쿱'
        // },
        // {
        //     category:'음식점',
        //     name:'채궁',
        //     name2:'',
        //     naverMap:'https://naver.me/xtgFP6yP',
        //     lat:'',
        //     lon:'',
        //     discount:'상시 5% 할인, 5인 이상 단체 식사 시 10% 할인, 점심특선(11시 반 ~ 2시 반) 탕류 전메뉴+돈까스 10% 할인',
        //     etc:'점심특선은 10월 21일부터 시행'
        // }
        {
            photo:'/images/하이피 네일.png',
            category:'네일샵 및 헤어샵',
            name:'하이피 네일',
            name2:'본점',
            naverMap:'https://naver.me/GPXRwdh6',
            lat:'37.380830',
            lon:'126.664770',
            discount:'10% 할인',
            etc:'없음'
        },
        {
            photo:'/images/준오헤어 송도홈플러스점.png',
            category:'네일샵 및 헤어샵',
            name:'준오헤어',
            name2:'송도홈플러스점',
            naverMap:'https://naver.me/56IfilyP',
            lat:'37.3825420',
            lon:'126.6569805',
            discount:'펌/염색/커트/케어/스타일링 15% 상시 할인',
            etc:'OUTSTANDING 단독, 준오헤어 전지점 최초'
        },
        // {
        //     category:'공유모빌리티',
        //     name:'지쿠 GCOO',
        //     name2:'',
        //     naverMap:'위치 없음',
        //     lat:'',
        //     lon:'',
        //     discount:'15% 상시 할인 쿠폰 발급[국내 스타트업 최초]',
        //     etc:'15% 상시 할인 쿠폰을 지급받기 위해서는 지쿠에 회원가입을 진행해주시고 학교 계정 인증을 하셔야 합니다!➡️자주 묻는 질문 1. 이미 학교 계정 인증이 완료되었으면 다시 할 필요 없죠? - 네 그렇습니다! 2. 송도에서만 쿠폰을 사용할 수 있나요? - 아니요 지쿠가 지원하는 전 지역 전부 사용 가능합니다! 3. 추가 문의사항이 생기면 어디로 문의하면 되나요? - 아래 OUTSTANDING 24시 카카오톡 상담 채널로 문의 부탁드립니다! http://pf.kakao.com/_EyprG 4. 쿠폰 지급은 언제부터 가능한가요? - 학교 인증을 하신 후 빠르면 당일, 늦어도 2주 이내에는 지급이 가능합니다!'
        // },
        {
            photo:'/images/교보문구 송도점.png',
            category:'공유모빌리티',
            name:'교보문구',
            name2:'송도점',
            naverMap:'https://naver.me/GGhCmwPV',
            lat:'37.3833682',
            lon:'126.6590422',
            discount:'전 품목 10% 할인',
            etc:'일부 할인 제외 품목: PB, POD, 잡지, 대학교재, 교과서, 일부 기타도서, 디지털 상품, 할인가로 판매 중인 상품, 타 할인쿠폰 및 증정 행사와 중복 할인 불가'
        },
        // {
        //     category:'헬스장',
        //     name:'팀윤짐 PT(나눠서 결제 시)',
        //     name2:'송도 5호점',
        //     naverMap:'https://naver.me/GBfvUgYJ',
        //     lat:'',
        //     lon:'',
        //     discount:'첫 PT 10회 50만원, 두 번째 PT 10회 40만원, 세 번째 PT 10회 40만원 + 다음 달까지 헬스장 무료 이용 (10회 단위로 그만하고 싶으면 더 이상 결제 안 하고 중단 가능',
        //     etc:'24시 연중무휴 매장, PT는 10회 단위로만 등록 가능, 헬스장이 작기 때문에 헬스장 이용권, PT 둘 다 각각 선착순의 인원 수만 등록 가능, PT 진행시 헬스장 이용권은 당연히 무료, 가격은 현금가 기준, 카드 결제 시 수수료 발생'
        // },
        // {
        //     category:'헬스장',
        //     name:'팀윤짐 PT(한 번에 결제 시)',
        //     name2:'송도 5호점',
        //     naverMap:'https://naver.me/GBfvUgYJ',
        //     lat:'',
        //     lon:'',
        //     discount:'PT 30회 120만원 (회당 4만원) + 약 4달 헬스장 이용권',
        //     etc:'24시 연중무휴 매장, PT는 10회 단위로만 등록 가능, 헬스장이 작기 때문에 헬스장 이용권, PT 둘 다 각각 선착순의 인원 수만 등록 가능, PT 진행시 헬스장 이용권은 당연히 무료, 가격은 현금가 기준, 카드 결제 시 수수료 발생'
        // },
        {
            photo:'/images/바디클리닉필라테스 송도 전 지점.png',
            category:'헬스장',
            name:'바디클리닉필라테스',
            name2:'송도 전 지점',
            naverMap:'https://link.inpock.co.kr/bodyclinic',
            lat:'37.3858530',
            lon:'126.6419395',
            discount:'그룹등록시:추가 3회 무료 제공, 개인듀엣 등록시:오후 6시 이전 등록:15% 할인 또는 추가 1회 무료 제공, 오후 6시 이후 등록: 10% 할인 또는 추가 1회 무료 제공, 젝시믹스 레깅스 무료 증정, 인바디 & 체형 분석 무료 제공',
            etc:'없음'
        },
        // {
        //     category:'전자담배',
        //     name:'베이피움',
        //     name2:'송도점',
        //     naverMap:'https://naver.me/5Ya0GWpr',
        //     lat:'',
        //     lon:'',
        //     discount:'기기 제외 만원 이상 구매시 8% 할인',
        //     etc:'전자담배 기기 제외, 만원 이상 구매시!'
        // },
        {
            photo:'/images/베이프베이프 전자담배 송도점.png',
            category:'전자담배',
            name:'베이프베이프 전자담배',
            name2:'송도점',
            naverMap:'https://naver.me/FhynnEoY',
            lat:'37.3801774',
            lon:'126.6577472',
            discount:'전자담배나 액상 구매 시 8% 할인',
            etc:'전자담배나 액상 구매 시!'
        },
        {
            photo:'/images/밝은눈안과 잠실롯데타워점.png',
            category:'병원',
            name:'밝은눈안과',
            name2:'잠실롯데타워점',
            naverMap:'https://brighteyesjamsil2.imweb.me/',
            lat:'37.5132454',
            lon:'127.1034441',
            discount:'[상시 변동]제휴 혜택 페이지 참고',
            etc:'할인 대상 범위에 가족까지 포함'
        },
        {
            photo:'/images/밝은눈안과 부산 부안점.png',
            category:'병원',
            name:'밝은눈안과',
            name2:'부산 부안점',
            naverMap:'https://brighteyesjamsil2.imweb.me/',
            lat:'35.1581595',
            lon:'129.0513813',
            discount:'[상시 변동]제휴 혜택 페이지 참고',
            etc:'할인 대상 범위에 가족까지 포함'
        },
        {
            photo:'/images/디스커버리클라이밍 클라임스퀘어 송도점.png',
            category:'놀거리',
            name:'디스커버리클라이밍 클라임스퀘어',
            name2:'송도점',
            naverMap:'https://naver.me/5i9ZEh7O',
            lat:'37.3785579',
            lon:'126.6630270',
            discount:'데이패스(1일 이용권) 5000원 할인:15000원, 1개월 회원권 20000원 할인:100000원(1개월 회원권은 클라임스퀘어 전 지점(송도,ICN,청라,구래) 이용 가능), 입문 강습 10% 할인',
            etc:'없음'
        },
        // {
        //     category:'놀거리',
        //     name:'모우트 PC방',
        //     name2:'송도트리플스트리트점',
        //     naverMap:'https://naver.me/5Is3DdBl',
        //     lat:'',
        //     lon:'',
        //     discount:'15시간권:만원 구매 가능',
        //     etc:'할인된 시간권을 이용하기 위해서는 첫 1회만 학생증 인증을 직원분에게 하고 키오스크에서 결제를 진행하셔야 합니다! (학생증 인증을 하시면 키오스크에 SUNY KR이라는 결제창이 따로 생깁니다, 학생증 인증은 처음 1회만 하면 됩니다!) [대리 인증은 안됨! 본인 실물 학생증으로만 가능 (사진 X)]'
        // },
        {
            photo:'/images/제우스볼.png',
            category:'놀거리',
            name:'제우스볼',
            name2:'본점',
            naverMap:'https://naver.me/5B1km2RY',
            lat:'37.3795437',
            lon:'126.6621974',
            discount:'10% 할인',
            etc:'없음'
        },
        {
            photo:'/images/생활맥주 송도더샵엘테라스점.png',
            category:'술집',
            name:'생활맥주',
            name2:'송도더샵엘테라스점',
            naverMap:'https://naver.me/x2hpXsqV',
            lat:'37.3780883',
            lon:'126.6642114',
            discount:'5만원 미만 주문시 5% 할인, 5만원 이상 주문시 10% 할인',
            etc:'없음'
        },
        {
            photo:'/images/팔공티 송도트리플스트리트점.png',
            category:'음료 및 디저트',
            name:'팔공티',
            name2:'송도트리플스트리트점',
            naverMap:'https://naver.me/xmPBEca5',
            lat:'37.3786582',
            lon:'126.6631090',
            discount:'10% 할인',
            etc:'없음'
        },
        {
            photo:'/images/경주십원빵 송도트리플스트리트점.png',
            category:'음료 및 디저트',
            name:'경주십원빵',
            name2:'송도트리플스트리트점',
            naverMap:'https://naver.me/x95FHukK',
            lat:'37.3788389',
            lon:'126.6628171',
            discount:'10% 할인',
            etc:'없음'
        },
        // {
        //     category:'음료 및 디저트',
        //     name:'요아정',
        //     name2:'송도트리플점',
        //     naverMap:'https://naver.me/5jJFY8tY',
        //     lat:'',
        //     lon:'',
        //     discount:'만원 이상 결제시 미니 요아정 증정(90g)',
        //     etc:'매장 방문시에만 해당'
        // },
    ]

    for(const opt of option){
        console.log('Inserting option:', opt);
        await createOption({
            photo:opt.photo,
            category:opt.category,
            name:opt.name,
            name2:opt.name2,
            naverMap:opt.naverMap,
            lat:opt.lat,
            lon:opt.lon,
            discount:opt.discount,
            etc:opt.etc
        });
    }
}

async function init(){
    await categoryData();
    await optionData();
}

init()
.catch((err)=>{
    console.log('init:',err);
})

console.log('processing');