type Task = { title: string }

type State = {
    isFetching: boolean,
    task?: Task,
    error?: Error
}

type FetchAction = {
    type: "TASK_FETCH"
}

type SuccessAction = {
    type: "TASK_SUCCESS"
    payload: Task
}

type FailAction = {
    type: "TASK_FAIL",
    payload: Error
}

type Actions = FetchAction | SuccessAction | FailAction;

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