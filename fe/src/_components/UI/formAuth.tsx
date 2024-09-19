import { Button } from "@/_components/shadcn/ui/button"
import { Form } from "@/_components/shadcn/ui/form"
import Input_form from "@/_components/UI/Input_form"
import { useAuthForm } from "@/Hooks/Forms/Form_auth"
import { Link } from "react-router-dom"

export const description =
    "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export default function Form_auth({ mode }: { mode?: string }) {
    const { form, onSubmit } = useAuthForm(mode);
    return (
        <div className="w-full lg:grid min-h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">{
                            (mode === 'signup') ? 'Đăng kí' : 'Đăng nhập'
                        }</h1>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
                            {
                                (mode === 'signup') &&
                                <Input_form dataInputForm={{
                                    form,
                                    text: 'Tên đăng nhập:',
                                    name: 'username',
                                    type: 'text',
                                    textPlaceholder: 'Enter'
                                }} />
                            }
                            <Input_form dataInputForm={{
                                form,
                                text: 'Email:',
                                name: 'email',
                                type: 'text',
                                textPlaceholder: 'Enter'
                            }} />
                            <Input_form dataInputForm={{
                                form,
                                text: 'Mật khẩu:',
                                name: 'password',
                                type: 'password',
                                textPlaceholder: 'Enter'
                            }} />
                            {
                                (mode === 'signup') &&
                                <Input_form dataInputForm={{
                                    form,
                                    text: 'Xác nhận mật khẩu:',
                                    name: 'confirm_password',
                                    type: 'password',
                                    textPlaceholder: 'Enter'
                                }} />
                            }
                            <Button type="submit" className="w-full">
                                {(mode === 'signup') ? 'Đăng kí' : 'Đăng nhập'}
                            </Button>
                            <Button variant="outline" className="w-full">
                                Đăng {mode === 'signup' ? 'kí' : 'nhập'} với Google
                            </Button>
                        </form>
                    </Form>
                    <div className="mt-4 text-center text-sm">
                        {(mode === 'signup') ? 'Đã có' : 'Chưa có'} tài khoản?{" "}
                        <Link to={(mode === 'signup') ? '/signin' : '/signup'} className="underline">
                            {
                                (mode === 'signup') ?
                                    'Đăng nhập' : 'Đăng kí'
                            }
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                    src="/placeholder.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
