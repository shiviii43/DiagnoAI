function ConfidenceCircle({ percentage }) {

  const radius = 70;
  const strokeWidth = 12;

  const normalizedRadius = radius - strokeWidth / 2;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const progress =
    circumference - (percentage / 100) * circumference;

  const color =
    percentage >= 80
      ? "#22c55e" 
      : percentage >= 50
      ? "#f59e0b" 
      : "#ef4444"; 

  return (
    <div className="relative flex items-center justify-center w-40 h-40">

      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90"
      >

        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-1000 ease-in-out"
        />

      </svg>

      <div className="absolute text-center">

        <h1
          className="text-4xl font-bold"
          style={{ color }}
        >
          {percentage}%
        </h1>

        <p className="text-sm text-slate-500">
          Confidence
        </p>

      </div>

    </div>
  );
}

export default ConfidenceCircle;