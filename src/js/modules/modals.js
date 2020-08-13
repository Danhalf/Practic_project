const modals = () => {
  const modalsShow = (
    triggers,
    modalSelector,
    modalCloseTrigger,
    closeClickOverlay = true
  ) => {
    const trigger = document.querySelectorAll(triggers),
      modal = document.querySelector(modalSelector),
      closeBtn = document.querySelectorAll(modalCloseTrigger),
      windows = document.querySelectorAll("[data-modal]");

    trigger.forEach((tr) => {
      tr.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((it) => {
          it.style.display = "none";
        });

        modal.style.display = "block";
        //document.body.classList.add("modal-open");
        document.body.style.overflow = "hidden";
      });
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        modal.style.display = "none";
        //document.body.classList.remove("modal-open");
        document.body.style.overflow = "";
        windows.forEach((it) => {
          it.style.display = "none";
        });
      }
    });

    closeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        windows.forEach((it) => {
          it.style.display = "none";
        });
        modal.style.display = "none";

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

  modalsShow(".popup_engineer_btn", ".popup_engineer", ".popup_close");
  modalsShow(".phone_link", ".popup", ".popup_close");
  modalsShow(".popup_calc_btn", ".popup_calc", ".popup_calc_close", false);
  modalsShow(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  modalsShow(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );
  //modalsShowByTime(".popup", 60000);
};

export default modals;
