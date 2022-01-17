import { InputCommpent } from "src/components/InputCommpent";
import { ViewCommpent } from "src/components/ViewCommpent";
import { TestLayout } from "src/layouts/test";

const Home = () => {
  return (
    <TestLayout>
      <InputCommpent />
      <ViewCommpent />
    </TestLayout>
  );
};

export default Home;
