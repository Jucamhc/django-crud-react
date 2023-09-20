/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom'

const TasksCard = ({ tasks }) => {

    const navigate = useNavigate()

    return (
        <>
            {
                tasks.map(task => (
                    <div
                        style={{ background: "black" }}
                        key={task.id}
                        onClick={() => {
                            navigate(`/task/` + task.id)
                        }}>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default TasksCard
