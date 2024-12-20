import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';

import Search from './Search';
import AccountHeader from './AccountHeader';
import LogOut from './LogOut';

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        // display: { xs: 'none', md: 'flex' },
        width: '1900px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={12}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 2 }}>
        <Search />
        {/* <CustomDatePicker /> */}
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <AccountHeader></AccountHeader>
        <LogOut></LogOut>
      </Stack>
    </Stack>
  );
}
