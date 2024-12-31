 // Seleccionamos todas las cartas
 const cards = document.querySelectorAll('.card');

 // Añadimos el evento hover para mover las cartas en relación al ratón
 cards.forEach(card => {
     card.addEventListener('mouseover', function () {
         cards.forEach(c => {
             // Comprobar si el tamaño de la ventana es mayor que 768px (por ejemplo, tablet y móviles)
             if (window.innerWidth > 768) {
                // Si la ventana es mayor a 768px (pantalla grande)
                if (c !== card) {
                    // Ajustamos el movimiento de las otras cartas
                    if (card.id === 'card1') {
                        c.style.transform = 'translateX(20px)';
                        c.style.scale = '1.05';
                    } else if (card.id === 'card2') {
                        c.style.transform = 'translateX(-40px)';
                        c.style.transform = 'translateY(50px)';
                        c.style.scale = '1.05';
                    } else if (card.id === 'card3') {
                        c.style.transform = 'translateX(-30px)';
                        c.style.scale = '1.05';
                    }
                }
            } else {
                // Si la ventana es menor o igual a 768px (pantalla móvil)
                if (c !== card) {
                    // Evitar la transformación y el movimiento en móviles
                    c.style.transform = 'translateX(0px)';
                    c.style.scale = '1';
                }
            }
            
         });
     });
 
     card.addEventListener('mouseout', function () {
         // Restauramos el estado original de todas las cartas
         cards.forEach(c => {
             c.style.transform = '';
             c.style.scale = '';
         });
     });
 });