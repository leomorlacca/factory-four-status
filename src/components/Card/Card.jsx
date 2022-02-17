import "./Card.css"

const Card = ({ endpoint, success, hostname, time }) => {
  return (
    <div className="card">
      <span className="label">Endpoint name</span>
      <div className="name">{endpoint}</div>
      <span className="label">Status</span>
      <div className={`status ${success}`}>{success ? "Healthy" : "Error"}</div>
      {success && (
        <>
          <span className="label">Host name</span>
          <div className="hostname">{hostname}</div>
          <span className="label">Time</span>
          <div className="time">{time}</div>
        </>
      )}
    </div>
  )
}

export default Card
