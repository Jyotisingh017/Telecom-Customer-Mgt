import React from "react";
import { Typography, Box, Card } from "@mui/material";

function Plans({selectedPlan,handleSelectedPlan}) {
 
  const planOptions = [
    {
      name: "Platinum365",
      cost: "499",
      validity: "365 days",
      status: "",
    },
    {
      name: "Gold180",
      cost: "299",
      validity: "185 days",
      status: "",
    },
    {
      name: "Silver90",
      cost: "199",
      validity: "90 days",
      status: "",
    },
  ];
  return (
    <Box sx={{display:'flex',gap:'2vw'}}>
      {planOptions.map((plan) => (
        <Card
         key={plan.name}
         role="plan"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2vw",
            padding: "1vw",
            width:"10vw",
            cursor:'pointer',
            background: selectedPlan && selectedPlan?.toLowerCase() === plan?.name?.toLowerCase() && '#9AC0D5'
          }}
          onClick={()=>handleSelectedPlan(plan)}
        >
          <Typography>{plan.name}</Typography>
          <Typography>{plan.cost}</Typography>
          <Typography>{plan.validity}</Typography>
        </Card>
      ))}
      
    </Box>
  );
}

export default Plans;
