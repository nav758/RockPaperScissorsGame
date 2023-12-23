const rules = document.querySelector(".rules");
const rulesButton = document.querySelector(".btn-rules");
const closeButton = document.querySelector(".close");

function handleRuleMenuClick() {
    rules.classList.toggle("open");
  }
  
  rulesButton.addEventListener("click", handleRuleMenuClick);
  closeButton.addEventListener("click", handleRuleMenuClick);
  
