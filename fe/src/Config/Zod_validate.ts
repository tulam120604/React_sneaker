import { z } from 'zod';

export const schemaAuth = z.object({
    username: z.string().min(2, { message: 'User name ít nhất 2 kí tự!' }).max(50, { message: 'User name tối đa 50 kí tự!' })
        .refine((value) => value === undefined || value.trim() !== '', {
            message: 'User name không được chỉ chứa khoảng trắng!',
        }),
    email: z.string({ required_error: 'Email là bắt buộc!' }).email({ message: 'Email không đúng định dạng!' }).min(2, { message: 'Email ít nhất 2 kí tự!' })
        .max(25, { message: 'Email tối đa 25 kí tự!' }),
    password: z.string({ required_error: 'Mật khẩu là bắt buộc!' }).min(6, { message: 'Mật khẩu ít nhất 6 kí tự!' }).max(25, { message: 'Mật khẩu tối đa 25 kí tự!' }),
    confirmPassword: z.string({ required_error: 'Xác nhận mật khẩu là bắt buộc!' }).min(6, { message: 'Mật khẩu ít nhất 6 kí tự!' })
        .max(25, { message: 'Mật khẩu tối đa 25 kí tự!' })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .refine((value: any) => value.password === value.confirmPassword, {
            message: 'Xác nhận mật khẩu phải khớp với mật khẩu!',
            path: ['confirmPassword']
        }),
});