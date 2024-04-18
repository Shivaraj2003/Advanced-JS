function getData(id, getNextdata) {
    setTimeout(() => {
        console.log('Data :', id);
        if (getNextdata)
            getNextdata();
    }, 2000)
}

//callback hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
})