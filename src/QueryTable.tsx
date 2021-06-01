import { Input, Table } from "antd";
import { result } from "./mock";

const { Search } = Input;

function QueryTable() {
  const columns = Object.keys(result[0]).map((key) => {
    return { title: key, dataIndex: key };
  });
  return (
    <>
      <Search />
      <Table columns={columns} dataSource={result} />
    </>
  );
}

export default QueryTable;
