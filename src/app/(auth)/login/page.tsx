import { LoginForm } from '@/widgets/auth/forms/LoginForm'

const LoginPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 md:gap-4">
      <LoginForm />
    </div>
  )
}

export default LoginPage
