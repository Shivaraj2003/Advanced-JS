function api(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data',id);
            resolve('success');
        },2000);
});
}

async function getweatherData()
{
    await api(1);
    await api(2);
}


getweatherData();