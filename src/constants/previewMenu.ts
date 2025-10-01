export const TAB_ITEMS = ["kakao", "slack", "notion"] as const;
export type TabType = (typeof TAB_ITEMS)[number];
