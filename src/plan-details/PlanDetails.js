import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { IconArrowRight, IconArrowUp } from "@tabler/icons-react";
import { UserDetailContext } from "../contexts/UserDetailContext";
import { CUSTOMER_DETAILS } from "../constants";
import Plans from "../components/Plans";

function PlanDetails() {
  const history = useHistory();
  const userDetails = useContext(UserDetailContext);
  const [plan, setPlan] = useState();
 
  const handlePlanUpgrade = () => {
    //api to call to submit plan
  };

  useEffect(() => {
    console.log(userDetails);
   userDetails?.plan && setPlan(userDetails.plan);
  },[]);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          left: 0,
          width: "96%",
          margin: "2vw",
        }}
      >
        <Typography>Login as : {userDetails.name}</Typography>
        <Button
          variant="contained"
          color="success"
          endIcon={<IconArrowRight size="15" />}
            onClick={() => history.push(CUSTOMER_DETAILS)}
        >
          Go to customer details
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3vw" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography>Renewal date:</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              {userDetails.renewDte}
            </Typography>
          </Box>
          <Box>
            <Typography>Plan status:</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              {userDetails.status}
            </Typography>
          </Box>
        </Box>
        <Plans selectedPlan={plan} handleSelectedPlan={(planOpt) => setPlan(planOpt?.name?.toLowerCase())} />
        {(plan && userDetails?.plan?.toLowerCase() !== plan?.toLowerCase())&& (
          <Button
            variant="contained"
            startIcon={<IconArrowUp size="15" />}
            sx={{ float: "right", margin: "2vw" }}
            onClick={() => handlePlanUpgrade()}
          >
            Renew plan
          </Button>
        )}
      </Box>
    </div>
  );
}

export default PlanDetails;
