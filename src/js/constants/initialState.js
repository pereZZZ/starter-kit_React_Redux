// Это изначальные данные для store нашего приложения, тут мы должы будем 
// указывать все данные которые мы будем отрисовывать, состояние компонентов здесь
// хранить не имеет смысла, а вот данные которые мы можем как-то менять, если в будущем 
// для получения этих данных мы будем использовать базу данных - да, тогда мы можем использовать store.

// Но на самом деле это лишь относительное соглашение, и javascript нас ни в чем не ограничивает. 

export default ({
    data : [{title: 'aaa'}],
    users: [{name: 'bbb'}]
});