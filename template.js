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
    ],
    "紫赤青": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "体力増加【大】", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180 },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 }
    ],
    "紫赤緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "回復速度【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 }
    ],
    "紫赤空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "寒さ無効", effectDuration: 240, effectDurationWithSkill: 300, extendDuration: 240, extendDurationWithSkill: 300 },
        { name: "暑さ無効", effectDuration: 240, effectDurationWithSkill: 300, extendDuration: 240, extendDurationWithSkill: 300 },
        { name: "聴覚保護【小】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210 }
    ],
    "紫赤黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "火属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ],
    "紫青緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "スタミナ減少無効【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180 },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "体力回復【中】&解毒", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ],
    "紫青空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "スタミナ減少無効【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180 },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "千里眼", effectDuration: 30, effectDurationWithSkill: 60, extendDuration: 30, extendDurationWithSkill: 60 },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "気絶無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 }
    ],
    "紫青黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "スタミナ減少無効【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "風圧無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "氷属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ],
    "紫緑空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "体力回復【大】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "聴覚保護【大】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210 }
    ],
    "紫緑黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "回復速度【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "精霊王の加護", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "雷属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "属性攻撃力強化", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ],
    "紫空黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "麻痺無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "耐震", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "水属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "龍属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "属性攻撃力強化", effectDuration: 129, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 }
    ],
    "赤橙赤": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "全旋律効果延長", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 30, extendDurationWithSkill: 40 },
        { name: "のけぞり無効", effectDuration: 45, effectDurationWithSkill: 60, extendDuration: 45, extendDurationWithSkill: 60 },
        { name: "攻撃力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 }
    ],
    "紫橙青": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "攻撃力&防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "攻撃力&防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "風圧無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "スタミナ減少無効【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 }
    ],
    "紫橙緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "会心率UP&体力回復【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 210 },
        { name: "聴覚保護【大】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210 }
    ],
    "紫空橙": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240 },
        { name: "状態異常攻撃強化", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "全状態異常無効", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "精霊王の加護", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 }
    ],
    "紫橙黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0 },
        { name: "全属性耐性強化", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90 },
        { name: "属性攻撃力強化", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120 },
        { name: "属性やられ無効", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150 },
        { name: "聴覚保護【小】&風圧軽減", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210 }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = huntingHornTimerTemplates;
}
