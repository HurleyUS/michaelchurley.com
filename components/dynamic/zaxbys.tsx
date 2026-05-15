"use client";

import { useSearchParams } from "next/navigation";

export default function Zaxbys() {
  const params = useSearchParams();
  const t = params.get("t");
  return (
    <>
      {t === "restaurant" ? (
        <div className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2">
          <h3 className="text-md font-bold">
            <strong>{"Zaxby's Sylva/Waynesville, NC"}</strong>
          </h3>
          <p>
            <strong>General Manager</strong>, 09/2024 - Present
          </p>
          <p>
            Weekly Average Gross Revenue growth from: $25k - <strong>$55k</strong>
          </p>
          <ul className="list-disc ml-md">
            <li>
              {
                "Own all outcomes of restaurant operations, including but not limited to: management, marketing + growth, human resources, and success."
              }
            </li>
            <li>{"Most improved Zeggy Winner. (Waynesville)"}</li>
            <li>{"2024 Q3 Go Big Winner. (Sylva)"}</li>
            <li>{"2025 Q2 Go Big Runner Up. (Waynesville)"}</li>
            <li>{"2025 Q3 Digital Growth Runner Up. (Waynesville)"}</li>
            <li>{"Franchise group leader in operational excellence."}</li>
            <li>{"Fully Certified General Manager."}</li>
            <li>{"Fully Certified Encore Leader."}</li>
            <li>
              <strong>{"Carreer Path Goals:"}</strong>
              <ul className="list-disc ml-md">
                <li>{"Organization Training Manager."}</li>
                <li>{"District Manager."}</li>
                <li>{"Regional Manager."}</li>
                <li>{"Corporate Franchisee Consultant."}</li>
                <li>{"Owner/Operator."}</li>
              </ul>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
