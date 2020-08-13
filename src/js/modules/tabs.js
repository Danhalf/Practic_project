const tabs = (
  tabTitle,
  tabBody,
  tabContent,
  activeClass,
  display = "block"
) => {
  const title = document.querySelector(tabTitle),
    tab = document.querySelectorAll(tabBody),
    content = document.querySelectorAll(tabContent);

  const hideTab = () => {
    content.forEach((el) => {
      el.style.display = "none";
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  };

  const showTab = (i = 0) => {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  };

  hideTab();
  showTab();

  title.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabBody.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabBody.replace(/\./, "")))
    ) {
      tab.forEach((item, index) => {
        if (target == item || target.parentNode == item) {
          hideTab();
          showTab(index);
        }
      });
    }
  });
};

export default tabs;
