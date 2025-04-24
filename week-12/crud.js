import { app } from "./app.js";

import { getFirestore,
    getDocs,
    collection,
    updateDoc,
    deleteDoc,
    doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

const dreamsRef = document.querySelector("#dreams");

async function getDreams() {
    const dreamDocs = getDocs(dreamsCollection);

    dreamsRef.innerHTML = "";

    for (let i = 0; i < dreamsDocs.docs.length; index++) {
        const currentDream = dreamsDoc.docs[i];

        const data = currentDream.data();

        const dreamHTML = `<div class="dream">
        <h4>${data.text}</h4>
        <p>
            <p>Likes:${data.hearts || 0}</p>
          <button class="edit">Edit</button>
          <button class="heart">&hearts;</button>
        </p>
      </div>`

      const newPTag = document.createElement("p");
      const newEditButton = document.createElement("button");
      newEditButton.innerHTML = "Edit";
      newEditButton.classList.add("edit");

      const newHeartButton = document.createElement("button");
      newHeartButton.classList.add("heart");
      newHeartButton.innerHTML = "&hearts;";
      newHeartButton.onclick = "&hearts;";

        dreamsRef.innerHTML += `<div class="dream">
        <h4>${data.text}</h4>
        <p>
            <p>Likes:${data.hearts || 0}</p>
          <button class="edit">Edit</button>
          <button class="heart">&hearts;</button>
        </p>
      </div>`;
        
    }
    
}

// function addHeart(e) {
//     console.log("Add Heart", e);
// }

getDreams();