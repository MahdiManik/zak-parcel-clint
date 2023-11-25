import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ height: "60vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="spinners">
        <Spinner variant="warning" animation="grow" size="sm" />
        <Spinner variant="warning" animation="grow" />
      </div>
    </div>
  );
};

export default Loading;
