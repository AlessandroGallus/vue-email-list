const app = new Vue({

  el: '#app',

  data:{
      mails: [],
  },

  mounted(){
      this.callApi("https://flynn.boolean.careers/exercises/api/random/mail")
  },

  methods:{
      callApi(url){
          axios.get(url)
          .then((mail)=>{
            console.log(mail)
            this.mails.push(mail.data.response)
            if(this.mails.length < 10){
              this.callApi(url)
          }
          })
          .catch((err)=>{
              console.log(err)
          })
      },

      
  }

})