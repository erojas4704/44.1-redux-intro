const INITIAL_STATE = { mood: "uwu" };
const faces = {
    "happy": "^ㅂ^",
    "angry": "ಠ_ಠ",
    "sad": "Q.Q",
    "confused": "ↂ_ↂ",
    "uwu": "UwU"
}

const handleMoodClick = e => {
    const element = e.target;
    const mood = element.getAttribute("mood");
    store.dispatch({ type: "SET_MOOD", mood });
    renderFace();
}

function moodReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_MOOD":
            return { ...state, mood: action.mood }
    }
    return state;
}

const renderFace = () => {
    const mood = store.getState().mood;
    document.querySelector("#face").innerText = faces[mood];
}

const store = Redux.createStore(moodReducer);

document.querySelectorAll(".face-changer")
    .forEach(el => el.addEventListener('click', handleMoodClick));