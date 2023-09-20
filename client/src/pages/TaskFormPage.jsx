import { useForm } from 'react-hook-form'
import { createTaks, deleteTask, getOneTasks, updateTak } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { toast } from 'react-hot-toast'

const TaskFormPage = () => {

  const navigate = useNavigate()
  const params = useParams()

  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTak(params.id, data);
      toast.success('Tarea Actualizada', {
        position: "bottom-right", style:
        {
          background: "#101010",
          color: "#fff"
        }
      })
    } else {
      createTaks(data); toast.success('Tarea Creada', {
        position: "bottom-right", style:
        {
          background: "#101010",
          color: "#fff"
        }
      })
    }

    navigate('/tasks')
  })

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getOneTasks(params.id)
        setValue('title', data.title)
        setValue('description', data.description)
      }
    }
    loadTask()
  }, [])


  return (
    <div className='max-w-xl mx-auto'>
      <form
        className=''
        onSubmit={onSubmit}>
        <input
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          type="text"
          placeholder="title"
          {...register("title", { required: true })} />
        <textarea
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}></textarea>

        <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>

        {params.id &&
          <div className='flex justify-end'>
            <button
              className='bg-red-500 p-3 rounded-lg w-48 mt-3'
              onClick={async () => {
                await deleteTask(params.id);
                navigate('/tasks');
                toast.success('Tarea Eliminada', {
                  position: "bottom-right", style:
                  {
                    background: "#101010",
                    color: "#fff"
                  }
                })
              }}>
              Delete
            </button>
          </div>
          }
      </form>
    </div>
  )
}

export default TaskFormPage
