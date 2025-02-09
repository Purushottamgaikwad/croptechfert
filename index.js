function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}

const productName = "CT Nano 19.19.19"; // Replace with dynamic product name
const phoneNumber = "+919822544582"; // Replace with your WhatsApp number
const message = `Hello, I have an inquiry about ${productName}.`; // Custom message
const encodedMessage = encodeURIComponent(message); // URL encode the message
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

// Set the link dynamically
document.getElementById("whatsappLink").href = whatsappUrl;
