// 各狩猟笛のテンプレート

const huntingHornTimerTemplates = {
    "白赤青": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "体力増加【小】", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180 },
        { name: "防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 }
    ],
    "白赤黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "火属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ],
    "白赤緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "回復速度【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 }
    ],
    "白赤空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "寒さ無効", effectDuration: 240, effectDurationWithSkill: 300, extendDuration: 240, extendDurationWithSkill: 300 },
        { name: "暑さ無効", effectDuration: 240, effectDurationWithSkill: 300, extendDuration: 240, extendDurationWithSkill: 300 },
        { name: "聴覚保護【小】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210 }
    ],
    "白青緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "スタミナ減少無効【小】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180 },
        { name: "防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "体力回復【小】&解毒", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ],
    "白青空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "スタミナ減少無効【小】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180 },
        { name: "防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "千里眼", effectDuration: 30, effectDurationWithSkill: 60, extendDuration: 30, extendDurationWithSkill: 60 },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 }
    ],
    "白青黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "スタミナ減少無効【小】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "氷属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ],
    "白緑空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "体力回復【中】&消臭", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "聴覚保護【小】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210 }
    ],
    "白緑黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "回復速度【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "雷属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ],
    "白空黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "麻痺無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "耐震", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "水属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "龍属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "属性攻撃力強化", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = huntingHornTimerTemplates;
}
