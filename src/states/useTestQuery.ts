import { atom, useAtom } from "jotai";

type StateValues = {
  test_message: string;
};

type StateHandlers = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InitState: StateValues = {
  test_message: "",
};

const TestAtom = atom<StateValues>(InitState);

export const useTestQuery = () => {
  const [TestForm, setTestForm] = useAtom(TestAtom);
  const TestFormHandler: StateHandlers = {
    onChange: (event) => {
      const value = event.target.value;
      const name = event.target.name;
      setTestForm({ ...TestForm, [name]: value });
    },
  };
  return { TestForm, TestFormHandler };
};
