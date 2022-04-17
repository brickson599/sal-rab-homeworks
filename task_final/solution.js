function sendRequest(name, phone, address, goods, sum) {
    let data = {
        client: `${name} ${phone}`, //строка, имя клиента + телефон
        order: { //объект, содержащий данные о заказе
            //строка с адресом доставки н-р: "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53"
            address: `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`,
            sum: sum, //стоимость заказа с учетом скидок и доставки
        },
        goods: [], //массив объектов с информацией о позициях заказа
    };
   
    for (let i = 0; i < goods.length; i++) { 
        data.goods[i] = { //массив объектов с информацией о позициях заказа
            title: goods[i].title, //title - название позиции
            count: goods[i].count, //count - количество в заказе
        };
    };
    
    let jsonData = JSON.stringify({data});

    return jsonData;
}
