// 城市数据模型
const cityData = {
    "上海": {
        salary: 12800,
        rentRatio: 0.26,
        tags: ["金融与创新的双引擎", "国际化程度最高"],
        personalityMatch: { "野心家": 0.92, "生活家": 0.65, "探索者": 0.70 },
        color: "#ff6b6b"
    },
    "北京": {
        salary: 13500,
        rentRatio: 0.28,
        tags: ["机会密度全国之最", "文化中心"],
        personalityMatch: { "野心家": 0.88, "生活家": 0.60, "探索者": 0.75 },
        color: "#4ecdc4"
    },
    "深圳": {
        salary: 12900,
        rentRatio: 0.25,
        tags: ["科技创业第一站", "年轻有活力"],
        personalityMatch: { "野心家": 0.85, "生活家": 0.70, "探索者": 0.80 },
        color: "#ffe66d"
    },
    "杭州": {
        salary: 11800,
        rentRatio: 0.22,
        tags: ["数字经济领跑者", "生活品质高"],
        personalityMatch: { "野心家": 0.75, "生活家": 0.85, "探索者": 0.78 },
        color: "#6c5ce7"
    },
    "成都": {
        salary: 8500,
        rentRatio: 0.18,
        tags: ["安逸生活代表", "消费性价比高"],
        personalityMatch: { "野心家": 0.60, "生活家": 0.92, "探索者": 0.85 },
        color: "#00b894"
    },
    "西安": {
        salary: 7500,
        rentRatio: 0.15,
        tags: ["历史文化名城", "生活成本低"],
        personalityMatch: { "野心家": 0.55, "生活家": 0.78, "探索者": 0.90 },
        color: "#fd79a8"
    }
};

// 人格定义
const personalities = {
    "野心家": {
        description: "敢用当下成本，兑换未来溢价的拼搏者",
        traits: ["追求极致发展", "高压力承受", "目标导向"],
        suitableCities: ["上海", "北京", "深圳"],
        warning: "需承担高初期压力，做好快节奏准备",
        advice: "适合从事金融、科技、咨询等高压高薪行业",
        color: "#ff6b6b"
    },
    "生活家": {
        description: "追求工作与生活平衡的品质生活家",
        traits: ["重视生活质量", "关注性价比", "享受当下"],
        suitableCities: ["杭州", "成都", "苏州"],
        warning: "职业发展速度可能相对平缓",
        advice: "适合创意产业、自由职业或稳定型工作",
        color: "#4ecdc4"
    },
    "探索者": {
        description: "渴望新奇体验与独特生活方式的冒险家",
        traits: ["热爱探索", "接受不确定性", "价值多元"],
        suitableCities: ["西安", "大理", "青岛"],
        warning: "可能需要面对更不稳定的收入结构",
        advice: "适合文旅、艺术、自由职业等领域",
        color: "#ffe66d"
    }
};

