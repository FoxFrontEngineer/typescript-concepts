/* action-creators */
const createFetch = () => ({
    type: "TASK_FETCH"
} as const);

const createSuccess = (task: Task) => ({
    type: "TASK_SUCCESS",
    payload: task
} as const);

const createFail = (error: Error) => ({
    type: "TASK_FAIL",
    payload: error
} as const);
/* action-creators */

type Task = { title: string }

type State = 
| {isFetching: true}
| {isFetching: false; task: Task}
| {isFetching: false; error: Error}

type Actions = 
ReturnType<typeof createFetch> | 
ReturnType<typeof createSuccess> | 
ReturnType<typeof createFail>;

export const taskReducer = (state: State, action: Actions): State => {
    switch (action.type) {
        case "TASK_FETCH":
            return { isFetching: true }
        case "TASK_SUCCESS":
            return { isFetching: false, task: action.payload }
        case "TASK_FAIL":
            return { isFetching: false, error: action.payload }
    }
    const _exhaustiveCheck: never = action;
    return state;
}