import { combineReducers } from "redux"
import { GithubReducer } from "./githubReducer"

export const reducers = combineReducers({
    AllSixProjects: GithubReducer
})