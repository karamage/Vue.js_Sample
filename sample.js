/**
 * Created by masaakikakimoto on 2017/08/02.
 */

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' },
        ]
    }
})

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Hello Vue!"
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' },
        ]
    }
})


// 2ページ目 Vueインスタンス

var vm = new Vue({
    // オプション
})

var MyComponent = Vue.extend({
    //拡張オプション
})

// MyComponent から生成された全てのインスタンスは、予め定義された拡張オプションを利用して生成
var myComponentInstance = new MyComponent()

//var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: {
        a: 1
    },
    created: function () {
        console.log('a is: ' + this.a)
    }
})

// $watchはインスタンスメソッドです
vm.$watch('a', function (newValue, oldValue) {
    // このコールバックは vm.a の値が変わるときに呼ばれます
    console.log("newValue=" + newValue)
})

var vm3 = new Vue({
    el: '#example3',
    data: {
        message: 'Hello'
    },
    computed: {
        // 算出 getter関数
        reversedMessage: function () {
            // this は vm インスタンスを指します
            return this.message.split('').reverse().join('')
        }
    }
})

var vm4 = new Vue({
    el: '#demo4',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    }
})



