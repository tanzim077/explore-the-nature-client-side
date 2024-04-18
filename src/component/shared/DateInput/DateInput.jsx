/*
 * File           : DateInput.jx
 * Project        : explore-the-nature-client-side
 * Created Date   : Fr 19 Apr 2024 01:00:49
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Fri Apr 19 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { FormControl, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import * as React from 'react';
import { Controller } from 'react-hook-form';

export default function DateInput({
  name,
  rules,
  control,
  errors,
  dirtyFields,
  element = TextField,
  children,
  dateChange,
  ...otherProps
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['MobileDateTimePicker']}>
                <DemoItem
                  error={!!errors?.[name]}
                  helperText={errors?.[name] ? errors[name].message : ' '}
                  {...otherProps}
                  {...field}
                  //   label='Mobile variant'
                >
                  {children}
                  <MobileDateTimePicker
                    onChange={(e) => dateChange(name, e)}
                    defaultValue={dayjs('2022-04-17T15:30')}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </FormControl>
        </>
      )}
    />
  );
}
