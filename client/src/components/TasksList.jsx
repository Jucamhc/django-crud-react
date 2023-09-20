import { useEffect, useState } from "react"
import { getAllTasks } from '../api/tasks.api'
import TasksCard from "./TasksCard"

const TasksList = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
            console.log(res);
        }

        loadTasks()
    }, [])

    return (
        <>
            <TasksCard tasks={tasks} />
        </>
    )
}

export default TasksList
