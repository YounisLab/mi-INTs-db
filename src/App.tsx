import "./App.css";
import { Layout } from "antd";
import * as CSS from "csstype";
import QueryTable from "./QueryTable";
const { Header, Content } = Layout;

const h1style: CSS.Properties = {
  color: "white",
};

function App() {
  return (
    <Layout>
      <Header>
        <h1 style={h1style}>Mi-INTs DB</h1>
      </Header>
      <Content>
        <QueryTable />
      </Content>
    </Layout>
  );
}

export default App;
