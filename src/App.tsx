import "./App.css";
import { Layout } from "antd";
import QueryTable from "./QueryTable";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Mi-INTs DB</Header>
      <Content>
        <QueryTable />
      </Content>
    </Layout>
  );
}

export default App;
