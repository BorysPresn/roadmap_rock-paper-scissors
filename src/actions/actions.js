export const PLAYER_CHOICE = "PLAYER_CHOICE"
export const RESET_SCORE = "RESET_SCORE"
export const ROUND_RESULT = "ROUND_RESULT"

export function playerChoice(choice) {
    return {
        type: "PLAYER_CHOICE",
        payload: { choice }
    }
}

export function resetScore() {
    return { type: "RESET_SCORE" }
}

export function roundResult(winner, computerChoice) {
    return {
        type: "ROUND_RESULT",
        payload: { winner, computerChoice }
    }
}