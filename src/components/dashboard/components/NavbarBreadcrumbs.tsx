import * as React from "react"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs"
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded"
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom"

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: "center",
  },
}))

const onCLick = () => {
  return <Route path="/"></Route>
}

export default function NavbarBreadcrumbs() {
  return (
    <div>
      <StyledBreadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextRoundedIcon fontSize="small" />}
      >
        <Typography
          onClick={onCLick()}
          component="span"
          variant="body1"
          sx={{ color: "text.primary" }}
        >
          Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          Home
        </Typography>
      </StyledBreadcrumbs>
      <Typography
        variant="h4"
        sx={{ color: "text.primary", fontWeight: 600 }}
      >
        Simple
      </Typography>
    </div>
  )
}
