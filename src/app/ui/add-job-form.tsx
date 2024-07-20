'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { JobCreateType, jobSchema } from '~/server/api/routers/jobs/schema';
import { api } from "~/trpc/react";

import { Form } from '~/app/ui/form';
import { FormInput } from '~/app/ui/form-input';
import { FormSubmit } from '~/app/ui/form-submit';

export function AddJobForm() {
    const { refresh } = useRouter();

    const form = useForm<JobCreateType>({
        defaultValues: {
        company: '',
        appliedAt: new Date(),
        },
        resolver: zodResolver(jobSchema),
    });
    
    const { mutate } = api.job.create.useMutation();

    const handleSubmit = (data: JobCreateType) => {
        mutate(data, {
            onSuccess: () => {
                form.reset();
                refresh();
            },
        });
    };

    return (
        <Form form={form} onSubmit={handleSubmit}>
            <FormInput label="Company" name="company" />
            <FormSubmit value="Add Job" />
        </Form>
    )
}