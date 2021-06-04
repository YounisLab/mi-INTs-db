import { useState } from "react";
import { Input, Row, Table } from "antd";
import * as CSS from "csstype";
import { result as mockResult } from "./mock";

const { Search } = Input;

const searchBarStyle: CSS.Properties = {
  width: "40%",
};
const rowStyle: CSS.Properties = {
  marginTop: "16px",
  width: "100%",
};

function QueryTable() {
  const [result, setResult] = useState<Object[]>([]);
  const [columns, setColumns] = useState<Object[]>([]);

  const handleSearch = (gene: string) => {
    setResult(
      mockResult.map((obj, idx) => {
        return { ...obj, key: idx };
      })
    );
    setColumns(
      Object.keys(mockResult[0]).map((key) => {
        return { title: key, dataIndex: key };
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
          columns={columns}
          dataSource={result}
          locale={{ emptyText: "Search for a gene to view results" }}
        />
      </Row>
    </>
  );
}

export default QueryTable;
