import React from "react"

export const Btncontainer = () => {

    const btns = [ "AC", 
    "C",
     "/",
      "*",
    7, 8, 9,
      "-", 
      4,5,6, 
      "+", 
      3,2,1,
       "=", 
       "OFF",
       0];
    return (
        <section className="items">
            { btn.map(btn, i) => (
               <button key={i} onClick={() => handleOnButtonClick (btn)}>
                   {btn}
                   </button>
            ))};
            </section>
            