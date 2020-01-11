(function () {
    window.addEventListener('DOMContentLoaded', (event) => {

        const button = document.getElementById('generate');
        const advice = document.querySelector('.advice');

        button.addEventListener('click', async function () {
            let response = await request();
            advice.innerHTML = response['slip']['advice'];
        });

    });

    const request = async () => {
        const response1 = await fetch('https://api.adviceslip.com/advice');
        return await response1.json();
    }
})();
