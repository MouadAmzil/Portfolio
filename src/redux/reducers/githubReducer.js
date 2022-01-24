import { ActionTypeGithub } from "../contants/action-type"

const intialState = {
    GitProject: []
}

export const GithubReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypeGithub.GET_TOP_Six_PROJECT:
            return { ...state, GitProject: payload };
        default:
            return state;
    }
}