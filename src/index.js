import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompletelist(inputText);
};

//未完了リストから指定要素を削除
const deleteFromcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//Create imcomplet-list
const createIncompletelist = (text) => {
  //div create
  const div = document.createElement("div");
  div.className = "list-row";

  //li create
  const li = document.createElement("li");
  li.innerText = text;

  //button(Done) tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "Done";
  completeButton.addEventListener("click", () => {
    //complete todo
    //delete todo
    deleteFromcompleteList(completeButton.parentNode);

    //add to complete-list
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //div 以下削除
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "Undo";
    backButton.addEventListener("click", () => {
      //Complete-listから削除
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      //incomolete-listに追加
      //get text
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompletelist(text);

      //document.getElementById("incomplete-list").appendChild(ba);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(Delete) tag
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    //delete todo
    deleteFromcompleteList(deleteButton.parentNode);
  });

  //div appendChild
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //add to list
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
