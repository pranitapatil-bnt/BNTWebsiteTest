import React, { useState, useEffect } from 'react';
import { useFormik, Field } from 'formik';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, styled, Snackbar, Alert } from '@mui/material';
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
    email:Yup
    .string()
    .trim()
    .required('Email is required')
    .matches(
      /^(([a-zA-Z0-9!#$%&'*+-\/=?^_`{|]{1,64})([@]{1})([a-zA-Z0-9-.]{2,160})([.]{1})([a-zA-Z0-9-.]{2,24}))$/i,
      'Please enter valid email'
    ),
    phone:Yup.string().required('Phone is required').matches(/^\d{10}$/,'Please enter valid number'),
    businessType: Yup.string().required('Business Type is required'),
    services: Yup.string().required('Services is required'),
    message: Yup.string().required('Message is required'),
});

const bussinesTypes = [
    {
        value: 'Banking & Finance',
        label: 'Banking & Finance',
    },
    {
        value: 'Retail Business',
        label: 'Retail Business',
    },
    {
        value: 'E Commerce',
        label: 'E Commerce',
    },
    {
        value: 'Startup',
        label: 'Startup',
    },
    {
        value: 'Individual',
        label: 'Individual',
    }
];

const MyForm = () => {

    const [emailDetails, setEmailDetails] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const getEmailAuthDetails = async () => {
        const response = await fetch('https://bntblogs.s3.ap-south-1.amazonaws.com/email/email.txt');
        const data = await response.json();
        setEmailDetails(data.allblogs);
    };
    useEffect(() => {
        getEmailAuthDetails();
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            businessType: 'Banking & Finance',
            services: 'Acquiring Solutions',
            message: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { name, email, phone, businessType, services, message } = values;
                const response = await fetch('/api/contactUSsubmitForm', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        businessType,
                        services,
                        message,
                        emailDetails: JSON.stringify(emailDetails),
                    }),
                });
                if (response.ok) {
                    console.log('Form submitted successfully!');
                    setSuccessMessage('Form submitted successfully!');
                    setOpenSnackbar(true);

                    formik.resetForm();
                } else {
                    setSuccessMessage('Form submission failed.');
                    setOpenSnackbar(true);
                }
            } catch (error) {
                setSuccessMessage('Error submitting form.');
                setOpenSnackbar(true);
                console.error('Error submitting form:', error)
            }
        },
    });

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false); 
    };

    return (
    <>
        <form onSubmit={formik.handleSubmit}>
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
                sx={{ width: { sm: '70vw', xs: '95vw' }, }}

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
                sx={{ width: { sm: '70vw', xs: '95vw' } }}
            />

            <br></br><br></br>

            <TextField
                id="phone"
                name="phone"
                label="Phone"
                variant="outlined"
                type="number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
                sx={{ width: { sm: '70vw', xs: '95vw' } }}
                InputProps={{
                    style: {
                        borderColor: 'red', // Set your desired border color
                    },
                }}
            />

            <br></br><br></br>
            <FormControl>
                <InputLabel id="businessTypeLabel">Business Type</InputLabel>
                <Select
                    labelId="businessTypeLabel"
                    id="businessType"
                    name="businessType"
                    value={formik.values.businessType}
                    label="Business Type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.businessType && formik.errors.businessType}
                    helperText={formik.touched.businessType && formik.errors.businessType}
                    sx={{ width: { sm: '70vw', xs: '95vw' } }}
                >
                    <MenuItem value="Banking & Finance">Banking & Finance</MenuItem>
                    <MenuItem value="Retail Business">Retail Business</MenuItem>
                    <MenuItem value="E Commerce">E Commerce</MenuItem>
                    <MenuItem value="Startup">Startup</MenuItem>
                    <MenuItem value="Individual">Individual</MenuItem>
                </Select>
            </FormControl>

            <br></br><br></br>

            <FormControl>
                <InputLabel id="servicesLabel">Services</InputLabel>
                <Select
                    labelId="servicesLabel"
                    id="services"
                    name="services"
                    value={formik.values.services}
                    label="Services"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.services && formik.errors.services}
                    helperText={formik.touched.services && formik.errors.services}
                    sx={{ width: { sm: '70vw', xs: '95vw' } }}
                >
                    <MenuItem value="Acquiring Solutions">Acquiring Solutions</MenuItem>
                    <MenuItem value="Processor Solutions">Processor Solutions</MenuItem>
                    <MenuItem value="Digital Payment">Digital Payment</MenuItem>
                    <MenuItem value="Prepaid Cards">Prepaid Cards</MenuItem>
                    <MenuItem value="E-Wallets">E-Wallets</MenuItem>
                </Select>
            </FormControl>

            <br></br><br></br>

            <TextField
                multiline
                id="message"
                name="message"
                label="Message"
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && formik.errors.message}
                helperText={formik.touched.message && formik.errors.message}
                sx={{ width: { sm: '70vw', xs: '95vw' } }}
            />

            <br></br>

            <Button disabled={Object.keys(formik.touched).length===0 || !formik.isValid} sx={{ width: { sm: '70vw', xs: '95%' }, margin: '30px 0 30px 0' }} type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
           {/* Snackbar for form submission */}
           <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Centered snackbar
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    {successMessage}
                </Alert>
            </Snackbar>
    </>
    );
};

export default MyForm;
