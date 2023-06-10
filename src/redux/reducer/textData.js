const initialState = "Chaabi is a skill-tech platform focused on helping blue-collar workers in India upskill themselves through a mix of self-paced learning modules, adaptive quizzes, and entertaining content adaptive & gamified platform engaging learning experience tailored to individual needs using game-like elements for increased motivation & retention.";

const textData = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE":
            return (state = action.data);
        case "RESET":
            return (state = initialState);
        default:
            return state;
    }
};

export default textData;