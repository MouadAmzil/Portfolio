import { ActionTypeGithub } from "../contants/action-type"

export const SelectTopSix = (GitProject) => {
    return {
        payload: GitProject,
        type: ActionTypeGithub.GET_TOP_Six_PROJECT
    }
}