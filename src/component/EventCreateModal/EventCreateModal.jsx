/*
 * File           : EventCreateModal.jsx
 * Project        : explore-the-nature-client-side
 * Created Date   : Th 18 Apr 2024 10:49:12
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Thu Apr 18 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import { LoadingButton } from '@mui/lab';
import { Grid, Stack } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { animated, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DateInput from '../shared/DateInput/DateInput';
import FormInput from '../shared/formInput';

const Fade = React.forwardRef(function Fade(props, ref) {
  const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EventCreateModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dateValue, setDateValue] = React.useState({});
  const dateChange = (name, date) => {
    setDateValue({ ...dateValue, [name]: date.$d });
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
      eventCost: '',
      endDateAndTime: '',
    },
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      data = { ...data, ...dateValue };
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container>
              <Grid item xs={4}>
                image
              </Grid>
              <Grid item xs={8}>
                <form autoComplete='on' onSubmit={handleSubmit(onSubmit)}>
                  <Stack spacing={3}>
                    <FormInput
                      margin='dense'
                      name='title'
                      control={control}
                      rules={FORM_SCHEMA.title}
                      errors={errors}
                      label='Title'
                      fullWidth
                    />
                    <FormInput
                      margin='dense'
                      name='eventCost'
                      control={control}
                      rules={FORM_SCHEMA.eventCost}
                      errors={errors}
                      label='Event Cost'
                      fullWidth
                    />
                    <FormInput
                      margin='dense'
                      name='description'
                      control={control}
                      rules={FORM_SCHEMA.description}
                      errors={errors}
                      label='Description'
                      fullWidth
                    />
                    <DateInput
                      type='date'
                      margin='dense'
                      name='startDateAndTime'
                      dateChange={dateChange}
                      control={control}
                      rules={FORM_SCHEMA.startDateAndTime}
                      errors={errors}
                      label='Start Date and Time'
                      fullWidth
                    />

                    <DateInput
                      type='date'
                      margin='dense'
                      name='endDateAndTime'
                      control={control}
                      dateChange={dateChange}
                      rules={FORM_SCHEMA.endDateAndTime}
                      errors={errors}
                      label='End Date and Time'
                      fullWidth
                    />
                  </Stack>

                  <br />
                  <LoadingButton fullWidth size='large' type='submit' variant='contained' color='inherit'>
                    Save
                  </LoadingButton>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
