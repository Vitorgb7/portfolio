import styled from "@emotion/styled";
import Avatar from "../../../../assets/img/avatar.jpg"
import { Box, Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import { downloadCurriculumVitae } from "./dowload-cv";

const HeroSection = () => {

    const StyledHero = styled("div")(() => ({
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up('xs')]: { // <= mobile
        paddingTop: "100px",

    },
    [theme.breakpoints.up('md')]: { // >=mobile
        paddingTop: "0",
    }
    }))
    const StyledImg = styled("img")(() => ({
      width: "80%",
      borderRadius: "100px",
      border: "3px solid white"
    }))

    return (
      <>
       <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box position={"relative"}>
                    <Box position={"absolute"} width={"100%"} top={-100} right={0}>
                        <AnimatedBackground />
                    </Box>
                </Box>
                <Box position={"relative"} textAlign={"center"}>
                  <StyledImg src={Avatar} alt="foto" />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography color={"primary.contrastText"} variant="h1" textAlign={"center"} pb={2} >Vitor Gabriel</Typography>
                <Typography color={"primary.contrastText"} variant="h2" textAlign={"center"} pb={3}>I'm a Software Developer</Typography>
                <Grid container display={"flex"} justifyContent={"center"} spacing={3}>
                  <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                    <StyledButton onClick={downloadCurriculumVitae}>
                      <DownloadIcon/>
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </Grid>

                  <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                    <StyledButton>
                      <EmailIcon />
                      <Typography>Contact Me</Typography>
                    </StyledButton>
                  </Grid>

                </Grid>
              </Grid>
          </Grid>
        </Container>
       </StyledHero>
      </>
    )
  }
  
  export default HeroSection;
  