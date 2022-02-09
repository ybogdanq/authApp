import {
  Chart,
  Legend,
  Title,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { styled } from "@mui/material/styles";

const PREFIX = "Demo";

const classes = {
  chart: `${PREFIX}-chart`,
};

export const format = () => (tick: any) => tick;

export const Root = (
  props: JSX.IntrinsicAttributes &
    Legend.RootProps & {
      [x: string]: any;
      className?: string | undefined;
      style?: React.CSSProperties | undefined;
    }
) => (
  <Legend.Root
    {...props}
    sx={{ display: "flex", margin: "auto", flexDirection: "row" }}
  />
);

export const Label = (
  props: JSX.IntrinsicAttributes &
    Legend.LabelProps & {
      [x: string]: any;
      className?: string | undefined;
      style?: React.CSSProperties | undefined;
    } & { children?: React.ReactNode }
) => <Legend.Label sx={{ pt: 1, whiteSpace: "nowrap" }} {...props} />;

export const Item = (
  props: JSX.IntrinsicAttributes &
    Legend.ItemProps & {
      [x: string]: any;
      className?: string | undefined;
      style?: React.CSSProperties | undefined;
    }
) => <Legend.Item sx={{ flexDirection: "column" }} {...props} />;

export const ValueLabel = (
  props: JSX.IntrinsicAttributes &
    ValueAxis.LabelProps & {
      [x: string]: any;
      className?: string | undefined;
      style?: React.CSSProperties | undefined;
    } & { children?: React.ReactNode }
) => {
  const { text } = props;
  return <ValueAxis.Label {...props} text={`${text}%`} />;
};

export const TitleText = (
  props: JSX.IntrinsicAttributes &
    Title.TextProps & {
      [x: string]: any;
      className?: string | undefined;
      style?: React.CSSProperties | undefined;
    } & { children?: React.ReactNode }
) => <Title.Text {...props} sx={{ whiteSpace: "pre" }} />;

export const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: "20px",
  },
}));

export interface IAnalyticsChart {
  chartData: any[];
}
