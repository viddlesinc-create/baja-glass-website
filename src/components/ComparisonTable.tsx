interface ComparisonTableProps {
  /** Names the business and city — read by assistive tech and by AI extractors. */
  caption: string;
  /** Column headers. The first column is treated as the row header. */
  columns: string[];
  /** One array of cells per row, in the same order as `columns`. */
  rows: string[][];
  /** Optional source note rendered under the table. */
  footnote?: string;
}

/**
 * A real <table> — not a div grid — so the comparison is extractable by screen readers,
 * Google's rich results, and AI answer engines. Uses scope="col"/scope="row" and a
 * <caption> rather than styling alone to convey structure, and scrolls inside its own
 * container so wide tables never force the page to scroll horizontally.
 */
const ComparisonTable = ({ caption, columns, rows, footnote }: ComparisonTableProps) => (
  <div className="my-8">
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm md:text-base border-collapse">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-charcoal text-white">
            {columns.map((col) => (
              <th key={col} scope="col" className="text-left py-4 px-4 md:px-6 font-semibold whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row[0]} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
              <th scope="row" className="text-left py-4 px-4 md:px-6 font-semibold text-foreground align-top">
                {row[0]}
              </th>
              {row.slice(1).map((cell, j) => (
                <td key={columns[j + 1]} className="py-4 px-4 md:px-6 align-top text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {footnote && <p className="mt-3 text-xs text-muted-foreground">{footnote}</p>}
  </div>
);

export default ComparisonTable;
