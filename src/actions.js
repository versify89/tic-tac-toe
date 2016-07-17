// Action Types
export const BOX_CLICKED = "PLAYER_CLICKED";

// Action Objects
export function boxClicked(boxId) {
    return { type: BOX_CLICKED, boxId }
}