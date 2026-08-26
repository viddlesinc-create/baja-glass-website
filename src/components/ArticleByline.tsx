import { Link } from "react-router-dom";
import { formatUpdated } from "@/components/LastUpdated";

interface ArticleBylineProps {
  datePublished: string;
  dateModified: string;
  /** Article body word count, used for the reading estimate (200 wpm). */
  wordCount?: number;
}

const AUTHOR = { name: "Cliff Robinson", slug: "cliff-robinson", credential: "Owner, Baja Glass & Mirror — glazing in Las Vegas since 2009" };

/**
 * Visible byline. The posts previously carried dates and an author only inside JSON-LD,
 * where no reader ever sees them, and the "author" was the organization rather than a
 * person. Google's guidance on who-wrote-this signals expects both to be visible on the
 * page and to match the structured data.
 *
 * TODO(owner): add Cliff's headshot here once supplied.
 */
const ArticleByline = ({ datePublished, dateModified, wordCount }: ArticleBylineProps) => {
  const minutes = wordCount ? Math.max(1, Math.round(wordCount / 200)) : null;
  return (
    <div className="border-y border-border py-4 my-6 text-sm">
      <p className="font-semibold text-foreground">
        By{" "}
        <Link to={`/authors/${AUTHOR.slug}`} className="text-primary hover:underline" onClick={() => window.scrollTo(0, 0)}>
          {AUTHOR.name}
        </Link>
      </p>
      <p className="text-muted-foreground">{AUTHOR.credential}</p>
      <p className="text-muted-foreground mt-2">
        Published <time dateTime={datePublished}>{formatUpdated(datePublished)}</time>
        {dateModified !== datePublished && (
          <> · Last updated <time dateTime={dateModified}>{formatUpdated(dateModified)}</time></>
        )}
        {minutes && <> · {minutes} min read</>}
      </p>
    </div>
  );
};

export default ArticleByline;
