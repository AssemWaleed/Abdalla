document.querySelectorAll('.content').forEach(button => {
    button.addEventListener('mouseover', function() {
        document.getElementById('hoverSound').play();
    });
});


function openWhatsApp() {
        var message = "Arithmetic Series لو سمحت افتح حصه"; // Message to be sent
        var phoneNumber = "+201021881710"; // WhatsApp number
        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(url, '_blank');
    }

function openWhatsApp2() {
        var message = "Senior 1 Operation On Vector لو سمحت افتح حصه"; // Message to be sent
        var phoneNumber = "+201021881710"; // WhatsApp number
        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(url, '_blank');
    }

function openWhatsApp3() {
        var message = "Senior 2 Newton Universal Gravitation Law لو سمحت افتح حصه"; // Message to be sent
        var phoneNumber = "+201021881710"; // WhatsApp number
        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(url, '_blank');
    }



