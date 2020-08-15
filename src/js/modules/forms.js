import checkNumInputs from "./checkNumInputs";

const forms = (state, closeModal) => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    modalEndClose = document.querySelector(closeModal);

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Загрузка...",
    succes: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Нет ответа от сервера",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((it) => {
      it.value = "";
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if (item.getAttribute("data-calc") == "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
        setTimeout(() => {
          modalEndClose.style.display = "none";
          for (let member in state) {
            delete state[member];
          }
        }, 3000);
      }

      postData("/assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.succes;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;
