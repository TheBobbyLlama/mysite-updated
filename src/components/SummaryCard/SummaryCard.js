import "./SummaryCard.css";

export default function SummaryCard({ icon, header, text }) {
  return (
    <div className="summaryCard">
      <div className="col-sm-1 col-md-1">
        <div className="development-img">
          <img className="img-responsive" src={icon} alt="" />
        </div>
      </div>

      <div className="col-sm-4 col-md-4">
        <div>
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
