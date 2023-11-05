const sport = {
    data() {
        return {
            schedule:[
                { name: 'Name 1', date: '9:30 3.11.23', max_count: '11', count: '7'},
                { name: 'Name 2', date: '18:00 3.11.23', max_count: '15', count: '3'},
                { name: 'Name 3', date: '9:30 5.11.23', max_count: '23', count: '11'},
                { name: 'Name 4', date: '18:00 5.11.23', max_count: '9', count: '9'}
            ]
        }
    },
    methods: {
        ckick_add(item){
            if (Number(this.schedule[item].max_count) <= Number(this.schedule[item].count)){
                // console.log(this.schedule[item].flag)
                // console.log(this.schedule[item].max_count >= this.schedule[item].count)
                // console.log(this.schedule[item].max_count ,  this.schedule[item].count)
                return;
            }
            document.querySelectorAll('.add')[item].disabled = true;

            document.querySelectorAll('.del')[item].disabled = false;

            this.schedule[item].count++;
            this.schedule[item].flag = false;
        },
        ckick_del(item){
            if (this.schedule[item].flag == true){
                console.log(' err del')
                return;
            }
            this.schedule[item].count--;

            document.querySelectorAll('.add')[item].disabled = false;

            document.querySelectorAll('.del')[item].disabled = true;
        }
    },
    mounted() {
        for (let i = 0; i < this.schedule.length; i++) {
            if (Number(this.schedule[i].max_count) <= Number(this.schedule[i].count)){
                document.querySelectorAll('.add')[i].disabled = true;
            }
        }
    },
};
Vue.createApp(sport).mount('.box');