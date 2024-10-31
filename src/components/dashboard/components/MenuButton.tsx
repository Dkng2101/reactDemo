import * as React from 'react';
import Badge, { badgeClasses } from '@mui/material/Badge';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';


export interface MenuButtonProps extends IconButtonProps {
  showBadge?: boolean;
}


export default function MenuButton({
  showBadge = false,
  ...props
}: MenuButtonProps) {
  return (
    <Badge

      color="error"
      badgeContent={1}
      invisible={!showBadge}
      sx={{ alignItems: 'center', fontSize: 1}}
    >
      <NotificationsRoundedIcon/>
    </Badge>
  );
}
