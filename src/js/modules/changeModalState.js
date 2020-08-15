import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElems(evt, elem, prop) {
    elem.forEach((el, i) => {
      el.addEventListener(evt, () => {
        switch (el.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (el.getAttribute("type") === "checkbox") {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = el.value;
            }
            break;
          case "SELECT":
            state[prop] = el.value;
            break;
        }

        console.log(state);
      });
    });
  }

  bindActionToElems("click", windowForm, "form");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
