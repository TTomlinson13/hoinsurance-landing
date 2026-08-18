/**
 * Name / address / phone block.
 *
 * The site previously published no street address anywhere — only an 800
 * number — which left it ineligible for the local pack no matter how the
 * structured data was written. Google cross-checks the address rendered on the
 * page against the Google Business Profile and directory citations, so the
 * JSON-LD in scripts/prerender.mjs is not sufficient on its own: it has to be
 * visible here too, and the two must agree exactly.
 *
 * Keep this in step with the PostalAddress in scripts/prerender.mjs.
 */
export default function Nap() {
  return (
    <address className="not-italic text-sm mt-4 leading-relaxed">
      <span className="text-gray-300">Tomlinson &amp; Co Inc.</span>
      <br />
      921 Douglas Ave #102, Altamonte Springs, FL 32714
      <br />
      <a href="tel:800-616-1418" className="hover:text-white underline">
        800-616-1418
      </a>
    </address>
  )
}
