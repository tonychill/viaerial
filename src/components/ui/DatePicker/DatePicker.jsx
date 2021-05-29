import { useEffect, useState } from "react";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import Input from "../../core/Input";

const DatePicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [classList, setClassList] = useState("");

  useEffect(() => {
    if (window !== "undefined") {
      updateWindowWidth();
      window.addEventListener("resize", updateWindowWidth);
    }
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
      updateClassList();
    }
    function updateClassList() {
      if (windowWidth < 500) {
        setClassList("relative");
      } else {
        setClassList("");
      }
    }
  }, [windowWidth]);

  return (
    <div className={classList}>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        minimumDate={new Date()}
        minimumLength={1}
        format="dd MMM yyyy"
        locale={enGB}
      >
        {({ startDateInputProps, endDateInputProps, focus }) => {
          return (
            <div className="date-range flex justify-between">
              {/* <Input></Input> TODO: mod Input component to work with date picker.  */}
              <Input className={"input" + (focus === START_DATE ? " -focused" : "")} otherProps={startDateInputProps} placeholder="Start date" />
              <span className="date-range_arrow" />
              <Input className={"input" + (focus === END_DATE ? " -focused" : "")} otherProps={endDateInputProps} placeholder="End date" />
            </div>
          );
        }}
      </DateRangePicker>
    </div>
  );
};

export default DatePicker;
