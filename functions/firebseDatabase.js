import React from "react";
import { getDatabase, ref, set } from "firebase/database";


export function handleDataWrite(itemName, itemPrice, itemCategory){
   // const database = getDatabase();
    const db = getDatabase();
    set(ref(db, itemCategory+'/' + itemName), {
      itemName: itemName,
      itemPrice: itemPrice,
      itemCategory : itemCategory
    });
}