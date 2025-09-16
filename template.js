// 各狩猟笛のテンプレート

const huntingHornTimerTemplates = {
    "白赤青": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "白赤赤" },
        { name: "体力増加【小】", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "赤青白" },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180, notes: "青青赤" },
        { name: "防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "白青青" }
    ],
    "白赤黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "白赤赤" },
        { name: "火属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "黄赤白" },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "黄黄黄" }
    ],
    "白赤緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "白赤赤" },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "白緑白" },
        { name: "回復速度【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "緑緑赤白" }
    ],
    "白赤空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "白赤赤" },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空空" },
        { name: "寒さ無効", effectDuration: 240, effectDurationWithSkill: 300, extendDuration: 240, extendDurationWithSkill: 300, notes: "空赤空" },
        { name: "暑さ無効", effectDuration: 240, effectDurationWithSkill: 300, extendDuration: 240, extendDurationWithSkill: 300, notes: "赤赤空" },
        { name: "聴覚保護【小】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210, notes: "空空赤白" }
    ],
    "白青緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "スタミナ減少無効【小】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "白緑青" },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180, notes: "青青緑" },
        { name: "防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "白青青" },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "白緑白" },
        { name: "体力回復【小】&解毒", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "緑青白青" }
    ],
    "白青空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "スタミナ減少無効【小】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "白空青" },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180, notes: "青青空" },
        { name: "防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "白青青" },
        { name: "千里眼", effectDuration: 30, effectDurationWithSkill: 60, extendDuration: 30, extendDurationWithSkill: 60, notes: "白青空" },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空空" }
    ],
    "白青黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "スタミナ減少無効【小】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "白黄青" },
        { name: "防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "白青青" },
        { name: "氷属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "黄青白" },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "黄黄黄" }
    ],
    "白緑空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "白空白" },
        { name: "体力回復【中】&消臭", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "緑白空緑" },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空空" },
        { name: "聴覚保護【小】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210, notes: "空空緑白" }
    ],
    "白緑黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "白緑白" },
        { name: "回復速度【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "緑緑黄" },
        { name: "雷属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "黄緑白" },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "黄黄黄" }
    ],
    "白空黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "白白" },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空空" },
        { name: "麻痺無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空黄白" },
        { name: "耐震", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空黄" },
        { name: "水属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "黄空白" },
        { name: "龍属性防御強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "白黄空" },
        { name: "属性攻撃力強化", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "黄空黄空" },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "黄黄黄" }
    ],
    "紫赤青": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "攻撃力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "紫赤青紫" },
        { name: "体力増加【大】", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "赤青赤紫" },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180, notes: "青青赤" },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "紫青青紫" }
    ],
    "紫赤緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "攻撃力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "紫赤緑紫" },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "紫緑紫" },
        { name: "回復速度【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "緑緑赤紫" }
    ],
    "紫赤空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "攻撃力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "紫赤空紫" },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空空" },
        { name: "寒さ無効", effectDuration: 240, effectDurationWithSkill: 300, extendDuration: 240, extendDurationWithSkill: 300, notes: "空赤空" },
        { name: "暑さ無効", effectDuration: 240, effectDurationWithSkill: 300, extendDuration: 240, extendDurationWithSkill: 300, notes: "赤赤空" },
        { name: "聴覚保護【小】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210, notes: "空空赤紫" }
    ],
    "紫赤黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫赤黄" },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "黄紫赤" },
        { name: "攻撃力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "赤黄紫" },
        { name: "火属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "黄赤紫" },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "黄黄黄" }
    ],
    "紫青緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "スタミナ減少無効【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫緑青緑" },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180, notes: "青青緑" },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "紫青青紫" },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "紫緑紫" },
        { name: "体力回復【中】&解毒", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "緑青紫青" }
    ],
    "紫青空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "スタミナ減少無効【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫空青空" },
        { name: "風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180, notes: "青青空" },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "紫青青紫" },
        { name: "千里眼", effectDuration: 30, effectDurationWithSkill: 60, extendDuration: 30, extendDurationWithSkill: 60, notes: "紫青空" },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空空" },
        { name: "気絶無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空青紫" }
    ],
    "紫青黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "スタミナ減少無効【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫黄青" },
        { name: "風圧無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "青青黄紫" },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "紫青青紫" },
        { name: "氷属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "黄青紫" },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "黄黄黄" }
    ],
    "紫緑空": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "紫緑紫" },
        { name: "体力回復【大】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "緑緑紫空" },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空空" },
        { name: "聴覚保護【大】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210, notes: "空空緑紫" }
    ],
    "紫緑黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "紫緑紫" },
        { name: "回復速度【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "緑緑黄" },
        { name: "精霊王の加護", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "緑黄紫黄" },
        { name: "雷属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "黄緑紫" },
        { name: "属性攻撃力強化", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫緑黄緑" },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "黄黄黄" }
    ],
    "紫空黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空空" },
        { name: "麻痺無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空黄紫" },
        { name: "耐震", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空黄" },
        { name: "水属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "黄空紫" },
        { name: "龍属性防御強化【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "紫黄空" },
        { name: "属性攻撃力強化", effectDuration: 129, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "黄空黄空" },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "黄黄黄" }
    ],
    "紫橙赤": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "全旋律効果延長", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 30, extendDurationWithSkill: 40, notes: "橙赤橙" },
        { name: "のけぞり無効", effectDuration: 45, effectDurationWithSkill: 60, extendDuration: 45, extendDurationWithSkill: 60, notes: "赤橙赤紫" },
        { name: "攻撃力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "紫橙橙赤" }
    ],
    "紫橙青": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "防御力強化【大】", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "紫青青紫" },
        { name: "攻撃力&防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "橙青紫青" },
        { name: "攻撃力&防御力強化【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫青橙橙" },
        { name: "風圧無効", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "青青橙" },
        { name: "スタミナ減少無効【大】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫橙青橙" }
    ],
    "紫橙緑": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "体力回復【小】", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "紫緑紫" },
        { name: "会心率UP&体力回復【小】", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 210, notes: "緑橙紫橙" },
        { name: "聴覚保護【大】", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210, notes: "橙橙緑紫" }
    ],
    "紫空橙": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "耐だるま状態", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 180, extendDurationWithSkill: 240, notes: "空空空" },
        { name: "状態異常攻撃強化", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "空橙橙紫" },
        { name: "全状態異常無効", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "空紫橙橙" },
        { name: "精霊王の加護", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "紫橙紫空" }
    ],
    "紫橙黄": [
        { name: "自己強化", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫紫" },
        { name: "高周波", effectDuration: 0, effectDurationWithSkill: 0, extendDuration: 0, extendDurationWithSkill: 0, notes: "黄黄黄" },
        { name: "全属性耐性強化", effectDuration: 90, effectDurationWithSkill: 120, extendDuration: 60, extendDurationWithSkill: 90, notes: "黄橙紫" },
        { name: "属性攻撃力強化", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 90, extendDurationWithSkill: 120, notes: "紫橙黄橙" },
        { name: "属性やられ無効", effectDuration: 120, effectDurationWithSkill: 150, extendDuration: 120, extendDurationWithSkill: 150, notes: "橙黄黄橙" },
        { name: "聴覚保護【小】&風圧軽減", effectDuration: 180, effectDurationWithSkill: 210, extendDuration: 180, extendDurationWithSkill: 210, notes: "紫黄橙黄" },
        { name: "聴覚保護【小】&風圧軽減", effectDuration: 180, effectDurationWithSkill: 240, extendDuration: 120, extendDurationWithSkill: 180, notes: "紫黄橙黄" }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = huntingHornTimerTemplates;
}
