

fetch('scripts/leaders.json')
  .then(response => response.json())
  .then(data => {
    const companyListSection = document.getElementById('company-list');
    const desiredStatuses = ["Gold", "Silver"];


      data.companies.forEach((company, index) => {
        if (desiredStatuses.includes(company.level)) {
        const companySection = document.createElement('section');
        companySection.classList.add('gridlines5');

        companySection.innerHTML = `
<p><b>${company.name}</b></p>
<p>Phone: ${company.phone}</p>
<p><a href="${company.website}" target="_blank">Website</a></p>
<p>Contact: ${company.contact}</p>
<p>Level: <b>${company.level}</b></p>
`;

companyListSection.appendChild(companySection);
        }
      });
      })
      .catch(error => console.error('Error loading member data:', error));