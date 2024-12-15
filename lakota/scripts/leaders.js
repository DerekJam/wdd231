

fetch('scripts/leaders.json')
  .then(response => response.json())
  .then(data => {
    const companyListSection = document.getElementById('leaders');
    const desiredStatuses = ["Gold", "Silver"];


      data.leaders.forEach((leader, index) => {
        if (desiredStatuses.includes(leader['years-lived'])) {
        const companySection = document.createElement('section');
        companySection.classList.add('gridlines1');

        companySection.innerHTML = `
          <img src="images/tcclogo2.png" alt="TCC logo" width="30" height="20"></img><br>
<p><b>${leader.name}</b></p>
<p>Birth: ${leader.birth}</p>
<p>Death: ${leader.death}</p>
<p>Info: ${leader.info}</p>
<p>Lifespan: ${leader.lifespan}</p>
`;

companyListSection.appendChild(companySection);
        }
      });
      })
      .catch(error => console.error('Error loading member data:', error));