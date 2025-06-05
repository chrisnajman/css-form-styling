export default function form() {
  const form = document.getElementById("form")
  form.addEventListener("submit", (e) => {
    // Prevents form values being posted to the browser address bar as URL parameters.
    e.preventDefault()

    // Clears all form fields
    e.target.reset()
  })
}
