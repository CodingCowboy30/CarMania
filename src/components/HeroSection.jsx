
import { Box, Typography } from "@mui/material";
import heroVideo from "../assets/videoplayback.mp4"; // Ensure to provide the correct path to your video*/

const HeroSection = () => {
  

  return (
    <Box
      sx={{
        position: "relative",
        height: "400px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "",
        color: "#fff",
        textShadow: "3px 3px 7px rgba(234, 101, 39, 0.941)",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      <video
        
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Typography variant="h2" component="div">
        GET READY FOR ADVENTURE
      </Typography>
    </Box>
  );
};

export default HeroSection;
