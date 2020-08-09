const modals = () => {
  const closeBtn = document.querySelectorAll(".popup_close");

  const modalsShow = (triggers, modalSelector) => {
    const trigger = document.querySelectorAll(triggers),
      modal = document.querySelector(modalSelector);

    trigger.forEach((tr) => {
      tr.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";
        //document.body.classList.add("modal-open");
        document.body.style.overflow = "hidden";
      });
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        //document.body.classList.remove("modal-open");
        document.body.style.overflow = "";
      }
    });
  };

  const modalsClose = (...modals) => {
    closeBtn.forEach((e) => {
      e.addEventListener("click", (e) => {
        modals.forEach((modal) => {
          modal.style.display = "none";
        });

        //document.body.classList.remove("modal-open");
        document.body.style.overflow = "";
      });
    });
  };

  function modalsShowByTime(modal, time) {
    setTimeout(() => {
      document.querySelector(modal).style.display = "block";
      //document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
    }, time);
  }

  modalsShow(".popup_engineer_btn", ".popup_engineer");
  modalsShow(".phone_link", ".popup");
  //modalsShowByTime(".popup", 60000);
  modalsClose(
    document.querySelector(".popup_engineer"),
    document.querySelector(".popup")
  );
};

export default modals;
