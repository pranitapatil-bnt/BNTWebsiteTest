import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
  IconButton,
  Box,
  Drawer,
  styled,
} from '@mui/material';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Close as CloseIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#0000ff',
    },
  },
  inputProps: {
    style: {
      color: '#000',
    },
  },
  '& label.Mui-focused': {
    color: '#0000ff',
  },
  '& .MuiOutlinedInput-root.Mui-focused fieldset': {
    borderColor: '#0000ff',
  },
});

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  companyName: Yup.string(),
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email'),
  phoneNumber: Yup.string().required('Phone number is required'),
  message: Yup.string().required('Please let us know how we can help you'),
});

const ContactUsForm = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [emailDetails, setEmailDetails] = useState(null);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

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
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { firstName, lastName, companyName, email, phoneNumber, message } = values;
        const response = await fetch('/api/contactUSsubmitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            companyName,
            email,
            phoneNumber,
            message,
            emailDetails: JSON.stringify(emailDetails),
          }),
        });
        if (response.ok) {
          console.log('Form submitted successfully!');
          formik.resetForm();
        } else {
          console.error('Form submission failed.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }

      setDrawerOpen(false);
    },
  });

  return (
    <>
      <div
        style={{
          border: 0,
          borderRadius: '5px 5px 0 0',
          borderBottom: 'none',
          cursor: 'pointer',
          width: '170px',
          height: '34px',
          overflow: 'hidden',
          background: 'linear-gradient(90deg, rgba(82,223,160,1) 0%, rgba(98,219,233,1) 0%, rgba(63,94,251,1) 0%, rgba(9,28,96,1) 45%)',
          color: '#fff',
          padding: '2px 0',
          position: 'fixed',
          top: '50%',
          right: '-68px',
          textAlign: 'center',
          transform: 'rotate(-90deg)',
          zIndex: 999,
          fontSize: '18px',
        }}
        onClick={toggleDrawer(true)}
      >
        Contact Us
      </div>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: { sm: '400px', xs: '80vw' },
            padding: '20px',
            position: 'relative',
          }}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px', color: '#141e45', fontWeight: 600 }}>
            Contact Us
          </Typography>


          <form onSubmit={formik.handleSubmit}>
            <CustomTextField
              id="firstName"
              name="firstName"
              label="First name"
              variant="outlined"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && formik.errors.firstName}
              helperText={formik.touched.firstName && formik.errors.firstName}
              sx={{ width: '100%', marginBottom: '15px' }}
            />

            <CustomTextField
              id="lastName"
              name="lastName"
              label="Last name"
              variant="outlined"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && formik.errors.lastName}
              helperText={formik.touched.lastName && formik.errors.lastName}
              sx={{ width: '100%', marginBottom: '15px' }}
            />

            <CustomTextField
              id="companyName"
              name="companyName"
              label="Company name"
              variant="outlined"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={{ width: '100%', marginBottom: '15px' }}
            />

            <CustomTextField
              id="email"
              name="email"
              label="Email*"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ width: '100%', marginBottom: '15px' }}
            />


            <FormControl fullWidth sx={{ marginBottom: '15px' }}>
              <PhoneInput
                country={'in'}
                value={formik.values.phoneNumber}
                onChange={(value) => formik.setFieldValue('phoneNumber', value)}
                inputProps={{
                  name: 'phoneNumber',
                  required: true,
                }}
                inputStyle={{
                  width: '100%',
                  // padding: '10px',
                  fontSize: '14px',
                  borderColor: formik.touched.phoneNumber && formik.errors.phoneNumber ? 'red' : '#e0e0e0',
                }}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <Typography variant="caption" color="error">
                  {formik.errors.phoneNumber}
                </Typography>
              )}
            </FormControl>

            <CustomTextField
              id="message"
              name="message"
              label="How Can We Help You*"
              variant="outlined"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && formik.errors.message}
              helperText={formik.touched.message && formik.errors.message}
              sx={{ width: '100%', marginBottom: '20px' }}
            />

            <Button
              disabled={!formik.isValid || Object.keys(formik.touched).length === 0}
              sx={{
                width: '100%',
                padding: '10px 0',
                backgroundColor: '#141e45',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#141e45',
                },
              }}
              type="submit"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Drawer>
    </>
  );
};

export default ContactUsForm;
