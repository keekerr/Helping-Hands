//saves new event with submission button
// var eventSubmission = document.getElementById("event_submission");

const createEvent = async (event) => {
  event.preventDefault();

  event.stopPropagation();

  const event_name = document.querySelector("#event_name").value.trim();
  const event_date = document.querySelector("#event_date").value.trim();
  const vol_need = document.querySelector("#vol_need").value.trim();
  const event_type = document.querySelector("#event_type").value.trim();

  const event_address = document.querySelector("#address").value.trim();
  const event_description = document
    .querySelector("#event_description")
    .value.trim();

  

  if (
    event_name &&
    event_date &&

    vol_need &&
    event_type &&
    event_address &&
    event_description
  ) {  

    const response = await fetch("/api/myEvents/", {

      method: "POST",
      body: JSON.stringify({
        event_name,
        event_date,

        vol_need,
        event_address,
        event_description,
        event_type,
      }),

      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);

    }
  }
};

document
  .querySelector("#event_submission")
  .addEventListener("click", createEvent);
