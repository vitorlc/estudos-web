<template>
    <div class="container">
        <form>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Digite seu nome</label>
                <div class="col-sm-10">
                    <input class="form-control" id="nome" placeholder="Nome" v-model="pessoa.name">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input class="form-control" id="email" name="email" v-model="pessoa.email" placeholder="Email">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Idade</label>
                <div class="col-sm-2">
                    <input class="form-control" id="idade" name="idade" v-model="pessoa.idade" placeholder="idade">
                </div>
                <div class="col-sm-8">
                    <label>Sexo:</label>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <input class="form-check-input" id="sexoM" name="sexo" value="M" v-model="pessoa.sexo" type="radio"> Masculino
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <input class="form-check-input" name="sexo" id="sexoF" value="F" v-model="pessoa.sexo" type="radio"> Feminino
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="exampleTextarea">Endereço</label>
                <textarea class="form-control" id="endereco" name="endereco" v-model="pessoa.endereco" rows="3"></textarea>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" id="ativo" v-model="pessoa.ativo" >
                    Ativo
                </label>
            </div>
            <button type="button" @click="salvar()" class="btn btn-primary">Salvar</button>
        </form>
        <br>
        <h1 style="text-align: center">Lista de Pessoas Cadastradas</h1>
        <table class="table table-borderless">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">nome</th>
            <th scope="col">email</th>
            <th scope="col">idade</th>
            <th scope="col">endereço</th>
            <th scope="col">sexo</th>
            <th scope="col">ativo</th>
            <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pessoa in pessoas" :key="pessoa.id">
            <th scope="row">{{pessoa.id}}</th>
            <td>{{pessoa.name}}</td>
            <td>{{pessoa.email}}</td>
            <td>{{pessoa.idade}}</td>
            <td>{{pessoa.endereco}}</td>
            <td>{{pessoa.sexo}}</td>
            <td v-if="pessoa.ativo==true">Ativo</td>
            <td v-else>Não</td>
            <td><span @click="editar(pessoa.id)"><i class="far fa-edit"></i></span> | <span @click="remover(pessoa.id)"><i class="fas fa-trash-alt"></i></span></td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script src="./controllerPessoa.js"></script>

<style scoped>
label {
  font-weight: bold;
  font-size: medium;
}

</style>
