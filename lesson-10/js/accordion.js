// Select all <details> elements on the page
document.querySelectorAll("details").forEach(detail => {
	// Add a 'toggle' event listener to each <details> element
	detail.addEventListener("toggle", event => {
	  // Check if the currently toggled <details> element is open
	  if (event.target.open) {
		// If it's open, close all other <details> elements
		document.querySelectorAll("details").forEach(otherDetail => {
		  // Ensure we don't close the currently opened <details> element
		  if (otherDetail !== event.target) {
			// Remove the 'open' attribute to close the other <details> elements
			otherDetail.removeAttribute("open");
		  }
		});
	  }
	});
  });

  // Thanks to Gemini 2.0 for the nice code refactoring.