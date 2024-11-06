import React, { useState,useEffect } from 'react';
import { useFormik, Field } from 'formik';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, styled } from '@mui/material';
import * as Yup from 'yup';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#d9dbde',
        },
    },
    inputProps: {
        style: {
            color: '#d9dbde', // Set your desired font color
        },
    },
    '& input': {
        color: '#d9dbde',
    }

})

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup
        .string()
        .trim()
        .required('Email is required')
        .matches(
            /^(([a-zA-Z0-9!#$%&'*+-\/=?^_`{|]{1,64})([@]{1})([a-zA-Z0-9-.]{2,160})([.]{1})([a-zA-Z0-9-.]{2,24}))$/i,
            'Please enter valid email'
        ),
    phone: Yup.string().required('Phone is required').matches(/^\d{10}$/, 'Please enter valid number'),
    coverletter: Yup.string().required('Message is required'),
    resumeFile: Yup.mixed().required('Please select a file.'),
});


const MyForm = ({positionName, setIsFormSubmitted,setModelOpen}) => {
    

    const [isValidForm, setIsValidForm] = useState(false)

    const [emailDetails, setEmailDetails] = useState(null)

    const getEmailAuthDetails = async()=>{

        const response = await fetch('https://bntblogs.s3.ap-south-1.amazonaws.com/email/email.txt')
        const data = await response.json();
        console.log('Email data : ',data)
        setEmailDetails(data.allblogs)

    }

    useEffect(()=>{
        getEmailAuthDetails()

    },[])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            coverletter: '',
            resumeFile: null
        },
        validationSchema,
        onSubmit: async (values) => {
            setModelOpen(false)
            try {
                // Prepare the form data to send to the API
                const formData = new FormData();
                formData.append('name', values.name);
                formData.append('email', values.email);
                formData.append('phone', values.phone);
                formData.append('coverletter', values.coverletter);
                formData.append('resumeFile', values.resumeFile);
                formData.append('positionName', positionName);
                formData.append('emailDetails', JSON.stringify(emailDetails));

                // Send the form data to the API endpoint
                const response = await fetch('/api/submitForm', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('Form submitted successfully!');
                    setIsFormSubmitted(true)
                    setModelOpen(false)
                } else {
                    console.error('Form submission failed.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
    });

    return (
        <form style={{ width: '80%' }} onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
                sx={{ width: { sm: '100%', xs: '95%' }, }}

            />
            <br></br><br></br>

            <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ width: { sm: '100%', xs: '95%' }, }}
            />

            <br></br><br></br>

            <TextField
                id="phone"
                name="phone"
                label="Phone"
                variant="outlined"
                type="number"
                pattern="[0-9]"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
                sx={{ width: { sm: '100%', xs: '95%' } }}
                InputProps={{
                    style: {
                        borderColor: 'red', // Set your desired border color
                    },
                }}
            />


            <br></br><br></br>

            <TextField
                multiline
                id="coverletter"
                name="coverletter"
                label="coverletter"
                rows={4}
                value={formik.values.coverletter}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.coverletter && formik.errors.coverletter}
                helperText={formik.touched.coverletter && formik.errors.coverletter}
                sx={{ width: { sm: '100%', xs: '95%' }, }}
            />

            <br></br><br></br>

            <TextField
                type="file"
                name="resumeFile"
                label="Resume"
                onChange={(event) => {
                    formik.setFieldValue('resumeFile', event.currentTarget.files[0]);
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.resumeFile && formik.errors.resumeFile}
                helperText={formik.touched.resumeFile && formik.errors.resumeFile}
                inputProps={{ accept: '.pdf,.doc,.docx' }}
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <br></br>

            <Button disabled={Object.keys(formik.touched).length === 0 || !formik.isValid} sx={{ width: { sm: '100%', xs: '95%' }, margin: '30px 0 30px 0' }} type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default MyForm;
