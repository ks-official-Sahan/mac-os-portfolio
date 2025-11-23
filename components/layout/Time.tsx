import dayjs from "dayjs";

const Time = async () => {
  "use cache";
  return <time>{dayjs().format("ddd MMM D h:mm A")}</time>;
};

export default Time;
