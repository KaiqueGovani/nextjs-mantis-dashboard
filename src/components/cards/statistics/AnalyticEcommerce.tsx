// material-ui
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';

// assets
import FallOutlined from '@ant-design/icons/FallOutlined';
import RiseOutlined from '@ant-design/icons/RiseOutlined';
import { ColorProps } from 'types/extended';

const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

type AnalyticEcommerceProps = {
  color?: ColorProps;
  title: string;
  count: string;
  percentage?: number;
  isLoss?: boolean;
  extra: string;
};

export default function AnalyticEcommerce({ color = 'primary', title, count, percentage, isLoss, extra }: AnalyticEcommerceProps) {
  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
          </Grid>
          {percentage && (
            <Grid item>
              <Chip
                variant="combined"
                color={color}
                icon={!!isLoss ? <FallOutlined style={iconSX} /> : <RiseOutlined style={iconSX} />}
                label={`${percentage}%`}
                sx={{ ml: 1.25, pl: 1 }}
                size="small"
              />
            </Grid>
          )}
        </Grid>
      </Stack>
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="text.secondary">
          You made an extra{' '}
          <Typography variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
            {extra}
          </Typography>{' '}
          this year
        </Typography>
      </Box>
    </MainCard>
  );
}