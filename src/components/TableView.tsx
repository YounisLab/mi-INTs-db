import { Button, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";

import Row from "./Row";

// title and dataIndex keys for Table, label and key for CSVLink
const columns = [
  { title: "Field", label: "Field", dataIndex: "field", key: "field" },
  { title: "Value", label: "Value", dataIndex: "value", key: "value" },
];

export interface TableViewProps {
  data: Object[];
}

function TableView({ data }: TableViewProps) {
  return (
    <>
      <Row>
        <Table
          bordered={true}
          columns={columns}
          dataSource={data}
          locale={{ emptyText: "Search for a gene to view results" }}
          pagination={false}
        />
      </Row>
      <Row>
        <CSVLink data={data} headers={columns} filename={"table.csv"}>
          <Button type="primary" icon={<DownloadOutlined />} size={"large"}>
            Export as .csv
          </Button>
        </CSVLink>
      </Row>
    </>
  );
}

export default TableView;
