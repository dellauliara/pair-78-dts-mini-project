import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box sx={{ display: "block", backgroundColor: "#852f2f"}}>
      <Box sx={{ display: "flex", width: 700, margin: 5}}>
        <Typography className="footbarContent" sx={{ml:10, mt:5, fontSize:14}}>
          <Box>
              Audio and Subtitles
          </Box>
          <Box>Media Center</Box>
          <Box>
              Security
          </Box>
          <Box>Contact Us</Box>
        </Typography>
        <Typography className="footbarContent" sx={{ml:10, mt:5, fontSize:14}}>
          <Box>          
              Audio Description          
          </Box>
          <Box>Investor Relations</Box>
          <Box>          
              Legal Provisions          
         </Box>
        </Typography>
        
        <Typography className="footbarContent" sx={{ml:10, mt:5, fontSize:14}}>
          <Box>          
              Audio Description          
          </Box>
          <Box>Investor Relations</Box>
          <Box>          
              Legal Provisions          
         </Box>
        </Typography>
      </Box>
      <Typography sx={{fontSize:14, mb:9, color:"#c0c0c0"}}>Created by Diella Aulia Destyaswara | 2022</Typography>
    </Box>
  );
};

export default Footer;
