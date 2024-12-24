const StatusIndicator = ({ status }) => (
    <div className={`h-4 w-4 rounded-full ${status ? "bg-green-500" : "bg-red-500"}`}></div>
  );
  
  export default StatusIndicator;
  