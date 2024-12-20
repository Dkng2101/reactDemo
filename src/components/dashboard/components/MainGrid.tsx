import * as React from "react"
import Grid from "@mui/material/Grid2"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Copyright from "../internals/components/Copyright"
import ChartUserByCountry from "./ChartUserByCountry"
import CustomizedTreeView from "./CustomizedTreeView"
import HighlightedCard from "./HighlightedCard"
import PageViewsBarChart from "./PageViewsBarChart"
import SessionsChart from "./SessionsChart"
import StatCard, { StatCardProps } from "./StatCard"
import { Divider } from "@mui/material"

const data: StatCardProps[] = [
  {
    title: "Users",
    value: "14k",
    interval: "Last 30 days",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: "Conversions",
    value: "325",
    interval: "Last 30 days",
    trend: "down",
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600,
      820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300,
      220,
    ],
  },
  {
    title: "Event count",
    value: "200k",
    interval: "Last 30 days",
    trend: "neutral",
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510,
      530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
]

export default function MainGrid() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "rgba(0,0,0,0.2) 0 0 7px",
        borderRadius: 1,
        width: "1100px",
        alignSelf: "start",
        maxWidth: { sm: "100%", md: "1700px" },
        padding: "15px",
      }}
    >
      {/* cards */}
      <Typography variant="h4" sx={{ mb: 1 }}>
        Overview
      </Typography>
      <Divider></Divider>
      <Grid container spacing={2} sx={{ mt: 2, height: 500 }}>
        <Grid size={5}>
          <Typography variant="subtitle2" style={{ color: 'cornflowerblue', marginBottom: "2px" }}>Email</Typography>
          <div>ducnd@vietis.com.vn</div>
        </Grid>
        <Grid size={7}>
        <Typography variant="subtitle2" style={{ color: 'cornflowerblue', marginBottom: "2px" }}>Gender</Typography>
          <div>Nam</div>
        </Grid>
      </Grid>
    </Box>
  )
}
