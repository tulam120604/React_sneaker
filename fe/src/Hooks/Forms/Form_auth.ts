import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaAuth } from '@/Config/Zod_validate';
import { IAuth } from '@/types/Auth';

export const useAuthForm = (mode?: string) => {
    let defaultValuesForm: IAuth = {
        email: '',
        password: '',
    }
    if (mode === 'signup') {
        defaultValuesForm = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    const form = useForm({
        resolver: zodResolver(schemaAuth),
        defaultValues: defaultValuesForm
    });

    const onSubmit = (value: IAuth) => {
        console.log(value)
    };

    return {
        form,
        onSubmit
    }
}