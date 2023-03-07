function criaCalculadora() {//Estou criando uma factory function por questão de treino 

    return {
        //Eu estipulei que atributos ou variaveisficam na parte de cima e metodos na parte de baixo.NÃO É UMA REGRA EU ESCOLHI PRA MANTER O CODIGO ORGANIZADO.
        //ATRIBUTOS OU VARIAVEIS




        display: document.querySelector('.display'),//esse display está dentro do atributo do objeto pra acessar ele eu vou usar this.display
        btnClear:document.querySelector('.btn-clear'),

        inicia(){//
            this.cliqueBotoes();
            this.pressionaEnter();
            
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) =>{
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert('Conta invalida');
                return;
            }
        },
       

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText); 
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });

           
        },

        //METODOS

        btnParaDisplay(valor) {
            this.display.value += valor
        }

        
 
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();