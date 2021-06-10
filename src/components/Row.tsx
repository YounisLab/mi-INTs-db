import { Row as AntRow } from "antd";
import * as CSS from "csstype";
import React from "react";

const rowStyle: CSS.Properties = {
  justifyContent: "center",
  padding: "5px 0",
};

export interface RowProps {
  children: React.ReactNode;
}
function Row({ children }: RowProps) {
  return <AntRow style={rowStyle}>{children}</AntRow>;
}

export default Row;
