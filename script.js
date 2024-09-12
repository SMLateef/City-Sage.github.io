document.getElementById('chatbot-toggle').addEventListener('click', function() {
    var chatbotWidget = document.querySelector('.chatbot-widget');
    if (chatbotWidget.style.display === 'none' || chatbotWidget.style.display === '') {
        chatbotWidget.style.display = 'flex';
        this.style.display = 'none';
    }
});

document.querySelector('.close-btn').addEventListener('click', function() {
    var chatbotWidget = document.querySelector('.chatbot-widget');
    var toggleBtn = document.getElementById('chatbot-toggle');
    chatbotWidget.style.display = 'none';
    toggleBtn.style.display = 'block';
});
// List of FAQs and answers
const faqs = [
    {
        question: "hi",
        answer: "Hi Nice to See you how can I help You."
    },
    {
        question: "What is Citysage",
        answer: "CitySage is your trusted partner for seamless and memorable travel experiences. We offer flights to a variety of destinations around the world."
    },
    {
        question: "How can I book a flight",
        answer: "You can book a flight by visiting the 'Book a Flight' section on our website or by clicking the 'Book Your Tickets' button on the homepage."
    },
    {
        question: "What payment methods do you accept",
        answer: "We accept all major credit cards, debit cards, and online payment methods such as PayPal and Google Pay."
    },
    {
        question: "Can I cancel or change my booking",
        answer: "Yes, you can cancel or change your booking by visiting the 'Manage Booking' section on our website. Please note that cancellation and change fees may apply."
    },
    {
        question: "How do I contact customer support",
        answer: "You can contact our customer support team via email at support@skywings.com or by phone at +1 234 567 890."
    },
    {
        "question": "What is your name",
        "answer": "I’m your friendly travel assistant! My name is CitySage How can I assist you today?"
    },
    {
        "question": "Can you help me book a flight",
        "answer": "Sure! I can guide you through the process. click on the search option and search yoyur destination?"
    },
    {
        "question": "What are some popular destinations",
        "answer": "We have several popular destinations including Paris, Dubai, Goa, and Shimla. Where would you like to explore?"
    },
    {
        "question": "How can I contact customer support",
        "answer": "You can reach our customer support at support@skywings.com or call us at +123-456-7890."
    },
    {
        "question": "Do you offer discounts",
        "answer": "Yes, we currently have a 20% discount on your next flight! Don’t miss out!"
    }
    
];

// Chatbot functionality
const chatbotInput = document.querySelector('.chatbot-input');
const sendBtn = document.querySelector('.send-btn');
const chatbotMessages = document.querySelector('.chatbot-messages');

sendBtn.addEventListener('click', handleMessage);

function handleMessage() {
    const userMessage = chatbotInput.value.trim();
    if (!userMessage) return;

    addMessageToChat(userMessage, 'user');
    chatbotInput.value = '';

    const faqAnswer = getFaqAnswer(userMessage);
    if (faqAnswer) {
        addMessageToChat(faqAnswer, 'bot');
    } else {
        addMessageToChat("Sorry, I didn't understand that. Can you please ask in a different way?", 'bot');
    }
}

function addMessageToChat(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
}

function getFaqAnswer(userMessage) {
    userMessage = userMessage.toLowerCase();
    for (let faq of faqs) {
        if (userMessage.includes(faq.question.toLowerCase())) {
            return faq.answer;
        }
    }
    return null;
}
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

const micBtn = document.querySelector('.mic-btn');
const inputField = document.querySelector('.chatbot-input');

micBtn.addEventListener('click', function() {
    recognition.start();
});

recognition.addEventListener('result', (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    inputField.value = transcript;

    if (event.results[0].isFinal) {
        // You can add code here to automatically send the message
        // or process it as per your application logic
        console.log("Final Speech Result: ", transcript);
    }
});

recognition.addEventListener('end', () => {
    // Optionally restart recognition or handle the end of speech recognition
});
dropdown.addEventListener('change', function() {
    const selectedCurrency = this.value;
    console.log('Selected Currency:', selectedCurrency);
    // You can now send this value to the server or use it as needed
});
dropdown.addEventListener('change', function() {
    const selectedCurrency = this.value;
    
    // Example of sending selected currency to the server via AJAX
    fetch('/your-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currency: selectedCurrency })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
// List of currencies
const currencies = [
    "USD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", 
    "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", 
    "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", 
    "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", 
    "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", 
    "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", 
    "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", 
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", 
    "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", 
    "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", 
    "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", 
    "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", 
    "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
];

// Populate the 'from-currency-select' and 'to-currency-select' dropdowns
const fromCurrencySelect = document.getElementById('from-currency-select');
const toCurrencySelect = document.getElementById('to-currency-select');

currencies.forEach(function(currency) {
    const optionFrom = document.createElement('option');
    optionFrom.value = currency;
    optionFrom.text = currency;
    fromCurrencySelect.add(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.value = currency;
    optionTo.text = currency;
    toCurrencySelect.add(optionTo);
});

// Example of handling dropdown change event
fromCurrencySelect.addEventListener('change', function() {
    const selectedCurrency = this.value;
    console.log('Selected Currency:', selectedCurrency);
    // Example of sending selected currency to the server via AJAX
    fetch('/your-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currency: selectedCurrency })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

toCurrencySelect.addEventListener('change', function() {
    const selectedCurrency = this.value;
    console.log('Selected Currency:', selectedCurrency);
});
// Initialize the socket connection
const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}

const map = L.map("map").setView([0, 0], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

const markers = {};

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    if (!markers[id]) {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    } else {
        markers[id].setLatLng([latitude, longitude]);
    }
    map.setView([latitude, longitude], 13);
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