// 测试问题
const questions = [
    {
        id: 1,
        title: "未来3-5年，你更看重...",
        type: "card",
        options: [
            {
                icon: "🚀",
                text: "极致职业发展与薪资增长",
                value: { "野心家": 3, "生活家": 0, "探索者": 1 },
                description: "追求事业上的快速突破和收入最大化"
            },
            {
                icon: "⚖️",
                text: "事业上升与生活享受的平衡",
                value: { "野心家": 1, "生活家": 3, "探索者": 1 },
                description: "既要工作成就感，也要有生活品质"
            },
            {
                icon: "🌿",
                text: "更多可支配时间与预算",
                value: { "野心家": 0, "生活家": 2, "探索者": 3 },
                description: "重视个人时间和财务自由度"
            },
            {
                icon: "🗺️",
                text: "探索小众生活方式",
                value: { "野心家": 0, "生活家": 1, "探索者": 4 },
                description: "渴望独特的生活体验和多元文化"
            }
        ]
    },
    {
        id: 2,
        title: "关于住房，你的底线是...",
        type: "hybrid",
        presetOptions: [
            {
                text: "必须控制在很低水平",
                value: 15,
                desc: "房租占收入比例极低，追求绝对储蓄",
                personality: { "野心家": 0, "生活家": 4, "探索者": 3 }
            },
            {
                text: "房租≤月薪1/4，追求性价比",
                value: 25,
                desc: "在可承受范围内寻找最佳居住条件",
                personality: { "野心家": 1, "生活家": 3, "探索者": 2 }
            },
            {
                text: "愿为地段支付溢价，只要收入能覆盖",
                value: 40,
                desc: "居住品质和通勤效率优先，成本次之",
                personality: { "野心家": 4, "生活家": 0, "探索者": 1 }
            }
        ],
        min: 10,
        max: 50,
        step: 5,
        defaultValue: 25,
        calculation: "若月薪10k，你能接受的房租是____元"
    },
    {
        id: 3,
        title: "发工资后，你最想...",
        type: "card",
        options: [
            {
                icon: "🍽️",
                text: "高档餐厅/买设计新品",
                value: { "野心家": 3, "生活家": 1, "探索者": 0 },
                description: "用消费奖励自己，追求精致生活"
            },
            {
                icon: "🎭",
                text: "朋友聚会/看展/Livehouse",
                value: { "野心家": 1, "生活家": 3, "探索者": 2 },
                description: "投资社交体验和文化生活"
            },
            {
                icon: "🍜",
                text: "实现'美食自由'",
                value: { "野心家": 0, "生活家": 2, "探索者": 3 },
                description: "享受当地美食，满足味蕾需求"
            },
            {
                icon: "⛰️",
                text: "投入到小众爱好中",
                value: { "野心家": 0, "生活家": 1, "探索者": 4 },
                description: "为独特兴趣和体验投入资源"
            }
        ]
    },
    {
        id: 4,
        title: "如果必须二选一，你更能接受...",
        type: "balance",
        options: [
            {
                text: "接受较长通勤+较高成本",
                value: { "野心家": 4, "生活家": 0, "探索者": 1 },
                description: "为了更好的机会愿意牺牲通勤时间和成本"
            },
            {
                text: "接受薪资天花板稍低",
                value: { "野心家": 0, "生活家": 4, "探索者": 2 },
                description: "更看重生活品质而非收入上限"
            },
            {
                text: "接受职业发展速度放缓",
                value: { "野心家": 1, "生活家": 2, "探索者": 4 },
                description: "愿意用职业速度换取更多可能性"
            }
        ]
    }
];

// 全局变量
let currentQuestion = 0;
let userAnswers = [];
let userPersonality = "";
let matchScores = {};

// DOM元素
const pages = {
    welcome: document.getElementById('welcome-page'),
    test: document.getElementById('test-page'),
    loading: document.getElementById('loading-page'),
    report: document.getElementById('report-page')
};

const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const startBtn = document.getElementById('start-test');
const reportContent = document.getElementById('report-content');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 从localStorage恢复进度
    const savedProgress = localStorage.getItem('cityChooserProgress');
    if (savedProgress) {
        try {
            const progress = JSON.parse(savedProgress);
            if (progress.answers && progress.currentQuestion) {
                userAnswers = progress.answers;
                currentQuestion = progress.currentQuestion;
                showQuestion(currentQuestion);
                showPage('test');
            }
        } catch (e) {
            console.error('恢复进度失败:', e);
        }
    }

    // 事件监听
    startBtn.addEventListener('click', () => {
        showPage('test');
        showQuestion(0);
    });

    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);

    // 重新测试按钮
    document.getElementById('restart-btn')?.addEventListener('click', restartTest);
    
    // 分享按钮
    document.getElementById('share-btn')?.addEventListener('click', showShareModal);
    
    // 关闭模态框
    document.querySelector('.close-modal')?.addEventListener('click', hideShareModal);
    
    // 点击模态框背景关闭
    document.getElementById('share-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'share-modal') {
            hideShareModal();
        }
    });

    // 保存图片功能
    document.getElementById('save-image')?.addEventListener('click', saveAsImage);
    
    // 复制链接功能
    document.getElementById('copy-link')?.addEventListener('click', copyShareLink);
});

