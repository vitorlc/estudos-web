import swal from 'sweetalert2'

export default {
  name: 'pessoa',
  async created() {
    try {
        vm = this
        let response = await this.$http.get("/pessoa")
        this.pessoas = response.data
      } catch(err) {
        console.log(err)
      }
  },
  data () {
    return {
      pessoa: {},
      pessoas: []
    }
  },
  methods: {
    async salvar() {
      try {
        if(this.pessoa.id) {
          await this.$http.put(`/pessoa/${this.pessoa.id}`, this.pessoa)
        } else {
          await this.$http.post("/pessoa", this.pessoa)
        }
        swal('Pessoa salva com sucesso')
        .then(async (result) => {
          let response = await this.$http.get("/pessoa")
          this.pessoas = response.data
          this.pessoa = {}
        })
      } catch(err) {
        console.log(err)
      }
    },
    async editar(idPessoa) {
        if(idPessoa) {
            let response = await this.$http.get(`/pessoa/${idPessoa}`)
            console.log(response.data)
            this.pessoa = response.data
          }
      },
      async remover(idPessoa) {
        try {
          let response = await this.$http.delete(`/pessoa/${idPessoa}`)
          swal(response.data.msg)
          .then(async (result) => {
            response = await this.$http.get("/pessoa")
            this.pessoas = response.data
          })
        } catch(err) {
          console.log(err)
        }
      }
  }
}