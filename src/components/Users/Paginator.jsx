import { useState } from "react";
import s from "./Users.module.css";

let Paginator = ({
   totalItemsCount,
   pageSize,
   currentPage,
   onPageChanged,
   portionSize = 10,
}) => {
   let pagesCount = Math.ceil(totalItemsCount / pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   let portionCount = Math.ceil(pagesCount / portionSize);
   let [portionNumber, setPortionNumber] = useState(1);
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
   let rightPortionPageNumber = portionNumber * portionSize;

   return (
      <div className={s.paginator}>
         {portionNumber > 1 && (
            <button
               onClick={() => {
                  setPortionNumber(portionNumber - 1);
               }}
            >
               PREV
            </button>
         )}
         {pages
            .filter(
               (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((p) => {
               return (
                  <span
                     className={
                        currentPage === p ? s.selectedPage : s.pageNumber
                     }
                     key={p}
                     onClick={(e) => {
                        onPageChanged(p);
                     }}
                  >
                     {p}
                  </span>
               );
            })}
         {portionCount > portionNumber && (
            <button
               onClick={() => {
                  setPortionNumber(portionNumber + 1);
               }}
            >
               NEXT
            </button>
         )}
      </div>
   );
};

// const Paginator = (props) => {
//    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
//    let pages = [];
//    for (let i = 1; i <= pagesCount; i++) {
//       pages.push(i);
//    }
//    return (
//       <div>
//          {pages.map((p) => {
//             return (
//                <span
//                   className={props.currentPage === p && s.selectedPage}
//                   onClick={() => {
//                      props.onPageChanged(p);
//                   }}
//                >
//                   {p}
//                </span>
//             );
//          })}
//       </div>
//    );
// };
export default Paginator;