// 页面切换
function showPage(pageName) {
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
    });
    pages[pageName].classList.add('active');
}

// 显示问题
function showQuestion(index) {
    currentQuestion = index;
    const question = questions[index];
    
    // 更新进度条
    const progressPercent = ((index + 1) / questions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    progressText.textContent = `${Math.round(progressPercent)}%`;
    
    // 更新标题
    questionTitle.textContent = question.title;
    
    // 清空选项容器
    optionsContainer.innerHTML = '';
    
    // 根据问题类型渲染选项
    if (question.type === 'card') {
        renderCardOptions(question.options);
    } else if (question.type === 'hybrid') {
        renderHybridOptions(question);
    } else if (question.type === 'balance') {
        renderBalanceOptions(question.options);
    }
    
    // 更新按钮状态
    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextBtn.textContent = index === questions.length - 1 ? '查看结果' : '下一题';
    
    // 保存进度
    saveProgress();
}

// 渲染卡片选项
function renderCardOptions(options) {
    options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option-card';
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-icon">${option.icon}</div>
            <div class="option-text">${option.text}</div>
            <div class="option-desc">${option.description}</div>
        `;
        
        optionElement.addEventListener('click', () => {
            document.querySelectorAll('.option-card').forEach(card => {
                card.classList.remove('selected');
            });
            optionElement.classList.add('selected');
            userAnswers[currentQuestion] = index;
            saveProgress();
        });
        
        optionsContainer.appendChild(optionElement);
    });
}

// 渲染混合选项（第二题：按钮+滑动条）
function renderHybridOptions(question) {
    // 创建按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'hybrid-button-container';
    
    // 渲染三个预设按钮
    question.presetOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'hybrid-preset-btn';
        button.innerHTML = `
            <strong>${option.text}</strong>
            <small>${option.desc}</small>
        `;
        
        // 如果这是用户之前的选择，高亮它
        const userAnswer = userAnswers[currentQuestion];
        if (userAnswer && userAnswer.presetIndex === index) {
            button.style.borderColor = '#4ecdc4';
            button.style.background = 'rgba(78, 205, 196, 0.1)';
        }
        
        button.addEventListener('click', () => {
            // 移除其他按钮的高亮
            document.querySelectorAll('.hybrid-preset-btn').forEach(btn => {
                btn.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                btn.style.background = 'rgba(255, 255, 255, 0.07)';
            });
            // 高亮当前按钮
            button.style.borderColor = '#4ecdc4';
            button.style.background = 'rgba(78, 205, 196, 0.1)';
            
            // 更新滑动条值
            const slider = document.getElementById('hybrid-slider');
            if (slider) {
                slider.value = option.value;
                document.getElementById('slider-value-display').textContent = `${option.value}%`;
                updateRentCalculator(option.value);
            }
            
            // 保存答案
            userAnswers[currentQuestion] = {
                presetIndex: index,
                sliderValue: option.value,
                personality: option.personality
            };
            saveProgress();
        });
        
        buttonContainer.appendChild(button);
    });
    
    optionsContainer.appendChild(buttonContainer);
    
    // 创建滑动条容器
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    
    // 滑动条标签
    const labelDiv = document.createElement('div');
    labelDiv.className = 'slider-label';
    labelDiv.innerHTML = `
        <span>自由调节比例</span>
        <span class="slider-value" id="slider-value-display">${question.defaultValue}%</span>
    `;
    sliderContainer.appendChild(labelDiv);
    
    // 滑动条
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = question.min;
    slider.max = question.max;
    slider.step = question.step;
    
    // 设置滑动条初始值
    const userAnswer = userAnswers[currentQuestion];
    slider.value = (userAnswer && userAnswer.sliderValue) || question.defaultValue;
    slider.className = 'slider';
    slider.id = 'hybrid-slider';
    
    // 实时计算器
    const calculator = document.createElement('div');
    calculator.className = 'real-time-calc';
    calculator.id = 'rent-calculator';
    updateRentCalculator(slider.value);
    
    // 滑动条事件监听
    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('slider-value-display').textContent = `${value}%`;
        
        // 更新答案中的滑动条值，但不清除按钮选择
        if (userAnswers[currentQuestion]) {
            userAnswers[currentQuestion].sliderValue = parseInt(value);
        } else {
            userAnswers[currentQuestion] = { sliderValue: parseInt(value) };
        }
        
        updateRentCalculator(value);
        saveProgress();
    });
    
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(calculator);
    optionsContainer.appendChild(sliderContainer);
    
    // 初始化答案存储
    if (userAnswers[currentQuestion] === undefined) {
        userAnswers[currentQuestion] = {
            presetIndex: 1, // 默认选中第二个选项（性价比）
            sliderValue: question.defaultValue,
            personality: question.presetOptions[1].personality
        };
        // 默认高亮第二个按钮
        setTimeout(() => {
            const defaultButton = buttonContainer.children[1];
            if (defaultButton) {
                defaultButton.style.borderColor = '#4ecdc4';
                defaultButton.style.background = 'rgba(78, 205, 196, 0.1)';
            }
        }, 10);
    }
}

// 更新房租计算器
function updateRentCalculator(percentage) {
    const calculator = document.getElementById('rent-calculator');
    const rentAmount = Math.round(10000 * (percentage / 100));
    calculator.textContent = `若月薪10k，你能接受的房租是 ${rentAmount.toLocaleString()} 元`;
}

// 渲染天平选项
function renderBalanceOptions(options) {
    const balanceContainer = document.createElement('div');
    balanceContainer.className = 'balance-container';
    
    options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option-card balance-card';
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-text">${option.text}</div>
            <div class="option-desc">${option.description}</div>
        `;
        
        optionElement.addEventListener('click', () => {
            document.querySelectorAll('.balance-card').forEach(card => {
                card.classList.remove('selected');
            });
            optionElement.classList.add('selected');
            userAnswers[currentQuestion] = index;
            saveProgress();
        });
        
        balanceContainer.appendChild(optionElement);
    });
    
    // 提示文案
    const hint = document.createElement('div');
    hint.className = 'balance-hint';
    hint.textContent = '这是最后一步，将决定你的核心倾向';
    hint.style.textAlign = 'center';
    hint.style.marginTop = '20px';
    hint.style.color = '#a0a0c0';
    hint.style.fontStyle = 'italic';
    
    balanceContainer.appendChild(hint);
    optionsContainer.appendChild(balanceContainer);
}

