/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/SignIn/SigninForm.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Monday, January 22nd 2024, 9:17:02 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import { useState } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from '../../../router/hooks';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../redux/api/user.api.slice';
import { setCredentials } from '../../../redux/slices/auth.slice';
import { bgGradient } from '../../../theme/css';
import FormInput from '../../shared/formInput';

// ----------------------------------------------------------------------

const FORM_SCHEMA = {
  email: { required: 'Email is required' },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Very short password',
    },
  },
};

export default function SignInFormView() {
  const theme = useTheme();
  const [login] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push('/dashboard');
  };
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data) => {
    try {
      const user = await login(data).unwrap();
      dispatch(setCredentials(user));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const renderForm = (
    <>
      <form autoComplete='on' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormInput
            type='email'
            margin='dense'
            name='email'
            control={control}
            rules={FORM_SCHEMA.email}
            errors={errors}
            label='Email'
            fullWidth
          />
          <FormInput
            type='password'
            margin='dense'
            name='password'
            control={control}
            rules={FORM_SCHEMA.password}
            errors={errors}
            label='Password'
            fullWidth
          />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='flex-end' sx={{ my: 3 }}>
          <Link
            onClick={() => navigate('/forget-password')}
            variant='subtitle2'
            underline='hover'
            sx={{ cursor: 'pointer' }}
          >
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton fullWidth size='large' type='submit' variant='contained' color='inherit'>
          Login
        </LoadingButton>
      </form>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_42.jpg',
        }),
        height: 1,
      }}
    >
      {/* <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      /> */}

      <Stack alignItems='center' justifyContent='center' sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant='cst_h4'>Sign in to Explore the Nature</Typography>
          <Typography variant='body2' sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link onClick={() => navigate('/sign-up')} variant='subtitle2' sx={{ ml: 0.5, cursor: 'pointer' }}>
              Get started
            </Link>
          </Typography>
          {/* <SocialMediaLogin/>
          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider> */}
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
