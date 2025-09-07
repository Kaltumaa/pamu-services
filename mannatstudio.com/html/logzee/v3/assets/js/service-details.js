// Service content data
const services = {
  customs: {
    title: "Customs Clearance",
    image: "assets/images/service-img-01.jpg",
    description: `
      <p>We handle all customs clearance procedures with efficiency and compliance.</p>
      <p>Our strong relationships with customs ensure smooth processing for your cargo.</p>
    `,
    bullets: [
      "Assistance with tariff classification & compliance",
      "Fast clearance through customs checkpoints",
      "Support with duty & tax calculations",
      "Handling documentation and permits"
    ]
  },
  "sea-freight": {
    title: "Sea Freight Import/Export",
    image: "assets/images/service-img-02.jpg",
    description: `
      <p>Reliable and affordable sea freight solutions for both import and export.</p>
      <p>We work with leading shipping lines to guarantee timely delivery.</p>
    `,
    bullets: [
      "Full container load (FCL) and less-than-container load (LCL)",
      "Import/export documentation support",
      "Cargo consolidation and deconsolidation",
      "Port handling and delivery services"
    ]
  },
  land: {
    title: "Land Freight",
    image: "assets/images/service-img-03.jpeg",
    description: `
      <p>World-class land freight services for efficient transportation.</p>
      <p>We ensure smooth delivery across borders with reliable tracking.</p>
    `,
    bullets: [
      "Cross-border trucking solutions",
      "Full truckload (FTL) & less-than-truckload (LTL)",
      "Real-time tracking and reporting",
      "Flexible scheduling to meet deadlines"
    ]
  },
  air: {
    title: "Air Freight",
    image: "assets/images/service-img-04.jpg",
    description: `
      <p>Fast and secure air freight solutions for your urgent shipments.</p>
      <p>Partnered with global airlines for maximum reliability.</p>
    `,
    bullets: [
      "Express cargo handling",
      "Dangerous goods transport compliance",
      "Door-to-door delivery services",
      "Temperature-sensitive cargo handling"
    ]
  },
  project: {
    title: "Project Cargo Handling",
    image: "assets/images/service-img-05.jpg",
    description: `
      <p>Expert handling of large-scale project cargo.</p>
      <p>Specialized equipment and logistics planning included.</p>
    `,
    bullets: [
      "Heavy-lift & oversized cargo solutions",
      "Custom route planning",
      "Specialized vehicles and equipment",
      "On-site logistics supervision"
    ]
  },
  vehicle: {
    title: "Motor Vehicle Handling",
    image: "assets/images/service-img-06.jpg",
    description: `
      <p>Professional import/export vehicle handling services.</p>
      <p>From clearance to delivery, we manage every step.</p>
    `,
    bullets: [
      "Car import/export clearance",
      "RoRo & containerized vehicle shipping",
      "Vehicle storage solutions",
      "Secure inland transportation"
    ]
  },
  cargo: {
    title: "Conventional Cargo Handling",
    image: "assets/images/service-img-07.jpg",
    description: `
      <p>Dedicated team for non-containerized conventional cargo.</p>
      <p>Efficient loading, unloading, and transport solutions.</p>
    `,
    bullets: [
      "Bulk cargo handling",
      "Break-bulk & general cargo services",
      "Port operations and logistics",
      "Efficient inland distribution"
    ]
  },
  consultancy: {
    title: "Import & Export Consultancy",
    image: "assets/images/service-img-08.jpg",
    description: `
      <p>Expert advice on all import and export procedures.</p>
      <p>Helping businesses stay compliant and competitive globally.</p>
    `,
    bullets: [
      "Regulatory compliance advisory",
      "Import/export documentation support",
      "Market entry strategy guidance",
      "Customs policy updates & training"
    ]
  }
};

// Load service into content area
function loadService(serviceKey) {
  const service = services[serviceKey];
  if (!service) return;

  const contentDiv = document.getElementById("service-content");

  // Create bullet list HTML
  const bulletHTML = service.bullets.map(item => `
    <li class="list-group-item">
      <span class="pbmit-icon-list-icon">
        <i aria-hidden="true" class="pbmit-base-icon-check-mark"></i>
      </span>
      ${item}
    </li>
  `).join("");

  contentDiv.innerHTML = `
    <div class="pbmit-service-feature-image">
      <img src="${service.image}" class="img-fluid w-100" alt="${service.title}">
    </div>
    <div class="pbmit-entry-content">
      <div class="pbmit-service_content">
        <div class="pbmit-heading">
          <h3 class="pbmit-title mb-3">${service.title}</h3>
        </div>
        ${service.description}
        <div class="row mt-4">
          <div class="col-md-12">
            <ul class="list-group">${bulletHTML}</ul>
          </div>
        </div>
      </div>
    </div>
  `;

  // Update active sidebar item
  document.querySelectorAll("#service-menu li").forEach(li => li.classList.remove("post-active"));
  const activeItem = document.querySelector(`#service-menu a[data-service="${serviceKey}"]`);
  if (activeItem) activeItem.parentElement.classList.add("post-active");
}

// Event listeners for sidebar links
document.querySelectorAll("#service-menu a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const serviceKey = this.getAttribute("data-service");
    loadService(serviceKey);
  });
});

// Default load on page start (Customs Clearance)
window.addEventListener("DOMContentLoaded", () => {
  loadService("customs");
});