// 显示上一题
function showPreviousQuestion() {
    if (currentQuestion > 0) {
        showQuestion(currentQuestion - 1);
    }
}

// 显示下一题
function showNextQuestion() {
    // 验证当前问题已回答
    if (userAnswers[currentQuestion] === undefined) {
        alert('请先回答当前问题');
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        showQuestion(currentQuestion + 1);
    } else {
        calculateResults();
        showPage('loading');
        
        // 模拟加载过程
        setTimeout(() => {
            generateReport();
            showPage('report');
        }, 2000);
    }
}

// 计算匹配结果
function calculateResults() {
    // 初始化分数
    matchScores = { "野心家": 0, "生活家": 0, "探索者": 0 };
    
    // 计算各人格得分
    questions.forEach((question, qIndex) => {
        const answer = userAnswers[qIndex];
        
        if (question.type === 'card' || question.type === 'balance') {
            const option = question.options[answer];
            Object.keys(matchScores).forEach(personality => {
                matchScores[personality] += option.value[personality] || 0;
            });
        } else if (question.type === 'hybrid') {
            // 使用用户选择的预设选项所对应的人格分数
            if (answer && answer.personality) {
                Object.keys(matchScores).forEach(personality => {
                    matchScores[personality] += answer.personality[personality] || 0;
                });
            }
        }
    });
    
    // 确定最高分的人格
    let maxScore = -1;
    Object.keys(matchScores).forEach(personality => {
        if (matchScores[personality] > maxScore) {
            maxScore = matchScores[personality];
            userPersonality = personality;
        }
    });
    
    // 计算匹配度百分比
    const maxPossibleScore = 16;
    Object.keys(matchScores).forEach(personality => {
        matchScores[personality] = Math.round((matchScores[personality] / maxPossibleScore) * 100);
    });
}

