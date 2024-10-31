import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Stack, Typography } from "@mui/material"

export default function AccountHeader() {
  return (
    <Stack alignItems="center" direction="row" gap={0.3}>
      <AccountCircleIcon></AccountCircleIcon>
      <Typography>UserName</Typography>
    </Stack>
  )
}
