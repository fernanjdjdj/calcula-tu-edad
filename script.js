function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    if (isNaN(birthdate)) {
        alert('Por favor, ingresa una fecha válida.');
        return;
    }
    const now = new Date();
    
    const ageYears = now.getFullYear() - birthdate.getFullYear();
    const ageMonths = now.getMonth() - birthdate.getMonth() + (ageYears * 12);
    const ageDays = Math.floor((now - birthdate) / (1000 * 60 * 60 * 24));
    const ageMinutes = Math.floor((now - birthdate) / (1000 * 60));
    const ageSeconds = Math.floor((now - birthdate) / 1000);

    document.getElementById('result').innerHTML = `
        <p>Años: ${ageYears}</p>
        <p>Meses: ${ageMonths}</p>
        <p>Días: ${ageDays}</p>
        <p>Minutos: ${ageMinutes}</p>
        <p>Segundos: ${ageSeconds}</p>
    `;
}