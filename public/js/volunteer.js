

const createVol = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const event_id = document.querySelector("#event_id").value.trim();
  const user_id = document.querySelector("#user_id").value.trim();
  const volunteered = document.querySelector("#volunteered").value.trim();

  console.log(event_id);
  console.log(user_id);
  console.log(volunteered);

  if (event_id && user_id) {
    const response = await fetch("/api/volunteer", {
      method: "POST",
      body: {
        user_id,
        event_id,
        volunteered,
      },

      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#volunteerBtn").addEventListener("click", createVol);
