import { useForm } from 'react-hook-form'
import { createTaks, deleteTask, getOneTasks, updateTak } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

const TaskFormPage = () => {

  const navigate = useNavigate()
  const params = useParams()

  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = handleSubmit(async data => {
    params.id ? await updateTak(params.id, data) : createTaks(data)
    navigate('/tasks')
  })

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const {data} = await getOneTasks(params.id)
        setValue('title', data.title)
        setValue('description', data.description)
      }
    }
    loadTask()
  }, [])


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="title" {...register("title", { required: true })} />
        <textarea rows="3" placeholder="Description" {...register("description", { required: true })}></textarea>
        <button>Save</button>
        {params.id &&
          <button
            onClick={async () => { await deleteTask(params.id); navigate('/tasks'); }}>
            Delete
          </button>}
      </form>
    </div>
  )
}

export default TaskFormPage
