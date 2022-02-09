import {
  ArgumentAxis,
  Legend,
  LineSeries,
  Title,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { Paper } from "@mui/material";
import React from "react";
import {
  format,
  IAnalyticsChart,
  Item,
  Label,
  Root,
  StyledChart,
  TitleText,
  ValueLabel,
} from "./AnalyticsHelpers";

const AnalyticsChart: React.FC<IAnalyticsChart> = ({ chartData }) => {
  return (
    <Paper>
      {chartData?.length ? (
        <StyledChart data={chartData}>
          <ArgumentAxis tickFormat={format} />
          <ValueAxis labelComponent={ValueLabel} />
          <LineSeries
            name="Visitors"
            valueField="visitors"
            argumentField="day"
          />
          <Legend
            position="bottom"
            rootComponent={Root}
            itemComponent={Item}
            labelComponent={Label}
          />

          <Animation />
        </StyledChart>
      ) : null}
    </Paper>
  );
};

export default AnalyticsChart;
