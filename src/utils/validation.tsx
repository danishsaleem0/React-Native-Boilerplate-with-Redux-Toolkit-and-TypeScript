import * as Yup from 'yup';

// login
export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    )
    .required('Password is required'),
});

//  verify email
export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

// signup
export const signupSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(3, ({min}) => `Full name must be at least ${min} characters`)
    .max(20, ({max}) => `Full name not be more than ${max} characters`),
  email: Yup.string().email('Invalid email').required('Email is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    )
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm Password Required'),
});

// edit profile schema
export const editProfileSchema = Yup.object().shape({
  userName: Yup.string()
    .required('User name Required')
    .min(3, ({min}) => `User name must be at least ${min} characters`)
    .max(20, ({max}) => `User name not be more than ${max} characters`),
  email: Yup.string().email('Invalid email').required('Email Required'),

  contactNumber: Yup.string()
    .required('Contact Number Required')
    .min(10, ({min}) => `Contact Number must be at least 11 characters`)
    .max(12, ({max}) => `Contact Number not be more than ${max} characters`),
  cnicNumber: Yup.string()
    .required('CNIC Number Required')
    .min(15, ({min}) => `CNIC Number must be at least 13 characters`),
});

// reset password
export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm Password Required'),
});

// change password schema
export const changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(8, ({min}) => `Current password must be at least ${min} characters`)
    .required('Current password is required'),
  newPassword: Yup.string()
    .min(8, ({min}) => `New password must be at least ${min} characters`)
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Confirm passwords do not match')
    .required('Confirm password is required'),
});
