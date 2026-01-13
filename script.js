console.log('script loaded');

const questions = {
    easy: [
        // 基礎首都題
        { type: 'choice', question: '中國的首都是？', options: ['北京', '上海', '廣州', '深圳'], answer: '北京' },
        { type: 'fillblank', question: '英國的首都是______。', options: [], answer: '倫敦' },
        { type: 'fillblank', question: '日本的首都是______。', options: [], answer: '東京' },
        { type: 'fillblank', question: '巴西的首都是______。', options: [], answer: '巴西利亞' },
        { type: 'choice', question: '哪個城市是法國的首都？', options: ['巴黎', '倫敦', '羅馬', '柏林'], answer: '巴黎' },
        // 基礎地理知識
        { type: 'truefalse', question: '地球是圓的？', options: ['是', '否'], answer: '是' },
        { type: 'fillblank', question: '世界上最大的大陸是______。', options: [], answer: '亞洲' },
        { type: 'truefalse', question: '太平洋是世界上最大的海洋？', options: ['是', '否'], answer: '是' },
        { type: 'truefalse', question: '澳洲是一個大陸？', options: ['是', '否'], answer: '是' },
        { type: 'fillblank', question: '世界上最小的洲是______。', options: [], answer: '澳洲' },
        // 著名河流和山脈
        { type: 'fillblank', question: '尼羅河位於______大陸。', options: [], answer: '非洲' },
        { type: 'fillblank', question: '世界上最大的大陸是______。', options: [], answer: '亞洲' },
        { type: 'truefalse', question: '珠穆朗瑪峰是世界上最高的山？', options: ['是', '否'], answer: '是' },
        { type: 'truefalse', question: '格陵蘭是世界上最大的島嶼？', options: ['是', '否'], answer: '是' },
        { type: 'truefalse', question: '南極洲有人居住？', options: ['是', '否'], answer: '否' },
        // 簡單區域認知
        { type: 'choice', question: '哪個國家不在歐洲？', options: ['法國', '德國', '日本', '英國'], answer: '日本' },
        { type: 'choice', question: '哪個國家不在南美洲？', options: ['巴西', '阿根廷', '墨西哥', '智利'], answer: '墨西哥' },
        { type: 'choice', question: '哪個海洋位於亞洲東部？', options: ['太平洋', '大西洋', '印度洋', '北冰洋'], answer: '太平洋' },
        { type: 'fillblank', question: '阿根廷的首都是______。', options: [], answer: '布宜諾斯艾利斯' },
        { type: 'truefalse', question: '撒哈拉沙漠位於非洲？', options: ['是', '否'], answer: '是' }
    ],
    medium: [
        // 區域和時區知識
        { type: 'choice', question: '哪個國家跨越最多的時區？', options: ['俄羅斯', '美國', '中國', '加拿大'], answer: '俄羅斯' },
        { type: 'choice', question: '世界上人口最多的大陸是？', options: ['亞洲', '非洲', '歐洲', '北美洲'], answer: '亞洲' },
        // 地理特性和氣候
        { type: 'truefalse', question: '赤道通過非洲大陸？', options: ['是', '否'], answer: '是' },
        { type: 'fillblank', question: '世界上最熱的地方是______。', options: [], answer: '死亡谷' },
        { type: 'truefalse', question: '死海是世界上最鹹的地方？', options: ['是', '否'], answer: '是' },
        // 河流和湖泊
        { type: 'fillblank', question: '世界上最長的河流是______。', options: [], answer: '尼羅河' },
        { type: 'fillblank', question: '世界上流量最大的河流是______。', options: [], answer: '亞馬遜河' },
        { type: 'choice', question: '世界上最大的淡水湖是？', options: ['貝加爾湖', '蘇必利爾湖', '維多利亞湖', '坦干伊喀湖'], answer: '貝加爾湖' },
        { type: 'fillblank', question: '世界上最深的湖是______。', options: [], answer: '貝加爾湖' },
        // 沙漠和地理特徵
        { type: 'choice', question: '世界上最大的沙漠是？', options: ['撒哈拉', '戈壁', '卡拉庫姆', '大維多利亞'], answer: '撒哈拉' },
        { type: 'fillblank', question: '亞馬遜雨林主要位於______。', options: [], answer: '巴西' },
        { type: 'choice', question: '下列哪個山脈位於南美洲？', options: ['安第斯山脈', '洛磯山脈', '阿爾卑斯山脈', '烏拉爾山脈'], answer: '安第斯山脈' },
        // 國家首都和區域
        { type: 'fillblank', question: '加拿大最大的城市是______。', options: [], answer: '多倫多' },
        { type: 'fillblank', question: '埃及的首都是______。', options: [], answer: '開羅' },
        { type: 'fillblank', question: '墨西哥的首都是______。', options: [], answer: '墨西哥城' },
        // 地理位置判斷
        { type: 'choice', question: '下列哪個國家位於北美洲？', options: ['加拿大', '巴西', '澳洲', '埃及'], answer: '加拿大' },
        { type: 'truefalse', question: '印度洋位於亞洲和非洲之間？', options: ['是', '否'], answer: '是' },
        { type: 'truefalse', question: '安第斯山脈位於南美洲？', options: ['是', '否'], answer: '是' },
        { type: 'choice', question: '哪個國家位於中東？', options: ['沙烏地阿拉伯', '巴西', '加拿大', '澳洲'], answer: '沙烏地阿拉伯' },
        { type: 'truefalse', question: '馬達加斯加是非洲最大的島嶼？', options: ['是', '否'], answer: '是' }
    ],
    hard: [
        // 複雜的地理統計
        { type: 'choice', question: '世界上人口密度最高的城市國家是？', options: ['摩納哥', '新加坡', '馬爾他', '盧森堡'], answer: '摩納哥' },
        { type: 'choice', question: '哪個國家有最多的海洋邊界？', options: ['加拿大', '印尼', '菲律賓', '挪威'], answer: '加拿大' },
        { type: 'choice', question: '哪個國家的時區跨越最多（超過11個時區）？', options: ['法國', '俄羅斯', '美國', '中國'], answer: '法國' },
        // 海洋地理深度知識
        { type: 'fillblank', question: '世界上最深的海溝是______。', options: [], answer: '馬里亞納海溝' },
        { type: 'choice', question: '馬里亞納海溝的最深點深度約為？', options: ['9公里', '11公里', '8公里', '13公里'], answer: '11公里' },
        { type: 'truefalse', question: '死海的湖岸是世界上陸地最低點？', options: ['是', '否'], answer: '是' },
        // 地質和地形專業知識
        { type: 'fillblank', question: '世界上最高的活火山是______。', options: [], answer: '奧霍斯德爾薩拉多' },
        { type: 'fillblank', question: '世界上最高的瀑布是______。', options: [], answer: '安赫爾瀑布' },
        { type: 'choice', question: '托雷斯海峽將哪兩個地區分開？', options: ['澳洲和巴布亞紐幾內亞', '英國和法國', '日本和韓國', '新西蘭和澳洲'], answer: '澳洲和巴布亞紐幾內亞' },
        // 氣候和環境專業知識
        { type: 'truefalse', question: '撒哈拉沙漠每年都在擴大？', options: ['是', '否'], answer: '是' },
        { type: 'truefalse', question: '撒哈拉沙漠曾經是綠洲？', options: ['是', '否'], answer: '是' },
        { type: 'choice', question: '全球最大的熱帶雨林主要位於？', options: ['南美洲', '非洲', '東南亞', '澳洲'], answer: '南美洲' },
        // 邊界和領土複雜性
        { type: 'choice', question: '哪個國家與最多的國家接壤（14個）？', options: ['中國', '俄羅斯', '德國', '哈薩克'], answer: '中國' },
        { type: 'truefalse', question: '瑞士與瑞典是不同的國家？', options: ['是', '否'], answer: '是' },
        { type: 'choice', question: '世界上最小的國家是？', options: ['梵蒂岡', '摩納哥', '聖馬力諾', '列支敦士登'], answer: '梵蒂岡' },
        // 特殊的地理現象
        { type: 'fillblank', question: '世界上最大的珊瑚礁系統是______。', options: [], answer: '大堡礁' },
        { type: 'truefalse', question: '死海的鹽分濃度約為普通海洋的10倍？', options: ['是', '否'], answer: '是' },
        { type: 'choice', question: '撒哈拉沙漠的年平均降雨量少於多少？', options: ['10毫米', '50毫米', '100毫米', '200毫米'], answer: '10毫米' },
        { type: 'fillblank', question: '地球上最高的山峰是______。', options: [], answer: '珠穆朗瑪峰' },
        { type: 'truefalse', question: '南美洲的安第斯山脈是世界上最長的山脈？', options: ['是', '否'], answer: '是' }
    ]
};

