body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: #ffe6e6; /* Light pink background */
    overflow: hidden;
}

.slide {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    padding: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: white;
    text-align: center;
}

h1 {
    color: #ff4d4d; /* Bright red color for love */
}

p {
    color: #ff1a75; /* Deep pink color for hearts */
}

button {
    background-color: #ff4d4d; /* Bright red button */
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 20px;
}

button:hover {
    background-color: #ff1a75; /* Deep pink on hover */
}

#slide1 {
    display: block;
}

.cake {
    width: 100px;
    height: 100px;
}

.crumbled-paper {
    width: 300px;
    height: 200px;
    background: url('https://via.placeholder.com/300x200') no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.photo-montage img {
    margin: 10px;
}

.lined-paper {
    width: 300px;
    height: 200px;
    background: url('https://via.placeholder.com/300x200') no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.typing {
    white-space: pre-wrap;
    color: #ff4d4d;
    font-family: 'Courier New', Courier, monospace;
}
