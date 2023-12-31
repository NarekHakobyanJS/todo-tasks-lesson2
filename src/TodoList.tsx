import {FilterValuesType} from './App'
export type TaskType = {
    id: number,
    title: string,
    isDone: boolean

}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: number) => void,
    changeFilter : (value : FilterValuesType) => void
};

export const TodoList = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t) => <li>
                        <input
                            checked={t.isDone}
                            type='checkbox' />
                        <span>{t.title}</span>
                        <button onClick={() => { props.removeTask(t.id) }}>X</button>
                    </li>
                    )
                }
            </ul>
            <div>
                <button onClick={() => props.changeFilter('all')}>all</button>
                <button onClick={() => props.changeFilter('active')}>Active</button>
                <button onClick={() => props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}