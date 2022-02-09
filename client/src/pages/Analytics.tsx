import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { useActions } from "../app/useActions";
import AnalyticsChart from "../components/AnalyticsChart";
import AnalyticsSlider from "../components/AnalyticsSlider";
import { changeLoaderInstanceAction } from "../store/reducers/userReducer";

const Analytics: React.FC = () => {
  const { getChartData } = useActions();
  const chartData = useAppSelector((state) => state.user.analyticsData);
  const dispatch = useDispatch();

  useEffect(() => {
    getChartData();
    dispatch(changeLoaderInstanceAction(true));
  }, []);

  return (
    <Container>
      <h3>Analytics based on new city mall "JUMBO"</h3>
      {chartData?.length ? (
        <>
          <AnalyticsChart chartData={chartData} />
          <AnalyticsSlider chartData={chartData} />
        </>
      ) : null}
    </Container>
  );
};

export default Analytics;
