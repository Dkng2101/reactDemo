import React from "react"
import AppTheme from "../../shared-theme/AppTheme"
import { Box, CssBaseline, Stack } from "@mui/material"
import SideMenu from "../../dashboard/components/SideMenu"
import AppNavbar from "../../dashboard/components/AppNavbar"
import { treeViewCustomizations } from "../../dashboard/theme/customizations"
import MainGrid from "../../dashboard/components/MainGrid"
import Header from "../../dashboard/components/Header"

const xThemeComponents = {
  ...treeViewCustomizations,
}

function Simple(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  )
}

export default Simple
