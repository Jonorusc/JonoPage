import Template from '@/templates/Admin/AddProject'
import { InputValue, FormEvent } from '@/types/form'

const AddProject = () => {
  const onSubmit = (e: FormEvent, formValues: InputValue) => {
    console.log(e, formValues)
  }
  return (
    <main>
      <Template onSubmit={onSubmit} />
    </main>
  )
}

export default AddProject
