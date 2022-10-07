// material
/* global google */
import { Stack, Button, Divider, Typography } from '@mui/material';
import { useEffect} from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export default function AuthSocial() {
   const navigate = useNavigate()

  // function handleResponse(res) {
  //   const decoded = jwt_decode(res.credential);
  //   console.log('Response is ', decoded);
  //   navigate('/dashboard/app', { replace: true });
  // }

  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id: '1081778984099-d5a8cvgis2g68d80ci82gvg22eo4981j.apps.googleusercontent.com',
  //     callback: handleResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById('googleButton'), { theme: 'outline', size: 'large' });
  //   google.accounts.id.prompt();
  // });

  const googleLogin = () => {
    window.open("http://localhost:1185/auth/google", "_self")
  }

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined" onClick={googleLogin}>
          <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
