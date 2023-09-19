
        // Function to display host info
        function displayHostInfo() {
            const hostInfoElement = document.createElement("div");
            hostInfoElement.id = "host-info";
            document.body.appendChild(hostInfoElement);

            // Get the hostname and host IP address
            const hostname = window.location.hostname;
            const hostIP = window.location.host;


            // Update the host info element with the data
            hostInfoElement.textContent = `Host: ${hostname} | IP: ${hostIP}`;
        }

        // Call the function to display host info
        displayHostInfo();


        // Cart to store selected cookies and quantities
        const cart = {};

        // Function to add cookies to the cart
        function addToCart(cookieName, price) {
            if (cart[cookieName]) {
                cart[cookieName].quantity += 1;
            } else {
                cart[cookieName] = {
                    price: price,
                    quantity: 1
                };
            }

            updateCartTable();
            noOfCartItem();
        }

        // Function to update the cart table
        function updateCartTable() {
            const cartBody = document.getElementById("cart-body");
            cartBody.innerHTML = "";

            let totalAmount = 0;

            for (const cookieName in cart) {
                const { price, quantity } = cart[cookieName];
                const total = price * quantity;
                totalAmount += total;

                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${cookieName}</td>
                    <td>$${price.toFixed(2)}</td>
                    <td>${quantity}</td>
                    <td>$${total.toFixed(2)}</td>
                `;

                cartBody.appendChild(row);
            }

            document.getElementById("checkout-button").textContent = `Checkout ($${totalAmount.toFixed(2)})`;
            noOfCartItem();
        }

        // Function to handle the checkout process
        function checkout() {
            document.getElementById("payment").style.display = "block";
            updatePaymentTable();
        }

        // Function to update the payment table
        function updatePaymentTable() {
            const paymentBody = document.getElementById("payment-body");
            paymentBody.innerHTML = "";

            for (const cookieName in cart) {
                const { price, quantity } = cart[cookieName];
                const total = price * quantity;

                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${cookieName}</td>
                    <td>$${price.toFixed(2)}</td>
                    <td>${quantity}</td>
                    <td>$${total.toFixed(2)}</td>
                `;

                paymentBody.appendChild(row);
            }
        }

        // Function to process the payment
        function processPayment() {
            const selectedPaymentOption = document.querySelector('input[name="payment-option"]:checked');
            if (!selectedPaymentOption) {
                alert("Please select a payment option.");
                return;
            }

            const paymentOption = selectedPaymentOption.value;
            alert(`Payment successful using ${paymentOption.toUpperCase()}! Thank you for your order.`);
            // Reset the cart and hide the payment section
            cart = {};
            updateCartTable();
            updatePaymentTable();
            document.getElementById("payment").style.display = "none";

        }



    function addData() {
    const nameInput = document.getElementById('cookieName');
    const emailInput = document.getElementById('price');

    const name = nameInput.value;
    const email = emailInput.value;

    if (!name || !email) {
        alert('Please enter both name and email.');
        return;
    }

    fetch('http://localhost:8080/saveCart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}`,
    })
        .then(response => response.text())
        .then(message => {
            alert(message);
            // Optionally, update the HTML table or perform other actions
        })
        .catch(error => console.error('Error:', error));
}


