
export const TAB_CHANGED = "TAB_CHANGED";
export const tabChanged = (tabId) => {
    return {
        type: TAB_CHANGED,
        tabId: tabId
    }
};