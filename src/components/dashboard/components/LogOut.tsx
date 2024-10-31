import LogoutIcon from "@mui/icons-material/Logout"
import { Stack, Typography } from "@mui/material"

export default function LogOut() {
  return (
    <Stack alignItems="center" direction="row" gap={0.2}>
      <LogoutIcon></LogoutIcon>
      <Typography>Logout</Typography>
    </Stack>
  )
}
