import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,
  TextField,
  Box,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  CircularProgress,
  Backdrop,
  Typography,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Radio,
} from '@mui/material';
import { toast } from 'react-toastify';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// import { reset} from '../../../../store/studentSlice';
import { enrollStudent, reset, status } from '../../../../store/classSlice';

const NewReference = ({ setOpen, course, price }) => {
  console.log(course);
  const { status } = useSelector((state) => state.classroom);
  const [backdrop, setBackdrop] = useState(false);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    course: course ? course : '',
    bank: 'cbe',
    amount: price ? price : 0,
    payment_with: 'cash',
    reference: '',
  });
  const [phone, setPhone] = useState('');
  const [validPhoneNumber, setValidPhone] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    setValues({
      ...values,
      phone,
    });
    if (phone !== undefined) {
      setValidPhone(isValidPhoneNumber(phone));
    }
  }, [phone]);

  useEffect(() => {
    if (status === 'enrolling') {
      setBackdrop(true);
    }
    if (status === 'enrolled') {
      toast.success('New Student enroled successfully!');
      setOpen(false);
      setBackdrop(false);
      dispatch(reset());
    }
  }, [status]);
  const handleSubmit = (e) => {
    e.preventDefault();
    validPhoneNumber && console.log(values);

    validPhoneNumber && dispatch(enrollStudent(values));
  };

  return (
    <>
      <Box
        component='form'
        sx={{
          width: '100%',
        }}
        // noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              inputProps={{ min: 1 }}
              type='number'
              name='amount'
              label='Paid amount in ETB'
              fullWidth
              variant='outlined'
              value={values.amount}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required={values.payment_with === 'bank'}
              name='reference'
              label='Reference Id'
              fullWidth
              variant='outlined'
              value={values.reference}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            sx={{ mt: 3, ml: 1 }}
          >
            Cancel
          </Button>

          <Button
            variant='contained'
            type='submit'
            // fullWidth
            // onClick={handleSubmit}
            sx={{
              mt: 3,
              color: 'white',
              ':hover': {
                backgroundColor: 'primary.main',
              },
            }}
          >
            Enroll
          </Button>
        </Box>
      </Box>
      {/* </Box> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
  );
};

export default NewReference;
