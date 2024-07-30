// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import Link from 'next/link';
import { AuthWrapper } from './AuthWrapper';
import { AuthLogin } from './auth-forms/AuthLogin';

// ================================|| LOGIN ||================================ //

export function Login() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Link href={'/register'}>
              <Typography variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                Don&apos;t have an account?
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
