import { QUICK_FACTS, QUICK_FACTS_CAPTION } from "@/lib/content";

export function QuickFacts() {
  return (
    <div className="overflow-x-auto">
      <table className="stack-table">
        <caption className="mb-3 text-left text-sm text-text-muted">
          {QUICK_FACTS_CAPTION}
        </caption>
        <tbody>
          {QUICK_FACTS.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td className="tabular">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
