import React from "react";
import moment from "moment";
import { Box, Card, CardContent, Typography, Divider } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const todaysDate = moment().format("MMM Do, YYYY");

const TomatoesCard = ({ tomatoes }) => {
  return (
    <React.Fragment>
      <Box width="100%">
        <Card>
          <CardContent>
            <Typography variant="h5" style={{ margin: 5 }}>
              {todaysDate}
            </Typography>
            <Divider />
            {tomatoes.length < 1 ? (
              <Typography
                variant="h6"
                style={{ textAlign: "center", margin: 10 }}
              >
                Tomatoes go here..
              </Typography>
            ) : (
              tomatoes.map((tomato) => (
                <FiberManualRecordIcon
                  color="primary"
                  fontSize="large"
                  key={tomato.id}
                />
              ))
            )}
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default TomatoesCard;