let currentDifficulty;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

document.getElementById('easy-btn').addEventListener('click', () => startGame('easy'));
document.getElementById('medium-btn').addEventListener('click', () => startGame('medium'));
document.getElementById('hard-btn').addEventListener('click', () => startGame('hard'));
document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('restart-btn').addEventListener('click', restartGame);

console.log('listeners added');

function startGame(difficulty) {
    console.log('startGame called with', difficulty);
    if (!questions[difficulty]) {
        console.log('no questions for', difficulty);
        return;
    }
    currentDifficulty = difficulty;
    currentQuestions = shuffleArray(questions[difficulty]).slice(0, 15);
    console.log('currentQuestions length', currentQuestions.length);
    currentIndex = 0;
    score = 0;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    console.log('showQuestion called', currentIndex);
    const q = currentQuestions[currentIndex];
    console.log('question', q);
    document.getElementById('question').textContent = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('score').textContent = `分數: ${score} / 15`;

    if (q.type === 'choice' || q.type === 'truefalse') {
        const shuffledOptions = shuffleArray([...q.options]);
        shuffledOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option';
            btn.textContent = option;
            btn.addEventListener('click', () => selectOption(btn));
            optionsDiv.appendChild(btn);
        });
    } else if (q.type === 'fillblank') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'fill-input';
        optionsDiv.appendChild(input);
    }
}

function selectOption(btn) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    btn.classList.add('selected');
}

function checkAnswer() {
    const q = currentQuestions[currentIndex];
    let userAnswer;
    if (q.type === 'choice' || q.type === 'truefalse') {
        const selected = document.querySelector('.selected');
        if (!selected) {
            document.getElementById('feedback').textContent = '請選擇一個選項！';
            return;
        }
        userAnswer = selected.textContent;
    } else if (q.type === 'fillblank') {
        userAnswer = document.getElementById('fill-input').value.trim();
        // 模糊匹配：忽略大小寫，檢查包含
        if (userAnswer.toLowerCase().includes(q.answer.toLowerCase()) || q.answer.toLowerCase().includes(userAnswer.toLowerCase())) {
            userAnswer = q.answer; // 視為正確
        }
    }

    if (userAnswer === q.answer) {
        score++;
        document.getElementById('feedback').textContent = '正確！';
    } else {
        document.getElementById('feedback').textContent = `錯誤！正確答案是：${q.answer}`;
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < 15) {
            showQuestion();
        } else {
            endGame();
        }
    }, 2000);
}

function endGame() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById('final-score').textContent = `你的分數是：${score} / 15`;
}

function restartGame() {
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}