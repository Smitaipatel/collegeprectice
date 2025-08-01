function showContent(type) {
  const content = {
    drama: `
      <h3>Professional Dramas</h3>
      <p>We perform stage plays highlighting social issues such as health, environment, and education.</p>
    `,
    street: `
      <h3>Street Shows</h3>
      <ul>
        <li>Drama Form</li>
        <li>Bhavai Form</li>
        <li>Composite Cultural Programmes</li>
        <li>Puppet Shows</li>
        <li>Dayra</li>
        <li>Garba</li>
        <li>Orchestra</li>
        <li>Lagna Geet</li>
      </ul>
    `
  };
  document.getElementById("content-area").innerHTML = content[type];
}
