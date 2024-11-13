import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    code: Yup.string()
        .required('Code is required')
        .min(3, 'Code must be at least 3 characters long')
        .max(10, 'Code must be less than or equal to 10 characters'),

    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name must be less than or equal to 50 characters'),
});

export default validationSchema;
