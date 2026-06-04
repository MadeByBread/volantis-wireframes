import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const DEEPSEEK_BENCHMARK = [
  { platform: "Volantis", tokPerSec: 1590 },
  { platform: "NVIDIA B200", tokPerSec: 50 },
] as const;

const BAR_COLORS = ["#171717", "#a3a3a3"] as const;

/** Headroom above max bar so value labels aren't clipped. */
function yAxisMax(dataMax: number) {
  return Math.ceil(dataMax / 400) * 400 + 400;
}

type BenchmarkChartProps = {
  model?: string;
  className?: string;
};

export default function BenchmarkChart({
  model = "DeepSeek-V3.2",
  className = "",
}: BenchmarkChartProps) {
  return (
    <figure
      className={`rounded-lg border border-neutral-300 bg-white p-4 sm:p-6 ${className}`}
      aria-label={`${model} benchmark: Volantis vs NVIDIA B200 tokens per second per user`}
    >
      <figcaption className="sr-only">
        {model}: Volantis 1,590 tok/s/user; NVIDIA B200 ~50 tok/s/user
      </figcaption>
      <p className="mb-4 text-sm font-medium text-neutral-600">{model}</p>
      <div className="pointer-events-none h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[...DEEPSEEK_BENCHMARK]}
            margin={{ top: 28, right: 8, left: 0, bottom: 4 }}
            barCategoryGap="28%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e5e5"
              vertical={false}
            />
            <XAxis
              dataKey="platform"
              tick={{ fill: "#525252", fontSize: 12 }}
              axisLine={{ stroke: "#d4d4d4" }}
              tickLine={false}
            />
            <YAxis
              domain={[0, yAxisMax]}
              tick={{ fill: "#737373", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "tok/s/user",
                angle: -90,
                position: "insideLeft",
                offset: 12,
                style: { fill: "#737373", fontSize: 11 },
              }}
            />
            <Bar
              dataKey="tokPerSec"
              radius={[4, 4, 0, 0]}
              maxBarSize={120}
              activeBar={false}
            >
              {DEEPSEEK_BENCHMARK.map((_, index) => (
                <Cell key={index} fill={BAR_COLORS[index]} />
              ))}
              <LabelList
                dataKey="tokPerSec"
                position="top"
                formatter={(value) =>
                  typeof value === "number"
                    ? value.toLocaleString()
                    : String(value ?? "")
                }
                style={{ fill: "#404040", fontSize: 12, fontWeight: 600 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </figure>
  );
}
