import Link from 'next/link'

export default function Page() {
  return (
      <nav>
          <h1>CPRG 306: Web Development 2 - Assaignments</h1>
          <li>
            <Link href="/week-2">Week 2</Link>
          </li>
          <li>
            <Link href="/week-3">Week 3</Link>
          </li>
          <li>
            <Link href="/week-4">Week 4</Link>
          </li>
          
      </nav>
  );
}