import { RegisterForm } from '@/widgets/auth/forms/RegisterForm'

const CreateAccountPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 md:gap-4">
      <RegisterForm />
    </div>
  )
}

export default CreateAccountPage
