

//saves new event with submission button
// var eventSubmission = document.getElementById("event_submission");

const createEvent = async (event) => {
    event.preventDefault();

    const event_name = document.querySelector('#event_name').value.trim();
    const event_date = document.querySelector('#event_date').value.trim();
    const vol_need = document.querySelector('#vol_need').value.trim();
    const event_type = document.querySelector('#event_type').value.trim();
    const event_address = document.querySelector('#address').value.trim();
    const event_description = document.querySelector('#event_description').value.trim();
    console.log(event_name);
    console.log(event_date);
    console.log(vol_need);
    console.log(event_type);
    console.log(event_address);
    console.log(event_description);

    if (
      event_name &&
      event_date &&
      event_type &&
      vol_need &&
      event_address &&
      event_description
    ) {
      const response = await fetch("/api/myEvents", {
        method: "POST",
        body: JSON.stringify({
          event_name,
          event_date,
          event_type,
          vol_need,
          event_address,
          event_description,
        }),
        
        headers: { "New-Event": "application/json" },
      });
console.log(response)

      if (response.ok) {
        document.location("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
};



document
  .querySelector("#event_submission")
  .addEventListener("click", createEvent);





