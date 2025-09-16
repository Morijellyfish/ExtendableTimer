// 各狩猟笛のテンプレート

const huntingHornTimerTemplates = {
    "白赤青": [
        { name: "自己強化", effectDuration: 180, extendDuration: 90 },
        { name: "攻撃力強化【小】", effectDuration: 120, extendDuration: 90 },
        { name: "体力増加【小】", effectDuration: 180, extendDuration: 180 },
        { name: "風圧軽減", effectDuration: 180, extendDuration: 120 },
        { name: "防御力強化【小】", effectDuration: 120, extendDuration: 90 }
    ],
    "白赤黄": [
        { name: "自己強化", effectDuration: 180, extendDuration: 90 },
        { name: "攻撃力強化【小】", effectDuration: 120, extendDuration: 90 },
        { name: "火属性防御強化【小】", effectDuration: 120, extendDuration: 120 },
        { name: "高周波", effectDuration: 0, extendDuration: 0 }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = huntingHornTimerTemplates;
}
