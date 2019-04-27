import { loadUsers } from "./users";
import { loadQuestions } from "./questions";

export const loadListPageInitialData = () => (dispatch) => (
    Promise.all([
        dispatch(loadQuestions()),
        dispatch(loadUsers())
    ])
)

export const loadDetatilPageInitialData = () => (dispatch) => (
    Promise.all([
        dispatch(loadQuestions()),
        dispatch(loadUsers())
    ])
)