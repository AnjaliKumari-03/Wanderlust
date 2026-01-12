document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("navbarSearch");
  const suggestionsBox = document.getElementById("searchSuggestions");
  if (!searchInput || !suggestionsBox) return;

  let debounceTimeout = null;

  function clearSuggestions() {
    suggestionsBox.innerHTML = "";
    suggestionsBox.style.display = "none";
  }

  // When user types in the search box
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();

    // clear previous debounce
    clearTimeout(debounceTimeout);

    if (!query) {
      clearSuggestions();
      return;
    }

    // debounce: wait 200ms after last keypress
    debounceTimeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `/listings/search/suggestions?q=${encodeURIComponent(query)}`
        );
        const data = await res.json();

        if (!Array.isArray(data) || data.length === 0) {
          clearSuggestions();
          return;
        }

        const html = data
          .map((item) => {
            const title = item.title || "";
            const location = item.location || "";
            const country = item.country || "";
            const safeTitle = title.replace(/"/g, "&quot;");

            return (
              '<button type="button" class="list-group-item list-group-item-action" data-title="' +
              safeTitle +
              '">' +
              "<div><strong>" +
              title +
              "</strong></div>" +
              '<small class="text-muted">' +
              (location ? location : "") +
              (location && country ? ", " : "") +
              (country ? country : "") +
              "</small>" +
              "</button>"
            );
          })
          .join("");

        suggestionsBox.innerHTML = html;
        suggestionsBox.style.display = "block";
      } catch (err) {
        console.error("Error fetching suggestions:", err);
        clearSuggestions();
      }
    }, 200);
  });

  // Click on a suggestion
  suggestionsBox.addEventListener("click", (e) => {
    const item = e.target.closest(".list-group-item");
    if (!item) return;

    const title = item.getAttribute("data-title");
    searchInput.value = title;
    clearSuggestions();

    // submit the form to show full results
    if (searchInput.form) {
      searchInput.form.submit();
    }
  });

  // Hide when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !searchInput.contains(e.target) &&
      !suggestionsBox.contains(e.target)
    ) {
      clearSuggestions();
    }
  });

  // Optional: hide shortly after blur so click still works
  searchInput.addEventListener("blur", () => {
    setTimeout(() => {
      clearSuggestions();
    }, 200);
  });
  // Navbar collapse -> add/remove class on body
  const navCollapse = document.getElementById("navbarNavAltMarkup");
  if (navCollapse) {
    navCollapse.addEventListener("shown.bs.collapse", () => {
      document.body.classList.add("nav-open");
    });

    navCollapse.addEventListener("hidden.bs.collapse", () => {
      document.body.classList.remove("nav-open");
    });
  }
});

