// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen bg-black text-white flex-col items-center justify-between pt-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
//         <h1 className="text-4xl font-bold">
//           CPRG306: Web Development 2 - Assignments
//         </h1>
//         <p className="text-lg">
//           <Link href="./week-2/">Week 2 Assignment</Link>
//         </p>
//         <p className="text-lg">
//           <Link href="./week-3/">Week 3 Assignment</Link>
//         </p>
//         <p className="text-lg">
//           <Link href="./week-4/">Week 4 Assignment</Link>
//         </p>
//         <p className="text-lg">
//           <Link href="./week-5/">Week 5 Assignment</Link>
//         </p>
//         <p className="text-lg">
//           <Link href="./week-6/">Week 6 Assignment</Link>
//         </p>
//         <p className="text-lg">
//           <Link href="./week-7/">Week 7 Assignment</Link>
//         </p>
//         <p className="text-lg">
//           <Link href="./week-8/">Week 8 Assignment</Link>
//         </p>
//         <p className="text-lg">
//           <Link href="./week-8-test/">Week 8 test</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-white flex-col items-center justify-between pt-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold">
          CPRG306: Web Development 2 - Assignments
        </h1>
        <div className="space-y-2">
          <p className="text-lg">
            <Link href="./week-2/">Week 2 Assignment</Link>
          </p>
          <p className="text-lg">
            <Link href="./week-3/">Week 3 Assignment</Link>
          </p>
          <p className="text-lg">
            <Link href="./week-4/">Week 4 Assignment</Link>
          </p>
          <p className="text-lg">
            <Link href="./week-5/">Week 5 Assignment</Link>
          </p>
          <p className="text-lg">
            <Link href="./week-6/">Week 6 Assignment</Link>
          </p>
          <p className="text-lg">
            <Link href="./week-7/">Week 7 Assignment</Link>
          </p>
          <p className="text-lg">
            <Link href="./week-8/">Week 8 Assignment</Link>
          </p>
          <p className="text-lg">
            <Link href="./week-10/">Week 10 Assignment</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
