

fetch('scripts/leaders.json')
  .then(response => response.json())
  .then(data => {
    const companyListSection = document.getElementById('company-list');

      data.companies.forEach((company, index) => {
        const companySection = document.createElement('section');
        companySection.classList.add('gridlines4');

        companySection.innerHTML = `
<p><b>${company.name}</b></p>
<p>Phone: ${company.phone}</p>
<p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
<p>Contact: ${company.contact}</p>
<p>Status: <b>${company.status}</b></p>
`;

companyListSection.appendChild(companySection);
      });
      })
      .catch(error => console.error('Error loading member data:', error));
   
