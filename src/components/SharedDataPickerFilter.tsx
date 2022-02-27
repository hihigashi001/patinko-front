// Library
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ja", ja);

type Props = {
  className?: string;
  value: string;
  onChange?: any;
  error?: string;
};

export const SharedDataPickerFilter = ({ value, onChange, error = "" }: Props) => {
  return (
      <div>
        <div>
          <ReactDatePicker
            locale="ja"
            onChange={onChange}
            selected={!value ? null : new Date(value)}
            dateFormat="MM月dd日"
            className="focus:outline-none px-4 py-2 bg-gray-700 hover:bg-gray-500 text-white rounded-lg text-lg font-bold w-32"
          />
        </div>
        <span className="text-red-400">{error}</span>
      </div>
  );
};
