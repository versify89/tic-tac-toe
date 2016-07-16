export const BOX_CLICKED = "PLAYER_CLICKED";

export function boxClicked(boxId) {
    return { type: BOX_CLICKED, boxId }
}