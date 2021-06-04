import { useState } from "react";
import { Input, Row, Table } from "antd";
import * as CSS from "csstype";
import { result as mockResult } from "./mock";

const { Search } = Input;

const searchBarStyle: CSS.Properties = {
  width: "40%",
};
const rowStyle: CSS.Properties = {
  marginTop: "8px",
  marginBottom: "8px",
  width: "100%",
};

function QueryTable() {
  const [result, setResult] = useState<Object[]>([]);
  const columns = [
    { title: "Field", dataIndex: "field" },
    { title: "Value", dataIndex: "value" },
  ];

  const handleSearch = (gene: string) => {
    setResult(
      Object.entries(mockResult[0]).map(([k, v], idx) => {
        return { field: k, value: v, key: idx };
      })
    );
  };

  return (
    <>
      <Row style={rowStyle}>
        <Search onSearch={handleSearch} style={searchBarStyle} />
      </Row>
      <Row style={rowStyle}>
        <Table
          bordered={true}
          columns={columns}
          dataSource={result}
          locale={{ emptyText: "Search for a gene to view results" }}
          pagination={false}
        />
      </Row>
    </>
  );
}

export default QueryTable;
