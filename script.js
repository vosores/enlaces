
// Variables con información de la página
const name = "Nala";
const description = "Nala llegó a la casa de una manera inesperada pero mágica. Una tarde de primavera, mientras Francisca paseaba con su hijo por un parque cercano, encontraron a una pequeña perrita de ojos brillantes y pelaje suave escondida entre unos arbustos. Parecía perdida y un poco asustada, pero cuando Lucas se acercó, Nala se acercó, como si supiera que había encontrado a su familia.";


// Información cuidador
// Define las variables
const caretakerName = "María Escalona";
const caretakerPhone = "+56 9 6903 2103";
const caretakerEmail = "id_tagcl@example.com";
const caretakerDireccion = "Villa esperanza 7, casa 1750";

// Información mascota
const mascName = "Nala";


// Actualiza los elementos en el HTML con las variables
document.getElementById("name").textContent = name;
document.getElementById("description").textContent = description;
document.getElementById("caretaker-name").textContent = caretakerName;
document.getElementById("caretaker-phone").textContent = caretakerPhone;
document.getElementById("caretaker-email").textContent = caretakerEmail;
document.getElementById("caretaker-direccion").textContent = caretakerDireccion;
document.getElementById("maskname").textContent = mascName;

function toggleVCard(event) {
    event.preventDefault();
    const vcardInfo = document.getElementById('vcard-info');
    const petInfo = document.getElementById('pet-info');
    const timeline = document.getElementById('timeline-info');

    // Alterna la visibilidad de la vCard
    vcardInfo.style.display = vcardInfo.style.display === 'block' ? 'none' : 'block';

    // Oculta las demás secciones
    petInfo.style.display = 'none';
    timeline.style.display = 'none';
}

function togglePetInfo(event) {
    event.preventDefault();
    const petInfo = document.getElementById('pet-info');
    const vcardInfo = document.getElementById('vcard-info');
    const timeline = document.getElementById('timeline-info');

    // Alterna la visibilidad de la información de la mascota
    petInfo.style.display = petInfo.style.display === 'block' ? 'none' : 'block';

    // Oculta las demás secciones
    vcardInfo.style.display = 'none';
    timeline.style.display = 'none';
}

function toggleTimeline(event) {
    event.preventDefault();
    const timeline = document.getElementById('timeline-info');
    const vcardInfo = document.getElementById('vcard-info');
    const petInfo = document.getElementById('pet-info');

    // Alterna la visibilidad del timeline
    timeline.style.display = timeline.style.display === 'block' ? 'none' : 'block';

    // Oculta las demás secciones
    vcardInfo.style.display = 'none';
    petInfo.style.display = 'none';
}
