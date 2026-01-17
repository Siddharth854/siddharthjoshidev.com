// src/components/Footer.jsx
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footerColumns = [
  {
    title: "Company",
    links: ["About", "Blog", "Press", "Jobs", "Partners"],
  },
  {
    title: "Products",
    links: ["Features", "Pricing", "Integrations", "Demo", "Docs"],
  },
  {
    title: "Support",
    links: ["Help Center", "Terms", "Privacy", "Status", "Contact"],
  },
  {
    title: "Developers",
    links: ["API", "Open Source", "SDKs", "Changelog", "Guides"],
  },
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "common.black", color: "common.white" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {footerColumns.map((col) => (
            <Grid item xs={12} sm={6} md={3} key={col.title}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: 700, letterSpacing: 0.2 }}
              >
                {col.title}
              </Typography>

              <Stack component="nav" spacing={0.5}>
                {col.links.map((label) => (
                  <Link
                    key={label}
                    href="#"
                    underline="none"
                    color="inherit"
                    sx={{
                      display: "block",
                      py: 0.6,
                      borderRadius: 1,
                      "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
                      fontSize: 14,
                    }}
                    aria-label={`${label} link`}
                  >
                    {label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.08)", my: { xs: 4, md: 6 } }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="grey.300">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="facebook"
              size="small"
              sx={{ color: "white", bgcolor: "rgba(255,255,255,0.04)" }}
              href="#"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="twitter"
              size="small"
              sx={{ color: "white", bgcolor: "rgba(255,255,255,0.04)" }}
              href="#"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              size="small"
              sx={{ color: "white", bgcolor: "rgba(255,255,255,0.04)" }}
              href="#"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
