/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom'

const TasksCard = ({ tasks }) => {

    const navigate = useNavigate()

    return (
        <>
            {
                tasks.map(task => (
                    <div
                        className='bg-zinc-800 p-3 hover:bg-zinc-600 hover:cursor-pointer'
                        key={task.id}
                        onClick={() => {
                            navigate(`/task/` + task.id)
                        }}>
                        <h1 className='font-bold uppercase'>{task.title}</h1>
                        <p className='text-slate-400'>{task.description}</p>

                    </div>
                ))
            }
        </>
    )
}

export default TasksCard
