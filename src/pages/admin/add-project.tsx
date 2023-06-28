import NewProject from '@/templates/Admin/AddProject'
import WithAuth from '@/utils/withAuth'
import { InputValue, FormEvent } from '@/types/form'

const AddProject = () => {
  const onSubmit = (e: FormEvent, formValues: InputValue) => {
    console.log(e, formValues)
  }

  return (
    <WithAuth>
      <NewProject onSubmit={onSubmit} />
    </WithAuth>
  )
}

export default AddProject