// 生成报告
function generateReport() {
    const personality = personalities[userPersonality];
    const matchScore = matchScores[userPersonality];
    
    // 获取匹配的城市
    const matchedCities = Object.keys(cityData)
        .map(city => ({
            name: city,
            match: cityData[city].personalityMatch[userPersonality],
            data: cityData[city]
        }))
        .sort((a, b) => b.match - a.match)
        .slice(0, 3);
    
    // 生成报告HTML
    reportContent.innerHTML = `
        <div class="report-header">
            <h1 class="report-title">你的择城报告</h1>
            <div class="match-score">${matchScore}%</div>
            <div class="personality-type">你的城市人格是：</div>
            <div class="badge-container">
                <div class="badge-3d">${userPersonality}</div>
            </div>
            <p class="personality-desc">"${personality.description}"</p>
        </div>
        
        <div class="city-ranking">
            <h3><i class="fas fa-crown"></i> 你的本命之城TOP3</h3>
            
            ${matchedCities.map((city, index) => {
                const medal = ['🥇', '🥈', '🥉'][index];
                const medalClass = ['gold', 'silver', 'bronze'][index];
                const rent = Math.round(city.data.salary * city.data.rentRatio);
                
                return `
                    <div class="city-rank-item ${medalClass}">
                        <div class="city-header">
                            <div class="city-name">${medal} ${city.name}</div>
                            <div class="city-match">匹配度 ${Math.round(city.match * 100)}%</div>
                        </div>
                        
                        <div class="city-tags">
                            ${city.data.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        
                        <div class="city-stats">
                            <div class="stat-item">
                                <div class="stat-value">¥${city.data.salary.toLocaleString()}</div>
                                <div class="stat-label">月薪中位值</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">${Math.round(city.data.rentRatio * 100)}%</div>
                                <div class="stat-label">房租收入比</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">¥${rent.toLocaleString()}</div>
                                <div class="stat-label">月房租估算</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">¥${(city.data.salary - rent).toLocaleString()}</div>
                                <div class="stat-label">月可支配收入</div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
        
        <div class="survival-sim">
            <h3><i class="fas fa-chart-line"></i> 分阶段生存模拟</h3>
            
            <div class="timeline">
                <div class="timeline-stage">
                    <div class="stage-name">学生时代</div>
                    <div class="stage-value">1小时=1.2杯咖啡</div>
                </div>
                <div class="timeline-stage">
                    <div class="stage-name">职业初期</div>
                    <div class="stage-value">¥6,200</div>
                </div>
                <div class="timeline-stage">
                    <div class="stage-name">稳定发展</div>
                    <div class="stage-value">¥12,500+</div>
                </div>
            </div>
            
            <div class="progress-group">
                <div class="progress-item">
                    <div class="progress-info">
                        <span>生活成本</span>
                        <span>65%</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-level" style="width: 65%"></div>
                    </div>
                </div>
                
                <div class="progress-item">
                    <div class="progress-info">
                        <span>你的收入覆盖度</span>
                        <span>${matchScore}%</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-level" style="width: ${matchScore}%"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="warning-box">
            <h3><i class="fas fa-exclamation-triangle"></i> 风险提示与适配建议</h3>
            <p><strong>注意：</strong> ${personality.warning}</p>
            <p><strong>建议：</strong> ${personality.advice}</p>
            
            <div class="compare-suggestion">
                <button class="btn-secondary" onclick="showPersonalityComparison()">
                    <i class="fas fa-exchange-alt"></i> 如果选择不同路线会怎样？
                </button>
            </div>
        </div>
        
        <div class="data-validation">
            <h3><i class="fas fa-chart-bar"></i> 数据验证</h3>
            <div class="quadrant-chart">
                <div class="chart-point" style="top: ${100 - matchScore}%; left: ${matchScore}%;"></div>
            </div>
            <p class="data-source">数据来源：基于2023年度薪酬报告与各城市租金数据</p>
        </div>
    `;
    
    // 更新分享卡片
    updateShareCard(matchedCities[0].name);
}

// 更新分享卡片
function updateShareCard(topCity) {
    const shareCard = document.getElementById('share-card');
    if (shareCard) {
        shareCard.innerHTML = `
            <h2>我的城市人格是【${userPersonality}】</h2>
            <div style="font-size: 3rem; margin: 20px 0;">${topCity}</div>
            <p style="color: #a0a0c0; font-style: italic;">"${personalities[userPersonality].description}"</p>
            <p style="margin-top: 20px;">扫描测试，找到你的本命之城！</p>
        `;
    }
}

// 显示分享模态框
function showShareModal() {
    document.getElementById('share-modal').classList.add('active');
}

// 隐藏分享模态框
function hideShareModal() {
    document.getElementById('share-modal').classList.remove('active');
}

// 保存为图片
function saveAsImage() {
    alert('分享图片功能需要接入html2canvas库，已预留接口。建议先使用"复制链接"功能分享。');
    // 实际实现需要html2canvas库：
    // html2canvas(document.getElementById('share-card')).then(canvas => {
    //     const link = document.createElement('a');
    //     link.download = '我的城市人格.png';
    //     link.href = canvas.toDataURL();
    //     link.click();
    // });
}

// 复制分享链接
function copyShareLink() {
    const shareUrl = `${window.location.origin}${window.location.pathname}?personality=${encodeURIComponent(userPersonality)}`;
    navigator.clipboard.writeText(shareUrl)
        .then(() => alert('分享链接已复制到剪贴板！'))
        .catch(() => {
            // 降级方案
            const textArea = document.createElement('textarea');
            textArea.value = shareUrl;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('分享链接已复制到剪贴板！');
        });
}

// 显示人格对比
function showPersonalityComparison() {
    const otherPersonalities = Object.keys(personalities).filter(p => p !== userPersonality);
    let comparisonHTML = '<h3>不同人格路线对比</h3>';
    
    otherPersonalities.forEach(personality => {
        const data = personalities[personality];
        comparisonHTML += `
            <div style="margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
                <h4 style="color: ${data.color}; margin-bottom: 8px;">${personality}</h4>
                <p><em>${data.description}</em></p>
                <p><strong>适合城市：</strong> ${data.suitableCities.join('、')}</p>
                <p><strong>核心特点：</strong> ${data.traits.join('、')}</p>
            </div>
        `;
    });
    
    // 使用浏览器弹窗显示对比
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '2000';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.padding = '20px';
    
    modal.innerHTML = `
        <div style="background: #1a1a2e; padding: 25px; border-radius: 20px; max-width: 500px; width: 100%; max-height: 80vh; overflow-y: auto; border: 1px solid rgba(255,255,255,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="margin: 0;">人格路线对比</h3>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            ${comparisonHTML}
            <button onclick="this.parentElement.parentElement.parentElement.remove()" style="margin-top: 20px; width: 100%; padding: 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; color: white; cursor: pointer;">关闭</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 添加关闭事件
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// 重新开始测试
function restartTest() {
    if (confirm('确定要重新开始测试吗？当前进度将会丢失。')) {
        userAnswers = [];
        currentQuestion = 0;
        userPersonality = "";
        matchScores = {};
        localStorage.removeItem('cityChooserProgress');
        showPage('welcome');
    }
}

// 保存进度
function saveProgress() {
    const progress = {
        answers: userAnswers,
        currentQuestion: currentQuestion,
        timestamp: new Date().getTime()
    };
    localStorage.setItem('cityChooserProgress', JSON.stringify(progress));
}